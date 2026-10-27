import { useLayoutEffect, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/**
 * Craft in the page margins: two drones crossing the top gutter in opposite
 * directions, a third holding station in the right gutter, and a rover crawling
 * the bottom.
 *
 * Same monoline hand as the base station and the RIS in <BeamField />, and the
 * same two gates: desktop only, because the gutters do not exist below `lg`,
 * and nothing at all under prefers-reduced-motion, since the whole point of
 * these is that they move.
 *
 * PLACEMENT RULES, all three worked out against what already occupies the
 * margins. Change a band and check it against these:
 *   - the RIS panel sits at (w-44, 46) and spans roughly y 15..77, so the top
 *     drone fades out well before it rather than flying through it;
 *   - the email rail is bottom-anchored on the right and reaches up about
 *     270px, so the hovering drone stays in the upper third;
 *   - the base station stands at (44, h-52) and the Resume button starts
 *     around 0.62w, so the rover runs between those two.
 */

const TOP_BAND = 20; // drone altitude in the top gutter
const ROVER_LIFT = 24; // rover height above the bottom edge

/** Quadcopter seen from the side, nose right. */
function Drone() {
  return (
    <g
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    >
      {/* Discs rather than blades: at this size a spinning rotor reads as a
          disc thinning and filling, which is what the scaleY keyframe does. */}
      <ellipse className="rotor" cx="-13" cy="-8" rx="8.5" ry="1.9" />
      <ellipse className="rotor" cx="13" cy="-8" rx="8.5" ry="1.9" style={{ animationDelay: '-0.18s' }} />

      <path d="M-13 -8 V-4 M13 -8 V-4" />
      <path d="M-13 -4 L-5.5 0 M13 -4 L5.5 0" />

      <rect
        x="-5.5"
        y="-0.5"
        width="11"
        height="7"
        rx="2.2"
        fill="var(--color-surface)"
        fillOpacity="0.85"
      />
      <circle cx="0" cy="3.2" r="1.5" />

      <path d="M-7 9.5 H7 M-3.5 6.5 V9.5 M3.5 6.5 V9.5" strokeWidth="1.1" opacity="0.8" />
    </g>
  );
}

/** One wheel plus a spoke cross that turns as the rover travels. */
function Wheel({ cx, delay }) {
  return (
    <g>
      <circle cx={cx} cy="7" r="4.6" fill="var(--color-surface)" fillOpacity="0.9" />
      <g className="wheel" style={{ animationDelay: delay }}>
        <path
          d={`M${cx - 3.1} 3.9 L${cx + 3.1} 10.1 M${cx - 3.1} 10.1 L${cx + 3.1} 3.9`}
          strokeWidth="1"
          opacity="0.55"
        />
      </g>
    </g>
  );
}

/** Rocker-bogie rover seen from the side, mast forward. */
function Rover() {
  return (
    <g
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    >
      {/* solar deck */}
      <path d="M-17 -7.5 H15" strokeWidth="1.6" />
      <path d="M-13 -7.5 V-10.5 M-5 -7.5 V-10.5 M3 -7.5 V-10.5 M11 -7.5 V-10.5" strokeWidth="0.9" opacity="0.45" />

      <rect
        x="-14"
        y="-7.5"
        width="27"
        height="10.5"
        rx="2"
        fill="var(--color-surface)"
        fillOpacity="0.85"
      />

      {/* mast and camera head */}
      <path d="M9 -7.5 V-15.5" />
      <rect
        x="5.5"
        y="-20"
        width="8"
        height="4.6"
        rx="1.2"
        fill="var(--color-surface)"
        fillOpacity="0.9"
      />
      <circle cx="9.5" cy="-17.7" r="1.05" />

      {/* rocker-bogie linkage */}
      <path d="M-10 3 L-4 6 L4 6 L10 3" strokeWidth="1.1" opacity="0.7" />

      <Wheel cx={-10} delay="0s" />
      <Wheel cx={0} delay="-0.4s" />
      <Wheel cx={10} delay="-0.8s" />
    </g>
  );
}

export default function Fleet() {
  const reduced = usePrefersReducedMotion();
  const [vp, setVp] = useState(null);

  useLayoutEffect(() => {
    if (reduced) return undefined;

    const place = () =>
      setVp({
        w: window.innerWidth,
        h: window.innerHeight,
        wide: globalThis.matchMedia?.('(min-width: 64rem)').matches ?? true,
      });
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [reduced]);

  if (reduced || !vp) return null;

  const { w, h, wide } = vp;

  /* Phone: there are no gutters to fly in, so the craft drift across the page
     itself. Held at 0.16 opacity and behind the fixed nav, which is why they
     read as weather over the card rather than as something to look at. */
  if (!wide) {
    /* Keyed by id, not by y: before the viewport reports a height every y is
       0 and React sees three children with the same key. */
    const drones = [
      { id: 'hi', y: h * 0.17, from: -40, travel: w + 90, dur: '31s', delay: '0s', bob: '9px' },
      { id: 'mid', y: h * 0.46, from: w + 40, travel: -(w + 90), dur: '38s', delay: '-16s', bob: '12px' },
      { id: 'low', y: h * 0.74, from: -40, travel: w + 90, dur: '44s', delay: '-27s', bob: '7px' },
    ];

    // No `craft-layer` class here: its fade-in animates opacity to 1, and an
    // animation outranks an inline style, so the craft would flash at full
    // strength on load before settling back to 0.16.
    return (
      <svg
        className="pointer-events-none fixed inset-0 z-20"
        style={{ color: 'var(--section-accent)', opacity: 0.45 }}
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        aria-hidden="true"
      >
        {drones.map((d) => (
          <g
            key={d.id}
            className="craft-cross"
            style={{ '--travel': `${d.travel}px`, animationDuration: d.dur, animationDelay: d.delay }}
          >
            <g className="craft-bob" style={{ '--bob': d.bob, animationDuration: '4.3s' }}>
              <g transform={`translate(${d.from} ${d.y})`}>
                <Drone />
              </g>
            </g>
          </g>
        ))}

        {/* The base station and the RIS are <BeamField />'s, at both widths, so
            that the beam it fires starts and reflects at the same two points. */}
      </svg>
    );
  }

  // Stop short of the RIS instead of crossing it.
  const topTravel = Math.max(w - 150, 240);
  // Upper third of the right gutter, clear of the RIS above and the email rail below.
  const hoverY = Math.min(Math.max(h * 0.33, 150), Math.max(h - 330, 160));
  const roverFrom = w * 0.2;
  const roverTravel = Math.max(w * 0.4, 200);

  return (
    <svg
      className="craft-layer pointer-events-none fixed inset-0 z-30"
      style={{ color: 'var(--color-navy)' }}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden="true"
    >
      {/* Top gutter, outbound: flies in from the left, fades before the RIS. */}
      <g className="craft-cross" style={{ '--travel': `${topTravel}px`, animationDuration: '27s' }}>
        <g className="craft-bob" style={{ '--bob': '6px', animationDuration: '3.4s' }}>
          <g transform={`translate(-40 ${TOP_BAND})`}>
            <Drone />
          </g>
        </g>
      </g>

      {/* Top gutter, inbound: the same band the other way, on a longer clock and
          started mid-run by a negative delay, so the two never pace each other.
          The glyph is symmetric, so flying left needs no mirroring. */}
      <g
        className="craft-cross"
        style={{
          '--travel': `${-(topTravel - 30)}px`,
          animationDuration: '34s',
          animationDelay: '-13s',
        }}
      >
        <g className="craft-bob" style={{ '--bob': '8px', animationDuration: '4.1s' }}>
          <g transform={`translate(${topTravel} ${TOP_BAND})`}>
            <Drone />
          </g>
        </g>
      </g>

      {/* Right gutter: station keeping. */}
      <g className="craft-bob" style={{ '--bob': '13px', animationDuration: '5.2s' }}>
        <g transform={`translate(${w - 46} ${hoverY})`}>
          <Drone />
        </g>
      </g>

      {/* Bottom gutter: a slow crawl between the base station and the buttons. */}
      <g
        className="craft-cross"
        style={{ '--travel': `${roverTravel}px`, animationDuration: '48s' }}
      >
        <g transform={`translate(${roverFrom} ${h - ROVER_LIFT})`}>
          <Rover />
        </g>
      </g>
    </svg>
  );
}
