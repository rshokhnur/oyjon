# 09 Quick log research

How 15 apps log something fast (a meal, a glass of water, a timer, a feeling, a nap) and what oyjon's Quick log can borrow. This is the text version of the "Quick log research" section on the Quick log page of the [oyjon-flow FigJam board](https://www.figma.com/board/ZyESbImvUcKhpd37KaCcBN/oyjon-flow). The screenshots live on the board only.

Researched 12 Oct 2026. Mobbin has no baby trackers, so Gaia, Nara, Huckleberry and Glow come from their sites and App Store pages. The other 11 are food, water, time, mood and sleep loggers on Mobbin.

## 1. The flows

### Baby trackers not on Mobbin

**Gaia Baby.** Notes from [gaiababy.app](https://gaiababy.app/).

- Says a feed, diaper or nap takes about five seconds to log.
- Home has buttons for Feed, Sleep, Diaper, Pump and Tummy time. Each shows its latest status, like time since the last feed and how much.
- The top card answers "when did she last eat?" before anyone asks.
- Feed reminders after 2 to 5 hours count from the shared log.
- The site doesn't show the log screens themselves.

**Nara Baby.** Notes from the [App Store listing](https://apps.apple.com/app/id1444639029).

- Breastfeeding timer for left and right. It remembers which side ended last time.
- Bottle is a time and an amount. Diaper is wet, dirty or dry in one tap.
- Sleep timer, or add a past sleep with a start and an end.
- Timers run on the Lock Screen and Dynamic Island, so you can stop one without unlocking.
- You can hide activities you don't use, like breastfeeding.

**Huckleberry.** Notes from its [free plan page](https://huckleberrycare.com/product/free).

- Timers for sleep, feeding and pumping are free.
- Widgets, Lock Screen timers and "AI logging" are paid.
- SweetSpot predicts the next nap from age and wake windows. It's the reason people bother logging sleep.

**Glow Baby.** Notes from the App Store listing.

- Separate trackers for breastfeeding, bottle, sleep and diapers. Breastfeeding has a timer.
- The listing says little about the log screens.

### Flows on Mobbin

**[Lifesum, logging with AI](https://mobbin.com/flows/437f7696-b5fb-4880-b3fb-4420ffab35d9).** 9 screens.

- "Track with AI" sits at the top of the meal sheet. You type "Scrambled egg" into a chat and it adds up the meal.
- Under the text box, "Often tracked for breakfast" chips offer last time's meals.
- Mic and camera sit next to the text box.
- The closest thing to "tell Oyim and she logs it". Typing at 3am with a baby in one arm is still too slow.

**[Lifesum, the + button](https://mobbin.com/flows/1bbd4694-1302-42ff-a47a-9a82a37adf0e).** 10 screens.

- The center + opens a grid of big round tiles over a blurred home. Weight, water and exercise, then breakfast, lunch, dinner and snack.
- Each tile is a picture, so you can tap without reading.
- Then search, recents and favourites inside each meal.

**[MacroFactor, logging a food](https://mobbin.com/flows/92af860b-c818-40b5-b40d-cb5f9e65f5ce).** 12 screens.

- The day is a timeline by hour, with a + on each hour. You log into the right slot without picking a time.
- The time pad is 24 big buttons, one per hour, instead of a scroll wheel. One tap.
- A number pad with unit chips (egg, medium egg, g) shows the effect live.

**[Toggl Track, tracking time](https://mobbin.com/flows/49b389d9-e7bc-4410-83d8-7aa9db7a4885).** 18 screens.

- One big play button at the bottom. Start first, name it later.
- The running timer stays in the bar while you use the rest of the app.
- Edit shows start and stop, plus "Set to last stop time", so a gap fills itself.
- A tooltip says you can add entries after the fact. Logging late is a normal path here, not an edge case.

**[Yazio, water](https://mobbin.com/flows/e142a852-e6ce-4510-afe8-c4cece9bbbd1).** 3 screens.

- Eight glasses. Tap the next empty one and it fills. No sheet and no save button.
- The total above grows in big numbers.
- The fastest log in the set, one tap on home.

**[Noom, water](https://mobbin.com/flows/bc80d0e3-09eb-4b19-a16b-0135d6f0822b).** 6 screens.

- "Drink 7 glasses of water", with glasses you tap to fill and Done at the bottom.
- Home then says "Water goal met, 8/8 glasses".

**[Me+, water](https://mobbin.com/flows/25a191f3-15f5-4b87-a9fe-b4885be1f133).** 5 screens.

- Each tracker is a coloured card on Today with a + on the right.
- The + opens a sheet with presets (150 ml, 300 ml, 500 ml, 800 ml, 1 L) above a big number pad.
- Presets cover most taps. The keypad is there for the odd amount.

**[Flo, logging symptoms](https://mobbin.com/flows/22df520b-6764-4b62-833c-186ab412ac03).** 17 screens.

- "Log your symptoms" is the first card in the daily row on Today.
- One long sheet of chips in groups (mood, symptoms, pills, sport), with Apply pinned at the bottom.
- Water has minus and plus inline. Temperature opens a small picker sheet. Notes get their own screen.
- Thorough, but it's a form. Fine once a day, wrong for eight feeds a day.

**[Finch, logging a mood](https://mobbin.com/flows/91038415-4ded-44c2-9342-065adb9e82fb).** 5 screens with [Mood of the day](https://mobbin.com/flows/9258e049-25e5-4d5c-92bd-3c7da2148e5f).

- Five faces in a bottom sheet. One tap logs it and closes.
- A "Your mood is logged!" toast with confetti and the bird.
- The day's moods show as small faces at their hour.
- One tap plus a tiny thank-you. That's the feel we want for a diaper.

**[How We Feel, check-in](https://mobbin.com/flows/a0458ab8-faab-457a-bd65-e01ed4a47b80).** 21 screens.

- Home is one ring with a + and "How are you feeling this evening?" The question changes with the time of day.
- Pick a feeling, then optional chips for what you're doing, who with and where.
- "When did you feel proud?" opens a time wheel, so logging something from earlier is built in.
- "Complete check-in" works at any point. Everything after the feeling is optional.

**[Bevel](https://mobbin.com/flows/a6d9be95-e0de-468d-9ec6-1d3c71ca3fcf) and [Apple Health](https://mobbin.com/flows/7aac3290-6973-41f2-b00b-c29326c2cf08), adding a sleep.** 3 and 5 screens.

- Bevel's sheet is Asleep, Starts, Ends and Save. Three rows.
- Apple Health asks for the sleep type, then two date wheels. Six options and two wheels for one nap.
- Both start from a + on the sleep screen, not from home.

**[Headspace, check-in](https://mobbin.com/flows/79577cba-b6b5-487c-ae41-5416af934661).** 6 screens, for tone.

- Seven questions, one per screen, with a 7/7 counter.
- Afterwards Check in turns grey and says "Opens in 13 days". It says no calmly.
- Close to how Ask with AI says "back on Monday".

## 2. Side by side

| App | Taps to log | Where you start | Time | Timer | After saving | Edit or undo | Companion |
|---|---|---|---|---|---|---|---|
| Gaia Baby | About 5 seconds, per its site | Buttons on home | Not shown | Not shown | The button shows the new status | Not shown | None |
| Nara Baby | 1 for a diaper | Home and widgets | Start and end for a past sleep | Yes, on the Lock Screen | Not shown | Not shown | None |
| Huckleberry | Not shown | Home, widgets are paid | Not shown | Yes, free | Next nap window | Not shown | AI logging, paid |
| Lifesum AI | 3 or more, plus typing | Meal card | Meal slot | No | The meal adds up in the chat | "Want to adjust anything?" | AI chat |
| Lifesum + | 3 to 5 | Center + then tile grid | Meal slot | No | Check mark in the list | Remove in the list | None |
| MacroFactor | 3 to 4 | Hour slot or search bar | 24-hour pad | No | A line appears in that hour | Details, Remove | None |
| Toggl Track | 1 to start | Play button, always there | Start and stop rows | Yes, a bar that stays | The bar keeps counting | Edit sheet, "set to last stop" | None |
| Yazio | 1 | Glass on home | Now | No | Glass fills, total grows | Tap again | None |
| Noom | 1 a glass | Card on Today | Now | No | "Water goal met" | Tap the glass | None |
| Me+ | 2 to 3 | + on a Today card | Now | No | The card fills | Not shown | None |
| Flo | 3 or more | First card on Today | Day only | No | Back to Today | Clear | None |
| Finch | 2 | Sheet on home | Now | No | Toast with confetti | Not shown | The bird on the toast |
| How We Feel | 3 to 6 | Big + ring on home | Wheel, optional | No | Check-in on the timeline | Edit time | None |
| Bevel, Apple Health | 4 to 6 | + on the sleep screen | Start and end | No | A row on the timeline | Not shown | None |
| Headspace | 8 | Button on profile | Now | No | A bar on the chart, then locked | No | None |

### Patterns

- **One tap wins.** Yazio, Noom and Finch log in one tap with no save button. Anything after that is optional.
- **The log starts on home.** Gaia, Me+, Noom and Flo put it on the Today card. A central + menu like Lifesum's adds a step.
- **"Now" is the default time.** Changing it is a second, optional step. MacroFactor's hour pad and How We Feel's "When did you...?" do it best.
- **Logging late is normal.** Toggl even teaches it with a tooltip. A mum logging a feed an hour later is the main case, not the edge.
- **Timers have to outlive the screen.** Toggl keeps a running bar and Nara puts timers on the Lock Screen.
- **Presets beat keypads.** Me+ amounts, MacroFactor units, Noom glasses. The keypad is for the odd number.
- **Say thanks, briefly.** Finch's toast and Noom's "goal met". Nobody shows a full screen after a log.
- **Forms are for once a day.** Flo's chip sheet suits daily symptoms. It would wear out someone logging 8 feeds.
- **AI logging is showing up** (Lifesum, Huckleberry), always next to the buttons and never instead of them.
- **Status beats history.** Gaia's buttons show time since the last one. That's what a tired parent actually checks.

## 3. Ideas for oyjon

v1 only. Ask with AI is in, voice and the rest of the Later page stay out. Each idea has a priority.

1. **Three big tiles on Today (must).** Feed, Sleep, Diaper, each with time since the last one, like "2 soat oldin". A tap opens that log directly.
2. **Diaper in one tap (must).** Wet, Dirty or Both. It saves at now and closes, like Finch's faces.
3. **Feed opens on breast (must).** A left and right timer that remembers the last side ("Next: left"). Bottle is a tab with ml chips (30, 60, 90, 120) and a keypad for odd amounts.
4. **Sleep has one big Start (must).** Missed it? "Already asleep?" offers 10 min, 30 min, 1 hour ago, or a time.
5. **Timers keep running (must).** A small bar on Today shows the running feed or sleep, tap to stop. Lock Screen timers come later.
6. **Time defaults to now (must).** "Earlier?" opens chips first (5, 15, 30 min, 1 hour ago), then a wheel.
7. **Undo instead of "are you sure" (must).** After saving, a toast says "Saved" with Undo for 5 seconds. The tile resets and the moon glows softly. No confetti at night.
8. **Edit from the timeline (must).** Tap a row to get the same sheet (T7). Delete lives there, with a confirm.
9. **Red flags after the save (must).** Rules run on save. If one matches, A3 opens after the toast, never instead of saving.
10. **Oyim speaks only with a reason (should).** "That's the 7th feed today, she's eating well." Otherwise she stays quiet.
11. **Night logging (should).** 21:00 to 06:00, dimmer, bigger buttons, no sound.
12. **Notes on a log (later).** Rarely used at 3am.
13. **Pumping and solids (later).** v1 is breast and bottle.
14. **Tell Oyim in words (later).** "60 ml at 3" becomes a feed. Needs its own limit, separate from the 3 questions a week.
15. **Lock Screen timers and widgets (later).**
16. **Feed reminders and a next nap guess (later).** Gaia's 2 to 5 hour reminder, Huckleberry's SweetSpot.

### Proposed v1 flow

Two taps for a diaper, three for a finished feed.

1. Today, three tiles with time since last, plus a timer bar when one is running (must)
2. Tap a tile and its log opens straight away: T3 Feed, T4 Sleep, T5 Diaper (must)
3. Diaper saves on one tap. Feed and sleep start a timer, or "Earlier?" for a past one (must)
4. Saved on the phone, toast with Undo, the tile resets, the moon glows (must)
5. Rules check. A red flag opens A3 after the toast (must). Otherwise Oyim may add one line (should)
6. Edit later from the timeline, T7 (must)

This skips the T2 Log sheet. The moon + can open the same three choices as a second way in, so T2 stays only as that small menu, or goes to Later.

### Priorities by screen

| Screen | Priority | Note |
|---|---|---|
| T1 Today with three tiles and timer bar | must | Time since last on each tile |
| T2 Log sheet | later, proposed | Tiles replace it. Keep only if the moon + needs a menu |
| T3 Feed, breast timer and bottle | must | Pumping and solids later |
| T4 Sleep, timer and past sleep | must | |
| T5 Diaper, one tap | must | |
| T7 Edit entry | must | Delete with a confirm |
| Undo toast | must | 5 seconds |
| "Earlier?" time chips | must | Shared by all three |
| A3 Red flag | must | Opens after the save |
| Oyim's line after a log | should | Only when she has a reason |
| Night logging | should | |
| Notes, pumping, solids, tell Oyim, Lock Screen, widgets, reminders, nap guess | later | On the Later page as proposals |

## 4. Decisions

Picked by Claude on 12 Oct 2026 and decided on 13 Oct 2026. Shokhnur can still change any of them.

1. Tiles on Today open Feed, Sleep and Diaper directly, and T2 Log sheet moves to Later. Decided: yes.
2. Diaper saves on one tap with no Save button. Decided: yes.
3. Undo toast instead of an "are you sure" step. Decided: yes.
4. Running timers show as a bar on Today in v1, Lock Screen timers later. Decided: yes.
5. Pumping and solids go to Later. Decided: later.
6. Notes on a log go to Later. Decided: later.
7. Oyim adds one line after a log only when she has a reason. Decided: keep as should.
8. A night logging mode from 21:00 to 06:00. Decided: keep as should.
9. "Tell Oyim" text logging goes to Later. Decided: later.
10. Feed reminders and a next nap guess go to Later. Decided: later.

To do before the final screens:

1. Record Gaia, Nara and Huckleberry logging on a real phone, since Mobbin doesn't have them.
2. Time a mum logging a diaper and a feed one-handed on the prototype.

## 5. UX review

Done on 13 Oct 2026. I logged a feed, a nap and a diaper in my head at 3am, one-handed and offline, with a timer left running and an entry logged an hour late. The diagram on the [Quick log page](https://www.figma.com/board/ZyESbImvUcKhpd37KaCcBN/oyjon-flow?node-id=12-852) now shows each fix as a numbered badge.

Two taps for a diaper, three for a finished feed. The red-flag check never blocks the save.

### Revised flow

1. T1 Today, three tiles low on the screen with time since each. The centre moon + opens the same three tiles from any tab (question 1).
2. T3 Feed (left and right timer, "Next: left", or bottle ml), T4 Sleep (Start, or "Already asleep?"), T5 Diaper (one tap saves).
3. A running timer shows as a bar on every tab and stops from there. A feed asks "Still feeding?" at 60 minutes, a sleep at 12 hours. Starting a feed ends a running sleep.
4. Saved on the phone, synced later. Over 250 ml asks once.
5. "Saqlandi" toast with Undo, 5 seconds by day and 8 at night. The moon glows.
6. Red-flag rules run on every save and every app open. A missing-log rule asks on Today first. No opens A3.
7. Back on Today. T7 edits later from Diary.

### Issues and fixes

| # | Priority | What goes wrong | Fix |
|---|---|---|---|
| 1 | must | With T2 on Later, the centre + had nothing to open and other tabs had no way to log | The + opens the same three tiles as a small sheet (question 1) |
| 2 | must | She falls asleep mid-feed and the timer runs for hours | Feed asks at 60 min, sleep at 12 h, with "Ended 10, 20, 30 min ago" chips |
| 3 | must | A feed starts while the sleep timer still runs | The sleep ends at that moment, toast with Undo |
| 4 | must | "No wet diaper in 12 hours" can't fire on a save | Rules also run on app open. A missing-log rule asks on Today first, since she may just not have logged it. No opens A3 |
| 5 | must | One thumb can't reach the top of the screen | Tiles and timer bar in the bottom third, 56 pt or more, stop on the bar |
| 6 | should | A past sleep overlaps another | One line says so and offers to trim, no dialog |
| 7 | should | At 3am the app reopens on the last tab, often Ask | After 30 minutes away it opens on Today |
| 8 | should | Hands are slow at night | Undo stays 8 s at night, toast sits above the tiles |
| 9 | must | 60 ml typed as 600 ml | Over 250 ml asks once |
| 10 | should | A sync dot on every entry is noise | One cloud mark on Today while anything waits. Dots stay in Diary |
| 11 | should | Oyim talking too much | First log of the day only, never 21:00 to 06:00 |
| 12 | should | Pale stool is a warning sign the doctor may want in the rules | Optional stool colour after Dirty (question 2) |

### Keep or drop, decided 13 Oct 2026

1. Keep the centre moon + as a small sheet with the same three tiles, so she can log from any tab. Decided: keep, must. This changes my earlier pick that sent T2 to Later.
2. An optional row of stool colours after "Dirty", with pale ones going to the red-flag check. Decided: keep as should, once the doctor approves the colour chart.

## 6. Global-ready

Added on 13 Oct 2026. Uzbekistan is the default, and nothing here is fixed to it. The full list is in [`14-global-ready.md`](14-global-ready.md).

- Bottle amounts are stored in ml. v1 shows ml chips (30, 60, 90, 120) everywhere. fl oz chips come later through the country's unit setting, and the "over 250 ml" check stays in ml underneath.
- "Earlier?" chips and the timer bar use 24-hour or 12-hour time, whichever the phone uses. Each entry keeps its UTC time and the hour it happened.
- Night logging follows the phone's clock, 21:00 to 06:00 wherever she is.
- Red-flag rules come from her country's rule pack, and A3 calls her country's number. Uzbekistan is 103.
- Every label is a translation key. Tiles are sized for "Ovqatlantirish" and the Cyrillic and Russian words, which run longer.
