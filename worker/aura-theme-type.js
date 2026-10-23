// =====================================================================================
// AURA Calendar website: one page per kind of theme  ->  /ios/aura-calendar/themes/<slug>
// slugs: premium, daylight, dynamic, smart, pulse, included, sponsored (see aura-data.js)
// =====================================================================================

import { AURA_BASE_PATH, AURA_THEME_TYPES, catalogKind, findType, typeHeader, typeIcon } from './aura-data.js';
import { appStoreButton, auraPage, esc, loadCatalog, safeUrl } from './aura-layout.js';

const typeLink = (t) => `${AURA_BASE_PATH}/themes/${t.slug}`;

function tabsRail(current) {
    const tabs = AURA_THEME_TYPES.map((t) => `
        <a class="tab${t.slug === current.slug ? ' active' : ''}" href="${typeLink(t)}" style="--c:${t.color}"${t.slug === current.slug ? ' aria-current="page"' : ''}>
            <img src="${typeIcon(t.slug)}" alt="" width="30" height="30">${esc(t.short)}
        </a>`).join('');
    return `<div class="tabs-rail"><div class="wrap"><nav class="tabs" aria-label="Kinds of themes">${tabs}</nav></div></div>`;
}

function gallery(t) {
    const n = t.previews.length;
    const cls = n === 1 ? 'n1' : n === 3 ? 'n3' : '';
    const shots = t.previews.map((p) => `
        <figure class="shot" data-zoom="${p.src}" data-caption="${esc(p.name)}">
            <img src="${p.src}" alt="${esc(p.name)} theme preview" loading="lazy"><figcaption>${esc(p.name)}</figcaption>
        </figure>`).join('');
    return `<div class="gallery ${cls} reveal">${shots}</div>`;
}

// Every theme of this kind, live from the store catalog (with category filters when useful).
function allThemes(t, catalog) {
    // Included and Sponsored are already shown in full by the preview gallery.
    if (t.fixedList) return '';
    const items = catalog
        .filter((x) => catalogKind(x) === t.slug)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((x) => ({ name: x.name.replace(/\s+/g, ' ').trim(), img: x.previewImageUrl, cat: x.category || 'General' }));
    if (!items.length) return '';

    const cats = [...new Set(items.map((i) => i.cat).filter(Boolean))].sort();
    const filters = cats.length > 2 ? `
        <div class="filters" data-filter-group="all-themes" style="--c:${t.color}">
            <button class="on" data-cat="*">All ${items.length}</button>
            ${cats.map((c) => `<button data-cat="${esc(c)}">${esc(c)}</button>`).join('')}
        </div>` : '';
    const cards = items.map((i) => `
        <div class="theme-card" data-cat="${esc(i.cat)}">
            <div class="img" data-zoom="${safeUrl(i.img)}" data-caption="${esc(i.name)}"><img src="${safeUrl(i.img)}" alt="${esc(i.name)} theme" loading="lazy"></div>
            <div class="meta"><b>${esc(i.name)}</b>${i.cat ? `<span>${esc(i.cat)}</span>` : ''}</div>
        </div>`).join('');

    return `
<section id="all">
    <div class="wrap">
        <div class="section-head reveal">
            <span class="eyebrow">In the Theme Shop</span>
            <h2>All ${esc(t.short)} themes</h2>
            <p class="lead">${items.length} theme${items.length === 1 ? '' : 's'} today, ${esc(t.price)}. Tap any preview to see it larger.</p>
        </div>
        ${filters}
        <div class="grid-themes" id="all-themes">${cards}</div>
    </div>
</section>`;
}

// Returns null for an unknown slug so the router can fall back to the main page.
export async function htmlAuraThemeType(slug) {
    const t = findType(slug);
    if (!t) return null;
    const catalog = t.fixedList ? [] : await loadCatalog();
    const live = catalog.filter((x) => catalogKind(x) === t.slug).length;

    const i = AURA_THEME_TYPES.indexOf(t);
    const next = AURA_THEME_TYPES[(i + 1) % AURA_THEME_TYPES.length];

    const body = `
${tabsRail(t)}
<main style="--c:${t.color};--g:${t.glow}">
<section class="type-hero">
    <div class="wrap">
        <div class="banner">
            <img src="${typeHeader(t.slug)}" alt="" fetchpriority="high">
            <div class="copy">
                <img class="icon" src="${typeIcon(t.slug)}" alt="${esc(t.short)} icon" width="84" height="84">
                <span class="eyebrow">AURA Calendar</span>
                <h1>${esc(t.name)}</h1>
                <p class="tagline">${esc(t.tagline)}</p>
                <div class="chips">
                    <span class="chip c">${esc(t.price)}</span>
                    ${live ? `<span class="chip">${live} theme${live === 1 ? '' : 's'}</span>` : t.fixedList ? `<span class="chip">${t.fixedList.length} theme${t.fixedList.length === 1 ? '' : 's'}</span>` : ''}
                    <span class="chip">iPhone · iPad · Apple TV</span>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="wrap intro-grid">
        <div class="reveal">
            <span class="eyebrow">What makes them special</span>
            <h2>${esc(t.short)} themes</h2>
            ${t.intro.map((p) => `<p>${esc(p)}</p>`).join('')}
        </div>
        <div class="card reveal">
            <h3>Highlights</h3>
            <ul class="checks">${t.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
            <div class="cta-row" style="justify-content:flex-start">${appStoreButton()}</div>
        </div>
    </div>
</section>

<section style="padding-top:0">
    <div class="wrap">
        <div class="section-head reveal">
            <span class="eyebrow">Previews</span>
            <h2>A closer look</h2>
        </div>
        ${gallery(t)}
    </div>
</section>

${allThemes(t, catalog)}

<section>
    <div class="wrap">
        <div class="final reveal">
            <img class="app" src="${typeIcon(t.slug)}" alt="" style="border-radius:0;box-shadow:none;filter:drop-shadow(0 16px 30px ${t.glow})">
            <h2>Find them in the Theme Shop.</h2>
            <p class="lead" style="margin:0 auto">Open AURA Calendar, tap the Theme Shop and pick the ${esc(t.short)} tab.</p>
            <div class="cta-row">
                ${appStoreButton()}
                <a class="btn btn-ghost" href="${typeLink(next)}">Next: ${esc(next.name)}</a>
            </div>
        </div>
    </div>
</section>
</main>`;

    return auraPage({
        title: `${t.name} · AURA Calendar`,
        description: `${t.name} for AURA Calendar: ${t.tagline} ${t.intro[0]}`.slice(0, 300),
        path: typeLink(t),
        ogImage: typeHeader(t.slug),
        accent: { color: t.color, glow: t.glow },
        body,
    });
}
