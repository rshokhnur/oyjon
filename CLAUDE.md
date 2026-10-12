> In this monorepo the app lives in `apps/mobile/`. Code paths below (`app/`, `src/`, `content/`, `scripts/`, `assets/`) are relative to it; `docs/` is at the repo root.

# CLAUDE.md: Oyjon project brief

Read this before every task. The detailed specs are in `docs/`:
- `baby-app-name-and-v1.md`: v1 scope, free vs paid, plan, launch content
- `oyjon-screens-and-flows.md`: screens, states, flows (mermaid), motion moments
- `oyjon-companion.md`: Oyim the moon companion
- `baby-app-uzbek-ai.md`: market, AI safety, Uzbek language, payments research

If the docs and this file conflict, **this file wins**. Ask when unsure.

## Product
- **Name:** Oyjon. The wordmark is always lowercase **`oyjon`**. All UI text uses sentence case ("Add feed", not "Add Feed").
- **What it is:** a calm baby tracker that covers pregnancy and the first year. Logs quietly fill a monthly "moon" that becomes a keepsake. An Uzbek AI assistant answers only from doctor-reviewed, cited cards.
- **Markets:** Central Asia first (Uzbekistan, then Kazakhstan and Kyrgyzstan), then worldwide, **in the same app**, driven by region config. No forks.
- **Owner:** Shokhnur, a designer. **He designs the UI themselves.** Build working functionality with clean, minimal, unstyled components that are easy to restyle later. Don't invent a visual style.

## Stack
- **Expo SDK (latest stable) + React Native + TypeScript (strict).**
- **Expo dev build, not Expo Go.** Rive needs native code. Use `expo-dev-client` with EAS or local builds.
- **Navigation:** `expo-router`. Tabs: **Bugun** (Today), **Kundalik** (Diary), **Oy** (Moons), **So'rang** (Ask), plus a **centre moon ＋ button**. Tap opens the quick log sheet; long-press opens voice log. Settings and Family are a modal stack opened from the baby avatar.
- **Local DB:** `expo-sqlite` + **Drizzle ORM** (with drizzle-kit migrations).
- **Backend:** **Supabase** (Postgres, Auth with phone OTP + Apple/Google, row-level security, Storage, Edge Functions, pgvector).
- **State:** TanStack Query for server and AI calls; Zustand for small UI state. The DB is the source of truth for logs.
- **Motion:** `react-native-reanimated` and `react-native-gesture-handler`; `@gorhom/bottom-sheet` for sheets.
- **i18n:** `i18next` + `react-i18next` + `expo-localization`.
- **Payments (later milestone):** RevenueCat for store purchases, plus a server-checked activation code (codes are sold outside the app via Payme/Click).
- **Mascot (later):** `rive-react-native`, used through a placeholder component until then.

**Why expo-sqlite + Drizzle + Supabase:**
- Logging must work instantly and offline at 3am. A local SQLite database as the source of truth gives that.
- Drizzle gives typed queries and migrations with no runtime weight.
- Supabase gives Postgres, auth, row-level security per family, storage and Edge Functions in one place. It's cheap and simple for a solo developer, and Postgres + pgvector also serves the AI card retrieval.
- Sync is a simple outbox: each row has `id` (UUID made on the device), `updated_at`, `deleted_at` (soft delete) and `sync_status`. Push pending rows, then pull rows changed since the last pull. Last write wins per row. Entries are mostly appended, so conflicts are rare.
- Considered and rejected for v1: PowerSync/ElectricSQL (great, but more moving parts or cost; revisit if sync gets painful), WatermelonDB (older, less typed) and Firebase (weaker relational queries, harder data residency).

## i18n (from day 1)
- Locales: **`uz-Latn` (default), `uz-Cyrl`, `ru`, `en`.** Files: `src/i18n/locales/<locale>/<namespace>.json`.
- **No hardcoded user-facing strings.** Lint for it (e.g. `eslint-plugin-i18next`) or review for it.
- Write `uz-Latn` by hand. `uz-Cyrl` may be produced by a deterministic transliteration script (`scripts/translit-uz.ts`) and then reviewed by a person; never use an LLM for it.
- Use proper plural rules (Russian has 3 forms) and `Intl` for dates and numbers. Layouts must survive long Uzbek words (e.g. "ovqatlantirish") and Cyrillic.
- Mark draft strings with a `"_review": true` sidecar or keep them in a `REVIEW.md` list; Uzbek and Russian need native review.

