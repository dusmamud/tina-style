# Tina Style

Fashion, lifestyle and travel link-in-bio web app — mobile-first, fully
static, prerendered. Built with the locked stack:

- **Svelte 5.57.3** + **SvelteKit 3.2.0** + **Vite 8.3.8**
- **TypeScript 6.0.3** (SvelteKit 3 needs TS 6)
- **Tailwind CSS 4.3.5** (`@tailwindcss/vite` 4.3.5)
- `@sveltejs/adapter-static` 4.0.1 + `@sveltejs/vite-plugin-svelte` 7.3.1
  (vite-plugin-svelte 6.x only supports Vite 6/7 — Vite 8 needs 7.x)
- Full prerender (`export const prerender = true` in `src/routes/+layout.js`);
  SvelteKit 3 has no `svelte.config.js` — config lives in `vite.config.ts`.

## Develop

```sh
npm install
npm run dev
```

## Build (static output in `build/`)

```sh
npm run check   # svelte-check
npm run build   # vite build + prerender
npm run preview # serve build/ on http://127.0.0.1:4173
```

## Deploy — Cloudflare Pages (GitHub Actions)

Every push to `main` builds, typechecks and deploys via
`.github/workflows/deploy.yml` (Wrangler direct upload of `build/`).

Required repo secrets (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN` — API token with Cloudflare Pages:Edit + Account:Read
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID

And a Cloudflare Pages project named `tina-style`
(Workers & Pages → Create → Pages → Direct Uploads).

Live site after the first successful deploy: `https://tina-style.pages.dev`

## Images

`static/images/` — hero, avatar, Paris vlog and outfits photos are
AI-generated to match the design reference; travel, beauty, work and the
four shop products are matching professional stock photos.
