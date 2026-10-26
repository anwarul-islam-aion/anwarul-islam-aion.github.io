# anwarul-islam-aion.github.io

Personal portfolio — Md Anwarul Islam Aion, Avionics Engineer, radar and ISAC researcher.

**Live:** https://anwarul-islam-aion.github.io/portfolio/

A fixed-viewport card app: the left third holds identity and the section index,
the right two-thirds is a single card that swings open like a book leaf when you
pick a section and scrolls inside itself. The page never scrolls on desktop.


## Running it

```bash
npm install
npm run dev
```

`npm run build` emits to `dist/`, `npm run preview` serves that build.

## Stack

React 19 · Vite 8 · Tailwind CSS 4 (CSS-first config, no `tailwind.config.js`).

No backend, no API keys, no environment variables — the build is fully static,
and navigation is hash-based, so no host-side rewrite rules are needed.

## Deployment

`.github/workflows/deploy.yml` builds on Node 22 and publishes `dist/` to
GitHub Pages on every push to `main`. Nothing to run by hand.

`vite.config.js` sets `base: './'` so the same build serves correctly from a
domain root or from the `/portfolio/` repository subpath. Keep it relative.

No custom domain is attached. To add one later: put the bare domain in
`public/CNAME`, set it under Settings → Pages → Custom domain, enable Enforce
HTTPS, and update the absolute `og:url`, `og:image` and `canonical` URLs in
`index.html`.

## Layout

```
index.html              fonts, meta, OG tags
public/
  resume.pdf            copy of MasterResume.pdf — refresh when the CV changes
  favicon.svg           radar PPI glyph
src/
  index.css             @theme tokens, ambient background, scrollbar, focus ring
  App.jsx               rails + 30/70 split
  data/resume.js        ALL CONTENT LIVES HERE
  hooks/
    useHashSection.js       which card is open, mirrored to the URL hash
    usePrefersReducedMotion.js
  components/
    SideRails.jsx       fixed edge rails — profiles left, email right
    LeftPanel.jsx       name, role rotator, section index
    RoleRotator.jsx     types the four roles one at a time
    Panel.jsx           the turning card + section registry
    ui.jsx              Card, CompactRow, TagList, CardTitle, links
    Icons.jsx           social glyphs + the ↗ arrow
    ProjectArt.jsx      monoline schematics used instead of screenshots
    sections/           one component per card, nine of them
```

**Edit `src/data/resume.js`, not the components.** The only prose written directly
in a component is `sections/About.jsx`, because it carries inline links.

## Sections

`about · education · experience · attachments · publications · honors ·
leadership · references` — defined in `sections` in `data/resume.js`. Adding one
means adding an entry there plus a component in the `registry` map in `Panel.jsx`.

Engineering projects (CanSat, Mars Rover, Oblique-Wing UAV) sit inside
**Experience**; the skills table and the PDF download sit inside **Education**.
Grants share the **Publications & Grants** card.

## Design notes

- **Typographic model is the LaTeX resume**, not web-app chrome: section titles
  sit above a hairline rule, skills are a term / value table set ragged-left
  against the right margin (`DefinitionRow` in `ui.jsx`), and technologies are a
  plain mono run (`TagLine`) rather than pills. There are no rounded boxes.
- **Palette is Sand + Navy**, defined once in `src/index.css` under `@theme`:
  warm paper ground (`--color-paper`), white cards, ink / ink-soft text, navy as
  an accent only, warm `rule` / `divider` lines, and `--color-gold` used only for
  the portrait ring. No gradients. Every rendered colour resolves to one of these.
- **Each section carries its own accent**, set in `sections` in `data/resume.js`
  and published as `--section-accent` (on the app root for the nav, re-scoped on
  the panel so it swaps with the content rather than 190ms ahead of it). It
  drives the rule under the card heading, that card's meta labels and
  subheadings, and the nav indicator. All eight clear 5:1 on white.
  The nav indicator sets it inline — it has to beat both the base and hover
  utilities, and inline wins without an `!important` scrap.
- **The portrait** is `public/profile.png` shown at 1.8× centre crop in a circle.
  The cutout's subject occupies x 20–78%, y 27–100% of the frame; that zoom is
  what puts head and shoulders in the circle. Swapping the photo means
  re-checking the crop.
- **Ground colour** is `--color-void` (`#0b1120`), with one static radial glow.
- **The card turn** is a 300 ms `rotateY` hinged on `origin-left` under a
  `perspective:2000px` parent, with a 190 ms gap where the outgoing leaf is
  turned away — that gap is when the content swaps, so you never see it change.
  Tune `TURN_MS` in `Panel.jsx`.
- **Project art** — `ProjectArt.jsx` holds five hand-drawn schematics (radar PPI
  sweep, RIS/ISAC link, CanSat descent, rover science pass, oblique wing).

## Responsive behaviour

- **≥1024px** — fixed `100dvh`, no page scroll, edge rails visible, card scrolls
  internally. The left column scrolls internally too if the window is short.
- **<1024px** — normal document scroll, rails hidden (icons move under the nav),
  section index becomes a horizontal snap-scroll chip row.

## Where the animation goes

- The ambient layer is a single `background-image` on `body` in `src/index.css` —
  a fluid/WebGL canvas mounts behind `#root` and that gradient becomes its fallback.
- `ProjectArt.jsx` shapes are individually addressable (the sweep wedge, the RIS
  beams, the descent path) and ready to be animated in place.
- Motion is guarded by `usePrefersReducedMotion` and `motion-reduce:` throughout;
  under reduced motion the rotator shows all four roles at once and the card
  swaps with no turn. New motion should follow the same pattern.

## Sub-pages

Detail views are a second page *inside* the card, not a dialog over it:
`components/SubPage.jsx` renders a back control, an eyebrow and a title, and the
section component returns it early in place of its normal body. Used by
**Relevant Coursework** (Education) and paper **abstracts** (Publications).
`SubPage` resets `#panel-scroll` on mount so you land at the top.

## Still to fill in

- **Project write-ups** — every project has empty `journey` (array of paragraphs)
  and `gallery` (array of `{ src, caption }`) fields. Fill them and the Details
  sub-page grows a "The Build" section and an album; until then it shows the
  description, artwork, tags and a short "on the way" line. Put images in
  `public/` and reference them as `asset('name.jpg')` (`src/lib/asset.js`),
  never as a root-absolute `/name.jpg` — that breaks under a subpath deploy.
- **ICC submission abstract** — the RIS range-resolution paper is listed with
  `abstract: ''` and no DOI, so it renders as a title and a Submitted badge
  with no abstract sub-page. Fill `abstract` once the paper is public.
- **Club Advisor email** — `email` is `null` on that entry in `references`, so
  the line is simply omitted. An entry with no `name` is skipped entirely.
- GRE / IELTS scores are placeholders (`000` / `0.0`) in `testScores` — they
  are placeholders in the master resume too, so there is nothing to copy yet.
- ORCID and ResearchGate glyphs in `Icons.jsx` are drawn by hand to match the
  stroke weight of the rail; swap in the official marks if you prefer them.
