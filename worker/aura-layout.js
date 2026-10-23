// =====================================================================================
// AURA Calendar website: the page shell shared by every page (head, top bar, footer,
// lightbox) plus small helpers (escaping, the live catalog, SVG icons).
// =====================================================================================

import { AURA_CSS } from './aura-styles.js';
import { AURA_APP_STORE, AURA_BASE_PATH, AURA_CATALOG, brand } from './aura-data.js';

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Store preview URLs have spaces in the file name ("Police Force.webp").
export const safeUrl = (u) => esc(encodeURI(decodeURI(String(u || ''))));

// Live theme catalog from R2, cached at the edge for 10 minutes. Never throws: the pages
// still render (with the curated previews) if the catalog is down.
export async function loadCatalog() {
    try {
        const res = await fetch(AURA_CATALOG, { cf: { cacheTtl: 600, cacheEverything: true } });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : (data.themes || []);
    } catch (_) {
        return [];
    }
}

export const ICONS = {
    apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.63c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.54 2.66-.39 6.59 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5zM14.2 6.17c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.68-.92 2.67.97.08 1.96-.49 2.56-1.22z"/></svg>',
    tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4" width="19" height="13" rx="2.5"/><path d="M8 21h8M12 17v4"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3z"/><path d="m8.8 12 2.2 2.2 4.4-4.4"/></svg>',
};

// "Download on the App Store" button (system font, Apple glyph drawn inline).
export const appStoreButton = (extra = '') => `
<a class="btn btn-primary ${extra}" href="${AURA_APP_STORE}" target="_blank" rel="noopener">
    ${ICONS.apple}<span class="two"><small>Download on the</small>App Store</span>
</a>`;

export function auraPage({ title, description, path, ogImage, accent, body }) {
    const url = `https://danloudlabs.com${path}`;
    const style = accent ? `<style>:root{--accent:${accent.color};--glow:${accent.glow};}</style>` : '';
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<link rel="icon" type="image/webp" href="${brand('app-icon.webp')}">
<link rel="apple-touch-icon" href="${brand('app-icon.webp')}">
<meta name="theme-color" content="#06050a">
<meta name="apple-itunes-app" content="app-id=6794986718">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<style>${AURA_CSS}</style>
${style}
</head>
<body>
<header class="topbar">
    <div class="wrap">
        <a href="/ios-apps" class="back-btn">&larr; iOS Apps</a>
        <a class="brand" href="${AURA_BASE_PATH}"><img src="${brand('app-icon.webp')}" alt=""><span>AURA Calendar</span></a>
        <div class="spacer"></div>
        <nav>
            <a href="${AURA_BASE_PATH}#features">Features</a>
            <a href="${AURA_BASE_PATH}#themes">Themes</a>
            <a href="${AURA_BASE_PATH}#aura-tv">Aura TV</a>
            <a href="${AURA_BASE_PATH}#privacy">Privacy</a>
        </nav>
    </div>
</header>
${body}
<footer>
    <div class="wrap">
        <span>&copy; ${new Date().getFullYear()} Danloud Labs LLC. AURA Calendar for iPhone, iPad and Apple TV.</span>
        <span><a href="/ios-apps">More apps</a> &nbsp;·&nbsp; <a href="${AURA_APP_STORE}" target="_blank" rel="noopener">App Store</a></span>
    </div>
</footer>
<div class="lb" id="lb" aria-hidden="true"><img alt=""><p></p></div>
<script>
(() => {
    const lb = document.getElementById('lb'), img = lb.querySelector('img'), cap = lb.querySelector('p');
    document.addEventListener('click', (e) => {
        const t = e.target.closest('[data-zoom]');
        if (t) { e.preventDefault(); img.src = t.dataset.zoom; cap.textContent = t.dataset.caption || ''; lb.classList.add('open'); return; }
        if (lb.classList.contains('open')) lb.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.classList.remove('open'); });
    const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -8% 0px' }) : null;
    document.querySelectorAll('.reveal').forEach((el) => io ? io.observe(el) : el.classList.add('in'));
    document.querySelectorAll('[data-filter-group]').forEach((bar) => {
        const grid = document.getElementById(bar.dataset.filterGroup);
        bar.addEventListener('click', (e) => {
            const b = e.target.closest('button'); if (!b) return;
            bar.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
            grid.querySelectorAll('[data-cat]').forEach((c) => { c.style.display = (b.dataset.cat === '*' || c.dataset.cat === b.dataset.cat) ? '' : 'none'; });
        });
    });
})();
</script>
</body>
</html>`;
}
