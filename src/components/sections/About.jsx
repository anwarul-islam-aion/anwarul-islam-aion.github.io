import { useState } from 'react';
import { researchInterests } from '../../data/resume';
import { InlineLink, Subheading, MoreButton, MarkerList } from '../ui';
import SubPage from '../SubPage';

/** The long version, kept off the front of the card so Research sits high. */
function FullStory() {
  return (
    <div className="space-y-4 text-justify text-base sm:text-lg">
      <p>
        I am drawn to engineering problems where theory meets reality. I enjoy the challenge of
        turning mathematical models into working systems. This perspective has shaped my journey in
        Avionics Engineering at AAUB, with a particular focus on radar sensing, digital signal
        processing and wireless communication.
      </p>

      <p>
        As a Research Assistant at the university's RADAR Research Lab I develop a Pulse-Doppler
        radar system using MATLAB and Simulink. My team's work spans the processing chain from I/Q
        signal processing to moving-target indication (MTI) and constant false alarm rate (CFAR)
        detection. The team is also developing a real-time acquisition pipeline with UDP-based data
        streaming, designed for eventual FPGA implementation.
      </p>

      <p>
        My current thesis research explores cellular Integrated Sensing and Communication (ISAC),
        where communication infrastructure also serves as a sensing platform. This investigates how
        a 5G base station's downlink signals can support environmental sensing. In parallel I
        explore Reconfigurable Intelligent Surfaces (RIS) to understand how controlling wireless
        propagation can improve sensing capabilities.
      </p>

      <p>
        My engineering experience began well before my radar work. Over three years I contributed to
        aerospace projects involving satellite systems and planetary exploration. With Team Ababil I
        led power system development for a satellite project that reached the global finals of{' '}
        <InlineLink href="https://www.cansatcompetition.com/">CanSat 2025</InlineLink> in Virginia,
        USA. I also developed the science and environmental analysis module for Team Rover71's Mars
        rover. It placed eighth globally at the Anatolian Rover Challenge in Turkey. These projects
        contributed to peer-reviewed IEEE publications and strengthened my experience in
        multidisciplinary engineering.
      </p>

      <p>
        My academic journey began with a strong record throughout school. I ranked first throughout
        my school years and achieved a perfect GPA of 5.00 in every board examination. I also
        received national merit scholarships. At the national level I became a finalist in both the
        Bangladesh Physics Olympiad and the Bangladesh Math Olympiad. I received several Best
        Science Project Awards at divisional and national level science and project fairs.
      </p>

      <p>
        For my industrial attachments I explored the civil and military fleets of Bangladesh, where
        I gained exposure to aircraft maintenance environments involving the F-7, Mi-17, C-130J and
        Boeing 787. Seeing aviation systems in operational settings gave me a practical perspective
        on the reliability, maintainability and engineering trade-offs that matter beyond the design
        stage.
      </p>

      <p>
        Outside the laboratory I serve as Team Lead for the AAUB Satellite Project and President of
        the AAUB Debating Club. Competitive debating has earned me national titles and taught me to
        challenge assumptions, build arguments and communicate technical ideas clearly.
      </p>

      <p>
        Beyond engineering and leadership I tutor students and enjoy travelling, watching movies and
        stand-up comedy. Whether I am working on a radar system, leading a team or preparing for a
        debate, I value the same things: curiosity, critical thinking and the willingness to test an
        idea rather than simply accept it.
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
      <p className="text-justify text-base sm:text-lg">
        Aviation brought me into engineering and signal processing shaped my motivation. I am an
        Avionics Engineering final year undergraduate at{' '}
        <InlineLink href="https://aaub.edu.bd">
          Aviation and Aerospace University, Bangladesh
        </InlineLink>
        .
      </p>

      <p className="mt-4 text-justify text-base sm:text-lg">
        Now I am working at the university's RADAR Research Lab as a Research Assistant, the{' '}
        <span className="font-medium text-ink">
          first undergraduate in the university's history
        </span>{' '}
        to receive a paid research assistantship by special exception. My work is on Pulse-Doppler
        radar, wireless communication and{' '}
        <span className="font-medium text-ink">
          cellular integrated sensing and communication (ISAC)
        </span>
        . I also serve as Team Lead for the AAUB Satellite Project and President of the AAUB
        Debating Club. Beyond the lab I have contributed to four research papers and been a global
        finalist in the CanSat and Mars Rover competitions in the USA and Turkey. Outside
        engineering and leadership I tutor students. For hobbies I enjoy travelling, watching
        movies, stand-up comedy and, of course, debating.{' '}
        <MoreButton onClick={() => setShowStory(true)}>Read More</MoreButton>
      </p>

      <div className="mt-7">
        <Subheading>Research Focus</Subheading>

        <p className="text-justify text-base sm:text-lg">
          My research focuses on the intersection of radar signal processing and wireless
          communication. My thesis explores{' '}
          <span className="font-medium text-ink">
            cellular Integrated Sensing and Communication (ISAC)
          </span>
          , investigating how a 5G base station can use its own downlink transmissions to sense its
          surroundings. A central question is how much sensing performance can be preserved when
          network resources are scheduled to serve multiple users. I am also exploring
          Reconfigurable Intelligent Surfaces (RIS) to control signal propagation and investigating
          how RIS-assisted sensing can be integrated with cellular ISAC for future wireless
          networks.
        </p>
      </div>

      <div className="mt-7">
        <Subheading>Research Interest</Subheading>

        <MarkerList items={researchInterests} />
      </div>
    </div>
  );
}
