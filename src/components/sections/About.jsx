import { useState } from 'react';
import { InlineLink, Subheading, MoreButton } from '../ui';
import SubPage from '../SubPage';

/** Emphasised term inside the research prose — same weight as elsewhere on the card. */
function Term({ children }) {
  return <span className="font-medium text-ink">{children}</span>;
}

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
          How far can a single waveform be pushed to sense and to communicate at once? My thesis
          puts a <span className="font-medium text-ink">reconfigurable intelligent surface</span> in
          the path of a dual-function radar link and evaluates the sensing–communication trade-off
          in simulation, while the radar lab keeps it honest in hardware.
        </p>
      </div>

      <div className="mt-7">
        <Subheading>Research Interest</Subheading>

        <p className="text-justify text-lg hyphens-auto">
          Expertise in <Term>radar signal processing</Term>, from building a Pulse-Doppler radar end
          to end. As well as a strong interest in <Term>wireless communication</Term> and antenna
          design. <Term>Integrated sensing and communication (ISAC)</Term> is where these two
          combine and that is the motivation. Now working on how a 5G base station's own transmitted
          signal can be used to sense from its downlink. This is a radar problem inside a
          communication system. The open question is how much sensing quality survives the
          scheduler. Also working on <Term>reconfigurable intelligent surfaces</Term> and planning
          to bring the two together for future wireless communication. Also worked on{' '}
          <Term>5G C-band interference detection and mitigation for FMCW Radar Altimeters</Term> on
          SDR, factor-graph SLAM for GNSS-denied navigation with computer vision and microwave brain
          imaging with Vivaldi antennas.
        </p>
      </div>
    </div>
  );
}
