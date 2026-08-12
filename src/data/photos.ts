import type { Bi } from './types';

/**
 * Contextual photography for the archive profiles.
 *
 * These are NOT portraits. Unsplash is a stock library, not a press archive —
 * it has no photographs of Jeff Bezos or Estée Lauder, and presenting a stock
 * model as a named public figure would be a fabricated likeness.
 *
 * So each profile gets an image of the thing the founder actually built: a
 * launch for Musk, a warehouse for Bezos, an espresso bar for Schultz. The
 * monogram sits on top so the reader is never invited to read the photo as a
 * face, and the profile page labels every one of them explicitly.
 *
 * Attribution is required by the Unsplash API guidelines and is rendered with
 * a live link on the profile page.
 */
export type Photo = {
  /** File under /img, named after the slug. */
  file: string;
  /** What the photograph actually shows. Used for alt text and the caption. */
  subject: Bi;
  credit: { name: string; handle: string };
};

const u = (handle: string) => `https://unsplash.com/@${handle}?utm_source=founders_wire&utm_medium=referral`;

export function creditUrl(photo: Photo): string {
  return u(photo.credit.handle);
}

export const PHOTO_BY_SLUG: Record<string, Photo> = {
  'elon-musk': {
    file: 'elon-musk.jpg',
    subject: { en: 'A rocket launch trail at dusk', es: 'La estela de un lanzamiento al atardecer' },
    credit: { name: 'SpaceX', handle: 'spacex' },
  },
  'jeff-bezos': {
    file: 'jeff-bezos.jpg',
    subject: { en: 'Boxes racked in a distribution warehouse', es: 'Cajas en estanterías de un centro de distribución' },
    credit: { name: 'CHUTTERSNAP', handle: 'chuttersnap' },
  },
  'steve-jobs': {
    file: 'steve-jobs.jpg',
    subject: { en: 'An early Macintosh', es: 'Un Macintosh de los primeros' },
    credit: { name: 'Matt Benson', handle: 'mattgyver' },
  },
  'bill-gates': {
    file: 'bill-gates.jpg',
    subject: { en: 'A home computer of the era Microsoft was built for', es: 'Una computadora doméstica de la época para la que se construyó Microsoft' },
    credit: { name: 'Dan Counsell', handle: 'dancounsell' },
  },
  'mark-zuckerberg': {
    file: 'mark-zuckerberg.jpg',
    subject: { en: 'Social apps on a phone home screen', es: 'Apps sociales en la pantalla de un teléfono' },
    credit: { name: 'Brett Jordan', handle: 'brett_jordan' },
  },
  'jensen-huang': {
    file: 'jensen-huang.jpg',
    subject: { en: 'A printed circuit board', es: 'Una placa de circuito impreso' },
    credit: { name: 'Umberto', handle: 'umby' },
  },
  'jack-ma': {
    file: 'jack-ma.jpg',
    subject: { en: 'A container terminal', es: 'Una terminal de contenedores' },
    credit: { name: 'taro ohtani', handle: 'taro_ohtani' },
  },
  'brian-chesky': {
    file: 'brian-chesky.jpg',
    subject: { en: 'A furnished apartment interior', es: 'El interior de un departamento amueblado' },
    credit: { name: 'Danilo Rios', handle: 'danrop' },
  },
  'melanie-perkins': {
    file: 'melanie-perkins.jpg',
    subject: { en: 'Design software on a tablet', es: 'Software de diseño en una tableta' },
    credit: { name: 'Emily Bernal', handle: 'emilybernal' },
  },
  'whitney-wolfe-herd': {
    file: 'whitney-wolfe-herd.jpg',
    subject: { en: 'Someone using a phone', es: 'Alguien usando un teléfono' },
    credit: { name: 'Priscilla Du Preez', handle: 'priscilladupreez' },
  },
  'tobi-lutke': {
    file: 'tobi-lutke.jpg',
    subject: { en: 'An independent shop counter', es: 'El mostrador de un comercio independiente' },
    credit: { name: 'Christiann Koepke', handle: 'christiannkoepke' },
  },
  'sam-walton': {
    file: 'sam-walton.jpg',
    subject: { en: 'A supermarket aisle', es: 'Un pasillo de supermercado' },
    credit: { name: 'Adhitya Sibikumar', handle: 'adhitya_2505' },
  },
  'amancio-ortega': {
    file: 'amancio-ortega.jpg',
    subject: { en: 'A clothing rack in a retail store', es: 'Un perchero en una tienda de ropa' },
    credit: { name: 'Burgess Milner', handle: 'burgessbadass' },
  },
  'bernard-arnault': {
    file: 'bernard-arnault.jpg',
    subject: { en: 'A queue outside a luxury boutique', es: 'Una fila afuera de una boutique de lujo' },
    credit: { name: 'Melanie Klepper', handle: 'melanie_sophie' },
  },
  'phil-knight': {
    file: 'phil-knight.jpg',
    subject: { en: 'Runners on a track', es: 'Corredores en una pista' },
    credit: { name: 'Nicolas Hoizey', handle: 'nhoizey' },
  },
  'howard-schultz': {
    file: 'howard-schultz.jpg',
    subject: { en: 'A coffee shop counter', es: 'El mostrador de una cafetería' },
    credit: { name: 'Louis Hansel', handle: 'louishansel' },
  },
  'ingvar-kamprad': {
    file: 'ingvar-kamprad.jpg',
    subject: { en: 'Flat-pack furniture mid-assembly', es: 'Mueble de empaque plano a medio armar' },
    credit: { name: 'Sleepline', handle: 'sleepline' },
  },
  'warren-buffett': {
    file: 'warren-buffett.jpg',
    subject: { en: 'The finance section of a newspaper', es: 'La sección financiera de un periódico' },
    credit: { name: 'Annie Spratt', handle: 'anniespratt' },
  },
  'carlos-slim': {
    file: 'carlos-slim.jpg',
    subject: { en: 'A transmission tower', es: 'Una torre de transmisión' },
    credit: { name: 'CHRSNDRSN', handle: 'chrsndrsn' },
  },
  'masayoshi-son': {
    file: 'masayoshi-son.jpg',
    subject: { en: 'Tokyo at night', es: 'Tokio de noche' },
    credit: { name: 'Takashi Miyazaki', handle: 'miyatankun' },
  },
  'ray-dalio': {
    file: 'ray-dalio.jpg',
    subject: { en: 'Market figures on a desk', es: 'Cifras de mercado sobre un escritorio' },
    credit: { name: 'Jakub Żerdzicki', handle: 'jakubzerdzicki' },
  },
  'oprah-winfrey': {
    file: 'oprah-winfrey.jpg',
    subject: { en: 'A television studio', es: 'Un estudio de televisión' },
    credit: { name: 'Brad Weaver', handle: 'bweaver' },
  },
  'walt-disney': {
    file: 'walt-disney.jpg',
    subject: { en: 'A film projector running', es: 'Un proyector de cine funcionando' },
    credit: { name: 'Jeremy Yap', handle: 'jeremyyappy' },
  },
  'jay-z': {
    file: 'jay-z.jpg',
    subject: { en: 'A studio condenser microphone', es: 'Un micrófono de condensador de estudio' },
    credit: { name: 'Jonathan Velasquez', handle: 'jonathanvez' },
  },
  'daniel-ek': {
    file: 'daniel-ek.jpg',
    subject: { en: 'Headphones', es: 'Audífonos' },
    credit: { name: 'C D-X', handle: 'cdx2' },
  },
  'henry-ford': {
    file: 'henry-ford.jpg',
    subject: { en: 'A car assembly line', es: 'Una línea de montaje de automóviles' },
    credit: { name: 'Lenny Kuhne', handle: 'lennykuhne' },
  },
  'soichiro-honda': {
    file: 'soichiro-honda.jpg',
    subject: { en: 'A motorcycle engine', es: 'El motor de una motocicleta' },
    credit: { name: 'Ian Taylor', handle: 'carrier_lost' },
  },
  'enzo-ferrari': {
    file: 'enzo-ferrari.jpg',
    subject: { en: 'A red race car on track', es: 'Un auto de carreras rojo en pista' },
    credit: { name: 'Jakub Neskora', handle: 'jakub_neskora' },
  },
  'estee-lauder': {
    file: 'estee-lauder.jpg',
    subject: { en: 'A perfume bottle', es: 'Un frasco de perfume' },
    credit: { name: 'Jessica Weiller', handle: 'jweiller' },
  },
  rihanna: {
    file: 'rihanna.jpg',
    subject: { en: 'Makeup products', es: 'Productos de maquillaje' },
    credit: { name: 'Hitesh Dewasi', handle: 'iamhiteshdewasi' },
  },
  'sara-blakely': {
    file: 'sara-blakely.jpg',
    subject: { en: 'Spools of thread', es: 'Carretes de hilo' },
    credit: { name: 'Héctor J. Rivas', handle: 'hjrc33' },
  },
};
