import type { Founder } from './types';

/** Archive profiles, retail and finance desks. */
export const COMMERCE_FOUNDERS: Founder[] = [
  {
    slug: 'sam-walton',
    name: 'Sam Walton',
    company: 'Walmart',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'retail',
    born: '1918—1992',
    birthplace: { en: 'Kingfisher, Oklahoma, U.S.', es: 'Kingfisher, Oklahoma, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Building the world’s largest retailer out of small-town America',
      es: 'Construir el minorista más grande del mundo desde los pueblos pequeños de Estados Unidos',
    },
    dek: {
      en: 'His insight was that rural towns everyone else considered too small could support a large store — if the prices were low enough and the logistics were good enough.',
      es: 'Su hallazgo fue que los pueblos rurales que todos consideraban demasiado pequeños podían sostener una tienda grande, si los precios eran bajos y la logística lo bastante buena.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Walton ran a franchised variety store in Arkansas before opening the first Walmart in Rogers in 1962. Competitors were building discount stores in cities; he built them where nobody was competing, then made distribution the advantage rather than location.',
        'The company invested heavily and early in logistics and inventory technology, using distribution centres that served clusters of stores and computerised systems that tracked what sold. That operating discipline let it undercut rivals permanently rather than promotionally.',
        'Walton stayed personally frugal and famously visited stores constantly, treating direct observation as a management tool. By the time he died in 1992, Walmart had become the template that big-box retail worldwide would copy — along with sustained criticism over its effect on wages and on the small retailers it displaced.',
      ],
      es: [
        'Walton llevaba una tienda de variedades franquiciada en Arkansas antes de abrir el primer Walmart en Rogers en 1962. Los competidores construían tiendas de descuento en las ciudades; él las construyó donde nadie competía, y luego hizo de la distribución la ventaja en lugar de la ubicación.',
        'La empresa invirtió fuerte y temprano en logística y tecnología de inventario, con centros de distribución que servían a grupos de tiendas y sistemas computarizados que rastreaban lo que se vendía. Esa disciplina operativa le permitió ofrecer precios más bajos de forma permanente y no solo promocional.',
        'Walton se mantuvo personalmente austero y era famoso por visitar tiendas constantemente, tratando la observación directa como herramienta de gestión. Cuando murió en 1992, Walmart se había vuelto la plantilla que el comercio de grandes superficies copiaría en todo el mundo, junto con críticas sostenidas por su efecto en los salarios y en los pequeños comercios que desplazó.',
      ],
    },
    timeline: [
      { year: '1962', en: 'Opens the first Walmart in Rogers, Arkansas.', es: 'Abre el primer Walmart en Rogers, Arkansas.' },
      { year: '1970', en: 'Takes the company public and builds out distribution centres.', es: 'Saca la empresa a bolsa y construye centros de distribución.' },
      { year: '1983', en: 'Opens the first Sam’s Club warehouse store.', es: 'Abre la primera tienda mayorista Sam’s Club.' },
      { year: '1988', en: 'Launches the supercenter format combining groceries and general merchandise.', es: 'Lanza el formato supercenter que combina supermercado y mercancía general.' },
    ],
  },
  {
    slug: 'amancio-ortega',
    name: 'Amancio Ortega',
    company: 'Inditex · Zara',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'retail',
    born: '1936',
    birthplace: { en: 'Busdongo de Arbás, León, Spain', es: 'Busdongo de Arbás, León, España' },
    nationality: { en: 'Spanish', es: 'Español' },
    knownFor: {
      en: 'Inventing fast fashion by compressing the time between a trend and a shelf',
      es: 'Inventar la moda rápida comprimiendo el tiempo entre una tendencia y un estante',
    },
    dek: {
      en: 'He left school at thirteen to work in a shirt shop, and ended up rebuilding the economics of the entire clothing industry around speed.',
      es: 'Dejó la escuela a los trece para trabajar en una camisería, y terminó rehaciendo la economía de toda la industria de la ropa alrededor de la velocidad.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Ortega started as a delivery boy and shop assistant in A Coruña, then began manufacturing quilted robes with his first wife, Rosalía Mera. The first Zara store opened in A Coruña in 1975.',
        'The model that made it work inverted the industry’s calendar. Instead of designing collections a year ahead and hoping, Zara kept manufacturing close to home, produced small batches, watched what sold, and restocked within weeks. Stores became a sensing instrument, not just a point of sale.',
        'Inditex was formed in 1985 as the holding company and expanded internationally with Pull&Bear, Massimo Dutti, Bershka and others. Ortega remained famously private, rarely giving interviews, and stepped down as chairman in 2011.',
      ],
      es: [
        'Ortega empezó como repartidor y dependiente en A Coruña, y luego comenzó a fabricar batas acolchadas con su primera esposa, Rosalía Mera. La primera tienda Zara abrió en A Coruña en 1975.',
        'El modelo que lo hizo funcionar invirtió el calendario de la industria. En lugar de diseñar colecciones con un año de anticipación y cruzar los dedos, Zara mantuvo la fabricación cerca de casa, produjo lotes pequeños, observó qué se vendía y repuso en semanas. Las tiendas se volvieron un instrumento de medición, no solo un punto de venta.',
        'Inditex se constituyó en 1985 como sociedad matriz y se expandió internacionalmente con Pull&Bear, Massimo Dutti, Bershka y otras. Ortega se mantuvo célebremente reservado, dando entrevistas en contadas ocasiones, y dejó la presidencia en 2011.',
      ],
    },
    timeline: [
      { year: '1963', en: 'Starts manufacturing quilted robes in A Coruña.', es: 'Empieza a fabricar batas acolchadas en A Coruña.' },
      { year: '1975', en: 'Opens the first Zara store.', es: 'Abre la primera tienda Zara.' },
      { year: '1985', en: 'Forms Inditex as the group holding company.', es: 'Constituye Inditex como sociedad matriz del grupo.' },
      { year: '2001', en: 'Inditex goes public and accelerates global expansion.', es: 'Inditex sale a bolsa y acelera la expansión global.' },
    ],
  },
  {
    slug: 'bernard-arnault',
    name: 'Bernard Arnault',
    company: 'LVMH',
    role: { en: 'Chairman and chief executive', es: 'Presidente y director ejecutivo' },
    sector: 'retail',
    born: '1949',
    birthplace: { en: 'Roubaix, France', es: 'Roubaix, Francia' },
    nationality: { en: 'French', es: 'Francés' },
    knownFor: {
      en: 'Assembling the modern luxury conglomerate',
      es: 'Ensamblar el conglomerado moderno del lujo',
    },
    dek: {
      en: 'He recognised that heritage brands were undervalued assets, and spent three decades buying them and running them like a portfolio.',
      es: 'Reconoció que las marcas con historia eran activos infravalorados, y pasó tres décadas comprándolas y administrándolas como un portafolio.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Arnault trained as an engineer and worked in his family’s construction business before moving into fashion. In 1984 he took control of a textile group that owned Christian Dior, and the acquisition of that single house set the strategy for everything after.',
        'He took control of LVMH in 1989 following a protracted corporate battle. The model was to buy brands with deep archives and weak management, install strong creative directors, invest in retail and marketing, and keep the houses distinct rather than merging them into a single identity.',
        'LVMH grew to encompass fashion, leather goods, wines and spirits, watches, jewellery and cosmetics, including the Tiffany acquisition completed in 2021. Arnault’s appointments of designers such as John Galliano and Marc Jacobs reshaped what luxury houses expected from creative leadership.',
      ],
      es: [
        'Arnault se formó como ingeniero y trabajó en el negocio de construcción familiar antes de pasar a la moda. En 1984 tomó el control de un grupo textil que era dueño de Christian Dior, y la adquisición de esa sola casa fijó la estrategia de todo lo que vino después.',
        'Tomó el control de LVMH en 1989 tras una prolongada batalla corporativa. El modelo era comprar marcas con archivos profundos y gestión débil, instalar directores creativos fuertes, invertir en retail y marketing, y mantener las casas distintas en lugar de fusionarlas en una sola identidad.',
        'LVMH creció hasta abarcar moda, marroquinería, vinos y licores, relojes, joyería y cosméticos, incluida la adquisición de Tiffany completada en 2021. Los nombramientos de diseñadores como John Galliano y Marc Jacobs redefinieron lo que las casas de lujo esperaban del liderazgo creativo.',
      ],
    },
    timeline: [
      { year: '1984', en: 'Takes control of the textile group that owns Christian Dior.', es: 'Toma el control del grupo textil dueño de Christian Dior.' },
      { year: '1989', en: 'Wins control of LVMH after a corporate battle.', es: 'Gana el control de LVMH tras una batalla corporativa.' },
      { year: '1990s', en: 'Installs a new generation of creative directors across the houses.', es: 'Instala una nueva generación de directores creativos en las casas.' },
      { year: '2021', en: 'Completes the acquisition of Tiffany & Co.', es: 'Completa la adquisición de Tiffany & Co.' },
    ],
  },
  {
    slug: 'phil-knight',
    name: 'Phil Knight',
    company: 'Nike',
    role: { en: 'Co-founder', es: 'Cofundador' },
    sector: 'retail',
    born: '1938',
    birthplace: { en: 'Portland, Oregon, U.S.', es: 'Portland, Oregón, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Turning athletic shoes into a cultural business built on endorsement',
      es: 'Convertir el calzado deportivo en un negocio cultural construido sobre el patrocinio',
    },
    dek: {
      en: 'A middle-distance runner who wrote a business school paper about importing Japanese shoes, then actually did it.',
      es: 'Un corredor de medio fondo que escribió un trabajo de escuela de negocios sobre importar zapatos japoneses, y después lo hizo de verdad.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Knight ran track at the University of Oregon under coach Bill Bowerman, then wrote a graduate paper arguing that Japanese manufacturing could do to German running shoes what Japanese cameras had done to German optics. He travelled to Japan and secured a distribution deal.',
        'He and Bowerman founded Blue Ribbon Sports in 1964, selling shoes out of a car at track meets. Bowerman’s obsessive experimentation with soles — including the waffle pattern — gave the products a genuine performance argument.',
        'The company became Nike in 1971 and built its identity on athlete endorsement, most consequentially the 1984 Michael Jordan deal, which created a shoe line that outgrew the sport. Its outsourcing of manufacturing later made it a focal point in the debate over overseas labour conditions, prompting reforms in supplier oversight.',
      ],
      es: [
        'Knight corrió atletismo en la Universidad de Oregón bajo el entrenador Bill Bowerman, y después escribió un trabajo de posgrado que argumentaba que la manufactura japonesa podía hacerle a los zapatos de running alemanes lo que las cámaras japonesas le habían hecho a la óptica alemana. Viajó a Japón y consiguió un acuerdo de distribución.',
        'Él y Bowerman fundaron Blue Ribbon Sports en 1964, vendiendo zapatos desde un carro en competencias de atletismo. La experimentación obsesiva de Bowerman con las suelas, incluido el patrón de wafle, le dio a los productos un argumento real de rendimiento.',
        'La empresa se convirtió en Nike en 1971 y construyó su identidad sobre el patrocinio de atletas, sobre todo el acuerdo con Michael Jordan en 1984, que creó una línea de zapatos que superó al propio deporte. Su tercerización de la manufactura la volvió después un punto focal en el debate sobre condiciones laborales en el extranjero, lo que impulsó reformas en la supervisión de proveedores.',
      ],
    },
    timeline: [
      { year: '1964', en: 'Founds Blue Ribbon Sports with Bill Bowerman.', es: 'Funda Blue Ribbon Sports con Bill Bowerman.' },
      { year: '1971', en: 'Rebrands as Nike and adopts the Swoosh.', es: 'Se renombra como Nike y adopta el Swoosh.' },
      { year: '1984', en: 'Signs Michael Jordan, creating the Air Jordan line.', es: 'Ficha a Michael Jordan y crea la línea Air Jordan.' },
      { year: '1988', en: 'Launches the "Just Do It" campaign.', es: 'Lanza la campaña "Just Do It".' },
    ],
  },
  {
    slug: 'howard-schultz',
    name: 'Howard Schultz',
    company: 'Starbucks',
    role: { en: 'Former chairman and chief executive', es: 'Expresidente y exdirector ejecutivo' },
    sector: 'retail',
    born: '1953',
    birthplace: { en: 'Brooklyn, New York, U.S.', es: 'Brooklyn, Nueva York, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Selling the café rather than the coffee',
      es: 'Vender el café como lugar y no como bebida',
    },
    dek: {
      en: 'He walked into a Milan espresso bar in 1983 and spent the next thirty years exporting what he saw there.',
      es: 'Entró a un bar de espresso en Milán en 1983 y pasó los siguientes treinta años exportando lo que vio ahí.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Schultz grew up in public housing in Brooklyn and joined Starbucks in 1982, when it was a small Seattle roaster selling beans rather than drinks. A buying trip to Italy convinced him the business was not coffee but the room it was served in.',
        'The founders disagreed, so he left to start his own café chain, Il Giornale, and then bought Starbucks in 1987 and merged the two. The expansion that followed made the store itself the product: consistent, comfortable, and positioned as a place between home and work.',
        'He led the company through two separate tenures as chief executive, returning in 2008 to close underperforming stores and retrain baristas after aggressive growth had diluted the experience. He later became a prominent voice in U.S. corporate-political debate, including sustained scrutiny of the company’s response to store unionisation.',
      ],
      es: [
        'Schultz creció en vivienda pública en Brooklyn y entró a Starbucks en 1982, cuando era un pequeño tostador de Seattle que vendía granos y no bebidas. Un viaje de compras a Italia lo convenció de que el negocio no era el café sino el salón donde se servía.',
        'Los fundadores no estuvieron de acuerdo, así que se fue a montar su propia cadena de cafés, Il Giornale, y luego compró Starbucks en 1987 y fusionó ambas. La expansión que siguió convirtió la tienda misma en el producto: consistente, cómoda y posicionada como un lugar entre la casa y el trabajo.',
        'Dirigió la empresa en dos etapas separadas como director ejecutivo, regresando en 2008 para cerrar tiendas de bajo rendimiento y reentrenar baristas después de que un crecimiento agresivo diluyera la experiencia. Más tarde se volvió una voz prominente en el debate corporativo-político estadounidense, incluido el escrutinio sostenido sobre la respuesta de la empresa a la sindicalización de tiendas.',
      ],
    },
    timeline: [
      { year: '1982', en: 'Joins Starbucks when it sells beans, not drinks.', es: 'Entra a Starbucks cuando vende granos, no bebidas.' },
      { year: '1983', en: 'A trip to Milan reframes the business as the café itself.', es: 'Un viaje a Milán replantea el negocio como el café mismo.' },
      { year: '1987', en: 'Buys Starbucks and merges it with his own chain.', es: 'Compra Starbucks y la fusiona con su propia cadena.' },
      { year: '2008', en: 'Returns as chief executive to reset the store experience.', es: 'Regresa como director ejecutivo para reiniciar la experiencia en tienda.' },
    ],
  },
  {
    slug: 'ingvar-kamprad',
    name: 'Ingvar Kamprad',
    company: 'IKEA',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'retail',
    born: '1926—2018',
    birthplace: { en: 'Pjätteryd, Småland, Sweden', es: 'Pjätteryd, Småland, Suecia' },
    nationality: { en: 'Swedish', es: 'Sueco' },
    knownFor: {
      en: 'Flat-pack furniture and the idea that the customer does the last mile of assembly',
      es: 'El mueble plano y la idea de que el cliente hace el último tramo del ensamblaje',
    },
    dek: {
      en: 'He founded the company at seventeen selling pens and matches, and the single decision that defined it came from taking the legs off a table to fit it in a car.',
      es: 'Fundó la empresa a los diecisiete vendiendo plumas y fósforos, y la decisión que la definió salió de quitarle las patas a una mesa para que cupiera en un carro.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Kamprad started IKEA in 1943 in rural Sweden as a mail-order business selling small household goods, using an acronym built from his initials and the names of the farm and village where he grew up. Furniture came later.',
        'The defining change was flat packing. When a colleague removed a table’s legs to fit it into a car, the company realised that shipping furniture disassembled collapsed transport and storage costs — and that customers would trade assembly labour for a lower price.',
        'The showroom-warehouse format, the catalogue and the deliberately restricted route through the store all followed from the same logic of cost and volume. Kamprad also faced lasting public reckoning over his documented involvement with a Swedish pro-Nazi movement as a young man, which he acknowledged and apologised for.',
      ],
      es: [
        'Kamprad arrancó IKEA en 1943 en la Suecia rural como un negocio de venta por catálogo de artículos pequeños para el hogar, usando un acrónimo armado con sus iniciales y los nombres de la granja y el pueblo donde creció. Los muebles vinieron después.',
        'El cambio definitorio fue el empaque plano. Cuando un colega le quitó las patas a una mesa para que cupiera en un carro, la empresa entendió que enviar muebles desarmados desplomaba los costos de transporte y almacenamiento, y que los clientes cambiarían trabajo de ensamblaje por un precio más bajo.',
        'El formato de sala de exhibición con bodega, el catálogo y el recorrido deliberadamente restringido por la tienda salieron todos de la misma lógica de costo y volumen. Kamprad también enfrentó un cuestionamiento público duradero por su documentada participación juvenil en un movimiento pronazi sueco, que reconoció y por el que pidió disculpas.',
      ],
    },
    timeline: [
      { year: '1943', en: 'Founds IKEA at seventeen as a mail-order business.', es: 'Funda IKEA a los diecisiete como negocio de venta por catálogo.' },
      { year: '1956', en: 'Adopts flat-pack design and self-assembly.', es: 'Adopta el diseño de empaque plano y el autoensamblaje.' },
      { year: '1958', en: 'Opens the first IKEA store in Älmhult.', es: 'Abre la primera tienda IKEA en Älmhult.' },
      { year: '1973—', en: 'Expands beyond Scandinavia into a global chain.', es: 'Se expande más allá de Escandinavia hacia una cadena global.' },
    ],
  },
  {
    slug: 'warren-buffett',
    name: 'Warren Buffett',
    company: 'Berkshire Hathaway',
    role: { en: 'Chairman and chief executive', es: 'Presidente y director ejecutivo' },
    sector: 'finance',
    born: '1930',
    birthplace: { en: 'Omaha, Nebraska, U.S.', es: 'Omaha, Nebraska, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Compounding capital for six decades from a failing textile mill',
      es: 'Componer capital durante seis décadas desde una textilera en decadencia',
    },
    dek: {
      en: 'He bought a dying textile company and used it as the vehicle to acquire everything else, then kept the same office in Omaha the whole time.',
      es: 'Compró una textilera moribunda y la usó como vehículo para adquirir todo lo demás, y mantuvo la misma oficina en Omaha todo el tiempo.',
    },
    readMinutes: 5,
    body: {
      en: [
        'Buffett studied under Benjamin Graham at Columbia and began by applying Graham’s strict value framework: buy assets for less than they are demonstrably worth. He ran investment partnerships in Omaha through the 1950s and 1960s with unusual returns.',
        'He took control of Berkshire Hathaway, a struggling New England textile manufacturer, in 1965. The textile operations were a bad business, but the corporate shell became a permanent capital vehicle, and insurance subsidiaries provided float he could invest without redemption pressure.',
        'Influenced by his partner Charlie Munger, he shifted from buying statistically cheap companies to buying high-quality businesses at fair prices, taking large positions in Coca-Cola, American Express and later Apple. His annual letters became a widely read text on capital allocation, and he has pledged to give away the large majority of his fortune.',
      ],
      es: [
        'Buffett estudió con Benjamin Graham en Columbia y empezó aplicando el marco estricto de valor de Graham: comprar activos por menos de lo que demostrablemente valen. Dirigió sociedades de inversión en Omaha durante los años cincuenta y sesenta con retornos inusuales.',
        'Tomó el control de Berkshire Hathaway, un fabricante textil en dificultades de Nueva Inglaterra, en 1965. Las operaciones textiles eran un mal negocio, pero la estructura corporativa se convirtió en un vehículo permanente de capital, y las subsidiarias de seguros aportaron flotante que podía invertir sin presión de rescates.',
        'Influido por su socio Charlie Munger, pasó de comprar empresas estadísticamente baratas a comprar negocios de alta calidad a precios justos, tomando posiciones grandes en Coca-Cola, American Express y más tarde Apple. Sus cartas anuales se volvieron un texto ampliamente leído sobre asignación de capital, y se ha comprometido a donar la gran mayoría de su fortuna.',
      ],
    },
    timeline: [
      { year: '1956', en: 'Starts investment partnerships in Omaha.', es: 'Arranca sociedades de inversión en Omaha.' },
      { year: '1965', en: 'Takes control of Berkshire Hathaway.', es: 'Toma el control de Berkshire Hathaway.' },
      { year: '1978', en: 'Charlie Munger becomes vice-chairman.', es: 'Charlie Munger se convierte en vicepresidente.' },
      { year: '2006', en: 'Pledges to give away the majority of his fortune.', es: 'Se compromete a donar la mayor parte de su fortuna.' },
    ],
  },
  {
    slug: 'carlos-slim',
    name: 'Carlos Slim',
    company: 'Grupo Carso · América Móvil',
    role: { en: 'Founder and chairman', es: 'Fundador y presidente' },
    sector: 'finance',
    born: '1940',
    birthplace: { en: 'Mexico City, Mexico', es: 'Ciudad de México, México' },
    nationality: { en: 'Mexican', es: 'Mexicano' },
    knownFor: {
      en: 'Building Latin America’s largest telecommunications group',
      es: 'Construir el mayor grupo de telecomunicaciones de América Latina',
    },
    dek: {
      en: 'He bought aggressively during the crises everyone else was fleeing, and ended up owning much of the infrastructure of a continent.',
      es: 'Compró agresivamente durante las crisis de las que todos huían, y terminó siendo dueño de buena parte de la infraestructura de un continente.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Slim, the son of Lebanese immigrants to Mexico, trained as a civil engineer and began investing as a teenager. He built Grupo Carso through the 1960s and 1970s as a diversified industrial holding, buying undervalued companies across construction, mining, tobacco and retail.',
        'His defining move was countercyclical. During Mexico’s debt crisis in the early 1980s, when foreign capital fled and domestic assets collapsed in price, he bought heavily. The strategy repeated during later downturns.',
        'The acquisition of a controlling stake in the newly privatised Telmex in 1990 turned the group into a telecommunications power, later expanded across the region through América Móvil. The resulting market position drew years of regulatory action in Mexico over competition. He has also directed substantial resources to education and health foundations.',
      ],
      es: [
        'Slim, hijo de inmigrantes libaneses en México, se formó como ingeniero civil y empezó a invertir siendo adolescente. Construyó Grupo Carso a lo largo de los años sesenta y setenta como un holding industrial diversificado, comprando empresas infravaloradas en construcción, minería, tabaco y comercio.',
        'Su movimiento definitorio fue contracíclico. Durante la crisis de deuda de México a principios de los ochenta, cuando el capital extranjero huyó y los activos locales se desplomaron de precio, compró con fuerza. La estrategia se repitió en caídas posteriores.',
        'La adquisición de una participación de control en el recién privatizado Telmex en 1990 convirtió al grupo en una potencia de telecomunicaciones, luego expandida por la región a través de América Móvil. La posición de mercado resultante atrajo años de acción regulatoria en México por temas de competencia. También ha dirigido recursos sustanciales a fundaciones de educación y salud.',
      ],
    },
    timeline: [
      { year: '1966', en: 'Founds the holding company that becomes Grupo Carso.', es: 'Funda la sociedad que se convierte en Grupo Carso.' },
      { year: '1982', en: 'Buys aggressively during Mexico’s debt crisis.', es: 'Compra agresivamente durante la crisis de deuda de México.' },
      { year: '1990', en: 'Leads the group that acquires control of Telmex.', es: 'Encabeza el grupo que adquiere el control de Telmex.' },
      { year: '2000', en: 'Spins out América Móvil for regional mobile expansion.', es: 'Escinde América Móvil para la expansión móvil regional.' },
    ],
  },
  {
    slug: 'masayoshi-son',
    name: 'Masayoshi Son',
    company: 'SoftBank',
    role: { en: 'Founder and chief executive', es: 'Fundador y director ejecutivo' },
    sector: 'finance',
    born: '1957',
    birthplace: { en: 'Tosu, Saga, Japan', es: 'Tosu, Saga, Japón' },
    nationality: { en: 'Japanese', es: 'Japonés' },
    knownFor: {
      en: 'The most concentrated technology bets of his generation, in both directions',
      es: 'Las apuestas tecnológicas más concentradas de su generación, en ambas direcciones',
    },
    dek: {
      en: 'His early stake in Alibaba became one of the most profitable venture investments ever made. His later fund made losses on a comparable scale.',
      es: 'Su participación temprana en Alibaba se volvió una de las inversiones de riesgo más rentables jamás hechas. Su fondo posterior perdió a escala comparable.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Son, a Japanese national of Korean descent, studied in California and returned to found SoftBank in 1981 as a software distributor. He moved into publishing, then into internet investing as the web opened up.',
        'In 2000 he invested a relatively small sum in a young Chinese company called Alibaba. When Alibaba listed in 2014, the stake had become one of the highest-returning venture investments on record, and it underwrote much of what SoftBank did afterward.',
        'He acquired the chip designer ARM in 2016 and launched the Vision Fund in 2017, deploying capital at a scale private technology markets had never absorbed. Some bets, notably WeWork, produced heavy and public losses, and the fund’s swings have made SoftBank a bellwether for risk appetite in the sector.',
      ],
      es: [
        'Son, japonés de ascendencia coreana, estudió en California y regresó para fundar SoftBank en 1981 como distribuidora de software. Pasó a la edición de publicaciones y luego a invertir en internet conforme la web se abría.',
        'En 2000 invirtió una suma relativamente pequeña en una joven empresa china llamada Alibaba. Cuando Alibaba salió a bolsa en 2014, esa participación se había convertido en una de las inversiones de riesgo de mayor retorno registradas, y financió buena parte de lo que SoftBank hizo después.',
        'Adquirió al diseñador de chips ARM en 2016 y lanzó el Vision Fund en 2017, desplegando capital a una escala que los mercados privados de tecnología nunca habían absorbido. Algunas apuestas, sobre todo WeWork, produjeron pérdidas cuantiosas y públicas, y los vaivenes del fondo han hecho de SoftBank un termómetro del apetito de riesgo del sector.',
      ],
    },
    timeline: [
      { year: '1981', en: 'Founds SoftBank as a software distributor.', es: 'Funda SoftBank como distribuidora de software.' },
      { year: '2000', en: 'Invests early in Alibaba.', es: 'Invierte de forma temprana en Alibaba.' },
      { year: '2016', en: 'Acquires the chip designer ARM.', es: 'Adquiere al diseñador de chips ARM.' },
      { year: '2017', en: 'Launches the Vision Fund.', es: 'Lanza el Vision Fund.' },
    ],
  },
  {
    slug: 'ray-dalio',
    name: 'Ray Dalio',
    company: 'Bridgewater Associates',
    role: { en: 'Founder', es: 'Fundador' },
    sector: 'finance',
    born: '1949',
    birthplace: { en: 'Queens, New York, U.S.', es: 'Queens, Nueva York, EE. UU.' },
    nationality: { en: 'American', es: 'Estadounidense' },
    knownFor: {
      en: 'Building the world’s largest hedge fund around written, testable rules',
      es: 'Construir el mayor fondo de cobertura del mundo alrededor de reglas escritas y comprobables',
    },
    dek: {
      en: 'He was wiped out by a public, confident and completely wrong market call, and rebuilt his whole method around never trusting his own certainty again.',
      es: 'Quedó arruinado por un pronóstico de mercado público, seguro y completamente equivocado, y rehizo todo su método para no volver a confiar en su propia certeza.',
    },
    readMinutes: 4,
    body: {
      en: [
        'Dalio started Bridgewater in 1975 out of his New York apartment. In the early 1980s he predicted an economic collapse that did not arrive, lost nearly everything, and had to borrow money from his father to stay afloat.',
        'The rebuild was methodological. He began writing down the reasoning behind every decision so it could be tested against outcomes, which over time became a systematic, rules-based approach to markets and an internal culture of documented, blunt disagreement.',
        'Bridgewater grew into the largest hedge fund in the world, known for the All Weather approach to portfolio construction and for research on long-term debt cycles. Dalio published his principles as a book in 2017 and stepped back from control of the firm in 2022.',
      ],
      es: [
        'Dalio arrancó Bridgewater en 1975 desde su departamento en Nueva York. A principios de los ochenta predijo un colapso económico que no llegó, perdió casi todo y tuvo que pedirle dinero prestado a su padre para mantenerse a flote.',
        'La reconstrucción fue metodológica. Empezó a escribir el razonamiento detrás de cada decisión para poder contrastarlo con los resultados, lo que con el tiempo se convirtió en un enfoque sistemático y basado en reglas para los mercados, y en una cultura interna de desacuerdo documentado y directo.',
        'Bridgewater creció hasta ser el mayor fondo de cobertura del mundo, conocido por el enfoque All Weather de construcción de portafolios y por su investigación sobre ciclos largos de deuda. Dalio publicó sus principios como libro en 2017 y se apartó del control de la firma en 2022.',
      ],
    },
    timeline: [
      { year: '1975', en: 'Founds Bridgewater from his apartment.', es: 'Funda Bridgewater desde su departamento.' },
      { year: '1982', en: 'A wrong public call nearly destroys the firm.', es: 'Un pronóstico público equivocado casi destruye la firma.' },
      { year: '1996', en: 'Launches the All Weather portfolio strategy.', es: 'Lanza la estrategia de portafolio All Weather.' },
      { year: '2022', en: 'Steps back from control of the firm.', es: 'Se aparta del control de la firma.' },
    ],
  },
];
