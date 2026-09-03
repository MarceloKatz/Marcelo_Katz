export const NAV_LINKS = [
  { href: "/docencia", label: "DOCENCIA" },
  { href: "/espacio-aguirre", label: "ESPACIO AGUIRRE" },
  { href: "/espectaculos", label: "ESPECTÁCULOS" },
  { href: "/coach", label: "PERSONAS Y ORGANIZACIONES" },
  { href: "/agenda", label: "AGENDA" },
  { href: "/bio", label: "BIO" },
  { href: "/prensa", label: "PRENSA" },
  { href: "/contacto", label: "CONTACTO" },
] as const;

export const SITE = {
  name: "Marcelo Katz",
  email: "marcelokatz@marcelokatz.com.ar",
  whatsapp: "5491136317717",
  whatsappLink: "https://wa.me/5491136317717",
  logo: "/images/site_assets/cropped-web-MK-template2-03.png",
  logoFooter: "/images/site_assets/logoFooter-300x208.png",
};

// HOME ----------------------------------------------------------------------
export const HOME = {
  heroImage: "/images/site_assets/FOTO_HOME.jpeg",
  headline: "KATZ\nCLOWN - MÁSCARAS - BUFÓN\nLIDERAZGO - EMPATÍA - EXPRESIVIDAD - JUEGO",
  intro:
    "Puentes invisibles que unen a las personas consigo mismas y con los demás. El placer de compartir y contactar. Convocar a la risa y al juego.",
  paragraphs: [
    "Estoy ligado a las artes escénicas como actor, director, guionista y profesor.",
    "Trabajo sobre el humor, la espontaneidad, la empatía y el lenguaje verbal y no verbal.",
    "En teatro dirijo mis propias producciones y las de otras compañías.",
    "Como docente trabajo con amateurs y profesionales en Argentina, Latinoamérica y Europa.",
    "Diseño y dirijo eventos artísticos para empresas, instituciones y organismos públicos.",
    "Como coach trabajo con profesionales, políticos y empresarios sobre escuchatoria, contacto, oratoria, eficiencia en las relaciones y felicidad laboral y personal.",
  ],
  keywords:
    "EMPATÍA-CONTACTO-EMOCIÓN-CUERPO-PASIÓN-RISA-IMPULSO-DISPONIBILIDAD-PRESENTE-VACÍO-ESCUCHA-INTENSIDAD-URGENCIA-CALMA",
};

