// =====================================================================================
// AURA Calendar website: the data every page reads (theme types, previews, features).
// Images live in this repo (Danloud-Labs/aura-calendar-web) and are served from GitHub raw.
// To add a preview: drop the .webp in assets/previews/<type>/ and add it to `previews` below.
// =====================================================================================

export const AURA_ASSETS = 'https://raw.githubusercontent.com/Danloud-Labs/aura-calendar-web/main/assets';
export const AURA_APP_STORE = 'https://apps.apple.com/app/id6794986718';
export const AURA_CATALOG = 'https://store.danloudlabs.com/catalog.json';
export const AURA_BASE_PATH = '/ios/aura-calendar';

export const typeIcon = (slug) => `${AURA_ASSETS}/icons/types/${slug}.webp`;
export const typeHeader = (slug) => `${AURA_ASSETS}/headers/${slug}.webp`;
export const brand = (file) => `${AURA_ASSETS}/brand/${file}`;
const preview = (type, file) => `${AURA_ASSETS}/previews/${type}/${file}.webp`;

// Order = order of the tabs on every page.
export const AURA_THEME_TYPES = [
    {
        slug: 'premium',
        name: 'Premium Themes',
        short: 'Premium',
        color: '#2f5bea',
        glow: 'rgba(47, 91, 234, 0.45)',
        price: '$1.99 each',
        tagline: 'Hand-crafted worlds for every passion.',
        intro: [
            'Premium Themes are the heart of AURA Calendar. Each one is a complete, hand-crafted world: its own background, header and footer art, tab icons, Aura Button, event and task buttons, colors, floating particles and an original music track composed for the theme.',
            'There is a theme for almost everything you love: animals, holidays, places, zodiac signs, professions, food, games and more. Pick the one that matches your mood, your season or your job, and your month, your planner and your widgets change with it.',
        ],
        highlights: [
            'Full art set: background, header, footer, tab icons and buttons',
            'Original music composed for each theme',
            'Animated particles drifting over your month',
            'Matching widget and Apple TV backgrounds',
            'One-time purchase, free updates, no subscription',
        ],
        previews: [
            { name: 'Aurora Diamonds', src: preview('premium', 'auroradiamonds') },
            { name: 'Midnight Circus', src: preview('premium', 'circus') },
            { name: 'Mermaids', src: preview('premium', 'mermaids') },
            { name: 'Space HEX', src: preview('premium', 'spacehex') },
            { name: 'Halloween Party', src: preview('premium', 'halloweenparty') },
        ],
        catalogKind: 'premium',
    },
    {
        slug: 'daylight',
        name: 'Daylight Themes',
        short: 'Daylight',
        color: '#f08a2c',
        glow: 'rgba(240, 138, 44, 0.45)',
        price: '$3.99 each',
        tagline: 'One theme, two moods: day and night.',
        intro: [
            'Daylight Themes follow the sun. Every one comes with two complete looks, a day version and a night version, and AURA Calendar switches between them on its own as the hours go by.',
            'Morning brings bright skies and warm light; when the sun goes down your calendar turns into the same place at night, with its own art, colors and atmosphere. You never have to change a thing.',
        ],
        highlights: [
            'Two complete art sets in one theme: day and night',
            'Switches automatically with the time of day',
            'Shared music and particles that fit both moods',
            'Works on iPhone, iPad, widgets and Apple TV',
        ],
        previews: [
            { name: 'New York City', src: preview('daylight', 'newyork') },
            { name: 'Sakura Garden', src: preview('daylight', 'sakuragarden') },
            { name: 'Myncha', src: preview('daylight', 'myncha') },
            { name: 'Amusing Zoo', src: preview('daylight', 'amusingzoo') },
            { name: 'Cozy Penthouse', src: preview('daylight', 'cozypenthouse') },
        ],
        catalogKind: 'daylight',
    },
    {
        slug: 'dynamic',
        name: 'Dynamic Themes',
        short: 'Dynamic',
        color: '#9b3fe0',
        glow: 'rgba(155, 63, 224, 0.5)',
        price: '$3.99 each',
        tagline: 'Your calendar, with a story playing on it.',
        intro: [
            'Dynamic Themes bring a living scene to your calendar. Every few moments something happens on screen: a flying saucer abducts a puppy, a burger drops ingredient by ingredient, ghosts wander a haunted night, rainbows bloom across the sky.',
            'Each scene is animated frame by frame and comes with its own sound effects, mixed to sit gently under the theme music. It is the most playful way to check your day.',
        ],
        highlights: [
            'Animated scenes that play over the theme',
            'Sound effects made for each scene',
            'Full art set, music and particles like every Premium theme',
            'Respects Reduce Motion with softer animations',
        ],
        previews: [
            { name: 'Haunted Mansion', src: preview('dynamic', 'hauntedmansion') },
            { name: 'Amaphest', src: preview('dynamic', 'amaphest') },
            { name: 'Aliens Among Us', src: preview('dynamic', 'aliensamongus') },
            { name: 'Burgers & Fries', src: preview('dynamic', 'burgersfries') },
            { name: 'Colorful Rainbows', src: preview('dynamic', 'colorfulrainbows') },
        ],
        catalogKind: 'dynamic',
    },
    {
        slug: 'smart',
        name: 'Smart Themes',
        short: 'Smart',
        color: '#e5484d',
        glow: 'rgba(229, 72, 77, 0.45)',
        price: '$5.99 each',
        tagline: 'Themes that look out the window for you.',
        intro: [
            'Smart Themes react to the real weather where you are. A Smart Theme is really six themes in one: clear by day, clear by night, cloudy, rainy, snowy and stormy. AURA Calendar checks the weather and shows the matching look.',
            'When it starts to rain outside, it rains in your calendar too. Weather data comes from Apple Weather and stays on your device.',
        ],
        highlights: [
            'Six looks in one theme: clear (day and night), clouds, rain, snow and storm',
            'Changes on its own with your local weather',
            'Weather icons and widgets that match the theme',
            'Powered by  Weather, private and on-device',
        ],
        previews: [
            { name: 'Orchids', src: preview('smart', 'orchids') },
            { name: 'Birds Nest', src: preview('smart', 'biirdsnest') },
            { name: 'Lighthouse', src: preview('smart', 'lighthouse') },
            { name: 'Ancient Desert', src: preview('smart', 'ancientdesert') },
            { name: 'Zen Courtyard', src: preview('smart', 'zencourtyard') },
        ],
        catalogKind: 'smart',
    },
    {
        slug: 'pulse',
        name: 'Pulse Themes',
        short: 'Pulse',
        color: '#2aa7df',
        glow: 'rgba(42, 167, 223, 0.5)',
        price: '$3.99 each',
        tagline: 'Living light that beats with your day.',
        intro: [
            'Pulse Themes make the art itself come alive. Headers, footers and backgrounds breathe, flicker and glow: police lights flash red and blue, speakers beat with the music, candles waver in a vampire castle.',
            'Each Pulse Theme picks its own rhythm from a family of light styles, from a slow breath or a heartbeat to neon flicker, lightning, strobe, ripples and LED patterns that sweep through the colors of the art.',
        ],
        highlights: [
            'Art that pulses: header, footer and background',
            'Light styles: Breath, Heartbeat, Neon, Candle, Lightning, Strobe, Echo, Tide, Sweep, Ripple and Emergency Lights',
            'FX Lights: LED patterns that sweep through the colors of the art',
            'Gentle fades when Reduce Motion is on',
        ],
        previews: [
            { name: 'Police Force', src: preview('pulse', 'policeforce') },
            { name: 'Music Frequency', src: preview('pulse', 'musicfrecuency') },
            { name: 'Vampires Dominion', src: preview('pulse', 'vampiresdominion') },
        ],
        catalogKind: 'pulse',
    },
    {
        slug: 'included',
        name: 'Included Themes',
        short: 'Included',
        color: '#2fa84f',
        glow: 'rgba(47, 168, 79, 0.45)',
        price: 'Free',
        tagline: 'Six themes ready from the first day.',
        intro: [
            'AURA Calendar comes with six complete themes at no cost, so your calendar looks great from the moment you open it. They live inside the app, work offline and never need a download.',
            'Seasonal favorites and timeless looks: cherry blossoms, peppermint candy, a cozy Christmas, retro synthwave, clean marble and warm autumn leaves.',
        ],
        highlights: [
            'Six free themes inside the app',
            'Full art, colors, particles and music',
            'Work offline, no download needed',
            'Pick them anytime from the Included tab of the Theme Shop',
        ],
        previews: [
            { name: 'Sakura', src: preview('included', 'sakura') },
            { name: 'Peppermint', src: preview('included', 'pepermint') },
            { name: 'Christmas', src: preview('included', 'christmas') },
            { name: 'Synthwave', src: preview('included', 'synthwave') },
            { name: 'Marble', src: preview('included', 'marble') },
            { name: 'Autumn', src: preview('included', 'autumn') },
        ],
        fixedList: ['Sakura', 'Peppermint', 'Christmas', 'Synthwave', 'Marble', 'Autumn'],
    },
    {
        slug: 'sponsored',
        name: 'Sponsored Themes',
        short: 'Sponsored',
        color: '#e8b412',
        glow: 'rgba(232, 180, 18, 0.45)',
        price: 'Free',
        tagline: 'Free themes made with local businesses.',
        intro: [
            'Sponsored Themes are free themes created together with small and local businesses. They are full AURA Calendar themes, with art, colors and music, and a tap on the business logo takes you to their page.',
            'They are a way to discover a place you will love while giving your calendar a fresh look, at no cost.',
        ],
        highlights: [
            'Free to download and use',
            'Made with real local businesses',
            'Tap the logo to visit the sponsor',
            'Want your business here? Contact Danloud Labs',
        ],
        previews: [
            { name: "Cakeyla's Bakery", src: preview('sponsored', 'cakeylasbakery') },
        ],
        fixedList: ["Cakeyla's Bakery"],
    },
];

