// All region-specific values live here and nowhere else (see apps/mobile/CLAUDE.md).
export const LOCALES = ['uz-Latn', 'uz-Cyrl', 'ru', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export type RegionCode = 'UZ' | 'KZ' | 'KG' | 'GLOBAL';

export type Region = {
  code: RegionCode;
  emergencyNumber: string;
  defaultLocale: Locale;
  locales: Locale[];
  pricing: { channel: 'activation_code' | 'store'; displayPrices: Record<string, string> };
  contentPack: string;
  vaccinationSchedule?: string;
  units: 'metric' | 'imperial';
};

export const REGIONS: Record<RegionCode, Region> = {
  UZ: {
    code: 'UZ',
    emergencyNumber: '103',
    defaultLocale: 'uz-Latn',
    locales: ['uz-Latn', 'uz-Cyrl', 'ru', 'en'],
    pricing: {
      channel: 'activation_code',
      displayPrices: { monthly: '15 000 UZS', firstYear: '99 000 UZS' },
    },
    contentPack: 'uz-v1',
    units: 'metric',
  },
  // TODO(launch): verify KZ and KG emergency numbers (docs/open-questions.md). 103 also works.
  KZ: {
    code: 'KZ',
    emergencyNumber: '112',
    defaultLocale: 'ru',
    locales: ['ru', 'uz-Latn', 'uz-Cyrl', 'en'],
    pricing: { channel: 'store', displayPrices: {} },
    contentPack: 'uz-v1',
    units: 'metric',
  },
  KG: {
    code: 'KG',
    emergencyNumber: '112',
    defaultLocale: 'ru',
    locales: ['ru', 'uz-Latn', 'uz-Cyrl', 'en'],
    pricing: { channel: 'store', displayPrices: {} },
    contentPack: 'uz-v1',
    units: 'metric',
  },
  GLOBAL: {
    code: 'GLOBAL',
    emergencyNumber: '112',
    defaultLocale: 'en',
    locales: ['en', 'ru', 'uz-Latn', 'uz-Cyrl'],
    pricing: { channel: 'store', displayPrices: {} },
    contentPack: 'uz-v1',
    units: 'metric',
  },
};

// Emergency numbers for GLOBAL by device country. Fallback is 112.
const GLOBAL_EMERGENCY_BY_COUNTRY: Record<string, string> = {
  US: '911',
  CA: '911',
  MX: '911',
  GB: '999',
  AU: '000',
  NZ: '111',
  IN: '112',
  RU: '103',
  TR: '112',
};

export function regionFromCountry(country: string | null | undefined): RegionCode {
  const c = country?.toUpperCase();
  if (c === 'UZ' || c === 'KZ' || c === 'KG') return c;
  return 'GLOBAL';
}

export function getRegion(code: RegionCode): Region {
  return REGIONS[code];
}

export function emergencyNumberFor(code: RegionCode, country?: string | null): string {
  if (code !== 'GLOBAL') return REGIONS[code].emergencyNumber;
  const c = country?.toUpperCase();
  return (c && GLOBAL_EMERGENCY_BY_COUNTRY[c]) ?? REGIONS.GLOBAL.emergencyNumber;
}
