import { LANDO } from './lando';
import { TECH_FOUNDERS } from './founders.tech';
import { COMMERCE_FOUNDERS } from './founders.commerce';
import { CULTURE_FOUNDERS } from './founders.culture';
import type { Founder, SectorId } from './types';

export * from './types';
export { LANDO, LANDO_QUOTE } from './lando';

/** Every profile on the site. The lead profile always sorts first. */
export const FOUNDERS: Founder[] = [
  LANDO,
  ...TECH_FOUNDERS,
  ...COMMERCE_FOUNDERS,
  ...CULTURE_FOUNDERS,
];

export const FOUNDER_BY_SLUG = Object.fromEntries(
  FOUNDERS.map((f) => [f.slug, f]),
) as Record<string, Founder | undefined>;

export function foundersInSector(sector: SectorId): Founder[] {
  return FOUNDERS.filter((f) => f.sector === sector);
}

/**
 * Deterministic "related reading" — same sector first, then anyone else,
 * skipping the profile being read. Deterministic so server and client agree
 * and so the same profile always suggests the same follow-ups.
 */
export function relatedFounders(current: Founder, count = 3): Founder[] {
  const sameSector = FOUNDERS.filter(
    (f) => f.slug !== current.slug && f.sector === current.sector,
  );
  const rest = FOUNDERS.filter(
    (f) => f.slug !== current.slug && f.sector !== current.sector,
  );
  return [...sameSector, ...rest].slice(0, count);
}

/** Cards for the homepage grid, lead profile excluded (it has its own slot). */
export const ARCHIVE: Founder[] = FOUNDERS.filter((f) => !f.lead);

/** Sorted oldest-first by birth year, for the timeline page. */
export const BY_ERA: Founder[] = [...FOUNDERS].sort(
  (a, b) => parseInt(a.born, 10) - parseInt(b.born, 10),
);
