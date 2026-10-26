/**
 * Arrival choreography, in one place.
 *
 * The page assembles as a transmission: a base station in the lower-left corner
 * fires an incident beam at a reconfigurable intelligent surface hanging off the
 * upper-right corner, and the RIS fans reflected beams out to each element. An
 * element fades in as its beam reaches it, so the beams and the content must
 * share one set of numbers — that is what this module is for.
 *
 * `landing` is when the element appears; a beam therefore leaves the RIS
 * FLIGHT_MS earlier.
 */

export const INCIDENT_START = 80;
export const INCIDENT_MS = 360; // base station -> RIS
export const RIS_AT = INCIDENT_START + INCIDENT_MS; // RIS energises
export const FLIGHT_MS = 300; // RIS -> target
export const BEAM_HOLD = 300; // beam lingers after landing
export const BEAM_FADE = 460;
export const TEARDOWN_MS = 2300; // overlay unmounts

/** Landing times, keyed to the `data-beam` attribute on each element. */
export const LANDING = {
  portrait: 820,
  name: 900,
  rotator: 980,
  card: 980,
  nav: 1060,
  resume: 1140,
  socials: 1220,
  railRight: 1300,
};

/** Nav items cascade after their shared beam lands. */
export const NAV_STEP = 50;

/** Targets that get their own reflected beam. */
export const BEAM_TARGETS = ['portrait', 'name', 'card', 'nav', 'resume', 'socials', 'railRight'];

export const beamStart = (key) => Math.max(RIS_AT, LANDING[key] - FLIGHT_MS);
