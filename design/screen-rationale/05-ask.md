# Ask: where each screen comes from and why each part is there

Wireframes: the "5 Ask" row on [04 Wireframes](https://www.figma.com/design/bg1FIs5wZOY9m0wUWkTJTe/oyjon-app?node-id=3-5). References are the apps in [`../10-ask-research.md`](../10-ask-research.md).

The baby apps with AI (Huckleberry's Berry, GlowGPT) answer from the baby's logs but don't name their experts or say what happens in an emergency. That gap is the reason Ask exists. Oyim answers only from cards a named doctor checked, and red flags go to a call button before any AI runs.

## A1 Ask

**Based on:** Perplexity (example questions above the input), Flo's assistant (it starts from what you logged), Character AI (one small line under the input instead of a pop-up).

| Element | Why it's here |
|---|---|
| Oyim with "Nima haqida soʻramoqchisiz?" | A face and a plain question. Less scary than an empty chat box at 3am. |
| Three small moons, "Bu hafta 3 ta savol" | She sees her weekly limit before she types, so the limit never surprises her. |
| "Laylo uchun" suggested questions | Built from her last day of logs. Typing is hard for a tired or low-literacy mum, so one tap is the main way to ask. |
| "Kartalar kutubxonasi" link | Reviewed answers she can read without spending a question. |
| "Savollarim" link | Her past answers, so she doesn't ask the same thing twice. |
| Input with a send button | For the question that isn't in the suggestions. It takes Uzbek Latin, Cyrillic and Russian. |
| "Oyim shifokor emas. Xavf boʻlsa, 103 ga qoʻngʻiroq qiling." | The disclaimer is always visible and never a pop-up. The number comes from her country. |

## A1 Ask, checking

**Based on:** Perplexity (it lists what it is doing while it works).

| Element | Why it's here |
|---|---|
| Her question in a bubble | Confirms what was sent. |
| Oyim's thinking moon and "Tekshiryapman: …" | Says what it's checking, so a slow network doesn't look broken. |
| "Hali savol hisoblanmadi." | A question counts only when an answer arrives. A failed request costs her nothing. |

## A2 Answer card

**Based on:** Perplexity (numbered sources that point back to cards), ChatGPT (feedback under the answer, kept to yes or no), Ada (a calm next step).

| Element | Why it's here |
|---|---|
| The question as the title | She knows which question this answers when she comes back to it. |
| 2 to 3 short sentences with [1] [2] | Short enough to read with a baby in one arm. Every claim points to a card. |
| Source chips | One tap opens the reviewed card behind the claim. |
| "Oyim nimaga qaradi" box | Shows which of her logs the answer used. If there are too few logs it says so instead of showing zeros. |
| "Shifokor koʻrib chiqqan: …" | Names the doctor. Berry and GlowGPT don't, and this is the trust gap Ask fills. |
| "Foydali boʻldimi? Ha / Yoʻq" | A "no" goes to the doctors' review list, so weak cards get fixed. |
| "2 ta savol qoldi" by the input | She knows a follow-up uses a question before she asks it. |

## A2 Answer card, no checked answer

**Based on:** Ada ("not a diagnosis, ask a professional"), turned into one kind line.

| Element | Why it's here |
|---|---|
| "Bu savolga tekshirilgan javobim yoʻq." | Oyim never guesses. This is the non-negotiable no-dose, no-diagnosis rule. |
| "…shifokoringiz yoki farmatsevtdan soʻrang." | Gives her a person to ask instead of a dead end. |
| "Bu savol hisobga olinmadi." | Being refused shouldn't cost her one of her 3 questions. |
| Nearest cards | Still something useful to read. |

## A3 Red flag

**Based on:** Wysa SOS (white page, two big call buttons, no mascot), Ada (urgent cause first).

| Element | Why it's here |
|---|---|
| "Hozir tez yordam chaqiring" | One instruction, nothing to interpret. |
| "Siz yozdingiz: …" | Shows what triggered it, so she trusts it and can tell the operator. |
| Huge "103 ga qoʻngʻiroq" button | One tap to the dialer. The number comes from her country. |
| "Shifokoringizga qoʻngʻiroq" | For when it feels less urgent but still worrying. |
| Three "while you wait" lines | Fixed, doctor-written text. No AI on this screen. |
| "Men yaxshiman, orqaga" | A calm way back if it was a false alarm. |
| No Oyim, no tab bar | Nothing playful and no other place to go. Opens offline, before any AI call. |

## A1 Ask, week used

**Based on:** Claude (a slim limit note, not a wall). Deepstash is the counter-example: a dead end that says "0 tokens left".

| Element | Why it's here |
|---|---|
| "Bu haftalik savollar tugadi." with empty moons | Says no calmly, in the same place she saw the count. |
| "Dushanba kuni qaytadi" | Tells her exactly when. Monday 00:00 in her own time zone. |
| Matching cards | She still gets reviewed answers. |
| Input still works | A typed red flag still reaches A3. |

## A1 Ask, offline

**Based on:** Claude and Perplexity both keep the draft. Ours adds offline cards.

| Element | Why it's here |
|---|---|
| "Internet yoʻq" banner | Says why sending is off. |
| Her text stays in the box | Nothing she typed is lost. |
| Matching cards | The library works offline. |

## A4 Card library

**Based on:** Flo's topics list ("made with medical experts").

| Element | Why it's here |
|---|---|
| Search and topic chips | Find a card in two taps. |
| Each card with its reviewer and age range | Trust and relevance in one row. |
| Free, offline, never counted | The safe answers are always open. |

## A5 Card detail

**Based on:** Ada's "how medical quality works", one card at a time.

| Element | Why it's here |
|---|---|
| Age and country tags | She knows the card fits her baby and her country. |
| Reviewer and date | Who checked it and how fresh it is. |
| Body, "call your doctor if" list, source | The full reviewed text behind every citation. |
| "Savol berish" | Ask about this topic straight from the card. |

## A6 My questions (should)

**Based on:** Claude's chat list.

| Element | Why it's here |
|---|---|
| Past questions by week, with dates | She rereads an answer instead of spending a question on it again. Kept on the phone only. |

## Drop proposals

None. The weakest element is "Foydali boʻldimi?". It earns its place because it's the only signal that tells the doctors which cards need fixing.
