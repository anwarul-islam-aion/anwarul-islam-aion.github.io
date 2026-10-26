import { references } from '../../data/resume';
import { Card } from '../ui';

export default function References() {
  // Unfinished referees are scaffolded in the data but never rendered.
  const listed = references.filter((person) => person.name);

  return (
    <ul className="group/list">
      {listed.map((person) => (
        <li key={person.name} className="mb-10">
          <Card>
            <div className="z-10 mb-2 mt-1 font-mono text-sm font-semibold uppercase tracking-wide text-[color:var(--section-accent)] sm:col-span-2">
              {person.relation}
            </div>

            <div className="z-10 sm:col-span-6">
              <h4 className="text-lg font-medium leading-snug text-ink">{person.name}</h4>

              {person.role && <p className="mt-1 text-base text-ink-soft">{person.role}</p>}

              {person.org && <p className="text-base text-ink-soft">{person.org}</p>}

              {person.email && (
                <a
                  className="mt-2 inline-block font-mono text-sm text-navy transition hover:text-navy-hover focus-visible:text-navy-hover"
                  href={`mailto:${person.email}`}
                >
                  {person.email}
                </a>
              )}
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
