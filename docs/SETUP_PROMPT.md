# Setup: start Oyjon with Claude Code

## Steps for you (Shokhnur)
1. Install **Node.js LTS** (20 or newer) from https://nodejs.org and check it with `node -v`.
2. Install **Claude Code**: `npm install -g @anthropic-ai/claude-code` (see https://docs.anthropic.com/en/docs/claude-code).
3. Unzip `oyjon-claude-code.zip` wherever you keep projects.
4. `cd oyjon-claude-code`
5. Optional but recommended: `git init` so you can review every change.
6. Run `claude` and sign in when asked.
7. Paste the prompt below and press Enter.
8. When it stops, review the result, run the app (it will tell you how), and say "continue to M2" when you're ready.

## Prompt to paste
```
Read CLAUDE.md fully, then skim everything in docs/ (especially oyjon-screens-and-flows.md sections 1–2 and the v1 scope in baby-app-name-and-v1.md). CLAUDE.md wins on any conflict.

Then scaffold MILESTONE 1 ONLY, inside this folder:
1. Expo + React Native + TypeScript (strict) project, configured for an Expo dev build (expo-dev-client), with expo-router.
2. Navigation: 4 tabs, Bugun, Kundalik, Oy, So'rang, plus a centre moon ＋ button (tap = quick log sheet; long-press = voice log placeholder screen). Kundalik/Oy/So'rang can be simple placeholders for now. Settings modal opened from the baby avatar (placeholder).
3. i18n with i18next for uz-Latn (default), uz-Cyrl, ru, en. No hardcoded strings. A language switch in Settings. Include a key-coverage test.
4. src/config/regions.ts (UZ 103, KZ/KG 112, GLOBAL) as described in CLAUDE.md, with a tiny test.
5. Placeholder design tokens (src/theme/tokens.ts, day plus night) and minimal unstyled UI primitives in src/ui/.
6. expo-sqlite + Drizzle: schema and migration for babies and logs (with id/updated_at/deleted_at/sync_status for future sync), a typed repository, zod payload schemas per log type. Seed one local baby. No Supabase yet.
7. Quick log sheet: feed (breast L/R timer, bottle ml), sleep (start/stop + manual range), diaper (wet/dirty/both), time defaulting to now and adjustable. Saves to SQLite, "Saved" toast, haptic.
8. Bugun (Today) screen: "time since" cards for last feed/sleep/diaper (who logged it), the running timer, and today's timeline (newest first) with edit/delete + undo. Empty state.
9. Tests: regions, i18n coverage, log payload validation, time-since and baby-age helpers. Make `npm test` and `npx tsc --noEmit` pass.

Rules:
- Before installing anything heavy (native modules, config plugins, big libraries), list it with the reason and ASK me first. Light, standard Expo packages are fine. Show me the full dependency list before running the install.
- Keep components minimal and token-based. I will design the UI myself.
- Don't build Supabase, AI, voice, Rive, payments or anything beyond M1. Leave TODOs that point to the CLAUDE.md milestones.
- When M1 is done, STOP. Give me: what was built, how to run it (dev build steps for iOS/Android), the file tree, known gaps, and questions for me. Then wait for my review.
```
