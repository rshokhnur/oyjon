# Oyjon

A mobile app for young mothers: pregnancy and baby care guidance, trackers, and a supportive community, built for Uzbekistan first.

Everything lives in this one repo: plan, design, and code.

## Layout

| Folder | What's in it |
| --- | --- |
| `docs/` | Product plan, roadmap, decisions. Start with [`docs/product-plan.md`](docs/product-plan.md). |
| `design/` | Brand, design principles, screen specs, exported assets. Figma links go in [`design/README.md`](design/README.md). |
| `apps/mobile/` | The Expo (React Native + TypeScript) app. |
| `backend/` | Placeholder. Empty until the app needs a server (accounts sync, community). |

## Running the app

```bash
cd apps/mobile
npm install
npm start        # scan the QR code with Expo Go
```

## Why one repo

At this stage one repo is simpler: plans, designs and code change together and stay linked in the same PRs. Split out only if a backend grows its own team or deploy cycle.
