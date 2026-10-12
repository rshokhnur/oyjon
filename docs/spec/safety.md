# Safety

Everything safety-related in one place. The non-negotiables in the root `CLAUDE.md` are the short version; this is the detail. All wording and rule thresholds below are **drafts until a pediatrician and an OB-GYN sign them off** (`TODO(doctor)`).

## 1. Red-flag check

**Where it runs:** on the device, before any AI call, offline. The server runs the same rules again in the `ask` Edge Function and returns `{ type: 'red_flag' }` instead of an answer on a match.

**One source of truth:** the rules are versioned data in `content/safety/red-flags.v<n>.json`, used by both the app (`apps/mobile/src/safety/`) and the Edge Function. The test cases live next to them in `content/safety/red-flag-cases.json` and run on both sides, so the two can't drift.

**Inputs:** question text (uz-Latn, uz-Cyrl, ru, en), the baby's age, mode (baby | pregnancy) and recent logs.

**Draft rule candidates** (from the research; thresholds need doctor sign-off):

| Mode | Signal | Source |
| --- | --- | --- |
| Baby | Fever ≥ 38 °C under 3 months | question text or logs |
| Baby | Difficulty breathing, blue lips | question text |
| Baby | Convulsions / seizures | question text |
| Baby | Lethargic, floppy, can't be woken | question text |
| Baby | Not feeding / refusing all feeds | question text or logs |
| Baby | No wet diaper in 8–12 h (pick one with the doctor) | logs |
| Baby | Vomiting everything | question text |
| Baby | Bulging fontanelle | question text |
| Pregnancy | Bleeding | question text |
| Pregnancy | Severe headache or vision changes | question text |
| Pregnancy | Reduced baby movements | question text |
| Pregnancy | Waters breaking | question text |

Each rule needs "must trigger" and "must NOT trigger" cases (e.g. "isitmasi yo'q" / "no fever" must not fire the fever rule).

## 2. Emergency screen (A3)
- Shown immediately on a match. Instant, solid transition and a strong haptic. No playful motion.
- Fixed, doctor-approved text. A big **Call {region.emergencyNumber}** button (`Linking.openURL('tel:…')`), a "Call your doctor" button, the symptom that matched, and 3 fixed "while waiting" lines.
- **No AI text, no mascot, no paywall, no rate limit, no network needed.**

## 3. AI assistant
- App calls `supabase.functions.invoke('ask')`. **No API keys in the app.** The Gemini key lives in the Edge Function's secrets.
- Pipeline: red-flag recheck → embed question → pgvector top-k over `cards` for this region's content pack and the baby's age → Gemini (Flash-class) with a strict prompt ("answer only from these cards, cite [n], 3–5 sentences, Uzbek Latin") → check every citation exists → return `{ answer, citations[], reviewedBy }`.
- No matching card: "Bu haqda tasdiqlangan ma'lumot yo'q — shifokoringizdan so'rang" (no reviewed information, ask your doctor), plus related cards.
- Never diagnose, never dose, never reassure about symptoms.
- Context sent: log counts only (24 h / 7 d). Never names or photos.
- Free limit (3 questions a week) is enforced on the server. Red flags bypass all limits.
- Answers in Uzbek Latin; Cyrillic via the deterministic transliterator, never the LLM.
- AI test set: ~200 real-style Uzbek questions with expected behaviour (answer / refuse / emergency). Must pass before launch.
- Don't call it a "doctor" or "pediatrician AI".

## 4. Loss mode
- Settings → Pregnancy → "Homiladorlik tugadi" (pregnancy ended).
- Stops every pregnancy notification and card at once. Mascot hidden. Archive or delete, the user's choice.
- One support card with an option to contact a doctor or psychologist. No celebrations near due dates afterwards.
- Wording reviewed by an OB-GYN (and a psychologist if possible).

## 5. Never paywalled
The emergency screen, loss mode, all logging, data export and account deletion.

## 6. Changing a rule
1. Add or change the rule in `content/safety/`.
2. Add trigger and non-trigger cases.
3. Add an entry to [`../SAFETY_CHANGELOG.md`](../SAFETY_CHANGELOG.md).
4. Get doctor sign-off before release.
