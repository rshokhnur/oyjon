# First Moons: Uzbek-first AI baby app research

Researched Oct 12, 2026 (Tashkent time). Store data comes from the iTunes Search/Lookup API (UZ and US stores) and Google Play pages. Some figures come from third-party trackers, which are noted where used.

**Bottom line:**
- The Uzbek market is big: 879,599 births in 2025.
- A serious Uzbek-language pregnancy and baby-content app already exists. **Lalu** supports UZ, RU, KK, KY and TG.
- What nobody does well is combine **tracking, memories and a trustworthy AI that answers in Uzbek with citations**.
- Payment is the hard part. Local Uzcard/Humo cards can't pay in the App Store or Google Play.

---

## 1. Existing Uzbek and Russian-language apps

| App | Language | Ratings / downloads | What it does | What's missing |
|---|---|---|---|---|
| **Lalu – Homiladorlik maktabi** https://apps.apple.com/uz/app/lalu-homiladorlik-maktabi/id1669870243 · https://play.google.com/store/apps/details?id=uz.pregnancy.calendar | UZ, RU, KK, KY, TG, TR, EN | iOS UZ: 4.5 (1,467 ratings). Play: 1M+ downloads. Updated Sep 28, 2026. | 40-week calendar, baby's growth by month up to age 1, vaccination calendar, weight, exercises, name meanings, articles, community | **The strongest local player.** Content-first; no real feeding, sleep or diaper tracking, no caregiver sync, no keepsakes; design is utilitarian |
| **Dugonam** https://apkpure.net/dugonam-ayollar-kundaligi/uz.dugonam.mobile | UZ | Small | Cycle, pregnancy, *chilla* (40-day postpartum), **Uzbek AI assistant**, Uzbek recipes | Women's health, not baby care; AI with no visible sourcing |
| **Femly / Homiladorlik Maktabi** https://apps.apple.com/uz/app/femly/id6505111263 | UZ | 4.3 (79) | Planning, pregnancy and child-care modes, vaccinations, recipes | Thin; no tracking |
| **Onalik Baxti** https://apps.apple.com/uz/app/onalik-baxti-homiladorlik/id6783678790 | UZ | 4.3 (108) | Pregnancy calendar | Pregnancy only |
| **Bebbo (UNICEF)** https://apps.apple.com/uz/app/bebbo-parenting-app/id1588918146 | UZ, RU | iOS UZ: 4.3 (24). About 225K registered users in UZ (UNICEF report) | Free and trusted: articles, milestones, growth, vaccinations, games, an FAQ chatbot | No tracking; usage fell after the launch push; feels like an NGO tool |
| **Календарь беременности** https://apps.apple.com/uz/app/%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C-%D0%B1%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8/id1561612139 | RU | iOS UZ: 4.9 (3,531) | Russian pregnancy calendar | Pregnancy only, no Uzbek |
| **amma / maam** https://play.google.com/store/apps/details?id=ru.mobiledimension.kbr | RU and others | 10M+ downloads, 4.6 (≈430K reviews) | Big CIS pregnancy tracker with content and a 4th-trimester section | No Uzbek, little after birth |
| **Pregnancy+ (Philips)** https://apps.apple.com/uz/app/pregnancy-tracker-app/id505864483 | RU and many others | iOS UZ: 4.9 (258). #1 parenting app on Android in Russia (Similarweb, https://www.similarweb.com/top-apps/google/russian-federation/parenting/top-free/) | 3D week by week | Pregnancy only |
| **GoodMama** https://apps.apple.com/uz/app/goodmama-%D0%B2%D1%81%D1%91-%D0%BE-%D0%B4%D0%B5%D1%82%D1%8F%D1%85-%D0%B4%D0%BE-3%D1%85-%D0%BB%D0%B5%D1%82/id1488980532 | RU | 4.8 (152) | Content for kids 0–3 | Content only |
| **Telegram channels** such as @pediatric_uz https://t.me/pediatric_uz, @pediatr_nur https://t.me/pediatr_nur, Pediatr.uz https://uz.tgstat.com/en/channel/@pediatrnargiza/stat, @doktori_uzbekistana https://t.me/doktori_uzbekistana | UZ | (subscriber counts not captured) | Pediatricians posting advice; moms ask in groups | Not personal, not searchable for "my baby"; quality varies |

