import { useState } from 'react';
import { researchInterests } from '../../data/resume';
import { InlineLink, Subheading, MoreButton, MarkerList } from '../ui';
import SubPage from '../SubPage';

/** The long version, kept off the front of the card so Research sits high. */
function FullStory() {
  return (
    <div className="space-y-4 text-justify text-lg hyphens-auto">
      <p>
        Aviation is what pulled me into engineering. What kept me here is signal processing — the
        part where a return echo stops being noise and starts being a target. Nearly everything I
        work on sits at the seam where radar theory has to survive contact with real hardware.
      </p>

      <p>
        Right now I'm a research assistant on the AAUB Radar Project, building a Pulse-Doppler radar
        in MATLAB and Simulink — the full chain from I/Q processing through moving-target indication
        and CFAR detection, plus a real-time acquisition path that streams over UDP and is written
        for an eventual FPGA port.
      </p>

      <p>
        Before radar, I spent three years building things that leave the ground. I led power systems
        for Team Ababil's CanSat — the country's first Global Finalist at the{' '}
        <InlineLink href="https://www.cansatcompetition.com/">CanSat 2025</InlineLink> finals in
        Virginia — and built the science and environment analysis module for Team Rover71's Mars
        rover, which placed 8th globally at the Anatolian Rover Challenge. Both turned into
        peer-reviewed IEEE papers. Along the way I've spent time inside F-7, Mi-17, C-130J and Boeing
        787 maintenance lines, which is a fast way to learn what an airworthy design actually costs.
      </p>

      <p>
        Away from the lab I debate, a habit that has produced a few national titles and, currently,
        the presidency of the AAUB Debating Club. It turns out to be the same skill as engineering:
        find the load-bearing claim, then test whether it holds.
      </p>

      <p>
        On the research side, integrated sensing and communication treats radar and data
        transmission as one design problem rather than two systems competing for spectrum. My thesis
        takes a specific corner of it — using a reconfigurable intelligent surface to shape the
        propagation environment for a dual-function radar communication link, then evaluating the
        sensing–communication trade-off through Pulse-Doppler modelling and waveform optimisation in
        MATLAB. I intend to carry both the theory and the hardware into doctoral research in
        wireless communications and radar signal processing.
      </p>
    </div>
  );
}

export default function About() {
  const [showStory, setShowStory] = useState(false);

  if (showStory) {
    return (
      <SubPage title="Engineering with Purpose" eyebrow= "A 5-minute read" onBack={() => setShowStory(false)}>
        <FullStory />
      </SubPage>
    );
  }

  return (
    <div className="text-ink-soft">
      <p className="text-justify text-lg hyphens-auto">
        Aviation is what pulled me into engineering. What kept me here is signal processing — the
        part where a return echo stops being noise and starts being a target. I'm an Avionics
        Engineering undergraduate at{' '}
        <InlineLink href="https://aaub.edu.bd">
          Aviation and Aerospace University, Bangladesh
        </InlineLink>
        , working on Pulse-Doppler radar and RIS-assisted dual-function radar communication for{' '}
        <span className="font-medium text-ink">6G integrated sensing and communication</span>.
        Nearly everything I build sits at the seam where radar theory has to survive contact with
        real hardware.{' '}
        <MoreButton onClick={() => setShowStory(true)}>Read More</MoreButton>
      </p>

      <div className="mt-7">
        <Subheading>Research Focus</Subheading>

        <p className="text-justify text-lg hyphens-auto">
          My thesis takes RIS-assisted integrated sensing and communication in two parts — the
          range-resolution limit of a{' '}
          <span className="font-medium text-ink">reconfigurable intelligent surface</span>, tested
          against full-wave simulation and hardware, and how much sensing quality survives the 5G
          scheduler.
        </p>
      </div>

      <div className="mt-7">
        <Subheading>Research Interest</Subheading>

        <MarkerList items={researchInterests} />
      </div>
    </div>
  );
}
