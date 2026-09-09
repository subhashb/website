# Deploying subhashb.com

A static Astro build (`npm run build` produces `dist/`), hosted on Cloudflare Pages, with DNS on Cloudflare.

## One-time setup (needs the Cloudflare account and the domain registrar)

1. **Cloudflare Pages**: create a project and connect the `subhashb/website` GitHub repo. Build command `npm run build`, output directory `dist`, Node version from `.nvmrc` (22).
2. **Custom domain**: add `subhashb.com` and `www.subhashb.com` in the Pages project.
3. **DNS**: point subhashb.com's nameservers at the two Cloudflare assigns (change them at the current registrar). The apex resolves by CNAME flattening, and SSL provisions automatically.
4. **Canonical**: redirect `www` to the apex (or the reverse) in Cloudflare.

## Ongoing

A push to `main` builds and deploys. Every branch and pull request gets its own preview URL.
