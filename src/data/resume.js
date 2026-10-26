import { asset } from '../lib/asset.js';

export const profile = {
  name: 'Md Anwarul Islam Aion',
  /** Cycled one at a time under the name by <RoleRotator />. */
  roles: [
    'Avionics Engineer',
    'PhD Aspirant',
    'Telecommunication Researcher',
    'RADAR Engineer',
    'Technical Writer',
  ],
  location: 'Lalmonirhat, Bangladesh',
  photo: asset('profile.png'),
  resumeUrl: asset('resume.pdf'),
  resumeFileName: 'Md-Anwarul-Islam-Aion-Resume.pdf',
  email: 'aion.aaub@gmail.com',
  phone: '+8801717617918',
  website: 'https://anwarulislamaion.engineer',
  /**
   * `color` is the platform's brand colour, darkened where the stock value is
   * too pale to clear 3:1 against the sand ground (ORCID green, RG teal).
   */
  socials: [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/anwarul-islam-aion',
      color: '#24292f',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/anwarul-islam-aion/',
      color: '#0a66c2',
    },
    {
      name: 'Google Scholar',
      icon: 'scholar',
      url: 'https://scholar.google.com/citations?user=Rc530o4AAAAJ&hl=en',
      color: '#3367d6',
    },
    {
      name: 'ORCID',
      icon: 'orcid',
      url: 'https://orcid.org/0009-0004-4061-0150',
      color: '#6f8b1e',
    },
    {
      name: 'ResearchGate',
      icon: 'researchgate',
      url: 'https://www.researchgate.net/profile/Md-Anwarul-Aion',
      color: '#00857a',
    },
    { name: 'Email', icon: 'mail', url: 'mailto:aion.aaub@gmail.com', color: '#b4472b' },
  ],
};

/**
 * `accent` gives each card its own identity — it drives the rule under the
 * heading, that card's meta labels, and the nav indicator. All eight are deep,
 * desaturated tones that clear 5:1 on white, so they stay legible as text.
 */
export const sections = [
  { id: 'about', label: 'About', accent: '#1e3a5f' }, // navy
  { id: 'education', label: 'Education & Skills', accent: '#2f5d62' }, // teal
  { id: 'experience', label: 'Experience & Projects', accent: '#8a5a3b' }, // umber
  { id: 'attachments', label: 'Industrial Attachments', accent: '#4a6741' }, // moss
  { id: 'publications', label: 'Publications & Grants', accent: '#7a3b4a' }, // burgundy
  { id: 'honors', label: 'Honors & Awards', accent: '#7d6033' }, // bronze
  { id: 'leadership', label: 'Leadership & Volunteering', accent: '#5b4b7a' }, // plum
  { id: 'references', label: 'References', accent: '#6b5b4e' }, // taupe
];

export const experience = [
  {
    date: '2026 — Present',
    roles: [{ title: 'Research Assistant', period: '2026 — Present' }],
    org: 'AAUB Radar Project',
    orgUrl: 'https://aaub.edu.bd',
    location: 'Aviation and Aerospace University, Bangladesh',
    supervisor: 'Air Commodore Dr. Mohammad Akhter Jamil',
    hours: '20 hrs/week',
    description:
      'Developing a hardware-oriented Pulse-Doppler radar system in MATLAB/Simulink, implementing the end-to-end DSP chain — I/Q signal processing, moving-target indication, and CFAR detection. Designing real-time radar data acquisition with UDP-based streaming and legacy radar display integration, targeting an FPGA-compatible implementation.',
    tags: ['MATLAB', 'Simulink', 'DSP', 'MTI', 'CFAR', 'UDP', 'FPGA'],
    journey: [],
    gallery: [],
  },
  {
    date: '2024 — Present',
    roles: [
      { title: 'Team Lead', period: '2026 — Present' },
      { title: 'Electrical Engineer', period: '2024 — 2025' },
    ],
    org: 'AAUB CanSat — Team Ababil',
    orgUrl: null,
    location: 'Lalmonirhat, Bangladesh',
    supervisor: null,
    hours: null,
    description:
      "Core electrical and power-systems engineer for a CanSat-class small satellite, now leading the team. Built the power architecture that carried Ababil to the CanSat 2025 finals in Virginia, USA — run by the American Astronautical Society and NASA — making Team Ababil the country's first Global Finalist in the competition. Co-authored and presented the team's peer-reviewed paper at MEPCON 2025.",
    tags: ['Power Systems', 'PCB Design', 'Altium Designer', 'Embedded', 'Telemetry'],
    journey: [],
    gallery: [],
  },
  {
    date: 'Nov 2024 — Apr 2026',
    roles: [{ title: 'Science Module Lead', period: 'Nov 2024 — Apr 2026' }],
    org: 'AAUB Mars Rover — Team Rover71',
    orgUrl: null,
    location: 'Lalmonirhat, Bangladesh',
    supervisor: null,
    hours: null,
    description:
      'Directed scientific mission planning and developed the Science & Environment Analysis subsystem from scratch for an indigenous Mars rover, coordinating subsystem integration with the EPS team. The rover placed 8th globally at the Anatolian Rover Challenge 2025. Co-authored the peer-reviewed publication on the biosignature detection framework.',
    tags: ['Mission Planning', 'Instrumentation', 'Sensor Systems', 'Systems Integration'],
    journey: [],
    gallery: [],
  },
];