**Are there any good Uzbek-language ones?** Lalu is decent and multilingual. It's the real local competitor for content. None of these apps combines Gaia/Nara-quality tracking, family sync, memories and cited AI. That combination is the gap.

### Nara Baby (requested reference)
- **What it does:** feeds, bottles, pumping, sleep, diapers, growth, milestones, meds, pregnancy and postpartum tracking. Each caregiver has their own account, with unlimited caregivers. Widgets, Apple Watch and Siri, trends, CSV export. https://apps.apple.com/us/app/nara-baby-pregnancy-tracker/id1444639029
- **Ratings:** iOS 4.9 (24,227), Play 4.9 (≈6.8K) https://play.google.com/store/apps/details?id=com.naraorganics.nara
- **Pricing change:** it was free and ad-free, built by the Nara Organics formula brand. It is now $9.99/mo or $99.99 lifetime after a 7-day trial. Without paying the app is **read-only**: you can view and export your history but can't log anything new. https://nara.com/pages/nara-baby-app-faqs · https://www.robinbaby.com/blog/is-nara-baby-still-free/
- **What people love:**
  - "aesthetically pleasing but it's intuitive… isn't overwhelming." https://apps.apple.com/us/app/nara-baby-pregnancy-tracker/id1444639029
  - "multiple caregivers with separate accounts so it's easy to track who logged what." https://play.google.com/store/apps/details?id=com.naraorganics.nara
  - Widgets.
  - "absolutely awesome free app" (said before the price change). https://www.reddit.com/r/beyondthebump/comments/1sqdbkt/baby_tracking_app_recommendations/
- **What people hate:**
  - "Loved this app until they forced subscriptions… read only."
  - Feeds not saving: "we started doubting ourselves."
  - Sync and timer bugs.
  - 13% of reviews in the past 12 months mention billing, and 33% of reviews in the last 90 days are 1–2★ (AppsLupa). https://appslupa.com/app/nara-baby-and-pregnancy-tracker/id1444639029
  - Awkward time-picker buttons. https://play.google.com/store/apps/details?id=com.naraorganics.nara
- **Design lessons to borrow:**
  - Soft palette.
  - Big, plain-language tiles for each type of log.
  - Timeline comparisons over 1 day / 1 week / 2 weeks that don't overwhelm.
  - "Time since" widgets.
  - Caregiver names on each entry.
- **Avoid:** turning a free tool into a paid one after people rely on it.
- **Uzbek/Russian:** **No.** The App Store lists English only.

---

## 2. Market signals

- **Births:** 879,599 in 2025, down from a 962K peak in 2023. That is still about 2.4K new babies a day. https://stat.uz/en/press-center/news-of-committee/66613-2025-jilda-zbekistonda-879-6-mingta-tu-ilish-ajd-etildi-4 · https://siat.stat.uz/data/2429/
- **Phones and internet:**
  - 99.3% of people aged 10+ use a mobile phone. https://stat.uz/en/press-center/news-of-committee/68714-zbekistonliklarning-99-3-foizi-telefondan-fojdalanadi-4
  - 33.1M internet users (89%). https://datareportal.com/reports/digital-2026-uzbekistan
- **Telegram:** about 25M users, 76% of internet users. Women lean toward messengers. https://www.uzdaily.uz/en/telegram-76-reach-youtube-no-1-e-commerce-on-the-rise-inside-uzbekistans-digital-landscape/
- **Where moms get information:** UNICEF's Bebbo study found Telegram and YouTube are parents' main sources. Moms ask child-health questions in Telegram and polyclinic groups. Bebbo reached about 7% of parents of young children, and Uzbek users were more engaged than the global average. https://www.unicef.org/uzbekistan/en/media/5251/file/UPTAKE%20AND%20USE%20%20OF%20PARENTING%20APP%20%20IN%20UZBEKISTAN.pdf
  - Pediatricians on Instagram and relatives (mothers-in-law, *chilla* traditions) are also big sources. I have no quantitative source for those, so treat it as observation.
