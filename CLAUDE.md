# CLAUDE.md: oyjon

Read this before every task. It's the top-level brief and it wins over everything else in the repo. When you're unsure, ask.

## What we're building
- **Name:** oyjon. The wordmark is always lowercase **`oyjon`**. All UI text uses sentence case ("Add feed", not "Add Feed").
- **What it is:** a calm baby tracker for pregnancy and the first year. Logs quietly fill a monthly "moon" that becomes a keepsake. An Uzbek AI assistant answers only from doctor-reviewed, cited cards.
- **Markets:** Uzbekistan first, then Kazakhstan and Kyrgyzstan, then worldwide, **in the same app**, driven by region config. No forks.
- **Owner:** Shokhnur, a designer, who designs the UI. Build working functionality with clean, minimal, unstyled components that are easy to restyle. Don't invent a visual style.

## Where things live
| Path | What |
| --- | --- |
| `apps/mobile/` | Expo app. **Read `apps/mobile/CLAUDE.md` before touching app code.** |
| `supabase/` | Backend: migrations, Edge Functions (from Milestone 3) |
| `content/` | Data shared by app and server: knowledge cards, red-flag rules and their test cases |
| `docs/spec/` | Product spec: [`product.md`](docs/spec/product.md), [`screens-and-flows.md`](docs/spec/screens-and-flows.md), [`safety.md`](docs/spec/safety.md), [`companion.md`](docs/spec/companion.md) |
| `docs/roadmap.md` | Milestones and what "done" means for each |
| `docs/decisions.md` | Why things are the way they are. Add an entry when you make a call that isn't obvious. |
| `docs/open-questions.md` | Things to verify or decide. Check before assuming. |
| `docs/research/` | Background research (market, AI, naming). Not spec. |
| `design/` | Shokhnur's design work and Figma links |

## How to work
- **One milestone at a time** from [`docs/roadmap.md`](docs/roadmap.md). Stop at the end of each for Shokhnur's review: say what was built, how to run it, known gaps, and questions.
- One branch and one PR per milestone (or smaller). Small commits, Conventional Commits.
- **Ask before adding a heavy dependency** (native module, config plugin, or > ~200 KB). Show the full dependency list before installing.
- Don't build ahead of the current milestone. Leave a `TODO(M<n>)` pointing at the milestone that covers it.
- `npm test` and `npx tsc --noEmit` in `apps/mobile` must pass before you call anything done. CI runs the same.

## Non-negotiables
These hold in every milestone. Details in [`docs/spec/safety.md`](docs/spec/safety.md).
1. **Red flags first.** The on-device red-flag check runs before any AI call, works offline, and shows a fixed emergency screen: no AI text, no mascot, no paywall, no rate limit.
2. **No diagnosis, no dosing, no "don't worry, it's normal".** AI answers come only from cited, doctor-reviewed cards; otherwise "no reviewed information, ask your doctor".
3. **Never paywalled:** safety screens, loss mode, logging, data export and account deletion.
4. **Loss mode** stops every pregnancy notification and card at once and hides the mascot.
5. **Privacy:** no analytics or ad SDKs, never log personal data, no API keys in the app. Secrets live only in `.env` (gitignored) or on the server. Only log counts go to the AI, never names or photos.
6. **Calm:** no streaks, no guilt, no red badges for missed logs, no scores.
7. **No hardcoded user-facing strings** and nothing region-specific outside region config.
8. Safety rule changes need a test case, a `docs/SAFETY_CHANGELOG.md` entry and doctor sign-off (`TODO(doctor)` until then).
