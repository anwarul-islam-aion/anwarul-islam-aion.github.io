/**
 * Monoline schematics standing in for project screenshots — a radar PPI, an
 * RIS link budget, a CanSat descent, a rover science pass, an oblique wing.
 * Deliberately static: these are the shapes the animated pass will drive later.
 */

const frame = {
  viewBox: '0 0 200 120',
  className: 'h-full w-full',
  'aria-hidden': 'true',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.4',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function Radar() {
  return (
    <svg {...frame}>
      <circle cx="100" cy="60" r="46" opacity="0.28" />
      <circle cx="100" cy="60" r="31" opacity="0.4" />
      <circle cx="100" cy="60" r="16" opacity="0.55" />
      <path d="M54 60h92M100 14v92" opacity="0.22" />
      <path d="M100 60 100 14A46 46 0 0 1 139 81Z" fill="currentColor" opacity="0.1" stroke="none" />
      <path d="M100 60 139 81" opacity="0.85" />
      <circle cx="126" cy="40" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="79" cy="79" r="2" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="112" cy="88" r="1.6" fill="currentColor" stroke="none" opacity="0.4" />
    </svg>
  );
}

function Isac() {
  return (
    <svg {...frame}>
      {/* base station */}
      <path d="M28 96V50M22 96h12" />
      <path d="m28 50-7 10M28 50l7 10" opacity="0.7" />
      {/* reconfigurable intelligent surface */}
      <g opacity="0.75">
        <path d="M150 22 176 34v56l-26 12z" opacity="0.45" />
        <path d="M150 40 176 52M150 58 176 70M150 76 176 88" opacity="0.5" />
        <path d="M163 28v66" opacity="0.5" />
      </g>
      {/* uplink to surface, reflected beam to target */}
      <path d="M34 56C74 34 110 26 148 26" opacity="0.85" />
      <path d="M150 66C124 78 106 86 88 96" opacity="0.85" strokeDasharray="5 4" />
      {/* sensed target */}
      <circle cx="82" cy="99" r="5" opacity="0.9" />
      <circle cx="82" cy="99" r="11" opacity="0.3" />
    </svg>
  );
}

function CanSat() {
  return (
    <svg {...frame}>
      {/* canopy */}
      <path d="M62 40a30 30 0 0 1 60 0" opacity="0.8" />
      <path d="M62 40q30 16 60 0" opacity="0.35" />
      <path d="M62 40 92 66M92 40v26M122 40 92 66" opacity="0.5" />
      {/* the can */}
      <rect x="80" y="66" width="24" height="34" rx="4" />
      <path d="M80 76h24M80 88h24" opacity="0.4" />
      {/* telemetry */}
      <path d="M112 70q10 4 14 14M118 64q16 6 22 24" opacity="0.55" />
      {/* horizon */}
      <path d="M20 108h160" opacity="0.25" />
    </svg>
  );
}

function Rover() {
  return (
    <svg {...frame}>
      {/* chassis + mast */}
      <rect x="58" y="56" width="62" height="24" rx="4" />
      <path d="M84 56V38h22" />
      <circle cx="112" cy="34" r="5" opacity="0.85" />
      {/* wheels */}
      <circle cx="72" cy="88" r="9" />
      <circle cx="106" cy="88" r="9" />
      <path d="M72 80v-4M106 80v-4" opacity="0.5" />
      {/* science arm sampling */}
      <path d="M120 66h18l8 14" opacity="0.7" />
      <path d="M146 80v8" opacity="0.7" />
      {/* spectrum readout */}
      <path d="M150 44h34M150 52h24M150 60h30" opacity="0.4" />
      {/* regolith */}
      <path d="M16 100h168" opacity="0.25" />
      <path d="M138 100q6-6 12 0" opacity="0.35" />
    </svg>
  );
}

