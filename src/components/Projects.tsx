import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import { homeContent } from "@/content/home";

/* ── Types ────────────────────────────────────────────────── */
type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  objective: string;
  solution: string;
  stack: string[];
  images: string[];
};

/* ── Project data ─────────────────────────────────────────── */
const projects: Project[] = [
  {
    name: "Couture E-commerce",
    category: "E-commerce & Branding",
    year: "2026",
    description:
      "Plataforma de moda de lujo con sistema de pagos, gestión de stock en tiempo real y una experiencia de compra optimizada. Aumento del 68% en conversiones en el primer mes.",
    objective:
      "Crear una tienda online premium que reflejara la identidad de la marca y convirtiera visitantes en compradores con fricción mínima.",
    solution:
      "Diseñamos una experiencia editorial con navegación inmersiva, checkout optimizado en 2 pasos y sistema de inventario sincronizado en tiempo real con el almacén físico.",
    stack: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Stripe", "Sanity CMS", "Vercel"],
    images: [project1],
  },
  {
    name: "FitTrack Pro",
    category: "Mobile App",
    year: "2026",
    description:
      "App de fitness con tracking de entrenamientos, planes personalizados y comunidad integrada. Optimizamos la UX para reducir la curva de aprendizaje en un 40%.",
    objective:
      "Desarrollar una app móvil que mantuviera el engagement del usuario a largo plazo, diferenciándose de soluciones genéricas con personalización real.",
    solution:
      "Implementamos un sistema de planes adaptativos basados en progresión histórica, con notificaciones inteligentes y un feed social que refuerza hábitos sin saturar al usuario.",
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL", "Firebase", "TensorFlow Lite"],
    images: [project2],
  },
  {
    name: "Gloser Booking",
    category: "Web Platform",
    year: "2026",
    description:
      "Sistema de reservas online para salones con agenda inteligente, recordatorios automáticos y pagos integrados. Escaló a más de 120 clientes activos al mes.",
    objective:
      "Eliminar la fricción operativa de salones que gestionaban turnos por WhatsApp y llamadas, digitalizando todo el flujo sin curva de aprendizaje para el staff.",
    solution:
      "Plataforma SaaS multi-tenant con agenda visual drag-and-drop, sistema de recordatorios por WhatsApp y email, y cobros anticipados para reducir no-shows un 65%.",
    stack: ["React", "Node.js", "PostgreSQL", "Twilio", "MercadoPago", "Docker", "Railway"],
    images: [project3],
  },
  {
    name: "SaaS Dashboard",
    category: "Web App",
    year: "2026",
    description:
      "Panel de analítica empresarial con dashboards en tiempo real, exportaciones y arquitectura multi-tenant. Redujo el tiempo operativo del equipo en un 40%.",
    objective:
      "Centralizar métricas de negocio dispersas en múltiples herramientas en un único panel configurable, accesible para equipos no técnicos.",
    solution:
      "Arquitectura multi-tenant con roles y permisos granulares, widgets de datos configurables, sistema de alertas automáticas y exportación a PDF/Excel con un click.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "TimescaleDB", "Redis", "AWS"],
    images: [project4],
  },
];

