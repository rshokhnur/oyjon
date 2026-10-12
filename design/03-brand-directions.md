# Step 5: brand directions

**Chosen (2026-10-12): A2 Saffron and indigo**, with Source Serif 4 for titles, numbers and keepsakes and Onest for the interface. It's marked on the A board in Figma.

Boards: [05 Brand](https://www.figma.com/design/bg1FIs5wZOY9m0wUWkTJTe/oyjon-app?node-id=23-2) in Figma. One board per direction, each with three colour options. Every option is shown on the same three screens (Today by day, Today at night with a sleep running, the month's moon keepsake).

Built from Shokhnur's picks in [`02-references.md`](02-references.md): Gaia Baby as the main reference, plus Headspace, Lifesum, Airbnb and Stoic from round 1 and Huckleberry, Nara, Finch, Headspace and Airbnb from round 2.

## v3: colour options
Shokhnur said the "cheap" feeling in v2 was the **colours**. Type and layout stay as they were. v2 had gone too grey and beige: grey-black ink, low-chroma tan accents, a muddy brown night. v3 gives each palette a real hue:
- **Coloured ink** (cocoa, indigo, forest, teal, petrol) instead of grey-black. It's also the main button colour.
- **Richer accents** for the moon and small marks.
- **Night with its own colour** (plum, indigo, forest, teal, dusk), still very dark, with warm cream text and a warm moon. Nothing bright, white or blue-lit at 3am.

| Option | Day | Night | Feel |
|---|---|---|---|
| **A1 Honey and plum night** | Paper `#FCF6ED`, cocoa ink `#321E16`, honey `#EDB25A` | Plum `#151024`, honey moon | A lamp in a dark room |
| **A2 Saffron and indigo** | Paper `#FAF7EF`, indigo ink `#212750`, saffron `#F1BF4E`, turquoise `#91CBC6` | Indigo `#0C0F27`, saffron moon | Ikat and suzani colours, the most Uzbek |
| **A3 Clay and cream** | Peach cream `#FEF5EC`, cocoa ink `#371F17`, clay `#E5955D` | Cocoa `#1F0F09`, apricot moon | Headspace warmth, the friendliest |
| **B1 Forest and butter** | Sage white `#F4F8F2`, forest ink `#143525`, sage `#7BB587`, butter `#ECCB9E` | Forest `#041812`, cream moon | A deeper Gaia |
| **B2 Mint and apricot** | Mint white `#F1FAF6`, teal ink `#08302A`, mint `#82D9B4`, apricot `#FBBB87` | Deep teal `#001819`, apricot moon | Lifesum freshness, the brightest |
| **B3 Eucalyptus and dusk** | `#F1F9F9`, petrol ink `#082E38`, eucalyptus `#70B3AA`, lavender `#CABCE6` | Dusk indigo `#0B1326`, gold moon | The most grown-up |

**My pick: A2 Saffron and indigo.** Nobody else in baby apps owns indigo and saffron, and it ties the moon to Uzbek textiles without any pattern. A1 is the safe warm choice.

**Contrast (WCAG), worst case per option:** ink on bg 12.5 or more, muted on bg 4.5 or more, accentDeep on bg 5.1 or more, night text on night bg 14.2 or more, night muted 5.8 or more, night button text 9.1 or more. Every text pair passes AA.

## v2 (type and layout, kept)
### What changed from v1
v1 had three directions. Shokhnur kept A and B and dropped C (Sunny lamp), but said both "look cheap". v2 is the premium pass:
- **Calmer colour.** Chroma roughly halved. Backgrounds are near-white paper, not tinted cream or green.
- **Ink buttons.** The main button is near-black ink, not the accent colour. Accent is only for the moon and small marks.
- **Real screens, not mood sketches.** Proper hierarchy, generous spacing, soft layered shadows, 24–28 radius cards.
- **Line icons and a lit moon** (soft gradient, faint craters, blurred phase shadow, glow) instead of flat circles.
- **Heavier type.** Nothing in Light. Big numbers do the talking.

| | A. Warm paper | B. Sage morning |
|---|---|---|
| Feel | A keepsake book you use every day. Quiet, grown-up | Fresh and modern, closest to Gaia |
| Day colours | Paper white `#FAF7F3`, warm charcoal ink, honey moon, sage support | Sage-white `#F6F7F4`, green-black ink, cream moon, peach support |
| Type | Source Serif 4 (titles, numbers, keepsakes) + Onest (interface) | Commissioner throughout, Medium with tight spacing for titles |
| Night | Warm near-black, amber text (same in both) | Same |
| Watch out | Serif needs care at small sizes; keep it for big moments | Can feel more "app-like" and less ownable |

v2 pick was A. The serif makes the moon keepsake feel like a real heirloom, which is the thing people share. B is the safer, more Gaia-like option.

## How the colours were made
- Every colour starts in OKLCH. Page neutrals stay very light and low-chroma; ink, accents and night get real chroma (v3).
- Night (21:00 to 06:00) is always very dark, with warm cream text and a warm moon, so 3am screens never flash white or bright.
- Red isn't in either palette. It's kept for the 103 screen only.

**Contrast (WCAG), v2 palettes:**

| Pair | A | B |
|---|---|---|
| ink on bg | 15.6 | 15.1 |
| muted on bg | 4.6 | 4.7 |
| accentDeep on bg | 5.3 | 5.9 |
| surface on ink (button) | 16.4 | 16.0 |
| night ink on night bg | 13.0 | 13.0 |
| night muted on night bg | 5.7 | 5.7 |
| night bg on night accent (button) | 8.6 | 8.6 |

Every pair passes AA for body text (4.5 or more).

## Font glyph check
Each font was checked for the Uzbek Latin ʻ (U+02BB, as in *koʻkrak*) and the Uzbek Cyrillic Ў Қ Ғ Ҳ, using the Fontsource builds.

- **Full pass:** Onest, Nunito, Commissioner, Inter, Montserrat, Raleway, Mulish, Nunito Sans, IBM Plex Sans. For serifs: Lora, Source Serif 4, Noto Serif, Merriweather, Spectral, Alegreya, EB Garamond, IBM Plex Serif.
- **Missing only ʻ:** Golos Text, Geologica, PT Serif, Roboto Slab.
- **Missing Uzbek Cyrillic:** Manrope (Қ Ғ Ҳ), Rubik (Ҳ), Literata (Ҳ), Wix Madefor, Unbounded, Playfair Display.
- **No Cyrillic at all:** Figtree, DM Sans, Plus Jakarta Sans, Mona Sans, Fraunces, Outfit, Sora, Hanken Grotesk, Albert Sans, Newsreader, Young Serif.

## Next
Pick A, B, or a mix (for example "B's colours with A's serif"). Then the logo and Oyim sketches get explored inside it.
