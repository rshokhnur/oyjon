# Content

Data shared by the app and the server, so both always use the same version.

- `cards/`: knowledge cards per content pack (e.g. `uz-v1`). Each card: id, title, body (120–200 words), age range, topics, sources, reviewing doctor and date. A small `sample-uz.json` feeds the Ask stub in M4.
- `safety/`: red-flag rules (`red-flags.v<n>.json`) and their test cases (`red-flag-cases.json`). See [`../docs/spec/safety.md`](../docs/spec/safety.md).

Every file here is validated with zod when loaded. Medical content needs doctor sign-off before it ships.
