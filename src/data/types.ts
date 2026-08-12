export type Lang = 'en' | 'es';

/** A string that exists in both site languages. */
export type Bi = { en: string; es: string };

/** A block of paragraphs in both site languages. */
export type BiBlock = { en: string[]; es: string[] };

export type SectorId =
  | 'technology'
  | 'retail'
  | 'finance'
  | 'media'
  | 'industry'
  | 'beauty';

export type Sector = {
  id: SectorId;
  label: Bi;
  /** One-line description used on the sector hub. */
  blurb: Bi;
  /** Monogram background for founders filed under this sector. */
  color: string;
};

export type Milestone = { year: string } & Bi;

export type Founder = {
  slug: string;
  name: string;
  /** Rendered in the profile masthead under the name. */
  aka?: string[];
  company: string;
  role: Bi;
  sector: SectorId;
  /** Birth year, or birth–death for historical figures. */
  born: string;
  birthplace: Bi;
  nationality: Bi;
  knownFor: Bi;
  /** Standfirst under the headline. */
  dek: Bi;
  body: BiBlock;
  timeline: Milestone[];
  /** Two-letter monogram. Defaults to the name's initials. */
  monogram?: string;
  /** Real photography, only where the site holds the rights. */
  portrait?: string;
  gallery?: { src: string; caption: Bi }[];
  /** The site's own lead profile, pinned to the top of the homepage. */
  lead?: boolean;
  /** Reading time in minutes, shown on cards. */
  readMinutes: number;
};

export const SECTORS: Sector[] = [
  {
    id: 'technology',
    label: { en: 'Technology', es: 'Tecnología' },
    blurb: {
      en: 'Software, semiconductors, platforms and the people who turned code into infrastructure.',
      es: 'Software, semiconductores, plataformas y la gente que convirtió el código en infraestructura.',
    },
    color: '#0043ce',
  },
  {
    id: 'retail',
    label: { en: 'Retail & Consumer', es: 'Retail y Consumo' },
    blurb: {
      en: 'Stores, supply chains and brands built on knowing exactly what people will buy next.',
      es: 'Tiendas, cadenas de suministro y marcas construidas sabiendo exactamente qué comprará la gente.',
    },
    color: '#00867d',
  },
  {
    id: 'finance',
    label: { en: 'Finance', es: 'Finanzas' },
    blurb: {
      en: 'Capital allocators whose decisions moved markets far beyond the companies they ran.',
      es: 'Asignadores de capital cuyas decisiones movieron mercados mucho más allá de sus empresas.',
    },
    color: '#1f3a5f',
  },
  {
    id: 'media',
    label: { en: 'Media & Culture', es: 'Medios y Cultura' },
    blurb: {
      en: 'Founders who built audiences first and turned attention into durable businesses.',
      es: 'Fundadores que construyeron audiencia primero y convirtieron la atención en negocios duraderos.',
    },
    color: '#8b1d3f',
  },
  {
    id: 'industry',
    label: { en: 'Industry & Mobility', es: 'Industria y Movilidad' },
    blurb: {
      en: 'Factories, engines and logistics — the founders who organised how things get made and moved.',
      es: 'Fábricas, motores y logística: los fundadores que organizaron cómo se hacen y se mueven las cosas.',
    },
    color: '#4a4a4a',
  },
  {
    id: 'beauty',
    label: { en: 'Beauty & Fashion', es: 'Belleza y Moda' },
    blurb: {
      en: 'Category creators who understood that identity sells harder than product specifications.',
      es: 'Creadores de categoría que entendieron que la identidad vende más que las especificaciones.',
    },
    color: '#a1442f',
  },
];

export const SECTOR_BY_ID = Object.fromEntries(
  SECTORS.map((s) => [s.id, s]),
) as Record<SectorId, Sector>;

/** Initials fallback for the typographic portraits. */
export function initials(f: Founder): string {
  if (f.monogram) return f.monogram;
  const parts = f.name.split(' ').filter(Boolean);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}