- **Willingness and ability to pay:**
  - Uzcard and Humo don't work in the App Store or Play; you need a Visa or Mastercard. https://premiumsend.uz/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi
  - So **in-app purchases will barely convert in Uzbekistan.**
  - Telegram Stars *can* be bought with Uzcard/Humo through Click, Payme or Uzum resellers (about 240 UZS per Star). https://starsjoy.uz/en/how-to-buy
  - Payme and Click support card tokenisation for recurring charges, but that needs a registered local legal entity (e.g. an IP or MChJ). https://github.com/shaxzodbek-uzb/pay-uz
  - Most local apps (Lalu, Bebbo) are free, so expect low prices. Freemium plus small Payme/Click passes is the realistic model.

---

## 3. Trusted content sources and reuse terms

| Source | What's there | Reuse terms |
|---|---|---|
| **UNICEF Uzbekistan, Uzbek-language stories** e.g. https://www.unicef.org/uzbekistan/uz/stories/tugruqdan-keyin-nimalarni-kutish-kerak, https://www.unicef.org/uzbekistan/uz/stories/yangi-tugilgan-chaqaloqni-qanchalik-tez-tez-oziqlantirish-kerak, https://www.unicef.org/uzbekistan/uz/stories/farzandingiz-yetarli-miqdorda-ona-suti-bilan-oziqlanayotganini-qanday-bilsa-boladi | Postpartum, breastfeeding, feeding frequency, signs the baby is getting enough milk, all in Uzbek Latin | **Prior written permission needed** to reproduce or translate. https://www.unicef.org/legal. Link to it and summarise in your own words, or ask for a partnership. UNICEF UZ already backs Bebbo, so pitch "Bebbo content inside a tracker". |
| **WHO** (growth standards, newborn care, breastfeeding, IMCI danger signs) | Authoritative guidance, mostly in English and Russian | Usually CC BY-NC-SA 3.0 IGO: **non-commercial only**. A paid app needs WHO permission for verbatim or translated copies. https://www.who.int/about/policies/publishing/copyright. Facts and the growth-standard numbers can be used; the text can't be copied. |
| **Ministry of Health of Uzbekistan**: clinical protocols https://gov.uz/ru/ssv/pages/klinik-qo-llanmalar and protocol database https://www.clinical-protocols.uz/protocol/1341 | National protocols (aimed at doctors) and the vaccination schedule | Government acts are generally not protected by copyright in Uzbekistan, but confirm. Too clinical to show moms directly; use them to check facts. |
| **103 ambulance** https://uz103.uz/en | Emergency number | Use it in red-flag escalation |

**Practical approach:** write about 150–300 short Uzbek "cards" yourself (or with a hired pediatrician and an editor), each citing the source behind it (WHO/UNICEF/MoH link). Have a licensed pediatrician review and sign each card, and show "Reviewed by Dr. X, date". The AI answers only from these cards.

---

## 4. Safe AI design

**How an answer is produced (a sequence, not a free chatbot):**
1. **Red-flag check before anything else.** Deterministic rules plus a classifier check the question and the recent logs for danger signs: newborn fever ≥38°C under 3 months, not feeding, difficulty breathing or blue lips, convulsions, lethargy or unrousable baby, no wet diaper in 8–12h, vomiting everything, bulging fontanelle; in pregnancy, bleeding, severe headache or vision change, reduced movements, waters breaking.
   - On a match the app shows a fixed red screen: **"Hozir 103 ga qo'ng'iroq qiling / shifokorga murojaat qiling"** (call 103 now / see a doctor), with a tap-to-call button. No AI-written text on that screen.