## Region config
`src/config/regions.ts` is typed, with one entry per region:
```ts
type Region = {
  code: 'UZ' | 'KZ' | 'KG' | 'GLOBAL';
  emergencyNumber: string;           // UZ '103', KZ '112' (also 103), KG '112' (also 103), GLOBAL: from device locale table, fallback '112'
  defaultLocale: Locale; locales: Locale[];
  pricing: { channel: 'activation_code' | 'store'; displayPrices: Record<string,string> }; // e.g. UZ 15,000 UZS/mo, 99,000 UZS first year
  contentPack: string;               // e.g. 'uz-v1' cards; global packs later
  vaccinationSchedule?: string;      // 'uz-moh' later
  units: 'metric' | 'imperial';
};
```
- Detect the region from device locale/SIM, let the user override it in Settings, and store it per family.
- **Verify the KZ and KG numbers before launch.**
- Nothing region-specific is allowed anywhere else in the code.

## Data model (core)
`families`, `caregivers` (user ↔ family, role parent/helper, colour), `babies` (name, birth date or due date, mode baby|pregnancy|archived), `logs` (id, baby_id, caregiver_id, type feed|sleep|diaper|growth|pump|note|milestone|photo, started_at, ended_at, payload JSON validated per type with zod, created_at, updated_at, deleted_at, sync_status), `moons` (baby_id, index, note, keepsake_generated_at), `cards` (read-only content pack), `ai_questions` (server only, opt-in).
- Times are stored in UTC and shown in the device's time zone.
- All amounts are metric internally (ml, g, cm) and converted only for display.

## Safety rules (non-negotiable)
1. **Red-flag check runs on the device, before any AI call, and works offline.** The rules live in `src/safety/redFlags.ts` as data (a versioned JSON of rules). They take the question text plus the baby's age, mode and recent logs (e.g. no wet diaper in 12h, fever ≥38°C in a baby under 3 months).
2. A match shows the **RedFlagScreen** immediately: fixed, doctor-approved text, a big **Call {region.emergencyNumber}** button (`Linking.openURL('tel:…')`), a "Call your doctor" button, and 3 fixed "while waiting" lines. **No AI text, no mascot, no paywall, no rate limit, no network needed.**
3. The server checks again for red flags in the Edge Function. If it matches, it returns `{type:'red_flag'}`, never an answer.
4. **No diagnosis, no medicine dosing, no "don't worry, it's normal".** Answers only from cited cards; otherwise "no reviewed information — ask your doctor".
5. **Loss mode** stops every pregnancy notification and card at once. The mascot is hidden. Safety features, data export and account deletion are **never paywalled**.
6. Rule changes need a test and a note in `docs/SAFETY_CHANGELOG.md` (create it). The copy must be approved by a doctor (leave `TODO(doctor)` markers).

## AI assistant (stub first)
- App → `supabase.functions.invoke('ask')`. **No API keys in the app, ever.** The Gemini key lives in the Edge Function's secrets.
- Function pipeline: red-flag recheck → embed question → pgvector top-k over `cards` for this region's content pack and the baby's age → Gemini (Flash-class) with a strict prompt that says "answer only from these cards, cite [n], 3–5 sentences, Uzbek Latin" → validate that citations exist → return `{answer, citations[], reviewedBy}`.
- The context sent is **log counts only** (24h/7d), never names or photos.
- **v1 stub:** `src/ai/askClient.ts` returns canned answers from local sample cards (`content/cards/sample-uz.json`) with citations, so the UI can be built without a backend.
- Free limit (3 questions a week) is enforced on the server. Red flags bypass all limits.

## Voice (stub)
- `src/voice/stt.ts` interface: `transcribe(audioUri, lang:'uz'|'ru'|'uz-ru') → {text}`. Provider: **UzbekVoice.ai** via an Edge Function proxy (key stays on the server).
- v1: the stub returns fixed text. The parser `src/voice/parseLog.ts` turns text into proposed entries (e.g. "chap ko'krak 15 daqiqa, ho'l taglik" = left breast 15 minutes, wet diaper). Unit test it heavily. The user always confirms the chips.
- Clips are 15 seconds max. Show a clear recording indicator.