/* ── Carousel ─────────────────────────────────────────────── */
const Carousel = ({ images, name }: { images: string[]; name: string }) => {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const multi = images.length > 1;

  const prev = useCallback(() => {
    setDir(-1);
    setIdx((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setDir(1);
    setIdx((i) => (i + 1) % images.length);
  }, [images.length]);

  return (
    <div className="relative h-full flex flex-col bg-black select-none">
      {/* Image */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={idx}
            src={images[idx]}
            alt={`${name} — ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            custom={dir}
            initial={{ x: dir * 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: dir * -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0, 0.2, 1] }}
          />
        </AnimatePresence>

        {/* Side arrows */}
        {multi && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 hover:border-white/30 text-white transition-all duration-200 backdrop-blur-sm"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/50 hover:bg-black/80 border border-white/10 hover:border-white/30 text-white transition-all duration-200 backdrop-blur-sm"
              aria-label="Siguiente"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {multi && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
              className="transition-all duration-300"
              aria-label={`Imagen ${i + 1}`}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? 20 : 6,
                  height: 6,
                  backgroundColor: i === idx ? "#4edea3" : "rgba(255,255,255,0.3)",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Project Modal ────────────────────────────────────────── */
const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  /* Lock scroll + Escape key */
  useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal panel */}
      <motion.div
        className="relative z-10 w-full md:w-[92vw] md:max-w-6xl md:max-h-[88vh] max-h-[95dvh] flex flex-col md:flex-row overflow-hidden"
        style={{ backgroundColor: "#0d0d0d", border: "1px solid rgba(255,255,255,0.08)" }}
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.32, 0, 0.2, 1] }}
      >
        {/* ── Left: Carousel ── */}
        <div className="w-full md:w-[55%] h-56 md:h-auto flex-shrink-0">
          <Carousel images={project.images} name={project.name} />
        </div>

        {/* ── Right: Details ── */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Close button */}
          <div className="sticky top-0 z-10 flex justify-end p-4 bg-gradient-to-b from-[#0d0d0d] to-transparent">
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-200"
              aria-label="Cerrar"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-8 pb-10 -mt-2 flex flex-col gap-8">
            {/* Header */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary block mb-3">
                {project.category} · {project.year}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white leading-none">
                {project.name}
              </h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/6" />

            {/* Objetivo */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 block mb-2">
                Objetivo
              </span>
              <p className="text-white/70 text-sm leading-relaxed">{project.objective}</p>
            </div>

            {/* Solución */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 block mb-2">
                Solución
              </span>
              <p className="text-white/70 text-sm leading-relaxed">{project.solution}</p>
            </div>

            {/* Stack */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 block mb-3">
                Stack tecnológico
              </span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-semibold px-3 py-1.5 border border-white/10 text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contacto"
                onClick={onClose}
                className="inline-flex items-center gap-4 group/cta"
              >
                <span className="font-label font-bold text-xs uppercase tracking-widest text-white">
                  Hablemos de tu proyecto
                </span>
                <span className="text-primary group-hover/cta:translate-x-2 transition-transform inline-block text-lg">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Main section ─────────────────────────────────────────── */
const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="py-32 bg-background" id="proyectos">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col items-center">
          <span className="font-label text-primary text-xs tracking-[0.6em] uppercase mb-4">
            {homeContent.projects.label.toUpperCase()}
          </span>
          <h2 className="text-6xl font-extrabold font-headline tracking-tighter text-center uppercase">
            ALGUNOS DE NUESTROS PROYECTOS
          </h2>
          <p className="text-foreground/60 mt-6 max-w-xl text-center font-light">
            {homeContent.projects.subtitle}
          </p>
        </div>

        {/* Alternating rows */}
        <div className="space-y-48">
          {projects.map((project, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <div key={project.name} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Image */}
                <div
                  className={`group cursor-pointer ${
                    imageLeft ? "md:col-span-7" : "md:col-span-7 order-1 md:order-2"
                  }`}
                  onClick={() => setActive(project)}
                >
                  <div className="relative overflow-hidden bg-surface-container">
                    <img
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-all duration-1000"
                      src={project.images[0]}
                      alt={project.name}
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-[11px] font-bold tracking-[0.2em] uppercase text-white border border-white/30 px-5 py-2.5 backdrop-blur-sm">
                        Vista rápida
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`${
                    imageLeft
                      ? "md:col-span-5 md:pl-12"
                      : "md:col-span-5 md:pr-12 order-2 md:order-1"
                  }`}
                >
                  <span className="font-label text-primary text-xs uppercase tracking-widest block mb-4">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="text-4xl font-bold font-headline mb-6 tracking-tight uppercase">
                    {project.name}
                  </h3>
                  <p className="text-foreground/60 font-light leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setActive(project)}
                    className="inline-flex items-center group/link"
                  >
                    <span className="font-label font-bold text-xs uppercase tracking-widest mr-4">
                      Ver Caso de Estudio
                    </span>
                    <span className="text-primary group-hover/link:translate-x-2 transition-transform inline-block">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
