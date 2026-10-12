# Roadmap

Work one milestone at a time and stop at the end of each for Shokhnur's review. Each milestone is done when its checklist is done and `npm test` + `npx tsc --noEmit` pass.

> **Design first (from Oct 12, 2026):** M2 and later wait until the design phase in [`../design/plan.md`](../design/plan.md) is done.

## M0 Repo setup ✓
Monorepo, brief, specs, placeholder Expo app, CI typecheck.

## M1 Foundation
- [ ] Expo app on a dev build (`expo-dev-client`), expo-router with `src/app/`
- [ ] Tabs: Bugun, Kundalik, Oy, So'rang + centre moon ＋ (tap: quick log sheet; long-press: voice placeholder). Kundalik, Oy, So'rang are placeholders
- [ ] Settings modal from the baby avatar (placeholder) with a language switch
- [ ] i18n for uz-Latn, uz-Cyrl, ru, en, with a key-coverage test
- [ ] `src/config/regions.ts` (UZ, KZ, KG, GLOBAL) with a test
- [ ] Placeholder tokens (day + night) and unstyled primitives in `src/ui/`
- [ ] expo-sqlite + Drizzle: schema and migration for babies, caregivers and logs (with sync columns), typed repository, zod payload per log type
- [ ] Seed one local family, caregiver and baby
- [ ] Quick log sheet: feed (breast L/R timer, bottle ml), sleep (start/stop + manual range), diaper (wet/dirty/both); time defaults to now and is adjustable; saves to SQLite with a "Saved" toast and haptic
- [ ] Today: "time since" cards for feed/sleep/diaper (with who logged it), the running timer, today's timeline newest first with edit/delete + undo, empty state
- [ ] Tests: regions, i18n coverage, payload validation, time-since and baby-age helpers
- [ ] Ask Shokhnur to approve the dependency list before installing

## M2 Diary
Timeline by day with a day strip, edit/delete with undo, patterns (7/30 days), growth + WHO charts (on device).

## M3 Accounts and sync
Supabase auth (OTP + Apple/Google), families, invites by link, row-level security, outbox sync, offline banner.

## M4 Safety and Ask
Red-flag engine + emergency screen + shared test cases; Ask UI with the stub client; card library from the sample pack; then the real Edge Function (pgvector + Gemini).

## M5 Moons
Moon progress, milestones and photos, full-moon keepsake card (render to image, share).

## M6 Pregnancy and loss mode
Pregnancy Today, weekly cards, baby arrived, loss mode.

## M7 Voice
Recording, STT via the UzbekVoice proxy, parser chips.

## M8 Plus
Entitlements, RevenueCat, activation codes, paywall sheet; limits enforced on the server.

## M9 Oyim
Rive integration with the state machine, `useCompanion` rules.

## M10 Release
Privacy and consent, export/delete, store assets, EAS builds, beta with 15–20 moms.

## In parallel from day one (not code)
Content is the critical path: ~150 Uzbek cards, 40 pregnancy cards, the red-flag rule set and wording, all doctor-reviewed. See [`spec/product.md`](spec/product.md) §2.
