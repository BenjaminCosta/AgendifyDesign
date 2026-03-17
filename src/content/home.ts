export const homeContent = {
  metadata: {
    title: "Agendify Design - Diseño y desarrollo que genera resultados",
    description:
      "Diseñamos y desarrollamos sitios web, apps y plataformas que generan resultados medibles. Sin vueltas, sin excusas.",
    ogTitle: "Agendify Design - Diseño y desarrollo que genera resultados",
    ogDescription:
      "Diseñamos y desarrollamos sitios web, apps y plataformas que generan resultados medibles. Sin vueltas, sin excusas.",
  },
  header: {
    navItems: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Equipo", href: "#equipo" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: {
      label: "Contanos tu proyecto",
      href: "#contacto",
    },
  },
  hero: {
    eyebrow: "Diseño y desarrollo digital",
    title: "Tu negocio merece un producto digital que venda, no solo que se vea bien.",
    subtitle:
      "Diseñamos y desarrollamos sitios web, apps y plataformas que generan resultados medibles. Sin vueltas, sin excusas.",
    primaryCta: {
      label: "Contanos tu proyecto",
      href: "#contacto",
    },
    secondaryCta: {
      label: "Ver proyectos",
      href: "#proyectos",
    },
    highlights: [
      { value: "UX/UI", label: "pensado para convertir" },
      { value: "Web", label: "rápida y escalable" },
      { value: "Apps", label: "listas para retener" },
    ],
  },
  services: {
    label: "Servicios",
    title: "Qué hacemos",
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
  },
  methodology: {
    label: "Metodología",
    title: "Cómo trabajamos",
    subtitle:
      "Un proceso claro de principio a fin. Sabés en todo momento qué estamos haciendo y por qué.",
  },
  projects: {
    label: "Proyectos",
    title: "Proyectos",
    subtitle: "Algunos de los productos que construimos. Resultados reales, no promesas.",
  },
  reviews: {
    label: "Testimonios",
    title: "Lo que dicen nuestros clientes",
    subtitle: "No te lo decimos nosotros: te lo dicen ellos.",
    badge: "Opiniones de clientes",
  },
  team: {
    label: "Equipo",
    title: "El equipo",
    subtitle:
      "Tres especialistas que trabajan como uno. Sin intermediarios, sin juniors ocultos: trabajás directo con quien hace el trabajo.",
  },
  contact: {
    label: "Contacto",
    title: "¿Tenés un proyecto en mente?",
    subtitle:
      "Contanos de qué se trata. En menos de 24 horas te respondemos con ideas concretas, no con un formulario automático.",
    bullets: [
      "Respuesta real en menos de 24 horas",
      "Primera consulta sin costo",
      "Propuesta a medida en 48 horas",
    ],
    directLabel: "Contacto directo",
    formTitle: "Contanos tu proyecto",
    formSubtitle: "Dejanos algunos detalles y te respondemos con ideas concretas.",
    successTitle: "Recibimos tu mensaje",
    successText:
      "En menos de 24 horas te respondemos con una devolución real y próximos pasos concretos.",
    submitLabel: "Enviar consulta →",
    privacyLabel: "política de privacidad",
  },
  footer: {
    tagline: "Agendify Design - Diseño y desarrollo que genera resultados.",
  },
} as const;
