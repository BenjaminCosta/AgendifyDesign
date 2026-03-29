export type Lang = "es" | "en";

export interface NavItem {
  name: string;
  url: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface MethodologyItem {
  title: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  category: string;
  description: string;
  objective: string;
  solution: string;
}

export interface ReviewItem {
  projectTitle: string;
  time: string;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterGroup {
  label: string;
  links: FooterLink[];
}

export interface TranslationSchema {
  metadata: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    items: NavItem[];
    cta: string;
  };
  hero: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    label: string;
    titleWord1: string;
    titleWord2: string;
    subtitle: string;
    items: ServiceItem[];
    methodology: {
      label: string;
      title: string;
      subtitle: string;
      items: MethodologyItem[];
    };
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    modal: {
      objective: string;
      solution: string;
      stack: string;
      viewSite: string;
      talkProject: string;
      quickView: string;
      caseStudy: string;
      close: string;
      prev: string;
      next: string;
      image: string;
    };
    workana: {
      label: string;
      title1: string;
      title2: string;
      description: string;
      profiles: Array<{ role: string }>;
    };
    items: ProjectItem[];
  };
  reviews: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    completedProject: string;
    verified: string;
    viewOnWorkana: string;
    verifiedCount: string;
    items: ReviewItem[];
  };
  team: {
    titleWord1: string;
    titleWord2: string;
    subtitle: string;
    foundersLabel: string;
    viewProfile: string;
    members: TeamMember[];
  };
  contact: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    bullets: string[];
    successBadge: string;
    successTitle: string;
    successText: string;
    successFooter: string;
    formLabelName: string;
    formLabelEmail: string;
    formLabelMessage: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    errorMessage: string;
    sending: string;
    submit: string;
  };
  footer: {
    tagline: string;
    groups: FooterGroup[];
    copyright: string;
  };
}

