# 10 Ask with AI research

How 13 apps answer a question, show where the answer came from, and handle a scary one, and what Oyim can borrow. This is the text version of the "Ask with AI research" section on the Ask page of the [oyjon-flow FigJam board](https://www.figma.com/board/ZyESbImvUcKhpd37KaCcBN/oyjon-flow). The screenshots live on the board only.

Researched 13 Oct 2026. Mobbin has no baby trackers, so Huckleberry, Glow, Gaia and Nara come from their sites and press. The other 9 are AI chat, search and health apps on Mobbin.

## 1. The flows

### Baby trackers not on Mobbin

**Huckleberry, Berry.** Notes from the [Berry page](https://huckleberrycare.com/product/berry) and [OCBJ coverage](https://www.ocbj.com/oc-homepage/berry-provides-specialized-expert-vetted-ai-to-help-with-babies-young-children/).

- A 24/7 chat inside the app. It pulls in the child's sleep, feed and diaper logs before it answers.
- It remembers details like feeding patterns, so answers get more specific the more you log.
- Called "expert-vetted". The page doesn't name the experts or say how they review.
- The page has no medical disclaimer and doesn't say what happens with an emergency question.
- Paid. It sits in Premium, about $10 a month billed yearly.
- The closest thing to Oyim on the market, and its weak spots are exactly where Oyim should be strong.

**Glow Baby, GlowGPT.** Notes from [SlashGear](https://www.slashgear.com/1388643/apps-every-new-parent-needs-to-have-installed) and the App Store listing.

- A health assistant called GlowGPT, only in Premium ($59.99 a year per SlashGear).
- The listing talks about "AI insights" but shows nothing about sources or safety.

**Gaia Baby.** Notes from [gaiababy.app](https://gaiababy.app/).

- No AI and no Q&A. Free, no ads, and says baby data is never sold.
- Growth percentiles and nap guesses are worked out on the phone.

**Nara Baby.** Notes from the [App Store listing](https://apps.apple.com/app/id1444639029).

- No AI chat. Free and ad-free. Also tracks the mum's own health after birth.

### Flows on Mobbin

**[Perplexity, asking a question](https://mobbin.com/flows/1267be83-8558-44f9-85dc-72fb7e0b5a54).** 10 screens.

- Home is one line, "Where knowledge begins", with example questions as chips above the input.
- While it works it lists its steps: understanding your question, searching, considering 15 results.
- Sources sit as cards above the answer. Small numbered bubbles in the text point back to them.
- Related questions at the end, and "Ask follow up" stays pinned to the bottom.
- The best model for "where did this come from?" Too many sources for a tired mum, though.

**[Ada, symptom assessment](https://mobbin.com/flows/dc2c5dc4-6695-44fd-b21a-3cd4e7601c9a) and [report](https://mobbin.com/flows/c4ff3481-6d20-41ea-b7d7-627c0eb0d66e).** 10 screens from the two.

- "Hi, I'm Ada. I can help you learn more about your health." One button to start.
- One question per screen with a Previous link. No free typing, symptoms come from a search list.
- Before the report: "The report is not a medical diagnosis. If in doubt, seek advice from a healthcare professional."
- The report puts the urgent cause first, in a red box: "Needs immediate attention. Seek emergency care."
- Every cause has a next step with an icon, like "Seek medical advice".
- "Read about how medical quality works at Ada" sits on almost every screen.

**[Flo, health assistant](https://mobbin.com/flows/747a2069-a6d4-4c0a-b044-38e71b6a5c6a).** 10 of 13 screens.

- It starts from a log. "I see you've logged cramps" opens the chat from Today.
- Looks like a chat, but she picks answers from options and never types.
- Pictures help her point to where it hurts.
- A clear "Seek immediate medical help if" list with fever, bleeding and so on.
- Ends with "How satisfied were you with this chat?"

**[Flo, start a new chat](https://mobbin.com/flows/2fd4ac09-0eee-4a24-82d4-3c74900aeb73).** 5 screens.

- Chats are topics, like Endometriosis or PCOS, each with "Typically 3-6 min".
- "All chats are made with medical experts" under the list.
- "How Assistant works" says plainly that accuracy is untested and it isn't a diagnosis.

**[ChatGPT, a new answer](https://mobbin.com/flows/72a8c97b-e542-481b-b23e-23b33f35ee5b).** 3 screens.

- A long answer with headings and bullets. Good for a recipe, too much for "is 5 wet diapers enough?"
- Under each answer, a row of copy, read aloud, thumbs up and down, and try again.

**[Claude, chats](https://mobbin.com/flows/5a2463f3-fb01-4910-a0c3-b064fc1e3475).** 5 screens.

- The empty chat greets by time of day: "How can I help you this late night?"
- "Get more with Claude Pro" sits as a slim banner above the input, not as a wall.
- Past chats as a list with times and a search box.

**[Wysa, chatting](https://mobbin.com/flows/acedbf77-df04-46ac-8935-ead41689925c).** 10 screens.

- The penguin greets her by name: "Glad you're back!" A big mood face to tap first.
- Short bubbles, then reply chips like "Something calming" and "Got to go!"
- The input says "Reply or say Help".
- A red-outlined SOS button stays at the top of home.

**[Wysa, SOS](https://mobbin.com/flows/ea7ba581-a50e-4a6d-8f68-e3216d578e80).** 2 screens.

- "Are you in crisis? You are not alone. Help is just a call away."
- Two big helpline buttons. White page, no penguin, no jokes.
- "Can't make a call?" offers a safety plan and grounding. Our A3 in its plainest form.

**[Character AI, a reply](https://mobbin.com/flows/a4ce951a-18b1-4ad9-8723-d689263fbaeb).** 3 screens.

- One small line under the input on every screen says it's AI and not a real person.
- The cheapest way to keep a disclaimer in view without a pop-up.

**[Kraken, support chat](https://mobbin.com/flows/d7dc26bd-1484-4a11-9523-8bcc89d7b1fe).** 4 screens.

- The bot's first message says it's an AI chatbot, can make mistakes and can't make promises for Kraken.
- Honest, but it reads like legal text. Oyim should say the same in one warm sentence.

**[Deepstash, AI limit](https://mobbin.com/flows/c3e28dbd-047a-4a57-81bd-4d202b92e5fe).** 2 screens.

- "You have reached the limit of image generation requests. Send us an email." "0 tokens left" and a grey Generate button.
- A dead end with nothing else to do. The opposite of "back on Monday, the cards stay open".

## 2. Side by side

| App | Where you ask | How it answers | Sources | Safety and red flags | Limit | Companion |
|---|---|---|---|---|---|---|
| Huckleberry, Berry | Chat in the app | Advice using the child's logs | "Expert-vetted", no names | Not described | Premium only | Berry |
| Glow Baby | GlowGPT | Not shown | Not shown | Not shown | Premium only | None named |
| Gaia Baby | No AI | None | None | None | Free | None |
| Nara Baby | No AI | None | None | None | Free | None |
| Perplexity | Input on home, example chips | Paragraphs with numbered citations | Source cards above the answer | None seen | Pro toggle | None |
| Ada | One button, then one question per screen | Report of possible causes, each with a next step | "Medical quality" link on every screen | Urgent cause first, in red. "Not a diagnosis" before the report | None seen | Ada says "I" |
| Flo assistant | Starts from a logged symptom | Scripted chat, she picks replies | "Made with medical experts" | "Seek immediate help if" list | None seen | Flo |
| ChatGPT | Input on an empty chat | Long formatted answer | None in this flow | None seen | Model menu | None |
| Claude | Input, greeting by time of day | Chat | None in this flow | None seen | Upgrade banner above the input | None |
| Wysa | Penguin greets, tap a mood | Short bubbles and reply chips | Science cards in exercises | SOS on home, helplines page | None seen | Penguin |
| Character AI | Input | Story replies | None | "This is AI" line under the input | None seen | The character |
| Kraken | Support chat | Bot, then the team | None | AI warning in the first message | None | Kai |
| Deepstash | AI image box | None | None | None | "0 tokens left", email us | None |

### Patterns

- **Health apps narrow the question.** Ada and Flo don't let you type freely. They ask, you pick. Open chat is for general apps.
- **Sources build trust when they're close to the claim.** Perplexity's numbered bubbles beat a "sources" link at the bottom.
- **A named reviewer beats "expert-vetted".** Ada links to how its medical quality works. Berry and Glow just say it.
- **"Not a diagnosis" lives next to the answer.** Ada says it before the report, Character AI under every input. A line at sign-up isn't enough.
- **Emergencies leave the chat.** Ada's red box and Wysa's SOS page both drop the cute voice and give one action.
- **Using her logs makes answers specific.** Flo starts from a logged symptom, Berry pulls the logs before answering.
- **Reply chips save typing.** Wysa, Flo and Perplexity all suggest the next thing to say.
- **Limits need a way forward.** Deepstash stops dead. Claude's upgrade banner and Headspace's "Opens in 13 days" from the Quick log research say what happens next.
- **Showing the steps calms the wait.** Perplexity lists what it's doing, so a slow answer doesn't feel broken.
- **The companion steps aside when it's serious.** Wysa's penguin is gone on the SOS page.

## 3. Ideas for oyjon

v1 only. Oyim answers from doctor-reviewed cards, 3 questions a week, no paywall. Each idea has a priority.

1. **A1 opens with Oyim and three small moons (must).** The moons show this week's questions. Under them, the input and three suggested questions built from her last day of logs, like "Is 6 wet diapers enough?"
2. **Red-flag check comes first (must).** Rules on the phone check the question and recent logs before anything is sent. A match opens A3 and doesn't use up a question.
3. **A2 is a short card, not a chat (must).** Three to five plain sentences, then "Call the doctor if..." in its own line, then the cards it came from as chips with the reviewer's name.
4. **"What Oyim looked at" (must).** Under the answer, the counts she used: "Last 24 hours: 7 feeds, 6 wet diapers." Folded by default.
5. **No reviewed card, no answer (must).** "I don't have a checked answer for this. Please ask your doctor." Then the closest cards. It doesn't use up a question.
6. **The limit says when it comes back (must).** After the third question the input goes quiet: "Savollaringiz dushanba kuni qaytadi." The cards stay open. No upsell.
7. **A4 and A5 work offline (must).** Every card ships in all four languages with the reviewer's name and the review date.
8. **One line under the input (must).** "Oyim shifokor emas. Xavf boʻlsa, 103 ga qoʻngʻiroq qiling." Always visible, never a pop-up.
9. **A3 is plain and red (must).** No Oyim, no moon. A big "103 ga qoʻngʻiroq" button, three things to do while waiting, and a small "I'm OK, go back".
10. **Was this helpful? (should).** Yes or no on each answer. A "no" goes to the doctors' review list.
11. **My questions (should).** Past questions and answers, kept on the phone.
12. **Oyim can ask one thing back (should).** "How old is she in weeks?" when the answer depends on it. Her question doesn't count.
13. **Hold the mic to ask (later).** Moves with voice logging, already on the Later page.
14. **Ask with a photo, like a rash (later).** Needs its own safety review.
15. **Longer back-and-forth chats (later).**
16. **Oyim speaks first, like "she's feeding more than usual" (later).**

### Proposed v1 flow

Most questions take two taps after typing.

1. A1 Ask. Oyim, three moons, the input, three suggested questions (must)
2. Red-flag check on the phone. A match opens A3 Call 103 (must)
3. Online and a question left? If not, related cards from A4, and "back on Monday" when the week is used (must)
4. The server finds reviewed cards and the baby's 24 hour and 7 day counts, then checks for red flags again (must)
5. A2 answer card, or "no checked answer, ask your doctor" (must)
6. Tap a chip for A5 card detail. A4 library is open any time (must)

### Priorities by screen

| Screen | Priority | Note |
|---|---|---|
| A1 Ask | must | Three moons, input, suggested questions |
| A3 Red flag, call 103 | must | No Oyim, doesn't use a question |
| A2 Answer card | must | Short, with chips and "Call the doctor if" |
| A4 Card library | must | Offline, all four languages |
| A5 Card detail | must | Reviewer and date on every card |
| Limit state, "back on Monday" | must | Cards stay open |
| No reviewed answer state | must | Doesn't use a question |
| Offline state | must | Shows related cards instead |
| Disclaimer line under the input | must | |
| Was this helpful? | should | Feeds the review list |
| My questions | should | On the phone |
| Oyim asks one thing back | should | Doesn't count |
| Mic, photo questions, longer chats, Oyim speaks first | later | On the Later page as proposals |

## 4. Decisions

All picked by me on 13 Oct 2026 so the work could keep going. Each is open for the user to keep or change.

1. Oyim answers only from doctor-reviewed cards. If none fit, she says so and doesn't guess. My pick: yes.
2. Red-flag questions and "no checked answer" don't use up one of the 3 weekly questions. My pick: yes.
3. Questions come back on Monday at 00:00 Tashkent time, shown as three small moons. My pick: yes.
4. Each answer shows what Oyim looked at, like the last 24 hours of feeds and diapers. My pick: yes.
5. The mic on A1 moves to Later, with voice logging. My pick: later.
6. Her follow-up counts as a new question. Oyim's own question back doesn't. My pick: yes.
7. A3 has a small "I'm OK, go back" link and never shows Oyim. My pick: yes.
8. "Was this helpful?" on each answer. My pick: keep as should.
9. My questions history, kept on the phone. My pick: keep as should.
10. Photo questions go to Later. My pick: later.

To do before the final screens:

1. Find the reviewing doctor and agree on the first set of cards and the red-flag rule list.
2. Ask 3 to 5 mums for the last three things they googled about their baby, to seed the cards.

## 5. UX review

Done on 13 Oct 2026. I asked questions as a worried mum at night: typed with mistakes, in Russian with the app in Uzbek, on a slow network, offline, with no questions left, and about a fever. The diagram on the [Ask page](https://www.figma.com/board/ZyESbImvUcKhpd37KaCcBN/oyjon-flow?node-id=12-920) now shows each fix as a numbered badge. No new keep or drop questions came out of this one.

### Revised flow

1. A1 Ask. Three moons for this week, the input, three suggested questions from her last day of logs.
2. Red-flag rules on the phone check the question and recent logs in any script. A match opens A3 and doesn't use a question.
3. A question left? If not, she can still type. The red-flag check runs, then matching cards and "back on Monday".
4. Online? If not, matching cards from A4, and her text stays in the box.
5. The server finds reviewed cards and her 24 hour and 7 day counts. A line says what it's checking. Retry after 30 seconds.
6. No card fits, or it's a dose or diagnosis question: "I don't have a checked answer, ask your doctor", the closest cards, and it doesn't count.
7. The server checks for red flags again. A match opens A3 over the answer.
8. A2 Answer card. A question counts only once this arrives. "What Oyim looked at" says when there aren't enough logs. "2 left this week" sits next to the input.
9. A5 Card detail, and A4 Card library any time, offline.

### Issues and fixes

| # | Priority | What goes wrong | Fix |
|---|---|---|---|
| 1 | must | With the week used up, she types a whole question before hearing "back on Monday" | She can still type, the red-flag check runs, then matching cards with "back on Monday" |
| 2 | should | Offline, the question vanishes | Matching cards show and her text stays in the box |
| 3 | must | Typing is hard for a tired or low-literacy mum | Suggested questions from her logs are the main path. Input takes Uzbek Latin, Cyrillic and Russian, the answer comes in the app's language |
| 4 | must | Red-flag words arrive in any script and with typos | Phone rules match all three scripts and common misspellings, plus recent logs |
| 5 | must | A slow wait looks broken, and a failed answer could still use a question | Show what it's checking, Retry after 30 s, count only when an answer arrives |
| 6 | must | "0 wet diapers in 24 hours" for a new user who hasn't logged could scare her | Say there aren't enough logs yet instead of showing zeros |
| 7 | must | Dose and diagnosis questions need a firm no | "Ask your doctor or pharmacist", closest cards, doesn't count |
| 8 | should | After A3 she needs a calm way back | "I'm OK, go back" returns to A1 with her question and cards |
| 9 | should | She can't tell a follow-up uses a question | "2 left this week" next to the input on A2 too |
| 10 | should | Oyim's role during the answer | Thinking moon while loading, then she shrinks. The answer is the card's words and the reviewer's name |