// DOCENCIA ------------------------------------------------------------------
export const DOCENCIA = {
  title: "Entrenamientos para amateurs y profesionales",
  disciplines: [
    {
      label: "CLOWN",
      image: "/images/site_assets/FOTO_2-DOCENCIA.jpg",
      targetId: "entrenamiento-clown",
    },
    {
      label: "BUFÓN",
      image: "/images/site_assets/FOTO_3-DOCENCIA.jpg",
      targetId: "entrenamiento-bufon",
    },
    {
      label: "MÁSCARAS",
      image: "/images/site_assets/FOTO-4-DOCENCIA.jpg",
      targetId: "entrenamiento-mascaras",
    },
  ],
  schedules: [],
  trainings: [
    {
      title: "Entrenamiento de Clown",
      body: "Una experiencia apasionante, vigorizante, intensa, transformadora y divertida. Nos reencuentra con la potencia del juego y nos permite compartirlo con el público y los compañeros de escena. Nos anima a mostrar quiénes somos y a generar un vínculo profundo con el público. Cuerpo, presente, ritmo, vulnerabilidad, empatía, impulso, contacto, emoción, risa, autenticidad.",
    },
    {
      title: "Entrenamiento de Bufón",
      body: "El placer de transgredir y denunciar indagando en la monstruosidad y bestialidad que habita en nosotros. Los bufones se burlan de todo y de todos, poniendo de manifiesto la absurdidad de las instituciones y las relaciones humanas. Todo esto, buscando al mismo tiempo la comicidad. Un entrenamiento intenso sobre la búsqueda del cuerpo-bufón (monstruos, deformes, bestias, personajes fantásticos). El ritmo, la urgencia (y supervivencia escénica), los quiebres y el contacto con el público. Una indagación profunda y divertida de las temáticas de conflictiva de lo humano, que tocan a cada alumno.",
      link: { label: "Video de entrenamiento de bufón", url: "https://www.youtube.com/watch?v=UuPba0ybilw" },
    },
    {
      title: "Entrenamiento de Máscaras",
      body: "Un viaje sorprendente para descubrir otros personajes y otros cuerpos que habitan en uno. Un entrenamiento meticuloso para encontrar el cuerpo adecuado para cada máscara que se utiliza. Implica encontrar la unidad de ese nuevo rostro (la máscara) con el cuerpo, las dinámicas de movimiento y la personalidad que de ahí resulta y da vida al nuevo personaje.",
    },
  ],
  interview: { label: "Entrevista a M. Katz", url: "https://www.youtube.com/watch?v=hYzYAIZSAio" },
  gallery: [
    { image: "/images/site_assets/FOTO-N°-5-docencia.-Paris.-2016.jpg", caption: "Paris 2016" },
    { image: "/images/site_assets/FOTO-N°-6-docencia.-Barcelona-2018-1.jpg", caption: "Barcelona 2018" },
    { image: "/images/site_assets/FOTO-N°-7-docencia.-Clase-Magistral-en-Espacio-Aguirre.jpg", caption: "Clase Magistral en Espacio Aguirre 2013" },
    { image: "/images/site_assets/FOTO-N°-8-docencia.-Mar-del-Plata-2019.jpg", caption: "Mar del Plata 2019" },
    { image: "/images/site_assets/FOTO-N°-9-docencia.-Arrigorriaga-España-2014.jpg", caption: "Arrigorriaga, España 2014" },
    { image: "/images/site_assets/FOTO-N°-10-docencia.-Durango-España-2008.jpg", caption: "Durango, España 2008" },
    { image: "/images/site_assets/FOTO-N°-11-docencia.-Pamplona-2016.jpg", caption: "Pamplona 2016" },
    { image: "/images/site_assets/FOTO-N°-12-docencia.-Logroño-España-2013.jpg", caption: "Logroño, España 2013" },
    { image: "/images/site_assets/FOTO-N°-13-docencia.-Vitoria-España-2018.jpeg", caption: "Vitoria, España 2018" },
    { image: "/images/site_assets/FOTO-N°-14-docencia.-Santiago-de-Chile-2019.jpg", caption: "Santiago de Chile 2019" },
    { image: "/images/site_assets/CELCIT-2016.jpeg", caption: "CELCIT 2016" },
    { image: "/images/site_assets/FOTO-N°-16-docencia.-Parma-Italia-2016.jpg", caption: "Parma, Italia 2016" },
    { image: "/images/site_assets/FOTO-N°-17-docencia.-Zaragoza-2015.jpg", caption: "Zaragoza 2015" },
    { image: "/images/site_assets/bariloche-2017.jpeg", caption: "Bariloche 2017" },
    { image: "/images/site_assets/Córdoba-2011.jpeg", caption: "Córdoba 2011" },
    { image: "/images/site_assets/Universidad-de-Buenos-Aires.-2012..jpg", caption: "Universidad de Buenos Aires 2012" },
  ],
};

// ESPACIO AGUIRRE -----------------------------------------------------------
export const ESPACIO_AGUIRRE = {
  heroImage: "/images/site_assets/espacioAguirre.jpg",
  paragraphs: [
    "Después de 15 años de deambular con mis clases y espectáculos, a fines de 1999 concreté el sueño de un espacio propio. Una vieja fábrica de juguetes ubicada en el barrio de Villa Crespo, en Buenos Aires, se convirtió en un teatro y una escuela de clown, bufón y máscaras.",
    "El teatro tiene capacidad para 100 espectadores. Aloja algunas de mis producciones, las de la escuela y producciones invitadas.",
    "La escuela cuenta con un staff de 10 docentes, un coordinador pedagógico y mi dirección. Con ese equipo a lo largo de más de 25 años hemos creado una línea pedagógica única. Por las 3 salas de Espacio Aguirre han pasado más de 4500 alumnos argentinos y extranjeros, amateurs y profesionales que ingresaron a destacadas compañías nacionales e internacionales.",
    "Cada año unos 350 alumnos entrenan en los cursos anuales, divididos en 5 niveles de experiencia. Además de su entrenamiento comparten producciones de muestras y espectáculos, charlas, campamentos, encuentros con alumnos de otros grupos y una serie de actividades que generan una hermosa red de humanidad y docencia. Todo esto hace del pasaje por la escuela, una experiencia vital y única.",
    "Además de los cursos anuales, durante el año hay cursos intensivos.",
    "Decenas de profesores transmiten en Argentina y en Latinoamérica lo que han aprendido en Espacio Aguirre.",
  ],
  external: {
    label: "Espacio Aguirre",
    url: "https://espacioaguirre.com.ar/",
    logo: "/images/site_assets/Espaguirre.png",
  },
};

