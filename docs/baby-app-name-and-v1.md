# Baby app: name and v1 feature list (native Expo, Uzbek first)

Checked Oct 12, 2026 (Tashkent time).

**How I checked:**
- **App Store:** Apple's iTunes Search API in the **US, UZ and RU** stores.
- **Google Play:** the Play search page with the store set to Uzbekistan.
- **.app and .com:** RDAP (Google Registry and Verisign). "No record" means no registration is on file; it is not a guarantee you can buy the name.
- **.uz:** I couldn't run a WHOIS lookup on the box, so I only checked DNS (dns.google). **NXDOMAIN** (no DNS) only suggests the name *may* be free; confirm at cctld.uz or a registrar. "Exists" means the domain is taken.
- **No trademark search** was done (Uzbekistan's IP agency, Rospatent, USPTO).

## 1. Name candidates

| # | Name | Meaning (UZ / RU / EN) | Store conflicts | .app / .com / .uz | Verdict |
|---|---|---|---|---|---|
| 1 | **Oyjon** | UZ: "dear moon"; sounds like *oyijon*, "mommy" · RU: Ойжон, easy to say · EN: "Oy-jon", short | None in US/UZ/RU App Store or UZ Play | no record / no record / NXDOMAIN | ✅ Best |
| 2 | **First Moons** | EN: "first months" as moons · UZ: *Birinchi oylar* (oy means both moon and month) · RU: «Первые луны», poetic | No same-name app | no record / no record / NXDOMAIN | ✅ |
| 3 | **Oybola** | UZ: "moon child" (oy + bola) · RU: Ойбола, fine · EN: unusual but easy | None | no record / no record / NXDOMAIN | ✅ |
| 4 | **Allajon** | UZ: "dear lullaby" (*alla*) · RU: Алла is a woman's name, so neutral to slightly odd · EN: may be misread as "Allah" | None | no record / no record / NXDOMAIN | 🟡 Risky in English |
| 5 | **Oyim** | UZ: "my moon" / "my mum" (dialect) · RU: Ойим · EN: short | None | no record / registered / NXDOMAIN | 🟡 .com taken |
| 6 | Twelve Moons | EN good · UZ «O'n ikki oy» is just "12 months" · RU fine | "Moons: Keep in Touch" in the UZ store | no record / registered / NXDOMAIN | 🟡 Weak in Uzbek |
| 7 | Bolajon | UZ: "dear child" | "BOLAJON kundaligi", "BOLAJON tarbiyachi", "Zukko Bolajon" | .com and .uz taken | ❌ |
| 8 | Bolam | UZ: "my child" | "Balam", "Balaan" on Play | .com and .uz taken | ❌ |
| 9 | Oydin | UZ: "moonlit", a common girl's name | — | all three taken | ❌ |
| 10 | Mohim | Persian/UZ: "my moon"; in UZ, *muhim* means "important" (confusing) | — | .com and .uz taken | ❌ |
| 11 | Nurli | UZ: "radiant" | "Nurli – Quran", "Nourli: Breastfeeding Log" | .app and .com taken | ❌ |
| 12 | Mitti | UZ: "tiny" | "Mitti (by SafetyCulture)", 32K ratings | taken | ❌ |

### Shortlist (5)
1. **Oyjon**
   - Warm in Uzbek: it echoes *oyijon* ("mommy") while saying "dear moon", which ties into the moon keepsake.
   - Pronounceable in Russian and English. No app conflicts, and all three domains look open.
   - Store title: "Oyjon: Chaqaloq kundaligi" (Uzbek, "baby diary") / "Oyjon: Baby Tracker" (English).
   - Risk: in English "oy" is a mild exclamation. Minor.
2. **First Moons**
   - Best for global English, and it keeps the moon concept. Clean everywhere.
   - In Uzbek it loses its meaning, so localise the subtitle: "Birinchi oylar".
3. **Oybola**
   - "Moon child" in Uzbek, clean everywhere.
   - Slightly less warm than Oyjon, and unclear in English.
4. **Oyim**
   - Short, and a lovely double meaning in Uzbek. .app and .uz look open, but .com is taken.
5. **Allajon**
   - Gentle meaning (lullaby). All domains look open.
   - Risk: English speakers may misread it as "Allah", and Russian speakers hear the name Алла.

**Recommendation:** **Oyjon** as the brand in every language, with "First Moons" as the English name for the monthly keepsake feature ("Oyjon — First Moons"). Next steps: buy oyjon.app, oyjon.com and oyjon.uz, run trademark searches, and test the name with 10 Uzbek moms and 5 Russian speakers.

---

## 2. V1 feature list (solo, Expo, about 8 weeks)

**Stack:**
- Expo (Reanimated, Gesture Handler, expo-sqlite offline-first, expo-notifications, expo-image-picker)
- Supabase (Postgres, auth, row-level security, pgvector, storage, Edge Functions)
- Gemini Flash for AI answers
- UzbekVoice.ai for speech-to-text
- RevenueCat for global in-app purchases

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
- [ ] Red-flag rules run first (fever under 3 months, breathing problems, convulsions, lethargy, no wet diaper, pregnancy danger signs) and show a fixed screen with a tap-to-call **103** button. No AI text on that screen.
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

### Week-by-week plan (8 weeks)
1. **Week 1:** Supabase schema, auth, family invites, local SQLite with sync, i18n setup (UZ Latin/Cyrillic, RU, EN).
2. **Week 2:** Now screen, log sheet, timers, timeline, edit/delete.
3. **Week 3:** growth plus WHO charts, trends, notifications, night mode.
4. **Week 4:** knowledge card CMS (Supabase table + markdown), card browser, "This week"; start loading cards.
5. **Week 5:** AI: red-flag rules, pgvector retrieval, Gemini answers with citations, log context, rate limits, review log.
6. **Week 6:** voice logging with UzbekVoice, plus pregnancy mode and loss mode.
7. **Week 7:** moon fill animation, keepsake card, sharing; paywall (RevenueCat + code activation + Payme/Click web checkout).
8. **Week 8:** polish, privacy texts, beta with 15–20 moms (TestFlight + Play internal), App Store / Play review.

---

## 3. Content that must exist at launch

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

## 4. More name ideas (round 2, checked Oct 12, 2026)

I checked 20 new names the same way as round 1:
- **App Store:** iTunes Search API in the US, UZ and RU stores, looking for names that are the same or close.
- **Google Play:** the search page with the store set to Uzbekistan.
- **.app and .com:** checked in the registries. 404 means nothing is registered; it doesn't guarantee you can buy the name.
- **.uz:** checked by DNS only. NXDOMAIN (no DNS record) only suggests the name may be free; confirm at cctld.uz.
- **No trademark searches** were done.

**None of the 20 has a same-name app in any store checked.** Play has only loose matches: Uzbek song apps for Yulduz… and Onajon…, and "TinChat" for Tinchoy.

| Name | .app | .com | .uz (DNS) |
|---|---|---|---|
| Ilkoy, Beshikjon, Nurbola, Oyqadam, Mehroy, Beshikoy, Moonjon, Allamoon, Oyjonim, Yulduzoy | no record | no record | no DNS record |
| Onajon | no record | no record | **taken** |
| Oyalla, Tinchoy, Kunoy, Shirinoy, Oyola | no record | registered | no DNS record |
| Oycha, Yulduzcha, Kichkintoy | no record | registered | **taken** |
| Oynur | no record | registered | DNS error (unclear) |

### The best 8 (all: no app conflicts, .app/.com no record, .uz no DNS)

| # | Name | Uzbek | Russian | English | Vibe |
|---|---|---|---|---|---|
| 1 | **Ilkoy** | *ilk oy*, "the first month" or "first moon". A direct Uzbek version of First Moons. | Илкой: easy, neutral | "ILL-koy": short, unusual. "Ilk" is a rare word but harmless. | The cleanest Uzbek twin of First Moons |
| 2 | **Moonjon** | "Dear moon" (moon + *-jon*) | Мунджон: fine | Instantly readable, playful | Cross-language and friendly; works with English as a second language |
| 3 | **Oyjonim** | "My dear moon"; also close to *oyijonim*, "my mommy" | Ойжоним: a bit long | Longer, but sounds sweet | Oyjon's warmer, more personal sibling |
| 4 | **Nurbola** | "Child of light" (*nur* + *bola*) | Нурбола: fine | Easy to say, exotic | Soft and luminous. "Nur" carries a slight spiritual tone, which is positive. |
| 5 | **Mehroy** | "Moon of kindness" (*mehr* + *oy*); also a girl's name | Мехрой: fine | "MEH-roy": "meh" is a mild English meh. | Elegant and maternal. Clashing with someone's name is a minor risk. |
| 6 | **Yulduzoy** | "Star and moon" | Юлдузой: fine | Long for English speakers | Night sky, lullaby feel; very Uzbek |
| 7 | **Beshikjon** | "Dear cradle" (*beshik*) | Бешикжон: fine | Pronounceable, foreign-sounding | Traditional and cosy. Note: UNICEF calls traditional *beshik* practices sensitive, so it could read as endorsing them. |
| 8 | **Oyqadam** | "Moon step", i.e. month by month, first steps | Ойкадам: the q becomes к | The "q" is hard for English speakers | Growth journey; good story, harder to say |

**Not shortlisted:**
- **Allamoon:** English speakers may misread "Alla" as Allah.
- **Beshikoy:** weaker than Beshikjon.
- **Oyalla, Kunoy, Shirinoy, Oyola, Tinchoy:** .com is taken.
- **Oycha, Yulduzcha, Kichkintoy, Onajon:** .uz is taken.
- **Oynur:** the .uz check gave a DNS error, and it's a common name.

**Suggestion:** the strongest family is **Oyjon** (brand) with **Ilkoy** or **Moonjon** as backups. "Oyjon — Ilkoy / First Moons" could also name the keepsake feature. Before deciding: say each name aloud to 10 Uzbek and 5 Russian-speaking moms, then run trademark checks.
