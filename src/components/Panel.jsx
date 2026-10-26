import { useEffect, useRef, useState } from 'react';
import { sections } from '../data/resume';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { LANDING } from '../lib/arrival';

import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Attachments from './sections/Attachments';
import Publications from './sections/Publications';
import Honors from './sections/Honors';
import Leadership from './sections/Leadership';
import References from './sections/References';

const registry = {
  about: About,
  education: Education,
  experience: Experience,
  attachments: Attachments,
  publications: Publications,
  honors: Honors,
  leadership: Leadership,
  references: References,
};

/** How long the leaf spends turned away before the next one swings in. */
const TURN_MS = 190;

export default function Panel({ active }) {
  const reduced = usePrefersReducedMotion();
  const [shown, setShown] = useState(active);
  const [open, setOpen] = useState(true);
  const scroller = useRef(null);

  useEffect(() => {
    if (active === shown) return undefined;

    if (reduced) {
      setShown(active);
      return undefined;
    }

    setOpen(false);
    const t = setTimeout(() => {
      setShown(active);
      setOpen(true);
    }, TURN_MS);
    return () => clearTimeout(t);
  }, [active, shown, reduced]);

  useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = 0;
  }, [shown]);

  const Content = registry[shown] ?? About;
  const current = sections.find((section) => section.id === shown);
  const label = current?.label ?? '';

  return (
    /* Scoped to `shown`, not `active`, so the accent swaps with the content
       rather than 190ms ahead of it. */
    <div
      style={{ '--section-accent': current?.accent }}
      className="mt-10 w-full min-w-0 [perspective:2000px] lg:mt-0 lg:min-h-0 lg:grow lg:pb-0 lg:pt-12"
    >
      <div
        ref={scroller}
        id="panel-scroll"
        data-beam="card"
        style={{ '--arrive-delay': `${LANDING.card}ms` }}
        className={`arrive-leaf origin-left rounded-xl border border-rule bg-surface shadow-2xl shadow-ink/5 backdrop-blur-sm transition-all duration-300 ease-out will-change-transform motion-reduce:transition-none lg:h-full lg:overflow-y-auto ${
          open
            ? 'opacity-100 [transform:rotateY(0deg)]'
            : 'opacity-0 [transform:rotateY(-9deg)_translateX(2rem)]'
        }`}
      >
        <div className="p-6 sm:p-8 lg:p-10">
          <h2 className="mb-8 border-b-2 border-[color:var(--section-accent)] pb-3 text-2xl font-semibold uppercase tracking-[0.1em] text-ink">
            {label}
          </h2>

          <Content />
        </div>
      </div>
    </div>
  );
}