// ESPECTÁCULOS --------------------------------------------------------------
export const ESPECTACULOS = {
  enCartel: {
    title: "EN CARTEL",
    body: "Jueves 20.30 hs en Espacio Aguirre.",
  },
  intro: {
    title: "Algunos espectáculos de mi historia",
    body: `La impronta de mis espectáculos nace del cruce entre el humor, el teatro físico y una fuerte búsqueda visual.

A veces ese universo es poético y onírico; otras, feroz, desmesurado y satírico.

Me interesa que la risa no sea un fin en sí mismo, sino una forma de mirar la realidad, abrir preguntas y generar una experiencia que permanezca en el espectador.

Recibí diversos premios y nominaciones del medio teatral: Premios ACE (Críticos de Espectáculos), María Guerrero, Getea, Atina, Pregonero, Teatro XXI, entre otros.

Estrené como director en reconocidos teatros de Buenos Aires: Teatro Municipal General San Martín, Teatro Nacional Cervantes, C.C. Konex, Centro Cultural de la Cooperación, Teatro Metropolitan, Teatro Regina, La Trastienda y Centro Cultural Recoleta, entre otros.

Mis espectáculos se presentaron en Argentina, Uruguay, Chile, Perú, Colombia, España, Estados Unidos, Dinamarca y Francia.`,
  },
  reviews: [
    { source: "La Nación", author: "Jazmín Carbonell", quote: "Marcelo Katz nos sorprende gratamente. En “Top, top, top” está impecable y hace honor a su sobresaliente trayectoria, con una ternura que emociona. Humor sano e inteligente." },
    { source: "El Diario de Ibiza", quote: "Descomunal actuación de Marcelo Katz. Ha llevado a la platea de la risa al llanto con sutileza y maestría." },
    { source: "Radio América", author: "Romina Pomponio", quote: "Una obra entrañable, alegre y emotiva. Un personaje compuesto exquisitamente por Marcelo Katz. Una sucesión ininterrumpida de momentos realmente mágicos." },
    { source: "Clarín", author: "Laura Falcoff", quote: "Aguas es un espectáculo delicioso, construido desde la simplicidad." },
    { source: "Página 12", author: "Silvina Friera", quote: "Con un encantador arsenal de efectos cómicos y oníricos, la dirección de Katz transforma la solemnidad de la ópera “Guillermo Tell” en una aventura moderna y fascinante." },
    { source: "Mirada y Sentido", author: "Patricia Lanatta", quote: "Nuevamente el director Marcelo Katz nos asombra con su talento para enlazar lo cómico y lo onírico y genera cuadros fantásticos. Consigue que el espectador se espeje en ese sueño a través de escenas hilvanadas por la puntada del humor, seguida de la imagen poderosa. Hay belleza." },
  ],
  images: [
    { src: "/images/site_assets/FOTO-N°-9-Espectáculos.-Los-fabulosos-singer-2013.jpeg", caption: "Los Fabulosos Singer (2013)" },
    { src: "/images/site_assets/FOTO-N°-8-espectáculos.-Aguas-2008.jpg", caption: "Aguas (2008)" },
  ],
  awards: {
    title: "PREMIOS Y NOMINACIONES",
    items: [
      "Premio ACE (Asociación de Críticos de Espectáculos)",
      "Premio Teatro XXI (del grupo de investigación teatral Getea)",
      "Premio Teatros del Mundo (de la Universidad de Buenos Aires)",
      "Premio María Guerrero",
      "Premio Pregonero (de la Fundación El Libro)",
      "Premio CTBA a la Creación y Producción de Artes Escénicas en Salas del Circuito Independiente 2021",
      "Entre otros.",
    ],
  },
  actor: {
    title: "ACTOR",
    body: "Mi primera actuación profesional fue a los 18 años, en un espectáculo en homenaje a Kafka producido por la embajada de Austria en Argentina. A los 23 años fui seleccionado para integrar los elencos del Teatro Municipal General San Martín de Buenos Aires. Integré la compañía de Danza de Teresa Duggan y actué en espectáculos de circo, teatro y clown en Argentina y en varios países de América y Europa.",
    images: [
      { src: "/images/site_assets/FOTO-N°11-ESPECTÁCULOS.-La-comedia-de-las-equivocaciones.-1988-692x1024.jpg", caption: "La comedia de las equivocaciones (1988)" },
      { src: "/images/site_assets/FOTO-N°10-Espectáculos.-Elemental-2006.jpg", caption: "Elemental (2006)" },
    ],
  },
  director: {
    title: "DIRECTOR",
    body: "En 1993 fundé La Trup, primera compañía de nuevo circo de Argentina. A cargo de este grupo, que expandió el arte circense en Argentina, monté espectáculos durante 7 años. Desde el 97 dirigí más de 50 espectáculos de teatro, clown, máscaras, música y circo. Tanto producciones propias como de otras compañías.",
  },
};

