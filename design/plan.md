# Design phase plan

We design first and build after. App milestones (M2 onwards in [`../docs/roadmap.md`](../docs/roadmap.md)) are paused until step 8 is done. M1 stays as it is: a plain grey skeleton that already works.

**Who does what:** Shokhnur is the designer and owns every visual call. Claude drafts, researches, sets up files, builds grey wireframes and checks the details (glyphs, contrast, safety rules, copy length).

| # | Step | What comes out | Shokhnur | Claude |
|---|---|---|---|---|
| 1 | **Brainstorm and direction** | [`01-brainstorm.md`](01-brainstorm.md): feeling, people, 3 brand directions, logo ideas, type shortlist | Pick a direction (or mix), answer the open questions | Write the options |
| 2 | **Research and references** | Moodboard page in Figma, reference screens for the ★★★ screens, a short interview script | Talk to 3 to 5 mums (friends are fine), react to the moodboard | Collect references, write the script, summarise what the mums said |
| 3 | **Flows map** | FigJam board with every screen from [`screens-and-flows.md`](../docs/spec/screens-and-flows.md) and the arrows between them | Mark what feels wrong or missing | Build the board |
| 4 | **Wireframes** | Grey, low-detail frames for the ★★★ screens first (Today, log sheet, feed form, timeline, moon, keepsake, Ask, answer, 103), then the rest | Mark up, move things around | Build them in Figma from the spec |
| 5 | **Brand** | Logo, app icon, colours (day and indigo night), type, Oyim the moon sketches | Design it | Briefs, Uzbek and Cyrillic glyph checks, contrast checks, export sizes |
| 6 | **Design system** | Figma variables (colours, spacing, radius, type), core components (button, card, tile, sheet, list row, chip, toast) | Style them | Set up the variables and component skeletons |
| 7 | **Screens and prototype** | Final screens in the spec's order, a clickable prototype, a quick test with 3 to 5 mums | Design and test | Keep notes per screen in [`screens/`](screens/), check every state (empty, loading, offline, error), check long Uzbek words |
| 8 | **Handoff** | Tokens and components in code, the M1 screens restyled | Final review | Pull the tokens from Figma into the app, then restart building at M2 |

Steps 2 and 3 can run at the same time. Oyim sketches start alongside step 4 so her phases match the moon system.

## Rules that shape the design
These come from [`../CLAUDE.md`](../CLAUDE.md) and [`../docs/spec/safety.md`](../docs/spec/safety.md). They hold through every step.
- The 103 emergency screen has no mascot, no AI text and no paywall. Red is used only there.
- Loss mode hides Oyim and every pregnancy card.
- No streaks, scores or red badges for missed logs.
- Night mode is deep indigo with warm saffron and cream text from 21:00 to 06:00, with no white flashes.
- Every string will exist in 4 languages: Uzbek Latin (default), Uzbek Cyrillic, Russian, English. Design with the longest one.
