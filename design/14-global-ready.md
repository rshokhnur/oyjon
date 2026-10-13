# 14 Global-ready

The rule from 13 Oct 2026: oyjon is built for the world but made first for Uzbek mums. An Uzbek mum sees no setup at all. She gets Uzbek Latin, 103, Tashkent time and Telegram without touching anything. But nothing in the six v1 flows is wired to Uzbekistan. Every value below comes from two settings she already has: her **country** and her **language**.

Uzbekistan stays the default everywhere. This page adds no v1 scope. It lists what reads from those two settings, so design and code ask the setting and never assume.

## Where the two settings come from

| Setting | First value | She can change it | Stored |
|---|---|---|---|
| Country | The phone's SIM country, then the phone's region. Uzbekistan if neither is known | The phone code on O6 and Settings | Per family, on the phone and the server |
| Language | The phone's language if it's one of the four, else the country's default | O1 and Settings, at once with a 10 second Undo | On the phone |
| Time zone | The phone's time zone | Not in the app. It follows the phone | Each entry keeps its own UTC time and offset |

Country and language are separate on purpose. A Russian-speaking mum in Tashkent keeps 103 and Uzbek cards with Russian text. An Uzbek mum in Seoul can keep Uzbek Latin and still get Korea's emergency number.

## Every locale-dependent setting

| What | Comes from | Uzbekistan default | Elsewhere | Flows |
|---|---|---|---|---|
| Emergency number on A3, the Ask footer and the Help row | Country (`region.emergencyNumber`) | 103 | KZ and KG 112 (103 also works, verify before launch). Other countries from a table, fallback 112 | Ask, Quick log, Settings |
| A3 wording and the three "while you wait" lines | Country rule pack, in her language | Uzbek pack, doctor-signed | Shows the pack for her country. No pack yet means the global pack with the local number | Ask, Quick log, Diary |
| Red-flag rules | Country rule pack (`content/safety`) | `uz-v1` | Same rules until a country gets its own doctor review | Ask, Quick log, Diary |
| Health cards for Ask and the library | Country content pack (`region.contentPack`), text in her language | `uz-v1` | `uz-v1` until a local pack exists. The reviewer's name and country show on every card | Ask |
| Words the red-flag check reads | Every script the country's people type | Uzbek Latin, Uzbek Cyrillic, Russian, with common misspellings | Adds the pack's languages | Ask |
| App language | Language setting | Oʻzbekcha (lotin) | Ўзбекча (кирилл), Русский, English in v1. More later through the same files | All |
| Order of the language list | Country | Lotin, Кирилл, Русский, English | KZ and KG start with Русский, others with English | Onboarding, Settings |
| Phone sign-in country code | Country, with a picker | +998 | The country's code. Apple and Google sign-in work everywhere | Onboarding, Settings |
| SMS sign-in | Country | On | Off where SMS doesn't reach. Apple and Google still work | Onboarding |
| Week reset for Ask's 3 questions | Her time zone, Monday 00:00 | Monday 00:00 Tashkent | Monday 00:00 where she is. The server keeps the family's time zone | Ask, Settings |
| First day of the week (Diary strip, calendar) | Language and country (`Intl`) | Monday | Sunday in the US and some others | Onboarding, Diary |
| Day boundary in Diary | Her time zone, local midnight | Tashkent midnight | Local midnight | Diary |
| Night palette 21:00 to 06:00 | Phone clock | Local time | Local time | All |
| Moon notification at 10:00 | Phone clock | 10:00 Tashkent | 10:00 where she is | Moon keepsake |
| Time format | Language and phone setting | 24-hour, "14:30" | 12-hour where the phone uses it, "2:30 PM" | All |
| Date format | Language (`Intl`) | "13-oktabr", "13.10.2026" | "13 октября", "Oct 13, 2026" | All, and the keepsake card |
| Number format | Language (`Intl`) | "3,2 kg", "15 000" | "3.2 kg", "15,000" in English | Diary, Quick log, Settings export |
| Plurals and ages | Language plural rules | "3 oy 12 kun" | Russian has three forms ("3 месяца", "5 месяцев") | All |
| Units for bottle, weight, length, head | Country (`region.units`). Stored metric always | ml, kg, cm | v1 shows metric everywhere. lb, oz and in come later through the same setting | Quick log, Diary, Settings |
| Bottle chips and the "over 250 ml" check | Units | 30, 60, 90, 120 ml | Same in metric. fl oz chips come with imperial | Quick log |
| Growth curves | WHO standard, the same for every country | WHO | WHO. A country with its own charts gets a pack later | Diary |
| Share targets for the keepsake and export | The phone's share sheet | Telegram and Instagram show first because she uses them | Whatever she uses. No app is named or hard-coded | Moon keepsake, Settings |
| Support link in Help | Country | Telegram | Email, until a local channel exists | Settings |
| Consent text, terms and privacy | Country legal pack | Uzbek personal data law | Per country, lawyer-checked before launch there | Onboarding, Settings |
| Delete grace period | Country legal pack | 7 days, lawyer to confirm | 7 days unless the country's law says otherwise | Settings |
| Prices and how she pays | Country (`region.pricing`), not in v1 | Activation code | Store purchase | Later |
| Vaccination schedule | Country, not in v1 | Uzbek Ministry of Health | Per country | Later |

## Rules for design and copy

- Write every screen with the Uzbek text first, then check it in Russian and Cyrillic, which run longer.
- Never print a number, date, unit or phone code as fixed text in a design. Use the Uzbek value and mark it in the layer name, like `{emergencyNumber} 103`.
- Copy says "siz" and talks about the baby, so it works for any carer in any country.
- Red is used only on A3, in every country.

## One keep or drop proposal

1. **A country picker, used in two places.** A searchable list of countries with flags and names in her language. It opens from the phone code on O6 and from a new Country row in Settings. O1 doesn't show the country: the SIM gets it right almost every time, and a line there raised more questions than it answered (Shokhnur, 13 Oct). Changing the country changes the emergency number, cards, rules, phone code and support link. It never changes her language. Decided: keep, must. The emergency number depends on it, and a wrong SIM guess must be easy to fix.

Nothing else here needs a new screen.
