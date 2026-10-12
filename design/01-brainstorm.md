# Step 1: Brainstorm and direction

Options to react to, not decisions. Pick, mix or throw out. Answers go at the bottom.

## 1. The feeling, in one line
**A warm night light that also keeps the diary.** Calm at 3am, proud on the month-day, steady when something feels scary.

## 2. Three moments we design for
1. **3am feed.** One thumb, half asleep, baby on the other arm, dark room. Two taps and back to sleep. The screen must not light up the room.
2. **The month-day.** Baby turns 4 months, the moon is full, the keepsake card lifts out. This is the screenshot that goes to the family Telegram group. It has to look good enough to share.
3. **"Is this normal?"** Baby has a fever, she types a question. If it's a red flag, a calm full-screen 103 page appears. No cuteness here, just clear and steady.

Everything else sits between these three. If a design choice helps one of them, it wins.

## 3. Who she is (rough, to check in step 2)
- **Madina, 27, Tashkent.** First baby. Lives on Telegram and Instagram. Gets a lot of advice from relatives and isn't sure what to trust. Uzbek Latin, reads Russian too.
- **Gulnoza, 31, Samarkand region.** Second baby, older Android, patchy internet. Her mother-in-law helps with the baby and might log feeds too. Uzbek, sometimes Cyrillic.
- **Aigerim, 29, Almaty** (later market). Russian first. Expects the polish of global apps.
- **The helper:** grandma or dad. Opens the app only to log a feed. Big text, nothing to learn.

## 4. Three brand directions

### A. Night light
Cosy and warm. The app feels like a bedside lamp.
- **Words:** soft, glowing, sleepy, safe
- **Colour:** cream and honey by day (#F6E7C8 to #F2C98A from the Oyim spec), deep plum-navy and amber at night
- **Type:** a rounded sans for everything
- **Logo:** a soft crescent cradling a small dot (the baby), wordmark in rounded lowercase
- **Risk:** can look sleepy or childish in the daytime screens

### B. Paper moon
A keepsake book. Feels handmade, a bit like a photo album or a baby book from a grandmother's shelf.
- **Words:** tender, crafted, memory, heirloom
- **Colour:** warm paper white, ink brown, one honey accent, muted sage
- **Type:** a gentle serif for headings and moments, a clean sans for data
- **Logo:** the wordmark as if written once by hand, the "o" drawn as a moon
- **Uzbek touch:** a quiet suzani moon motif on the keepsake cards only, never as wallpaper
- **Risk:** logging screens need to stay fast and crisp, not decorative

### C. Clear sky
Minimal and fast, closest to Linear and Airbnb from the spec. The content is the colour.
- **Words:** clear, quick, honest, light
- **Colour:** near-white, one honey accent, soft greys; night mode is the only place it gets warm
- **Type:** one neutral sans in a few weights
- **Logo:** geometric wordmark, the two "o"s as moon phases (new and full)
- **Risk:** can feel cold and generic, like every other tracker

**My pick: B for the brand and keepsakes, with C's discipline on logging screens.** The keepsake is the reason people share the app, so the brand should feel like a memory book. The 3am logging screens stay as quick and plain as C. Night mode borrows A's amber.

## 5. Logo ideas
Always lowercase **oyjon**. "oy" means both moon and month, and the name echoes *oyijon* (mummy).
1. **Two moons:** the first "o" is a crescent, the second is full. Reads as "a month passing".
2. **Moon as the dot:** the "j" dot becomes a tiny full moon.
3. **Crescent cradle:** for the app icon, a crescent holding a small dot like a cradle. Works at 24pt.
4. **Phase strip:** the 8 moon phases under the wordmark, used as a brand pattern rather than in the logo itself.
5. **Oyim as the icon:** the mascot's face is the app icon. Friendly, but ties the brand to the mascot (and she's hidden in loss mode, so the icon would still show her).

**Avoid:** storks, baby feet, pacifiers, pink-for-girls and blue-for-boys, hearts, anything red.

## 6. Type shortlist (glyphs to verify in step 5)
Must handle Uzbek Latin oʻ and gʻ (the ʻ is its own character, U+02BB), Uzbek Cyrillic Ўў Ққ Ғғ Ҳҳ, and long words like *ovqatlantirish* (feeding) in a tile without breaking.
- **Sans for UI:** Inter, Onest, Golos UI, Manrope, Nunito (rounded, for direction A)
- **Serif for moments (direction B):** Fraunces, Lora, Literata
- I haven't checked each font's Uzbek Cyrillic coverage yet. That check happens before anything is picked.

## 7. Oyim the moon
The spec has three personalities in [`../docs/spec/companion.md`](../docs/spec/companion.md). The recommended one is **A, Oyim**: a quiet older-sister type who speaks rarely and smiles a lot. She should be drawn in whichever brand direction you pick (soft and glowing for A, a bit hand-drawn for B, simple geometric for C).

Before sketching, we still need real screenshots of the Grok bot avatars you like (that's in [`../docs/open-questions.md`](../docs/open-questions.md)). Step 2 covers it.

## 8. Things to decide (answer in the thread)
1. Brand direction: **A**, **B**, **C**, or my pick (B with C for logging)?
2. Logo idea to explore first: 1 to 5, or your own?
3. Oyim's personality: A (Oyim), B (Oyzoda) or C (Moonjon)?
4. Can you talk to 3 to 5 mums in step 2? I'll write the questions.
5. Figma: should I make a new file for the flows and wireframes, or do you have one to use?
