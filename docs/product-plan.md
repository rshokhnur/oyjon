# Oyjon: Product Plan (draft v0.1)

> Draft. Everything here is a starting assumption to be tested with real mothers.

## 1. One-liner

Oyjon is a friendly companion app for young mothers, from pregnancy through the baby's first years: trusted guidance in their own language, simple trackers, and support from other moms.

## 2. Who it's for

**Primary:** first-time mothers aged roughly 18–30 in Uzbekistan, pregnant or with a baby under 3.

What we assume about them (to validate):
- Smartphone-first, mostly Android, often mid-range devices and patchy mobile data.
- Prefer Uzbek (Latin script for younger users), many also read Russian.
- Get most advice from family elders, Telegram channels and Instagram, often contradictory.
- Short on time and sleep; use the phone one-handed, often at night.

**Secondary:** partners and grandmothers who help with care.

## 3. Problems we solve

1. **"Is this normal?"** Anxiety about pregnancy symptoms and baby development, with no trusted source in Uzbek.
2. **Keeping track.** Feeds, sleep, diapers, vaccines, doctor visits are hard to remember when exhausted.
3. **Feeling alone.** Few places to ask other moms honestly without judgment.

## 4. MVP scope (v1)

| Feature | What it does |
| --- | --- |
| Onboarding | Pregnant or has baby, due date / birth date, baby's name, language. No account needed. |
| Week-by-week guide | Pregnancy week cards and baby month cards: what's happening, what to expect, tips. |
| Baby trackers | Feeding (breast/bottle, side, duration), sleep, diapers. One tap to start/stop. |
| Vaccination calendar | Uzbekistan national schedule with reminders. |
| Growth log | Weight/height entries with a simple chart. |
| Reminders | Local notifications for vaccines, appointments, custom. |
| Night mode | Dark, low-brightness UI for 3 a.m. feeds. |

**Not in v1:** community feed, doctor chat, e-commerce, multi-device sync. These come later (see roadmap).

## 5. Principles

- **Trustworthy:** medical content reviewed by a pediatrician/OB; always show "see a doctor if…" red flags.
- **Calm, not alarming:** warm tone, no fear-based messaging.
- **One-handed and fast:** core actions within 2 taps.
- **Works offline:** all tracking stored on-device first.
- **Private by default:** no account required; health data stays on the phone until the user opts in to sync.

## 6. Success metrics (first 3 months after launch)

- Activation: % of installs that log a first tracker entry or open a weekly card in day 1.
- Retention: D7 and D30 retention.
- Engagement: tracker entries per active user per day.
- Qualitative: interviews with 10+ mothers, NPS.

## 7. Monetization (later, not v1)

Free core app. Options to test later: premium content/courses, partnerships with clinics and baby brands (clearly labeled), and a curated baby products marketplace.

## 8. Tech choices

- **Mobile:** Expo (React Native + TypeScript), one codebase for Android and iOS. Android first.
- **Storage:** on-device (SQLite / AsyncStorage) for v1.
- **Backend:** none for v1; Supabase or Firebase when sync and community arrive.
- **Localization:** Uzbek (Latin) first, then Russian, then Uzbek (Cyrillic).

## 9. Open questions

- Uzbekistan only at launch, or wider Central Asia?
- Who reviews medical content, and how do we keep it current?
- Do we need a partner/grandmother shared view in v1?
- Telegram mini app alongside the native app?

## 10. Next steps

1. Talk to 8–10 young mothers: validate problems and feature priority.
2. Brand basics and low-fi wireframes for onboarding, home, tracker.
3. Build the tracker + week-by-week guide skeleton in the app.
4. Line up a medical reviewer for content.
