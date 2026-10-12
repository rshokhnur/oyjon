// Deterministic Uzbek Latin → Cyrillic transliteration for locale files.
// Usage (from apps/mobile): node scripts/translit-uz.ts
// Writes src/i18n/locales/uz-Cyrl/*.json from uz-Latn. A person reviews the output; never use an LLM for this.

const APOSTROPHES = "'‘’ʻʼ`";
const VOWELS = 'aeiouAEIOU';

const SINGLE: Record<string, string> = {
  a: 'а', b: 'б', d: 'д', e: 'е', f: 'ф', g: 'г', h: 'ҳ', i: 'и', j: 'ж', k: 'к',
  l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', q: 'қ', r: 'р', s: 'с', t: 'т', u: 'у',
  v: 'в', x: 'х', y: 'й', z: 'з',
};

function matchCase(src: string, out: string): string {
  if (src === src.toLowerCase()) return out;
  return out.charAt(0).toUpperCase() + out.slice(1);
}

function isLetter(ch: string | undefined): boolean {
  return !!ch && /[A-Za-z]/.test(ch);
}

export function translitUz(input: string): string {
  let out = '';
  let i = 0;
  while (i < input.length) {
    // Keep i18next placeholders untouched.
    if (input.startsWith('{{', i)) {
      const end = input.indexOf('}}', i);
      const stop = end === -1 ? input.length : end + 2;
      out += input.slice(i, stop);
      i = stop;
      continue;
    }
    const ch = input[i];
    const next = input[i + 1];
    const lower = ch.toLowerCase();
    const nextLower = next?.toLowerCase();
    const afterNext = input[i + 2];

    // o‘ and g‘
    if ((lower === 'o' || lower === 'g') && next && APOSTROPHES.includes(next)) {
      out += matchCase(ch, lower === 'o' ? 'ў' : 'ғ');
      i += 2;
      continue;
    }
    if (lower === 's' && nextLower === 'h') {
      out += matchCase(ch, 'ш');
      i += 2;
      continue;
    }
    if (lower === 'c' && nextLower === 'h') {
      out += matchCase(ch, 'ч');
      i += 2;
      continue;
    }
    if (lower === 'y' && nextLower && 'oua'.includes(nextLower)) {
      // "yo‘" is й + ў, not ё.
      if (nextLower === 'o' && afterNext && APOSTROPHES.includes(afterNext)) {
        out += matchCase(ch, 'й');
        i += 1;
        continue;
      }
      out += matchCase(ch, { o: 'ё', u: 'ю', a: 'я' }[nextLower] as string);
      i += 2;
      continue;
    }
    if (lower === 'y' && nextLower === 'e') {
      out += matchCase(ch, 'е');
      i += 2;
      continue;
    }
    if (lower === 'e') {
      const prev = input[i - 1];
      const wordStart = !isLetter(prev);
      out += matchCase(ch, wordStart || (prev && VOWELS.includes(prev)) ? 'э' : 'е');
      i += 1;
      continue;
    }
    if (APOSTROPHES.includes(ch) && isLetter(input[i - 1]) && isLetter(next)) {
      out += 'ъ';
      i += 1;
      continue;
    }
    const mapped = SINGLE[lower];
    out += mapped ? matchCase(ch, mapped) : ch;
    i += 1;
  }
  return out;
}

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

// Keys whose values are not Uzbek text (each language's own name) are copied as is.
const SKIP_TOP_LEVEL = new Set(['languages']);

export function translitTree(node: Json, path: string[] = []): Json {
  if (path.length === 1 && SKIP_TOP_LEVEL.has(path[0])) return node;
  if (typeof node === 'string') return translitUz(node);
  if (Array.isArray(node)) return node.map((n, i) => translitTree(n, [...path, String(i)]));
  if (node && typeof node === 'object') {
    const out: { [k: string]: Json } = {};
    for (const [k, v] of Object.entries(node)) out[k] = translitTree(v, [...path, k]);
    return out;
  }
  return node;
}

async function main(): Promise<void> {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const root = path.resolve(process.cwd(), 'src/i18n/locales');
  const srcDir = path.join(root, 'uz-Latn');
  const outDir = path.join(root, 'uz-Cyrl');
  for (const file of fs.readdirSync(srcDir).filter((f) => f.endsWith('.json'))) {
    const tree = JSON.parse(fs.readFileSync(path.join(srcDir, file), 'utf8')) as Json;
    fs.writeFileSync(path.join(outDir, file), JSON.stringify(translitTree(tree), null, 2) + '\n');
    console.log(`uz-Cyrl/${file}`);
  }
}

if (typeof require !== 'undefined' ? require.main === module : process.argv[1]?.endsWith('translit-uz.ts')) {
  void main();
}
