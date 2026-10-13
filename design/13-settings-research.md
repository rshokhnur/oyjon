# 13 Settings research

How 15 apps lay out settings, switch language, edit a profile, hand over your data and delete an account, and what oyjon's Settings can borrow. This is the text version of the "Settings research" section on the Settings page of the [oyjon-flow FigJam board](https://www.figma.com/board/ZyESbImvUcKhpd37KaCcBN/oyjon-flow). The screenshots live on the board only.

Researched 13 Oct 2026. Mobbin has no baby trackers, so Gaia, Huckleberry, Nara and Glow come from their sites and App Store pages. The other 11 are settings, language, export and delete flows on Mobbin.

## 1. The flows

### Baby trackers not on Mobbin

**Gaia Baby.** Main reference. Notes from [gaiababy.app](https://gaiababy.app/).

- Units: ml or oz, kg or lb.
- Every notification is off until you turn it on.
- Delete lives in the app under Account. If you're the only caregiver, the family and its entries go for good.
- CSV import from Nara and Huckleberry. The site doesn't describe an export.
- Eight languages. No Uzbek or Russian.

**Huckleberry.** Notes from the [App Store listing](https://apps.apple.com/us/app/huckleberry-baby-tracker/id1169136078).

- Several children, each with a profile, and sync across caregivers.
- A keypad option for typing amounts instead of using a wheel.
- English only. The listing doesn't mention export.

**Nara Baby.** Notes from the [App Store listing](https://apps.apple.com/app/id1444639029).

- Add a child or stop tracking one under account settings.
- Units can switch between oz and ml.
- Export exists. A release note fixed new users not being able to export.

**Glow Baby.** Notes from the App Store listing.

- The listing says little about settings.

### Flows on Mobbin

**[Visible, profile](https://mobbin.com/flows/025b87bb-1114-4b66-a51f-cfb510b7332e).** 2 screens.

- Profile starts with your name and "My account".
- "Health Report PDF" and "Data export" sit next to each other as normal rows, not hidden away.

**[Lifesum, settings](https://mobbin.com/flows/6517f67d-4a43-4bcb-97ba-069140d4c4f5).** 3 screens.

- Grouped under small caps headings: Account, Diary and notifications, Help.
- "Sources of recommendations" is a row of its own under Help.
- Log out sits alone at the bottom with the version number.

**[DailyArt, deleting an account](https://mobbin.com/flows/937f1d94-a5c0-4111-ad3a-9ed9b06aa51e).** 5 screens.

- Settings uses segmented controls for small choices: Units, Text size, Theme. One tap, no new screen.
- Delete asks why, with "Decline to answer" as one of the options.

**[Manus, changing language](https://mobbin.com/flows/8ff9fbc6-5580-4568-99c4-5953a69c447d).** 4 screens.

- The Language row shows the current language on the right.
- Each language is written in its own script, with the name in the current language under it.
- Pick one and the whole app switches at once, settings included.

**[Hypelist, changing language](https://mobbin.com/flows/cfdba0ce-3d99-4eb0-8a29-a52d2615267a).** 3 screens.

- "Spanish - Español". Both names on one line.
- The title changes to "Idioma" straight away, so you can see it worked.

**[Wanderlog, deleting an account](https://mobbin.com/flows/6a135bd7-fc1c-44b8-97fe-0dca73ce2724).** 6 screens.

- A red warning box says the data is gone for good. A reason and a tick box come before the button.
- After that, the account page says it's scheduled for deletion in 1 week, with the date and a "Cancel deletion" button.

**[Wolt, deleting an account](https://mobbin.com/flows/7c0b42e3-7885-4bf9-a688-e6cdebb7ef58).** 6 screens.

- Warns about an active membership first.
- Asks for a reason, with an optional comment.
- "Your account will be deleted soon. You can cancel within 30 days." A counter shows days left.

**[Formula 1, deleting an account](https://mobbin.com/flows/d0299d00-bb2d-4a1b-a00d-0de5ae0bbc15).** 6 screens.

- "Delete my account" is a quiet underlined link at the bottom of My account.
- Four steps with a "4/4" counter and two tick boxes.
- "If you accidentally deleted your account, you have 7 days to reactivate it."

**[Meta AI, exporting your information](https://mobbin.com/flows/5dc7a154-3241-47dc-9c8a-d0d66aeeaef9).** 4 screens.

- Choose what to include, the date range, the format and media quality.
- "When your export is ready, we'll send you a notification." The files stay for four days.
- Thorough, but five choices for a mum who just wants her baby's diary.

**[Binance, privacy center](https://mobbin.com/flows/b06e011d-342b-45fd-b6bb-dfbd6a82feaf).** 2 screens.

- One "Privacy Center" page holds Download personal data, Rectify personal data and Delete account.
- Everything about your data in one place.

**[LinkedIn, download data](https://mobbin.com/flows/323b835c-94c1-40f1-95f2-cbaf6aaf2125).** 2 screens.

- "This feature is optimized for our desktop site", then six steps to follow on a computer.
- What not to do. Many of our mums don't have a computer.

## 2. Side by side

| App | Layout | Language | Profile | Export | Delete | Undo window |
|---|---|---|---|---|---|---|
| Gaia Baby | Account, units, notifications | 8, no Uzbek or Russian | Per caregiver | Not described | In the app, under Account | None, gone for good |
| Huckleberry | Not described | English | Several children | Not mentioned | Not described | Not described |
| Nara Baby | Account settings | English | Add or stop a child | Yes | Not described | Not described |
| Glow Baby | Not described | Not described | Not described | Not described | Not described | Not described |
| Visible | Rows under your name | Not shown | My account | PDF and data export rows | Not shown | Not shown |
| Lifesum | Small caps groups | Not shown | Account settings | Not shown | Not shown | Not shown |
| DailyArt | Rows and segmented controls | A row | Account details | Not shown | Reason, "Decline to answer" | Not shown |
| Manus | Groups with values on the right | Own script, switches at once | Account row | Data controls row | Not shown | Not shown |
| Hypelist | Grouped cards | "Spanish - Español" | Not shown | Not shown | Not shown | Not shown |
| Wanderlog | Account page | Not shown | Name, username, email | Not shown | Warning, reason, tick box | 1 week, Cancel deletion |
| Wolt | Long account list | Not shown | Name, email, phone | Not shown | Reason, optional comment | 30 days |
| Formula 1 | My account | Not shown | Name, email | Not shown | Four steps, tick boxes | 7 days |
| Meta AI | Accounts Center | Not shown | Not shown | Five choices, notified later | Not shown | Files kept 4 days |
| Binance | Privacy Center | Not shown | Rectify data | Download personal data | Same page | Not shown |
| LinkedIn | Data privacy | Not shown | Not shown | Desktop only | Not shown | Not shown |

### Patterns

- **Show the current value on the row.** Manus shows "English" and "Follow system" on the right, so she doesn't have to open a row to know.
- **Small choices stay on the page.** DailyArt's segmented controls change units or theme with one tap.
- **Each language in its own name.** Manus and Hypelist show the native name, so anyone can find their language even in the wrong one.
- **Language switches at once.** No restart, and the screen title changes to prove it.
- **Data controls live together.** Binance's Privacy Center and Visible's export rows put everything about her data in one spot.
- **Export happens on the phone.** LinkedIn's "use a desktop" is the failure case. Meta waits and notifies, which is slow.
- **Delete is quiet but findable.** At the bottom, in red or underlined, never a big button.
- **Delete asks why, and lets you skip.** DailyArt's "Decline to answer", Wolt's optional comment.
- **A grace period undoes a mistake.** Wanderlog 1 week, Formula 1 7 days, Wolt 30 days.
- **One person, several children.** Huckleberry and Nara both support it. Our v1 is one baby, so the row says just the baby's name.

## 3. Ideas for oyjon

v1 only. One baby, four languages, free, no family. Each idea has a priority.

1. **S1 opens with the baby (must).** A card with the baby's moon avatar, name and "3 oy 12 kun". Tap it for the baby profile.
2. **Baby profile edits one baby (must).** Name, birth date, sex (set on D3), and an optional birth weight. No "Add a child" row.
3. **Changing the birth date warns once (must).** "The moon and the charts will move to match." Then it saves.
4. **Language and script on one row (must).** The row shows "Oʻzbekcha (lotin)". The list shows each one in its own name: Oʻzbekcha (lotin), Ўзбекча (кирилл), Русский, English.
5. **The language switches at once (must).** No restart. Oyim's answers and the cards follow. Saved keepsake cards stay as they were made.
6. **Two notifications, both off (must).** "Moon is full" and "Questions are back on Monday". Each with an example line under it, the way onboarding showed it.
7. **Account shows if her diary is backed up (must).** Signed in: the phone number and Sign out. Not signed in: "Not backed up yet" and a Back up button.
8. **Privacy and data in one place (must).** Consent for health data, the optional question log toggle, Export, and Delete.
9. **Export is one file, made on the phone (must).** Logs and growth as a spreadsheet file, sent through the phone's share sheet right away. No email and no waiting.
10. **Delete is honest and quiet (must).** At the bottom of Privacy and data. It offers "Save a copy first?", asks an optional reason with "Prefer not to say", then one confirm.
11. **Seven days to change her mind (must).** Phone data goes at once. The server copy goes after 7 days. Signing in again within 7 days brings it back. Not signed in means it's gone at once.
12. **Help and about (must).** Who checks Oyim's cards, a Telegram support link, terms and privacy, the version.
13. **Night mode switch (should).** On by default from 21:00 to 06:00, from the Quick log research.
14. **A short reason list (should).** Three reasons and "Prefer not to say", so the team learns why mums leave.
15. **Add a second baby (later).** Already on the Later page as multiple babies.
16. **A doctor PDF in Export (later).** Ties to the Diary research.
17. **Units other than kg, cm and ml (later).**
18. **Dark mode by choice and text size (later).**

### Proposed v1 flow

Language is two taps from Settings, and delete takes four on purpose.

1. Tap the baby's avatar on Today, S1 Settings opens (must)
2. Baby card, then the baby profile. A birth date change warns once (must)
3. Language and script, pick one, the app switches at once (must)
4. Notifications, two switches, both off (must)
5. Privacy and data, S6. Export sends a file. Delete offers a copy, asks why, confirms once (must)
6. 7 days to change her mind, then the server copy is gone (must)

### Priorities by screen

| Screen | Priority | Note |
|---|---|---|
| S1 Settings | must | Baby card on top, values on each row |
| Baby profile | must | One baby, birth date warning |
| Language and script | must | Four options, own names, switches at once |
| Notifications | must | Two switches, both off |
| Account and backup | must | Shows if the diary is backed up |
| S6 Export and delete | must | Consent, export, delete in one place |
| Export file | must | Made on the phone, share sheet |
| Delete with 7 days to undo | must | Offers a copy first |
| Help and about | must | Who checks the cards, Telegram support |
| Night mode switch | should | 21:00 to 06:00 |
| Reason list on delete | should | With "Prefer not to say" |
| Second baby, doctor PDF, other units, dark mode and text size | later | On the Later page as proposals |

## 4. Decisions

Picked by Claude on 13 Oct 2026 and decided on 13 Oct 2026. Shokhnur can still change any of them.

1. S1 starts with a baby card that opens the baby profile, one baby only. Decided: yes.
2. Each language shows in its own name and script, and the app switches at once with no restart. Decided: yes.
3. Saved keepsake cards keep the language they were made in. Decided: yes.
4. Only two notifications in v1, "Moon is full" and "Questions are back", both off by default. Decided: yes.
5. Export is one spreadsheet file made on the phone and shared through the share sheet. Decided: yes.
6. Delete keeps the server copy for 7 days so she can change her mind. Phone data goes at once. Decided: yes.
7. Delete offers "Save a copy first?" before anything else. Decided: yes.
8. Changing the birth date warns that the moon and charts will move. Decided: yes.
9. A night mode switch, on by default from 21:00 to 06:00. Decided: keep as should.
10. A doctor PDF in Export. Decided: later.

To do before the final screens:

1. Ask the lawyer whether a 7-day grace period fits Uzbekistan's personal data law for health data.
2. Have a native speaker check every Settings label in Cyrillic Uzbek and Russian. Settings words get long.

## 5. UX review

Done on 13 Oct 2026. I went through Settings as a mum who switched to a script she can't read by mistake, one whose phone blocked notifications, one sharing a phone with her sister, and one deleting the app offline. The diagram on the [Settings page](https://www.figma.com/board/ZyESbImvUcKhpd37KaCcBN/oyjon-flow?node-id=12-988) now shows each fix as a numbered badge.

One baby, no family, no Plus row in v1. Language is two taps from Settings. Delete takes four taps on purpose.

### Revised flow

1. Tap the baby avatar on Today. It has a small gear mark and a 48 pt tap area.
2. S1 Settings, with the baby card on top and the current value on each row.
3. Baby profile. A birth date change warns once that the moon and charts will move. Saved cards stay.
4. Language and script. Switches at once, with a 10 second Undo in the old language.
5. Notifications. Both off. If the phone blocks them, the row says so and opens the phone's settings.
6. Account. "Not backed up yet" goes to O6. Sign out sends waiting entries first, then clears this phone.
7. S6 Privacy and data. Export makes one spreadsheet in her language. Delete offers a copy, asks why, confirms once. Phone data goes now, the server copy after 7 days, and an offline request goes when she's back online. Switching off health consent leads into Delete.
8. Help and about, with a "Call 103" row on top, using her country's number (question 1).

### Issues and fixes

| # | Priority | What goes wrong | Fix |
|---|---|---|---|
| 1 | should | A baby photo doesn't say "settings" and is hard to reach | Small gear mark on the avatar, 48 pt tap area |
| 2 | must | A wrong tap switches to a script she can't read | 10 second Undo in the old language, each language in its own script |
| 3 | must | The phone blocks notifications and the switch does nothing | "Turn on in phone settings" opens the right page |
| 4 | must | On a shared phone, sign out leaves the diary, and unsent entries can be lost | Send waiting entries first, say how many if it can't, then clear this phone |
| 5 | must | Deleting offline or without a backup is unclear | Phone data goes now, server copy after 7 days, an offline request goes when she's back online |
| 6 | should | An English "export.csv" helps nobody | File named with the baby and date, columns in her language. Empty export explains why |
| 7 | must | Switching off the required health consent had no outcome | Says it means deleting the diary and goes into Delete, copy offered first |
| 8 | should | Night mode | On by default 21:00 to 06:00, switch here |
| 9 | should | Turning off the question log leaves old questions on the review list | Past questions are removed too, and one line says so |

### Keep or drop, decided 13 Oct 2026

1. A "Call 103" row at the top of Help that opens A3. The number comes from her country. Right now A3 only opens from a red flag. Decided: keep, must.
2. An "Oyim's words" switch to turn her text off and keep the motion. The companion rules promise it. Decided: keep as should.

## 6. Global-ready

Added on 13 Oct 2026. Uzbekistan is the default, and nothing here is fixed to it. The full list is in [`14-global-ready.md`](14-global-ready.md).

- A new Country row sits under Language. It opens the country picker (the one proposal in [design/14](14-global-ready.md)). Changing the country changes the emergency number, cards, rules, phone code and support link, never the language.
- The "Call 103" row on Help shows her country's number.
- The support link is Telegram in Uzbekistan and email elsewhere, until a country gets its own channel.
- Export uses her language for column names, her date and number formats, and metric values with the unit in each column name.
- Consent, terms, privacy and the 7-day delete grace come from the country's legal pack, which a lawyer checks before launch there.
- Units stay off Settings in v1. They follow the country.
