# AGENTS.md

This repository is subhashb.com, the personal identity hub of Subhash Bhushan. It is built and maintained AI-natively: an AI coding agent writes and edits it from this repo, and Subhash reviews. That is deliberate and public. The site is itself a demonstration of building software this way.

## What this site is

The public expression of a single identity source that is held privately. The site presents the profile, the point of view, the proof, and the doors to the ventures (Protean, Ambitious Systems, Team8, Holtech). The register is builder-to-builder and plain.

## Voice and copy

Plain, declarative, understated. State the proof; do not hedge it and do not inflate it. Avoid the tells: the X-not-Y foil, hype and buzzwords, spatial metaphor, corporate cliche, explanatory throat-clearing, decorative rule-of-three, and em-dashes (use a comma, colon, or parentheses). Specifics persuade; adjectives do not.

## Structure

A single-page hub: hero, selected work (Protean), track record, writing, about, elsewhere, colophon. Curate to a handful per section. One clear primary action.

## Design

Minimal and typographic. Monochrome plus one accent, used on links. Whitespace carries it; the punch is scale contrast on the hero line. A proper dark and light that respects system preference. Sparing, functional motion. The visual source of truth is the Claude Design package in `design/package/` (drop a new export there; `design/SYNC.md` has the loop). Keep the generic-AI-template look off the site: no purple gradient hero, no glassmorphism cards, no blurred blobs, no three-column feature rows, no emoji bullets.

## Stack

Astro (static output), Tailwind CSS v4 (its theme bound to the design tokens via `@theme`), MDX for writing, self-hosted fonts, deployed to Cloudflare Pages. Content lives in `src/content/` (Markdown or MDX, Zod-validated); presentation lives in `src/layouts`, `src/components`, and `src/styles`. A content edit is a one-file change.

## Privacy

This repo is public. Nothing private goes in it: no vault content, no private strategy, no personal financials, no secrets or credentials. Client names are anonymized. Content derives only from the public identity material.

## Build

`npm install`, then `npm run dev` to work. `npm run check` and `npm run build` are the gate. The Node version is pinned in `.nvmrc`.

**The lockfile must be generated on Linux.** Cloudflare builds on Linux with `npm ci`, which requires `package-lock.json` to contain Tailwind v4's Linux-only optional deps (`@tailwindcss/oxide-linux-x64` and `@emnapi`). macOS npm omits those from the lockfile, so a Mac-generated `package-lock.json` fails the Cloudflare build with `Missing: @emnapi/... from lock file`. When the lockfile needs regenerating, generate it on a Linux host (run `npm install` there) and commit that file. A lockfile regenerated on macOS will re-break the deploy.