export const internships = [
  {
    org: '214 MROU, Bangladesh Air Force',
    detail: 'F-7 fighter aircraft overhaul & avionics systems',
    duration: '1 week',
  },
  {
    org: '216 MROU, Bangladesh Air Force',
    detail: 'Mi-17 / Mi-171 helicopter overhaul & avionics maintenance',
    duration: '1 week',
  },
  {
    org: '208 MROU, Bangladesh Air Force',
    detail: 'Bell 206 / 212 helicopter overhaul & electrical systems',
    duration: '1 week',
  },
  {
    org: '205 MU, Bangladesh Air Force',
    detail: 'Electronic systems maintenance, PCB development & test engineering',
    duration: '1 week',
  },
  {
    org: '133 ATU, Bangladesh Air Force',
    detail: 'C-130J Super Hercules avionics & electrical systems',
    duration: '1 week',
  },
  {
    org: 'Biman Bangladesh Airlines',
    detail: 'Boeing 787 Dreamliner line maintenance, CAMO, AMO & quality assurance',
    duration: '1 week',
  },
];

export const projects = [
  {
    art: 'radar',
    title: 'Pulse-Doppler Radar Signal Chain',
    url: null,
    description:
      'A hardware-oriented radar built the whole way down: I/Q demodulation, pulse compression, moving-target indication and CFAR detection, wired to a real-time acquisition path that streams over UDP into a legacy scope display. Written for an eventual FPGA port.',
    tags: ['MATLAB', 'Simulink', 'CFAR', 'DAQ'],
    meta: 'AAUB Radar Project',
    journey: [],
    gallery: [],
  },
  {
    art: 'isac',
    title: 'RIS-Assisted Dual-Function Radar Communication',
    url: null,
    description:
      'Investigating reconfigurable intelligent surfaces for dual-function radar communication systems in 6G integrated sensing and communication — Pulse-Doppler radar modelling, waveform optimisation, and performance evaluation through MATLAB simulation. The direction I plan to carry into doctoral research.',
    tags: ['6G', 'ISAC', 'RIS', 'Waveform Design'],
    meta: 'Undergraduate Thesis',
    journey: [],
    gallery: [],
  },
  {
    art: 'cansat',
    title: 'Resilient Power Systems for CanSat-Class Satellites',
    url: 'https://doi.org/10.1109/MEPCON66918.2026.11360120',
    description:
      'A fault-tolerant power architecture for reusable CanSat-class small satellites, developed for Team Ababil and flown at the CanSat 2025 finals in Virginia. Published and presented at the 26th International Middle East Power Systems Conference.',
    tags: ['Power Electronics', 'Small Satellites', 'IEEE MEPCON'],
    meta: "Team Ababil · Country's first Global Finalist",
    journey: [],
    gallery: [],
  },
  {
    art: 'rover',
    title: 'LIFE-MAP — Biosignature Detection Protocol',
    url: 'https://doi.org/10.1109/TENCON66050.2025.11375044',
    description:
      'An indigenous biosignature detection protocol using multi-biomolecule based analysis, built as the Science & Environment Analysis module of the Rover71 Mars rover. Published at IEEE TENCON 2025.',
    tags: ['Astrobiology', 'Instrumentation', 'IEEE TENCON'],
    meta: 'Team Rover71 · 8th globally',
    journey: [],
    gallery: [],
  },
  {
    art: 'obliquewing',
    title: 'Oblique-Wing UAV',
    url: null,
    description:
      'A flying prototype of the NASA AD-1 oblique-wing configuration, designed and built independently, with a custom 3D-printed EDF propulsion unit and a thrust-configuration test campaign behind it.',
    tags: ['Aerodynamics', 'EDF Propulsion', '3D Printing'],
    meta: 'Independent · Team Lead',
    journey: [],
    gallery: [],
  },
];


