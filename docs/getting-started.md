# Getting started

## Run the app
Needs Node.js 20+.
```bash
cd apps/mobile
npm install
npm start
```
From Milestone 1 the app runs on an Expo dev build instead of Expo Go. Dev build steps for iOS and Android are in [`apps/mobile/README.md`](../apps/mobile/README.md).

## Working with Claude Code
1. Install Claude Code: `npm install -g @anthropic-ai/claude-code`.
2. Run `claude` from the repo root. It reads `CLAUDE.md` automatically, and `apps/mobile/CLAUDE.md` when working on the app.
3. Ask for one milestone at a time, for example:

```
Read CLAUDE.md and apps/mobile/CLAUDE.md fully, then docs/roadmap.md and
docs/spec/screens-and-flows.md sections 1–2.

Build MILESTONE 1 ONLY, following the checklist in docs/roadmap.md.

Before installing anything, show me the full dependency list and flag the
heavy ones (native modules, config plugins, big libraries) with a reason.
Wait for my OK.

When M1 is done, stop and give me: what was built, how to run it (dev build
steps for iOS and Android), the file tree, known gaps, and questions.
```
4. Review, run it, and say "continue to M2" when ready.
