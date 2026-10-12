# Oyim research: Grok Bot and Benji Taylor's workflow

Checked 12 Oct 2026. Sources: Benji Taylor's post on X (11 Aug 2026, with a 30 s animation clip), John Bai's "Designing Grok Bot with Grok Bot" (24 Aug 2026), and the x.ai/bot product page. Frames from the clip are in `design/oyim-refs/` (local only, see `design/references.md`).

## What the Grok Bot character is
- **One flat body.** A solid near-black blob with no gradient, outline or shading. It is usually a circle, and it morphs into an egg, a rounded hexagon or a soft triangle.
- **The eyes are the whole face.** Two white rounded pills sit off-centre, up and to the right, tilted about 15°. They read as eyes and as a specular highlight at the same time, so the body needs no gloss. There is no mouth, no brows and no cheeks.
- **The second eye is a little shorter.** That gives a hint of perspective and gaze.
- **Expressions come from the eye geometry only:**
  - Idle: two tilted pills.
  - Blink: the pills flatten to short dashes.
  - Wink or smirk: one pill and one dash.
  - Happy: two short pills leaning toward each other (`/ \`).
  - Surprised: big, tall pills that drop lower on the face.
  - Notification: round dots, plus a small coloured badge on the rim.
  - Gaze: the same pills slide to another part of the face.
- **The body morphs too.** It becomes "!" for alerts, three dots for thinking, a single dot to minimise, and coloured orbit trails while it works.

## How it was made (the workflow)
- **Benji Taylor:** the icon is "entirely made in code, with every state, shape and expression able to morph smoothly into the other", and it was built with Grok Build. Every state shares one geometry system, so any state can tween to any other.
- **John Bai:** design agents work on the real Figma file through the Figma MCP ("Figma Bro"). A motion agent ("Motion God") builds tunable motion prototypes from plain descriptions, with timing, springs, distance, scale and easing as dials. The feedback was concrete, like "hold the gaze down-left longer" and "the bounce is too exaggerated".
- **Principles:**
  - Prototype early.
  - Work from the real asset, not an approximation.
  - Keep the Figma file as the source of truth.
  - Human judgment makes the final call.

## What we take for Oyim (Porcelain)
1. Keep the porcelain saffron sphere. Then strip the face down to **two indigo pills**: tilted, up and to the right, with the second one shorter. No mouth.
2. Build **every state from the same two rectangles**: idle, look, blink, wink, happy, surprised, sleepy, listening, thinking and proud. This lets Figma Smart Animate and later Rive morph between any two states, the same way Grok Bot does.
3. Use the body only for big moments. The moon phase shadow means sleepy, a glow means proud, and three dots mean thinking.
4. Write motion as tunable numbers, not fixed values: blink timing, gaze hold, and the spring for "saved".
5. Make it a Figma component set: the file is the source of truth, and Rive is built from it in M9.

## How the Grok Bot is built in code (follow-up)
- **What Benji has said:** two posts. On 11 Aug 2026 he wrote that it's "entirely made in code, with every state, shape and expression able to morph smoothly into the other", built with Grok Build. On 29 Aug 2026 he wrote that it's "one little circle with two eyes". He hasn't published source code or a write-up.
- **What's public:** the live component on x.ai/bot (`grok-bot-lazy` / `grok-bot-mark`). Community reverse-engineers read it and describe the same architecture:
  - **Shapes and eyes are data.** Each eye expression is a ring of about 50 points, and each head shape is a 96-point ring. Any state morphs into any other by interpolating point by point (`lerpRing`), which gives the "melting" transitions.
  - **Motion is physics, not keyframes.** Every animated value is a critically damped spring stepped at 1/120 s. A state machine sets spring targets per state, and gaze follows the cursor through the same springs.
  - **One `requestAnimationFrame` loop** writes the SVG paths directly. React never re-renders during animation. Confetti and orbit effects are extra SVG layers.
  - **Eye placement is computed:** for each head shape, the code searches for the eye position that keeps the eyes as large as possible and close to the centre.
- **Community references, not official source:**
  - github.com/sheng-yh/Reproduce-grok-bot-icon: SVG, React and spring physics, 30+ states.
  - github.com/iduu/grokbot-animation: Morph Bot, 39 states, a framework-free Web Component and a timeline editor.
  - github.com/Eyadkelleh/Grok_bot: a Vue avatar studio.
- **For Oyim:** the same approach fits React Native with Reanimated: eye paths as point rings, spring-driven values, one shared value per eye. Rive is the other route (M9). Either way, the Figma component's shared layers are the data source.
