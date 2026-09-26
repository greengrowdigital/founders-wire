import { SECTOR_BY_ID, initials } from '@/data/types';
import type { Founder } from '@/data/types';
import { PHOTO_BY_SLUG } from '@/data/photos';
import { PORTRAIT_BY_SLUG } from '@/data/portraits';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Portrait slot for a profile. Four cases, in order of preference:
 *
 * 1. Real photography the publication owns.
 * 2. A real portrait from Wikimedia Commons, where a freely licensed one
 *    exists. Rendered plainly, because it genuinely is the person.
 * 3. Contextual stock photography of what the founder built, tinted with the
 *    sector colour and overprinted with the monogram. The monogram is not
 *    decoration there: it stops the image reading as a face, because those are
 *    not portraits of the subject.
 * 4. A flat monogram, if nothing is mapped for the slug.
 */

/**
 * Deterministic shade offset from the slug, so a sector's tiles vary in tone
 * instead of reading as one flat slab, and a founder's tile never changes
 * between renders.
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

const TEXT_SIZE = {
  sm: 'text-xl',
  md: 'text-3xl',
  lg: 'text-5xl',
  xl: 'text-[clamp(3rem,7vw,5.5rem)]',
} as const;

export function Monogram({
  founder,
  className = '',
  size = 'md',
  /** Hide the overprinted initials where the caption already does the work. */
  bare = false,
}: {
  founder: Founder;
  className?: string;
  size?: keyof typeof TEXT_SIZE;
  bare?: boolean;
}) {
  const { pick } = useI18n();
  const sector = SECTOR_BY_ID[founder.sector];
  const tint = shadeFor(founder.slug, sector.color);

  // 1. Owned photography.
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

  // 2. A real, freely licensed portrait. No tint and no overprint: this is the
  //    person, so nothing should suggest otherwise.
  const portrait = PORTRAIT_BY_SLUG[founder.slug];
  if (portrait) {
    return (
      <img
        src={`/portraits/${portrait.file}`}
        alt={founder.name}
        loading="lazy"
        className={`object-cover ${className}`}
      />
    );
  }

  const photo = PHOTO_BY_SLUG[founder.slug];

  // 3. Contextual photography under the sector tint.
  if (photo) {
    return (
      <div className={`relative overflow-hidden isolate ${className}`}>
        <img
          src={`/img/${photo.file}`}
          alt={pick(photo.subject)}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Duotone-ish wash: darken, then lay the sector colour over it so the
            grid still reads as colour-coded by desk. */}
        <span className="absolute inset-0 bg-ink/45" aria-hidden="true" />
        <span
          className="absolute inset-0 mix-blend-color"
          style={{ backgroundColor: tint }}
          aria-hidden="true"
        />
        {!bare && (
          <span
            className={`monogram absolute inset-0 !bg-transparent ${TEXT_SIZE[size]} drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]`}
            aria-hidden="true"
          >
            {initials(founder)}
          </span>
        )}
      </div>
    );
  }

  // 4. Flat monogram.
  return (
    <div
      className={`monogram ${TEXT_SIZE[size]} ${className}`}
      style={{ backgroundColor: tint }}
      role="img"
      aria-label={founder.name}
    >
      {initials(founder)}
    </div>
  );
}
