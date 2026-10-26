import { useState } from 'react';
import { education, skills, testScores, profile } from '../../data/resume';
import { Card, Subheading, DefinitionRow, ActionLink, MarkerList, MoreButton } from '../ui';
import SubPage from '../SubPage';
import { DownloadIcon } from '../Icons';

/** Renders one skills cell the way the resume sets it: term, then (note). */
function SkillList({ items }) {
  return items.map((item, index) => (
    <span key={item.name}>
      <span className={item.hi ? 'font-semibold text-ink' : undefined}>{item.name}</span>
      {item.note && (
        <>
          {' ('}
          <span className={item.noteHi ? 'font-semibold text-ink' : undefined}>{item.note}</span>
          {')'}
        </>
      )}
      {index < items.length - 1 && ', '}
    </span>
  ));
}

export default function Education() {
  const [openEntry, setOpenEntry] = useState(null);

  // The coursework lives on a second page inside this card, not over it.
  if (openEntry) {
    return (
      <SubPage
        eyebrow={`${openEntry.degree} · ${openEntry.date}`}
        title="Relevant Coursework"
        onBack={() => setOpenEntry(null)}
        footer={
          <div>
            <h4 className="text-base font-semibold text-ink">Course Curriculum</h4>

            <p className="mt-2 text-justify text-base leading-relaxed hyphens-auto text-ink-soft">
              {openEntry.namingNote}
            </p>

            <a
              className="group/dl mt-5 inline-flex items-center gap-2.5 border border-navy bg-navy px-5 py-2.5 font-mono text-sm uppercase tracking-widest text-white transition hover:border-navy-hover hover:bg-navy-hover"
              href={openEntry.curriculumUrl}
              download={openEntry.curriculumFileName}
            >
              <DownloadIcon />
              Full Curriculum (PDF)
            </a>
          </div>
        }
      >
        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {openEntry.coursework.map((group) => (
            <div key={group.group}>
              <h4 className="text-base font-semibold text-ink">{group.group}</h4>
              <MarkerList items={group.items} />
            </div>
          ))}
        </div>
      </SubPage>
    );
  }

  return (
    <div>
      <ol className="group/list mb-14">
        {education.map((entry) => (
          <li key={entry.degree} className="mb-10">
            <Card>
              <div className="z-10 mb-2 mt-1 font-mono text-sm font-semibold uppercase tracking-wide text-[color:var(--section-accent)] sm:col-span-2">
                {entry.date}
              </div>

              <div className="z-10 sm:col-span-6">
                <h4 className="text-lg font-medium leading-snug text-ink">{entry.degree}</h4>

                <p className="mt-1 text-base text-ink-soft">
                  {entry.schoolUrl ? (
                    <a
                      className="text-navy transition hover:text-navy-hover focus-visible:text-navy-hover"
                      href={entry.schoolUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {entry.school}
                    </a>
                  ) : (
                    entry.school
                  )}
                  <span className="text-ink-soft"> · {entry.location}</span>
                </p>

                <p className="mt-2 font-mono text-sm text-navy">{entry.result}</p>

                {entry.detail && (
                  <p className="mt-2 text-justify text-base leading-normal hyphens-auto text-ink-soft">
                    {entry.detail}
                  </p>
                )}

                {entry.coursework && (
                  <MoreButton className="mt-3" onClick={() => setOpenEntry(entry)}>
                    Relevant Coursework
                  </MoreButton>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ol>

      <Subheading>GRE &amp; IELTS</Subheading>

      <dl className="mb-14">
        {testScores.map((test) => (
          <DefinitionRow key={test.label} term={test.label}>
            <span className="font-semibold text-ink">{test.score}</span>
            {test.note && <span> ({test.note})</span>}
          </DefinitionRow>
        ))}
      </dl>

      <Subheading>Skills</Subheading>

      <dl className="mb-14">
        {skills.map((group) => (
          <DefinitionRow key={group.category} term={group.category}>
            <SkillList items={group.items} />
          </DefinitionRow>
        ))}
      </dl>

      {/* Two documents: the four-page resume and the shorter academic CV. */}
      <div className="flex flex-wrap gap-3">
        <ActionLink href={profile.resumeUrl}>Download Full Résumé (PDF)</ActionLink>
        <ActionLink href={profile.cvUrl}>Download Academic CV (PDF)</ActionLink>
      </div>
    </div>
  );
}
