// =====================================================================================
// AURA Calendar website: main page  ->  /ios/aura-calendar
// =====================================================================================

import { AURA_ASSETS, AURA_BASE_PATH, AURA_FEATURES, AURA_THEME_TYPES, brand, catalogKind, findType, typeIcon } from './aura-data.js';
import { ICONS, appStoreButton, auraPage, esc, loadCatalog, safeUrl } from './aura-layout.js';

// One stroke icon per feature card, in the same order as AURA_FEATURES.
const FEATURE_ICONS = [
    '<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/><circle cx="12" cy="15" r="1.4" fill="currentColor"/>',
    '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
    '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    '<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="M8 14h3M8 17h6"/>',
    '<path d="M6 3.5h9l3.5 3.5V20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5z"/><path d="M9 11h6M9 14.5h6M9 18h3"/>',
    '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
    '<circle cx="12" cy="13" r="7"/><path d="M12 9.5V13l2.2 1.6M4 5.5 6.5 3M20 5.5 17.5 3"/>',
    '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    '<rect x="3.5" y="3.5" width="7.5" height="7.5" rx="2"/><rect x="13" y="3.5" width="7.5" height="7.5" rx="2"/><rect x="3.5" y="13" width="17" height="7.5" rx="2"/>',
    '<path d="M7 18.5h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7.1 9.1 4.75 4.75 0 0 0 7 18.5z"/>',
    '<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6 6v12"/>',
    '<path d="M9 18V5.5l11-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
];
const svg = (inner) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

const typeLink = (t) => `${AURA_BASE_PATH}/themes/${t.slug}`;

function featureGrid() {
    return AURA_FEATURES.map((f, i) => `
        <div class="card feature reveal">
            <div class="ic">${svg(FEATURE_ICONS[i] || FEATURE_ICONS[0])}</div>
            <h3>${esc(f.title)}</h3>
            <p>${esc(f.text)}</p>
        </div>`).join('');
}

function typeTiles(counts) {
    return AURA_THEME_TYPES.map((t) => {
        const n = counts[t.slug] || (t.fixedList ? t.fixedList.length : 0);
        return `
        <a class="type-tile reveal" href="${typeLink(t)}" style="--c:${t.color};--g:${t.glow}">
            <div class="row">
                <img src="${typeIcon(t.slug)}" alt="" loading="lazy" width="64" height="64">
                <div>
                    <h3>${esc(t.short)}</h3>
                    <div class="price">${esc(t.price)}${n ? ` · ${n} theme${n === 1 ? '' : 's'}` : ''}</div>
                </div>
            </div>
            <p>${esc(t.tagline)}</p>
            <span class="go">Explore ${esc(t.short)} ${ICONS.arrow}</span>
        </a>`;
    }).join('');
}

// Newest themes from the live catalog (themeVersion = last time it was published).
function latestStrip(catalog) {
    const latest = [...catalog]
        .filter((t) => t.previewImageUrl)
        .sort((a, b) => (b.themeVersion || 0) - (a.themeVersion || 0))
        .slice(0, 10);
    if (!latest.length) return '';
    const cards = latest.map((t) => {
        const kind = findType(catalogKind(t));
        return `
        <div class="theme-card" style="--c:${kind.color}">
            <div class="img" data-zoom="${safeUrl(t.previewImageUrl)}" data-caption="${esc(t.name)}">
                <img src="${safeUrl(t.previewImageUrl)}" alt="${esc(t.name)} theme" loading="lazy">
            </div>
            <div class="meta"><b>${esc(t.name)}</b><a class="kind" href="${typeLink(kind)}">${esc(kind.short)}</a></div>
        </div>`;
    }).join('');
    return `
<section id="latest">
    <div class="wrap">
        <div class="section-head reveal">
            <span class="eyebrow">Fresh in the Theme Shop</span>
            <h2>Latest themes</h2>
            <p class="lead">New worlds land in the Theme Shop all the time. Here are the newest ones.</p>
        </div>
        <div class="strip">${cards}</div>
    </div>
</section>`;
}

