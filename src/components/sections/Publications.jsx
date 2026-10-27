import { useState } from 'react';
import { publications, posters, grants } from '../../data/resume';
import { Card, CardTitle, Subheading, MoreButton } from '../ui';
import SubPage from '../SubPage';
import { ArrowUpRight } from '../Icons';

export default function Publications() {
  // { kind: 'paper' | 'poster', item }
  const [detail, setDetail] = useState(null);

  if (detail?.kind === 'paper') {
    const paper = detail.item;
    return (
      <SubPage
        eyebrow={[paper.venue, paper.place, paper.year].filter(Boolean).join(', ')}
        title={paper.title}
        onBack={() => setDetail(null)}
        footer={
          <a
            className="group/link inline-flex items-baseline font-medium text-navy hover:text-navy-hover focus-visible:text-navy-hover"
            href={paper.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              Read on IEEE Xplore
              <ArrowUpRight />
            </span>
          </a>
        }
      >
        <h4 className="text-base font-semibold text-ink">Abstract</h4>

        <p className="mt-2 text-justify text-base leading-relaxed">{paper.abstract}</p>

        <p className="mt-4 font-mono text-sm text-ink-soft">DOI: {paper.doi}</p>

        {paper.presentation && (
          <div className="mt-8">
            <Subheading>Conference Presentation</Subheading>

            {paper.presentation.presenterNote && (
              <p className="text-base leading-relaxed text-ink">
                {paper.presentation.presenterNote}
              </p>
            )}

            <p className="mt-2 font-mono text-sm text-ink-soft">
              DOI: {paper.presentation.doi}
            </p>

            <a
              className="group/link mt-3 inline-flex items-baseline font-medium text-navy hover:text-navy-hover focus-visible:text-navy-hover"
              href={paper.presentation.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>
                View the presentation slides on ResearchGate
                <ArrowUpRight />
              </span>
            </a>
          </div>
        )}
      </SubPage>
    );
  }

  if (detail?.kind === 'poster') {
    const poster = detail.item;
    return (
      <SubPage
        eyebrow={`Poster Presentation · ${poster.date}`}
        title={poster.title}
        onBack={() => setDetail(null)}
        footer={
          <a
            className="group/link inline-flex items-baseline font-medium text-navy hover:text-navy-hover focus-visible:text-navy-hover"
            href={poster.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              View on ResearchGate
              <ArrowUpRight />
            </span>
          </a>
        }
      >
        <h4 className="text-base font-semibold text-ink">Abstract</h4>

        <p className="mt-2 text-justify text-base leading-relaxed">
          {poster.abstract}
        </p>

        {poster.doi && <p className="mt-4 font-mono text-sm text-ink-soft">DOI: {poster.doi}</p>}

        <div className="mt-8">
          <Subheading>Poster</Subheading>
          <img
            src={poster.image}
            alt={`Poster: ${poster.title}`}
            width="1500"
            height="2000"
            className="h-auto w-full border border-rule"
          />
        </div>
      </SubPage>
    );
  }

  return (
    <div>
      <Subheading>Publications</Subheading>

      <ol className="group/list mb-14">
        {publications.map((paper, index) => (
          <li key={paper.title} className="mb-10">
            <Card>
              <div className="z-10 mb-2 mt-1 font-mono text-sm font-semibold uppercase tracking-wide text-[color:var(--section-accent)] sm:col-span-2">
                <span className="text-[color:var(--section-accent)]">[{index + 1}]</span>{' '}
                {paper.year}
              </div>

              <div className="z-10 sm:col-span-6">
                <CardTitle href={paper.url}>{paper.title}</CardTitle>

                {/* place is absent for journal submissions, so build the line
                    from whatever parts exist rather than leaving stray commas. */}
                <p className="mt-2 text-base italic leading-normal text-ink-soft">
                  {[paper.venue, paper.place, paper.year].filter(Boolean).join(', ')}
                </p>

                {paper.status && (
                  <p className="mt-1.5 inline-block border border-[color:var(--section-accent)]/40 px-2 py-0.5 font-mono text-xs font-semibold uppercase tracking-wide text-[color:var(--section-accent)]">
                    {paper.status}
                  </p>
                )}

                {paper.doi && (
                  <p className="mt-1 font-mono text-sm text-ink-soft">DOI: {paper.doi}</p>
                )}

                {/* Read More trails the last metadata line so it stays attached
                    to the block rather than floating under it. */}
                {(paper.presentation?.doi || paper.abstract) && (
                  <p className="mt-0.5 font-mono text-sm text-ink-soft">
                    {paper.presentation?.doi && <>Presentation DOI: {paper.presentation.doi} </>}
                    {paper.abstract && (
                      <MoreButton onClick={() => setDetail({ kind: 'paper', item: paper })}>
                        Read More
                      </MoreButton>
                    )}
                  </p>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ol>

      <Subheading>Poster Presentations</Subheading>

      <ul className="group/list mb-14">
        {posters.map((poster) => (
          <li key={poster.url} className="mb-10">
            <Card>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <CardTitle href={poster.url}>{poster.title}</CardTitle>

                <p className="mt-2 text-base italic leading-normal text-ink-soft">
                  Poster Presentation, {poster.date}
                </p>

                {poster.doi && (
                  <p className="mt-1 font-mono text-sm text-ink-soft">DOI: {poster.doi}</p>
                )}

                <p className="mt-2 text-justify text-base leading-normal text-ink-soft">
                  {poster.intro}{' '}
                  <MoreButton onClick={() => setDetail({ kind: 'poster', item: poster })}>
                    Read More
                  </MoreButton>
                </p>
              </div>

              <div className="z-10 sm:order-1 sm:col-span-2">
                <button
                  type="button"
                  onClick={() => setDetail({ kind: 'poster', item: poster })}
                  className="block w-full cursor-pointer overflow-hidden border-2 border-rule transition hover:border-[color:var(--section-accent)]"
                >
                  {/* eager + intrinsic size: it is a small, above-the-fold
                      thumbnail, and the dimensions reserve its box. */}
                  <img
                    src={poster.thumb}
                    alt={`Poster: ${poster.title}`}
                    width="525"
                    height="700"
                    className="h-auto w-full"
                  />
                </button>
              </div>
            </Card>
          </li>
        ))}
      </ul>

      <Subheading>Research Grants</Subheading>

      <ul className="group/list">
        {grants.map((grant) => (
          <li key={grant.period} className="mb-10">
            <Card>
              <div className="z-10 mb-2 mt-1 font-mono text-sm font-semibold uppercase tracking-wide text-[color:var(--section-accent)] sm:col-span-2">
                {grant.period}
              </div>

              <div className="z-10 sm:col-span-6">
                <h4 className="text-lg font-medium leading-snug text-ink">
                  &ldquo;{grant.title}&rdquo;
                </h4>

                <p className="mt-1.5 font-mono text-sm text-[color:var(--section-accent)]">
                  {grant.team}
                </p>

                <p className="mt-3 text-base leading-normal text-ink-soft">{grant.fund}</p>

                <p className="mt-1 text-base leading-normal text-ink-soft">
                  <span className="font-medium text-ink">Issued by:</span> {grant.issuedBy}
                </p>

                <p className="mt-1 text-base leading-normal text-ink-soft">
                  <span className="font-medium text-ink">Principal Investigator:</span>{' '}
                  {grant.principalInvestigator}
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
