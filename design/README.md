# design/

The visual source of truth for subhashb.com. The site's tokens and components implement what the Claude Design package specifies.

## The package (the drop zone)

`package/` holds the Claude Design download, verbatim. This is where you paste a new export. Drop the whole set in, replacing what's there, then tell me to process it. The files:

- `subhashb-home.dc.html` the readable canvas source. Plain HTML with inline styles, the real spec to read and diff. Start here.
- `subhashb-home.html` the self-unpacking bundle (what you'd open in a browser to preview).
- `subhashb-tokens.css` the palette and type tokens.
- `support.js`, `image-slot.js` the Claude Design runtime the bundle needs. Not used by the built site.

## The loop and the divergences

`SYNC.md` is the loop for importing a new package, and the record of where the built site deliberately differs from the export.

## History

Earlier explorations, kept for the record:

- `reference/` the v1 artboard masters (`.dc.html`) and its `canvas.json`.
- `directions/` the three exploration directions (Editorial, Panels, System) and their `canvas.json`.

These predate the current design. The package supersedes them.

## The system

- Type: Darker Grotesque for display headings (the hero line, section titles, names), Archivo for body, Space Mono for eyebrows, section labels, and the console. All self-hosted.
- Color: warm off-white and near-black, one sienna accent used only on links and small accent marks (the status dot, the Present tag, the hero dot field, the last two words of the hero line). A dark theme inverts the ground; it follows system preference by default and a toggle overrides it.
- Layout: a 1120px page. Sections carry a mono label and a hairline rule; the list is the interface.