export const AURA_FEATURES = [
    { title: 'Monthly', text: 'A beautiful month view with today, your selected day, event dots and the art of your theme framing it all.' },
    { title: 'Planner', text: 'Your events, tasks and notes in one place, with six list views, filters and a compact task maker.' },
    { title: 'Tasks & Reminders', text: 'Tasks stay in step with Apple Reminders. Smart lists, overdue tasks and tasks tied to an event.' },
    { title: 'Events & Calendars', text: 'Works with the calendars you already use through Apple Calendar, including invitees and alerts.' },
    { title: 'Journal', text: 'Write your day with rich text, photos and voice memos, right next to your events.' },
    { title: 'Location reminders', text: 'Get reminded when you arrive at or leave a place, even with the app closed.' },
    { title: 'Urgent alarms', text: 'Mark a task as urgent and it rings like a Clock alarm, even in silent mode or Focus.' },
    { title: 'Siri & Shortcuts', text: 'Add events and tasks or ask for today\'s agenda by voice.' },
    { title: 'Widgets', text: 'Home and Lock Screen widgets dressed in your theme, with the local weather.' },
    { title: 'iCloud sync', text: 'Events, tasks, lists and journal stay in sync across your iPhone and iPad, in your own iCloud.' },
    { title: 'Landscape & frame mode', text: 'Turn your iPhone or iPad sideways for a wide calendar, or let it rest as a living picture frame.' },
    { title: 'Music & scenes', text: 'Every theme has its own soundtrack, and some bring animated scenes and living light.' },
];

// Which kind a theme of the live catalog belongs to (same flags the app reads).
export function catalogKind(theme) {
    if (theme.isSmartTheme) return 'smart';
    if (theme.isDaylightTheme) return 'daylight';
    if (theme.dynamicElementType) return 'dynamic';
    if (theme.isPulseTheme) return 'pulse';
    if (theme.isSponsored) return 'sponsored';
    if (theme.isDefaultTheme || theme.isFree) return 'included';
    return 'premium';
}

export const findType = (slug) => AURA_THEME_TYPES.find((t) => t.slug === slug);
