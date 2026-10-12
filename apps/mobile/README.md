# oyjon mobile

Expo (SDK 57) + React Native + TypeScript. Engineering brief: [`CLAUDE.md`](CLAUDE.md).

## Run it on a dev build
The app uses native modules (expo-sqlite, later Skia), so it runs on a **dev build**, not Expo Go. You build the dev app once, install it, and from then on code changes reload instantly.

```bash
cd apps/mobile
npm install
```

**Option A: build in the cloud with EAS (no Xcode or Android Studio needed)**
```bash
npx eas-cli@latest login
npx eas-cli@latest init                                   # links the project to your Expo account, once
npx eas-cli@latest build --profile development --platform android   # or ios
```
Install the build from the link EAS gives you. iPhone builds need an Apple Developer account and your device registered (`npx eas-cli@latest device:create`). For the iOS Simulator use `--profile development-simulator`.

**Option B: build locally**
```bash
npx expo run:ios       # needs Xcode on a Mac
npx expo run:android   # needs Android Studio
```

**Then, every day:**
```bash
npm start              # opens the dev server; open the oyjon dev app on your phone
```

Rebuild the dev app only when a native package is added or `app.json` changes.

## Checks
```bash
npm test               # Jest
npx tsc --noEmit       # typecheck
```

## Useful scripts
- `npm run db:generate`: after changing `src/db/schema.ts`, generates a new migration in `src/db/migrations`.
- `npm run i18n:cyrl`: regenerates `uz-Cyrl` strings from `uz-Latn` (then a person reviews them).
