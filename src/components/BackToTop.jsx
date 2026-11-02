import { useEffect, useState } from 'react';

/**
 * Jump back to the top of the page.
 *
 * Phone only. From `lg` the page itself does not scroll: the card scrolls
 * inside a fixed viewport, so there is no page top to return to.
 *
 * Hidden until the reader is a screen down, because at the top of the page it
 * would sit over the first card doing nothing.
 */
export default function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-rule bg-paper/95 text-ink shadow-sm backdrop-blur transition duration-200 motion-reduce:transition-none lg:hidden ${
        shown ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
