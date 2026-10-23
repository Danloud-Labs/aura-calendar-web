// Renders every page to preview/ with images pointing at the local assets/ folder,
// so the site can be checked before pushing:  node tools/preview.mjs  then open preview/index.html
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AURA_ASSETS, AURA_BASE_PATH, AURA_THEME_TYPES } from '../worker/aura-data.js';
import { handleAuraCalendar } from '../worker/aura-routes.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'preview');
await mkdir(out, { recursive: true });

const pages = [['', 'index.html'], ...AURA_THEME_TYPES.map((t) => [`/themes/${t.slug}`, `${t.slug}.html`])];
for (const [route, file] of pages) {
    const res = await handleAuraCalendar(new Request(`https://danloudlabs.com${AURA_BASE_PATH}${route}`));
    let html = await res.text();
    html = html.split(AURA_ASSETS).join('../assets');
    html = html.replace(new RegExp(`${AURA_BASE_PATH}/themes/([a-z]+)`, 'g'), '$1.html');
    html = html.split(`href="${AURA_BASE_PATH}#`).join('href="index.html#');
    html = html.split(`href="${AURA_BASE_PATH}"`).join('href="index.html"');
    await writeFile(join(out, file), html);
    console.log(res.status, file, `${Math.round(html.length / 1024)} KB`);
}
