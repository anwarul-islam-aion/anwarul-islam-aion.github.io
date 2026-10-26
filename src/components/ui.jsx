import { ArrowUpRight } from './Icons';

/** Sub-heading inside a card — LaTeX section rule, one weight down. */
export function Subheading({ children, className = '' }) {
  return (
    <h3
      className={`mb-4 border-b border-rule pb-2 text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--section-accent)] ${className}`}
    >
      {children}
    </h3>
  );
}

/**
 * One row of a hover list. Sibling rows dim via `group/list` on the <ul>, and
 * the halo is absolutely positioned so it can bleed past the grid.
 */
export function Card({ children }) {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-6 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden transition motion-reduce:transition-none lg:block lg:group-hover:bg-paper-alt" />
      {children}
    </div>
  );
}

/**
 * Lead-column widths. Static strings so Tailwind can see both candidates.
 * `narrow` suits bare years and durations; `wide` fits a full period like
 * "2026 — Present". Keeping it tight is what lets entries stay on one line.
 */
const LEAD_WIDTH = {
  narrow: 'sm:grid-cols-[3.5rem_1fr]',
  wide: 'sm:grid-cols-[8.5rem_1fr]',
};

/**
 * Compact two-column row for the flat lists (attachments, honors, leadership).
 * Baseline-aligned: the lead is a smaller mono face than the body, so aligning
 * tops instead would leave them visibly off.
 */
export function CompactRow({ lead, children, leadWidth = 'wide' }) {
  return (
    <div
      className={`group relative grid gap-1 py-1.5 transition-all ${LEAD_WIDTH[leadWidth]} sm:items-baseline sm:gap-3 lg:hover:opacity-100! lg:group-hover/list:opacity-50`}
    >
      <div className="absolute -inset-x-4 -inset-y-1.5 z-0 hidden transition motion-reduce:transition-none lg:block lg:group-hover:bg-paper-alt" />
      <div className="z-10 whitespace-nowrap font-mono text-sm font-semibold uppercase tracking-wide text-[color:var(--section-accent)]">
        {lead}
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
}

/**
 * The label / value row the master resume uses for Skills — bold term on the
 * left, the list set ragged-left against the right margin.
 */
export function DefinitionRow({ term, children }) {
  return (
    <div className="grid gap-1 border-b border-divider py-3 last:border-b-0 sm:grid-cols-12 sm:gap-6">
      <dt className="text-base font-semibold text-ink sm:col-span-4">{term}</dt>
      <dd className="text-base leading-relaxed text-ink-soft sm:col-span-8 sm:text-right">
        {children}
      </dd>
    </div>
  );
}

/**
 * Opens an in-card sub-page. Deliberately an inline-level button (no flex) so it
 * can sit inside a <p> and trail the final full stop — put it at the end of the
 * paragraph's children and it follows the text wherever the copy is edited to.
 */
export function MoreButton({ children, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group/more relative z-20 cursor-pointer whitespace-nowrap border-b border-[color:var(--section-accent)]/40 align-baseline font-mono text-xs font-semibold uppercase tracking-tighter text-[color:var(--section-accent)] transition hover:border-[color:var(--section-accent)] ${className}`}
    >
      {children}
      <svg
        className="inline-block h-2.5 w-2.5 shrink-0 translate-y-px transition-transform duration-200 ease-out group-hover/more:translate-x-0.5 motion-reduce:transition-none"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7.5 4.5 13 10l-5.5 5.5" />
      </svg>
    </button>
  );
}

/** Square-marker list, used by the in-card sub-pages. */
export function MarkerList({ items }) {
  return (
    <ul className="mt-2.5 space-y-1.5 text-base">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:bg-[color:var(--section-accent)] before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Technologies as a plain run of text rather than pills. */
export function TagLine({ items, label = 'Technologies used' }) {
  return (
    <p className="mt-3 font-mono text-sm leading-relaxed text-navy" aria-label={label}>
      {items.join('  ·  ')}
    </p>
  );
}

/** Card title — becomes the whole row's hit area when `href` is set. */
export function CardTitle({ href, children }) {
  if (!href) {
    return <h4 className="text-lg font-medium leading-snug text-ink">{children}</h4>;
  }

  return (
    <h4 className="font-medium leading-snug">
      <a
        className="group/link inline-flex items-baseline text-lg font-medium leading-tight text-navy hover:text-navy-hover focus-visible:text-navy-hover"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="absolute -inset-x-4 -inset-y-2.5 hidden lg:block" />
        <span>
          {children}
          <ArrowUpRight />
        </span>
      </a>
    </h4>
  );
}

/** Squared-off call to action, e.g. the résumé download. */
export function ActionLink({ href, children }) {
  return (
    <a
      className="inline-block border border-navy bg-navy px-6 py-3 font-mono text-base text-white transition hover:border-navy-hover hover:bg-navy-hover focus-visible:border-navy-hover focus-visible:bg-navy-hover"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}

/** Inline link inside running prose. */
export function InlineLink({ href, children }) {
  return (
    <a
      className="font-medium text-navy underline decoration-navy/40 underline-offset-4 transition hover:text-navy-hover hover:decoration-navy-hover focus-visible:text-navy-hover"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}
