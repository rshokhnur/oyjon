# Decisions

Short log of calls that aren't obvious from the code. Newest at the bottom.

| Date | Decision | Why |
| --- | --- | --- |
| 2026-10-12 | Single monorepo: docs, design, content and code together | Solo project; spec, content and code change together. App in `apps/mobile`, backend in `supabase/`. |
| 2026-10-12 | Native Expo app first, not a Telegram Mini App | The research leaned Mini App for Uzbek reach and payments. We picked native for polish, offline logging at 3am, widgets and the global market. A Mini App on the same Supabase backend stays an option. |
| 2026-10-12 | expo-sqlite + Drizzle locally, Supabase on the server | Logging must work instantly and offline, so local SQLite is the source of truth. Drizzle gives typed queries and migrations with no runtime weight. Supabase gives Postgres, auth, RLS per family, storage, Edge Functions and pgvector (for card retrieval) in one cheap place. |
| 2026-10-12 | Rejected for v1: PowerSync/ElectricSQL, WatermelonDB, Firebase | PowerSync/Electric: more moving parts or cost (revisit if sync gets painful). WatermelonDB: older, less typed. Firebase: weaker relational queries, harder data residency. |
| 2026-10-12 | Gemini Flash-class for AI answers | Best Uzbek Latin scores on the UzLiB benchmark at low cost (see `research/market-and-ai.md`). |
| 2026-10-12 | Rive for the mascot | One file with a state machine whose phase can be driven by data. Needs a dev build. |
| 2026-10-12 | Uzbekistan payments via activation codes sold outside the app | Uzcard/Humo can't pay in the stores, and store rules limit linking to outside payment. Codes keep the app compliant. |
| 2026-10-12 | Red-flag rules and test cases live in `/content/safety` | The device and the Edge Function must run the exact same rules. |
| 2026-10-12 | Routes in `apps/mobile/src/app/` | Expo Router's default when there's a `src/` folder, so all app code sits in one place. |
| 2026-10-12 | M1 log sheet uses expo-router's native `formSheet`, not `@gorhom/bottom-sheet` | Native sheet with no extra deps for M1. So `react-native-reanimated`, `react-native-gesture-handler` and `@gorhom/bottom-sheet` aren't direct deps yet; add them when motion work needs them. |
| 2026-10-12 | Design phase before M2: brainstorm, flows, wireframes, brand, design system, screens | Shokhnur wants the look and flows settled in Figma before more code. M1 stays as a grey skeleton. Plan in `design/plan.md`. |
