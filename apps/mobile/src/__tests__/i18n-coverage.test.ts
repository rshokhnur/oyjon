import { LOCALES } from '@/config/regions';
import { resources } from '@/i18n/resources';

type Tree = { [k: string]: string | Tree };

const PLURAL_SUFFIX = /_(zero|one|two|few|many|other)$/;

function flatten(tree: Tree, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(tree)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') out[key] = v;
    else Object.assign(out, flatten(v, key));
  }
  return out;
}

function placeholders(s: string): string[] {
  return [...s.matchAll(/{{\s*(\w+)\s*}}/g)].map((m) => m[1]).sort();
}

const flat = Object.fromEntries(
  LOCALES.map((l) => [l, flatten(resources[l].common as unknown as Tree)]),
) as Record<(typeof LOCALES)[number], Record<string, string>>;

const baseKeys = (keys: string[]) => new Set(keys.map((k) => k.replace(PLURAL_SUFFIX, '')));
const reference = flat['uz-Latn'];

describe('i18n key coverage', () => {
  it.each(LOCALES)('%s has every key the reference locale has, and no extras', (locale) => {
    expect([...baseKeys(Object.keys(flat[locale]))].sort()).toEqual([...baseKeys(Object.keys(reference))].sort());
  });

  it.each(LOCALES)('%s has every plural form its language needs', (locale) => {
    const categories = new Intl.PluralRules(locale).resolvedOptions().pluralCategories;
    const pluralBases = new Set(
      Object.keys(reference)
        .filter((k) => PLURAL_SUFFIX.test(k))
        .map((k) => k.replace(PLURAL_SUFFIX, '')),
    );
    for (const base of pluralBases) {
      for (const cat of categories) {
        expect(flat[locale]).toHaveProperty([`${base}_${cat}`]);
      }
    }
  });

  it.each(LOCALES)('%s keeps the same placeholders as the reference', (locale) => {
    for (const [key, value] of Object.entries(flat[locale])) {
      const refKey = reference[key] !== undefined ? key : `${key.replace(PLURAL_SUFFIX, '')}_other`;
      expect({ key, vars: placeholders(value) }).toEqual({ key, vars: placeholders(reference[refKey] ?? '') });
    }
  });

  it.each(LOCALES)('%s has no empty strings', (locale) => {
    for (const [key, value] of Object.entries(flat[locale])) expect({ key, empty: value.trim() === '' }).toEqual({ key, empty: false });
  });
});
