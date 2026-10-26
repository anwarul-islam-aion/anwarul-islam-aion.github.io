import { useEffect } from 'react';
import { ChevronLeft } from './Icons';

/**
 * A second page *inside* the card, rather than a dialog over it — the card
 * swaps its whole body for this and a back control returns you.
 * Resets the panel's scroll on mount so you land at the top of the sub-page.
 */
export default function SubPage({ eyebrow, title, children, footer, onBack }) {
  useEffect(() => {
    document.getElementById('panel-scroll')?.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="group/back inline-flex cursor-pointer items-center gap-1.5 font-mono text-sm font-semibold uppercase tracking-wide text-[color:var(--section-accent)] transition hover:text-ink"
      >
        <ChevronLeft />
        Back
      </button>

      {eyebrow && (
        <p className="mt-6 font-mono text-sm uppercase tracking-wide text-[color:var(--section-accent)]">
          {eyebrow}
        </p>
      )}

      <h3 className="mt-2 text-xl font-semibold leading-snug text-ink">{title}</h3>

      <div className="mt-5 border-t border-divider pt-6">{children}</div>

      {footer && <div className="mt-8 border-t border-divider pt-6">{footer}</div>}
    </div>
  );
}
