# design/

The visual source of truth for subhashb.com. The site's tokens and components implement what these artboards specify.

## The canvases

Two design canvases are published and editable in Claude Design (open in the desktop app to refine):

- v1, the first cut (full page, hero light, hero dark): https://claude.ai/code/artifact/63e84fe7-7fb3-4437-90ec-19a1ef988735
- Three directions to choose from (Editorial, Panels, System): https://claude.ai/code/artifact/a8e2ef12-7623-4a32-baa9-85f86944a137

Editing or re-seeding from the desktop app writes back to `reference/` and `directions/` here.

## Source

- `reference/` the v1 artboard masters (`.dc.html`) and its `canvas.json`.
- `directions/` the three exploration directions (`Main.dc.html` is Option A Editorial, plus `Panels.dc.html` and `System.dc.html`) and their `canvas.json`.
- `tokens.css` the design tokens (type and palette) the site binds to in `src/styles/global.css`.

## The system

- Type: Instrument Serif (display, the hero), Geist Sans (body), Geist Mono (eyebrows and section labels).
- Color: warm off-white and near-black, one sienna accent used only on links. A dark theme inverts the ground.
- Layout: one narrow reading column (about 640px), generous whitespace, the list as the interface.