export const publications = [
  {
    title:
      'Range-Resolution Limits of RIS-Assisted Radar: An Element-Bandwidth Criterion and Its Full-Wave Test',
    venue:
      'IEEE International Conference on Communications (ICC), SAC: Integrated Sensing and Communication',
    place: null,
    year: '2027',
    status: 'Submitted',
    doi: null,
    url: null,
    abstract: '',
    presentation: null,
  },
  {
    title:
      'The Cross-Track Information Cost of Weakly Observable Landmark Orientation: A Closed-Form Retention Law and Its Operating Conditions in Visual Teach-and-Repeat',
    venue: 'Journal of Field Robotics (Wiley)',
    place: null,
    year: '2026',
    status: 'Under review',
    doi: null,
    url: null,
    abstract: '',
    presentation: null,
  },
  {
    title: 'A Framework for Resilient Power Systems in CanSat-class Reusable Small Satellites',
    venue: '26th International Middle East Power Systems Conference (MEPCON)',
    place: 'Egypt',
    year: '2025',
    doi: '10.1109/MEPCON66918.2026.11360120',
    url: 'https://doi.org/10.1109/MEPCON66918.2026.11360120',
    presentation: {
      url: 'https://www.researchgate.net/publication/399988039_A_Framework_for_Resilient_Power_Systems_in_Cansat-class_Reusable_Small_Satellites_Presentation',
      doi: '10.13140/RG.2.2.35697.34405',
      presenterNote: 'I presented this paper at MEPCON 2025 via online.',
    },
    abstract: 'This paper presents the design and implementation of an Electrical Power System for recoverable small-satellite platforms used in educational and experimental missions. General orbital CubeSats, which are not designed to be retrieved after launch, differ from CanSat-class payloads and balloon-based test vehicles, which can be recovered. The proposed framework ReSS-EPS (Electrical Power System for Reusable Small Satellites) integrates mission load profiling, analytical power budgeting, converter-aware simulations using MATLAB and modular PCB design to connect conceptual design with practical hardware. MATLAB simulation results characterize converter efficiency, battery charge-discharge dynamics and characteristics, and runtime margins and provide guidance for architecture optimization. The hardware design utilizes dual Li-ion storage to maintain a reliable power supply, preventing power loss during periods of high current consumption. It features regulated power rails and includes an isolated recovery module to provide redundancy. The implemented system achieves reliable operation with validated runtime margins and fault-tolerant recovery, demonstrating ReSS-EPS as a cost-effective and reusable solution for small satellite missions.',
  },
  {
    title:
      'LIFE-MAP: An Indigenous Biosignature Detection Protocol Using Multi-Biomolecule Based Analysis',
    venue: 'IEEE Region 10 Conference (TENCON)',
    place: 'Malaysia',
    year: '2025',
    doi: '10.1109/TENCON66050.2025.11375044',
    url: 'https://doi.org/10.1109/TENCON66050.2025.11375044',
    presentation: {
      url: 'https://www.researchgate.net/publication/399401508_LIFE-MAP_An_Indigenous_Biosignature_Detection_Protocol_Using_Multi-Biomolecule_Based_Analysis_Presentation',
      doi: '10.13140/RG.2.2.27907.16167',
      presenterNote: null,
    },
    abstract: 'This paper introduces LIFE-MAP (Life Investigation Framework for Extraterrestrial Mapping and Analysis Protocol), a modular system developed to accurately identify biosignatures in extraterrestrial environments. Combining advanced mechanical, electronic, and sensor technologies, LIFE-MAP integrates biomolecular assays, microbial volatile organic compound (mVOC) analysis, and environmental monitoring to classify samples as Extant, Extinct, or NPL (No Presence of Life). With specialized sensors designed to detect proteins, carbohydrates, chlorophyll, and microbial byproducts like ethanol and formaldehyde. The system provides precise astrobiological detection using multibiomolecule based soil analysis and CNN based rock analysis. The modular design of LIFE-MAP enables seamless integration with robotic platforms, including Mars rovers. This system marks a significant advancement in life-detection technologies, drawing inspiration from exploration missions to extreme environments where life adapts to harsh conditions, including nuclear disaster sites. The system-s ability to assess all parameters positions it as a vital tool for future missions, offering a comprehensive and efficient approach to detect life across a range of extreme environments.',
  },
];


