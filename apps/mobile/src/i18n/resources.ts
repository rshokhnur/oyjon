import type { Locale } from '@/config/regions';

import enCommon from './locales/en/common.json';
import ruCommon from './locales/ru/common.json';
import uzCyrlCommon from './locales/uz-Cyrl/common.json';
import uzLatnCommon from './locales/uz-Latn/common.json';

export const resources = {
  'uz-Latn': { common: uzLatnCommon },
  'uz-Cyrl': { common: uzCyrlCommon },
  ru: { common: ruCommon },
  en: { common: enCommon },
} satisfies Record<Locale, Record<string, unknown>>;
