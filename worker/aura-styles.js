// =====================================================================================
// AURA Calendar website: shared CSS for the main page and the theme-type pages.
// Same palette and feel as Aura Theme Studio (dark glass, soft lines, cyan → violet → pink).
// =====================================================================================

export const AURA_CSS = `
:root {
    --bg: #06050a; --win: #0b0910; --panel: #120f18; --card: #15111c;
    --line: #262030; --line2: #2c2436; --fg: #f5f1f8; --muted: #a49cae; --dim: #6f6879;
    --a1: #5fe0ff; --a2: #b48cff; --a3: #ff6fb0;
    --grad: linear-gradient(135deg, var(--a1), var(--a2) 55%, var(--a3));
    --ui: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, "Segoe UI", Roboto, sans-serif;
    --round: ui-rounded, "SF Pro Rounded", var(--ui);
    --accent: var(--a2); --glow: rgba(180, 140, 255, 0.35);
    --radius: 20px; --radius-sm: 14px;
    --max: 1180px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
    margin: 0; background: var(--bg); color: var(--fg); font-family: var(--ui);
    line-height: 1.55; -webkit-font-smoothing: antialiased; overflow-x: hidden;
}
body::before {
    content: ""; position: fixed; inset: 0; z-index: -1; pointer-events: none;
    background:
        radial-gradient(900px 600px at 12% -10%, rgba(95, 224, 255, 0.10), transparent 60%),
        radial-gradient(900px 700px at 95% 5%, rgba(180, 140, 255, 0.12), transparent 60%),
        radial-gradient(800px 600px at 50% 110%, rgba(255, 111, 176, 0.08), transparent 60%),
        var(--bg);
}
img { max-width: 100%; display: block; }
figure { margin: 0; }
a { color: inherit; }
.wrap { width: 100%; max-width: var(--max); margin: 0 auto; padding: 0 20px; }

/* ---------- Top bar ---------- */
.topbar {
    position: sticky; top: 0; z-index: 50;
    background: rgba(6, 5, 10, 0.72); backdrop-filter: saturate(160%) blur(18px); -webkit-backdrop-filter: saturate(160%) blur(18px);
    border-bottom: 1px solid var(--line);
}
.topbar .wrap { display: flex; align-items: center; gap: 14px; height: 60px; }
.back-btn {
    display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 999px;
    color: #0a84ff; text-decoration: none; border: 1px solid rgba(10, 132, 255, 0.6);
    font-weight: 500; font-size: 14px; transition: all .2s; background: rgba(0, 0, 0, .4); white-space: nowrap;
}
.back-btn:hover { background: #0a84ff; color: #fff; }
.brand { display: flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 700; letter-spacing: .2px; }
.brand img { width: 30px; height: 30px; border-radius: 8px; }
.brand span { font-family: var(--round); }
.topbar .spacer { flex: 1; }
.topbar nav { display: flex; gap: 4px; }
.topbar nav a {
    text-decoration: none; color: var(--muted); font-size: 14px; padding: 7px 12px; border-radius: 999px; transition: .2s;
}
.topbar nav a:hover { color: var(--fg); background: rgba(255, 255, 255, 0.06); }

/* ---------- Buttons ---------- */
.btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 13px 22px; border-radius: 14px; font-weight: 600; font-size: 15px;
    text-decoration: none; transition: transform .15s, box-shadow .2s, background .2s; border: 1px solid transparent;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: #fff; color: #000; }
.btn-primary:hover { box-shadow: 0 10px 30px rgba(255, 255, 255, 0.18); }
.btn-ghost { background: rgba(255, 255, 255, 0.05); border-color: var(--line2); color: var(--fg); }
.btn-ghost:hover { background: rgba(255, 255, 255, 0.09); }
.btn svg { width: 20px; height: 20px; flex: none; }
.btn small { display: block; font-size: 10.5px; font-weight: 500; opacity: .7; line-height: 1; margin-bottom: 2px; }
.btn .two { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.1; }

/* ---------- Text ---------- */
.eyebrow {
    display: inline-block; font-size: 12px; letter-spacing: 1.8px; text-transform: uppercase; font-weight: 700;
    background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
}
h1, h2, h3 { font-family: var(--round); letter-spacing: -0.02em; margin: 0; }
h2 { font-size: clamp(28px, 4vw, 42px); line-height: 1.12; margin: 10px 0 14px; }
h3 { font-size: 18px; }
.lead { color: var(--muted); font-size: clamp(16px, 1.6vw, 19px); max-width: 720px; }
.grad-text { background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }
section { padding: 72px 0; }
.section-head { margin-bottom: 34px; }
.section-head.center { text-align: center; }
.section-head.center .lead { margin: 0 auto; }

/* ---------- Hero (main page) ---------- */
.hero { padding: 28px 0 40px; }
.hero-art {
    position: relative; border-radius: 28px; overflow: hidden; border: 1px solid var(--line);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
    aspect-ratio: 2000 / 924; background: #000;
}
.hero-art img { width: 100%; height: 100%; object-fit: cover; }
.hero-copy { text-align: center; padding: 38px 0 0; }
.hero-copy h1 { font-size: clamp(34px, 6vw, 64px); line-height: 1.04; }
.hero-copy .lead { margin: 16px auto 0; }
.cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
.stats {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin-top: 40px;
    background: var(--line); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden;
}
.stat { background: var(--win); padding: 22px 16px; text-align: center; }
.stat b { display: block; font-family: var(--round); font-size: clamp(24px, 3vw, 34px); line-height: 1.1; }
.stat span { color: var(--muted); font-size: 13px; }

/* ---------- Cards ---------- */
.card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.01)), var(--card);
    border: 1px solid var(--line); border-radius: var(--radius); padding: 22px;
}
.split { display: grid; grid-template-columns: 1fr 1.1fr; gap: 40px; align-items: center; }
.split.reverse > :first-child { order: 2; }
.shot { border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line); box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5); cursor: zoom-in; }
.shot img { width: 100%; }
.checks { list-style: none; padding: 0; margin: 18px 0 0; display: grid; gap: 10px; }
.checks li { display: flex; gap: 10px; align-items: flex-start; color: var(--fg); }
.checks li::before {
    content: ""; flex: none; width: 18px; height: 18px; margin-top: 3px; border-radius: 6px;
    background: var(--accent); box-shadow: 0 0 14px var(--glow);
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'/%3E%3C/svg%3E") center / 14px no-repeat, linear-gradient(#000, #000);
    -webkit-mask-composite: xor; mask-composite: exclude;
}

/* ---------- Features ---------- */
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.feature { transition: border-color .2s, transform .2s; }
.feature:hover { border-color: var(--line2); transform: translateY(-2px); }
.feature .ic {
    width: 42px; height: 42px; border-radius: 12px; display: grid; place-items: center; margin-bottom: 14px;
    background: rgba(180, 140, 255, 0.12); border: 1px solid rgba(180, 140, 255, 0.25); color: var(--a2);
}
.feature:nth-child(3n+1) .ic { background: rgba(95, 224, 255, 0.10); border-color: rgba(95, 224, 255, 0.25); color: var(--a1); }
.feature:nth-child(3n+3) .ic { background: rgba(255, 111, 176, 0.10); border-color: rgba(255, 111, 176, 0.25); color: var(--a3); }
.feature .ic svg { width: 22px; height: 22px; }
.feature h3 { margin-bottom: 6px; }
.feature p { margin: 0; color: var(--muted); font-size: 14.5px; }

/* ---------- Theme-type tiles (main page) ---------- */
.types { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 14px; }
.type-tile {
    --c: #b48cff; --g: rgba(180, 140, 255, .35);
    position: relative; display: flex; flex-direction: column; gap: 12px; text-decoration: none;
    padding: 20px; border-radius: var(--radius); border: 1px solid var(--line); overflow: hidden;
    background: radial-gradient(400px 200px at 0% 0%, var(--g), transparent 70%), var(--card);
    transition: transform .2s, border-color .2s, box-shadow .2s;
}
.type-tile:hover { transform: translateY(-3px); border-color: var(--c); box-shadow: 0 18px 50px -20px var(--g); }
.type-tile .row { display: flex; align-items: center; gap: 14px; }
.type-tile img { width: 64px; height: 64px; filter: drop-shadow(0 8px 18px var(--g)); }
.type-tile h3 { font-size: 19px; }
.type-tile .price { font-size: 12.5px; color: var(--c); font-weight: 700; letter-spacing: .3px; }
.type-tile p { margin: 0; color: var(--muted); font-size: 14.5px; }
.type-tile .go { margin-top: auto; font-size: 13.5px; color: var(--fg); opacity: .8; display: flex; align-items: center; gap: 6px; }

/* ---------- Horizontal strips ---------- */
.strip { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(280px, 1fr); gap: 14px; overflow-x: auto; padding-bottom: 10px; scroll-snap-type: x mandatory; }
.strip::-webkit-scrollbar { height: 6px; } .strip::-webkit-scrollbar-thumb { background: var(--line2); border-radius: 9px; }
.strip > * { scroll-snap-align: start; }

/* ---------- Theme cards ---------- */
.theme-card {
    border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--line); background: var(--card);
    text-decoration: none; display: flex; flex-direction: column; transition: transform .2s, border-color .2s;
}
.theme-card:hover { transform: translateY(-2px); border-color: var(--line2); }
.theme-card .img { aspect-ratio: 16 / 9; background: #000; overflow: hidden; cursor: zoom-in; }
.theme-card .img img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.theme-card:hover .img img { transform: scale(1.04); }
.theme-card .meta { padding: 12px 14px; display: flex; align-items: center; gap: 10px; }
.theme-card .meta b { font-weight: 600; font-size: 14.5px; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.theme-card .meta span { font-size: 12px; color: var(--muted); white-space: nowrap; }
.theme-card .kind { text-decoration: none; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 999px; color: var(--c, var(--a2)); background: rgba(255, 255, 255, 0.05); border: 1px solid var(--line2); }
.grid-themes { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 14px; }

/* ---------- Theme-type page ---------- */
.tabs-rail {
    position: sticky; top: 60px; z-index: 40; border-bottom: 1px solid var(--line);
    background: rgba(6, 5, 10, 0.78); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
}
.tabs { display: flex; gap: 6px; overflow-x: auto; padding: 10px 0; scrollbar-width: none; }
.tabs::-webkit-scrollbar { display: none; }
.tab {
    --c: #b48cff; display: flex; align-items: center; gap: 8px; flex: none; text-decoration: none;
    padding: 6px 14px 6px 6px; border-radius: 999px; border: 1px solid transparent; color: var(--muted); font-size: 14px; font-weight: 600;
    transition: .2s;
}
.tab img { width: 30px; height: 30px; }
.tab:hover { color: var(--fg); background: rgba(255, 255, 255, 0.05); }
.tab.active { color: var(--fg); border-color: var(--c); background: color-mix(in srgb, var(--c) 14%, transparent); }

.type-hero { position: relative; padding: 0; }
.type-hero .banner {
    position: relative; border-radius: 28px; overflow: hidden; border: 1px solid var(--line);
    min-height: 420px; display: flex; align-items: flex-end; margin-top: 24px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
}
.type-hero .banner > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 70% 50%; }
.type-hero .banner::after {
    content: ""; position: absolute; inset: 0;
    background: linear-gradient(90deg, rgba(6, 5, 10, 0.92) 0%, rgba(6, 5, 10, 0.55) 45%, rgba(6, 5, 10, 0) 75%),
                linear-gradient(0deg, rgba(6, 5, 10, 0.75), transparent 45%);
}
.type-hero .copy { position: relative; z-index: 1; padding: 40px; max-width: 620px; }
.type-hero .copy .icon { width: 84px; height: 84px; filter: drop-shadow(0 10px 26px var(--g)); margin-bottom: 14px; }
.type-hero h1 { font-size: clamp(34px, 5.4vw, 58px); line-height: 1.02; }
.type-hero .tagline { color: #e9e4f0; font-size: clamp(16px, 1.8vw, 20px); margin: 12px 0 0; }
.chips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 18px; }
.chip { font-size: 13px; font-weight: 600; padding: 6px 12px; border-radius: 999px; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.14); }
.chip.c { color: #fff; background: var(--c); border-color: transparent; box-shadow: 0 6px 20px -6px var(--g); }

.intro-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 28px; align-items: start; }
.intro-grid p { color: #d9d3e2; font-size: 17px; margin: 0 0 14px; }
.gallery { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
.gallery .shot:nth-child(1) { grid-column: span 4; grid-row: span 2; }
.gallery .shot { grid-column: span 2; position: relative; }
.gallery .shot img { width: 100%; height: 100%; object-fit: cover; aspect-ratio: 16 / 9; }
.gallery .shot figcaption {
    position: absolute; left: 10px; bottom: 10px; font-size: 12.5px; font-weight: 600; padding: 5px 10px; border-radius: 999px;
    background: rgba(0, 0, 0, 0.55); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}
.gallery.n3 .shot:nth-child(1) { grid-column: span 6; grid-row: auto; }
.gallery.n3 .shot { grid-column: span 3; }
.gallery.n1 .shot:nth-child(1) { grid-column: span 6; }
.filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
.filters button {
    font: inherit; font-size: 13px; font-weight: 600; color: var(--muted); cursor: pointer;
    padding: 7px 13px; border-radius: 999px; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--line2);
}
.filters button.on { color: #fff; border-color: var(--c, var(--a2)); background: color-mix(in srgb, var(--c, #b48cff) 18%, transparent); }
.empty { color: var(--muted); }

/* ---------- Aura TV + privacy + CTA ---------- */
.tv { position: relative; border-radius: 28px; overflow: hidden; border: 1px solid var(--line); background: var(--win); }
.tv .inner { display: grid; grid-template-columns: 1fr 1.25fr; gap: 0; align-items: stretch; }
.tv .text { padding: 44px; }
.tv .pic { position: relative; min-height: 320px; }
.tv .pic { display: grid; place-items: center; padding: 40px 36px; background: radial-gradient(500px 300px at 60% 40%, rgba(155, 63, 224, 0.28), transparent 70%); }
.tv-set { width: 100%; max-width: 560px; }
.tv-screen {
    border-radius: 14px; padding: 10px; background: linear-gradient(180deg, #1c1c1f, #0c0c0e); border: 1px solid #2f2f33;
    box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.8), 0 0 60px -10px rgba(155, 63, 224, 0.45);
}
.tv-screen img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 6px; cursor: default; }
.tv-stand { width: 26%; height: 14px; margin: 0 auto; background: linear-gradient(180deg, #2a2a2e, #141416); border-radius: 0 0 10px 10px; }
.tv-badge {
    display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 10px;
    background: #000; border: 1px solid #3a3a3c; font-weight: 600; font-size: 14px; margin-bottom: 14px;
}
.tv-badge svg { width: 20px; height: 20px; }
.privacy { display: grid; grid-template-columns: auto 1fr; gap: 24px; align-items: center; }
.privacy .shield { width: 76px; height: 76px; border-radius: 22px; display: grid; place-items: center; background: rgba(74, 222, 128, 0.1); border: 1px solid rgba(74, 222, 128, 0.3); color: #4ade80; }
.privacy .shield svg { width: 38px; height: 38px; }
.final {
    text-align: center; padding: 56px 24px; border-radius: 28px; border: 1px solid var(--line);
    background: radial-gradient(600px 300px at 50% 0%, rgba(180, 140, 255, 0.18), transparent 70%), var(--win);
}
.final img.app { width: 96px; height: 96px; border-radius: 22px; margin: 0 auto 18px; box-shadow: 0 20px 50px rgba(180, 140, 255, 0.3); }
footer { border-top: 1px solid var(--line); color: var(--dim); font-size: 13px; padding: 28px 0 40px; margin-top: 40px; }
footer .wrap { display: flex; gap: 16px; flex-wrap: wrap; justify-content: space-between; }
footer a { color: var(--muted); text-decoration: none; }
footer a:hover { color: var(--fg); }

/* ---------- Lightbox ---------- */
.lb { position: fixed; inset: 0; z-index: 100; background: rgba(0, 0, 0, 0.9); display: none; align-items: center; justify-content: center; padding: 24px; cursor: zoom-out; }
.lb.open { display: flex; }
.lb img { max-width: 100%; max-height: 86vh; border-radius: 14px; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7); }
.lb p { position: absolute; bottom: 18px; left: 0; right: 0; text-align: center; color: #ddd; font-weight: 600; margin: 0; }

/* ---------- Reveal ---------- */
.reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s ease, transform .7s ease; }
.reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } * { scroll-behavior: auto; } }

/* ---------- Responsive ---------- */
@media (max-width: 980px) {
    .features { grid-template-columns: repeat(2, 1fr); }
    .split, .intro-grid, .tv .inner { grid-template-columns: 1fr; }
    .split.reverse > :first-child { order: 0; }
    .topbar nav { display: none; }
    .gallery .shot, .gallery .shot:nth-child(1) { grid-column: span 6; grid-row: auto; }
    .gallery.n3 .shot { grid-column: span 6; }
}
@media (max-width: 640px) {
    section { padding: 52px 0; }
    .wrap { padding: 0 16px; }
    .features { grid-template-columns: 1fr; }
    .stats { grid-template-columns: repeat(2, 1fr); }
    .type-hero .banner { min-height: 460px; }
    .type-hero .banner > img { object-position: 78% 50%; }
    .type-hero .banner::after { background: linear-gradient(0deg, rgba(6, 5, 10, 0.95) 0%, rgba(6, 5, 10, 0.6) 55%, rgba(6, 5, 10, 0.1) 100%); }
    .type-hero .copy { padding: 24px; }
    .tv .text { padding: 28px; }
    .privacy { grid-template-columns: 1fr; }
    .brand span { display: none; }
}
`;