export async function htmlAuraCalendar() {
    const catalog = await loadCatalog();
    const counts = {};
    for (const t of catalog) { const k = catalogKind(t); counts[k] = (counts[k] || 0) + 1; }
    const shopCount = catalog.length;
    const totalThemes = shopCount ? shopCount + 6 : 70;

    const body = `
<main>
<section class="hero">
    <div class="wrap">
        <div class="hero-art"><img src="${brand('hero.webp')}" alt="AURA Calendar" fetchpriority="high"></div>
        <div class="hero-copy">
            <span class="eyebrow">For iPhone, iPad and Apple TV</span>
            <h1>Your calendar,<br><span class="grad-text">as beautiful as your day.</span></h1>
            <p class="lead">AURA Calendar is a complete calendar, planner and journal wrapped in living art. Pick a theme and your month, your tasks and your widgets change with it: art, colors, particles and music.</p>
            <div class="cta-row">
                ${appStoreButton()}
                <a class="btn btn-ghost" href="#themes">Explore the themes</a>
            </div>
            <div class="stats">
                <div class="stat"><b class="grad-text">${totalThemes}+</b><span>themes to choose from</span></div>
                <div class="stat"><b>${AURA_THEME_TYPES.length}</b><span>kinds of themes</span></div>
                <div class="stat"><b>3</b><span>iPhone · iPad · Apple TV</span></div>
                <div class="stat"><b>0</b><span>data collected</span></div>
            </div>
        </div>
    </div>
</section>

<section id="about">
    <div class="wrap split">
        <div class="reveal">
            <span class="eyebrow">What is AURA Calendar</span>
            <h2>Planning that feels like a place you want to be.</h2>
            <p class="lead">Most calendars are grids. AURA Calendar is a small world you open every morning. Your events, tasks, reminders and notes live together in one beautiful month, framed by the art of the theme you pick.</p>
            <p class="lead">It works with the calendars and reminders you already use through Apple Calendar and Apple Reminders, keeps everything in sync through your own iCloud, and turns sideways into a wide landscape view or a living picture frame for your desk.</p>
            <ul class="checks">
                <li>Calendar, planner, tasks, lists and journal in one app</li>
                <li>Themes with their own art, particles and original music</li>
                <li>Widgets, Siri, location reminders and urgent alarms</li>
                <li>No account, no ads, no tracking</li>
            </ul>
        </div>
        <figure class="shot reveal" data-zoom="${brand('promo-1.webp')}" data-caption="AURA Calendar on iPhone"><img src="${brand('promo-1.webp')}" alt="AURA Calendar themes on iPhone" loading="lazy"></figure>
    </div>
</section>

<section id="features">
    <div class="wrap">
        <div class="section-head center reveal">
            <span class="eyebrow">Everything you need</span>
            <h2>A real calendar under the art.</h2>
            <p class="lead">AURA Calendar is not a skin. It is a full planning app with everything you expect, and a few things you will not find anywhere else.</p>
        </div>
        <div class="features">${featureGrid()}</div>
    </div>
</section>

<section id="themes">
    <div class="wrap">
        <div class="section-head center reveal">
            <span class="eyebrow">The Theme Shop</span>
            <h2>Seven kinds of themes.</h2>
            <p class="lead">From free classics to themes that follow the sun, react to the weather or pulse with light. Every theme is a one-time purchase that is yours forever, on every device.</p>
        </div>
        <div class="types">${typeTiles(counts)}</div>
    </div>
</section>

${latestStrip(catalog)}

<section id="landscape">
    <div class="wrap split reverse">
        <div class="reveal">
            <span class="eyebrow">Landscape &amp; frame mode</span>
            <h2>Turn it sideways.</h2>
            <p class="lead">Rotate your iPhone or iPad and AURA Calendar opens into a wide canvas: your month on one side, your day on the other, and the full art of the theme behind it. Leave it on your desk and it becomes a living picture frame with the theme's music playing softly.</p>
        </div>
        <figure class="shot reveal" data-zoom="${brand('promo-2.webp')}" data-caption="Landscape mode"><img src="${brand('promo-2.webp')}" alt="AURA Calendar in landscape mode" loading="lazy"></figure>
    </div>
</section>

<section id="aura-tv">
    <div class="wrap">
        <div class="tv reveal">
            <div class="inner">
                <div class="text">
                    <span class="tv-badge">${ICONS.tv} Apple TV</span>
                    <h2>Aura TV</h2>
                    <p class="lead">AURA Calendar comes to the biggest screen in your home. Aura TV turns your Apple TV into a living picture frame dressed in your theme.</p>
                    <ul class="checks">
                        <li>4K theme backgrounds that rotate, and looping video backgrounds</li>
                        <li>Floating particles and the theme's music, with Jukebox mode</li>
                        <li>On-screen clock and a sleep timer</li>
                        <li>A Theme Shop made for the Siri Remote</li>
                        <li>Buy once, use everywhere: your themes work on iPhone, iPad and Apple TV</li>
                    </ul>
                </div>
                <div class="pic">
                    <div class="tv-set">
                        <div class="tv-screen"><img src="${AURA_ASSETS}/previews/dynamic/hauntedmansion.webp" alt="Aura TV showing the Haunted Mansion theme" loading="lazy"></div>
                        <div class="tv-stand"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="shop">
    <div class="wrap split">
        <div class="reveal">
            <span class="eyebrow">Fair and simple</span>
            <h2>Pay once. Keep it forever.</h2>
            <p class="lead">There is no subscription. AURA Calendar is free to download and comes with six complete themes. Premium themes are $1.99, Daylight, Dynamic and Pulse themes are $3.99 and Smart themes are $5.99, each a one-time purchase.</p>
            <ul class="checks">
                <li>Your purchases follow your Apple Account to every device</li>
                <li>Restore Purchases anytime from Settings</li>
                <li>Free updates to the themes you own</li>
            </ul>
        </div>
        <div class="card reveal" id="privacy">
            <div class="privacy">
                <div class="shield">${ICONS.shield}</div>
                <div>
                    <span class="eyebrow">Privacy</span>
                    <h3 style="font-size:24px;margin:6px 0 8px">Data Not Collected</h3>
                    <p style="margin:0;color:var(--muted)">AURA Calendar has no account and no analytics. Your events, tasks and journal stay on your device and in your own iCloud. Your location is used only to show your local weather and to trigger the location reminders you set.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="wrap">
        <div class="final reveal">
            <img class="app" src="${brand('app-icon.webp')}" alt="AURA Calendar icon">
            <h2>Make every day look like you.</h2>
            <p class="lead" style="margin:0 auto">Download AURA Calendar free on the App Store and start with six themes on us.</p>
            <div class="cta-row">${appStoreButton()}</div>
        </div>
    </div>
</section>
</main>`;

    return auraPage({
        title: 'AURA Calendar: the calendar dressed in living art',
        description: 'AURA Calendar for iPhone, iPad and Apple TV: a complete calendar, planner and journal with themes that bring art, particles and music to your day.',
        path: AURA_BASE_PATH,
        ogImage: brand('hero.webp'),
        body,
    });
}
