import { sections } from '../data/resume';

/**
 * The section list as a wrapped block of chips, for the foot of the page.
 *
 * The top rail is one horizontal scroller: fine for jumping ahead, but at the
 * end of a long section the reader is 2000px below it and every section except
 * the next two is off screen to the right. This repeats the whole list where
 * the reading ends, so the next section is a tap away without scrolling back up
 * or sideways. Phone only: from `lg` the left column already holds the index.
 *
 * No numbering here. The counter on the top rail answers "how far in am I",
 * which only makes sense beside the section you are reading.
 */
export default function SectionRail({ active, onOpen }) {
  return (
    <nav aria-label="Sections" className="mt-10 border-t border-rule pt-6 lg:hidden">
      <ul className="flex flex-wrap gap-2">
        {sections.map(({ id, short, accent }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                style={{ '--item-accent': accent, borderColor: isActive ? accent : undefined }}
                className="block rounded-full border border-rule px-3.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-nav"
                href={`#${id}`}
                onClick={() => onOpen(id)}
                aria-current={isActive ? 'page' : undefined}
              >
                {short}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
