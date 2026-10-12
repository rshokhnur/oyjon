# Step 5 preview: brand directions (v2)

Boards: [05 Brand](https://www.figma.com/design/bg1FIs5wZOY9m0wUWkTJTe/oyjon-app?node-id=20-2) in Figma. Each board shows three real screens (Today by day, Today at night with a sleep running, the month's moon keepsake), plus the palette and type.

Built from Shokhnur's picks in [`02-references.md`](02-references.md): Gaia Baby as the main reference, plus Headspace, Lifesum, Airbnb and Stoic from round 1 and Huckleberry, Nara, Finch, Headspace and Airbnb from round 2.

## What changed from v1
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

**My pick: A.** The serif makes the moon keepsake feel like a real heirloom, which is the thing people share. B is the safer, more Gaia-like option.

## How the colours were made
- Every colour starts in OKLCH. Neutrals are Stoic-style greys moved to a warm hue (A, around 60–85) or a green-grey hue (B, around 120–160), at very low chroma.
- Night (21:00 to 06:00) is the same in both: warm near-black with amber text and accent, so 3am screens never flash white, green or blue.
- Red isn't in either palette. It's kept for the 103 screen only.

**Contrast (WCAG):**

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