## Companion: Oyim (placeholder)
- `src/companion/Oyim.tsx` takes `state: 'idle'|'hello'|'saved'|'listening'|'thinking'|'proud'|'fullMoon'|'sleepy'|'peek'|'welcomeBaby'|'hidden'` and `phase: 0..1`.
- For now: a simple circle `View` with a text label. Later it gets swapped for a Rive file (`assets/rive/oyim.riv`, state machine "main").
- `useCompanion()` decides when she speaks: at most 1 line per session on Today, only on the first log of the day, never during red flags or loss mode, and the user can mute or hide her. With Reduce Motion on (`AccessibilityInfo`), only static states are used.

## UI and design tokens
- `src/theme/tokens.ts` holds **placeholder** tokens: colours (day and night amber), spacing, radius, type scale, motion springs. **Every component uses tokens; no raw hex values or magic numbers in screens.**
- Primitives in `src/ui/` (Text, Button, Card, Sheet, ListRow, Chip, Stepper, TimerButton, EmptyState) stay **minimal and unstyled-looking** (neutral greys, system font). Shokhnur will restyle them.
- Night mode switches automatically from 21:00 to 06:00 through tokens.
- Accessibility: hit targets ≥ 48dp (56 for log tiles), labels on every control, Dynamic Type, Reduce Motion.
- Haptics through one helper, `src/lib/haptics.ts`.

## Conventions
- Folders: `app/` (expo-router routes only, thin), `src/features/<feature>/` (components, hooks, queries), `src/db/` (schema, migrations, repos), `src/ui/`, `src/theme/`, `src/i18n/`, `src/config/`, `src/safety/`, `src/ai/`, `src/voice/`, `src/companion/`, `src/lib/`.
- TypeScript strict, no `any`. zod at every boundary (DB payloads, function responses).
- Use function components and hooks. Screens use repository functions, never raw SQL.
- Small commits with clear messages (Conventional Commits). Don't add a dependency without asking if it's heavy (native module, > ~200 KB, or needs config plugins).
- ESLint + Prettier, `tsc --noEmit` clean before finishing any task.
- No analytics or ad SDKs. Never log personal data. Secrets only in `.env` (gitignored) or the server.

## Testing
- **Jest + @testing-library/react-native** for unit and component tests.
- **Must test:** red-flag rules (a table of cases, including "must NOT trigger" ones), the voice parser, sync merge logic, unit conversions, age/month calculation (month-day boundaries, 31st of the month), i18n key coverage (every key in all 4 locales).
- Later: Maestro for end-to-end tests of the log flow and the red-flag flow.
- Run `npm test` and `npx tsc --noEmit` before saying a task is done.

## Milestones
- [ ] **M1 Foundation:** Expo app (TypeScript, dev client config), expo-router tabs + centre ＋, i18n (4 locales), region config, tokens + UI primitives, SQLite + Drizzle schema for babies and logs, quick log sheet (feed/sleep/diaper + timers), Today ("time since" cards + today's timeline), local-only seed baby.
- [ ] **M2 Diary:** timeline by day with day strip, edit/delete with undo, patterns (7/30 days), growth + WHO charts (on device).
- [ ] **M3 Accounts and sync:** Supabase auth (OTP + Apple/Google), families, invites by link, row-level security, outbox sync, offline banner.
- [ ] **M4 Safety and Ask:** red-flag engine + RedFlagScreen + tests; Ask UI with the stub client; card library from the sample pack; then the real Edge Function (pgvector + Gemini).
- [ ] **M5 Moons:** moon progress, milestones and photos, full-moon keepsake card (render to image, share).
- [ ] **M6 Pregnancy and loss mode:** pregnancy Today, weekly cards, baby arrived, loss mode.
- [ ] **M7 Voice:** recording, STT via the UzbekVoice proxy, parser chips.
- [ ] **M8 Plus:** entitlements, RevenueCat, activation codes, paywall sheet; limits enforced on the server.
- [ ] **M9 Oyim:** Rive integration with the state machine, `useCompanion` rules.
- [ ] **M10 Release:** privacy and consent, export/delete, store assets, EAS builds, beta.

**Work one milestone at a time. Stop at its end for Shokhnur's review.**
