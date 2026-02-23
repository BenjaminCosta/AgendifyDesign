import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

const featured = {
  name: "Couture E-commerce",
  type: "E-commerce & Branding",
  description: "Plataforma de moda de lujo con sistema de pagos, gestión de stock en tiempo real y experiencia de compra premium.",
  metric: "+68% conversión",
  image: project1,
  tags: ["React", "Stripe", "Figma", "Next.js"],
};

const projects = [
  {
    name: "FitTrack Pro",
    type: "Mobile App",
    description: "App de fitness con tracking de entrenamientos, planes personalizados y comunidad integrada.",
    metric: "4.9★ App Store",
    image: project2,
  },
  {
    name: "Gloser Booking",
    type: "Web Platform",
    description: "Sistema de reservas online para salones con agenda inteligente, recordatorios automáticos y pagos.",
    metric: "+120 clientes/mes",
    image: project3,
  },
  {
    name: "SaaS Dashboard",
    type: "Web App",
    description: "Panel de analítica empresarial con dashboards en tiempo real, exportaciones y multi-tenant.",
    metric: "-40% tiempo operativo",
    image: project4,
  },
];

const Projects = () => (
  <section id="proyectos" className="py-24 md:py-36 bg-secondary relative overflow-hidden">
    {/* Grid dot bg */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Portfolio</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Proyectos
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm">
            Cada proyecto es una historia de impacto medible y diseño con propósito.
          </p>
        </div>
      </ScrollReveal>

      {/* Featured project */}
      <ScrollReveal delay={0.1}>
        <motion.div
          className="mt-16 group cursor-pointer rounded-2xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-2xl hover:shadow-primary/8 transition-all duration-700"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
              {/* Featured badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold tracking-wide uppercase shadow-lg">
                  ★ Destacado
                </span>
              </div>
            </div>
            {/* Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
                {featured.type}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {featured.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{featured.description}</p>
              <div className="flex items-center gap-2 mb-6 px-4 py-3 rounded-xl bg-secondary border border-border w-fit">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{featured.metric}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/8 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
              >
                Ver caso de estudio
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </ScrollReveal>

      {/* Grid */}
      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 0.1}>
            <motion.div
              className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Hover CTA */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <div className="w-9 h-9 rounded-full bg-background flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="text-[11px] font-medium tracking-wide uppercase text-muted-foreground px-2.5 py-1 rounded-full border border-border flex-shrink-0">
                    {project.type}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <TrendingUp className="w-3 h-3" />
                  {project.metric}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
