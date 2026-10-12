import { LOCALES, REGIONS, emergencyNumberFor, regionFromCountry, type RegionCode } from '@/config/regions';

describe('regions', () => {
  it('has the expected emergency numbers', () => {
    expect(REGIONS.UZ.emergencyNumber).toBe('103');
    expect(REGIONS.KZ.emergencyNumber).toBe('112');
    expect(REGIONS.KG.emergencyNumber).toBe('112');
    expect(REGIONS.GLOBAL.emergencyNumber).toBe('112');
  });

  it('defaults Uzbekistan to Uzbek Latin', () => {
    expect(REGIONS.UZ.defaultLocale).toBe('uz-Latn');
  });

  it('every region offers its default locale and only supported locales', () => {
    for (const code of Object.keys(REGIONS) as RegionCode[]) {
      const r = REGIONS[code];
      expect(r.code).toBe(code);
      expect(r.locales).toContain(r.defaultLocale);
      for (const l of r.locales) expect(LOCALES).toContain(l);
    }
  });

  it('maps device countries to regions', () => {
    expect(regionFromCountry('uz')).toBe('UZ');
    expect(regionFromCountry('KZ')).toBe('KZ');
    expect(regionFromCountry('KG')).toBe('KG');
    expect(regionFromCountry('DE')).toBe('GLOBAL');
    expect(regionFromCountry(null)).toBe('GLOBAL');
  });

  it('uses the device country for GLOBAL emergency numbers, with 112 as fallback', () => {
    expect(emergencyNumberFor('UZ', 'US')).toBe('103');
    expect(emergencyNumberFor('GLOBAL', 'US')).toBe('911');
    expect(emergencyNumberFor('GLOBAL', 'gb')).toBe('999');
    expect(emergencyNumberFor('GLOBAL', 'DE')).toBe('112');
    expect(emergencyNumberFor('GLOBAL', undefined)).toBe('112');
  });
});
