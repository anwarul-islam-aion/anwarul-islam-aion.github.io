import { useState } from 'react';
import { jobs, research, teamExperience, projects } from '../../data/resume';
import { Card, Subheading, TagLine, CardTitle, MoreButton } from '../ui';
import ProjectArt from '../ProjectArt';
import SubPage from '../SubPage';

/**
 * A row whose second half is flush to the right margin, and which stacks below
 * `sm`. The right half is `shrink-0`, so on a phone an organisation beside a
 * location ran off the card instead of wrapping: at 375px the row reached
 * 514px. Stacked, each half gets the full column.
 */
function SplitRow({ left, right, className = '' }) {
  return (
    <div
      className={`flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 ${className}`}
    >
      <span className="min-w-0">{left}</span>
      {right && <span className="shrink-0 sm:text-right">{right}</span>}
    </div>
  );
}

/** Jobs and projects share one detail view; this flattens them into it. */
const asDetail = (item, kind) =>
  kind === 'job'
    ? {
        eyebrow: item.date,
        title: item.org,
        description: item.description,
        tags: item.tags,
        art: null,
        url: null,
        journey: item.journey,
        gallery: item.gallery,
      }
    : {
        eyebrow: item.meta,
        title: item.title,
        description: item.description,
        tags: item.tags,
        art: item.art,
        url: item.url,
        journey: item.journey,
        gallery: item.gallery,
      };

/**
 * One list of dated role cards. Job Experience and Team Experience render the
 * same card; only the heading above them differs.
 */
function RoleList({ items, onOpen }) {
  return (
    <ol className="group/list mb-14">
      {items.map((job) => (
        <li key={job.org} className="mb-10">
          <Card>
            <div
              className="z-10 mb-2 mt-1 font-mono text-sm font-semibold uppercase tracking-wide text-[color:var(--section-accent)] sm:col-span-2"
              aria-label={job.date}
            >
              {job.date}
            </div>

            <div className="z-10 sm:col-span-6">
              {/* Organisation once with the location flush right; repeating the
                  org per role read as noise when an entry has two of them. */}
              <SplitRow
                left={
                  <span className="text-lg font-semibold leading-snug text-[color:var(--section-accent)]">
                    {job.org}
                  </span>
                }
                right={<span className="text-sm text-ink-soft">{job.location}</span>}
              />

              <ul className="mt-1.5">
                {job.roles.map((role) => (
                  <li key={role.title}>
                    <SplitRow
                      className="border-b border-divider py-1 last:border-b-0"
                      left={<span className="text-base font-medium text-ink">{role.title}</span>}
                      right={
                        job.roles.length > 1 && (
                          <span className="font-mono text-sm text-ink-soft">{role.period}</span>
                        )
                      }
                    />
                  </li>
                ))}
              </ul>

              {job.supervisor && (
                <SplitRow
                  className="mt-2 text-sm text-ink-soft"
                  left={<>Supervisor: {job.supervisor}</>}
                  right={job.hours}
                />
              )}

              <p className="mt-2 text-justify text-base leading-normal hyphens-auto text-ink-soft">
                {job.description}{' '}
                <MoreButton onClick={() => onOpen(asDetail(job, 'job'))}>Read More</MoreButton>
              </p>

              <TagLine items={job.tags} />
            </div>
          </Card>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  const [detail, setDetail] = useState(null);

  if (detail) {
    return (
      <SubPage
        eyebrow={detail.eyebrow}
        title={detail.title}
        onBack={() => setDetail(null)}
        footer={
          detail.url && (
            <a
              className="font-medium text-navy underline decoration-navy/40 underline-offset-4 transition hover:text-navy-hover"
              href={detail.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Published paper
            </a>
          )
        }
      >
        {detail.art && (
          <div className="mb-7 max-w-sm text-[color:var(--section-accent)]">
            <ProjectArt kind={detail.art} />
          </div>
        )}

        <p className="text-justify text-base leading-relaxed hyphens-auto sm:text-lg">
          {detail.description}
        </p>

        <TagLine items={detail.tags} label="Topics" />

        {detail.journey?.length > 0 && (
          <div className="mt-8">
            <Subheading>The Build</Subheading>
            <div className="space-y-4 text-justify text-base leading-relaxed hyphens-auto">
              {detail.journey.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {detail.gallery?.length > 0 && (
          <div className="mt-8">
            <Subheading>Album</Subheading>
            <div className="grid gap-4 sm:grid-cols-2">
              {detail.gallery.map((shot) => (
                <figure key={shot.src}>
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    loading="lazy"
                    className="w-full border border-rule object-cover"
                  />
                  {shot.caption && (
                    <figcaption className="mt-2 text-sm text-ink-soft">{shot.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {!detail.journey?.length && !detail.gallery?.length && (
          <p className="mt-8 border-t border-divider pt-6 font-mono text-sm text-ink-soft">
            A fuller write-up and photographs are on the way.
          </p>
        )}
      </SubPage>
    );
  }

  return (
    <div>
      <Subheading>Job Experience</Subheading>
      <RoleList items={jobs} onOpen={setDetail} />

      <Subheading>Research Experience</Subheading>
      <RoleList items={research} onOpen={setDetail} />

      <Subheading>Team Experience</Subheading>
      <RoleList items={teamExperience} onOpen={setDetail} />

      <Subheading>Engineering Projects</Subheading>

      <ul className="group/list">
        {projects.map((project) => (
          <li key={project.title} className="mb-10">
            <Card>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <CardTitle href={project.url}>{project.title}</CardTitle>

                {project.meta && (
                  <p className="mt-1 font-mono text-sm uppercase tracking-wide text-[color:var(--section-accent)]">
                    {project.meta}
                  </p>
                )}

                <p className="mt-2 text-justify text-base leading-normal hyphens-auto text-ink-soft">
                  {project.description}{' '}
                  <MoreButton onClick={() => setDetail(asDetail(project, 'project'))}>
                    Read More
                  </MoreButton>
                </p>

                <TagLine items={project.tags} label="Topics" />
              </div>

              <div className="z-10 sm:order-1 sm:col-span-2">
                <ProjectArt kind={project.art} />
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-justify text-base hyphens-auto text-ink-soft">
        Also presented{' '}
        <span className="text-ink">The Technological Advancement of Electric Propulsion</span> at
        Impulse 1.0 in November 2024. It was a case study on ion-thruster propulsion systems, their
        market applications and the outlook for them.
      </p>
    </div>
  );
}
