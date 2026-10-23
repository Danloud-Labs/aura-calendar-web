# Installing the pages in the Cloudflare Worker

The Worker is edited in the Cloudflare dashboard. These steps replace the old single-file
`htmlAuraCalendar` page with the new modules.

## First install

1. **Push this repo first** (the pages load their images from
   `raw.githubusercontent.com/Danloud-Labs/aura-calendar-web/main/assets`). The repo must be **public**.
2. Cloudflare dashboard → Workers & Pages → the danloudlabs.com Worker → **Edit code**.
3. In the file list, add six new files (the **+** / "New file" button) and paste each one from `worker/`
   with **the same name**:
   - `aura-data.js`
   - `aura-styles.js`
   - `aura-layout.js`
   - `aura-calendar.js`
   - `aura-theme-type.js`
   - `aura-routes.js`
4. In the Worker's main file (`index.js` / `worker.js`):
   - Add at the top, with the other imports:
     ```js
     import { handleAuraCalendar } from './aura-routes.js';
     ```
   - At the very start of `fetch(request, env, ctx)`, before the other routes:
     ```js
     const aura = await handleAuraCalendar(request);
     if (aura) return aura;
     ```
   - Delete the old route for `/ios/aura-calendar` and the old import of `htmlAuraCalendar`.
     The Worker already has a file called `aura-calendar.js` (the old page): paste the new
     `aura-calendar.js` over it. The new pages do not use `styles.js`, so `cssSubPaginas`
     stays as it is for the other pages.
   - The short links `/aura-calendar` and `/aura` are redirected by `handleAuraCalendar`.
   - If `fetch` is not `async`, make it `async fetch(request, env, ctx)`.
5. **Deploy**, then open:
   - https://danloudlabs.com/ios/aura-calendar
   - https://danloudlabs.com/ios/aura-calendar/themes/pulse

## Updating later

- **Only images changed** (new preview in `assets/`): push, then paste `aura-data.js` if you added
  it to a gallery. GitHub raw can take up to 5 minutes to serve a replaced image.
- **Text or design changed:** push, then paste only the files you changed and Deploy.
- New themes in the store need nothing: the "All themes" grids read the live catalog.
