# subhashb.com

The personal site of Subhash Bhushan. He designs and builds ambitious systems: large, complex software built AI-natively from deep architecture and data foundations.

This site is built AI-natively and kept in the open. An AI coding agent writes and edits it from this repo, and Subhash reviews. The stack is Astro, Tailwind CSS v4, and Cloudflare Pages.

## Develop

```
npm install
npm run dev
```

Build with `npm run build`. The Node version is in `.nvmrc`. Conventions for the agent and the design guardrails are in [AGENTS.md](AGENTS.md).

## Structure

- `src/pages/` routes
- `src/content/` writing (Markdown and MDX)
- `src/components/`, `src/layouts/`, `src/styles/` presentation
- `design/` the Claude Design package (the visual source of truth)
