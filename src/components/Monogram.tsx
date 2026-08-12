import { SECTOR_BY_ID, initials } from '@/data/types';
import type { Founder } from '@/data/types';

/**
 * Portrait slot for a profile.
 *
 * Where the publication holds photography rights the real image is used.
 * Everyone else gets a typographic portrait: initials set in the display face
 * over the sector colour. This is a deliberate editorial convention, not a
 * placeholder — no likeness rights are claimed for public figures.
 */
/**
 * Deterministic shade offset from the slug.
 *
 * Every founder in a sector sharing one flat colour made grids of four tech
 * profiles read as a single blue slab. Mixing each tile a fixed amount toward
 * black or white keeps the sector legible while giving the grid texture, and
 * being derived from the slug means a founder's tile never changes between
 * renders or pages.
 */
function shadeFor(slug: string, base: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  const step = (hash % 7) - 3; // -3…3
  if (step === 0) return base;
  return step < 0
    ? `color-mix(in oklab, ${base}, white ${Math.abs(step) * 7}%)`
    : `color-mix(in oklab, ${base}, black ${step * 9}%)`;
}

export function Monogram({
  founder,
  className = '',
  size = 'md',
}: {
  founder: Founder;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  const sector = SECTOR_BY_ID[founder.sector];

  const textSize = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-[clamp(3.5rem,9vw,7rem)]',
  }[size];

  if (founder.portrait) {
    return (
      <img
        src={founder.portrait}
        alt={founder.name}
        loading="lazy"
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`monogram ${textSize} ${className}`}
      style={{ backgroundColor: shadeFor(founder.slug, sector.color) }}
      role="img"
      aria-label={founder.name}
    >
      <span className="relative">
        {initials(founder)}
        <span
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 font-mono text-[0.16em] font-medium tracking-[0.3em] whitespace-nowrap opacity-55"
          aria-hidden="true"
        >
          {founder.born}
        </span>
      </span>
    </div>
  );
}
