# Portfolio — Md Anwarul Islam Aion

Personal portfolio site. Avionics engineering, radar signal processing, and
6G integrated sensing and communication (ISAC).

## Owner

- GitHub username: `anwarul-islam-aion` (account email `aionndc22@gmail.com`)
- Repository: https://github.com/anwarul-islam-aion/portfolio

## Stack

- Vite 8 + React 19, Tailwind CSS 4 (via `@tailwindcss/vite`)
- No backend, no API keys, no environment variables — fully static
- Navigation is hash-based (`src/hooks/useHashSection.js`), so no server
  rewrite rules are needed on any static host

## Commands

```
npm install      # install dependencies
npm run dev      # local dev server on port 5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Deployment

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to
`main`. Live at https://anwarul-islam-aion.github.io/portfolio/

`vite.config.js` sets `base: './'` so the build works both at a domain root
and under the `/portfolio/` repository subpath. Keep it relative unless the
hosting arrangement changes.

No custom domain is attached. If one is added later:

1. Put the bare domain in `public/CNAME` (one line, no scheme, no slash).
2. Set it under repo Settings → Pages → Custom domain, then enable
   Enforce HTTPS.
3. Update the absolute `og:url`, `og:image`, and `canonical` URLs in
   `index.html` to the new domain.

## Layout

- `src/components/sections/` — one component per CV section (About,
  Education, Experience, Publications, Honors, Leadership, References,
  Attachments)
- `src/data/resume.js` — all CV content lives here; edit this to update the
  site, not the components
- `public/` — resume PDF, posters, profile image, favicon. Reference these
  through `asset()` from `src/lib/asset.js`, never as root-absolute paths:
  the site is served from a `/portfolio/` subpath, where `/resume.pdf`
  resolves to the domain root and 404s.
