// =====================================================================================
// AURA Calendar website: routes. The Worker's fetch() calls handleAuraCalendar(request)
// first; it returns a Response for /ios/aura-calendar/... and null for anything else.
//
//   /ios/aura-calendar                      -> main page
//   /ios/aura-calendar/themes               -> main page, Themes section
//   /ios/aura-calendar/themes/<slug>        -> theme-type page
//   /ios/aura-calendar/<anything else>      -> main page
// =====================================================================================

import { AURA_BASE_PATH } from './aura-data.js';
import { htmlAuraCalendar } from './aura-calendar.js';
import { htmlAuraThemeType } from './aura-theme-type.js';

const html = (body, status = 200) => new Response(body, {
    status,
    headers: {
        'content-type': 'text/html; charset=UTF-8',
        'cache-control': 'public, max-age=300',
    },
});

export async function handleAuraCalendar(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '').toLowerCase();
    if (path !== AURA_BASE_PATH && !path.startsWith(AURA_BASE_PATH + '/')) return null;

    const rest = path.slice(AURA_BASE_PATH.length);       // "", "/themes", "/themes/pulse"
    if (rest === '/themes') return Response.redirect(`${url.origin}${AURA_BASE_PATH}#themes`, 301);

    const m = rest.match(/^\/themes\/([a-z]+)$/);
    if (m) {
        const page = await htmlAuraThemeType(m[1]);
        if (page) return html(page);
    }
    if (rest !== '') return Response.redirect(`${url.origin}${AURA_BASE_PATH}`, 302);
    return html(await htmlAuraCalendar());
}