// COACH ---------------------------------------------------------------------
export const COACH = {
  title: "Entrenamiento de oratoria y empatía",
  intro:
    "Un método distinto para un viejo objetivo: comunicarse mejor. El cuerpo, la escucha, la palabra, el presente, el ritmo, la respiración y el uso del abanico de colores que habitan en uno. La precisión y la espontaneidad. Un método propio en el que vuelco la experiencia obtenida desde 1980, actuando y dirigiendo en escenarios nacionales e internacionales, y enseñando en Argentina, USA, Francia, España, Italia, Suiza, Dinamarca, Portugal, Chile, México, Uruguay y en mi escuela en Buenos Aires por la que han pasado más de 4000 alumnos amateurs y profesionales. Un entrenamiento sobre eficiencia en las relaciones, la oratoria, la empatía, y la felicidad laboral y personal.",
  clients:
    "Entrené a destacados científicos, empresarios y políticos: Martín Lousteau, Matías Tombolini, Marco Lavagna, entre otros. Y a equipos gerenciales de empresas como Motorola, Federal Express, MetLife, Booking Argentina, Maprimed, Enerminds, Rapipago, entre otras.",
  images: [
    "/images/coach/coach-1.jpg",
    "/images/coach/coach-2.jpg",
    "/images/coach/j-s-c-abril-26-8.jpg",
  ],
  benefits: {
    title: "Qué permite el entrenamiento",
    items: [
      "Aprender a captar y sostener el interés del auditorio o los interlocutores. Evitar aburrir y adaptarse a las reacciones del auditorio.",
      "Comprender la influencia del lenguaje corporal. Trabajar con el cuerpo y la mirada para tener una comunicación expresiva que modifique al auditorio y a los interlocutores.",
      "Aceptar quiénes somos y, desde nuestra esencia y personalidad, conectar con nuestros interlocutores.",
      "Aprender a planificar y preparar una presentación oral para que los conceptos a transmitir lleguen con efectividad.",
      "Aprender a armar las exposiciones, combinando partes preparadas y otras improvisadas sobre ideas preconcebidas.",
      "Trabajar el miedo escénico y la desinhibición. La respiración. Los imprevistos.",
      "Aprender a prepararse para la exposición. Los minutos previos a enfrentar al público.",
    ],
  },
  testimonials: [
    {
      author: "Matías Tombolini",
      role: "Vicepresidente del Banco Nación",
      quote:
        "Experiencia inigualable y diferente a todo lo que conocía. Me dio herramientas innovadoras para enfrentar audiencias diversas. Cada sesión fue una coctelera de emociones inesperadas que me permitieron abordar nuevas perspectivas y estrategias.",
    },
    {
      author: "Valeria Fernández",
      role: "Gerenta de Marketing de Motorola",
      quote:
        "Me sorprendió lo novedoso del enfoque. Me abrió nuevas posibilidades profesionales e incluso desbordó lo laboral. Una experiencia sumamente gratificante.",
    },
    {
      author: "Viviana Schilkrut",
      role: "Consultora en Recursos Humanos",
      quote:
        "Marcelo posee una lectura e interpretación de la corporalidad impresionantes. He visto a distintos directores y gerentes profundizar su expresividad y emocionalidad en la interacción con otras personas. Una experiencia muy enriquecedora.",
    },
  ],
};

