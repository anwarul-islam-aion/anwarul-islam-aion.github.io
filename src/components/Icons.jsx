/** Social + UI glyphs. All inherit currentColor and size from the parent. */

const brand = {
  className: 'h-6 w-6',
  'aria-hidden': 'true',
  fill: 'currentColor',
};

function GitHub() {
  return (
    <svg {...brand} viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg {...brand} viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

function Scholar() {
  return (
    <svg {...brand} viewBox="0 0 24 24">
      <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269ZM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" />
    </svg>
  );
}

/* ORCID and ResearchGate are drawn rather than lifted, so the stroke weight
   matches the rest of the row instead of fighting it. */

function Orcid() {
  return (
    <svg {...brand} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10.25" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6.6" y="9.4" width="1.6" height="7.6" rx="0.3" fill="currentColor" />
      <circle cx="7.4" cy="7.4" r="1.1" fill="currentColor" />
      <path
        d="M10.8 9.4h3.5c2.4 0 4.1 1.6 4.1 3.8s-1.7 3.8-4.1 3.8h-3.5V9.4Zm1.7 1.6v4.4h1.7c1.5 0 2.5-.9 2.5-2.2s-1-2.2-2.5-2.2h-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ResearchGate() {
  return (
    <svg {...brand} viewBox="0 0 24 24" fill="none">
      <rect
        x="1.75"
        y="1.75"
        width="20.5"
        height="20.5"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.6 17.4V6.6h3.3c2 0 3.3 1.1 3.3 2.9 0 1.4-.8 2.4-2.1 2.7l2.6 5.2h-1.9l-2.4-4.9H8.3v4.9H6.6Zm1.7-6.4h1.4c1.1 0 1.8-.6 1.8-1.5 0-1-.7-1.5-1.8-1.5H8.3v3Z"
        fill="currentColor"
      />
      <path
        d="M17.4 6.6c1.4 0 2.4.8 2.4 2v.6h-1.6v-.5c0-.4-.3-.7-.8-.7s-.8.3-.8.8v2.3c0 .5.3.8.8.8s.8-.3.8-.8v-.5h-.8V9.4h2.4v2.1c0 1.2-1 2.1-2.4 2.1s-2.4-.9-2.4-2.1V8.7c0-1.2 1-2.1 2.4-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Mail() {
  return (
    <svg {...brand} viewBox="0 0 24 24" fill="none" strokeWidth="1.6" stroke="currentColor">
      <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const registry = {
  github: GitHub,
  linkedin: LinkedIn,
  scholar: Scholar,
  orcid: Orcid,
  researchgate: ResearchGate,
  mail: Mail,
};

export function SocialIcon({ name }) {
  const Glyph = registry[name];
  return Glyph ? <Glyph /> : null;
}

/**
 * Download glyph — dips toward the tray on hover.
 * The translate lives on the <svg> host: CSS `translate` is ignored on inner
 * SVG children here, so animating a nested <g> silently does nothing.
 */
export function DownloadIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover/dl:translate-y-0.5 group-focus-visible/dl:translate-y-0.5 motion-reduce:transition-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v10.5" />
      <path d="m7.75 9.75 4.25 4.25 4.25-4.25" />
      <path d="M4 16.5v2A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-2" />
    </svg>
  );
}

/** Back chevron for the in-card sub-pages. */
export function ChevronLeft() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover/back:-translate-x-0.5 motion-reduce:transition-none"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12.5 4.5 7 10l5.5 5.5" />
    </svg>
  );
}

/** The little ↗ that nudges out from under a link on hover. */
export function ArrowUpRight({ className = '' }) {
  return (
    <svg
      className={`ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 motion-reduce:transition-none group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 ${className}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
