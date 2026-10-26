/**
 * Resolve a file in `public/` against the deploy base.
 *
 * Root-absolute paths like `/resume.pdf` 404 when the site is served from a
 * repository subpath (GitHub Pages project sites live at `/<repo>/`). Going
 * through `BASE_URL` keeps the same reference working at a domain root too.
 */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`;
