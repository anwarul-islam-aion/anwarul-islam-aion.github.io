import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import { BEAM_TARGETS, INCIDENT_MS, INCIDENT_START, LANDING, RIS_AT, beamStart } from '../lib/arrival';

/* A click re-transmits: base station -> RIS -> the card that just opened. */
const RETRANSMIT = { incidentAt: 0, incidentMs: 280, reflectAt: 240, flightMs: 300, life: 1500 };
const ARRIVAL_LIFE = 2400;

/**
 * Beam with a rounded tip: a wedge from the source, capped by a cubic that
 * bulges past the target. A flat far edge reads as a triangle; this reads as a
 * lobe.
 */
function lobe(from, to, startHalf, endHalf) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux; // unit normal
  const k = endHalf * 1.34; // how far the cap bulges past the target

  const p = (x, y) => `${x.toFixed(1)} ${y.toFixed(1)}`;
  const a = p(from.x + nx * startHalf, from.y + ny * startHalf);
  const b = p(to.x + nx * endHalf, to.y + ny * endHalf);
  const c1 = p(to.x + nx * endHalf + ux * k, to.y + ny * endHalf + uy * k);
  const c2 = p(to.x - nx * endHalf + ux * k, to.y - ny * endHalf + uy * k);
  const d = p(to.x - nx * endHalf, to.y - ny * endHalf);
  const e = p(from.x - nx * startHalf, from.y - ny * startHalf);

  return `M ${a} L ${b} C ${c1} ${c2} ${d} L ${e} Z`;
}

/* Deterministic per-tick noise — cheaper and steadier than Math.random(). */
const noise = (i, seed) => {
  const x = Math.sin(seed * 9301 + i * 49297) * 43758.5453;
  return x - Math.floor(x);
};

const centreOf = (key) => {
  const el = document.querySelector(`[data-beam="${key}"]`);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  if (!r.width && !r.height) return null;
  return { key, x: r.left + r.width / 2, y: r.top + r.height / 2 };
};

/** Lattice mast with radiating arcs — the transmitter. Also used by <Fleet />. */
export function BaseStation() {
  return (
    <g stroke="var(--color-navy)" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g strokeWidth="2">
        <path d="M-13 4 L-4 -38 L4 -38 L13 4" />
        <path d="M0 -38 V-52" />
      </g>
      {/* lattice bracing */}
      <g strokeWidth="1.1" opacity="0.75">
        <path d="M-10 -10 L10 -10 M-7 -24 L7 -24" />
        <path d="M-13 4 L7 -24 M13 4 L-7 -24 M-10 -10 L4 -38 M10 -10 L-4 -38" />
      </g>
      <circle cx="0" cy="-55" r="2.2" fill="var(--color-navy)" stroke="none" />
      <ellipse cx="0" cy="5" rx="17" ry="3.4" strokeWidth="1.4" opacity="0.5" />
      {/* radiation */}
      <g strokeWidth="2" strokeLinecap="round">
        <path d="M-13 -50 A 17 17 0 0 0 -13 -30" opacity="0.75" />
        <path d="M-20 -54 A 25 25 0 0 0 -20 -26" opacity="0.45" />
        <path d="M13 -50 A 17 17 0 0 1 13 -30" opacity="0.75" />
        <path d="M20 -54 A 25 25 0 0 1 20 -26" opacity="0.45" />
      </g>
    </g>
  );
}

/** Tilted panel of unit cells — the reflecting surface. Also used by <Fleet />. */
export function RisPanel() {
  const cells = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      cells.push(
        <rect
          key={`${row}-${col}`}
          x={-24 + col * 12.5}
          y={-34 + row * 13.6}
          width="9.5"
          height="10.6"
          rx="1"
          fill="var(--color-navy)"
          fillOpacity="0.16"
          stroke="var(--color-navy)"
          strokeOpacity="0.5"
          strokeWidth="0.9"
        />,
      );
    }
  }
  return (
    <g>
      <rect
        x="-30"
        y="-40"
        width="60"
        height="80"
        rx="2"
        fill="var(--color-surface)"
        fillOpacity="0.75"
        stroke="var(--color-navy)"
        strokeWidth="2.4"
      />
      {cells}
    </g>
  );
}

/**
 * Persistent transmission field. The base station and RIS stay on the page;
 * beams are transient and fire twice — once as the page assembles, and again
 * each time a section is opened, so navigating reads as a re-transmission.
 */