2. **Retrieval:** search only the vetted cards, matching the baby's age. Use pgvector or similar.
3. **Answer:** the LLM writes 3–5 sentences in Uzbek **only from the retrieved cards**, citing them ([1] UNICEF…). If nothing fits: "Bu haqda tasdiqlangan ma'lumot yo'q — shifokoringizdan so'rang" (there's no verified information on this — ask your doctor). Never diagnose, never give medicine doses.
4. **Personal context from logs:** e.g. "In the last 24 hours: 7 feeds, 5 wet diapers, 13h sleep". The answer relates the card to her baby ("5 wet diapers is in the normal range for this age [UNICEF]"). Log summaries are sent to the model, not raw personal data.
5. **Log everything:** questions and answers (with consent) go to a doctor for weekly review, which also shows which cards to write next.

**Uzbek LLM quality:**
- **UzLiB benchmark (Uzbek Latin):** Gemini 3 Pro scores 0.83 and Gemini 3 Flash 0.80; GPT-5.2 0.66; Claude Sonnet 4.6 0.64. https://github.com/tahrirchi/uzlib/blob/main/LEADERBOARD.md
- **Recommendation:** Gemini Flash-class models for cost and Uzbek quality.
- **Script:** generate in **Latin** (the official script, and what the models do best). Convert to **Cyrillic deterministically** with a rule-based transliterator for older users; don't ask the LLM to write Cyrillic.
- Russian quality is strong in every model.

**Uzbek voice input:**
- **UzbekVoice.ai STT:** uz, ru and mixed uz-ru (code-switching is common). https://uzbekvoice.ai/en-US/developers/api/stt
- **Aisha STT:** uz, ru, en. https://aisha.group/uz/api-documentation
- **Google Cloud Chirp:** uz-UZ. https://docs.cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages
- **Open Whisper fine-tune (navai-uz):** 9.7% WER, self-host. https://huggingface.co/navai-uz/whisper-medium-uzbek
- On-device iOS/Android speech recognition for Uzbek is unreliable. Use a cloud STT (UzbekVoice, since mixed uz/ru is handled), and keep the clips short ("chap ko'krak 15 daqiqa, ho'l taglik" = left breast 15 minutes, wet diaper).

**Privacy and legal:**
- Uzbekistan's 2026 amendment to the personal-data law requires local storage only for biometric, genetic and telecom-subscriber data.
- Other data can be stored abroad under standard contractual clauses or approved standards.
- Health data still needs explicit consent.
- Sources: https://lex.uz/en/acts/8104580 · https://www.dentons.com/en/insights/articles/2026/march/31/uzbekistan-dismantles-strict-data-localization-regime
- Get a local lawyer's check before launch.

---

## 5. Revised concept: First Moons (Uzbek-first)

**Positioning:** "Chaqalog'ingizning birinchi yili — kuzatuv, xotiralar va ishonchli maslahat, o'zbek tilida." (Your baby's first year: tracking, memories and trustworthy advice, in Uzbek.) In short: Nara/Gaia-quality tracking, a moon-shaped keepsake each month, and a doctor-reviewed AI.

**Screens:**
1. **Now:** last feed, sleep and diaper; big log tiles (Nara-style); a voice button.
2. **So'rang (Ask):** an assistant answer card with citations, "Reviewed by Dr. …", the baby's own numbers inline, and the red 103 banner when triggered.
3. **Bu hafta (This week):** 3 short, age-matched cards each week (sleep, feeding, development, the mother's *chilla* recovery). This is the knowledge base people browse. Swipe to read; save.
4. **Moon (the month):** the moon fills from logs and photos. At month-end the **full-moon keepsake** card is ready to share to Telegram.
5. **Journey:** pregnancy countdown moons through Moon 12, with vaccination dates from the MoH schedule.
6. **Family:** invite husband or grandmother (*buvi*) by Telegram link, each with their own login and name on entries.

**Daily use:** about 8–12 one-tap logs a day; 1–2 questions a week; one Monday "this week" card; the monthly keepsake.

**Signature moment:** you ask by voice in Uzbek, and the answer card **unfolds from the moon**. Citation chips settle under it, and your baby's numbers light up inside the answer ("bugun 6 ta ho'l taglik ✓", 6 wet diapers today). The moon logic stays the same: logs fill the moon; on the month-day it turns into a keepsake.

**Pricing:**
- **Uzbekistan:**
  - Free: tracking, family, 3 AI questions a week, all cards.
  - "Oy" pass: about **15,000 UZS/month** (≈$1.20), or **99,000 UZS for the first year** (≈$8). Paid through Payme/Click (needs a local entity) or Telegram Stars in the mini app.
  - Unlimited AI, voice logs, HD keepsakes, PDF book.
- **Global/RU:** App Store/Play at $3.99/mo or $19.99 first-year pass.
- Keep logging free forever, so there's no Nara-style lockout.

**Delivery: native app vs Telegram Mini App**

| | Native Expo app | Telegram Mini App |
|---|---|---|
| Reach in UZ | Needs an install | 25M Telegram users; share links spread inside mom groups |
| Payments in UZ | IAP effectively blocked; external Payme links fall under store rules | Stars (purchasable with Uzcard) or Payme/Click inside the mini app |
| Polish and motion | Full (Reanimated, haptics, widgets) | Web-level; weaker haptics; no widgets |
| 3am logging | Widgets and lock screen | Open Telegram, then the bot |

**Recommendation:** one shared backend with two front ends.
- **Telegram Mini App + bot first in Uzbekistan:** logging, Ask, weekly cards, and month cards posted to the chat. The bot can also send reminders.
- **Expo app** for polish and the global/RU market.
- If you must pick only one for v1 in Uzbekistan, pick the Mini App. For a design-led portfolio piece and the global market, pick Expo.

**V1 scope (about 6–8 weeks solo plus a part-time doctor):**
- Must have:
  - Feed, sleep, diaper and growth logging with WHO charts.
  - Family invite.
  - Ask with RAG over ~150 doctor-reviewed Uzbek cards, citations, and the red-flag 103 screen.
  - Uzbek Latin interface with a Cyrillic toggle.
  - Weekly cards.
  - Monthly moon keepsake.
  - Payme/Click or Stars pass.
- Not in v1: Russian content (UI strings only), pregnancy content beyond a countdown, community, PDF book printing, diagnosis or photo-of-rash analysis, medicine dosing, Apple Watch.

**Rough AI cost:**
- Gemini Flash-class models cost fractions of a cent per short RAG answer (check current pricing).
- STT is the bigger cost per minute.
- Cap free use (3 questions a week, voice logs ≤15 s).
- Cache common Q&A pairs, since many moms ask the same questions.

**Risks (honest):**
- **Medical liability:** a wrong answer about a sick baby is the worst case. Mitigations: red-flag rules ahead of the LLM, retrieval only, a doctor on record, disclaimers, no dosing, and logging plus review. Talk to a lawyer about whether this counts as a medical service. Don't call it a "doctor" or "pediatrician AI".
- **Content accuracy and cost:** writing and medically reviewing ~150 Uzbek cards is the real cost and the real moat (a doctor partnership could be paid in equity or per card). UNICEF and WHO text can't be copied commercially without permission.
- **Payments:** IAP doesn't work with local cards. Payme/Click needs a company. Stars carry Telegram's and the reseller's cut. Expect low ARPU; Uzbekistan alone may only cover costs, which is why the RU, Central Asia and global path matters.
- **Competition:** Lalu (free, multilingual, 1M+ installs) can add tracking or AI; free pediatricians' Telegram channels; Bebbo is free and UNICEF-backed; Dugonam already has Uzbek AI.
- **Uzbek AI quality:** LLMs still make grammar and terminology errors in Uzbek. A native editor has to check templates, and answers should stay short.
- **Cultural fit:** *chilla*, swaddling (*beshik*) and family hierarchy topics need sensitive, non-judgmental handling. The UNICEF report flags *beshik* cradles as sensitive.
- **Scope creep:** AI, knowledge base, tracking, memories, two front ends and two languages is a lot for one person. Cut ruthlessly.

**One-line recommendation:** Launch First Moons in Uzbekistan as a **Telegram Mini App** with doctor-reviewed Uzbek answers that cite their sources and use the baby's own logs. Keep logging free and charge a small Payme/Stars pass. Reuse the same backend for a polished Expo app aimed at Russian/Central Asian and global users.
