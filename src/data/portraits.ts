export type Portrait = {
  /** File under /portraits. */
  file: string;
  /** Photographer or institution, as recorded on Commons. */
  author: string;
  /** Short licence name, e.g. "CC BY-SA 4.0" or "Public domain". */
  license: string;
  /** Canonical licence deed. Empty for public-domain files. */
  licenseUrl: string;
  /** The Commons file page, so a reader can verify the licence themselves. */
  sourceUrl: string;
};

/**
 * Real portraits pulled from Wikimedia Commons.
 *
 * Every entry passed a licence check at download time: CC0, public domain,
 * CC BY or CC BY-SA only. Anything tagged fair use or non-free was rejected,
 * and those profiles fall back to contextual photography instead. CC BY and
 * CC BY-SA both require author and licence credit, which the profile page
 * renders with links back to the source file.
 */
export const PORTRAIT_BY_SLUG: Record<string, Portrait> = {
  'alexandr-wang': {
    file: 'alexandr-wang.jpg',
    author: 'Meta Platforms, Inc.',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alexandr_Wang,_Chief_A.I._Officer,_Meta.jpg',
  },
  'austin-russell': {
    file: 'austin-russell.jpg',
    author: 'Collision Conf',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Austin_Russell_(cropped).jpg',
  },
  'bernard-arnault': {
    file: 'bernard-arnault.jpg',
    author: 'Jérémy Barande',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bernard_Arnault_(3)_-_2017_(cropped).jpg',
  },
  'bill-gates': {
    file: 'bill-gates.jpg',
    author: 'Bogdan Hoyaux / European Union',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bill_Gates_at_the_European_Commission_-_P067383-987995_(cropped)_5.jpg',
  },
  'brian-chesky': {
    file: 'brian-chesky.jpg',
    author: 'Celeste Sloman',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Brian_Chesky_2025.jpg',
  },
  'carlos-slim': {
    file: 'carlos-slim.jpg',
    author: 'Secretaría de Cultura Ciudad de México from México',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carlos_Slim_(45680472234)_(cropped).jpg',
  },
  'daniel-ek': {
    file: 'daniel-ek.jpg',
    author: 'Lukasz Kobus/European Commission',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Daniel_Ek_EC_2025_(cropped).jpg',
  },
  'elon-musk': {
    file: 'elon-musk.jpg',
    author: 'Gage Skidmore',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Elon_Musk_-_54820081119_(cropped).jpg',
  },
  'emma-grede': {
    file: 'emma-grede.jpg',
    author: 'Janeirohy',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Emma_Grede_-_2026_LAT_Festival_of_Books.png',
  },
  'enzo-ferrari': {
    file: 'enzo-ferrari.jpg',
    author: 'Rainer W. Schlegelmilch',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Enzo_Ferrari_Monza_1967.jpg',
  },
  'estee-lauder': {
    file: 'estee-lauder.jpg',
    author: 'New York World-Telegram and the Sun staff photographer: Sauro, Bill, photographer.',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Estee_Lauder_NYWTS.jpg',
  },
  'evan-spiegel': {
    file: 'evan-spiegel.jpg',
    author: 'cellanr',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Evan_Spiegel,_founder_of_Snapchat.jpg',
  },
  'henry-ford': {
    file: 'henry-ford.jpg',
    author: 'Ford Motor Company. Photographic Department',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Henry_Ford_portrait_1915_original_(3x4_cropped).png',
  },
  'howard-schultz': {
    file: 'howard-schultz.jpg',
    author: 'Gage Skidmore',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Howard_Schultz_by_Gage_Skidmore.jpg',
  },
  'ingvar-kamprad': {
    file: 'ingvar-kamprad.jpg',
    author: 'Ministry of Enterprise, Energy and Communications of Sweden/Sandra Baqirjazid',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ingvar_Kamprad_Haparanda_June_2010.jpg',
  },
  'jack-ma': {
    file: 'jack-ma.jpg',
    author: 'Foundations World Economic Forum',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:20th_Anniversary_Schwab_Foundation_Gala_Dinner_(44887783681)_(cropped).jpg',
  },
  'jay-z': {
    file: 'jay-z.jpg',
    author: 'Photo Courtesy of NYS Senate Media Services',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jay-Z_meets_with_New_York_Senate_Majority_Leader_in_Albany_(cropped).webp',
  },
  'jeff-bezos': {
    file: 'jeff-bezos.jpg',
    author: 'SECWAR',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_(3x4_cropped_on_Bezos_and_rotated).jpg',
  },
  'jensen-huang': {
    file: 'jensen-huang.jpg',
    author: 'The White House',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jen-Hsun_Huang_2025.jpg',
  },
  'john-collison': {
    file: 'john-collison.jpg',
    author: 'UK Prime Minister',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Prime_Minister_meets_with_the_Founder_%26_President_of_Stripe_-_52922981984_(cropped).jpg',
  },
  'kylie-jenner': {
    file: 'kylie-jenner.jpg',
    author: 'Hayu',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kylie_Jenner1_(cropped).png',
  },
  'mark-zuckerberg': {
    file: 'mark-zuckerberg.jpg',
    author: 'The White House',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:F20250904AH-2824_(54778373111)_(3x4_cropped_on_Zuckerberg_following_the_rule_of_thirds).jpg',
  },
  'masayoshi-son': {
    file: 'masayoshi-son.jpg',
    author: 'European Communities, 2025 / EC - Audiovisual Service',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Masayoshi_Son_(P066533-522034,_cropped).jpg',
  },
  'melanie-perkins': {
    file: 'melanie-perkins.jpg',
    author: 'Melanie Perkins',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:M_Perkins.jpg',
  },
  'mikaila-ulmer': {
    file: 'mikaila-ulmer.jpg',
    author: 'Springwater88',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mikaila_Ulmer.jpg',
  },
  'oprah-winfrey': {
    file: 'oprah-winfrey.jpg',
    author: 'US Embassy South Africa',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Oprah_Winfrey_2016.jpg',
  },
  'palmer-luckey': {
    file: 'palmer-luckey.jpg',
    author: 'Xuthoria',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:CES_2026_-_Palmer_Luckey_01_(cropped).jpg',
  },
  'patrick-collison': {
    file: 'patrick-collison.jpg',
    author: 'JD Lasica',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Patrick_Collison_(cropped).jpg',
  },
  'phil-knight': {
    file: 'phil-knight.jpg',
    author: 'Tom Matthyssens',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Phil_Knight_with_Tom_Matthyssens_in_Universal_Studios_Orlando_1999_(cropped).jpg',
  },
  'ray-dalio': {
    file: 'ray-dalio.jpg',
    author: 'Web Summit',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Web_Summit_2018_-_Forum_-_Day_2,_November_7_HM1_7481_(44858045925).jpg',
  },
  'rihanna': {
    file: 'rihanna.jpg',
    author: 'SIGMA',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rihanna_Fenty_2018.png',
  },
  'sam-walton': {
    file: 'sam-walton.jpg',
    author: 'Photo credit: George Bush Presidential Library and Museum',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sam_Walton_(1992_2)_(cropped).jpg',
  },
  'sara-blakely': {
    file: 'sara-blakely.jpg',
    author: 'Gillian Zoe Segal',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sara_Blakely.jpg',
  },
  'soichiro-honda': {
    file: 'soichiro-honda.jpg',
    author: '財界研究社、撮影者不明',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Honda_Souichiro_zaikai_1964.jpg',
  },
  'sophia-amoruso': {
    file: 'sophia-amoruso.jpg',
    author: 'Emily Malan',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sophia_Amoruso_by_Emily_Malan.jpg',
  },
  'steve-jobs': {
    file: 'steve-jobs.jpg',
    author: 'Matthew Yohe',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Steve_Jobs_Headshot_2010_(cropped_4).jpg',
  },
  'tobi-lutke': {
    file: 'tobi-lutke.jpg',
    author: 'Benjamin Forrest',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:NYC-Commerce-Tobi-L%C3%BCtki-561.jpg',
  },
  'vitalik-buterin': {
    file: 'vitalik-buterin.jpg',
    author: 'John Phillips',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vitalik_Buterin_TechCrunch_London_2015_(cropped).jpg',
  },
  'walt-disney': {
    file: 'walt-disney.jpg',
    author: 'Boy Scouts of America',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Walt_Disney_1946_(cropped2).JPG',
  },
  'warren-buffett': {
    file: 'warren-buffett.jpg',
    author: 'USA International Trade Administration',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_(cropped).jpg',
  },
  'whitney-wolfe-herd': {
    file: 'whitney-wolfe-herd.jpg',
    author: 'TechCrunch',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:TechCrunch_Disrupt_San_Francisco_2018_-_day_2_(30647055838).jpg',
  },
};
