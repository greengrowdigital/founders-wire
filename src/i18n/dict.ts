import type { Lang } from '@/data/types';

export const DICT: Record<Lang, Record<string, string>> = {
  en: {
    'brand.name': 'Founders Wire',
    'brand.tagline': 'The people behind the companies',

    'nav.home': 'Home',
    'nav.founders': 'Profiles',
    'nav.sectors': 'Sectors',
    'nav.timeline': 'Timeline',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.search': 'Search profiles',

    'ticker.label': 'The Wire',

    'home.lead.kicker': 'The Lead Profile',
    'home.briefs': 'In brief',
    'home.young': 'The current generation',
    'home.young.sub': 'Founders who are still building the thing they will be known for',
    'home.lead.cta': 'Read the full profile',
    'home.latest': 'Latest profiles',
    'home.latest.sub': 'Reported summaries of how the companies actually got built',
    'home.sectors': 'Browse by sector',
    'home.era': 'Across four generations',
    'home.era.sub': 'From the assembly line to the AI build-out',
    'home.all': 'See all profiles',
    'home.mostread': 'Most read',
    'home.newsletter.h': 'The Wire, weekly',
    'home.newsletter.p':
      'One profile a week: what the founder actually did, what it cost, and what everyone gets wrong about it.',
    'home.newsletter.ph': 'Your email address',
    'home.newsletter.cta': 'Sign up',
    'home.newsletter.ok': 'You are on the list.',
    'home.newsletter.err': 'Enter a valid email address.',
    'home.newsletter.note': 'Demo form. No email is stored or sent.',

    'founders.h': 'All profiles',
    'founders.sub':
      'Every founder in the archive, from nineteenth-century industrialists to people building right now.',
    'founders.filter.all': 'All sectors',
    'founders.count': '{n} profiles',
    'founders.empty': 'No profiles match that filter.',
    'founders.sort.era': 'By era',
    'founders.sort.az': 'A–Z',

    'sectors.h': 'Sectors',
    'sectors.sub': 'The archive organised by the industry each founder reshaped.',
    'sectors.read': 'Read the sector',

    'timeline.h': 'Timeline',
    'timeline.sub':
      'Every profile in the archive, ordered by birth year. Four generations of the same job description.',

    'about.h': 'About Founders Wire',
    'about.sub': 'What this publication is, and how it is put together.',

    'profile.born': 'Born',
    'profile.birthplace': 'Birthplace',
    'profile.nationality': 'Nationality',
    'profile.company': 'Company',
    'profile.role': 'Role',
    'profile.sector': 'Sector',
    'profile.knownfor': 'Known for',
    'profile.aka': 'Also known as',
    'profile.factbox': 'At a glance',
    'profile.timeline': 'Key moments',
    'profile.related': 'Read next',
    'profile.back': 'All profiles',
    'profile.share': 'Share',
    'profile.copied': 'Link copied',
    'profile.readtime': '{n} min read',
    'profile.gallery': 'From the assignment',
    'photo.credit': 'Photo',
    'photo.notportrait': 'Contextual image of the business, not a portrait of the subject.',

    'footer.desc':
      'Founders Wire publishes profiles of the people who built the companies — how they started, what they got wrong, and what actually made the difference.',
    'footer.sections': 'Sections',
    'footer.publication': 'Publication',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer':
      'Archive profiles are editorial summaries compiled from public record. Archive images are contextual photography of the businesses, credited via Unsplash, not portraits of the people profiled. No likeness rights are claimed.',

    'nf.h': 'Page not found',
    'nf.p': 'That profile is not in the archive.',
    'nf.cta': 'Back to the homepage',
  },
  es: {
    'brand.name': 'Founders Wire',
    'brand.tagline': 'La gente detrás de las empresas',

    'nav.home': 'Inicio',
    'nav.founders': 'Perfiles',
    'nav.sectors': 'Sectores',
    'nav.timeline': 'Cronología',
    'nav.about': 'Nosotros',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.search': 'Buscar perfiles',

    'ticker.label': 'El Cable',

    'home.lead.kicker': 'Perfil principal',
    'home.briefs': 'En breve',
    'home.young': 'La generación actual',
    'home.young.sub': 'Fundadores que todavía están construyendo aquello por lo que se les conocerá',
    'home.lead.cta': 'Leer el perfil completo',
    'home.latest': 'Últimos perfiles',
    'home.latest.sub': 'Resúmenes de cómo se construyeron realmente las empresas',
    'home.sectors': 'Explorar por sector',
    'home.era': 'Cuatro generaciones',
    'home.era.sub': 'De la línea de montaje al despliegue de la IA',
    'home.all': 'Ver todos los perfiles',
    'home.mostread': 'Lo más leído',
    'home.newsletter.h': 'El Cable, cada semana',
    'home.newsletter.p':
      'Un perfil por semana: qué hizo realmente el fundador, cuánto le costó, y qué es lo que todos entienden mal.',
    'home.newsletter.ph': 'Tu correo electrónico',
    'home.newsletter.cta': 'Suscribirme',
    'home.newsletter.ok': 'Ya estás en la lista.',
    'home.newsletter.err': 'Escribe un correo válido.',
    'home.newsletter.note': 'Formulario de demostración. No se guarda ni se envía ningún correo.',

    'founders.h': 'Todos los perfiles',
    'founders.sub':
      'Todos los fundadores del archivo, desde industriales del siglo XIX hasta gente construyendo ahora mismo.',
    'founders.filter.all': 'Todos los sectores',
    'founders.count': '{n} perfiles',
    'founders.empty': 'Ningún perfil coincide con ese filtro.',
    'founders.sort.era': 'Por época',
    'founders.sort.az': 'A–Z',

    'sectors.h': 'Sectores',
    'sectors.sub': 'El archivo organizado por la industria que cada fundador transformó.',
    'sectors.read': 'Ver el sector',

    'timeline.h': 'Cronología',
    'timeline.sub':
      'Todos los perfiles del archivo, ordenados por año de nacimiento. Cuatro generaciones del mismo oficio.',

    'about.h': 'Sobre Founders Wire',
    'about.sub': 'Qué es esta publicación y cómo se arma.',

    'profile.born': 'Nacimiento',
    'profile.birthplace': 'Lugar de nacimiento',
    'profile.nationality': 'Nacionalidad',
    'profile.company': 'Empresa',
    'profile.role': 'Cargo',
    'profile.sector': 'Sector',
    'profile.knownfor': 'Conocido por',
    'profile.aka': 'También conocido como',
    'profile.factbox': 'Ficha',
    'profile.timeline': 'Momentos clave',
    'profile.related': 'Sigue leyendo',
    'profile.back': 'Todos los perfiles',
    'profile.share': 'Compartir',
    'profile.copied': 'Enlace copiado',
    'profile.readtime': '{n} min de lectura',
    'profile.gallery': 'De la cobertura',
    'photo.credit': 'Foto',
    'photo.notportrait': 'Imagen contextual del negocio, no un retrato del biografiado.',

    'footer.desc':
      'Founders Wire publica perfiles de la gente que construyó las empresas: cómo empezaron, en qué se equivocaron y qué marcó realmente la diferencia.',
    'footer.sections': 'Secciones',
    'footer.publication': 'Publicación',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.disclaimer':
      'Los perfiles del archivo son resúmenes editoriales compilados de información pública. Las imágenes del archivo son fotografía contextual de los negocios, acreditada vía Unsplash, no retratos de las personas perfiladas. No se reclama ningún derecho de imagen.',

    'nf.h': 'Página no encontrada',
    'nf.p': 'Ese perfil no está en el archivo.',
    'nf.cta': 'Volver al inicio',
  },
};

export function format(tpl: string, vars?: Record<string, string | number>) {
  if (!vars) return tpl;
  return tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
