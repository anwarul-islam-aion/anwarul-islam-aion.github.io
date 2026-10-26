import { awards } from '../../data/resume';
import { CompactRow } from '../ui';

export default function Honors() {
  return (
    <ul className="group/list">
      {awards.map((award) => (
        <li key={`${award.year}-${award.detail}`} className="mb-3">
          <CompactRow lead={award.year} leadWidth="narrow">
            <span className="text-base font-medium text-ink">{award.title}</span>
            <span className="text-base text-ink-soft">: {award.detail}</span>
          </CompactRow>
        </li>
      ))}
    </ul>
  );
}