// EVENTOS -------------------------------------------------------------------
export const EVENTOS = {
  title: "Creación artística a medida: flashes, performances o shows.",
  body: "Dirijo un equipo creativo integrado por guionistas, músicos, coreógrafos y artistas de todas las disciplinas (bailarines, magos, actores, instrumentistas, acróbatas, etc.) con los que diseño y produzco todo tipo de ideas de acuerdo a las necesidades del cliente —desde pequeños flashes a shows de larga duración. Fui el director artístico de Showcenter Haedo, con 50 artistas permanentes a mi cargo. Diseñé el show con el que IBM lanzó la primera notebook que hubo en Argentina. Monté para Carrefour un mega show sobre camiones en el Hipódromo de Palermo con el que 100.000 personas esperaron el lanzamiento de los fuegos artificiales por el festejo del año nuevo en 1996. Dirigí el espectáculo de apertura del Congreso Internacional de Anestesiología 2017. Creé el espectáculo con el que Lufthansa comunicó en diversas capitales latinoamericanas sus nuevos servicios en 1999. Estuve a cargo de una sección del show de apertura del HSBC en Argentina. En 2018 fui responsable de parte de la artística en los Juegos Olímpicos de la Juventud realizados en Buenos Aires.",
  clients:
    "Unicenter, L'Oréal, Banco de Boston, Nokia, Petrobras, Siderca, América TV, Telefé, Abasto Shopping, Aysa, Gándara, Municipalidad de Buenos Aires, Secretaría de Cultura de la Nación, son parte de las empresas que han contratado mis servicios.",
  galleryTop: [
    { src: "/images/site_assets/FOTO-N°1-Dragón-de-luces.jpg", caption: "Dragón de luces" },
    { src: "/images/site_assets/FOTO-N°2-Acróbata-aérea..jpg", caption: "Acróbata aérea" },
    { src: "/images/site_assets/FOTO-N°3-Swing-con-luces.jpg", caption: "Swing con luces" },
  ],
  galleryBottom: [
    { src: "/images/site_assets/FOTO-N°4-Magos.jpg", caption: "Magos" },
    { src: "/images/site_assets/FOTO-N°7-Malabares-con-fuego-1.jpg", caption: "Malabares con fuego" },
    { src: "/images/site_assets/FOTO-N°5-Personajes-sorprendentes.jpg", caption: "Personajes sorprendentes" },
    { src: "/images/site_assets/FOTO-N°8-Clowns.jpg", caption: "Clowns" },
    { src: "/images/site_assets/FOTO-N°6-Dobles.jpg", caption: "Dobles" },
    { src: "/images/site_assets/FOTO-N°9-Contact-y-equilibristas.jpg", caption: "Contact y equilibristas" },
  ],
};

// AGENDA --------------------------------------------------------------------
export const AGENDA = {
  funciones: [
    {
      mes: "SEPTIEMBRE",
      eventos: [
        "VACA MUERTA — Sábados a las 19h, Teatro Del Pueblo (Lavalle 3636), Buenos Aires — [Entradas por Alternativa teatral](https://publico.alternativateatral.com/entradas101150-vaca-muerta?o=14)",
        "GASPET — Viernes 18 de Septiembre a las 21h, Teatro Espacio Aguirre (Aguirre 1270), Buenos Aires — [Entradas por Alternativa teatral](https://www.alternativateatral.com/obra76918-gaspet)"
      ]
    },
    {
      mes: "OCTUBRE",
      eventos: [
        "GASPET — Sábado 17 de Octubre — Madrid, España."
      ]
    },
    {
      mes: "ENERO / FEBRERO 2027",
      eventos: [
        "GASPET — Enero/febrero 2027 — Ciudad de México, Puebla, Monterrey y Guadalajara, México."
      ]
    }
  ],
  entrenamientos: [
    {
      mes: "SEPTIEMBRE",
      eventos: [
        "CLOWN — Viernes 4 a domingo 6 de Septiembre en Montevideo, Uruguay."
      ]
    },
    {
      mes: "OCTUBRE",
      eventos: [
        "BUFÓN — Viernes 2 a domingo 4 de Octubre en Pamplona, España.",
        "CLOWN — Lunes 5 a jueves 8 de Octubre en Vigo, España.",
        "CLOWN — Sábado 10 y Domingo 11 de Octubre en Gambara, País vasco.",
        "CLOWN — Lunes 12 a jueves 15 de Octubre en Gijón, España.",
        "CLOWN — Sábado 17 y Domingo 18 de Octubre en Madrid, España.",
        "CLOWN — Lunes 19 a Domingo 25 de Octubre en París, Francia."
      ]
    }
  ]
};

