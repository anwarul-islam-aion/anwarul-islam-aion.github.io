import useHashSection from './hooks/useHashSection';
import { sections } from './data/resume';
import SideRails from './components/SideRails';
import LeftPanel from './components/LeftPanel';
import Panel from './components/Panel';
import BeamField from './components/BeamField';
import Fleet from './components/Fleet';
import BottomBar from './components/BottomBar';

export default function App() {
  const [active, open] = useHashSection();
  const accent = sections.find((section) => section.id === active)?.accent;

  return (
    <div
      style={{ '--section-accent': accent }}
      className="relative min-h-dvh font-sans leading-relaxed text-ink-soft antialiased lg:h-dvh lg:overflow-hidden"
    >
      <a
        href="#main"
        className="absolute left-0 top-0 z-50 block -translate-y-full rounded bg-navy px-4 py-3 text-sm font-bold uppercase tracking-widest text-white transition focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <SideRails />

      <BeamField active={active} />

      <Fleet />

      {/* Asymmetric gutters: the left rail is gone, so that side only needs
          clearance for the base station, while the right still holds the email
          rail. That is what shifts the card left and lets it grow. */}
      {/* px-4 on a phone, not px-6: with the card's own padding inside it, 24pt
          gutters left the text column under 280px. */}
      {/* pt-20 clears the section nav, which is fixed to the top of the screen
          below `lg`. From `lg` the nav returns to the left column and the
          padding goes back to the desktop figures. */}
      <div className="mx-auto flex max-w-[1600px] flex-col px-4 pb-8 pt-20 sm:px-6 sm:pb-12 md:px-10 lg:h-full lg:flex-row lg:gap-9 lg:py-0 lg:pl-14 lg:pr-20">
        <LeftPanel active={active} onOpen={open} />

        <main id="main" className="flex min-w-0 flex-col lg:h-full lg:w-[73%]">
          <Panel active={active} />
          <BottomBar />
        </main>
      </div>
    </div>
  );
}
