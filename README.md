# AURA Calendar website

The pages of **danloudlabs.com/ios/aura-calendar**: the main page and one page per kind of theme.
They are served by the Danloud Labs Cloudflare Worker; every image is served from this repo through GitHub raw.

| Page | URL |
|---|---|
| Main page | `/ios/aura-calendar` |
| Premium Themes | `/ios/aura-calendar/themes/premium` |
| Daylight Themes | `/ios/aura-calendar/themes/daylight` |
| Dynamic Themes | `/ios/aura-calendar/themes/dynamic` |
| Smart Themes | `/ios/aura-calendar/themes/smart` |
| Pulse Themes | `/ios/aura-calendar/themes/pulse` |
| Included Themes | `/ios/aura-calendar/themes/included` |
| Sponsored Themes | `/ios/aura-calendar/themes/sponsored` |

## Structure

```
aura-calendar-web/
├── assets/
│   ├── brand/                 hero.webp, promo-1.webp, promo-2.webp, app-icon.webp
│   ├── headers/<type>.webp    1280×720 banner of each theme-type page (ElevenLabs)
│   ├── icons/types/<type>.webp  3D icon of each kind of theme (320 px)
│   └── previews/<type>/*.webp   curated previews shown in each page's gallery
├── worker/                    the code that goes in the Cloudflare Worker
│   ├── aura-routes.js         handleAuraCalendar(request): the only thing index.js calls
│   ├── aura-calendar.js       main page
│   ├── aura-theme-type.js     the 7 theme-type pages
│   ├── aura-layout.js         shared page shell, top bar, footer, lightbox, catalog loader
│   ├── aura-styles.js         CSS (Theme Studio palette)
│   └── aura-data.js           texts, prices, previews, features: edit this one for content
├── tools/preview.mjs          renders every page to preview/ to check before pushing
├── CLOUDFLARE.md              how to install / update the Worker
└── package.json
```

`<type>` is always one of: `premium`, `daylight`, `dynamic`, `smart`, `pulse`, `included`, `sponsored`.

## What is live and what is fixed

- **Live:** the "All … themes" grids, the theme counts and "Latest themes" come from
  `store.danloudlabs.com/catalog.json` (cached 10 min at the edge). A new theme deployed from
  Theme Studio shows up on the website by itself, with its store preview.
- **Fixed (in this repo):** texts, the curated gallery previews, headers, icons and brand images.

## Common changes

**Add or swap a gallery preview**
1. Drop the `.webp` (16:9, max 1600 px wide) in `assets/previews/<type>/`.
2. Add `{ name: 'Theme Name', src: preview('<type>', '<file>') }` to that type's `previews` in `worker/aura-data.js`.
3. Commit and push, then paste `aura-data.js` in the Worker (see CLOUDFLARE.md).

**Change a text or price:** edit `worker/aura-data.js` (theme types and feature cards) or the page file.

**New sponsored theme:** add it to `previews` and `fixedList` of `sponsored` in `aura-data.js`.

## Check before pushing

```
cd ~/Developer/aura-calendar-web
npm run check      # syntax of every module
npm run preview    # writes preview/*.html with local images; open preview/index.html
```

`preview/` is not committed.
