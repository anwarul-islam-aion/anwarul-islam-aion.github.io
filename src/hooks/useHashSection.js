import { useCallback, useEffect, useState } from 'react';
import { sections } from '../data/resume';

const ids = sections.map((section) => section.id);
const fromHash = () => {
  const id = globalThis.location?.hash.replace('#', '');
  return ids.includes(id) ? id : ids[0];
};

/** Which card is open, mirrored into the URL hash so links are shareable. */
export default function useHashSection() {
  const [active, setActive] = useState(fromHash);

  const toTop = () => {
    if (globalThis.scrollY > 0) globalThis.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onHashChange = () => {
      setActive(fromHash());
      if (globalThis.scrollY > 0) globalThis.scrollTo({ top: 0, behavior: 'smooth' });
    };
    addEventListener('hashchange', onHashChange);
    return () => removeEventListener('hashchange', onHashChange);
  }, []);

  const open = useCallback((id) => {
    if (ids.includes(id)) {
      history.replaceState(null, '', `#${id}`);
      setActive(id);
      toTop();
    }
  }, []);

  return [active, open];
}
