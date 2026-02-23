import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

const projects = [
  { name: "Couture E-commerce", type: "E-commerce", image: project1 },
  { name: "FitTrack Pro", type: "Mobile", image: project2 },
  { name: "Gloser Booking", type: "Web", image: project3 },
  { name: "SaaS Dashboard", type: "Web App", image: project4 },
];

const Projects = () => (
  <section id="proyectos" className="py-24 md:py-36 bg-secondary relative overflow-hidden">
    {/* Decorative grid dots */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "32px 32px"
    }} />

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
          <p className="text-muted-foreground max-w-sm">Soluciones digitales que generan resultados reales para nuestros clientes.</p>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 0.1}>
            <motion.div
              className="group cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-xl bg-background shadow-sm transition-shadow duration-500 group-hover:shadow-xl relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                    Ver proyecto →
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground px-3 py-1 rounded-full border border-border">
                  {project.type}
                </span>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
