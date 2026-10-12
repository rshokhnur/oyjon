# Product: v1 scope

What v1 ships, what's free vs paid, and what content has to exist at launch. Safety rules are in [`safety.md`](safety.md), screens in [`screens-and-flows.md`](screens-and-flows.md). If anything here conflicts with `CLAUDE.md`, `CLAUDE.md` wins.

## 1. V1 features

Stack: see `apps/mobile/CLAUDE.md`. Build order: see [`../roadmap.md`](../roadmap.md).

### Must have (launch)

**Accounts and family**
- [ ] Sign-in by phone OTP or Apple/Google login; each caregiver has their own login.
- [ ] Invite a caregiver by link (shareable in Telegram), with roles (parent / helper); removing someone keeps their entries.
- [ ] Offline-first log with background sync and conflict-safe merging; "Saved ✓" is always visible (Nara's lost-feed bug is the lesson).

**Tracking**
- [ ] Feeds: breast (L/R timer), bottle (ml, formula or breast milk), solids (a simple note).
- [ ] Sleep: start/stop timer and a manual range.
- [ ] Diapers: wet / dirty / both.
- [ ] Growth: weight, length and head circumference, plotted on WHO charts calculated on the phone.
- [ ] Now screen: "time since" for last feed, sleep and diaper, plus one-tap log tiles.
- [ ] Day timeline showing who logged each entry; edit and delete.
- [ ] Simple 7-day trends (no targets or scores).

**Pregnancy mode (light)**
- [ ] Due date, week counter and countdown moons.
- [ ] One short Uzbek card a week.
- [ ] Bump photo and one-line note.
- [ ] Switch to baby mode on birth, with a birth-story prompt.

**Loss mode**
- [ ] "Pregnancy ended / we lost our baby" in settings: stops every pregnancy notification and card at once, quietly archives or deletes entries (her choice), and shows a single gentle support card. Doctor-reviewed wording.

**Monthly moon keepsake**
- [ ] The moon fills from logs and photos through the month.
- [ ] On the month-day: a card with photo, numbers, firsts and one line she writes; save to the gallery or share.

**Uzbek AI assistant ("So'rang", "Ask")**
- [ ] Red-flag rules run first (fever under 3 months, breathing problems, convulsions, lethargy, no wet diaper, pregnancy danger signs) and show a fixed screen with a tap-to-call emergency button (**103** in Uzbekistan, from region config). No AI text on that screen.
- [ ] Retrieval from vetted cards only; answers of 3–5 sentences with numbered citations and "Reviewed by Dr. …".
- [ ] Uses a 24h/7-day summary of the baby's logs (counts only) as context.
- [ ] Refuses diagnosis, medicine dosing and anything outside the cards: "shifokoringizdan so'rang" (ask your doctor).
- [ ] Thumbs up/down and an anonymous log of questions (opt-in) for weekly doctor review.
- [ ] Rate limits and a cache for common questions.

**Knowledge cards**
- [ ] Browse by age and topic; a "This week" set of 3 cards matched to the baby's age.

**Voice logging (Uzbek and Russian)**
- [ ] Hold to speak (up to 15 s), e.g. "chap ko'krak 15 daqiqa, ho'l taglik" (left breast 15 min, wet diaper), turned into proposed entries to confirm.

**Language**
- [ ] UI in Uzbek Latin, Uzbek Cyrillic (automatic transliteration), Russian and English.
- [ ] Cards and AI answers in Uzbek at launch; Russian and English cards come in v1.1.

**Payments (realistic v1)**
- **Global:** RevenueCat in-app purchases (App Store/Play) in US/EU and other markets where cards work.
- **Uzbekistan:** **Payme/Click web checkout opened in the browser, outside the app**, which unlocks the account on the server.
  - Needs a registered local entity (a sole proprietor is enough to start).
  - Apple and Google rules generally don't allow linking to outside payments for digital goods unless the store's exception or reader programs apply. **Verify the current store rules before launch.**
  - Lowest-risk option: inside the app show only "Activate code". Sell the codes or passes on a website or Telegram bot paid via Payme/Click. Free logging means you are never stuck.
- [ ] Restore purchases; one entitlement covers the whole family.

**Privacy and basics**
- [ ] Explicit consent for health data; delete account and data in the app; CSV/JSON export (free).
- [ ] No ad SDKs. Only count summaries are sent to the AI. Photos stay on the device unless shared to the family.
- [ ] Privacy policy (UZ/RU/EN), medical disclaimer, the store's health-app declarations. Before launch: a lawyer reviews the cross-border data transfer under the 2026 law.
- [ ] Dark/night mode with dim warm colours, haptics, large text.

### Nice to have (if time)
- [ ] Widgets / Live Activity for "time since last feed" and the running timer.
- [ ] Optional nap-range prediction from the baby's own data (off by default).
- [ ] Vaccination schedule from the Ministry of Health with reminders.
- [ ] Pumping log and medicines log (no dosing advice).
- [ ] Caregiver notifications ("Dilnoza logged a feed").
- [ ] Import from Huckleberry/Nara CSV.
- [ ] Russian versions of the cards.
- [ ] Milestone "firsts" with photos.

### Later (not v1)
- Telegram Mini App and bot sharing the same backend.
- First-year PDF book, then printing.
- English cards and a global launch push.
- Postpartum mom check-ins (mood is a private note only).
- Twins and multiple children in polished form (basic multi-child support can be there from the start).
- Apple Watch, Siri, Android quick tiles.
- Community, doctor consultations, a marketplace.
- Photo analysis (rashes, stool). Never in v1, for liability reasons.
- Kazakh/Kyrgyz/Tajik versions.

### Free vs paid

| | Free | **Oyjon Plus**: 15,000 UZS/mo · 99,000 UZS first year (≈$8) · global $3.99/mo or $19.99/yr |
|---|---|---|
| All tracking, family logins, sync, WHO charts | ✓ forever | ✓ |
| Pregnancy mode, loss mode, red-flag 103 screen | ✓ | ✓ |
| Knowledge cards | ✓ all | ✓ |
| AI questions | 3 per week | Unlimited (with fair-use limits) |
| Voice logging | 10 per month | Unlimited |
| Moon keepsake | Standard card | HD and themed cards, all 12 moons in a set |
| Export / delete | ✓ | ✓ |
| Ads | Never | Never |

Safety features (103 screen, loss mode, data export) are **never** paid.

## 2. Content that must exist at launch

| Content | Amount | Who writes | Who reviews |
|---|---|---|---|
| Uzbek knowledge cards (0–12 months: feeding, sleep, diapers/stool, crying/colic, skin, fever basics, safe sleep, bathing, development by month, *chilla* recovery, breastfeeding problems) | **≈150 cards**, 120–200 words each, 1–3 source links (WHO / UNICEF / Ministry of Health) | You plus a medical writer, written from scratch (no copying of WHO/UNICEF text) | **A licensed pediatrician** signs every card, plus an **OB-GYN** for the pregnancy and postpartum cards |
| Pregnancy weekly cards | **40** short cards | Same | OB-GYN |
| Red-flag rule set and the wording of the 103 screen | ~25 rules | You plus the doctors | Pediatrician and OB-GYN together, sign-off kept in a record |
| Loss-mode wording | 3–4 screens | Writer | OB-GYN plus a psychologist if possible |
| AI test set | ~200 real-style Uzbek questions with expected behaviour (answer / refuse / 103) | You, from Telegram mom-group questions | Pediatrician checks a sample before launch |
| Language quality | All UI strings and cards | — | A native Uzbek editor (Latin), a spot check of the Cyrillic transliteration, a Russian translator for the UI |
| Legal texts | Privacy policy, terms, medical disclaimer (UZ/RU/EN) | Template | Local lawyer |

**Budget and time:** card writing and medical review is the critical path. Start it in week 1, alongside development. Pay per card or offer the doctors visible credit on the cards.

---
