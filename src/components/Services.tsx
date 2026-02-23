import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import serviceUx from "@/assets/service-ux.png";
import serviceWeb from "@/assets/service-web.png";
import serviceMobile from "@/assets/service-mobile.png";
import { Search, Lightbulb, Palette, Code2, Rocket, HeartHandshake } from "lucide-react";

const services = [
  {
    title: "Diseño UX/UI & Branding Digital",
    description: "Creamos interfaces intuitivas y sistemas de diseño que convierten visitantes en clientes. Branding digital que posiciona tu marca.",
    image: serviceUx,
    number: "01",
  },
  {
    title: "Desarrollo Web Profesional",
    description: "Sitios web rápidos, seguros y optimizados para SEO. Desde landing pages hasta plataformas complejas con React, Next.js y más.",
    image: serviceWeb,
    number: "02",
  },
  {
    title: "Apps Mobile iOS & Android",
    description: "Aplicaciones nativas y cross-platform con rendimiento excepcional. Diseño centrado en el usuario y desarrollo ágil.",
    image: serviceMobile,
    number: "03",
  },
];

const process = [
  {
    icon: Search,
    step: "01",
    title: "Descubrimiento",
    description: "Analizamos tu negocio, competencia y objetivos para entender exactamente qué necesitás.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Estrategia",
    description: "Definimos la arquitectura de información, tecnologías y roadmap del proyecto.",
  },
  {
    icon: Palette,
    step: "03",
    title: "Diseño & Prototipo",
    description: "Creamos wireframes y prototipos de alta fidelidad para validar antes de programar.",
  },
  {
    icon: Code2,
    step: "04",
    title: "Desarrollo",
    description: "Programamos con código limpio, optimizado y escalable usando las mejores tecnologías.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Lanzamiento",
    description: "Deploy en producción con testing exhaustivo, SEO técnico y auditoría de performance.",
  },
  {
    icon: HeartHandshake,
    step: "06",
    title: "Soporte Continuo",
    description: "Mantenimiento, actualizaciones y optimizaciones para que tu producto siga creciendo.",
  },
];

const Services = () => (
  <section id="servicios" className="py-24 md:py-36 relative">
    {/* Decorative line */}
    <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-transparent to-border" />

    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Servicios</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Qué hacemos
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl">
          Soluciones digitales end-to-end: desde la idea hasta el lanzamiento y más allá.
        </p>
      </ScrollReveal>

      <div className="mt-20 grid md:grid-cols-3 gap-8 md:gap-10">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.15}>
            <motion.div
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-xl bg-secondary mb-6 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                <span className="absolute top-4 left-4 text-xs font-bold tracking-wider text-muted-foreground/60">
                  {service.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-4 w-0 h-0.5 bg-primary group-hover:w-12 transition-all duration-500" />
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Process Section */}
      <ScrollReveal>
        <div className="mt-32 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Metodología</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Nuestro proceso
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Un flujo de trabajo probado que garantiza resultados de alta calidad y entregas a tiempo.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {process.map((step, i) => (
          <ScrollReveal key={step.step} delay={i * 0.1}>
            <motion.div
              className="group relative p-7 rounded-2xl border border-border bg-background hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Step number watermark */}
              <span className="absolute top-5 right-6 text-5xl font-black text-border/50 select-none leading-none group-hover:text-primary/10 transition-colors duration-500">
                {step.step}
              </span>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