export const posters = [
  {
    title: 'A Conceptual Review of Quantum Entanglement and the EPR Paradox',
    url: 'https://www.researchgate.net/publication/400336650_A_Conceptual_Review_of_Quantum_Entanglement_and_the_EPR_Paradox',
    image: asset('poster-quantum-entanglement.jpg'),
    thumb: asset('poster-quantum-entanglement-thumb.jpg'),
    date: 'March 2024',
    year: '2024',
    doi: '10.13140/RG.2.2.16524.78724',
    intro:
      "A literature-based conceptual overview of quantum entanglement — “spooky action at a distance” — framed around the Einstein–Podolsky–Rosen paradox and Einstein's critique of nonlocality.",
    abstract:
      "This poster presents a literature-based and conceptual overview of quantum entanglement, often referred to as “spooky action at a distance,” with emphasis on its theoretical foundations and historical context. Framed around the Einstein–Podolsky–Rosen (EPR) paradox and Einstein's critique of nonlocality, the discussion synthesizes established explanations of superposition, entangled states, wavefunction collapse, and the no-signaling theorem from textbooks and peer-reviewed sources. The poster explains how quantum entanglement leads to strong correlations between spatially separated particles without violating relativistic causality. No original experimental or numerical results are presented; the work is intended as an educational review introducing students and early researchers to this foundational quantum phenomenon and its relevance to modern quantum communication technologies.",
  },
  {
    title: 'A Comprehensive Review of the Aerodynamic Characteristics of Oblique-Wing Aircraft',
    url: 'https://www.researchgate.net/publication/400336610_A_Comprehensive_Review_of_the_Aerodynamic_Characteristics_of_Oblique-Wing_Aircraft',
    image: asset('poster-oblique-wing.jpg'),
    thumb: asset('poster-oblique-wing-thumb.jpg'),
    date: 'February 2024',
    year: '2024',
    doi: '10.13140/RG.2.2.14641.95844',
    intro:
      'A review of the aerodynamic behaviour of oblique-wing aircraft, where the wing rotates about the fuselage so sweep angle differs between the two sides — trading reduced wave drag at high subsonic and supersonic speeds against the asymmetry it introduces.',
    abstract:
      'Oblique-wing aircraft represent a distinctive unconventional configuration in which the wing rotates about the fuselage, allowing its sweep angle to vary between the two sides of the aircraft. This configuration offers the potential to reduce wave drag at high subsonic and supersonic speeds while maintaining favorable aerodynamic characteristics during lower-speed flight. However, the asymmetric geometry introduced by wing rotation produces complex aerodynamic interactions, including variations in lift distribution, pitching moment, side force, and induced drag. This review examines the fundamental aerodynamic characteristics of oblique-wing aircraft across different flight conditions and wing orientations. Particular attention is given to the effects of wing sweep angle, aspect ratio, Mach number, angle of attack, and configuration geometry on aerodynamic performance and stability. Previous analytical, computational, and experimental studies are compared to identify major aerodynamic trends, design challenges, and performance advantages. The review also discusses the potential of modern computational fluid dynamics and optimization techniques for improving oblique-wing configurations. Overall, oblique-wing technology demonstrates significant potential for achieving efficient high-speed flight while retaining adaptable aerodynamic performance, although aerodynamic asymmetry, structural complexity, and flight-control requirements remain important challenges for practical implementation.',
  },
];

/** Listed newest first, like every other dated list on the site. */
export const grants = [
  {
    period: 'Jul 2024 — Jun 2025',
    title:
      'Design & Development of a Scientific Exploration and Environmental Analysis Module for Assessing Interplanetary Habitability',
    team: 'Team Rover71',
    fund: 'Joint Research Fund by University Grants Commission of Bangladesh',
    issuedBy: 'Research Cell of Aviation and Aerospace University, Bangladesh',
    principalInvestigator: 'Asst Prof Samin Rahman',
  },
  {
    period: 'Oct 2023 — Jun 2024',
    title:
      'Design and Development of an Indigenous Mars Rover for Inter-planetary Scientific Exploration',
    team: 'Team Rover71',
    fund: 'Joint Research Fund by University Grants Commission of Bangladesh',
    issuedBy: 'Research Cell of Aviation and Aerospace University, Bangladesh',
    principalInvestigator: 'Air Cdre (Retd) Dr. Md Afzal Hossain',
  },
];

