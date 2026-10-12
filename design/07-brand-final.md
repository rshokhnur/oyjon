# Brand, final (12 Oct 2026)

Everything below lives on the 05 Brand page in [Figma](https://www.figma.com/design/bg1FIs5wZOY9m0wUWkTJTe/oyjon-app). The earlier notes in `03` to `05` explain how we got here.

## Colour: Saffron and indigo
Every indigo shares one OKLCH hue (275) and every neutral leans warm. Picks from the "Colour decisions" board (node 72-902):

| Role | Value |
|---|---|
| Indigo | OKLCH hue 275. Ink `#212750`, deep `#4751A2` |
| Saffron (the moon) | `oklch(0.83 0.14 84)`, about `#F1BF4E`. Night saffron `#EEC05B` |
| Second accent | Turquoise `oklch(0.80 0.06 190)`, about `#91CBC6`. Small signals only, never buttons |
| Paper | `#FAF7EF`, surface `#FFFEFA`, sunken `#F5EFE0`, line `#E7E1D6` |
| Night | `#0C0F27`, surface `#141836`, line `#202646`, cream text `#F2E3BF` |
| Night gradient | Linear `#262D5C` to `#0C0F27` (Figma style "Night gradient"). Launch screen and app icon sky |

Red stays out of the palette. It's only for the 103 screen.

## Type
Source Serif 4 for titles, numbers and keepsakes. Onest for the interface.

## Logo: moon in the word
Board "Logo guidelines" (node 62-450), component "Logo" (61-619).
- The o of oyjon is a saffron moon, as tall as the serif o with overshoot. Letters are Source Serif 4 Regular, outlined, tracked −1%. Always lowercase.
- Component props: Lockup (Wordmark, Mark, Avatar), Color (Paper, Indigo, Ink, Cream, Saffron, Black, White), Size (Regular, Small).
- Small kicks in under 120 px wide: thicker hairline, letters spread 1.5%.
- Clear space is one moon on every side, two on busy layouts.
- Minimum sizes: wordmark 72 px or 18 mm, mark 16 px or 5 mm, avatar 24 px or 10 mm.
- Saffron never goes on paper or white (under 2:1 contrast).

## App icon: Night sky
Board "App icon guidelines" (node 68-670). The logo's moon, rendered glossy on the night gradient, lit from the top left, in the style of Dmitri Litvinov's icons. Three iOS 18 appearances (Light, Dark, Tinted) from the "App icon" component. Export the 1024 masters; iOS makes the rest.

## Oyim
Board node 47-2. Moonstone body lit from inside, Grok-style eyes (two indigo pills, no mouth), 10 states, day and night. Animated in code with `@shopify/react-native-skia` and Reanimated, not Rive. Loss mode hides Oyim.