export default function BeamField({ active }) {
  const reduced = usePrefersReducedMotion();
  const [nodes, setNodes] = useState(null);
  const [shot, setShot] = useState(null);
  const [tick, setTick] = useState(0);
  const seq = useRef(0);
  const first = useRef(true);

  // Slow heartbeat driving the readouts under each node.
  useEffect(() => {
    if (reduced) return undefined;
    const id = setInterval(() => {
      if (!document.hidden) setTick((t) => t + 1);
    }, 620);
    return () => clearInterval(id);
  }, [reduced]);

  const telemetry = useMemo(() => {
    const bits = Array.from({ length: 8 }, (_, i) => (noise(i, tick) > 0.5 ? '1' : '0')).join('');
    const phases = Array.from(
      { length: 2 },
      (_, i) => [0, 90, 180, 270][Math.floor(noise(i + 11, tick) * 4)],
    );
    return {
      bits: `${bits.slice(0, 4)} ${bits.slice(4)}`,
      phases: phases.map((p) => String(p).padStart(3, '0')).join(' '),
    };
  }, [tick]);

  useLayoutEffect(() => {
    if (reduced) return undefined;
    if (!globalThis.matchMedia?.('(min-width: 64rem)').matches) return undefined;

    const place = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setNodes({
        w,
        h,
        bs: { x: 44, y: h - 52 },
        ris: { x: w - 44, y: 46 },
      });
    };

    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [reduced]);

  useEffect(() => {
    if (!nodes) return undefined;

    const isArrival = first.current;
    first.current = false;

    const targets = isArrival
      ? BEAM_TARGETS.map(centreOf)
          .filter(Boolean)
          .map((t) => ({
            ...t,
            delay: beamStart(t.key),
            ext: 300,
            hold: 300,
            pulseAt: LANDING[t.key],
          }))
      : [centreOf('card')]
          .filter(Boolean)
          .map((t) => ({
            ...t,
            delay: RETRANSMIT.reflectAt,
            ext: RETRANSMIT.flightMs,
            hold: 190,
            pulseAt: RETRANSMIT.reflectAt + RETRANSMIT.flightMs,
          }));

    if (!targets.length) return undefined;

    const id = seq.current + 1;
    seq.current = id;
    setShot({
      id,
      targets,
      incident: isArrival
        ? { delay: INCIDENT_START, ext: INCIDENT_MS, hold: RIS_AT }
        : { delay: RETRANSMIT.incidentAt, ext: RETRANSMIT.incidentMs, hold: 120 },
    });

    const t = setTimeout(
      () => setShot((s) => (s && s.id === id ? null : s)),
      isArrival ? ARRIVAL_LIFE : RETRANSMIT.life,
    );
    return () => clearTimeout(t);
  }, [nodes, active]);

  if (reduced || !nodes) return null;

  const { w, h, bs, ris } = nodes;
  const reach = Math.hypot(w, h);

  return (
    <svg
      className="pointer-events-none fixed inset-0 z-40"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {/* Energy falls off with distance from the surface, so every reflected
            beam fades on its own without per-beam gradients. */}
        <radialGradient
          id="ris-falloff"
          gradientUnits="userSpaceOnUse"
          cx={ris.x}
          cy={ris.y}
          r={reach * 0.9}
        >
          <stop offset="0" stopColor="var(--color-nav)" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="var(--color-nav)" stopOpacity="0.24" />
          <stop offset="1" stopColor="var(--color-nav)" stopOpacity="0.04" />
        </radialGradient>

        <linearGradient
          id="incident-falloff"
          gradientUnits="userSpaceOnUse"
          x1={bs.x}
          y1={bs.y}
          x2={ris.x}
          y2={ris.y}
        >
          <stop offset="0" stopColor="var(--color-navy)" stopOpacity="0.4" />
          <stop offset="1" stopColor="var(--color-nav)" stopOpacity="0.42" />
        </linearGradient>
      </defs>

      {/* Beams are keyed by shot id so each transmission restarts cleanly. */}
      {shot && (
        <g key={shot.id}>
          <path
            className="beam-incident"
            style={{
              transformOrigin: `${bs.x}px ${bs.y}px`,
              '--d': `${shot.incident.delay}ms`,
              '--ext': `${shot.incident.ext}ms`,
              '--hold': `${shot.incident.hold}ms`,
            }}
            d={lobe({ x: bs.x, y: bs.y - 44 }, ris, 3, 13)}
            fill="url(#incident-falloff)"
          />

          {shot.targets.map((t) => (
            <path
              key={t.key}
              className="beam"
              style={{
                transformOrigin: `${ris.x}px ${ris.y}px`,
                '--d': `${t.delay}ms`,
                '--ext': `${t.ext}ms`,
                '--hold': `${t.hold}ms`,
              }}
              d={lobe(ris, t, 4, 17)}
              fill="url(#ris-falloff)"
            />
          ))}

          {shot.targets.map((t) => (
            <circle
              key={`${t.key}-pulse`}
              className="beam-pulse"
              style={{ '--d': `${t.pulseAt}ms` }}
              cx={t.x}
              cy={t.y}
              r="9"
              stroke="var(--color-nav)"
              strokeWidth="1.25"
            />
          ))}
        </g>
      )}

      {/* Nodes persist for the life of the page. The label sits outside the
          transformed glyph so it stays upright. */}
      <g className="beam-node" style={{ '--d': `${INCIDENT_START}ms` }}>
        <g transform={`translate(${bs.x} ${bs.y}) scale(0.95)`}>
          <BaseStation />
        </g>
        <text className="node-label" x={bs.x} y={bs.y + 20} textAnchor="middle">
          BASE STATION
        </text>
        <text className="node-code" x={bs.x} y={bs.y + 32} textAnchor="middle">
          TX {telemetry.bits}
        </text>
      </g>

      <g className="beam-node" style={{ '--d': `${RIS_AT}ms` }}>
        <g transform={`translate(${ris.x} ${ris.y}) rotate(-16) skewY(-9) scale(0.78)`}>
          <RisPanel />
        </g>
        {/* Short labels: the gutter beside the card is only ~80px wide. */}
        <text className="node-label" x={ris.x} y={ris.y + 48} textAnchor="middle">
          RIS
        </text>
        <text className="node-code" x={ris.x} y={ris.y + 60} textAnchor="middle">
          Φ {telemetry.phases}
        </text>
      </g>
    </svg>
  );
}