export const education = [
  {
    date: '2023 — 2027 (Expected)',
    degree: 'BSc in Avionics Engineering',
    school: 'Aviation and Aerospace University, Bangladesh',
    schoolUrl: 'https://aaub.edu.bd',
    location: 'Lalmonirhat, Bangladesh',
    result:
      'CGPA 3.62 / 4.00 (through 6th semester) · under the supervision of Bangladesh Air Force',
    detail:
      'Thesis: RIS-assisted Integrated Sensing and Communication (ISAC), in two subsystems — the range-resolution limits of a reconfigurable intelligent surface, derived as an element-bandwidth criterion and tested against CST full-wave simulation and hardware measurement; and 5G downlink sensing, measuring how sensing degrades as scheduler load changes.',
    curriculumUrl: asset('avionics-curriculum.pdf'),
    curriculumFileName: 'AAUB-Avionics-Engineering-Curriculum-OBE.pdf',
    /* The curriculum document predates both renamings, so it carries the old
       university and department names on its cover. */
    namingNote:
      'Until July 2024 the university was Bangabandhu Sheikh Mujibur Rahman Aviation & Aerospace University (BSMRAAU); it is now Aviation & Aerospace University, Bangladesh (AAUB). The department was then Aeronautical Engineering (Avionics) and is now Avionics Engineering. The curriculum document below predates both changes and carries the former names.',
    coursework: [
      {
        group: 'Communication',
        items: [
          'Fourier & Laplace Transform',
          'Signal and System',
          'Digital Signal Processing',
          'Communication System',
          'Electromagnetic Field Theory',
          'Microwave & Antennas',
          'RADAR Engineering',
        ],
      },
      {
        group: 'Electrical & Electronics',
        items: [
          'Electrical & Electronic Circuit Analysis',
          'Digital Logic & Computer Design',
          'Microprocessor & Micro Controller',
          'Real-Time Embedded System',
          'VLSI',
          'Data Structure & Algorithm',
        ],
      },
      {
        group: 'Mechanics',
        items: [
          'Modeling and Simulation',
          'Statics and Dynamics',
          'Control System',
          'Electric Machines & Drive',
        ],
      },
      {
        group: 'Avionics System Design',
        items: ['Aircraft Electrical, Instrument and Autopilot Systems'],
      },
    ],
  },
  {
    date: '2022',
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Notre Dame College',
    schoolUrl: 'https://ndc.edu.bd',
    location: 'Dhaka, Bangladesh',
    result: 'Perfect GPA — 5.00 / 5.00',
    detail: null,
    coursework: null,
  },
  {
    date: '2020',
    degree: 'Secondary School Certificate (SSC)',
    school: 'Kushtia Zilla School',
    schoolUrl: null,
    location: 'Kushtia, Bangladesh',
    result: 'Perfect GPA — 5.00 / 5.00 · National Merit Scholarship',
    detail: null,
    coursework: null,
  },
];

export const awards = [
  { year: '2025', title: 'Global Finalist', detail: 'CanSat Competition 2025, Virginia, USA' },
  {
    year: '2025',
    title: 'Global Finalist',
    detail: 'Anatolian Rover Challenge 2025 finals qualification, Turkey',
  },
  {
    year: '2022',
    title: 'National Champion',
    detail: 'Dr. Muhammad Shahidullah Memorial Debate Festival, Dhaka University',
  },
  { year: '2022', title: 'Winner', detail: 'ATN Bangla Television Public Parliament' },
  {
    year: '2021',
    title: 'National Champion',
    detail: 'BTV Chattogram Inter College National Debate Competition',
  },
  {
    year: '2019',
    title: 'National Champion',
    detail: 'BTV Chattogram Inter School National Debate Competition',
  },
  {
    year: '2019',
    title: 'Best Science Project Award',
    detail: 'Khulna Divisional Science & Project Fair',
  },
  {
    year: '2018',
    title: 'National Finalist',
    detail: 'Bangladesh Physics Olympiad, Junior Category',
  },
  { year: '2018', title: 'National Finalist', detail: 'Bangladesh Math Olympiad, Junior Category' },
];

export const leadership = [
  { period: '2026 — Present', role: 'President', org: 'AAUB Debating Club (AAUB-DC)' },
  { period: '2022 — 2023', role: 'Office Secretary', org: 'Kushtia Debating Society (KDS)' },
  {
    period: '2021 — 2023',
    role: 'Core Debater & Executive Member',
    org: 'Notre Dame Debating Club (NDDC)',
  },
  { period: '2020 — 2022', role: 'Vice President', org: 'Kushtia Science Research Club (KSRC)' },
  {
    period: '2018 — 2020',
    role: 'Core Debater & Joint General Secretary',
    org: 'Kushtia Zilla School Debating Club (KZSDC)',
  },
];

