# oyjon

A calm baby tracker for pregnancy and the first year, Uzbek first. Logs fill a monthly "moon" that becomes a keepsake, and an Uzbek AI assistant answers only from doctor-reviewed cards.

**Start with [`CLAUDE.md`](CLAUDE.md)**: the main spec, stack and milestones. It wins over everything else.

## Layout

| Folder | What's in it |
| --- | --- |
| `CLAUDE.md` | Project brief: product, stack, rules, milestones |
| `docs/` | Detailed specs (scope, screens and flows, companion, research), safety changelog, decisions |
| `design/` | UI design work, Figma links, exported assets |
| `apps/mobile/` | Expo + React Native + TypeScript app |
| `supabase/` | Backend (placeholder until Milestone 3) |

## Running the app

```bash
cd apps/mobile
npm install
npm start
```

Milestone 1 switches the app to an Expo dev build (`expo-dev-client`) with expo-router; run steps will be updated then.