export const translations: Record<Lang, TranslationSchema> = {
  es: {
    metadata: {
      title: "Agendify Design - Diseño y desarrollo que genera resultados",
      description:
        "Diseñamos y desarrollamos sitios web, apps y plataformas que generan resultados medibles. Sin vueltas, sin excusas.",
      ogTitle: "Agendify Design - Diseño y desarrollo que genera resultados",
      ogDescription:
        "Diseñamos y desarrollamos sitios web, apps y plataformas que generan resultados medibles. Sin vueltas, sin excusas.",
    },
    nav: {
      items: [
        { name: "Servicios", url: "#servicios" },
        { name: "Proyectos", url: "#proyectos" },
        { name: "Clientes", url: "#testimonios" },
        { name: "Equipo", url: "#equipo" },
        { name: "Contacto", url: "#contacto" },
      ],
      cta: "Contanos tu proyecto",
    },
    hero: {
      titleBefore: "Tu negocio merece un",
      titleHighlight: "producto digital",
      titleAfter: "que venda",
      primaryCta: "Contanos tu proyecto",
      secondaryCta: "Ver proyectos",
    },
    services: {
      label: "Servicios",
      titleWord1: "QUÉ",
      titleWord2: "HACEMOS",
      subtitle:
        "Nos metemos en tu negocio, entendemos el problema, y construimos la solución digital que lo resuelve.",
      items: [
        {
          title: "Diseño UX/UI & Branding",
          description:
            'Interfaces que convierten. No diseñamos "lindo por lindo": cada decisión visual tiene un objetivo, que el usuario tome acción.',
        },
        {
          title: "Desarrollo Web",
          description:
            "Sitios y plataformas rápidos, escalables y optimizados para SEO. Desde una landing que convierte hasta una plataforma compleja: lo construimos con código limpio que dura.",
        },
        {
          title: "Apps Mobile",
          description:
            "iOS y Android con rendimiento real. Diseño centrado en el usuario, desarrollo ágil, y una experiencia que hace que la gente vuelva a abrir la app.",
        },
      ],
      methodology: {
        label: "Metodología",
        title: "Cómo trabajamos",
        subtitle:
          "Un proceso claro de principio a fin. Sabés en todo momento qué estamos haciendo y por qué.",
        items: [
          {
            title: "Descubrimiento",
            description:
              "Analizamos tu negocio, competencia y objetivos para entender exactamente qué necesitás.",
          },
          {
            title: "Estrategia",
            description:
              "Definimos la arquitectura de información, tecnologías y roadmap del proyecto.",
          },
          {
            title: "Diseño & Prototipo",
            description:
              "Creamos wireframes y prototipos de alta fidelidad para validar antes de programar.",
          },
          {
            title: "Desarrollo",
            description:
              "Programamos con código limpio, optimizado y escalable usando las mejores tecnologías.",
          },
          {
            title: "Lanzamiento",
            description:
              "Deploy en producción con testing exhaustivo, SEO técnico y auditoría de performance.",
          },
          {
            title: "Soporte Continuo",
            description:
              "Mantenimiento, actualizaciones y optimizaciones para que tu producto siga creciendo.",
          },
        ],
      },
    },
    projects: {
      label: "Proyectos",
      title: "ALGUNOS DE NUESTROS PROYECTOS",
      subtitle: "Algunos de los productos que construimos. Resultados reales, no promesas.",
      modal: {
        objective: "Objetivo",
        solution: "Solución",
        stack: "Stack tecnológico",
        viewSite: "Ver sitio online",
        talkProject: "Hablemos de tu proyecto",
        quickView: "Vista rápida",
        caseStudy: "Ver Caso de Estudio",
        close: "Cerrar",
        prev: "Anterior",
        next: "Siguiente",
        image: "Imagen",
      },
      workana: {
        label: "Historial verificado",
        title1: "Esto es solo una parte.",
        title2: "El resto está en Workana.",
        description:
          "Más de 3 años de proyectos completados, reseñas reales y reputación construida entrega a entrega. Sin filtros.",
        profiles: [
          { role: "UX/UI & Branding" },
          { role: "Full-Stack" },
          { role: "Marketing & Estrategia" },
        ],
      },
      items: [
        {
          name: "Decoratre - E-commerce Premium de Muebles Artesanales",
          category: "E-commerce & Branding · Shopify",
          description:
            "Tienda en produccion con catalogo completo, experiencia de compra optimizada para el cliente premium, y una identidad digital coherente con el posicionamiento fisico de la marca.",
          objective:
            "Decoratre es una marca de muebles artesanales premium con showroom en Santiago y mercado en Mexico. Tenian el producto, la identidad y los clientes, pero su presencia online no estaba a la altura de lo que vendian.",
          solution:
            "Disenamos y desarrollamos una tienda Shopify completamente a medida con arquitectura de colecciones clara, secciones editoriales para contar la historia de la marca, navegacion dual para desktop y mobile, newsletter segmentado, pagina de showroom y una guia de compra que reduce dudas antes del contacto.",
        },
        {
          name: "BetCrowd - App Mobile de Predicciones Deportivas",
          category: "Mobile App · React Native",
          description:
            "App publicada en Google Play Store con sistema de torneos privados, predicciones, ranking en tiempo real y balance de deudas entre participantes.",
          objective:
            "Las apuestas entre amigos siempre existieron en grupos de WhatsApp, planillas de Excel o de palabra. El problema es que no hay registro, no hay cuotas justas, y al final del torneo nadie recuerda bien quien le debe cuanto a quien.",
          solution:
            "Disenamos y desarrollamos BetCrowd desde cero en React Native con Expo para Android e iOS. Permite crear torneos privados, invitar amigos con un link directo, hacer predicciones sobre cualquier evento deportivo o amateur, y calcular cuotas peer-to-peer entre participantes. El diferenciador central es un balance ficticio con registro de deudas inspirado en Splitwise, para que la app muestre exactamente quien le debe cuanto a quien sin mover dinero real dentro de la plataforma.",
        },
        {
          name: "Azul Profundo - Sitio Web & E-commerce Escuela de Buceo",
          category: "Web & E-commerce · React",
          description:
            "Sitio en producción con catálogo completo de cursos, e-commerce funcional, y posicionamiento SEO local activo.",
          objective:
            "Azul Profundo es una escuela de buceo certificada con cursos para todos los niveles. Tenían una operación consolidada con alumnos recurrentes, pero sin presencia digital a la altura: sin sitio propio, sin forma de mostrar los cursos ordenadamente, y sin canal para vender online.",
          solution:
            "Diseñamos y desarrollamos un sitio web completo con e-commerce integrado en React + Vite. La arquitectura está centrada en los cursos: cada uno tiene su propia página con descripción completa, requisitos previos, modalidad y precio. El e-commerce permite comprar directamente desde el sitio, eliminando la fricción del proceso de inscripción manual. Además implementamos un objeto coursesData centralizado, botón de WhatsApp, integración de redes sociales y SEO técnico local para posicionar búsquedas de buceo en Buenos Aires.",
        },
        {
          name: "Axelscale - Plataforma de Cursos & Comunidad",
          category: "Web App · Plataforma Educativa",
          description:
            "Plataforma en producción con alumnos activos, gestión de contenido autónoma vía Notion, y una experiencia de usuario que convierte una comunidad informal en un producto digital profesional.",
          objective:
            "Axelscale es una comunidad educativa de reventa online con audiencia, alumnos activos y un programa estructurado de 50 días. El desafío era dejar atrás herramientas dispersas y construir un lugar propio donde centralizar cursos, accesos y experiencia de alumno.",
          solution:
            "Diseñamos y desarrollamos una plataforma completa en Next.js con Firebase, autenticación con roles y acceso cerrado por contraseña. El contenido de módulos y lecciones se gestiona desde Notion sin tocar código, mientras que el dashboard del alumno organiza progreso, acceso a los 3 módulos del programa, plan de 50 días, integración con Discord y soporte continuo desde la plataforma.",
        },
      ],
    },
    reviews: {
      sectionLabel: "Testimonios",
      title: "Reseñas reales de clientes",
      subtitle:
        "Opiniones verificadas en Workana. Cada reseña corresponde a un proyecto completado y publicado en la plataforma, sin edición.",
      completedProject: "Proyecto completado",
      verified: "Verificado",
      viewOnWorkana: "Ver en Workana",
      verifiedCount: "+20 reseñas verificadas",
      items: [
        {
          projectTitle: "Diseño Web Profesional para Consultoría Gastronómica en Carrd.co",
          time: "Hace 9 meses",
          text: "Benjamín ha sido de gran ayuda para hacer la web de mi consultoría. Le estoy muy agradecido por el trato y el trabajo realizado. Sin lugar a dudas, recomiendo que cualquier persona que lo necesite lo contrate porque quedará absolutamente satisfecho con la labor de Benjamín.",
        },
        {
          projectTitle: "Desarrollo de Tienda Shopify para Dropshipping con Best Buy",
          time: "Hace 3 meses",
          text: "Lo recomiendo 1000%; siempre estuvo dispuesto a ayudar más de lo que se había propuesto. Solventó problemas que no eran nada fáciles y lo hizo muy rápido. Tuvo una paciencia increíble conmigo, estoy encantada con su trabajo, lo recomiendo y de seguro haré muchos más trabajos con él.",
        },
        {
          projectTitle: "Diseño y Desarrollo Web One Page Responsivo para Atria One Seguros con Integración Zoho CRM",
          time: "Hace 2 semanas",
          text: "Excelente experiencia trabajar con Tobías, comunicación rápida, fácil y directa. Siempre disponible para ayudar durante el proyecto. Hace seguimiento al avance del proyecto en forma proactiva y presta apoyo post producción. Todo Ok!",
        },
        {
          projectTitle: "Activación segura por QR + perfil editable para mascotas (WordPress)",
          time: "Hace 2 meses",
          text: "Excelente trabajo. Tobías fue muy claro, ordenado y profesional durante todo el proyecto. Cumplió con lo acordado, tuvo muy buena disposición para realizar ajustes, explicó bien el funcionamiento del plugin y mantuvo una comunicación constante y transparente.\n\nEl resultado final quedó muy bien y acorde a lo solicitado. Sin duda volvería a trabajar con él y lo recomiendo totalmente.",
        },
        {
          projectTitle: "Desarrollo backend para plataforma web de reservas de cancha de fútbol",
          time: "Hace un año",
          text: "Mateo ha echo un excelente trabajo, se nota su responsabilidad y profesionalismo. Ha despejado todas mis dudas y me ayudó en cosas que no entendía siendo muy claro. Superó mis expectativas, volvería a trabajar con él.",
        },
        {
          projectTitle: "Desarrollo a la medida",
          time: "Hace un año",
          text: "Entiende rápido el proceso o lo que se le explica, tiene una buena actitud, es excelente programando.\nNosotros lo recomendaríamos.",
        },
      ],
    },
    team: {
      titleWord1: "EL",
      titleWord2: "EQUIPO",
      subtitle:
        "Cuatro especialistas que trabajan como uno. Sin intermediarios, sin juniors ocultos: trabajás directo con quien hace el trabajo.",
      foundersLabel: "FUNDADORES",
      viewProfile: "Ver perfil en Workana",
      members: [
        { name: "Benjamin Costa Mihanovich", role: "Diseño UX/UI & Producto" },
        { name: "Tobias Bonomo", role: "Desarrollo Full-Stack & Arquitectura" },
        { name: "Matias Bellinzona", role: "Estrategia Digital & Growth" },
        { name: "Santiago Jimenez", role: "Seguridad & QA" },
      ],
    },
    contact: {
      titleLine1: "¿Tenés un",
      titleLine2: "proyecto en mente?",
      subtitle:
        "Contanos de qué se trata. En menos de 24 horas te respondemos con ideas concretas, no con un formulario automático.",
      bullets: [
        "Respuesta real en menos de 24 horas",
        "Primera consulta sin costo",
        "Propuesta a medida en 48 horas",
      ],
      successBadge: "Mensaje recibido",
      successTitle: "Recibimos tu mensaje",
      successText:
        "En menos de 24 horas te respondemos con una devolución real y próximos pasos concretos.",
      successFooter: "Te respondemos en menos de 24 hs",
      formLabelName: "Identidad",
      formLabelEmail: "Contacto",
      formLabelMessage: "Manifesto",
      placeholderName: "NOMBRE Y APELLIDO",
      placeholderEmail: "EMAIL@EMPRESA.COM",
      placeholderMessage: "DESCRIPCIÓN DEL PROYECTO",
      errorMessage: "Error al enviar. Intentá de nuevo o escribinos directo al mail.",
      sending: "ENVIANDO...",
      submit: "ENVIAR BRIEF",
    },
    footer: {
      tagline: "Agendify Design - Diseño y desarrollo que genera resultados.",
      groups: [
        {
          label: "Servicios",
          links: [
            { title: "Diseño UX/UI & Branding", href: "#servicios" },
            { title: "Desarrollo Web", href: "#servicios" },
            { title: "Apps Mobile", href: "#servicios" },
            { title: "Metodología", href: "#servicios" },
          ],
        },
        {
          label: "Proyectos",
          links: [
            { title: "Decoratre", href: "#proyectos" },
            { title: "BetCrowd", href: "#proyectos" },
            { title: "Azul Profundo", href: "#proyectos" },
            { title: "Axelscale", href: "#proyectos" },
          ],
        },
        {
          label: "Equipo",
          links: [
            { title: "Benjamin Costa Mihanovich", href: "#equipo" },
            { title: "Tobias Bonomo", href: "#equipo" },
            { title: "Matias Bellinzona", href: "#equipo" },
            { title: "Unirse al equipo", href: "#contacto" },
          ],
        },
        {
          label: "Contacto",
          links: [
            { title: "agendify.business@gmail.com", href: "mailto:agendify.business@gmail.com" },
            { title: "Buenos Aires", href: "#" },
            { title: "Madrid", href: "#" },
            { title: "Iniciar proyecto", href: "#contacto" },
          ],
        },
      ],
      copyright: "© 2026 Agendify Design — Diseño y desarrollo que genera resultados.",
    },
  },

  en: {
    metadata: {
      title: "Agendify Design - Design and development that delivers results",
      description:
        "We design and develop websites, apps and platforms that generate measurable results. No fluff, no excuses.",
      ogTitle: "Agendify Design - Design and development that delivers results",
      ogDescription:
        "We design and develop websites, apps and platforms that generate measurable results. No fluff, no excuses.",
    },
    nav: {
      items: [
        { name: "Services", url: "#servicios" },
        { name: "Projects", url: "#proyectos" },
        { name: "Clients", url: "#testimonios" },
        { name: "Team", url: "#equipo" },
        { name: "Contact", url: "#contacto" },
      ],
      cta: "Tell us about your project",
    },
    hero: {
      titleBefore: "Your business deserves a",
      titleHighlight: "digital product",
      titleAfter: "that sells",
      primaryCta: "Tell us about your project",
      secondaryCta: "See projects",
    },
    services: {
      label: "Services",
      titleWord1: "WHAT WE",
      titleWord2: "DO",
      subtitle:
        "We dig into your business, understand the problem, and build the digital solution that solves it.",
      items: [
        {
          title: "UX/UI Design & Branding",
          description:
            "Interfaces that convert. We don't design 'pretty for pretty's sake': every visual decision has a goal — to make the user take action.",
        },
        {
          title: "Web Development",
          description:
            "Fast, scalable websites and platforms optimized for SEO. From a converting landing page to a complex platform: we build it with clean code that lasts.",
        },
        {
          title: "Mobile Apps",
          description:
            "iOS and Android with real performance. User-centered design, agile development, and an experience that keeps people coming back.",
        },
      ],
      methodology: {
        label: "Methodology",
        title: "How We Work",
        subtitle: "A clear process from start to finish. You always know what we're doing and why.",
        items: [
          {
            title: "Discovery",
            description:
              "We analyze your business, competition, and goals to understand exactly what you need.",
          },
          {
            title: "Strategy",
            description:
              "We define the information architecture, technologies, and project roadmap.",
          },
          {
            title: "Design & Prototype",
            description:
              "We create wireframes and high-fidelity prototypes to validate before coding.",
          },
          {
            title: "Development",
            description:
              "We code with clean, optimized, and scalable code using the best technologies.",
          },
          {
            title: "Launch",
            description:
              "Production deploy with exhaustive testing, technical SEO, and performance audit.",
          },
          {
            title: "Continuous Support",
            description:
              "Maintenance, updates, and optimizations so your product keeps growing.",
          },
        ],
      },
    },
    projects: {
      label: "Projects",
      title: "SOME OF OUR PROJECTS",
      subtitle: "Some of the products we've built. Real results, not promises.",
      modal: {
        objective: "Objective",
        solution: "Solution",
        stack: "Tech Stack",
        viewSite: "View live site",
        talkProject: "Let's talk about your project",
        quickView: "Quick view",
        caseStudy: "View Case Study",
        close: "Close",
        prev: "Previous",
        next: "Next",
        image: "Image",
      },
      workana: {
        label: "Verified History",
        title1: "This is just a part.",
        title2: "The rest is on Workana.",
        description:
          "Over 3 years of completed projects, real reviews, and reputation built delivery by delivery. No filters.",
        profiles: [
          { role: "UX/UI & Branding" },
          { role: "Full-Stack" },
          { role: "Marketing & Strategy" },
        ],
      },
      items: [
        {
          name: "Decoratre - Premium Handcrafted Furniture E-commerce",
          category: "E-commerce & Branding · Shopify",
          description:
            "Live store with a complete catalog, optimized buying experience for the premium customer, and a digital identity consistent with the brand's physical positioning.",
          objective:
            "Decoratre is a premium handcrafted furniture brand with a showroom in Santiago and a market in Mexico. They had the product, the identity, and the clients, but their online presence wasn't up to the standard of what they were selling.",
          solution:
            "We designed and developed a fully custom Shopify store with a clear collection architecture, editorial sections to tell the brand story, dual navigation for desktop and mobile, segmented newsletter, showroom page, and a buying guide that reduces hesitations before contact.",
        },
        {
          name: "BetCrowd - Sports Predictions Mobile App",
          category: "Mobile App · React Native",
          description:
            "App published on Google Play Store with a private tournament system, predictions, real-time rankings, and a debt balance system between participants.",
          objective:
            "Betting between friends has always existed in WhatsApp groups, Excel spreadsheets, or by word of mouth. The problem is there's no record, no fair odds, and at the end of the tournament nobody remembers who owes what to whom.",
          solution:
            "We designed and developed BetCrowd from scratch in React Native with Expo for Android and iOS. It allows creating private tournaments, inviting friends with a direct link, making predictions on any sporting or amateur event, and calculating peer-to-peer odds between participants. The key differentiator is a fictitious balance with a debt register inspired by Splitwise, so the app shows exactly who owes what to whom without moving real money within the platform.",
        },
        {
          name: "Azul Profundo - Diving School Website & E-commerce",
          category: "Web & E-commerce · React",
          description:
            "Live site with a complete course catalog, functional e-commerce, and active local SEO positioning.",
          objective:
            "Azul Profundo is a certified diving school with courses for all levels. They had a consolidated operation with recurring students, but without a digital presence to match: no own site, no way to display courses in an organized manner, and no channel to sell online.",
          solution:
            "We designed and developed a complete website with integrated e-commerce in React + Vite. The architecture centers around courses: each one has its own page with a full description, prerequisites, modality, and price. The e-commerce allows direct purchase from the site, eliminating the friction of the manual enrollment process. We also implemented a centralized coursesData object, WhatsApp button, social media integration, and local technical SEO to rank diving searches in Buenos Aires.",
        },
        {
          name: "Axelscale - Courses & Community Platform",
          category: "Web App · Educational Platform",
          description:
            "Live platform with active students, autonomous content management via Notion, and a user experience that converts an informal community into a professional digital product.",
          objective:
            "Axelscale is an online reselling educational community with an audience, active students, and a structured 50-day program. The challenge was to leave behind scattered tools and build their own place to centralize courses, access, and student experience.",
          solution:
            "We designed and developed a complete platform in Next.js with Firebase, role-based authentication, and password-protected access. Module and lesson content is managed from Notion without touching code, while the student dashboard organizes progress, access to the 3 program modules, 50-day plan, Discord integration, and ongoing support from the platform.",
        },
      ],
    },
    reviews: {
      sectionLabel: "Testimonials",
      title: "Real client reviews",
      subtitle:
        "Verified reviews on Workana. Each review corresponds to a completed project published on the platform, unedited.",
      completedProject: "Completed project",
      verified: "Verified",
      viewOnWorkana: "View on Workana",
      verifiedCount: "+20 verified reviews",
      items: [
        {
          projectTitle: "Professional Web Design for Gastronomic Consultancy on Carrd.co",
          time: "9 months ago",
          text: "Benjamín was a great help in building my consultancy website. I'm very grateful for his treatment and the work done. I would definitely recommend that anyone who needs it hire him, because they will be absolutely satisfied with Benjamín's work.",
        },
        {
          projectTitle: "Shopify Store Development for Dropshipping with Best Buy",
          time: "3 months ago",
          text: "I recommend him 1000%; he was always willing to help beyond what was agreed. He solved problems that were far from easy and did it very quickly. He had incredible patience with me, I'm delighted with his work, I recommend him and I will definitely work with him again.",
        },
        {
          projectTitle: "Responsive One-Page Web Design & Development for Atria One Insurance with Zoho CRM Integration",
          time: "2 weeks ago",
          text: "Excellent experience working with Tobías — quick, easy, and direct communication. Always available to help during the project. He proactively follows up on progress and provides post-production support. All great!",
        },
        {
          projectTitle: "Secure QR Activation + Editable Pet Profile (WordPress)",
          time: "2 months ago",
          text: "Excellent work. Tobías was very clear, organized, and professional throughout the project. He delivered what was agreed, was very willing to make adjustments, explained the plugin's functionality well, and maintained constant and transparent communication.\n\nThe final result turned out very well and in line with what was requested. I would definitely work with him again and highly recommend him.",
        },
        {
          projectTitle: "Backend Development for a Football Court Booking Web Platform",
          time: "A year ago",
          text: "Mateo did an excellent job — his responsibility and professionalism really show. He cleared all my doubts and helped me understand things I didn't, being very clear. He exceeded my expectations and I would work with him again.",
        },
        {
          projectTitle: "Custom Development",
          time: "A year ago",
          text: "He quickly understands the process or whatever is explained to him, has a great attitude, and is an excellent programmer.\nWe would recommend him.",
        },
      ],
    },
    team: {
      titleWord1: "THE",
      titleWord2: "TEAM",
      subtitle:
        "Four specialists who work as one. No intermediaries, no hidden juniors: you work directly with the people doing the work.",
      foundersLabel: "FOUNDERS",
      viewProfile: "View profile on Workana",
      members: [
        { name: "Benjamin Costa Mihanovich", role: "UX/UI Design & Product" },
        { name: "Tobias Bonomo", role: "Full-Stack Development & Architecture" },
        { name: "Matias Bellinzona", role: "Digital Strategy & Growth" },
        { name: "Santiago Jimenez", role: "Security & QA" },
      ],
    },
    contact: {
      titleLine1: "Do you have a",
      titleLine2: "project in mind?",
      subtitle:
        "Tell us about it. In less than 24 hours we'll respond with concrete ideas, not an automated form.",
      bullets: [
        "Real response in less than 24 hours",
        "First consultation at no cost",
        "Custom proposal in 48 hours",
      ],
      successBadge: "Message received",
      successTitle: "We received your message",
      successText:
        "In less than 24 hours we'll respond with real feedback and concrete next steps.",
      successFooter: "We'll respond within 24 hours",
      formLabelName: "Identity",
      formLabelEmail: "Contact",
      formLabelMessage: "Brief",
      placeholderName: "FULL NAME",
      placeholderEmail: "EMAIL@COMPANY.COM",
      placeholderMessage: "PROJECT DESCRIPTION",
      errorMessage: "Error sending. Please try again or email us directly.",
      sending: "SENDING...",
      submit: "SEND BRIEF",
    },
    footer: {
      tagline: "Agendify Design - Design and development that delivers results.",
      groups: [
        {
          label: "Services",
          links: [
            { title: "UX/UI Design & Branding", href: "#servicios" },
            { title: "Web Development", href: "#servicios" },
            { title: "Mobile Apps", href: "#servicios" },
            { title: "Methodology", href: "#servicios" },
          ],
        },
        {
          label: "Projects",
          links: [
            { title: "Decoratre", href: "#proyectos" },
            { title: "BetCrowd", href: "#proyectos" },
            { title: "Azul Profundo", href: "#proyectos" },
            { title: "Axelscale", href: "#proyectos" },
          ],
        },
        {
          label: "Team",
          links: [
            { title: "Benjamin Costa Mihanovich", href: "#equipo" },
            { title: "Tobias Bonomo", href: "#equipo" },
            { title: "Matias Bellinzona", href: "#equipo" },
            { title: "Join the team", href: "#contacto" },
          ],
        },
        {
          label: "Contact",
          links: [
            { title: "agendify.business@gmail.com", href: "mailto:agendify.business@gmail.com" },
            { title: "Buenos Aires", href: "#" },
            { title: "Madrid", href: "#" },
            { title: "Start a project", href: "#contacto" },
          ],
        },
      ],
      copyright: "© 2026 Agendify Design — Design and development that delivers results.",
    },
  },
};
