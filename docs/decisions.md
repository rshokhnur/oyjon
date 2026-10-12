# Decisions

| Date | Decision | Why |
| --- | --- | --- |
| 2026-10-12 | Single monorepo for docs, design and code | Small team, everything changes together; split later only if a backend needs its own deploy cycle. |
| 2026-10-12 | Expo (React Native + TypeScript) for the app | One codebase for Android and iOS, fast iteration, OTA updates via EAS. |
| 2026-10-12 | No backend in v1 | Tracking works offline on-device; keeps health data private and the MVP small. |
