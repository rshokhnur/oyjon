# Oyim: animation and code handoff

For the next phase, animation and code (M9, Oyim). Written 12 Oct 2026.
- **Source of truth:** the Figma component **Oyim** on page 05 Brand, in the frame "Oyim v3 · Moonstone bot" (file `bg1FIs5wZOY9m0wUWkTJTe`, node 47-2, component set 46-132).
- **Background research:** `design/oyim/research.md`. Frames from Benji Taylor's clip are in `design/oyim-refs/` (local only, see `design/references.md`).

## 1. What we are building
- **Character:** Oyim is a Moonstone moon (warm core, amber rim, soft glow) with a bot companion's face. The face is two indigo pills and nothing else.
- **Expressions:** every mood comes from moving, squashing or tilting the two pills. The body changes only for big moments: a moon-phase shade for sleepy, a bloom for proud.
- **Motion model:** the target is Grok Bot's feel. Any state can melt into any other, and motion is driven by springs rather than keyframes.

## 2. How Grok Bot is built (what we know)
**From Benji Taylor (head of design at X and SpaceXAI):**
- 11 Aug 2026: "entirely made in code, with every state, shape and expression able to morph smoothly into the other", made with Grok Build.
- 29 Aug 2026: "one little circle with two eyes".
- He hasn't published source code or a technical write-up.

**From the live component on x.ai/bot** (`grok-bot-lazy` / `grok-bot-mark`), as read by two community reconstructions:
1. **Shapes are data.**
   - Each eye expression is a closed ring of about 50 `[x, y]` points.
   - Each head shape is a ring of 96 points, cast from the outline so every shape has the same point count.
2. **Morphing is point-by-point interpolation.** `lerpRing(a, b, t)` blends matching points. Every ring has the same number of points, so any eye can melt into any other eye, and any head into any other head.
3. **Motion is springs.**
   - Every animated value is a spring `{x, v, target}`, integrated as `v += (−2ζω·v − ω²(x − target))·dt` at a fixed 1/120 s step.
   - The springs are critically damped (ζ = 1), so they settle without wobble unless a state asks for it.
4. **A state machine sets targets.**
   - Each state chooses the eye expression, the head shape, the gaze and timing ranges.
   - Some states drive their targets with slow sine waves (breathing, bored drift).
   - Gaze follows the pointer through the same springs.
5. **One render loop.** A single `requestAnimationFrame` loop rebuilds the SVG path strings each frame and writes them straight to the DOM through refs. React never re-renders during animation.
6. **Extras:**
   - Effect layers for thinking dots, orbits, progress and confetti.
   - Eye placement is computed for each head shape: the code searches for the position that keeps the eyes large and near the centre.
   - Reduced motion is supported.

**Community repos. These are reconstructions, not official source, and the artwork belongs to xAI, so use them only to learn the technique:**

