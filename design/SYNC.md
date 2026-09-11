# Syncing a new Claude Design package

The design lives in Claude Design. You edit it there, download the package, and drop it in here. This file is the loop for that, and the record of where the built site deliberately differs from the export.

## The loop

1. Drop the download into `design/package/`, replacing what's there. Keep the filenames as they come (`subhashb-home.dc.html`, `subhashb-home.html`, `subhashb-tokens.css`, `support.js`, `image-slot.js`).
2. Tell me to process it.
3. I read `design/package/subhashb-home.dc.html` (the readable source) and `subhashb-tokens.css`, diff them against the current site, and apply the changes:
   - tokens and fonts to `src/styles/global.css` and the font imports in `src/layouts/Base.astro`,
   - structure and copy to `src/pages/index.astro` and `src/components/`.
4. Gate: `npm run check` and `npm run build`, then a screenshot check in light and dark.

There is no lossless automatic path from the package to the site: the export is a React/canvas bundle (`<x-dc>`, `support.js`), the site is a static Astro build. So each import is a re-port. Because the site mirrors the export closely, the re-port is a focused diff, not a rebuild. The `.dc.html` is plain, readable HTML, which makes that diff easy.

## Fidelity to the export

The build follows the export: fonts, type, section structure, spacing, colors, the dot-field hero, the theme toggle, the Protean console. Keep it that way on re-sync.

One thing the design cannot carry, now supplied:

- About portrait. The export has an empty image slot with a "Portrait" placeholder. The site fills it with `public/portrait.jpg`, wired into the frame in `src/pages/index.astro` (4:5, `object-fit: cover`). Replace that file to change the photo.

## Implementation details not specified by the export

The export is a standalone artifact, so it does not settle these. They are implementation, not visual deviations.

- Theme default. The export hard-defaults to light. The site defaults to the visitor's system preference (as `AGENTS.md` calls for) and persists an explicit toggle choice in `localStorage`.
- Reduced motion. The export always animates. The site honors `prefers-reduced-motion` (words appear at once, the dot field draws one static frame). Invisible to everyone else.

## Assets that live outside the package

These are not in the Claude Design download, so a new package will not touch them. Maintain them by hand:

- `public/favicon.svg` the browser-tab icon.
- `public/og.png` the social share card (regenerate if the hero line or palette changes).
- `src/pages/404.astro` the not-found page, styled to match.
