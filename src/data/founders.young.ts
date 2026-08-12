import type { Founder } from './types';

/**
 * Archive profiles, the current generation.
 *
 * Same editorial rules as the rest of the archive: no net-worth figures, no
 * present-tense claims about who holds which title, no invented quotations,
 * and documented controversy stays in rather than being edited out.
 */
export const YOUNG_FOUNDERS: Founder[] = [
  {
    slug: 'alexandr-wang',
    name: 'Alexandr Wang',
    company: 'Scale AI',
    role: { en: 'Co-founder', es: 'Cofundador' },
    sector: 'technology',
    born: '1997',
    birthplace: { en: 'Los Alamos, New Mexico, U.S.', es: 'Los Álamos, Nuevo México, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Building the labelling infrastructure the AI industry trains on',
      es: 'Construir la infraestructura de etiquetado sobre la que entrena la industria de la IA',
    },
    dek: {
      en: 'He dropped out of MIT at nineteen to sell the least glamorous thing in artificial intelligence: clean, labelled data.',
      es: 'Dejó el MIT a los diecinueve para vender lo menos glamoroso de la inteligencia artificial: datos limpios y etiquetados.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Wang grew up in Los Alamos, New Mexico, where both his parents worked as physicists at the national laboratory. He competed in maths and programming contests, worked briefly as an engineer, and enrolled at MIT before leaving after a year.',
        'He co-founded Scale AI in 2016 with Lucy Guo. The premise was unfashionable at the time: machine learning teams were bottlenecked not by algorithms but by the tedious work of annotating training data, and nobody wanted to build the plumbing. Scale combined human annotators with software tooling and sold the result to self-driving programmes, then to defence, then to the labs training large language models.',
        'The company became a supplier to much of the American AI industry at once, which put it in an unusually central position as model training scaled. In 2025 Meta took a large stake in Scale and Wang moved to lead its superintelligence effort, a deal that drew scrutiny precisely because so many of Scale’s customers were Meta’s competitors.',
      ],
      es: [
        'Wang creció en Los Álamos, Nuevo México, donde sus dos padres trabajaban como físicos en el laboratorio nacional. Compitió en concursos de matemáticas y programación, trabajó brevemente como ingeniero e ingresó al MIT antes de salirse al cabo de un año.',
        'Cofundó Scale AI en 2016 con Lucy Guo. La premisa era poco atractiva en ese momento: a los equipos de aprendizaje automático no los frenaban los algoritmos sino el trabajo tedioso de anotar datos de entrenamiento, y nadie quería construir esa plomería. Scale combinó anotadores humanos con herramientas de software y vendió el resultado a programas de conducción autónoma, después a defensa, y después a los laboratorios que entrenaban modelos de lenguaje grandes.',
        'La empresa se volvió proveedora de buena parte de la industria estadounidense de IA a la vez, lo que la puso en una posición inusualmente central conforme escalaba el entrenamiento de modelos. En 2025 Meta tomó una participación grande en Scale y Wang pasó a liderar su esfuerzo de superinteligencia, un acuerdo que atrajo escrutinio precisamente porque muchos clientes de Scale eran competidores de Meta.',
      ],
    },
    timeline: [
      { year: '2016', en: 'Co-founds Scale AI after leaving MIT.', es: 'Cofunda Scale AI tras dejar el MIT.' },
      { year: '2019', en: 'Expands from self-driving data into defence and government work.', es: 'Se expande de datos para conducción autónoma a trabajo de defensa y gobierno.' },
      { year: '2022—', en: 'Becomes a core supplier to the labs training large language models.', es: 'Se vuelve proveedor central de los laboratorios que entrenan modelos de lenguaje grandes.' },
      { year: '2025', en: 'Meta takes a large stake; Wang moves to lead its superintelligence effort.', es: 'Meta toma una participación grande; Wang pasa a liderar su esfuerzo de superinteligencia.' },
    ],
  },
  {
    slug: 'palmer-luckey',
    name: 'Palmer Luckey',
    company: 'Oculus · Anduril',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'technology',
    born: '1992',
    birthplace: { en: 'Long Beach, California, U.S.', es: 'Long Beach, California, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Reviving virtual reality from a garage, then building a defence company',
      es: 'Revivir la realidad virtual desde un garaje y después construir una empresa de defensa',
    },
    dek: {
      en: 'He was a teenager modifying headsets in a camper trailer when he restarted an industry that had been written off for twenty years.',
      es: 'Era un adolescente modificando visores en un tráiler cuando reinició una industria que llevaba veinte años dada por muerta.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Luckey was homeschooled in southern California and spent his teens repairing and modifying electronics, accumulating one of the larger private collections of head-mounted displays while posting about them on enthusiast forums. Virtual reality at the time was considered a commercial dead end.',
        'He built a prototype called the Rift in his parents’ garage and ran a Kickstarter campaign in 2012 that vastly exceeded its target. Facebook acquired Oculus in 2014, a deal that put consumer VR back on the industry agenda and triggered a wave of investment across the sector.',
        'He left Facebook in 2017 following a controversy over a political donation, and founded Anduril Industries the same year, applying commercial software practices to defence hardware — autonomous surveillance towers, drones and counter-drone systems. The company’s work has kept him at the centre of the ongoing argument about Silicon Valley’s relationship with the military.',
      ],
      es: [
        'Luckey estudió en casa en el sur de California y pasó su adolescencia reparando y modificando electrónica, acumulando una de las mayores colecciones privadas de visores mientras publicaba sobre ellos en foros de aficionados. La realidad virtual entonces se consideraba un callejón comercial sin salida.',
        'Construyó un prototipo llamado Rift en el garaje de sus padres y lanzó una campaña de Kickstarter en 2012 que superó ampliamente su meta. Facebook adquirió Oculus en 2014, un acuerdo que devolvió la VR de consumo a la agenda de la industria y desató una ola de inversión en el sector.',
        'Salió de Facebook en 2017 tras una controversia por una donación política, y fundó Anduril Industries ese mismo año, aplicando prácticas de software comercial al hardware de defensa: torres de vigilancia autónomas, drones y sistemas antidrones. El trabajo de la empresa lo ha mantenido en el centro del debate abierto sobre la relación de Silicon Valley con lo militar.',
      ],
    },
    timeline: [
      { year: '2012', en: 'Kickstarter campaign for the Rift headset far exceeds its goal.', es: 'La campaña de Kickstarter del visor Rift supera con creces su meta.' },
      { year: '2014', en: 'Facebook acquires Oculus.', es: 'Facebook adquiere Oculus.' },
      { year: '2017', en: 'Leaves Facebook and founds Anduril Industries.', es: 'Deja Facebook y funda Anduril Industries.' },
      { year: '2020—', en: 'Anduril wins large border and defence contracts.', es: 'Anduril gana grandes contratos de frontera y defensa.' },
    ],
  },
  {
    slug: 'evan-spiegel',
    name: 'Evan Spiegel',
    company: 'Snap',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'technology',
    born: '1990',
    birthplace: { en: 'Los Angeles, California, U.S.', es: 'Los Ángeles, California, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Turning down three billion dollars at twenty-three',
      es: 'Rechazar tres mil millones de dólares a los veintitrés',
    },
    dek: {
      en: 'His product started as a class project built on a premise the whole industry had inverted: that most messages should disappear.',
      es: 'Su producto empezó como un proyecto de clase construido sobre una premisa que toda la industria había invertido: que la mayoría de los mensajes deberían desaparecer.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Spiegel developed the idea at Stanford with Bobby Murphy and Reggie Brown, presenting an early version as a product design class project where it was not especially well received. The app launched in 2011.',
        'Its defining feature was deletion. Every other social network was built to accumulate a permanent record; Snapchat let messages vanish, which changed how candidly people used it and made it dominant among teenagers in a way incumbents struggled to counter.',
        'In 2013 he turned down a reported three-billion-dollar acquisition offer from Facebook, a decision widely called reckless at the time. Snap went public in 2017. The company has since spent years competing against direct feature cloning by much larger rivals, while pushing into camera hardware and augmented reality.',
      ],
      es: [
        'Spiegel desarrolló la idea en Stanford con Bobby Murphy y Reggie Brown, presentando una versión temprana como proyecto de una clase de diseño de producto donde no fue especialmente bien recibida. La app se lanzó en 2011.',
        'Su rasgo definitorio era el borrado. Todas las demás redes sociales estaban construidas para acumular un registro permanente; Snapchat dejaba que los mensajes desaparecieran, lo que cambió la franqueza con que la gente la usaba y la volvió dominante entre adolescentes de una forma que a los grandes les costó contrarrestar.',
        'En 2013 rechazó una oferta de adquisición de Facebook reportada en tres mil millones de dólares, una decisión que en su momento muchos calificaron de temeraria. Snap salió a bolsa en 2017. Desde entonces la empresa ha pasado años compitiendo contra la clonación directa de sus funciones por parte de rivales mucho más grandes, mientras empuja hacia el hardware de cámara y la realidad aumentada.',
      ],
    },
    timeline: [
      { year: '2011', en: 'Snapchat launches out of a Stanford class project.', es: 'Snapchat se lanza a partir de un proyecto de clase en Stanford.' },
      { year: '2013', en: 'Turns down a reported $3bn offer from Facebook.', es: 'Rechaza una oferta de Facebook reportada en $3 mil millones.' },
      { year: '2017', en: 'Takes Snap public.', es: 'Saca Snap a bolsa.' },
      { year: '2019—', en: 'Pushes into augmented reality and camera hardware.', es: 'Empuja hacia la realidad aumentada y el hardware de cámara.' },
    ],
  },
  {
    slug: 'patrick-collison',
    name: 'Patrick Collison',
    company: 'Stripe',
    role: { en: 'Co-founder and chief executive', es: 'Cofundador y director ejecutivo' },
    sector: 'technology',
    born: '1988',
    birthplace: { en: 'Limerick, Ireland', es: 'Limerick, Irlanda' },
    nationality: { en: 'Irish', es: 'Irlandés' },
    knownFor: {
      en: 'Making it possible to accept payments online with a few lines of code',
      es: 'Hacer posible aceptar pagos en línea con unas pocas líneas de código',
    },
    dek: {
      en: 'Before Stripe, taking a card payment online meant weeks of paperwork with a bank. He and his brother reduced it to an afternoon.',
      es: 'Antes de Stripe, aceptar un pago con tarjeta en línea significaba semanas de papeleo con un banco. Él y su hermano lo redujeron a una tarde.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Collison grew up in rural Ireland, won the national Young Scientist competition at sixteen with a project on artificial intelligence, and started university at MIT. With his brother John he sold an early company, Auctomatic, while still a teenager.',
        'Stripe began in 2010 from a specific frustration: the two of them had built things on the internet and found that the hardest part was not the product but getting paid for it. Merchant accounts required bank negotiations, underwriting and integration work measured in weeks.',
        'Stripe replaced that with a developer-facing API, and the company grew by treating documentation and developer experience as the product rather than as marketing. It expanded into billing, tax, lending, incorporation tooling and infrastructure for other platforms, staying private far longer than comparable companies.',
      ],
      es: [
        'Collison creció en la Irlanda rural, ganó el concurso nacional Young Scientist a los dieciséis con un proyecto sobre inteligencia artificial y entró a la universidad en el MIT. Con su hermano John vendió una primera empresa, Auctomatic, siendo todavía adolescente.',
        'Stripe empezó en 2010 desde una frustración concreta: los dos habían construido cosas en internet y descubrieron que lo más difícil no era el producto sino cobrar por él. Las cuentas de comercio exigían negociaciones bancarias, evaluación de riesgo y trabajo de integración que se medía en semanas.',
        'Stripe reemplazó eso con una API orientada a desarrolladores, y la empresa creció tratando la documentación y la experiencia del desarrollador como el producto y no como marketing. Se expandió a facturación, impuestos, préstamos, herramientas de constitución de empresas e infraestructura para otras plataformas, permaneciendo privada mucho más tiempo que empresas comparables.',
      ],
    },
    timeline: [
      { year: '2007', en: 'Sells Auctomatic with his brother John while still a teenager.', es: 'Vende Auctomatic con su hermano John siendo todavía adolescente.' },
      { year: '2010', en: 'Founds Stripe.', es: 'Funda Stripe.' },
      { year: '2011', en: 'Stripe launches publicly after a private beta.', es: 'Stripe se lanza públicamente tras una beta privada.' },
      { year: '2016—', en: 'Expands into billing, tax, lending and platform infrastructure.', es: 'Se expande a facturación, impuestos, préstamos e infraestructura para plataformas.' },
    ],
  },
  {
    slug: 'john-collison',
    name: 'John Collison',
    company: 'Stripe',
    role: { en: 'Co-founder and president', es: 'Cofundador y presidente' },
    sector: 'technology',
    born: '1990',
    birthplace: { en: 'Limerick, Ireland', es: 'Limerick, Irlanda' },
    nationality: { en: 'Irish', es: 'Irlandés' },
    knownFor: {
      en: 'Co-founding Stripe and running its commercial side',
      es: 'Cofundar Stripe y dirigir su lado comercial',
    },
    dek: {
      en: 'He left Harvard after a year to build payments infrastructure with his older brother, and has spent fifteen years on the commercial half of the same problem.',
      es: 'Dejó Harvard al cabo de un año para construir infraestructura de pagos con su hermano mayor, y lleva quince años en la mitad comercial del mismo problema.',
    },
    readMinutes: 3,
    body: {
      en: [
        'The younger of the two Collison brothers, he was already working on software businesses in secondary school in Ireland and co-founded Auctomatic with Patrick before finishing his teens. He enrolled at Harvard and left after a year to work on Stripe full time.',
        'Where his brother has been the more public voice on engineering and long-run strategy, John has largely run the commercial side: sales, partnerships, and the expansion of the product into adjacent financial services.',
        'Stripe’s growth has tracked the growth of internet commerce itself, and its position as infrastructure — sitting underneath other companies rather than facing consumers — has made it one of the most valuable private technology companies in the world without most of its end users ever seeing its name.',
      ],
      es: [
        'El menor de los dos hermanos Collison ya trabajaba en negocios de software en la secundaria en Irlanda y cofundó Auctomatic con Patrick antes de terminar la adolescencia. Ingresó a Harvard y se salió al año para dedicarse a Stripe de tiempo completo.',
        'Mientras su hermano ha sido la voz más pública en ingeniería y estrategia de largo plazo, John ha llevado en buena medida el lado comercial: ventas, alianzas y la expansión del producto hacia servicios financieros adyacentes.',
        'El crecimiento de Stripe ha seguido el crecimiento del propio comercio en internet, y su posición como infraestructura —debajo de otras empresas en lugar de frente al consumidor— la ha convertido en una de las empresas tecnológicas privadas más valiosas del mundo sin que la mayoría de sus usuarios finales vea nunca su nombre.',
      ],
    },
    timeline: [
      { year: '2008', en: 'Co-founds and sells Auctomatic with his brother.', es: 'Cofunda y vende Auctomatic con su hermano.' },
      { year: '2010', en: 'Leaves Harvard to co-found Stripe.', es: 'Deja Harvard para cofundar Stripe.' },
      { year: '2011', en: 'Stripe opens to the public.', es: 'Stripe se abre al público.' },
      { year: '2015—', en: 'Leads commercial expansion into new markets and products.', es: 'Lidera la expansión comercial hacia nuevos mercados y productos.' },
    ],
  },
  {
    slug: 'vitalik-buterin',
    name: 'Vitalik Buterin',
    company: 'Ethereum',
    role: { en: 'Co-founder', es: 'Cofundador' },
    sector: 'technology',
    born: '1994',
    birthplace: { en: 'Kolomna, Russia', es: 'Kolomna, Rusia' },
    nationality: { en: 'Russian-Canadian', es: 'Ruso-canadiense' },
    knownFor: {
      en: 'Designing a blockchain that could run arbitrary programs',
      es: 'Diseñar una cadena de bloques capaz de ejecutar programas arbitrarios',
    },
    dek: {
      en: 'He wrote the proposal at nineteen, after arguing unsuccessfully that Bitcoin should be able to do more than move money.',
      es: 'Escribió la propuesta a los diecinueve, tras argumentar sin éxito que Bitcoin debería poder hacer más que mover dinero.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Buterin was born in Russia and moved to Canada as a child. He got involved in Bitcoin as a teenager, co-founding Bitcoin Magazine and writing about the technology before he had finished school.',
        'His argument was that Bitcoin’s scripting was deliberately limited, and that a blockchain could instead act as a general-purpose computer where anyone could deploy programs. He published the Ethereum white paper in 2013 at nineteen, took a Thiel Fellowship, and left the University of Waterloo. The network launched in 2015.',
        'Ethereum made smart contracts, tokens and decentralised applications practical, and became the base layer for most of the activity in the sector — along with its speculative excesses, collapses and frauds. Buterin has remained an unusually visible and self-critical figure, publicly pushing the network through a years-long migration to proof of stake to cut its energy use.',
      ],
      es: [
        'Buterin nació en Rusia y se mudó a Canadá de niño. Se involucró con Bitcoin siendo adolescente, cofundando Bitcoin Magazine y escribiendo sobre la tecnología antes de terminar la escuela.',
        'Su argumento era que el lenguaje de scripts de Bitcoin estaba limitado a propósito, y que una cadena de bloques podía funcionar en cambio como una computadora de propósito general donde cualquiera pudiera desplegar programas. Publicó el documento técnico de Ethereum en 2013 a los diecinueve, tomó una beca Thiel y dejó la Universidad de Waterloo. La red se lanzó en 2015.',
        'Ethereum volvió prácticos los contratos inteligentes, los tokens y las aplicaciones descentralizadas, y se convirtió en la capa base de casi toda la actividad del sector, junto con sus excesos especulativos, colapsos y fraudes. Buterin se ha mantenido como una figura inusualmente visible y autocrítica, empujando públicamente la migración de años de la red hacia prueba de participación para recortar su consumo energético.',
      ],
    },
    timeline: [
      { year: '2011', en: 'Co-founds Bitcoin Magazine as a teenager.', es: 'Cofunda Bitcoin Magazine siendo adolescente.' },
      { year: '2013', en: 'Publishes the Ethereum white paper at nineteen.', es: 'Publica el documento técnico de Ethereum a los diecinueve.' },
      { year: '2015', en: 'The Ethereum network goes live.', es: 'La red Ethereum entra en operación.' },
      { year: '2022', en: 'Ethereum completes its migration to proof of stake.', es: 'Ethereum completa su migración a prueba de participación.' },
    ],
  },
  {
    slug: 'austin-russell',
    name: 'Austin Russell',
    company: 'Luminar Technologies',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'industry',
    born: '1995',
    birthplace: { en: 'Newport Beach, California, U.S.', es: 'Newport Beach, California, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Founding a lidar company at seventeen and taking it public at twenty-five',
      es: 'Fundar una empresa de lidar a los diecisiete y sacarla a bolsa a los veinticinco',
    },
    dek: {
      en: 'He was working in a photonics lab as a teenager when he decided the sensors self-driving cars needed did not exist yet, so he spent a decade building them.',
      es: 'Trabajaba en un laboratorio de fotónica siendo adolescente cuando decidió que los sensores que los autos autónomos necesitaban todavía no existían, así que pasó una década construyéndolos.',
    },
    readMinutes: 3,
    body: {
      en: [
        'Russell was a precocious student in southern California who was doing research in optics before finishing secondary school. He founded Luminar in 2012 at seventeen, then took a Thiel Fellowship and left Stanford to work on it full time.',
        'The bet was that existing lidar — the laser ranging sensors autonomous vehicles use to see — was too short-range, too low-resolution and far too expensive to ship in a production car. Luminar spent years in relative silence building sensors from different components rather than adapting off-the-shelf parts.',
        'The company emerged publicly with automaker partnerships and went public through a merger in 2020, briefly making Russell one of the youngest self-made billionaires on record. The autonomous vehicle sector’s subsequent consolidation has made it a volatile business, and the company has restructured more than once.',
      ],
      es: [
        'Russell fue un estudiante precoz del sur de California que ya hacía investigación en óptica antes de terminar la secundaria. Fundó Luminar en 2012 a los diecisiete, después tomó una beca Thiel y dejó Stanford para dedicarse a la empresa de tiempo completo.',
        'La apuesta era que el lidar existente —los sensores láser de distancia con los que ven los vehículos autónomos— tenía muy poco alcance, muy baja resolución y un costo demasiado alto para montarse en un auto de producción. Luminar pasó años en relativo silencio construyendo sensores desde componentes distintos en lugar de adaptar piezas de catálogo.',
        'La empresa salió a la luz con alianzas con fabricantes y cotizó en bolsa mediante una fusión en 2020, lo que brevemente hizo de Russell uno de los multimillonarios hechos a sí mismos más jóvenes registrados. La consolidación posterior del sector de vehículos autónomos lo ha vuelto un negocio volátil, y la empresa se ha reestructurado más de una vez.',
      ],
    },
    timeline: [
      { year: '2012', en: 'Founds Luminar at seventeen.', es: 'Funda Luminar a los diecisiete.' },
      { year: '2013', en: 'Takes a Thiel Fellowship and leaves Stanford.', es: 'Toma una beca Thiel y deja Stanford.' },
      { year: '2017', en: 'Comes out of stealth with automaker partnerships.', es: 'Sale del sigilo con alianzas con fabricantes de autos.' },
      { year: '2020', en: 'Luminar goes public through a merger.', es: 'Luminar sale a bolsa mediante una fusión.' },
    ],
  },
  {
    slug: 'sophia-amoruso',
    name: 'Sophia Amoruso',
    company: 'Nasty Gal',
    role: { en: 'Founder', es: 'Fundadora' },
    sector: 'retail',
    born: '1984',
    birthplace: { en: 'San Diego, California, U.S.', es: 'San Diego, California, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Building a fashion brand out of an eBay store — and the bankruptcy that followed',
      es: 'Construir una marca de moda desde una tienda de eBay, y la quiebra que vino después',
    },
    dek: {
      en: 'Her company is as instructive for how it collapsed as for how it grew, and she has been unusually willing to say so.',
      es: 'Su empresa es tan instructiva por cómo colapsó como por cómo creció, y ella ha estado inusualmente dispuesta a decirlo.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Amoruso was working a series of low-wage jobs when she started selling vintage clothing on eBay in 2006, sourcing from thrift stores, styling and photographing every piece herself. The listings built an audience before there was a company.',
        'Nasty Gal moved off eBay to its own site and grew quickly on the back of early social media, becoming one of the most-cited examples of a brand built natively online. She wrote #Girlboss in 2014, which turned into a book, a Netflix series and eventually a much-criticised label.',
        'The company expanded into retail stores and inventory-heavy operations, ran into financial trouble, and filed for Chapter 11 bankruptcy in 2016; its brand was sold to Boohoo. Amoruso has since worked on media and education ventures, and has spoken publicly about the scaling decisions that broke the business.',
      ],
      es: [
        'Amoruso encadenaba trabajos mal pagados cuando empezó a vender ropa vintage en eBay en 2006, surtiéndose en tiendas de segunda mano y estilizando y fotografiando cada pieza ella misma. Las publicaciones construyeron una audiencia antes de que hubiera una empresa.',
        'Nasty Gal se mudó de eBay a su propio sitio y creció rápido apoyada en las primeras redes sociales, convirtiéndose en uno de los ejemplos más citados de marca construida de forma nativa en línea. Escribió #Girlboss en 2014, que se volvió libro, serie de Netflix y con el tiempo una etiqueta muy criticada.',
        'La empresa se expandió a tiendas físicas y operaciones pesadas en inventario, entró en problemas financieros y se declaró en quiebra bajo el Capítulo 11 en 2016; su marca fue vendida a Boohoo. Amoruso ha trabajado desde entonces en proyectos de medios y educación, y ha hablado públicamente de las decisiones de escalamiento que rompieron el negocio.',
      ],
    },
    timeline: [
      { year: '2006', en: 'Starts selling vintage clothing on eBay.', es: 'Empieza a vender ropa vintage en eBay.' },
      { year: '2008', en: 'Moves Nasty Gal to its own storefront.', es: 'Muda Nasty Gal a su propia tienda en línea.' },
      { year: '2014', en: 'Publishes #Girlboss.', es: 'Publica #Girlboss.' },
      { year: '2016', en: 'Nasty Gal files for bankruptcy and is sold to Boohoo.', es: 'Nasty Gal se declara en quiebra y es vendida a Boohoo.' },
    ],
  },
  {
    slug: 'emma-grede',
    name: 'Emma Grede',
    company: 'Good American · Skims',
    role: { en: 'Co-founder and chief executive', es: 'Cofundadora y directora ejecutiva' },
    sector: 'beauty',
    born: '1982',
    birthplace: { en: 'London, England', es: 'Londres, Inglaterra' },
    nationality: { en: 'British', es: 'Británica' },
    knownFor: {
      en: 'Building celebrity brands that are actually operating companies',
      es: 'Construir marcas de celebridades que son de verdad empresas operativas',
    },
    dek: {
      en: 'She works the seam between entertainment and consumer goods, and treats the celebrity as a distribution channel rather than the product.',
      es: 'Trabaja la costura entre el entretenimiento y el consumo, y trata a la celebridad como canal de distribución y no como el producto.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Grede grew up in east London and left school at sixteen, moving into fashion production and then founding ITB Worldwide, an agency connecting brands with entertainment talent. That work gave her a decade of direct experience in how celebrity endorsement actually converts, and where it does not.',
        'She co-founded Good American in 2016 with Khloé Kardashian, launching a denim label with an extended size range from day one rather than adding larger sizes later as an afterthought. The launch was among the largest in apparel at the time.',
        'She is also a founding partner of Skims and has built further consumer brands in the same mould. She became the first Black woman to appear as a guest investor on Shark Tank, and speaks frequently about ownership structures — specifically about founders taking equity rather than licensing fees.',
      ],
      es: [
        'Grede creció en el este de Londres y dejó la escuela a los dieciséis, pasando a la producción de moda y fundando después ITB Worldwide, una agencia que conectaba marcas con talento del entretenimiento. Ese trabajo le dio una década de experiencia directa en cómo convierte realmente el respaldo de una celebridad, y dónde no.',
        'Cofundó Good American en 2016 con Khloé Kardashian, lanzando una marca de mezclilla con un rango de tallas extendido desde el primer día en lugar de agregar tallas grandes después como agregado. El lanzamiento estuvo entre los mayores de la industria de la ropa en su momento.',
        'También es socia fundadora de Skims y ha construido más marcas de consumo con el mismo molde. Se convirtió en la primera mujer negra en aparecer como inversionista invitada en Shark Tank, y habla con frecuencia sobre estructuras de propiedad, específicamente sobre que los fundadores tomen participación accionaria en vez de honorarios por licencia.',
      ],
    },
    timeline: [
      { year: '2008', en: 'Founds the entertainment marketing agency ITB Worldwide.', es: 'Funda la agencia de marketing de entretenimiento ITB Worldwide.' },
      { year: '2016', en: 'Co-founds Good American with an extended size range at launch.', es: 'Cofunda Good American con rango de tallas extendido desde el lanzamiento.' },
      { year: '2019', en: 'Becomes a founding partner of Skims.', es: 'Se convierte en socia fundadora de Skims.' },
      { year: '2021', en: 'First Black woman to appear as a guest investor on Shark Tank.', es: 'Primera mujer negra en aparecer como inversionista invitada en Shark Tank.' },
    ],
  },
  {
    slug: 'kylie-jenner',
    name: 'Kylie Jenner',
    company: 'Kylie Cosmetics',
    role: { en: 'Founder', es: 'Fundadora' },
    sector: 'beauty',
    born: '1997',
    birthplace: { en: 'Los Angeles, California, U.S.', es: 'Los Ángeles, California, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Converting an enormous social following into a cosmetics business at speed',
      es: 'Convertir un enorme seguimiento social en un negocio de cosméticos a gran velocidad',
    },
    dek: {
      en: 'The company ran on an outsourced model so lean that a handful of employees supported a brand selling out nationally within minutes.',
      es: 'La empresa operaba con un modelo tercerizado tan ligero que un puñado de empleados sostenía una marca que se agotaba a nivel nacional en minutos.',
    },
    readMinutes: 3,
    body: {
      en: [
        'Jenner grew up on television as part of her family’s reality series and built one of the largest social media followings in the world before she was twenty. In 2015 she launched a lip kit product line, which sold out almost immediately.',
        'The operating model was the interesting part: manufacturing, fulfilment and much of the back office were outsourced, so the company ran with a very small direct headcount relative to its revenue. Demand was generated almost entirely through her own channels rather than paid media.',
        'She sold a controlling stake to the beauty group Coty in 2019. A Forbes cover had described her as the youngest self-made billionaire; the magazine later revisited the reporting and disputed the figures behind that designation, and the "self-made" framing has been debated ever since given the platform she started from.',
      ],
      es: [
        'Jenner creció en televisión como parte de la serie de telerrealidad de su familia y construyó uno de los mayores seguimientos en redes sociales del mundo antes de cumplir veinte. En 2015 lanzó una línea de kits de labios que se agotó casi de inmediato.',
        'Lo interesante era el modelo operativo: la manufactura, la logística y buena parte de la administración estaban tercerizadas, así que la empresa funcionaba con una plantilla directa muy pequeña en relación con sus ingresos. La demanda se generaba casi por completo a través de sus propios canales y no de medios pagados.',
        'Vendió una participación de control al grupo de belleza Coty en 2019. Una portada de Forbes la había descrito como la multimillonaria hecha a sí misma más joven; la revista después revisó el reportaje y cuestionó las cifras detrás de esa designación, y el encuadre de "hecha a sí misma" se ha debatido desde entonces dada la plataforma desde la que partió.',
      ],
    },
    timeline: [
      { year: '2015', en: 'Launches the first lip kit product line.', es: 'Lanza la primera línea de kits de labios.' },
      { year: '2016', en: 'Rebrands as Kylie Cosmetics and expands the range.', es: 'Se renombra Kylie Cosmetics y amplía la línea.' },
      { year: '2018', en: 'Enters wholesale distribution through Ulta Beauty.', es: 'Entra a distribución mayorista mediante Ulta Beauty.' },
      { year: '2019', en: 'Sells a controlling stake to Coty.', es: 'Vende una participación de control a Coty.' },
    ],
  },
  {
    slug: 'mikaila-ulmer',
    name: 'Mikaila Ulmer',
    company: 'Me & the Bees Lemonade',
    role: { en: 'Founder', es: 'Fundadora' },
    sector: 'retail',
    born: '2004',
    birthplace: { en: 'Austin, Texas, U.S.', es: 'Austin, Texas, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Starting a national beverage brand at four years old',
      es: 'Empezar una marca nacional de bebidas a los cuatro años',
    },
    dek: {
      en: 'She was stung twice in one week, got curious about the insects instead of afraid of them, and turned her great-grandmother’s recipe into a company.',
      es: 'La picaron dos veces en una semana, sintió curiosidad por los insectos en vez de miedo, y convirtió la receta de su bisabuela en una empresa.',
    },
    readMinutes: 3,
    body: {
      en: [
        'Ulmer was four when she was stung by bees twice in the same week. Encouraged to research them rather than fear them, she ended up combining what she learned with a 1940s flaxseed lemonade recipe from her great-grandmother, sweetened with honey.',
        'She sold it at a children’s business fair in Austin, then to local restaurants and shops. In 2015, at nine, she appeared on Shark Tank and secured an investment from Daymond John, and the brand moved into national distribution including Whole Foods.',
        'A portion of profits goes to organisations working on bee conservation, which has been the company’s stated purpose from the start rather than a later addition. She has since written a book and speaks regularly to student audiences about starting young.',
      ],
      es: [
        'Ulmer tenía cuatro años cuando la picaron abejas dos veces en la misma semana. Animada a investigarlas en lugar de temerles, terminó combinando lo que aprendió con una receta de limonada con linaza de los años cuarenta de su bisabuela, endulzada con miel.',
        'La vendió en una feria de negocios infantil en Austin, después a restaurantes y tiendas locales. En 2015, a los nueve, apareció en Shark Tank y consiguió una inversión de Daymond John, y la marca pasó a distribución nacional incluyendo Whole Foods.',
        'Una parte de las ganancias va a organizaciones que trabajan en la conservación de abejas, lo que ha sido el propósito declarado de la empresa desde el inicio y no un agregado posterior. Desde entonces ha escrito un libro y habla con regularidad ante públicos estudiantiles sobre empezar joven.',
      ],
    },
    timeline: [
      { year: '2009', en: 'Sells her first lemonade at a children’s business fair.', es: 'Vende su primera limonada en una feria de negocios infantil.' },
      { year: '2015', en: 'Appears on Shark Tank at nine and secures investment.', es: 'Aparece en Shark Tank a los nueve y consigue inversión.' },
      { year: '2016', en: 'Signs national distribution with Whole Foods.', es: 'Firma distribución nacional con Whole Foods.' },
      { year: '2020—', en: 'Expands the range and the bee conservation programme.', es: 'Amplía la línea y el programa de conservación de abejas.' },
    ],
  },
];
