import { useState } from 'react';
import { researchInterests } from '../../data/resume';
import { InlineLink, Subheading, MoreButton, MarkerList } from '../ui';
import SubPage from '../SubPage';

/** The long version, kept off the front of the card so Research sits high. */
function FullStory() {
  return (
    <div className="space-y-4 text-justify text-lg hyphens-auto">
      <p>
        Aviation is what pulled me into engineering. What kept me here is signal processing. It is
        the part where a return echo stops being noise and starts being a target. Nearly everything
        I work on sits at the seam where radar theory has to survive contact with real hardware.
      </p>

      <p>
        Right now I am a research assistant on the AAUB Radar Project, building a Pulse-Doppler
        radar in MATLAB and Simulink. That is the full chain, from I/Q processing through
        moving-target indication and CFAR detection. It also has a real-time acquisition path that
        streams over UDP and is written for an eventual FPGA port.
      </p>

      <p>
        Before radar, I spent three years building things that leave the ground. I led power systems
        for Team Ababil's CanSat, the country's first Global Finalist at the{' '}
        <InlineLink href="https://www.cansatcompetition.com/">CanSat 2025</InlineLink> finals in
        Virginia. I also built the science and environment analysis module for Team Rover71's Mars
        rover, which placed 8th globally at the Anatolian Rover Challenge. Both turned into
        peer-reviewed IEEE papers. Along the way I have spent time inside F-7, Mi-17, C-130J and
        Boeing 787 maintenance lines. That is a fast way to learn what an airworthy design actually
        costs.
      </p>

      <p>
        Away from the lab I debate. The habit has produced a few national titles and, currently, the
        presidency of the AAUB Debating Club. It turns out to be the same skill as engineering. Find
        the load-bearing claim, then test whether it holds.
      </p>

      <p>
        On the research side, integrated sensing and communication treats radar and data
        transmission as one design problem rather than two systems competing for spectrum. My thesis
        takes the cellular corner of it. A 5G base station listens to its own signal coming back, so
        the network can sense what is around it without giving up the data it exists to carry. One
        half is a reconfigurable intelligent surface, a flat panel that reshapes where the signal
        goes. I look at what it costs in how finely two objects can be told apart, and check that in
        full-wave simulation and against a real panel. The other half is the scheduler. A network
        busy serving users is not a convenient radar. I am working out how much sensing quality
        survives that, in simulation so far. I intend to carry both the theory and the hardware into
        doctoral research in wireless communications and radar signal processing.
      </p>
    </div>
  );
}

export default function About() {
  const [showStory, setShowStory] = useState(false);

  if (showStory) {
    return (
      <SubPage onBack={() => setShowStory(false)}>
        <FullStory />
      </SubPage>
    );
  }

  return (
    <div className="text-ink-soft">
      <p className="text-justify text-lg hyphens-auto">
        Aviation is what pulled me into engineering. What kept me here is signal processing. It is
        the part where a return echo stops being noise and starts being a target. I am an Avionics
        Engineering undergraduate at{' '}
        <InlineLink href="https://aaub.edu.bd">
          Aviation and Aerospace University, Bangladesh
        </InlineLink>
        . I work on Pulse-Doppler radar and{' '}
        <span className="font-medium text-ink">cellular integrated sensing and communication</span>,
        which means getting a 5G network to sense what is around it while it carries data. Nearly
        everything I build sits at the seam where radar theory has to survive contact with real
        hardware.{' '}
        <MoreButton onClick={() => setShowStory(true)}>Read More</MoreButton>
      </p>

      <div className="mt-7">
        <Subheading>Research Focus</Subheading>

        <p className="text-justify text-lg hyphens-auto">
          My thesis is on <span className="font-medium text-ink">cellular ISAC</span>, which means
          letting a mobile network sense as well as communicate. It comes in two parts. One is a
          reconfigurable intelligent surface that reshapes the signal path, tested against full-wave
          simulation and a real panel. The other is how much sensing quality survives once the
          network is busy with real users.
        </p>
      </div>

      <div className="mt-7">
        <Subheading>Research Interest</Subheading>

        <MarkerList items={researchInterests} />
      </div>
    </div>
  );
}