| Repo | What it is | Useful for |
|---|---|---|
| [sheng-yh/Reproduce-grok-bot-icon](https://github.com/sheng-yh/Reproduce-grok-bot-icon) | A single-file React + SVG reproduction. Has a spring engine, 30+ states, 25 eye expressions as point rings, and cursor tracking. | The cleanest read of the architecture: `shapes-module.js` (rings, `lerpRing`, eye placement) and `grokbot-module.js` (springs, state machine, render loop) |
| [iduu/grokbot-animation](https://github.com/iduu/grokbot-animation) | "Morph Bot": a framework-free Web Component, 39 states, 18 shapes, a visual timeline editor, and material presets including "Porcelain Bloom" | Seeing every state side by side, and testing timing and materials in the editor |
| [Eyadkelleh/Grok_bot](https://github.com/Eyadkelleh/Grok_bot) | A Vue 3 avatar studio with 14 states and a timeline that exports PNG, GIF and MP4 | Making quick motion previews to review |

**How the team works (John Bai, SpaceXAI, "Designing Grok Bot with Grok Bot"):**
- Agents work on the real Figma file through the Figma MCP.
- A motion agent builds prototypes with dials for timing, springs, distance, scale and easing.
- Feedback is given as plain words, like "hold the gaze down-left longer" or "the bounce is too exaggerated".
- We copy this: the Figma component is the source, and the motion dials below are what we tune.

## 3. Translating it for Oyim in React Native

**Option A: Skia + Reanimated (recommended).** Use `@shopify/react-native-skia` with `react-native-reanimated`. This is the closest match to how Grok Bot works:
- **Eyes as point rings.**
  - Export each eye state from Figma as a path.
  - Resample it to N = 48 points, starting from the same angle each time.
  - Morph between states with `interpolatePath` / a custom `lerpRing` in a worklet.
- **Springs:** use `withSpring` for every value: eye ring progress, gaze x/y, squash, glow, phase.
- **Rendering:**
  - Body: Skia `RadialGradient` and `Shadow`.
  - Phase shade: a Skia `Path` clipped to the body, with a small blur.
  - Glow: `Circle` + `RadialGradient`.
- **Runs on the UI thread:** no React re-render per frame, which matches Grok's single loop.
- **Pros:**
  - Full control and real morphing.
  - Gaze can follow taps and the newest log.
  - States are plain data in TypeScript, easy to test and to add.
  - No extra design tool in the loop.
- **Cons:**
  - The rendering has to be rebuilt in code.
  - Skia is a native module, so it needs approval as a heavy dependency (CLAUDE.md rule). We already plan a dev build, so it fits.

**Option B: Rive (the current plan in CLAUDE.md).** Build `assets/rive/oyim.riv` with state machine "main" and drive it with `rive-react-native`.
- **Pros:**
  - Designer-owned motion, with a visual editor.
  - Small files.
  - The state machine is built into the tool.
- **Cons:**
  - Morphing any state into any other needs vertex-matched shapes and a large blend graph.
  - Gaze following needs exposed inputs.
  - Every change is a round trip through the editor.
  - Glow and blur are limited compared to Skia.

**Recommendation: Skia + Reanimated for Oyim.** Her whole personality is "same two pills, morphing on springs", which is the part Rive is weakest at and Grok's approach shows works in code. Keep `src/companion/Oyim.tsx` with the same `state` and `phase` props from CLAUDE.md, so the placeholder swaps out cleanly. CLAUDE.md names Rive for the mascot, so this needs Shokhnur's sign-off, and Skia needs approval as a dependency. If Rive is kept, keep the same data model and use one Rive "eyes" component with matched vertices.

**Data model (both options):**
```ts
type EyeShape = { ring: [number, number][] }; // 48 points, centred, unit size
type OyimPose = {
  eyeL: EyeShape; eyeR: EyeShape;
  eyeLAt: [number, number]; eyeRAt: [number, number]; // centre in a 240 box
  tilt: number;          // degrees, +15 idle
  phase: number;         // 0 none … 1 full shade (Sleepy ≈ 0.42)
  glow: number;          // 0.45 sleepy, 1 normal, 1.7 proud
  squash: number;        // 1 = round
  extras?: { thinkingDots?: boolean; badge?: 'listening' };
};
```

## 4. States
These match the Figma component variants. Layer names are fixed in every variant: Glow, Body, Sheen, Phase, Eyes (Eye L, Eye R, Eye 3), Badge.

| State | Eyes (in the 240 box, body r = 80, centre 120) | Body | When |
|---|---|---|---|
| Idle | Pills 13×28 and 13×24, tilt +15°, at (130,96) and (156,100) | Normal glow | Resting on Today |
| Look | Same pills slide to (92,126) and (118,130) | — | Glances at the new log |
| Blink | Squash to 18×6 and 16×6 | — | Every 4 to 7 s |
| Wink | Left pill, right squashed to 16×6 | — | After "Saved" |
| Happy | Short pills 12×22, tilted −32° and +32° (`/ \`) | — | First log of the day |
| Surprised | Big pills 20×38 and 19×34, lower at (114,118) and (144,121) | — | Baby arrived, first smile |
| Sleepy | Dashes 16×5 and 14×5, low at (106,128) and (130,131) | Phase shade on the right, glow ×0.45, sheen dimmed | Night mode, 21:00–06:00 |
| Listening | Round pills 16×20 and 15×18 | Turquoise badge (#91CBC6) top right | Voice log recording |
| Thinking | Eyes become dots 12×12, plus Eye 3, in a row at y 120 | — | Ask is finding a card |
| Proud | Happy eyes | Glow ×1.7, wider | Full moon, keepsake |

Rules from CLAUDE.md still apply:
- At most 1 line per session on Today.
- Hidden during red flags and in loss mode.
- The user can mute her.
- Reduce Motion uses only static states.

## 5. Transitions and motion dials
Start from these values and tune them as dials, the way the xAI team does.

| Dial | Start value | Notes |
|---|---|---|
| Eye morph spring | stiffness 300, damping 30 (ζ ≈ 1) | Any state to any state |
| Blink | close 70 ms, hold 40 ms, open 120 ms | Random gap of 4–7 s; double blink 1 time in 6 |
| Gaze to new log | spring 300/30, hold 1.2 s, drift back over 600 ms | "Hold longer rather than bounce" |
| Saved | Happy → Wink → Idle, 4% squash, overshoot ≤ 1.02 | One beat, no wobble |
| Sleepy in | phase 0 → 0.42 over 900 ms, ease-out; glow fades with it | The terminator slides in from the right |
| Proud in | glow 1 → 1.7 over 600 ms | Optional: one slow 2% breath |
| Idle breath | scale 1 ↔ 1.01, 4 s sine | Off with Reduce Motion |
| Thinking dots | 3 dots, 120 ms stagger, 900 ms loop | Stops the moment an answer arrives |
| Reduce Motion | Snap between states | No squash, slide, breath or glow fade |

## 6. Build steps for the next phase
1. Export the eye paths per state from the Figma component. Write a small script to resample each to 48 points and save them as `src/companion/eyes.ts`.
2. Build `Oyim.tsx` in Skia: body, sheen, phase and glow, with the values copied from the Figma fills and effects.
3. Add the spring layer and the state machine, using the dials above as constants in one file.
4. Add a hidden dev screen with buttons for every state and sliders for the dials, to tune with Shokhnur.
5. Add `useCompanion()` rules from CLAUDE.md. Then add tests: every state renders, Reduce Motion snaps, and she is hidden in loss mode and red flags.
