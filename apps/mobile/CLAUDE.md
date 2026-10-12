# CLAUDE.md: mobile app

Engineering brief for `apps/mobile`. The root [`CLAUDE.md`](../../CLAUDE.md) still applies and wins on conflicts. Expo tooling notes: @AGENTS.md

## Stack
- **Expo SDK (latest stable) + React Native + TypeScript (strict, no `any`).**
- **Expo dev build, not Expo Go** (Skia and other native modules need it). `expo-dev-client` with EAS or local builds.
- **Navigation:** `expo-router`. Tabs: **Bugun** (Today), **Kundalik** (Diary), **Oy** (Moons), **So'rang** (Ask), plus a **centre moon ＋ button**. Tap opens the quick log sheet; long-press opens voice log. Settings and Family are a modal stack opened from the baby avatar.
- **Local DB:** `expo-sqlite` + **Drizzle ORM** (drizzle-kit migrations). The local DB is the source of truth for logs.
- **Backend (M3+):** Supabase (Postgres, Auth with phone OTP + Apple/Google, row-level security, Storage, Edge Functions, pgvector).
- **State:** TanStack Query for server and AI calls; Zustand for small UI state.
- **Motion:** `react-native-reanimated`, `react-native-gesture-handler`, `@gorhom/bottom-sheet`.
- **i18n:** `i18next` + `react-i18next` + `expo-localization`.
- **Payments (M8):** RevenueCat for store purchases, plus server-checked activation codes (sold outside the app via Payme/Click).
- **Mascot (M9):** Oyim drawn in code with `@shopify/react-native-skia`, animated with Reanimated. Placeholder component until then. Ask before installing (native module).
- **Tests:** Jest (`jest-expo`) + `@testing-library/react-native`. Later: Maestro for end-to-end.

Why this stack (and what was rejected) is in [`docs/decisions.md`](../../docs/decisions.md).

## Folders
```
src/
  app/          expo-router routes only. Thin: read params, render a feature screen.
  features/<f>/ screens, components, hooks, queries for one feature (today, log, diary, moons, ask, settings…)
  db/           Drizzle schema, migrations, repositories
  ui/           primitives: Text, Button, Card, Sheet, ListRow, Chip, Stepper, TimerButton, EmptyState
  theme/        tokens.ts (placeholder), night-mode logic
  i18n/         setup + locales/<locale>/<namespace>.json
  config/       regions.ts
  safety/       red-flag engine (rules data comes from /content/safety)
  ai/           askClient.ts (stub until M4)
  voice/        stt.ts, parseLog.ts (stub until M7)
  companion/    Oyim.tsx, useCompanion.ts
  lib/          haptics, time, units, ids
scripts/        translit-uz.ts and other dev scripts
```
Routes live in `src/app/` (Expo Router's default with a `src/` folder), so all app code sits under `src/`.

## Rules
- Screens call repository functions, never raw SQL.
- zod at every boundary: DB payloads, function responses, content files.
- Every component uses tokens; no raw hex values or magic numbers in screens.
- Haptics only through `src/lib/haptics.ts`.
- Times stored in UTC, shown in the device time zone. Amounts stored metric (ml, g, cm), converted only for display.

## Data model (core)
- `families`, `caregivers` (user ↔ family, role parent | helper, colour)
- `babies` (name, birth date or due date, mode baby | pregnancy | archived)
- `logs`: id, baby_id, caregiver_id, type (feed | sleep | diaper | growth | pump | note | milestone | photo), started_at, ended_at, payload (JSON, zod schema per type), created_at, updated_at, deleted_at, sync_status
- `moons` (baby_id, index, note, keepsake_generated_at)
- `cards`: read-only content pack, loaded from `/content/cards`
- Server only: `invites`, `entitlements`, `activation_codes`, `ai_questions` (opt-in)

Before M3 there is one local family and one local caregiver ("me"), so "who logged it" works from day one.

**Sync (M3):** an outbox. Each row has a device-made UUID `id`, `updated_at`, `deleted_at` (soft delete) and `sync_status`. Push pending rows, then pull rows changed since the last pull. Last write wins per row; entries are mostly appended, so conflicts are rare.

## Region config
`src/config/regions.ts`, typed, one entry per region:
```ts
type Locale = 'uz-Latn' | 'uz-Cyrl' | 'ru' | 'en';
type Region = {
  code: 'UZ' | 'KZ' | 'KG' | 'GLOBAL';
  emergencyNumber: string;    // UZ '103'; KZ and KG '112' (103 also works); GLOBAL from a device-locale table, fallback '112'
  defaultLocale: Locale;
  locales: Locale[];
  pricing: { channel: 'activation_code' | 'store'; displayPrices: Record<string, string> };
  contentPack: string;        // e.g. 'uz-v1'
  vaccinationSchedule?: string; // e.g. 'uz-moh', later
  units: 'metric' | 'imperial';
};
```
Detect from device locale/SIM, let the user override it in Settings, store it per family. Nothing region-specific anywhere else. KZ and KG numbers must be verified before launch (see `docs/open-questions.md`).

## i18n
- Locales `uz-Latn` (default), `uz-Cyrl`, `ru`, `en`. Files: `src/i18n/locales/<locale>/<namespace>.json`.
- No hardcoded user-facing strings (enforce with `eslint-plugin-i18next`).
- `uz-Latn` is written by hand. `uz-Cyrl` comes from the deterministic `scripts/translit-uz.ts`, then a person reviews it. Never use an LLM for it.
- Proper plural rules (Russian has 3 forms), `Intl` for dates and numbers. Layouts must survive long Uzbek words ("ovqatlantirish") and Cyrillic.
- Strings that still need native review go in `src/i18n/REVIEW.md`.

## UI and tokens
- `src/theme/tokens.ts` holds **placeholder** tokens: colours (day and night amber), spacing, radius, type scale, motion springs.
- Primitives in `src/ui/` stay minimal and unstyled-looking (neutral greys, system font). Shokhnur restyles them.
- Night mode: automatic 21:00–06:00 through tokens, with a manual override (auto / always / off) in Settings.
- Accessibility: hit targets ≥ 48dp (56 for log tiles), labels on every control, Dynamic Type, Reduce Motion.

## Stubs (until their milestone)
- **AI (M4):** `src/ai/askClient.ts` returns canned answers with citations from `/content/cards/sample-uz.json`. The real version calls `supabase.functions.invoke('ask')`; see `docs/spec/safety.md` for the pipeline.
- **Voice (M7):** `src/voice/stt.ts` exposes `transcribe(audioUri, lang: 'uz' | 'ru' | 'uz-ru') → { text }` and returns fixed text. `src/voice/parseLog.ts` turns text into proposed entries ("chap ko'krak 15 daqiqa, ho'l taglik" = left breast 15 min, wet diaper). The user always confirms the chips. Clips max 15 s with a clear recording indicator. Provider later: UzbekVoice.ai through an Edge Function proxy.
- **Companion (M9):** `src/companion/Oyim.tsx` takes `state` ('idle' | 'hello' | 'saved' | 'listening' | 'thinking' | 'proud' | 'fullMoon' | 'sleepy' | 'peek' | 'welcomeBaby' | 'hidden') and `phase` (0..1). For now a circle `View` with a text label. `useCompanion()` applies the rules in `docs/spec/companion.md` §6.

## Must test
Red-flag rules (run the shared case table in `/content/safety`, including "must NOT trigger" cases), the voice parser, sync merge logic, unit conversions, age/month calculation (month-day boundaries, the 31st), i18n key coverage (every key in all 4 locales).
