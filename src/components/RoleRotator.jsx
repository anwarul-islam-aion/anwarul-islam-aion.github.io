import { useEffect, useState } from 'react';
import { profile } from '../data/resume';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const TYPE_MS = 60;
const ERASE_MS = 30;
const HOLD_MS = 1800;

/** Types each role out, holds, erases, moves to the next. */
export default function RoleRotator() {
  const { roles } = profile;
  const reduced = usePrefersReducedMotion();

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [phase, setPhase] = useState('holding');

  useEffect(() => {
    if (reduced) return undefined;

    const full = roles[index];

    if (phase === 'typing') {
      if (text.length < full.length) {
        const t = setTimeout(() => setText(full.slice(0, text.length + 1)), TYPE_MS);
        return () => clearTimeout(t);
      }
      setPhase('holding');
      return undefined;
    }

    if (phase === 'holding') {
      const t = setTimeout(() => setPhase('erasing'), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), ERASE_MS);
      return () => clearTimeout(t);
    }

    setIndex((current) => (current + 1) % roles.length);
    setPhase('typing');
    return undefined;
  }, [text, phase, index, reduced, roles]);

  if (reduced) {
    return (
      <p className="mt-2 text-base font-medium tracking-tight text-navy sm:text-xl">
        {roles.join(' · ')}
      </p>
    );
  }

  return (
    <p className="mt-2 min-h-7 text-base font-medium tracking-tight text-navy sm:min-h-8 sm:text-xl">
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block w-px animate-pulse bg-navy align-middle text-transparent">
          |
        </span>
      </span>
    </p>
  );
}
