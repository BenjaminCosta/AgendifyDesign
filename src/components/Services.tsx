import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import serviceUx from "@/assets/service-ux.png";
import serviceWeb from "@/assets/service-web.png";
import serviceMobile from "@/assets/service-mobile.png";

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
    </div>
  </section>
);

export default Services;
