import { leadership } from '../../data/resume';
import { CompactRow } from '../ui';

export default function Leadership() {
  return (
    <ul className="group/list">
      {leadership.map((post) => (
        <li key={post.org} className="mb-3">
          <CompactRow lead={post.period}>
            <span className="text-base font-medium text-ink">{post.role}</span>
            <span className="text-base text-ink-soft">, {post.org}</span>
          </CompactRow>
        </li>
      ))}
    </ul>
  );
}