/** Placeholder scores — update when the real ones land. */
export const testScores = [
  { label: 'GRE', score: '000', note: 'Quant 000' },
  { label: 'IELTS', score: '0.0', note: null },
];

/**
 * `relation` is the affiliation to me — the left-hand label on the card.
 * An entry with no `name` is skipped entirely rather than rendering an empty
 * row, so unfinished referees never show on the live page. A missing `email`
 * just omits that line.
 */
export const references = [
  {
    relation: 'Thesis Supervisor',
    name: 'Air Commodore Dr. Mohammad Akhter Jamil',
    role: 'Dean',
    org: 'Aviation and Aerospace University, Bangladesh',
    email: 'jamil8703@gmail.com',
  },
  {
    relation: 'Project Supervisor',
    name: 'Air Commodore (Retd) Dr. Md Afzal Hossain',
    role: 'Distinguished Professor',
    org: 'Aviation and Aerospace University, Bangladesh',
    email: 'afzal@aaub.edu.bd',
  },
  {
    relation: 'Research Supervisor',
    name: 'Dr. Md-Mizanur Rahoman',
    role: 'Professor',
    org: 'Begum Rokeya University, Rangpur, Bangladesh',
    email: 'mizan@brur.ac.bd',
  },
  {
    relation: 'Course Instructor',
    name: 'Dr. S.M. Sadakatul Bari',
    role: 'Chairman',
    org: 'Aviation and Aerospace University, Bangladesh',
    email: 'smsbari@aaub.edu.bd',
  },
  {
    relation: 'Course Instructor',
    name: 'Md Samin Rahman',
    role: 'Assistant Professor',
    org: 'Aviation and Aerospace University, Bangladesh',
    email: 'samin@aaub.edu.bd',
  },
];

/**
 * Verbatim from the master resume's Skills table.
 * `hi` marks the terms the LaTeX source highlights; `note` is the parenthetical.
 */
export const skills = [
  {
    category: 'Wireless & 5G',
    items: [
      { name: 'OpenAirInterface', hi: true, note: 'gNB, core network' },
      { name: '5G NR', hi: true, note: 'TDD, SSB, CSI-RS, PDSCH, scheduling' },
      { name: 'OFDM Radar / ISAC', hi: true },
      { name: 'MATLAB 5G Toolbox' },
    ],
  },
  {
    category: 'Programming & AI',
    items: [
      { name: 'Python', hi: true, note: 'NumPy, SciPy, scikit-learn, OpenCV' },
      { name: 'C++', hi: true },
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Computer Vision', note: 'YOLOv8', noteHi: true },
    ],
  },
  {
    category: 'Modeling & Simulation',
    items: [
      { name: 'MATLAB/Simulink', hi: true, note: 'Signal Processing & System Modeling' },
      { name: 'GTSAM', hi: true, note: 'Factor-Graph Estimation' },
      { name: 'CST Studio Suite', hi: true, note: 'RF & Antenna Design' },
      { name: 'LTspice', hi: true, note: 'Analog & Power Circuit Simulation' },
    ],
  },
  {
    category: 'Hardware & Embedded Systems',
    items: [
      { name: 'Altium Designer', hi: true, note: 'PCB Design' },
      { name: 'FreeRTOS', hi: true, note: 'Embedded Real-Time Systems' },
      { name: 'SDR', hi: true, note: 'ADALM-Pluto (libiio), GNU Radio, USRP B210' },
      { name: 'Real-Time C++', hi: true, note: 'CMake, Ring Buffers, UDP Streaming' },
    ],
  },
  {
    category: 'Design & Development Tools',
    items: [
      { name: 'Qt 6', hi: true, note: 'Desktop GUI Development' },
      { name: 'React', hi: true, note: 'Vite, Tailwind CSS' },
      { name: 'Git & GitHub' },
      { name: 'pytest' },
      { name: 'Visual Studio Code' },
    ],
  },
  {
    category: 'Technical Writing',
    items: [
      { name: 'LaTeX', hi: true, note: 'Scientific Writing' },
      { name: 'Notion', note: 'Knowledge Management' },
    ],
  },
  {
    category: 'Leadership & Communication',
    items: [
      { name: 'Team Leadership' },
      { name: 'Technical Presentation' },
      { name: 'Proposal Writing' },
      { name: 'Fundraising' },
    ],
  },
];