// BIO -----------------------------------------------------------------------
export const BIO = {
  heroImage: "/images/site_assets/BIO.jpg",
  title: "Marcelo Katz — Bio",
  paragraphs: [
    "Desde 1985 me dedico al teatro, a la danza, a la música y al circo como actor, director y maestro. Puse el acento en el clown, el bufón y las máscaras.",
    "Fui actor del Elenco del Teatro Municipal San Martín de Buenos Aires, entre los años 1987 y 1992.",
    "Bailé con la compañía de danza de Teresa Duggan.",
    "En 1993, junto a Gerardo Hochman armamos y dirigimos La Trup, primera compañía de Nuevo Circo de Argentina.",
    "En 1999 abrí Espacio Aguirre, primer teatro y centro de formación especializado en clown, bufón y máscaras en Latinoamérica. Allí se formaron más de 4000 alumnos de todos los niveles.",
    "Como director monté espectáculos en teatros significativos de Buenos Aires: Teatro Municipal General San Martín, Teatro Nacional Cervantes, Ópera, Metropolitan, La Trastienda, Broadway, Konex, Centro Cultural de la Cooperación, Teatro Regina, entre otros.",
    "Recibí diversos premios y nominaciones del medio teatral: Premio ACE (Asociación de Críticos de Espectáculos), Premio Teatro XXI (del grupo de investigación teatral Getea), Premio Teatros del Mundo (de la Universidad de Buenos Aires), Premio Pregonero (de la Fundación El Libro), Premio María Guerrero, entre otros.",
    "Fui docente en la Escuela de Arte Dramático de la Universidad del Salvador, en la escuela de Danza de Julio Bocca, en el Teatro Municipal General San Martín de Buenos Aires, y lo soy actualmente en el Centro de Estudios Latinoamericanos de Teatro (Celcit).",
    "Dicté cursos y llevé espectáculos a Lisboa, París, Strasbourg (Francia), Parma (Italia), Northampton (USA), Barcelona, Bilbao, Durango, Arrigorriaga, Zaragoza, Valencia, Palencia, Ibiza, Avilés, Madrid, Logroño, Murcia, Gijón, Vitoria, Palma, Benlloch, Bergara, Huesca (España), Montevideo, Asunción del Paraguay, México, San José de Costa Rica, Santiago de Chile y a diversas ciudades de Argentina.",
    "Fui jurado de los Premios Nacionales de Teatro, nombrado por el Ministro de Cultura de la Nación.",
    "Recibí la medalla al Fair Play del Comité Olímpico Nacional y del Comité Olímpico Internacional, entregada por el Ministro de Deportes de Francia.",
    "Desde 1997 diseño y dirijo shows para eventos empresariales e institucionales.",
    "Desde el año 2005 aporto mi experiencia a científicos, empresarios, políticos y profesionales entrenándolos en oratoria, expresividad y empatía.",
  ],
};

// PRENSA --------------------------------------------------------------------
export type PrensaItem = { title: string; image: string; href: string };

