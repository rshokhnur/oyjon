import { translitTree, translitUz } from '../../scripts/translit-uz';

describe('translitUz', () => {
  it.each([
    ['Bugun', 'Бугун'],
    ['Kundalik', 'Кундалик'],
    ['So‘rang', 'Сўранг'],
    ["o'g'il", 'ўғил'],
    ['Shisha', 'Шиша'],
    ['choy', 'чой'],
    ['Yangi yozuv', 'Янги ёзув'],
    ['yo‘q', 'йўқ'],
    ['Yuz', 'Юз'],
    ['ertaga', 'эртага'],
    ['Ho‘l', 'Ҳўл'],
    ["ma'lumot", 'маълумот'],
    ['{{count}} oy', '{{count}} ой'],
    ['{{name}} yozdi', '{{name}} ёзди'],
  ])('%s → %s', (latin, cyrillic) => {
    expect(translitUz(latin)).toBe(cyrillic);
  });

  it('leaves the language names block alone', () => {
    expect(translitTree({ languages: { en: 'English' }, a: 'Til' })).toEqual({ languages: { en: 'English' }, a: 'Тил' });
  });
});
