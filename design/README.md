# design/

The visual source of truth for subhashb.com. The site's tokens and components implement what these artboards specify.

## The canvas

The design canvas has three artboards: the full page (light), and the hero in light and dark. It is published and editable in Claude Design:

https://claude.ai/code/artifact/63e84fe7-7fb3-4437-90ec-19a1ef988735

Open that link in the Claude Design desktop app to refine it. Exporting or re-seeding from the desktop app writes back to `reference/` here.

## Source

- `reference/` the artboard masters (`.dc.html`) and the `canvas.json` layout, the input to the canvas.
- `tokens.css` the design tokens (type and palette) the site binds to in `src/styles/global.css`.

## The system

- Type: Instrument Serif (display, the hero), Geist Sans (body), Geist Mono (eyebrows and section labels).
- Color: warm off-white and near-black, one sienna accent used only on links. A dark theme inverts the ground.
- Layout: one narrow reading column (about 640px), generous whitespace, the list as the interface.
