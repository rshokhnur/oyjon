# Diary: where each screen comes from and why each part is there

Wireframes: the "3 Diary" row on [04 Wireframes](https://www.figma.com/design/bg1FIs5wZOY9m0wUWkTJTe/oyjon-app?node-id=3-5). References are the apps in [`../11-diary-research.md`](../11-diary-research.md).

Diary answers the questions people ask about the past: the nurse's "how many feeds yesterday?", her mother-in-law's "is she sleeping enough?" and the clinic's weight check. Today is about now, and Diary is about any other day.

## D1 Day

**Based on:** Jobber (week strip, then the day's total, then entries at their times), Toggl and timespent (the day's total next to the date).

| Element | Why it's here |
|---|---|
| Kun, 7 kun, Oʻsish tabs | The three questions Diary answers: one day, the week's rhythm and growth. One tap each. |
| Month and "Bugun" | Jump months for an older day, and come back to today in one tap. |
| Week strip, Monday first | Pick a day this week without scrolling. The first weekday follows her country. |
| Totals: icon, number, word | What the nurse asks. Big enough to read out at the clinic. |
| Entries, newest first | The day in order. Tap one to fix it in T7. |
| "Oraliq 4 soat 5 daq" under feeds | Time between feeds, which doctors ask about for newborns. |

## D1 Day, empty

**Based on:** none. It came from the UX review, because a blank day one looked broken.

| Element | Why it's here |
|---|---|
| Oyim and "Bu yerda hali hech narsa yoʻq." | Says the emptiness is expected, not an error. |
| "Pastdagi + ni bosing." | Points at the one action that fills it. |

## D2 7 days

**Based on:** Pillow and Garmin (one sentence first, then the chart), Pillow bedtime (each day a column on a 24-hour axis).

| Element | Why it's here |
|---|---|
| One sentence summary | Most people read the sentence and never study the chart. |
| 24-hour chart, one column a day | The classic baby sleep chart. The rhythm shows without any numbers. |
| Sleep bars and feed dots only | Three kinds of mark were unreadable on a 360 px phone. |
| Shaded nights | Night and day sleep separate at a glance. |
| Diaper count under each day | Diapers as a number, because the chart has no room for them. |

## D3 Growth

**Based on:** Alma (chart, then one "Add" button, then the list), Flo's weight chart, with the WHO lines in place of a target.

| Element | Why it's here |
|---|---|
| Vazn, Boʻy, Bosh chips | Weight, length and head, the three things the clinic measures. |
| WHO curves with her dots | What the nurse shows her, drawn on the phone and offline. |
| "50-chiziq atrofida" | The curve in words, never "low" or "high". |
| Last measurement line | The number she'll be asked for next time. |
| Measurement list | Every visit with its date, for the doctor. |
| "Oʻlchov qoʻshish" at the bottom | After a clinic visit, this is the one thing she came here to do. |

## D3 Growth, first visit

**Based on:** MacroFactor (a one-time card that explains the page).

| Element | Why it's here |
|---|---|
| "Egri chiziqlar uchun bitta savol" | WHO curves differ for girls and boys, and onboarding didn't ask. It's asked once, here, where it matters. |
| Qiz / Oʻgʻil | Two big answers. |
| "Oʻtkazib yuborish" | She doesn't have to answer. The measurements still show as a list. |

## D3 Add a measurement

**Based on:** MacroFactor's add-a-weight sheet.

| Element | Why it's here |
|---|---|
| Date, defaulting to today | Most entries are the same day as the visit. |
| Vazn and Boʻy side by side | The two numbers from every check-up. |
| Bosh aylanasi, optional | Measured less often. |
| Saqlash | Odd values, like 32 kg for 3,2, ask once before saving. |

## Dropped on 13 Oct

Moved to the Later page on FigJam: the caregiver dot on entries (back with family sharing), the filter chips on the day view, and the line comparing the week with the last one on D2.
