import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import { LOCALES, type Locale } from '@/config/regions';
import { resources } from './resources';

export const DEFAULT_LOCALE: Locale = 'uz-Latn';

// Picks the best supported locale from the device settings. Uzbek defaults to Latin script.
export function pickDeviceLocale(): Locale {
  for (const l of getLocales()) {
    const tag = l.languageTag;
    if ((LOCALES as readonly string[]).includes(tag)) return tag as Locale;
    if (l.languageCode === 'uz') return l.languageScriptCode === 'Cyrl' ? 'uz-Cyrl' : 'uz-Latn';
    if (l.languageCode === 'ru') return 'ru';
    if (l.languageCode === 'en') return 'en';
  }
  return DEFAULT_LOCALE;
}

void i18n.use(initReactI18next).init({
  resources,
  lng: pickDeviceLocale(),
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: [...LOCALES],
  defaultNS: 'common',
  ns: ['common'],
  interpolation: { escapeValue: false },
  returnNull: false,
});

export function setLocale(locale: Locale): Promise<unknown> {
  return i18n.changeLanguage(locale);
}

export function currentLocale(): Locale {
  const l = i18n.resolvedLanguage ?? i18n.language;
  return (LOCALES as readonly string[]).includes(l) ? (l as Locale) : DEFAULT_LOCALE;
}

export default i18n;
