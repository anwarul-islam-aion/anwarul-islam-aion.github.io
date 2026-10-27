import { profile, sections } from '../data/resume';
import RoleRotator from './RoleRotator';
import { LANDING, NAV_STEP } from '../lib/arrival';

export default function LeftPanel({ active, onOpen }) {
  return (
    /* Auto margins rather than justify-center: they centre the block when it
       fits and collapse to zero when it doesn't, so a short window scrolls
       instead of clipping the nav. */
    /* pt matches the Panel's, so the portrait and the card share a top edge. */
    <header className="flex flex-col lg:h-full lg:w-[27%] lg:overflow-y-auto lg:pb-10 lg:pt-12">
      {/* Top-aligned, not centred: the bottom-left corner belongs to the base
          station, and centring pushed the last nav item into it. */}
      <div className="lg:mb-auto lg:mt-0">
        {/* On a phone the portrait sits BESIDE the name. Stacked, the pair cost
            about 170px before the card even started; side by side, with a 64px
            portrait, they cost about 70px. The desktop column has the room, so
            it keeps the stack. */}
        <div className="flex items-center gap-4 lg:block">
          {/* 1.8x centre crop — the cutout's subject sits at 20-78% x, 27-100% y,
              so this frames head and shoulders without clipping the hair. */}
          <div
            data-beam="portrait"
            style={{ '--arrive-delay': `${LANDING.portrait}ms` }}
            className="arrive h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/50 lg:mb-5 lg:h-28 lg:w-28"
          >
            <img
              src={profile.photo}
              alt={profile.name}
              width="900"
              height="900"
              className="h-full w-full scale-[1.8] object-cover"
            />
          </div>

          <div className="min-w-0">
            {/* The name wraps beside the portrait on a phone; from `lg` the
                clamp keeps it on one line up to the 1600px cap. */}
            <h1
              data-beam="name"
              style={{ '--arrive-delay': `${LANDING.name}ms` }}
              className="arrive-focus text-xl font-bold leading-tight tracking-tight text-ink lg:whitespace-nowrap lg:text-[clamp(1.3rem,2vw,1.9rem)] lg:leading-normal"
            >
              <a href="#about" onClick={() => onOpen('about')}>
                {profile.name}
              </a>
            </h1>

            <div className="arrive" style={{ '--arrive-delay': `${LANDING.rotator}ms` }}>
              <RoleRotator />
            </div>
          </div>
        </div>

        {/* Desktop: the card index down the left column. Phone: a scrollable
            chip row pinned to the top of the screen, so whichever section you
            are reading, the next one is always one tap away. Fixed rather than
            sticky on purpose — sticky would only hold while this header was on
            screen, which is the first 200px of the page. */}
        <nav
          className="fixed inset-x-0 top-0 z-30 border-b border-rule bg-paper/95 px-4 py-2 backdrop-blur lg:static lg:mt-6 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
          aria-label="Sections"
          data-beam="nav"
        >
          <ul className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 lg:mx-0 lg:w-max lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
            {sections.map(({ id, label, accent }, index) => {
              const isActive = active === id;
              return (
                <li
                  key={id}
                  className="arrive shrink-0 snap-start"
                  style={{ '--arrive-delay': `${LANDING.nav + index * NAV_STEP}ms` }}
                >
                  {/* Each entry wears its own section colour, so the index doubles
                      as a legend for the card accents. */}
                  <a
                    style={{ '--item-accent': accent }}
                    className="group flex items-center rounded-full border border-rule px-4 py-2.5 lg:rounded-none lg:border-0 lg:px-0 lg:py-2"
                    href={`#${id}`}
                    onClick={() => onOpen(id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Inline rather than a utility: the active state has to beat
                        both `w-8`/`bg-rule` and the hover utilities, and inline
                        styles win outright without an `!important` scrap. */}
                    <span
                      style={
                        isActive
                          ? { width: '4rem', backgroundColor: 'var(--section-accent)' }
                          : undefined
                      }
                      className="mr-4 hidden h-px w-8 bg-rule transition-all duration-200 group-hover:w-16 group-hover:bg-ink group-focus-visible:w-16 group-focus-visible:bg-ink motion-reduce:transition-none lg:block"
                    />
                    <span
                      className={`whitespace-nowrap text-[clamp(0.8rem,1.02vw,0.95rem)] font-bold uppercase tracking-[0.08em] text-nav transition-colors group-hover:text-ink group-focus-visible:text-ink ${
                        isActive ? 'underline decoration-2 underline-offset-4' : ''
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </header>
  );
}
