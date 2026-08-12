import type { Founder } from './types';

/** Archive profiles: media, industry and beauty desks. */
export const CULTURE_FOUNDERS: Founder[] = [
  {
    slug: 'oprah-winfrey',
    name: 'Oprah Winfrey',
    company: 'Harpo · OWN',
    role: { en: 'Founder and chairwoman', es: 'Fundadora y presidenta' },
    sector: 'media',
    born: '1954',
    birthplace: { en: 'Kosciusko, Mississippi, U.S.', es: 'Kosciusko, Misisipi, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Owning her show, and therefore owning the business built on it',
      es: 'Ser dueña de su programa y, por lo tanto, del negocio construido sobre él',
    },
    dek: {
      en: 'Talent usually rents its audience to a network. She bought the production company instead, and that single structural decision changed the economics of her entire career.',
      es: 'El talento normalmente le renta su audiencia a una cadena. Ella compró la productora, y esa sola decisión estructural cambió la economía de toda su carrera.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Winfrey grew up in poverty in Mississippi and Milwaukee, moved into local television news in Nashville and Baltimore, and took over a struggling Chicago morning show in 1984. It went to number one in the market within months.',
        'The show went national in 1986, and the decision that mattered came the following year: she formed Harpo Productions and took ownership of the programme rather than working as an employee of a distributor. That gave her the syndication economics, the library and the leverage.',
        'She used the platform to build adjacent businesses — a magazine, a book club with the power to make bestsellers overnight, a film production arm — and launched the OWN cable network in 2011 after ending the daytime show. Her endorsement became one of the few forces in media that reliably moved consumer behaviour at national scale.',
      ],
      es: [
        'Winfrey creció en la pobreza en Misisipi y Milwaukee, pasó a los noticieros locales de televisión en Nashville y Baltimore, y tomó las riendas de un programa matutino en dificultades en Chicago en 1984. Llegó al número uno del mercado en cuestión de meses.',
        'El programa se volvió nacional en 1986, y la decisión que importó llegó al año siguiente: formó Harpo Productions y asumió la propiedad del programa en lugar de trabajar como empleada de un distribuidor. Eso le dio la economía de la sindicación, la biblioteca y el poder de negociación.',
        'Usó la plataforma para construir negocios adyacentes: una revista, un club de lectura con el poder de crear bestsellers de la noche a la mañana, un brazo de producción cinematográfica, y lanzó la cadena de cable OWN en 2011 tras terminar el programa diurno. Su respaldo se convirtió en una de las pocas fuerzas de los medios que movía de forma confiable el comportamiento del consumidor a escala nacional.',
      ],
    },
    timeline: [
      { year: '1984', en: 'Takes over a struggling Chicago morning show.', es: 'Toma un programa matutino de Chicago en dificultades.' },
      { year: '1986', en: 'The Oprah Winfrey Show goes national.', es: 'The Oprah Winfrey Show se vuelve nacional.' },
      { year: '1988', en: 'Forms Harpo Productions and takes ownership of the show.', es: 'Forma Harpo Productions y asume la propiedad del programa.' },
      { year: '2011', en: 'Ends the daytime show and launches the OWN network.', es: 'Termina el programa diurno y lanza la cadena OWN.' },
    ],
  },
  {
    slug: 'walt-disney',
    name: 'Walt Disney',
    company: 'The Walt Disney Company',
    role: { en: 'Co-founder', es: 'Cofundador' },
    sector: 'media',
    born: '1901—1966',
    birthplace: { en: 'Chicago, Illinois, U.S.', es: 'Chicago, Illinois, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Turning animation into an industry and then into a place you could walk through',
      es: 'Convertir la animación en industria y después en un lugar por el que se puede caminar',
    },
    dek: {
      en: 'He bet the company on a feature-length cartoon the trade press called a folly, and then bet it again on a theme park nobody would finance.',
      es: 'Apostó la empresa a un dibujo animado de largometraje que la prensa del gremio llamó una locura, y luego la apostó otra vez a un parque temático que nadie quería financiar.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Disney founded a studio with his brother Roy in 1923 after an earlier animation venture in Kansas City failed. He lost the rights to his first successful character in a distribution dispute, a loss that made him permanently insistent on owning what he created.',
        'Mickey Mouse followed in 1928, and the studio pushed technical boundaries with synchronised sound and colour. In 1937 he released Snow White and the Seven Dwarfs, the first full-length animated feature in English, financed against the industry’s expectation that audiences would not sit through one.',
        'The second act was spatial. Disneyland opened in 1955, applying storytelling to physical space and creating a business that fed on the films and fed them in return. He died in 1966 while planning the Florida development, leaving behind a model of cross-media franchise that the entire entertainment industry now runs on.',
      ],
      es: [
        'Disney fundó un estudio con su hermano Roy en 1923, después de que un intento previo de animación en Kansas City fracasara. Perdió los derechos de su primer personaje exitoso en una disputa de distribución, una pérdida que lo volvió permanentemente insistente en ser dueño de lo que creaba.',
        'Mickey Mouse llegó en 1928, y el estudio empujó los límites técnicos con sonido sincronizado y color. En 1937 estrenó Blancanieves y los siete enanos, el primer largometraje animado en inglés, financiado contra la expectativa de la industria de que el público no aguantaría uno completo.',
        'El segundo acto fue espacial. Disneyland abrió en 1955, aplicando la narrativa al espacio físico y creando un negocio que se alimentaba de las películas y las alimentaba de vuelta. Murió en 1966 mientras planeaba el desarrollo de Florida, dejando un modelo de franquicia transmedia sobre el que hoy funciona toda la industria del entretenimiento.',
      ],
    },
    timeline: [
      { year: '1923', en: 'Founds a studio in Los Angeles with his brother Roy.', es: 'Funda un estudio en Los Ángeles con su hermano Roy.' },
      { year: '1928', en: 'Introduces Mickey Mouse with synchronised sound.', es: 'Presenta a Mickey Mouse con sonido sincronizado.' },
      { year: '1937', en: 'Releases Snow White, the first English-language animated feature.', es: 'Estrena Blancanieves, el primer largometraje animado en inglés.' },
      { year: '1955', en: 'Opens Disneyland.', es: 'Abre Disneyland.' },
    ],
  },
  {
    slug: 'jay-z',
    name: 'Shawn "Jay-Z" Carter',
    company: 'Roc Nation',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'media',
    born: '1969',
    birthplace: { en: 'Brooklyn, New York, U.S.', es: 'Brooklyn, Nueva York, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Converting cultural influence into ownership rather than fees',
      es: 'Convertir la influencia cultural en propiedad en lugar de honorarios',
    },
    dek: {
      en: 'Rejected by every label he approached, he started his own — and made ownership the through-line of a thirty-year business career.',
      es: 'Rechazado por todos los sellos a los que acudió, fundó el suyo, e hizo de la propiedad el hilo conductor de treinta años de carrera empresarial.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Carter grew up in the Marcy Houses in Brooklyn and could not get a record deal. In 1995 he co-founded Roc-A-Fella Records with Damon Dash and Kareem Burke to release his own debut, keeping the masters rather than signing them away.',
        'That principle scaled. Rocawear turned an artist endorsement into an apparel company he owned outright. Roc Nation, founded in 2008, became a management, publishing and sports agency representing artists and athletes rather than just himself.',
        'He later acquired the streaming service Tidal, built the champagne and cognac brands Armand de Brignac and D’Ussé into significant assets, and became the first hip-hop artist widely reported as a billionaire — a milestone that stemmed less from record sales than from equity in the businesses around them.',
      ],
      es: [
        'Carter creció en los Marcy Houses de Brooklyn y no lograba conseguir un contrato discográfico. En 1995 cofundó Roc-A-Fella Records con Damon Dash y Kareem Burke para lanzar su propio debut, conservando los másteres en lugar de cederlos.',
        'Ese principio escaló. Rocawear convirtió el respaldo de un artista en una empresa de ropa de la que era dueño por completo. Roc Nation, fundada en 2008, se volvió una agencia de representación, edición musical y deportes que representaba a artistas y atletas, no solo a él.',
        'Después adquirió el servicio de streaming Tidal, construyó las marcas de champán y coñac Armand de Brignac y D’Ussé hasta volverlas activos relevantes, y se convirtió en el primer artista de hip-hop ampliamente reportado como multimillonario, un hito que vino menos de la venta de discos que de la participación accionaria en los negocios a su alrededor.',
      ],
    },
    timeline: [
      { year: '1995', en: 'Co-founds Roc-A-Fella Records to release his own debut.', es: 'Cofunda Roc-A-Fella Records para lanzar su propio debut.' },
      { year: '1999', en: 'Launches the Rocawear apparel line.', es: 'Lanza la línea de ropa Rocawear.' },
      { year: '2008', en: 'Founds Roc Nation.', es: 'Funda Roc Nation.' },
      { year: '2015', en: 'Acquires the streaming service Tidal.', es: 'Adquiere el servicio de streaming Tidal.' },
    ],
  },
  {
    slug: 'daniel-ek',
    name: 'Daniel Ek',
    company: 'Spotify',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'media',
    born: '1983',
    birthplace: { en: 'Stockholm, Sweden', es: 'Estocolmo, Suecia' },
    nationality: { en: 'Swedish', es: 'Sueco' },
    knownFor: {
      en: 'Making legal streaming more convenient than piracy',
      es: 'Hacer que el streaming legal fuera más cómodo que la piratería',
    },
    dek: {
      en: 'The music industry was losing to file sharing. His argument was that people were not stealing because it was free, but because it was easier.',
      es: 'La industria musical perdía frente al intercambio de archivos. Su argumento fue que la gente no robaba porque fuera gratis, sino porque era más fácil.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Ek was a teenage programmer in Stockholm, a city where Napster-era file sharing was deeply established and the recording industry was in free fall. He had already built and sold businesses before he turned twenty-five.',
        'He founded Spotify in 2006 with Martin Lorentzon on a technical premise: if streaming could start playback almost instantly, the convenience gap that drove piracy would close. The engineering effort went into latency, and the commercial effort went into years of licensing negotiations with rights holders who had reason to be hostile.',
        'The service launched in 2008 and expanded to the United States in 2011. Spotify listed directly on the New York Stock Exchange in 2018, and later pushed into podcasting and audiobooks. Artist compensation under streaming economics remains the persistent criticism of the model he standardised.',
      ],
      es: [
        'Ek era un programador adolescente en Estocolmo, una ciudad donde el intercambio de archivos de la era Napster estaba profundamente establecido y la industria discográfica caía en picada. Ya había construido y vendido negocios antes de cumplir veinticinco.',
        'Fundó Spotify en 2006 con Martin Lorentzon sobre una premisa técnica: si el streaming podía empezar a reproducir casi al instante, la brecha de comodidad que alimentaba la piratería se cerraría. El esfuerzo de ingeniería se fue en latencia, y el esfuerzo comercial en años de negociaciones de licencias con titulares de derechos que tenían motivos para ser hostiles.',
        'El servicio se lanzó en 2008 y llegó a Estados Unidos en 2011. Spotify cotizó directamente en la Bolsa de Nueva York en 2018, y después empujó hacia los podcasts y los audiolibros. La remuneración a los artistas bajo la economía del streaming sigue siendo la crítica persistente al modelo que estandarizó.',
      ],
    },
    timeline: [
      { year: '2006', en: 'Founds Spotify with Martin Lorentzon.', es: 'Funda Spotify con Martin Lorentzon.' },
      { year: '2008', en: 'Launches the service in Europe after long licensing talks.', es: 'Lanza el servicio en Europa tras largas negociaciones de licencias.' },
      { year: '2011', en: 'Enters the United States market.', es: 'Entra al mercado de Estados Unidos.' },
      { year: '2018', en: 'Lists directly on the New York Stock Exchange.', es: 'Cotiza directamente en la Bolsa de Nueva York.' },
    ],
  },
  {
    slug: 'henry-ford',
    name: 'Henry Ford',
    company: 'Ford Motor Company',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'industry',
    born: '1863—1947',
    birthplace: { en: 'Greenfield Township, Michigan, U.S.', es: 'Greenfield Township, Michigan, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'The moving assembly line and the mass-market automobile',
      es: 'La línea de montaje móvil y el automóvil de mercado masivo',
    },
    dek: {
      en: 'He did not invent the car. He invented the method that let ordinary people afford one, and in doing so rewrote how everything gets manufactured.',
      es: 'No inventó el automóvil. Inventó el método que permitió a la gente común comprarlo, y al hacerlo reescribió cómo se fabrica todo.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Ford grew up on a Michigan farm, worked as an engineer for the Edison Illuminating Company, and founded the Ford Motor Company in 1903 after two earlier automotive ventures failed.',
        'The Model T arrived in 1908 as a deliberately simple, durable and repairable car. The breakthrough came in 1913, when Ford installed a moving assembly line at Highland Park and cut the time to build a chassis from more than twelve hours to roughly ninety minutes. Prices fell year after year as volume rose.',
        'In 1914 he introduced a five-dollar daily wage, roughly doubling pay, partly to stop the punishing turnover the line created — and creating workers who could buy the product. His legacy is inseparable from his documented antisemitic publishing, which drew condemnation then and since.',
      ],
      es: [
        'Ford creció en una granja de Michigan, trabajó como ingeniero para la Edison Illuminating Company y fundó la Ford Motor Company en 1903, después de que dos intentos automotrices previos fracasaran.',
        'El Modelo T llegó en 1908 como un auto deliberadamente simple, duradero y reparable. El salto llegó en 1913, cuando Ford instaló una línea de montaje móvil en Highland Park y redujo el tiempo de armado de un chasis de más de doce horas a cerca de noventa minutos. Los precios bajaron año tras año conforme subía el volumen.',
        'En 1914 introdujo un salario de cinco dólares diarios, casi el doble, en parte para frenar la rotación brutal que generaba la línea, y creando de paso trabajadores que podían comprar el producto. Su legado es inseparable de sus documentadas publicaciones antisemitas, que fueron condenadas entonces y desde entonces.',
      ],
    },
    timeline: [
      { year: '1903', en: 'Founds the Ford Motor Company.', es: 'Funda la Ford Motor Company.' },
      { year: '1908', en: 'Introduces the Model T.', es: 'Presenta el Modelo T.' },
      { year: '1913', en: 'Installs the moving assembly line at Highland Park.', es: 'Instala la línea de montaje móvil en Highland Park.' },
      { year: '1914', en: 'Introduces the five-dollar day.', es: 'Introduce la jornada de cinco dólares.' },
    ],
  },
  {
    slug: 'soichiro-honda',
    name: 'Soichiro Honda',
    company: 'Honda Motor Company',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'industry',
    born: '1906—1991',
    birthplace: { en: 'Hamamatsu, Shizuoka, Japan', es: 'Hamamatsu, Shizuoka, Japón' },
    nationality: { en: 'Japanese', es: 'Japonés' },
    knownFor: {
      en: 'Building the world’s largest motorcycle manufacturer from a bombed-out workshop',
      es: 'Construir el mayor fabricante de motocicletas del mundo desde un taller bombardeado',
    },
    dek: {
      en: 'A mechanic with no formal engineering degree who started by bolting surplus engines onto bicycles in postwar Japan.',
      es: 'Un mecánico sin título formal de ingeniería que empezó atornillando motores excedentes a bicicletas en el Japón de posguerra.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Honda was a blacksmith’s son who left school early to work in a Tokyo garage. He ran a piston ring business that was damaged by an earthquake and wartime bombing, and sold the remains to Toyota.',
        'In 1946 he began attaching small surplus engines to bicycles, solving a real transport problem in a country with wrecked infrastructure and scarce fuel. Honda Motor was founded in 1948, and his partnership with the businessman Takeo Fujisawa separated engineering from commercial strategy in a way that let both work.',
        'The Super Cub, launched in 1958, became one of the best-selling motor vehicles ever made. Honda then entered Formula One and, against the advice of Japan’s trade ministry, moved into cars — the Civic and its low-emission engine established the company in the American market during the 1970s fuel crisis.',
      ],
      es: [
        'Honda era hijo de un herrero y dejó la escuela temprano para trabajar en un taller de Tokio. Manejó un negocio de anillos de pistón que resultó dañado por un terremoto y por los bombardeos de la guerra, y vendió lo que quedaba a Toyota.',
        'En 1946 empezó a montar pequeños motores excedentes en bicicletas, resolviendo un problema real de transporte en un país con infraestructura destruida y combustible escaso. Honda Motor se fundó en 1948, y su sociedad con el empresario Takeo Fujisawa separó la ingeniería de la estrategia comercial de una forma que permitió que ambas funcionaran.',
        'La Super Cub, lanzada en 1958, se convirtió en uno de los vehículos motorizados más vendidos de la historia. Honda entró después a la Fórmula 1 y, contra el consejo del ministerio de comercio japonés, se metió a los autos: el Civic y su motor de bajas emisiones establecieron a la empresa en el mercado estadounidense durante la crisis del combustible de los años setenta.',
      ],
    },
    timeline: [
      { year: '1946', en: 'Attaches surplus engines to bicycles in postwar Japan.', es: 'Monta motores excedentes en bicicletas en el Japón de posguerra.' },
      { year: '1948', en: 'Founds Honda Motor Company.', es: 'Funda Honda Motor Company.' },
      { year: '1958', en: 'Launches the Super Cub.', es: 'Lanza la Super Cub.' },
      { year: '1972', en: 'The Civic and its CVCC engine open the U.S. market.', es: 'El Civic y su motor CVCC abren el mercado estadounidense.' },
    ],
  },
  {
    slug: 'enzo-ferrari',
    name: 'Enzo Ferrari',
    company: 'Ferrari',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'industry',
    born: '1898—1988',
    birthplace: { en: 'Modena, Italy', es: 'Módena, Italia' },
    nationality: { en: 'Italian', es: 'Italiano' },
    knownFor: {
      en: 'Selling road cars to fund a racing team, and creating the most valuable badge in motoring',
      es: 'Vender autos de calle para financiar un equipo de carreras, y crear el emblema más valioso del automovilismo',
    },
    dek: {
      en: 'He always insisted the road cars were a means to an end. The end was racing, and the means became one of the strongest brands ever built.',
      es: 'Siempre insistió en que los autos de calle eran un medio. El fin eran las carreras, y el medio se convirtió en una de las marcas más fuertes jamás construidas.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Ferrari raced for Alfa Romeo in the 1920s and then ran its racing operation, founding Scuderia Ferrari in 1929 as the team that campaigned Alfa cars. He left in 1939 under an agreement that barred him from using the Ferrari name in racing for several years.',
        'The first car bearing his own name arrived in 1947. From the beginning he treated production cars as the funding mechanism for competition, keeping volumes deliberately low, which had the side effect of building scarcity into the brand permanently.',
        'Ferrari became the most successful team in Formula One history and the road cars became a byword for status well beyond people who follow racing. He ran the company until his death in 1988, having sold a controlling stake to Fiat in 1969 while retaining authority over the racing side.',
      ],
      es: [
        'Ferrari corrió para Alfa Romeo en los años veinte y luego dirigió su operación de carreras, fundando la Scuderia Ferrari en 1929 como el equipo que competía con autos Alfa. Salió en 1939 bajo un acuerdo que le prohibía usar el nombre Ferrari en competencia durante varios años.',
        'El primer auto con su propio nombre llegó en 1947. Desde el inicio trató los autos de producción como el mecanismo de financiamiento de la competencia, manteniendo los volúmenes deliberadamente bajos, lo que tuvo el efecto colateral de incorporar la escasez a la marca de forma permanente.',
        'Ferrari se convirtió en el equipo más exitoso de la historia de la Fórmula 1 y los autos de calle se volvieron sinónimo de estatus mucho más allá de quienes siguen las carreras. Dirigió la empresa hasta su muerte en 1988, tras vender una participación de control a Fiat en 1969 conservando la autoridad sobre el área deportiva.',
      ],
    },
    timeline: [
      { year: '1929', en: 'Founds Scuderia Ferrari as a racing team for Alfa Romeo cars.', es: 'Funda la Scuderia Ferrari como equipo de carreras con autos Alfa Romeo.' },
      { year: '1947', en: 'The first car bearing the Ferrari name is built in Maranello.', es: 'Se construye en Maranello el primer auto con el nombre Ferrari.' },
      { year: '1950', en: 'Ferrari enters the inaugural Formula One World Championship.', es: 'Ferrari entra al primer Campeonato Mundial de Fórmula 1.' },
      { year: '1969', en: 'Sells a controlling stake to Fiat, keeping the racing operation.', es: 'Vende una participación de control a Fiat y conserva la operación de carreras.' },
    ],
  },
  {
    slug: 'estee-lauder',
    name: 'Estée Lauder',
    company: 'The Estée Lauder Companies',
    role: { en: 'Co-founder', es: 'Cofundadora' },
    sector: 'beauty',
    born: '1908—2004',
    birthplace: { en: 'Queens, New York, U.S.', es: 'Queens, Nueva York, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Inventing the sampling and gift-with-purchase model the beauty industry still runs on',
      es: 'Inventar el modelo de muestras y regalo con compra sobre el que todavía funciona la industria de la belleza',
    },
    dek: {
      en: 'She could not afford advertising, so she gave the product away — and discovered a distribution mechanism more powerful than any campaign she could have bought.',
      es: 'No podía pagar publicidad, así que regaló el producto, y descubrió un mecanismo de distribución más poderoso que cualquier campaña que hubiera podido comprar.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Lauder learned to make creams from her uncle, a chemist, and sold them from beauty salons in New York, applying them to customers by hand while they sat. The direct demonstration was the sales method from the very beginning.',
        'She and her husband Joseph founded the company in 1946 with a handful of products. Getting counter space at Saks Fifth Avenue in 1948 gave her the prestige positioning she wanted, and she refused to sell anywhere that would dilute it.',
        'Youth-Dew, a bath oil that doubled as a fragrance, arrived in 1953 and turned perfume from an occasional gift into an everyday purchase. The gift-with-purchase tactic she pioneered became standard across the entire industry, and the company expanded into a portfolio including Clinique, Aramis and later MAC and La Mer.',
      ],
      es: [
        'Lauder aprendió a hacer cremas con su tío, un químico, y las vendía desde salones de belleza en Nueva York, aplicándolas a mano a las clientas mientras estaban sentadas. La demostración directa fue el método de venta desde el primer día.',
        'Ella y su esposo Joseph fundaron la empresa en 1946 con un puñado de productos. Conseguir espacio de mostrador en Saks Fifth Avenue en 1948 le dio el posicionamiento de prestigio que buscaba, y se negó a vender en cualquier lugar que lo diluyera.',
        'Youth-Dew, un aceite de baño que funcionaba también como fragancia, llegó en 1953 y convirtió el perfume de regalo ocasional en compra cotidiana. La táctica del regalo con compra que ella inauguró se volvió estándar en toda la industria, y la empresa se expandió a un portafolio que incluye Clinique, Aramis y más tarde MAC y La Mer.',
      ],
    },
    timeline: [
      { year: '1946', en: 'Founds the company with her husband Joseph.', es: 'Funda la empresa con su esposo Joseph.' },
      { year: '1948', en: 'Wins counter space at Saks Fifth Avenue.', es: 'Consigue espacio de mostrador en Saks Fifth Avenue.' },
      { year: '1953', en: 'Launches Youth-Dew.', es: 'Lanza Youth-Dew.' },
      { year: '1968', en: 'Launches Clinique, the first dermatologist-guided brand at scale.', es: 'Lanza Clinique, la primera marca guiada por dermatólogos a escala.' },
    ],
  },
  {
    slug: 'rihanna',
    name: 'Robyn "Rihanna" Fenty',
    company: 'Fenty Beauty · Savage X Fenty',
    role: { en: 'Founder', es: 'Fundadora' },
    sector: 'beauty',
    born: '1988',
    birthplace: { en: 'Saint Michael, Barbados', es: 'Saint Michael, Barbados' },
    nationality: { en: 'Barbadian', es: 'Barbadense' },
    knownFor: {
      en: 'Forcing the beauty industry to widen its shade ranges',
      es: 'Obligar a la industria de la belleza a ampliar sus rangos de tonos',
    },
    dek: {
      en: 'She launched a foundation line in forty shades and made every competitor’s range look like a deliberate omission overnight.',
      es: 'Lanzó una línea de base en cuarenta tonos y de la noche a la mañana hizo que el rango de cada competidor pareciera una omisión deliberada.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Fenty was already among the most successful recording artists of her generation when she moved into consumer products, partnering with LVMH’s Kendo division to launch Fenty Beauty in 2017.',
        'The launch strategy was the product decision. Rather than starting with a standard range and extending later, she opened with forty foundation shades, and the deepest tones sold out first. It demonstrated commercially what customers had been saying for years, and competitors rushed to expand their own ranges — an industry shift widely referred to afterwards as the Fenty effect.',
        'Savage X Fenty followed in 2018 with a similar argument applied to lingerie, using runway shows cast across a wide range of body types. In 2019 she launched a fashion house with LVMH, the first new house the group had created from scratch in decades and the first led by a Black woman.',
      ],
      es: [
        'Fenty ya era una de las artistas discográficas más exitosas de su generación cuando se movió a productos de consumo, asociándose con la división Kendo de LVMH para lanzar Fenty Beauty en 2017.',
        'La estrategia de lanzamiento fue la decisión de producto. En lugar de arrancar con un rango estándar y ampliarlo después, abrió con cuarenta tonos de base, y los tonos más oscuros se agotaron primero. Demostró comercialmente lo que las clientas venían diciendo por años, y los competidores corrieron a ampliar sus propios rangos, un giro de industria que después se llamó ampliamente el efecto Fenty.',
        'Savage X Fenty llegó en 2018 con un argumento similar aplicado a la lencería, con desfiles montados sobre una amplia variedad de tipos de cuerpo. En 2019 lanzó una casa de moda con LVMH, la primera casa nueva que el grupo creaba desde cero en décadas y la primera liderada por una mujer negra.',
      ],
    },
    timeline: [
      { year: '2017', en: 'Launches Fenty Beauty with forty foundation shades.', es: 'Lanza Fenty Beauty con cuarenta tonos de base.' },
      { year: '2018', en: 'Launches the lingerie brand Savage X Fenty.', es: 'Lanza la marca de lencería Savage X Fenty.' },
      { year: '2019', en: 'Launches a fashion house with LVMH.', es: 'Lanza una casa de moda con LVMH.' },
      { year: '2020—', en: 'Expands into skincare and haircare.', es: 'Se expande a cuidado de la piel y del cabello.' },
    ],
  },
  {
    slug: 'sara-blakely',
    name: 'Sara Blakely',
    company: 'Spanx',
    role: { en: 'Founder', es: 'Fundadora' },
    sector: 'beauty',
    born: '1971',
    birthplace: { en: 'Clearwater, Florida, U.S.', es: 'Clearwater, Florida, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Building a shapewear company from savings, with no outside investment',
      es: 'Construir una empresa de fajas moldeadoras desde sus ahorros, sin inversión externa',
    },
    dek: {
      en: 'She started with five thousand dollars, wrote her own patent from a library book, and kept full ownership for two decades.',
      es: 'Empezó con cinco mil dólares, escribió su propia patente con un libro de biblioteca, y conservó la propiedad total durante dos décadas.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Blakely was selling fax machines door to door in Florida when she cut the feet off a pair of control-top pantyhose to wear under white trousers. The improvised solution worked, and she could not find anything like it for sale.',
        'She spent her savings — about five thousand dollars — developing the product, drove to hosiery mills in North Carolina and was turned down repeatedly until one agreed to make a prototype, and wrote the patent application herself using a textbook rather than paying a law firm.',
        'Spanx launched in 2000 after she talked her way into a Neiman Marcus buyer meeting and demonstrated the product on herself. She grew the company without outside capital or traditional advertising, retaining full ownership until selling a majority stake to Blackstone in 2021.',
      ],
      es: [
        'Blakely vendía máquinas de fax de puerta en puerta en Florida cuando le cortó los pies a unas medias de control para usarlas bajo un pantalón blanco. La solución improvisada funcionó, y no encontró nada parecido a la venta.',
        'Gastó sus ahorros, unos cinco mil dólares, desarrollando el producto, manejó hasta fábricas de medias en Carolina del Norte y fue rechazada una y otra vez hasta que una aceptó hacer un prototipo, y escribió ella misma la solicitud de patente usando un libro de texto en vez de pagarle a un despacho.',
        'Spanx se lanzó en 2000 después de que se ganara a hablar una reunión con una compradora de Neiman Marcus y demostrara el producto en sí misma. Hizo crecer la empresa sin capital externo ni publicidad tradicional, conservando la propiedad total hasta vender una participación mayoritaria a Blackstone en 2021.',
      ],
    },
    timeline: [
      { year: '1998', en: 'Cuts the feet off pantyhose and starts developing the product.', es: 'Le corta los pies a unas medias y empieza a desarrollar el producto.' },
      { year: '2000', en: 'Spanx launches at Neiman Marcus.', es: 'Spanx se lanza en Neiman Marcus.' },
      { year: '2012', en: 'Reported as a self-made billionaire with no outside investment.', es: 'Reportada como multimillonaria hecha a sí misma sin inversión externa.' },
      { year: '2021', en: 'Sells a majority stake to Blackstone.', es: 'Vende una participación mayoritaria a Blackstone.' },
    ],
  },
];