export const PRENSA: PrensaItem[] = [
  { title: "Diario Kultura. España", image: "/images/prensa/2-Nota-a-Marcelo-Katz-2015-Diario-Kultura-690x899.jpg", href: "https://marcelokatz.com.ar/nota-a-marcelo-katz-2015-diario-kultura/" },
  { title: "Buenos Aires Herald", image: "/images/prensa/Buenos-Aires-Herald-690x574.jpg", href: "https://marcelokatz.com.ar/02_clases-3/" },
  { title: "El Diario de Ibiza, España", image: "/images/prensa/11-El-diario-de-Ibiza.-Nota-a-M.Katz_-690x946.jpg", href: "https://marcelokatz.com.ar/el-diario-de-ibiza-nota-a-m-katz/" },
  { title: "Revista Mutis por el Foro", image: "/images/prensa/15-Nota-a-M.Katz_.-Revista-Mutis-por-el-Foro.-690x352.jpg", href: "https://marcelokatz.com.ar/nota-a-m-katz-revista-mutis-por-el-foro/" },
  { title: "Clarín — Aguas", image: "/images/prensa/Clarin.-Aguas.-690x623.jpg", href: "https://marcelokatz.com.ar/clarin-aguas/" },
  { title: "Revista Anfibia", image: "/images/prensa/3-reite-de-vos-690x459.jpg", href: "https://marcelokatz.com.ar/reite-de-vos/" },
  { title: "Buenos Aires Económico", image: "/images/prensa/Buenos-Aires-Económico.-Entrevista-a-M.Katz_-690x1202.jpg", href: "https://marcelokatz.com.ar/clases-5/" },
  { title: "El Correo. País Vasco", image: "/images/prensa/16-EL-Correo.-País-Vasco.-2019-690x511.jpg", href: "https://marcelokatz.com.ar/el-correo-pais-vasco-2019/" },
  { title: "Diario Berria. España", image: "/images/prensa/12-Nota-a-Marcelo-Katz-2015-Diario-Berria-690x896.jpg", href: "https://marcelokatz.com.ar/nota-a-marcelo-katz-2015-diario-berria/" },
  { title: "Clarín — Amargo Dulzor", image: "/images/prensa/Clarin.-Amargo-Dulzor-690x551.jpg", href: "https://marcelokatz.com.ar/clarin-amargo-dulzor/" },
  { title: "Diario Clarín. Entrevista", image: "/images/prensa/4-Diario-Clarin.-Entrevista-690x966.jpg", href: "https://marcelokatz.com.ar/diario-clarin-entrevista/" },
  { title: "Buenos Aires Herald — Hazañas", image: "/images/prensa/Buenos-Aires-Herald-Hazañas-690x806.jpg", href: "https://marcelokatz.com.ar/clases-4/" },
  { title: "Diario Clarín — Aires", image: "/images/prensa/7-Diario-Clarin.-Nota-por-espectáculo-Aires.-690x462.jpg", href: "https://marcelokatz.com.ar/diario-clarin-nota-por-espectaculo-aires/" },
  { title: "La Voz del Interior, Córdoba", image: "/images/prensa/8-La-Voz-del-Interior-Córdoba.-2018-690x709.jpg", href: "https://marcelokatz.com.ar/la-voz-del-interior-cordoba-2018/" },
  { title: "Entrevista en Clarín", image: "/images/prensa/10-Marcelo-Katz.-Entrevista-en-Clarin-690x959.jpg", href: "https://marcelokatz.com.ar/marcelo-katz-entrevista-en-clarin/" },
  { title: "«Guillermo Tell» — Página 12", image: "/images/prensa/20-Pagina-12.-guillermo-tell.-690x710.jpg", href: "https://marcelokatz.com.ar/guillermo-tell/" },
  { title: "Diario Z", image: "/images/prensa/capital-de-clowns-690x753.jpg", href: "https://marcelokatz.com.ar/capital-de-clowns/" },
  { title: "Revista Viva — noviembre", image: "/images/prensa/14-Revista-Viva-noviembre-2011_1-690x461.jpg", href: "https://marcelokatz.com.ar/revista-viva-noviembre-2011/" },
  { title: "BAE (Buenos Aires Económico)", image: "/images/prensa/21-M.Katz-en-BAE-Buenos-aires-económico-690x683.jpg", href: "https://marcelokatz.com.ar/m-katz-en-bae-buenos-aires-economico/" },
  { title: "El arte de soñar entre risas", image: "/images/prensa/18-nueva-690x950.jpg", href: "https://marcelokatz.com.ar/el-arte-de-sonar-entre-risas/" },
];