function ObliqueWing() {
  return (
    <svg {...frame}>
      {/* fuselage */}
      <path d="M62 60h72l14 8-14 8H62z" opacity="0.9" transform="translate(0,-8)" />
      <path d="M62 52q-12 8 0 16" opacity="0.9" />
      {/* the wing, skewed the way AD-1 does it */}
      <path d="M42 82 158 34" opacity="0.9" />
      <path d="M46 88 162 40" opacity="0.5" />
      <path d="M42 82 46 88M158 34l4 6" opacity="0.5" />
      {/* pivot */}
      <circle cx="102" cy="58" r="4" opacity="0.9" />
      {/* airflow */}
      <path d="M18 40h22M18 60h30M18 80h22" opacity="0.3" />
    </svg>
  );
}

/** Ring of flared tapers around a head, with two paths crossing through it. */
function Vivaldi() {
  return (
    <svg {...frame}>
      <ellipse cx="100" cy="60" rx="29" ry="35" opacity="0.5" />
      <ellipse cx="100" cy="60" rx="21" ry="26" opacity="0.26" />
      <circle cx="109" cy="51" r="4" fill="currentColor" stroke="none" opacity="0.5" />

      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 60)`} opacity="0.72">
          <path d="M150 60 l10 -7 M150 60 l10 7 M150 60 h-6" />
        </g>
      ))}

      <path d="M66 40 L134 78" opacity="0.3" strokeDasharray="3 4" />
      <path d="M66 80 L134 42" opacity="0.3" strokeDasharray="3 4" />
    </svg>
  );
}

/** A taught corridor, surveyed poles, and the lateral fixes taken off them. */
function Slam() {
  return (
    <svg {...frame}>
      <path d="M14 88 H186" opacity="0.32" />
      <path d="M14 32 H186" opacity="0.18" />
      <path d="M14 62 H186" opacity="0.3" strokeDasharray="6 5" />

      {[44, 78, 122, 156].map((x) => (
        <g key={x}>
          <path d={`M${x} 46 V28`} opacity="0.7" />
          <circle cx={x} cy="25" r="2.4" fill="currentColor" stroke="none" opacity="0.8" />
        </g>
      ))}

      <path d="M96 56 L78 34" opacity="0.45" strokeDasharray="3 4" />
      <path d="M104 56 L122 34" opacity="0.45" strokeDasharray="3 4" />

      <rect x="86" y="54" width="24" height="13" rx="2.5" />
      <circle cx="93" cy="69" r="2.6" opacity="0.8" />
      <circle cx="103" cy="69" r="2.6" opacity="0.8" />
    </svg>
  );
}

/** An altimeter beam to the ground, with a cellular tower radiating across it. */
function Altimeter() {
  return (
    <svg {...frame}>
      <path d="M12 100 H188" opacity="0.35" />

      {/* aircraft */}
      <path d="M58 28 h26 l10 7 h-46 z" opacity="0.8" />
      <path d="M52 32 h40" opacity="0.4" />
      <path d="M66 28 l5 -8 h5 l-2 8" opacity="0.55" />

      {/* altimeter beam to the ground */}
      <path
        d="M64 35 L50 100 L94 100 L82 35 Z"
        fill="currentColor"
        opacity="0.07"
        stroke="none"
      />
      <path d="M64 35 L50 100 M82 35 L94 100" opacity="0.45" />

      {/* the FMCW ramp it transmits */}
      <path d="M16 74 l9 -13 v13 l9 -13 v13" opacity="0.5" strokeWidth="1.1" />

      {/* C-band tower, radiating into the beam */}
      <path d="M152 100 V58 M146 100 h12" opacity="0.7" />
      <path d="m152 58 -5 7 M152 58 l5 7" opacity="0.55" />
      <path d="M140 52 A 17 17 0 0 0 140 72" opacity="0.5" />
      <path d="M133 47 A 25 25 0 0 0 133 77" opacity="0.3" />
    </svg>
  );
}

const registry = {
  radar: Radar,
  isac: Isac,
  vivaldi: Vivaldi,
  slam: Slam,
  altimeter: Altimeter,
  cansat: CanSat,
  rover: Rover,
  obliquewing: ObliqueWing,
};

export default function ProjectArt({ kind }) {
  const Art = registry[kind] ?? Radar;
  return (
    <div className="aspect-[5/3] w-full overflow-hidden rounded border-2 border-rule bg-paper-alt p-2 text-navy transition group-hover:border-navy/30 sm:translate-y-1">
      <Art />
    </div>
  );
}
