# Quick log: where each screen comes from and why each part is there

Wireframes: the "2 Quick log" row on [04 Wireframes](https://www.figma.com/design/bg1FIs5wZOY9m0wUWkTJTe/oyjon-app?node-id=3-5). References are the apps in [`../09-quick-log-research.md`](../09-quick-log-research.md). Screenshots live on the FigJam board only.

The whole flow rests on three findings from that research. One tap wins (Yazio, Noom, Finch). Logging late is the normal case (Toggl, How We Feel). And what a tired parent checks is time since the last one, not history (Gaia).

## T1 Today

**Based on:** Gaia Baby's home (buttons that show time since the last one), Me+ (each tracker is a card on Today with its own +), Toggl Track (the running timer stays in a bar).

| Element | Why it's here |
|---|---|
| Moon avatar with a gear mark | The baby is the point of the app, so she sits top left. The gear mark tells her it opens Settings, which a plain photo doesn't. |
| Name and age, "3 oy 12 kun" | The first thing a mum or grandmother checks, and what the nurse asks. |
| Date, top right | At 3am she can't tell if "today" means before or after midnight. |
| Today's last 2 entries, right above the tiles | Confirms the last log saved. Only 2, because the full day lives in Diary. It sits low so everything she uses is in thumb reach. The empty top is where Oyim's one daily line goes. |
| "Kundalik ›" link | One tap to the full day for anyone who wants more than 2. |
| Three tiles, Ovqat, Uyqu, Taglik | The three things she logs 8 to 12 times a day. Bottom third, so one thumb reaches them while holding the baby. |
| Time since on each tile, large | Answers "when did she last eat?" before she asks. Large because she reads it half awake. |
| "Navbat: oʻng" on the feed tile | Which breast is next is the second 3am question. Nara remembers the side, and so do we. |
| Centre moon + | A way to log from any tab, not just Today. |
| Tab bar | Bugun, Kundalik, Oy, Soʻrang. Four places, nothing hidden in a menu. |

Changed on 13 Oct: the list went from 5 entries to 2 and moved down above the tiles, and the tile numbers got bigger.

## T2 Log sheet (centre +)

**Based on:** Lifesum's centre + that opens a grid of big tiles.

| Element | Why it's here |
|---|---|
| Sheet from the + | Logging from Diary, Moon or Ask without going back to Today. |
| The same three tiles | Same shapes as on Today, so there's nothing new to learn. |
| Time since under each tile | She still sees the answer while choosing. |
| Close button | She opened it by mistake, one tap out. |

## T3 Feed, breast

**Based on:** Nara Baby (left and right timer that remembers the last side), Huckleberry (feed timers are the core free feature).

| Element | Why it's here |
|---|---|
| Koʻkrak / Shisha switch | The two kinds of feed in v1. One screen, not two entry points. |
| "Keyingisi: chap" | She doesn't have to remember which side was last. |
| Two big round timers | One tap starts a side. Tapping the other side switches. 156 pt targets, usable without looking. |
| Running time, large | She glances at it mid-feed. |
| "Boshlandi 14:20" row | Fix the start if she began before opening the app. |
| "Ovqatni tugatish" | One clear end. Saves and closes. |

## T3 Feed, bottle

**Based on:** Me+ (presets above a number pad).

| Element | Why it's here |
|---|---|
| Big amount, tap for a keypad | Shows the amount she's saving. Tapping it opens a number pad for odd amounts. The − and + buttons were dropped on 13 Oct, since the chips and keypad cover it. |
| Chips 30, 60, 90, 120 | The amounts she pours most. Most bottles take one tap. |
| "Qachon: Hozir" | Defaults to now. She changes it only when logging late. |
| Saqlash | Bottle has no timer, so it needs a save. |

## T3 Feed, still feeding?

**Based on:** none of the references handle this well. It came from the UX review: a timer left running overnight ruins the day's numbers.

| Element | Why it's here |
|---|---|
| Question at 60 minutes | Catches the timer she forgot when she fell asleep feeding. |
| "Ha, davom etyapti" | Some feeds really are long. One tap and it stays out of her way. |
| "10, 20, 30 daq oldin" chips | Ends the feed at roughly the right time, without a time wheel. |

## T4 Sleep

**Based on:** Toggl Track (start first, details later), Bevel (asleep, start, end).

| Element | Why it's here |
|---|---|
| One big Boshlash | Starting a nap is one tap. |
| "Allaqachon uxlayaptimi?" chips | She usually remembers to log after the baby is already asleep. |
| "Oʻtgan uyquni qoʻshish" | Adds a nap that's already over, with a start and an end. |

## T5 Diaper

**Based on:** Finch's one-tap mood (tap and it's saved), Nara (wet, dirty or dry in one tap).

| Element | Why it's here |
|---|---|
| Hoʻl, Iflos, Ikkalasi as big buttons | One tap saves and closes. No save button, because a diaper has no details worth asking about. |
| "Bir bosishda saqlanadi" | Without this line, people look for a save button that isn't there. |
| Vaqt row | Change the time first, only if it was earlier. |

## T5 Diaper, stool colour

**Based on:** Flo's chips for symptoms, kept to one optional row.

| Element | Why it's here |
|---|---|
| Six colour swatches | Pale stool is an early warning sign doctors want caught. Pale or red goes to the red-flag check. |
| "Ixtiyoriy" and skip | The diaper is already saved. This never blocks her. |
| Toast above it | Shows the diaper saved before the question. |

Needs the doctor's approved colour chart before it ships.

## T8 Earlier time

**Based on:** How We Feel ("When did you…?" with a wheel), MacroFactor (big time buttons instead of a wheel), Toggl (logging late is normal).

| Element | Why it's here |
|---|---|
| Chips Hozir, 5, 15, 30 min, 1 hour | The usual cases in one tap. |
| Day, hour and minute wheel | For the odd time, like a feed from last night. It follows the phone, 24 or 12 hours. |
| Tayyor | Confirms and goes back to the log. |

## T1 Today, timer and undo

**Based on:** Toggl Track (the running bar), Finch (a short thank-you after a log).

| Element | Why it's here |
|---|---|
| Timer bar above the tiles | A running feed or sleep stays visible on every tab and stops from there. |
| "Taglik saqlandi · Qaytarish" toast | Undo instead of "are you sure?". 5 seconds by day, 8 at night. |
| "1 ta kutmoqda" cloud mark | One quiet sign that something waits to sync, instead of a dot on every entry. |

## T7 Edit entry

**Based on:** Toggl's edit sheet (start, stop, set to last stop).

| Element | Why it's here |
|---|---|
| Same sheet as the log | Nothing new to learn. |
| Tomon, Boshlandi, Tugadi rows | The three things people get wrong at 3am. |
| Davomiyligi, Kim yozdi | Read-only. Shows what she's about to change and who logged it. |
| Saqlash | Saves the edit. The red-flag rules run again. |
| "Yozuvni oʻchirish" | Delete, with an Undo toast and no confirm. |

## T1 Today, day 2 card

**Based on:** Stoic (pick reminders next to a sample, then the system prompt), Gaia (everything off until you turn it on).

| Element | Why it's here |
|---|---|
| Card on the second day | The only time the app asks about notifications, after she has used it. |
| Sample notification | She sees exactly what she'd get before saying yes. |
| "Ha, ayting" / "Kerak emas" | Two clear answers. The system prompt only follows a yes. |
| Close × | Closing is final. It never comes back. |

## Drop proposals

None. Every element above answers a question she has at 3am, protects her data, or protects the baby.
