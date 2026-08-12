import type { Founder } from './types';

/**
 * Archive profiles, technology desk.
 *
 * These are editorial summaries compiled from widely published public record.
 * They deliberately avoid net-worth figures and present-tense claims about
 * titles, both of which go stale. No quotations are attributed to anyone
 * unless the wording is a matter of documented record.
 */
export const TECH_FOUNDERS: Founder[] = [
  {
    slug: 'elon-musk',
    name: 'Elon Musk',
    company: 'Tesla · SpaceX',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'technology',
    born: '1971',
    birthplace: { en: 'Pretoria, South Africa', es: 'Pretoria, Sudáfrica' },
    nationality: { en: 'South African, Canadian, American', es: 'Sudafricano, canadiense, estadounidense' },
    knownFor: {
      en: 'Making electric cars and reusable rockets commercially viable',
      es: 'Hacer comercialmente viables los autos eléctricos y los cohetes reutilizables',
    },
    dek: {
      en: 'He took the two industries widely considered impossible for a startup — cars and spaceflight — and forced both to reorganise around him.',
      es: 'Tomó las dos industrias consideradas imposibles para una startup, autos y vuelo espacial, y obligó a ambas a reorganizarse a su alrededor.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Musk left South Africa as a teenager, studied in Canada and the United States, and sold his first company, the web software firm Zip2, in 1999. He put the proceeds into X.com, an online bank that merged with a rival to become PayPal, which eBay acquired in 2002.',
        'He then did the thing almost nobody does with startup money: he spent it on hardware. SpaceX was founded in 2002 to lower the cost of reaching orbit, and he joined Tesla early enough to shape it as an operator rather than a passive investor, becoming chief executive in 2008. Both companies came close to running out of money in the same year.',
        'SpaceX went on to land and reuse orbital boosters, a capability the established aerospace industry had treated as uneconomic, and Tesla pushed the entire car industry into electric programmes it had repeatedly delayed. Musk has since extended into neurotechnology and tunnelling, and acquired Twitter in 2022.',
      ],
      es: [
        'Musk salió de Sudáfrica siendo adolescente, estudió en Canadá y Estados Unidos, y vendió su primera empresa, la firma de software web Zip2, en 1999. Puso lo obtenido en X.com, un banco en línea que se fusionó con un rival para convertirse en PayPal, que eBay adquirió en 2002.',
        'Después hizo lo que casi nadie hace con dinero de startups: gastarlo en hardware. SpaceX se fundó en 2002 para bajar el costo de llegar a órbita, y él entró a Tesla lo bastante temprano como para moldearla desde la operación y no como inversionista pasivo, asumiendo como director ejecutivo en 2008. Ambas empresas estuvieron cerca de quedarse sin dinero el mismo año.',
        'SpaceX terminó aterrizando y reutilizando propulsores orbitales, una capacidad que la industria aeroespacial establecida daba por antieconómica, y Tesla empujó a toda la industria automotriz hacia programas eléctricos que había aplazado una y otra vez. Musk se ha extendido desde entonces a la neurotecnología y la excavación de túneles, y adquirió Twitter en 2022.',
      ],
    },
    timeline: [
      { year: '1999', en: 'Sells Zip2 and founds the online bank X.com.', es: 'Vende Zip2 y funda el banco en línea X.com.' },
      { year: '2002', en: 'PayPal is acquired by eBay; SpaceX is founded.', es: 'eBay adquiere PayPal; se funda SpaceX.' },
      { year: '2008', en: 'Becomes chief executive of Tesla as both companies near collapse.', es: 'Asume como director ejecutivo de Tesla mientras ambas empresas rozan el colapso.' },
      { year: '2015—', en: 'SpaceX lands and reuses orbital boosters; Tesla scales mass production.', es: 'SpaceX aterriza y reutiliza propulsores orbitales; Tesla escala la producción masiva.' },
    ],
  },
  {
    slug: 'jeff-bezos',
    name: 'Jeff Bezos',
    company: 'Amazon · Blue Origin',
    role: { en: 'Founder and executive chairman', es: 'Fundador y presidente ejecutivo' },
    sector: 'technology',
    born: '1964',
    birthplace: { en: 'Albuquerque, New Mexico, U.S.', es: 'Albuquerque, Nuevo México, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Turning an online bookstore into the infrastructure layer of e-commerce and cloud computing',
      es: 'Convertir una librería en línea en la capa de infraestructura del comercio electrónico y la nube',
    },
    dek: {
      en: 'He left a Wall Street job to sell books over a network almost nobody shopped on, then spent two decades reinvesting every dollar of profit back into the machine.',
      es: 'Dejó un trabajo en Wall Street para vender libros por una red en la que casi nadie compraba, y pasó dos décadas reinvirtiendo cada dólar de ganancia en la máquina.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Bezos was working at a quantitative hedge fund when he noticed how fast web usage was compounding. He drove west in 1994 and started Amazon out of a garage in the Seattle area, choosing books because the catalogue was enormous and no physical store could stock all of it.',
        'The strategy that defined the company was refusing to optimise for short-term profit. Amazon reported thin or negative margins for years while building warehouses, logistics and software, and the patience proved to be the moat. The launch of Amazon Web Services in 2006 turned the company’s internal infrastructure into a business that ended up subsidising everything else.',
        'He founded the rocket company Blue Origin in 2000, bought The Washington Post in 2013, and stepped down as Amazon chief executive in 2021, handing the role to Andy Jassy while remaining executive chairman.',
      ],
      es: [
        'Bezos trabajaba en un fondo de cobertura cuantitativo cuando notó lo rápido que se componía el uso de la web. Manejó hacia el oeste en 1994 y arrancó Amazon desde un garaje en el área de Seattle, eligiendo libros porque el catálogo era enorme y ninguna tienda física podía tenerlo completo.',
        'La estrategia que definió a la empresa fue negarse a optimizar la ganancia de corto plazo. Amazon reportó márgenes delgados o negativos durante años mientras construía bodegas, logística y software, y esa paciencia resultó ser el foso. El lanzamiento de Amazon Web Services en 2006 convirtió la infraestructura interna de la empresa en un negocio que terminó subsidiando todo lo demás.',
        'Fundó la empresa de cohetes Blue Origin en 2000, compró The Washington Post en 2013 y dejó la dirección ejecutiva de Amazon en 2021, entregando el cargo a Andy Jassy y quedándose como presidente ejecutivo.',
      ],
    },
    timeline: [
      { year: '1994', en: 'Founds Amazon as an online bookstore near Seattle.', es: 'Funda Amazon como librería en línea cerca de Seattle.' },
      { year: '2000', en: 'Founds the spaceflight company Blue Origin.', es: 'Funda la empresa de vuelo espacial Blue Origin.' },
      { year: '2006', en: 'Launches Amazon Web Services, creating the modern cloud market.', es: 'Lanza Amazon Web Services y crea el mercado moderno de la nube.' },
      { year: '2021', en: 'Steps down as chief executive, staying on as executive chairman.', es: 'Deja la dirección ejecutiva y permanece como presidente ejecutivo.' },
    ],
  },
  {
    slug: 'steve-jobs',
    name: 'Steve Jobs',
    company: 'Apple · Pixar',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'technology',
    born: '1955—2011',
    birthplace: { en: 'San Francisco, California, U.S.', es: 'San Francisco, California, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'The Macintosh, the iPod and the iPhone — and the return that saved Apple',
      es: 'El Macintosh, el iPod y el iPhone, y el regreso que salvó a Apple',
    },
    dek: {
      en: 'He was forced out of the company he started, spent eleven years elsewhere, came back, and turned it into the most valuable business on earth.',
      es: 'Fue expulsado de la empresa que fundó, pasó once años en otra parte, volvió y la convirtió en el negocio más valioso del planeta.',
    },
    readMinutes: 6,
    body: {
      en: [
        'Jobs co-founded Apple in 1976 with Steve Wozniak, who built the machines while Jobs decided what they should be and how they should be sold. The Apple II made the company; the Macintosh, launched in 1984, made its design philosophy legible to everyone else.',
        'He lost a boardroom fight and left in 1985. The intervening years are the part most people skip: he founded NeXT, whose operating system Apple would later buy and build on, and he bought the computer graphics division that became Pixar, which released Toy Story in 1995.',
        'Apple acquired NeXT in 1996 and Jobs returned, cutting the product line to a handful of machines. The iMac stabilised the company, the iPod reorganised the music industry, and the iPhone in 2007 collapsed the phone, the camera, the music player and the computer into one object. He died in 2011.',
      ],
      es: [
        'Jobs cofundó Apple en 1976 con Steve Wozniak, quien construía las máquinas mientras Jobs decidía qué debían ser y cómo debían venderse. El Apple II hizo a la empresa; el Macintosh, lanzado en 1984, hizo legible su filosofía de diseño para todos los demás.',
        'Perdió una pelea de directorio y salió en 1985. Los años intermedios son la parte que casi todos se saltan: fundó NeXT, cuyo sistema operativo Apple compraría después para construir encima, y compró la división de gráficos por computadora que se convirtió en Pixar, que estrenó Toy Story en 1995.',
        'Apple adquirió NeXT en 1996 y Jobs regresó, recortando la línea de productos a un puñado de máquinas. El iMac estabilizó la empresa, el iPod reorganizó la industria musical, y el iPhone en 2007 colapsó el teléfono, la cámara, el reproductor de música y la computadora en un solo objeto. Murió en 2011.',
      ],
    },
    timeline: [
      { year: '1976', en: 'Co-founds Apple with Steve Wozniak.', es: 'Cofunda Apple con Steve Wozniak.' },
      { year: '1985', en: 'Leaves Apple after a boardroom fight; founds NeXT and later buys Pixar.', es: 'Deja Apple tras una pelea de directorio; funda NeXT y luego compra Pixar.' },
      { year: '1997', en: 'Returns to Apple after its acquisition of NeXT.', es: 'Regresa a Apple tras la adquisición de NeXT.' },
      { year: '2007', en: 'Introduces the iPhone.', es: 'Presenta el iPhone.' },
    ],
  },
  {
    slug: 'bill-gates',
    name: 'Bill Gates',
    company: 'Microsoft',
    role: { en: 'Co-founder', es: 'Cofundador' },
    sector: 'technology',
    born: '1955',
    birthplace: { en: 'Seattle, Washington, U.S.', es: 'Seattle, Washington, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Putting a copy of Windows on almost every desk in the world',
      es: 'Poner una copia de Windows en casi todos los escritorios del mundo',
    },
    dek: {
      en: 'He understood earlier than the hardware companies did that the software, not the machine, was where the durable business would be.',
      es: 'Entendió antes que las empresas de hardware que el software, no la máquina, era donde estaría el negocio duradero.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Gates dropped out of Harvard and founded Microsoft with Paul Allen in 1975, writing software for the earliest personal computers. The decision that shaped the industry came in 1980, when Microsoft licensed an operating system to IBM without giving up the right to sell it to anyone else.',
        'That arrangement let Microsoft ride the flood of IBM-compatible machines that followed. Windows turned the company into the default layer between users and hardware, and Office made it the default at work too. The dominance eventually drew a landmark U.S. antitrust case against the company.',
        'He stepped down as chief executive in 2000 and moved gradually out of day-to-day operations, redirecting his attention to the Gates Foundation and its work in global health, sanitation and vaccination.',
      ],
      es: [
        'Gates dejó Harvard y fundó Microsoft con Paul Allen en 1975, escribiendo software para las primeras computadoras personales. La decisión que moldeó a la industria llegó en 1980, cuando Microsoft licenció un sistema operativo a IBM sin ceder el derecho de vendérselo a nadie más.',
        'Ese acuerdo permitió a Microsoft montarse en la avalancha de máquinas compatibles con IBM que vino después. Windows convirtió a la empresa en la capa por defecto entre el usuario y el hardware, y Office la volvió también el estándar en el trabajo. Ese dominio terminó atrayendo un caso antimonopolio histórico en Estados Unidos.',
        'Dejó la dirección ejecutiva en 2000 y se fue apartando de la operación diaria, redirigiendo su atención a la Fundación Gates y su trabajo en salud global, saneamiento y vacunación.',
      ],
    },
    timeline: [
      { year: '1975', en: 'Founds Microsoft with Paul Allen.', es: 'Funda Microsoft con Paul Allen.' },
      { year: '1980', en: 'Licenses an operating system to IBM while keeping the right to resell it.', es: 'Licencia un sistema operativo a IBM conservando el derecho de revenderlo.' },
      { year: '1995', en: 'Windows 95 makes the graphical PC mainstream.', es: 'Windows 95 vuelve masiva la PC gráfica.' },
      { year: '2000', en: 'Steps down as chief executive and turns toward philanthropy.', es: 'Deja la dirección ejecutiva y se vuelca a la filantropía.' },
    ],
  },
  {
    slug: 'mark-zuckerberg',
    name: 'Mark Zuckerberg',
    company: 'Meta',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'technology',
    born: '1984',
    birthplace: { en: 'White Plains, New York, U.S.', es: 'White Plains, Nueva York, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Building the social graph that billions of people use daily',
      es: 'Construir el grafo social que miles de millones de personas usan a diario',
    },
    dek: {
      en: 'He started it in a dorm room at nineteen and has spent every year since defending it from the next platform shift.',
      es: 'Lo empezó en un dormitorio universitario a los diecinueve y ha pasado cada año desde entonces defendiéndolo del siguiente cambio de plataforma.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Zuckerberg launched Facebook from his Harvard dorm in 2004 and dropped out as it spread from campus to campus. The product’s advantage was structural: it required real identities, which made the network more useful and far harder to replicate than the pseudonymous services around it.',
        'His most consequential decisions were acquisitions made when they looked expensive. Instagram in 2012 and WhatsApp in 2014 both cost sums that drew public ridicule at the time, and both became central to the company. The pattern was buying the thing that could displace him.',
        'The company renamed itself Meta in 2021 to signal a bet on virtual and augmented reality, while facing sustained scrutiny over privacy, content moderation and its effect on public discourse. Zuckerberg retains voting control, an unusually durable grip for a founder two decades in.',
      ],
      es: [
        'Zuckerberg lanzó Facebook desde su dormitorio en Harvard en 2004 y abandonó la universidad mientras se extendía de campus en campus. La ventaja del producto era estructural: exigía identidades reales, lo que hacía la red más útil y mucho más difícil de replicar que los servicios seudónimos de la época.',
        'Sus decisiones más determinantes fueron adquisiciones hechas cuando parecían caras. Instagram en 2012 y WhatsApp en 2014 costaron sumas que en su momento provocaron burlas públicas, y ambas se volvieron centrales para la empresa. El patrón era comprar aquello que podía desplazarlo.',
        'La empresa se renombró Meta en 2021 para señalar una apuesta por la realidad virtual y aumentada, mientras enfrentaba escrutinio sostenido por privacidad, moderación de contenido y su efecto en el debate público. Zuckerberg conserva el control de voto, un agarre inusualmente duradero para un fundador dos décadas después.',
      ],
    },
    timeline: [
      { year: '2004', en: 'Launches Facebook from a Harvard dorm room.', es: 'Lanza Facebook desde un dormitorio en Harvard.' },
      { year: '2012', en: 'Acquires Instagram and takes the company public.', es: 'Adquiere Instagram y saca la empresa a bolsa.' },
      { year: '2014', en: 'Acquires WhatsApp.', es: 'Adquiere WhatsApp.' },
      { year: '2021', en: 'Renames the company Meta around a virtual reality bet.', es: 'Renombra la empresa como Meta en torno a una apuesta por la realidad virtual.' },
    ],
  },
  {
    slug: 'jensen-huang',
    name: 'Jensen Huang',
    company: 'NVIDIA',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'technology',
    born: '1963',
    birthplace: { en: 'Tainan, Taiwan', es: 'Tainan, Taiwán' },
    nationality: { en: 'Taiwanese-American', es: 'Taiwanés-estadounidense' },
    knownFor: {
      en: 'Building the chips that the entire artificial intelligence industry runs on',
      es: 'Construir los chips sobre los que corre toda la industria de la inteligencia artificial',
    },
    dek: {
      en: 'He spent three decades making graphics cards for video games, and it turned out he had accidentally built the engine of machine learning.',
      es: 'Pasó tres décadas haciendo tarjetas gráficas para videojuegos, y resultó que había construido sin querer el motor del aprendizaje automático.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Huang moved to the United States as a child, trained as an electrical engineer, and co-founded NVIDIA in 1993 with Chris Malachowsky and Curtis Priem. The company nearly failed more than once in its first years before the GeForce line established it in gaming graphics.',
        'The decision that changed everything was CUDA, released in 2006, which let programmers use graphics processors for general computation. It was an expensive bet with no obvious customer, and NVIDIA funded it for years.',
        'When deep learning became practical, researchers found the hardware and the software layer already waiting. NVIDIA became the default supplier for training large models, and Huang — still running the company he started three decades earlier — found himself at the centre of the most capital-intensive technology build-out in a generation.',
      ],
      es: [
        'Huang se mudó a Estados Unidos de niño, se formó como ingeniero eléctrico y cofundó NVIDIA en 1993 con Chris Malachowsky y Curtis Priem. La empresa estuvo cerca de fracasar más de una vez en sus primeros años, antes de que la línea GeForce la estableciera en gráficos para videojuegos.',
        'La decisión que lo cambió todo fue CUDA, lanzado en 2006, que permitió a los programadores usar procesadores gráficos para cómputo general. Era una apuesta cara sin un cliente obvio, y NVIDIA la financió durante años.',
        'Cuando el aprendizaje profundo se volvió práctico, los investigadores encontraron el hardware y la capa de software ya esperándolos. NVIDIA se convirtió en el proveedor por defecto para entrenar modelos grandes, y Huang, todavía al frente de la empresa que fundó tres décadas antes, quedó en el centro del despliegue tecnológico más intensivo en capital de una generación.',
      ],
    },
    timeline: [
      { year: '1993', en: 'Co-founds NVIDIA to build graphics chips.', es: 'Cofunda NVIDIA para construir chips gráficos.' },
      { year: '1999', en: 'The GeForce line establishes the company in gaming.', es: 'La línea GeForce establece a la empresa en videojuegos.' },
      { year: '2006', en: 'Releases CUDA, opening graphics processors to general computation.', es: 'Lanza CUDA y abre los procesadores gráficos al cómputo general.' },
      { year: '2012—', en: 'Deep learning turns NVIDIA hardware into the industry default.', es: 'El aprendizaje profundo vuelve al hardware de NVIDIA el estándar de la industria.' },
    ],
  },
  {
    slug: 'jack-ma',
    name: 'Jack Ma',
    company: 'Alibaba',
    role: { en: 'Co-founder', es: 'Cofundador' },
    sector: 'technology',
    born: '1964',
    birthplace: { en: 'Hangzhou, China', es: 'Hangzhou, China' },
    nationality: { en: 'Chinese', es: 'Chino' },
    knownFor: {
      en: 'Building the marketplace that connected Chinese manufacturing to the world',
      es: 'Construir el mercado que conectó la manufactura china con el mundo',
    },
    dek: {
      en: 'An English teacher with no engineering background who was rejected from job after job, and then built one of the largest commerce platforms ever assembled.',
      es: 'Un profesor de inglés sin formación en ingeniería, rechazado en trabajo tras trabajo, que después construyó una de las mayores plataformas de comercio jamás ensambladas.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Ma trained as an English teacher in Hangzhou and encountered the internet for the first time on a trip to the United States in the mid-1990s. He searched for Chinese products, found almost nothing, and went home convinced there was a gap.',
        'He founded Alibaba in 1999 in his apartment with a group of co-founders, building a business-to-business marketplace that let small Chinese manufacturers reach international buyers directly. Taobao followed for consumers, and beat eBay in the domestic market by making listings free and building trust mechanisms suited to local commerce.',
        'Alibaba’s 2014 listing on the New York Stock Exchange was at the time the largest initial public offering on record. Ma stepped down as chairman in 2019, having repeatedly framed his lack of technical training as the reason he stayed focused on what customers actually needed.',
      ],
      es: [
        'Ma se formó como profesor de inglés en Hangzhou y se topó con internet por primera vez en un viaje a Estados Unidos a mediados de los noventa. Buscó productos chinos, casi no encontró nada, y volvió a casa convencido de que había un hueco.',
        'Fundó Alibaba en 1999 en su departamento junto a un grupo de cofundadores, construyendo un mercado entre empresas que permitía a pequeños fabricantes chinos llegar directo a compradores internacionales. Después vino Taobao para consumidores, que le ganó a eBay en el mercado local haciendo gratuitas las publicaciones y construyendo mecanismos de confianza adaptados al comercio local.',
        'La salida a bolsa de Alibaba en la Bolsa de Nueva York en 2014 fue en su momento la mayor oferta pública inicial registrada. Ma dejó la presidencia en 2019, después de plantear repetidamente que su falta de formación técnica fue la razón por la que se mantuvo enfocado en lo que los clientes realmente necesitaban.',
      ],
    },
    timeline: [
      { year: '1999', en: 'Founds Alibaba from his apartment in Hangzhou.', es: 'Funda Alibaba desde su departamento en Hangzhou.' },
      { year: '2003', en: 'Launches Taobao, which outcompetes eBay in China.', es: 'Lanza Taobao, que le gana a eBay en China.' },
      { year: '2014', en: 'Alibaba’s New York listing sets a record for the largest IPO.', es: 'La salida a bolsa en Nueva York marca un récord como la mayor OPI.' },
      { year: '2019', en: 'Steps down as chairman.', es: 'Deja la presidencia.' },
    ],
  },
  {
    slug: 'brian-chesky',
    name: 'Brian Chesky',
    company: 'Airbnb',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'technology',
    born: '1981',
    birthplace: { en: 'Niskayuna, New York, U.S.', es: 'Niskayuna, Nueva York, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Convincing strangers to sleep in each other’s homes',
      es: 'Convencer a desconocidos de dormir en casas ajenas',
    },
    dek: {
      en: 'A designer, not an engineer, who solved the hardest problem in his industry: manufacturing trust between people who have never met.',
      es: 'Un diseñador, no un ingeniero, que resolvió el problema más difícil de su industria: fabricar confianza entre personas que nunca se han visto.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Chesky trained in industrial design at the Rhode Island School of Design and moved to San Francisco without a clear plan. In 2007, unable to make rent, he and Joe Gebbia put air mattresses on their apartment floor during a design conference that had filled every hotel in the city.',
        'With Nathan Blecharczyk they turned it into a company. Investors passed repeatedly, and the founders funded themselves for a period by selling novelty cereal boxes during a U.S. election. The breakthrough came from a design instinct rather than a technical one: they travelled to New York, photographed listings properly, and watched bookings rise.',
        'Airbnb built the review systems, payments and guarantees that made the whole category possible, went public in 2020 during a pandemic that had briefly erased most of its business, and has since been a recurring reference point in debates over housing and short-term rentals.',
      ],
      es: [
        'Chesky se formó en diseño industrial en la Rhode Island School of Design y se mudó a San Francisco sin un plan claro. En 2007, sin poder pagar la renta, él y Joe Gebbia pusieron colchones inflables en el piso de su departamento durante una conferencia de diseño que había llenado todos los hoteles de la ciudad.',
        'Con Nathan Blecharczyk lo convirtieron en empresa. Los inversionistas los rechazaron una y otra vez, y los fundadores se autofinanciaron un tiempo vendiendo cajas de cereal temáticas durante una elección en Estados Unidos. El quiebre vino de un instinto de diseño más que técnico: viajaron a Nueva York, fotografiaron bien las publicaciones y vieron subir las reservas.',
        'Airbnb construyó los sistemas de reseñas, pagos y garantías que hicieron posible toda la categoría, salió a bolsa en 2020 durante una pandemia que había borrado brevemente casi todo su negocio, y desde entonces es una referencia recurrente en los debates sobre vivienda y alquileres de corto plazo.',
      ],
    },
    timeline: [
      { year: '2007', en: 'Rents air mattresses in his apartment during a design conference.', es: 'Renta colchones inflables en su departamento durante una conferencia de diseño.' },
      { year: '2008', en: 'Founds Airbnb with Joe Gebbia and Nathan Blecharczyk.', es: 'Funda Airbnb con Joe Gebbia y Nathan Blecharczyk.' },
      { year: '2009', en: 'Photographs listings by hand in New York; bookings climb.', es: 'Fotografía publicaciones a mano en Nueva York; las reservas suben.' },
      { year: '2020', en: 'Takes the company public months after the pandemic gutted travel.', es: 'Saca la empresa a bolsa meses después de que la pandemia devastara los viajes.' },
    ],
  },
  {
    slug: 'melanie-perkins',
    name: 'Melanie Perkins',
    company: 'Canva',
    role: { en: 'Co-founder and chief executive', es: 'Cofundadora y directora ejecutiva' },
    sector: 'technology',
    born: '1987',
    birthplace: { en: 'Perth, Australia', es: 'Perth, Australia' },
    nationality: { en: 'Australian', es: 'Australiana' },
    knownFor: {
      en: 'Making graphic design usable by people who are not designers',
      es: 'Hacer que el diseño gráfico lo pueda usar gente que no es diseñadora',
    },
    dek: {
      en: 'She was turned down by more than a hundred investors before building one of the most widely used design tools in the world.',
      es: 'Más de cien inversionistas la rechazaron antes de que construyera una de las herramientas de diseño más usadas del mundo.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Perkins was teaching design software to university students in Perth when she noticed how long it took anyone to learn the basics. The tools were built for professionals and priced accordingly, and everyone else simply avoided them.',
        'She and Cliff Obrecht started with a narrow wedge: Fusion Books, an online tool for designing school yearbooks. It gave them years of experience in browser-based design and a working business before they attempted the general version.',
        'Canva launched in 2013 with Cameron Adams as the third co-founder, after a long stretch of rejection from investors who did not believe a design company could come out of Australia. The product’s freemium model and template-first approach made it standard in classrooms, small businesses and marketing teams worldwide.',
      ],
      es: [
        'Perkins enseñaba software de diseño a estudiantes universitarios en Perth cuando notó cuánto tardaba cualquiera en aprender lo básico. Las herramientas estaban hechas para profesionales y tenían precio acorde, y todos los demás simplemente las evitaban.',
        'Ella y Cliff Obrecht empezaron con una cuña angosta: Fusion Books, una herramienta en línea para diseñar anuarios escolares. Eso les dio años de experiencia en diseño desde el navegador y un negocio funcionando antes de intentar la versión general.',
        'Canva se lanzó en 2013 con Cameron Adams como tercer cofundador, tras un largo tramo de rechazos de inversionistas que no creían que una empresa de diseño pudiera salir de Australia. El modelo freemium del producto y su enfoque de plantillas primero la volvieron estándar en salones de clase, pequeños negocios y equipos de marketing en todo el mundo.',
      ],
    },
    timeline: [
      { year: '2007', en: 'Launches Fusion Books, an online school yearbook designer.', es: 'Lanza Fusion Books, un diseñador de anuarios escolares en línea.' },
      { year: '2012', en: 'Raises a first round after more than a hundred rejections.', es: 'Levanta una primera ronda tras más de cien rechazos.' },
      { year: '2013', en: 'Canva launches publicly.', es: 'Canva se lanza públicamente.' },
      { year: '2019—', en: 'Canva becomes a default design tool for non-designers worldwide.', es: 'Canva se vuelve herramienta de diseño por defecto para no diseñadores en todo el mundo.' },
    ],
  },
  {
    slug: 'whitney-wolfe-herd',
    name: 'Whitney Wolfe Herd',
    company: 'Bumble',
    role: { en: 'Founder', es: 'Fundadora' },
    sector: 'technology',
    born: '1989',
    birthplace: { en: 'Salt Lake City, Utah, U.S.', es: 'Salt Lake City, Utah, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Rebuilding online dating around who gets to make the first move',
      es: 'Rehacer las citas en línea alrededor de quién da el primer paso',
    },
    dek: {
      en: 'She left the company she helped build, sued it, and then launched a competitor whose central rule was a direct answer to why she left.',
      es: 'Dejó la empresa que ayudó a construir, la demandó, y después lanzó un competidor cuya regla central era una respuesta directa a por qué se fue.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Wolfe Herd was part of the early team at Tinder and helped drive its adoption on U.S. college campuses. She left in 2014 and filed a lawsuit against the company alleging sexual harassment, which was settled.',
        'Bumble launched later that year with one structural difference: in heterosexual matches, only women could send the first message. It was a product rule that encoded a social argument, and it gave the app a clear identity in a crowded category.',
        'The company expanded into friendship and professional networking modes and went public in 2021, a listing that drew wide attention because of her age and because of how directly the company’s premise traced back to her own experience.',
      ],
      es: [
        'Wolfe Herd fue parte del equipo inicial de Tinder y ayudó a impulsar su adopción en campus universitarios de Estados Unidos. Salió en 2014 y presentó una demanda contra la empresa alegando acoso sexual, que se resolvió mediante acuerdo.',
        'Bumble se lanzó ese mismo año con una diferencia estructural: en las coincidencias heterosexuales, solo las mujeres podían enviar el primer mensaje. Era una regla de producto que codificaba un argumento social, y le dio a la app una identidad clara en una categoría saturada.',
        'La empresa se expandió a modos de amistad y contactos profesionales y salió a bolsa en 2021, una operación que atrajo amplia atención por su edad y por lo directamente que la premisa de la empresa se remontaba a su propia experiencia.',
      ],
    },
    timeline: [
      { year: '2012', en: 'Works on the early team at Tinder.', es: 'Trabaja en el equipo inicial de Tinder.' },
      { year: '2014', en: 'Leaves, sues, and founds Bumble.', es: 'Se va, demanda y funda Bumble.' },
      { year: '2016—', en: 'Adds friendship and professional networking modes.', es: 'Agrega modos de amistad y contactos profesionales.' },
      { year: '2021', en: 'Takes Bumble public.', es: 'Saca Bumble a bolsa.' },
    ],
  },
  {
    slug: 'tobi-lutke',
    name: 'Tobi Lütke',
    company: 'Shopify',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'technology',
    born: '1980',
    birthplace: { en: 'Koblenz, Germany', es: 'Coblenza, Alemania' },
    nationality: { en: 'German-Canadian', es: 'Germano-canadiense' },
    knownFor: {
      en: 'Giving small merchants the infrastructure that used to belong only to large retailers',
      es: 'Dar a los pequeños comerciantes la infraestructura que antes solo tenían los grandes minoristas',
    },
    dek: {
      en: 'He set out to sell snowboards online, could not find software he liked, and ended up selling the software instead.',
      es: 'Se propuso vender tablas de snowboard en línea, no encontró software que le gustara, y terminó vendiendo el software.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Lütke trained as a computer programmer in Germany through an apprenticeship rather than a university degree, then moved to Canada. In 2004 he set out to open an online snowboard shop called Snowdevil with Scott Lake, and found the available e-commerce platforms unworkable.',
        'He built his own, and the tooling turned out to be the better business. Shopify launched in 2006, aimed squarely at merchants who wanted a professional storefront without hiring a development team.',
        'The company grew by treating independent sellers as a market worth serving properly rather than a low-value segment, expanding into payments, logistics and point-of-sale. Lütke has remained unusually vocal about engineering culture and about running the company as a long-term platform rather than a retailer.',
      ],
      es: [
        'Lütke se formó como programador en Alemania mediante un aprendizaje y no con un título universitario, y después se mudó a Canadá. En 2004 se propuso abrir una tienda de snowboard en línea llamada Snowdevil con Scott Lake, y encontró impracticables las plataformas de comercio electrónico disponibles.',
        'Construyó la suya, y la herramienta resultó ser el mejor negocio. Shopify se lanzó en 2006, apuntado directo a comerciantes que querían una tienda profesional sin contratar un equipo de desarrollo.',
        'La empresa creció tratando a los vendedores independientes como un mercado que merecía ser atendido bien y no como un segmento de bajo valor, expandiéndose a pagos, logística y punto de venta. Lütke se ha mantenido inusualmente vocal sobre la cultura de ingeniería y sobre dirigir la empresa como plataforma de largo plazo y no como minorista.',
      ],
    },
    timeline: [
      { year: '2004', en: 'Starts an online snowboard shop and writes his own storefront software.', es: 'Arranca una tienda de snowboard en línea y escribe su propio software de tienda.' },
      { year: '2006', en: 'Launches Shopify as a product for other merchants.', es: 'Lanza Shopify como producto para otros comerciantes.' },
      { year: '2015', en: 'Takes the company public.', es: 'Saca la empresa a bolsa.' },
      { year: '2020—', en: 'Expands into payments, fulfilment and point-of-sale.', es: 'Se expande a pagos, logística y punto de venta.' },
    ],
  },
];
