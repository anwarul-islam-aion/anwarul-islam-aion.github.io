import { internships } from '../../data/resume';
import { CompactRow } from '../ui';

export default function Attachments() {
  return (
    <div>
      <p className="mb-8 text-justify text-lg hyphens-auto text-ink-soft">
        Rotations through Bangladesh Air Force maintenance, repair and overhaul units and a
        commercial line-maintenance base — fighter, rotary and transport airframes, plus the
        quality-assurance side of a wide-body operator.
      </p>

      <ul className="group/list">
        {internships.map((stint) => (
          <li key={stint.org} className="mb-3">
            <CompactRow lead={stint.duration} leadWidth="narrow">
              <span className="text-base font-medium text-ink">{stint.org}</span>
              <span className="text-base text-ink-soft"> — {stint.detail}</span>
            </CompactRow>
          </li>
        ))}
      </ul>
    </div>
  );
}
