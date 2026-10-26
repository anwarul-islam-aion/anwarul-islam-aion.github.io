import { profile } from '../data/resume';
import { SocialIcon, DownloadIcon } from './Icons';
import { LANDING } from '../lib/arrival';

/**
 * Résumé and contacts on one line beneath the card. Both were previously in the
 * left column and the edge rail; grouping them here freed the left gutter so
 * the card could widen.
 */
export default function BottomBar() {
  return (
    <div className="relative mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-0 lg:flex-nowrap lg:justify-end lg:py-4">
      <a
        data-beam="resume"
        style={{ '--arrive-delay': `${LANDING.resume}ms` }}
        className="group/dl arrive inline-flex items-center gap-2.5 rounded-full border border-navy bg-navy px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-white transition hover:border-navy-hover hover:bg-navy-hover focus-visible:border-navy-hover focus-visible:bg-navy-hover"
        href={profile.resumeUrl}
        download={profile.resumeFileName}
      >
        <DownloadIcon />
        Résumé
      </a>

      <ul
        data-beam="socials"
        style={{ '--arrive-delay': `${LANDING.socials}ms` }}
        className="arrive flex items-center gap-4"
        aria-label="Profiles and contact"
      >
        {/* Mail is omitted — the email already lives on the right-hand rail. */}
        {profile.socials
          .filter((social) => social.icon !== 'mail')
          .map(({ name, icon, url, color, handle }) => {
            /* No url means no link: WhatsApp usernames have no public URL form,
               so that one is a chip showing the handle rather than a dead href. */
            const Shell = url ? 'a' : 'span';
            const linkProps = url
              ? { href: url, target: '_blank', rel: 'noreferrer noopener' }
              : {};

            return (
              <li key={name}>
                <Shell
                  style={{ color }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-gold transition duration-200 motion-reduce:transition-none ${
                    url
                      ? 'hover:-translate-y-0.5 hover:border-current focus-visible:-translate-y-0.5 motion-reduce:hover:translate-y-0'
                      : 'cursor-default'
                  }`}
                  title={handle ? `${name}: ${handle}` : name}
                  {...linkProps}
                >
                  <span className="sr-only">{handle ? `${name}: ${handle}` : name}</span>
                  <SocialIcon name={icon} />
                </Shell>
              </li>
            );
          })}
      </ul>

      {/* Runs out of the card's right edge and terminates exactly on the email
          rail's vertical hairline, so the two meet instead of floating apart.
          Absolute, so it does not push the controls off the card edge. */}
      <span
        style={{ '--arrive-delay': `${LANDING.socials}ms` }}
        className="arrive absolute top-1/2 hidden h-px bg-gold lg:-right-12 lg:block lg:w-12"
      />
    </div>
  );
}
