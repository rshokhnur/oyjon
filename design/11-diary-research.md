# 11 Diary research

How 15 apps show a day of logs, let you fix an entry, sum up a week and chart growth, and what oyjon's Diary can borrow. This is the text version of the "Diary research" section on the Diary page of the [oyjon-flow FigJam board](https://www.figma.com/board/ZyESbImvUcKhpd37KaCcBN/oyjon-flow). The screenshots live on the board only.

Researched 13 Oct 2026. Mobbin has no baby trackers, so Gaia, Huckleberry, Nara and Glow come from their sites and App Store pages. The other 11 are journal, time, sleep and weight apps on Mobbin. None of them shows a percentile growth chart, so D3 leans on Gaia.

## 1. The flows

### Baby trackers not on Mobbin

**Gaia Baby.** Main reference. Notes from [gaiababy.app](https://gaiababy.app/).

- History shows daily totals, then every entry newest first, each with who logged it. Filters and a date picker.
- Trends show sleep, feeds, diapers, pumping and tummy time by week or month. Tapping a bar opens that day's entries.
- Growth charts weight, length and head against the WHO Child Growth Standards, with percentiles worked out on the phone.

**Huckleberry.** Notes from the [App Store listing](https://apps.apple.com/us/app/huckleberry-baby-tracker/id1169136078).

- Free: sleep summaries, history and average sleep totals.
- Paid: reports on growth, sleep and feeding trends.
- Tracks weight and growth. The listing doesn't mention percentiles.

**Nara Baby.** Notes from the [App Store listing](https://apps.apple.com/app/id1444639029).

- A History tab, split by activity type. Reviewers say entries are easy to go back and edit.
- Sleep graphs by day or week, and a Trends tab that parents show at doctor visits.
- Weight, height and head size by date. No percentiles mentioned.

**Glow Baby.** Notes from the App Store listing.

- Called "Baby Tracker & Growth App". The listing says little about how history or charts look.

### Flows on Mobbin

**[ABY Journal, timeline](https://mobbin.com/flows/84ea22b9-5fc2-4aad-a9e2-e137cded1ea9).** 4 screens.

- Today's entries as cards, each pinned to its time on the left.
- Older days turn into a stack of day cards with a small date rail on the right.
- Each past day gets a short written summary. Close to what Oyim could say about a day.

**[Jobber, editing a time entry](https://mobbin.com/flows/a3b74781-4288-4f8d-ae44-f1efc19f8be9).** 4 screens.

- A week strip at the top, today circled. One tap jumps to another day.
- Below it, the day's total, then a vertical line with each entry at its time.
- Edit opens start time, end time and duration. Change one and the others follow.

**[Toggl Track, editing a time entry](https://mobbin.com/flows/951017c4-9407-4981-bf03-b5ffd9158715).** 7 screens.

- Entries grouped under "Yesterday" and the date, with the day's total on the right.
- The edit sheet has start and stop, a dial for the duration, and "Set to last stop time".
- "Delete Entry" sits at the very bottom in red, away from Save.

**[timespent, deleting a session](https://mobbin.com/flows/f668b625-86b6-48f7-8fc8-87723e186a5e).** 3 screens.

- Sessions grouped by date, with "Total: 1h 36m" under each day.
- The edit screen has the start time, a wheel for the duration, optional notes, then "Delete Session" in red.

**[MacroFactor, timeline settings](https://mobbin.com/flows/8ae00408-9995-4cb4-a3b7-4214433dd339).** 5 screens.

- The food log is an hour-by-hour timeline, and you choose which hours it shows, like 7 AM to 11 PM.
- A baby's day has no such hours. The 3am feed is the main event, so oyjon's day has to show all 24 hours.

**[Pillow, trends](https://mobbin.com/flows/29e2e522-fbc2-40fb-a38c-c14988d01d97).** 6 screens.

- One card per thing: sleep quality, duration, disruptions and more.
- Each card leads with a sentence, like "This week's average is 5hrs 9min", then a small week chart.
- Easy to skim. Too many cards for us, but the sentence-first idea is right.

**[Pillow, bedtime](https://mobbin.com/flows/90a37ea6-1990-4146-8dae-34d336ea7131).** 4 screens.

- Each day is a column on a 24-hour axis. Sleep shows as a bar from the time it started to the time it ended.
- Week and Month tabs. Under the chart, time asleep and time in bed.
- The closest thing on Mobbin to the classic baby sleep chart.

**[Garmin Connect, sleep history](https://mobbin.com/flows/a892bd65-3e59-40b3-a2d1-babbef577b59).** 2 screens.

- Starts with a sentence: "Your recent sleep is not causing any changes to your sleep need."
- Then 7 days of bars against a grey "need" bar, with averages underneath.

**[Alma, weight](https://mobbin.com/flows/b13fd35f-e9c1-4d55-a87b-06086dee72fb).** 5 screens.

- A weight card on the profile opens a full chart with 1W, 1M, 6M and 1Y.
- One big "Add new weight entry" button under the chart.
- "All entries" lists each weight with its date and where it came from.

**[MacroFactor, adding a weight](https://mobbin.com/flows/994b8af2-4628-439f-aed2-8f7035467bbe).** 7 screens.

- A small weight card on the dashboard opens the chart.
- The chart shows the average and the change for the range at the top.
- A calendar sheet with "Go to Today" for picking a day. A one-time tutorial card explains the page.

**[Flo, weight chart](https://mobbin.com/flows/659f2fa9-6944-4326-a2c8-f72d803802f7).** 2 screens.

- On Today, each tracker card has a trash can and a pencil, plus "View chart".
- The chart is a full screen with a "Target" line. For a baby there is no target, the WHO lines play that role.

## 2. Side by side

| App | Day view | Moving between days | Edit and delete | Week view | Growth or weight | Summary in words |
|---|---|---|---|---|---|---|
| Gaia Baby | Day totals, then newest first | Date picker, filters | Not described | Week or month, tap a bar for that day | WHO weight, length, head, on the phone | Not described |
| Huckleberry | Sleep summaries and history | Not described | Not described | Paid reports | Weight, no percentiles mentioned | Not described |
| Nara Baby | History tab by type | Not described | Entries can be edited | Sleep by day or week, Trends tab | Weight, height, head by date | Not described |
| Glow Baby | Not described | Not described | Not described | Not described | In the app's name | Not described |
| ABY Journal | Cards at their time | Stack of day cards, date rail | Not shown | None | None | A written summary per day |
| Jobber | Vertical line with times | Week strip at the top | Start, end, duration | None | None | Day total at the top |
| Toggl Track | Grouped by day, day totals | Scroll | Start and stop, dial, red Delete | Not in this flow | None | Day totals |
| timespent | Grouped by date, day totals | Scroll | Wheel, red Delete at the bottom | None | None | "Total: 1h 36m" |
| MacroFactor timeline | Hour by hour, hours you choose | Not in this flow | Not in this flow | None | None | None |
| Pillow trends | None | Week label | None | A small chart per thing | None | "This week's average is..." |
| Pillow bedtime | None | Week, Month | None | Sleep bars on a 24-hour axis | None | Time asleep, time in bed |
| Garmin Connect | None | 1d, 7d, 4w, 1y | None | Bars against a need line | None | One sentence on top |
| Alma | None | 1W, 1M, 6M, 1Y | Entries list | None | Line, big add button, entries | None |
| MacroFactor weight | Dashboard card | Calendar, "Go to Today" | + on the chart | None | Average and change on top | Tutorial card |
| Flo | Today cards | None | Trash and pencil on each card | None | Full screen with a target line | None |

### Patterns

- **Day totals sit on top.** Toggl, timespent, Jobber and Gaia show the total before the list. That's the number a mum gets asked at the clinic.
- **A week strip moves between days.** Jobber's row of seven days, ABY's date rail, MacroFactor's "Go to Today".
- **Edit is the same sheet as add.** Delete goes at the very bottom in red, away from Save (Toggl, timespent).
- **Times are start and end.** Duration follows. Jobber and Toggl let you change any one of the three.
- **Weekly views lead with a sentence.** Pillow's "This week's average is..." and Garmin's line say the point before the chart.
- **Sleep across 24 hours.** Pillow's bedtime chart draws each night as a bar on a clock axis. Best for a baby whose sleep is in pieces.
- **Range tabs are everywhere.** 1W, 1M, 6M, 1Y. For D2 one fixed 7 days is enough.
- **A weight chart comes with a list and one add button.** Alma and MacroFactor both do it.
- **Nobody on Mobbin draws percentile curves.** Gaia's WHO chart on the phone is the only reference.
- **Targets don't fit a baby.** Flo and Alma draw a goal line. For oyjon the WHO lines are the guide and there's no goal to hit.

## 3. Ideas for oyjon

v1 only, one baby, no streaks or scores. Each idea has a priority.

1. **Three tabs at the top of Diary (must).** Kun, 7 kun, Oʻsish. Day, 7 days, Growth.
2. **D1 opens on today with the totals first (must).** "7 feeds · 13 h sleep · 6 wet · 2 dirty". Then entries, newest at the top.
3. **A week strip under the tabs (must).** Seven days, today circled. Swipe the list for the day before. "Bugun" brings her back.
4. **A running timer stays pinned at the top of D1 (must).** Same bar as on Today.
5. **Tap an entry for T7 (must).** The same sheet as the log, with start and end. Delete is red at the bottom and asks once.
6. **D2 is one 24-hour chart (must).** Seven columns, one per day. Sleep as bars, feeds as dots, diapers as small ticks. Tap a column to open that day in D1.
7. **D2 says it in words first (must).** "Last 7 days: 13 h sleep and 8 feeds a day on average." No scores and no goals.
8. **D3 draws WHO curves on the phone (must).** Weight, length and head, switched with chips. Her dot sits between the lines, and a line of text says "Around the 50th line".
9. **Add a measurement (must).** Date defaults to today. One field each for weight, length and head, in kg and cm. All optional except one.
10. **D3 asks the baby's sex once (must).** WHO curves differ for boys and girls, and onboarding didn't ask. One line says why.
11. **Time between feeds (should).** A small "2 soat 40 daq" between feed rows. Doctors ask for it.
12. **Filter chips on D1 (should).** All, Feeds, Sleep, Diapers.
13. **D2 compares with the week before (should).** One line, like "A bit more sleep than last week."
14. **A gentle growth note (should).** If weight drops across two lines, "Mention this at your next doctor visit." The rule comes from the reviewing doctor.
15. **A doctor report to show at the clinic (later).** A one-page PDF of the last 7 days and growth.
16. **Month and year views (later).**
17. **Normal ranges by age on D2 (later).** Needs doctor review first.
18. **Notes and photos on entries (later).** Already proposed in the Quick log research.

### Proposed v1 flow

Every step is one tap from the Diary tab.

1. Diary opens D1 on today, totals on top (must)
2. Swipe or tap the week strip for another day (must)
3. Tap an entry, T7 opens, change it or delete it with one confirm (must)
4. "7 kun" opens D2, tap a day to go back to it in D1 (must)
5. "Oʻsish" opens D3 with the WHO chart and "Add a measurement" (must)
6. The first time on D3, one question about the baby's sex (must)

### Priorities by screen

| Screen | Priority | Note |
|---|---|---|
| D1 Timeline with totals | must | Newest first, timer pinned on top |
| Week strip | must | "Bugun" to come back |
| T7 Edit entry | must | Same sheet as the log |
| Delete with one confirm | must | Red, at the bottom |
| D2 7-day pattern | must | 24-hour chart and one sentence |
| D3 WHO growth chart | must | Weight, length, head |
| Add a measurement | must | Date, kg, cm |
| Baby's sex question on D3 | must | Asked once, with a reason |
| Time between feeds | should | |
| Filter chips | should | |
| Week compared with the week before | should | One line |
| Gentle growth note | should | Rule from the doctor |
| Doctor report, month and year views, normal ranges, notes and photos | later | On the Later page as proposals |

## 4. Decisions

All picked by me on 13 Oct 2026 so the work could keep going. Each is open for the user to keep or change.

1. Diary has three tabs at the top: Day, 7 days, Growth. My pick: yes.
2. D1 shows the day's totals first, then entries newest first. My pick: yes.
3. A day runs midnight to midnight. A sleep that crosses midnight shows on both days. My pick: yes.
4. D2 is one 24-hour chart for all seven days, not a chart per type. My pick: yes.
5. No scores, goals or "normal" ranges on D2 in v1. My pick: yes, ranges later.
6. D3 uses WHO curves worked out on the phone, and asks the baby's sex the first time. My pick: yes.
7. Units are kg, cm and ml only. My pick: yes.
8. Time between feeds on D1. My pick: keep as should.
9. A gentle note when weight drops across two lines. My pick: keep as should, once a doctor sets the rule.
10. A doctor report PDF. My pick: later.

To do before the final screens:

1. Ask the reviewing doctor which growth change should show the gentle note.
2. Show the D2 chart on paper to 3 to 5 mums and check they can read it without help.

## 5. UX review

Done on 13 Oct 2026. I used the Diary on day one, at month six, at the clinic with the nurse asking "how many feeds?", after a sleep that crossed midnight, and on a 360 px Android screen. The diagram on the [Diary page](https://www.figma.com/board/ZyESbImvUcKhpd37KaCcBN/oyjon-flow?node-id=12-869) now shows each fix as a numbered badge.

### Revised flow

1. Kundalik tab with Kun, 7 kun and O'sish on top.
2. D1 Day. Totals first, as icons with numbers, then entries newest first. Swipe the strip a week at a time, or tap the month for a calendar. Empty days get Oyim's "Nothing here yet. Tap +."
3. Tap an entry for T7. Change or delete, then an Undo toast with no confirm. The red-flag rules run again.
4. D2 7 days. One sentence, then a 24-hour chart with sleep bars, feed dots, shaded nights and the diaper count under each day. Tap a day to open it in D1. With few logs it shows the days so far.
5. D3 Growth. Sex is asked once with the reason. If she skips, a list of measurements without curves. No weight yet asks for the last clinic weight.
6. Add a measurement. Odd values ask once. The text says "around the 50th line", never "low".

### Issues and fixes

| # | Priority | What goes wrong | Fix |
|---|---|---|---|
| 1 | must | D1 on day one is a blank page | Oyim peeks with "Nothing here yet. Tap +." |
| 2 | must | Seven days can't reach a feed from two months ago | Swipe a week at a time, tap the month for a calendar. Month view stays on Later |
| 3 | must | A sleep across midnight counts twice | Shows on both days, each day counts only its own hours |
| 4 | should | A row of totals is a lot to read at the clinic | Icon, number and word under it |
| 5 | must | Log research said delete confirms, the spec says Undo | Undo everywhere, no confirm. Edits re-run the red-flag rules |
| 6 | must | D2 with one day and D3 with no weight look broken | D2 shows days so far, D3 asks for the last clinic weight |
| 7 | must | A 7-day chart with three kinds of marks is unreadable on 360 px | Sleep bars and feed dots only, nights shaded, diaper count as a number |
| 8 | must | Skipping the sex question leaves no curves | A list of measurements with one line on why the curves need it |
| 9 | must | 32 kg instead of 3.2, and "below the line" wording scares | Odd values ask once, gentle wording only |
| 10 | should | WHO charts read wrong for babies born early | One line asking her to check with her doctor. Corrected age is question 1 |
| 11 | should | Travel shifts entry times | Each entry keeps the hour it happened |

### Keep or drop

1. Corrected age for babies born early, used on D3 and the moon. It needs one more onboarding field. My pick: later. Added to the Later page as a proposal.
