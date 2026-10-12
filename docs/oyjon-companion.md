# Oyjon companion: a little moon character

**Role:** a small moon who keeps you company. She reacts, shows the way and celebrates quietly. **She never advises.** All information comes from the doctor-reviewed cards, never from the character.

Uzbek and Russian copy below is a draft and **must be reviewed by native speakers (UZ/RU)**.

## 1. Lead visual direction: in the style of Grok Bot's avatar characters, made softer for a baby app

Shokhnur wants the companion to feel like **Grok Bot's bot-avatar characters**. I haven't been able to verify how those avatars look, so this section describes the general approach rather than copying any specific detail. **Confirm against the real avatars before drawing.**

- **Simple, friendly character:** one clear silhouette, few features, readable at small sizes.
- **A small set of clear, expressive states** (idle, happy, listening, thinking, sleepy…), each recognisable in under a second.
- **Easy to animate:** a single rig in which states change by swapping a few parameters, not by redrawing.

**Adapting it for Oyjon:**
- **Softer:** no sharp corners or tech details; edges gently rounded; slight squash and stretch.
- **Rounder:** a full circle moon body, a cheeky little crescent shadow, round dot eyes, optional blush.
- **Warmer colours:** cream and honey moon (around #F6E7C8 to #F2C98A), peach blush, amber night glow. No cool tech blues or neons, and never red (red is reserved for the 103 screen).
- **Baby-app feel:** gentle, sleepy and cosy rather than clever or witty.

## 2. Personality directions (pick one)

| | A. **Oyim** (recommended) | B. **Oyzoda** | C. **Moonjon** |
|---|---|---|---|
| Name meaning | UZ "my moon" (in some dialects also "my mum"). RU Ойим, EN "Oy-eem". Short and soft in all 3 languages. | UZ "moon-born, child of the moon". RU Ойзода. EN a little long. | "Dear moon": EN-first, RU Мунджон |
| Character | A quiet companion, like a kind older sister. Speaks rarely, smiles a lot. | Playful little sibling: curious, gently funny | A cosy night-light: sleepy, soothing |
| Voice | Short, warm, "we" ("Yaxshi bordik" / "we did well") | Light jokes, little emoji | Whispery, minimal words |
| Risk | Can feel bland → solve with expressive motion | Could get cute and noisy at 3am | Too passive during the day |

The name is separate from the app (Oyjon is the app; Oyim is the friend inside it). Oyim was checked earlier as an app name (oyim.com is taken). As a character name that's fine, but check for trademark conflicts if she ever appears on merch.

## 3. Visual principles
- **Shape:** a single soft circle with no limbs. Two dot eyes, an optional tiny mouth, a faint glow. It must read clearly at 24pt (tab icon) and at 160pt (onboarding).
- **Moon phases = expressions and progress:**
  - A shadow crossing her face shows her mood (crescent = sleepy or shy, full = proud, half = thinking).
  - The same phase system also shows month progress, so mascot and data share one visual language.
- **Restraint (Airbnb/Linear):** she takes up at most 10% of a screen except in onboarding, empty states and the keepsake. No speech bubbles over content; short text sits next to her.
- **Build:** one vector rig with a few state inputs (mood, phase 0–1, blink, look x/y, sleepy). Keep it light: under 100 KB.

## 4. States and animations
| State | Animation | Length |
|---|---|---|
| idle | slow breathing glow, blinks every 4–7s | loop |
| look | eyes follow the touch point or the active tile | live |
| hello | rises from the bottom like a moonrise, small squash-bounce | 0.8s |
| saved | nods, adds a sliver of light | 0.5s |
| listening | soft rings pulse to the voice volume | live |
| thinking | phase shadow drifts back and forth (half moon) | loop |
| proud | becomes full, gentle glow pulse | 1.2s |
| full-moon | a glow ring builds and photos orbit in (the keepsake) | 2–3s |
| sleepy | crescent, half-closed eyes, little "z" (night) | loop |
| shy / empty | peeks from the edge of the screen | 0.6s |
| welcome-baby | becomes full, a tiny star joins her | 2s |
| hidden | fades out | 0.2s |

## 5. Where she appears
- **Onboarding (O1–O7):** introduces herself once, points to choices, rises into Moon 1 at the end. This is her biggest role.
- **Log reactions (T2–T6):** a small nod on save. On the first log of the day, a word or two. Most saves get no text.
- **Today (T1):** a small avatar in the header who mirrors the month's moon phase. Tap her for a tiny wiggle (no text).
- **Filling moon and keepsake (M1–M3):** she *is* the moon. On the month-day she becomes full, and the keepsake card lifts out of her.
- **Empty states:** she peeks from the edge with one line pointing to the action.
- **AI assistant (A1–A2):** a small figure next to the input. She listens while you speak and shows the half-moon thinking state while the answer loads. Once the answer appears she shrinks to the corner. **The answer card, its sources and the "reviewed by" doctor badge lead; she never speaks the answer.** Answers are attributed to the cards and doctors, not to her.
- **Night mode (21:00–06:00):** sleepy crescent, no text, slower motion, amber.
- **Pregnancy:** a tiny crescent that grows week by week; "welcome-baby" plays at birth.
- **Plus:** a gold glow once on activation.

## 6. Hard rules
1. **103 red-flag screen: hidden.** No character and no playfulness. The transition into it is instant.
2. **Loss mode: hidden** on all loss screens and afterwards on pregnancy surfaces. At most a still, neutral crescent if the user later chooses "Start again". No celebrations near due dates.
3. **Never gives medical advice,** reassurance about symptoms ("don't worry, it's normal"), dosing or diagnosis. Health content appears only in cited cards.
4. **No guilt or nagging:** no streaks, no "you forgot to log", no sad face for missed logs. She is never disappointed.
5. **Frequency caps:**
   - At most 1 text line per session on Today.
   - Logs: text only on the first log of the day and on milestones.
   - At most 1 mascot notification a month (the full moon).
   - Users can switch "Oyim's words" off (motion stays) or hide her entirely.
6. **Reduce Motion:** static states with simple cross-fades, no orbit or parallax.
7. **Accessibility:** decorative for screen readers (her text is read as normal text). Never the only way to show information.
8. **Inclusive:** no assumed parent role in copy. Dads and grandmothers log too.

## 7. Sample microcopy (UZ/RU need native review ⚠)
| Moment | Uzbek (Latin) ⚠ | Russian ⚠ | English |
|---|---|---|---|
| Onboarding hello | Salom! Men Oyim. Birinchi yilni birga yozamiz. | Привет! Я Ойим. Давайте вместе запишем первый год. | Hi! I'm Oyim. Let's keep the first year together. |
| Choose mode | Chaqalog'ingiz bormi yoki kutayapsizmi? | Малыш уже родился или вы ждёте? | Is your baby here, or on the way? |
| First log of the day | Yozildi. Xayrli tong! | Записано. Доброе утро! | Saved. Good morning! |
| Night log | (sleepy nod, no text) | — | — |
| Empty timeline | Bu kun hali bo'sh. ＋ ni bosing. | Пока пусто. Нажмите ＋. | Nothing here yet. Tap ＋. |
| Empty moon | Shu oyning birinchi suratini qo'shamizmi? | Добавим первое фото этого месяца? | Add this month's first photo? |
| Full moon | 4-oy to'ldi. Qanday go'zal oy! | Четвёртая луна полная. Какой месяц! | Moon 4 is full. What a month! |
| Ask loading | Tekshirilgan manbalarni qarayapman… | Ищу в проверенных источниках… | Checking the reviewed cards… |
| No source | Bu haqda tasdiqlangan ma'lumot yo'q — shifokoringizdan so'rang. | Проверенной информации нет — спросите врача. | No reviewed info on this — please ask your doctor. |
| Plus active | Rahmat! Oyjon Plus faol. | Спасибо! Oyjon Plus активен. | Thank you! Oyjon Plus is on. |
| Baby arrived | Xush kelibsan, kichkintoy! 1-oy boshlandi. | Добро пожаловать, малыш! Первая луна. | Welcome, little one! Moon 1 begins. |

*103 screen and loss mode: no mascot copy. Use the doctor-approved fixed text only.*

## 8. References
- **Grok Bot's bot avatars:** the lead style reference (simple, friendly, a few clear states). Gather screenshots from the product before sketching; don't rely on this description.
- **Duolingo's Duo:** proves a mascot builds attachment and sharing. Avoid its guilt and streak nagging. https://blog.duolingo.com/duolingo-character-animation/
- **Headspace:** soft round characters, calm motion, health-adjacent without preaching. https://www.headspace.com/
- **Finch:** a gentle pet that grows with you and never punishes. https://apps.apple.com/us/app/finch-self-care-pet/id1528595748
- **Airbnb / Linear restraint:** delight at key moments only; content first.
- **Rive state machines** (as Duolingo uses them): https://rive.app/blog/how-duolingo-uses-rive-for-their-character-animation

## 9. Rive vs Lottie
| | **Rive** (recommended) | Lottie |
|---|---|---|
| Interactivity | One file, a state machine with inputs (mood, phase, gaze, sleepy) | A separate file or segment per animation; little live control |
| Moon phase driven by data | Yes, by setting the phase number from logs | Hard to do |
| Size | Small binary .riv | JSON, one per state |
| Expo | `rive-react-native` (needs a dev build, not Expo Go) | `lottie-react-native` (Expo-ready) |
| Tooling | Rive editor | After Effects + Bodymovin / LottieFiles |

**Recommendation:** use **Rive** for Oyim. A rig with "a few clear, easy states" maps directly onto a Rive state machine. Use Lottie or Reanimated for one-off effects. Fallback: static SVG states when Reduce Motion is on or if Rive fails to load.
