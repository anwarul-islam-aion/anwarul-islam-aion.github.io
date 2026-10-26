import { profile } from '../data/resume';
import { LANDING } from '../lib/arrival';

/**
 * Only the email rail remains on the edge — the profile icons moved into the
 * bar under the card, which is what freed the left gutter for a wider card.
 */
export default function SideRails() {
  return (
    <div
      data-beam="railRight"
      style={{ '--arrive-delay': `${LANDING.railRight}ms` }}
      className="arrive fixed bottom-0 right-0 z-30 hidden w-16 flex-col items-center gap-6 lg:flex"
    >
      <a
        style={{ color: profile.socials.find((s) => s.icon === 'mail')?.color }}
        className="font-mono text-xs font-semibold tracking-widest transition duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 [writing-mode:vertical-rl] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        href={`mailto:${profile.email}`}
      >
        {profile.email}
      </a>
      <div className="h-24 w-px bg-gold" />
    </div>
  );
}
