# Step 5 preview: 3 brand directions

Boards: [05 Brand](https://www.figma.com/design/bg1FIs5wZOY9m0wUWkTJTe/oyjon-app?node-id=16-2) in Figma. Each board has day and night colours, type, and three small sketches: Today by day, Today at night, and a keepsake card. The sketches only show mood. They aren't layouts.

Built from Shokhnur's picks in [`02-references.md`](02-references.md): Gaia Baby as the main reference, plus Headspace, Lifesum, Airbnb and Stoic from round 1 and Huckleberry, Nara, Finch, Headspace and Airbnb from round 2.

| | A. Warm paper | B. Sage morning | C. Sunny lamp |
|---|---|---|---|
| Feel | A keepsake book you use every day | Fresh early-morning air, closest to Gaia | Cheerful and friendly, the best home for Oyim |
| Day colours | Cream paper, honey, brown ink, sage support | Pale sage-grey, soft green, peach support | Butter cream, apricot, sky-blue support |
| Type | Onest (UI) + Lora (keepsake moments) | Commissioner | Nunito |
| Watch out | Can drift into all-beige | Green can read as "pharmacy"; cooler than the amber night | Rounded type is near Headspace's, which wasn't loved; apricot sits close to the 103 red |

**My pick: A.** It's the closest to what you liked: Stoic's type and warmed neutrals, Headspace's warmth turned down, Airbnb's clean cards and Gaia's calm. Its amber night mode flows straight from the day palette. B's sage already sits in A as the support colour.

## How the colours were made
- Every colour starts in OKLCH. Neutrals are Stoic-style greys moved to a warm hue (55 to 80) at very low chroma.
- Night (21:00 to 06:00) is the same in all three: warm near-black with amber text and accent. That way the 3am screens never flash white or blue.
- Red isn't in any palette. It's kept for the 103 screen only.

**Contrast (WCAG):**

| Pair | A | B | C |
|---|---|---|---|
| ink on bg | 14.1 | 14.4 | 13.6 |
| muted on bg | 5.6 | 5.5 | 5.1 |
| accentInk on bg | 5.8 | 6.4 | 4.9 |
| white on accentInk (button) | 6.2 | 6.9 | 5.3 |
| night ink on night bg | 12.2 | 12.2 | 12.6 |

Every pair passes AA for body text (4.5 or more).

## Font glyph check
Each font was checked for the Uzbek Latin ʻ (U+02BB, as in *koʻkrak*) and the Uzbek Cyrillic Ў Қ Ғ Ҳ, using the Fontsource builds.

- **Full pass:** Onest, Nunito, Commissioner, Inter, Montserrat, Raleway, Mulish, Nunito Sans, IBM Plex Sans. For serifs: Lora, Source Serif 4, Noto Serif, Merriweather, Spectral, Alegreya, EB Garamond, IBM Plex Serif.
- **Missing only ʻ:** Golos Text, Geologica, PT Serif, Roboto Slab.
- **Missing Uzbek Cyrillic:** Manrope (Қ Ғ Ҳ), Rubik (Ҳ), Literata (Ҳ), Wix Madefor, Unbounded, Playfair Display.
- **No Cyrillic at all:** Figtree, DM Sans, Plus Jakarta Sans, Mona Sans, Fraunces, Outfit, Sora, Hanken Grotesk, Albert Sans, Newsreader, Young Serif.

Nunito draws ʻ quite wide (*ko`krak*), which is something to check if C wins.

## Next
Pick a direction, or mix them (for example "A, with C's apricot for Oyim"). Then the logo and Oyim sketches get explored inside it.
