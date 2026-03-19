import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axelscale1 from "@/assets/axelscale/1.png";
import axelscale2 from "@/assets/axelscale/2.png";
import axelscale3 from "@/assets/axelscale/3.png";
import axelscale4 from "@/assets/axelscale/4.png";
import azulProfundo1 from "@/assets/azul-profundo/1.png";
import azulProfundo2 from "@/assets/azul-profundo/2.png";
import azulProfundo3 from "@/assets/azul-profundo/3.png";
import azulProfundo4 from "@/assets/azul-profundo/4.png";
import azulProfundo5 from "@/assets/azul-profundo/5.png";
import azulProfundo6 from "@/assets/azul-profundo/6.png";
import azulProfundo7 from "@/assets/azul-profundo/7.png";
import azulProfundo8 from "@/assets/azul-profundo/8.png";
import betcrowd0 from "@/assets/betcrowd/0.png";
import betcrowd1 from "@/assets/betcrowd/1.png";
import betcrowd2 from "@/assets/betcrowd/2.png";
import betcrowd3 from "@/assets/betcrowd/3.png";
import betcrowd4 from "@/assets/betcrowd/4.png";
import decoratre1 from "@/assets/decoratre/1.png";
import decoratre2 from "@/assets/decoratre/2.png";
import decoratre3 from "@/assets/decoratre/3.png";
import decoratre5 from "@/assets/decoratre/5.png";
import decoratre6 from "@/assets/decoratre/6.png";
import project2 from "@/assets/project-2.png";
import workanaPng from "@/assets/workana.png";
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
  coverImage: string;
  images: string[];
  mediaLayout?: "desktop" | "mobile";
  liveUrl?: string;
};

/* ── Project data ─────────────────────────────────────────── */
const projects: Project[] = [
  {
    name: "Decoratre - E-commerce Premium de Muebles Artesanales",
    category: "E-commerce & Branding · Shopify",
    year: "2026",
    description:
      "Tienda en produccion con catalogo completo, experiencia de compra optimizada para el cliente premium, y una identidad digital coherente con el posicionamiento fisico de la marca.",
    objective:
      "Decoratre es una marca de muebles artesanales premium con showroom en Santiago y mercado en Mexico. Tenian el producto, la identidad y los clientes, pero su presencia online no estaba a la altura de lo que vendian.",
    solution:
      "Disenamos y desarrollamos una tienda Shopify completamente a medida con arquitectura de colecciones clara, secciones editoriales para contar la historia de la marca, navegacion dual para desktop y mobile, newsletter segmentado, pagina de showroom y una guia de compra que reduce dudas antes del contacto.",
    stack: ["Shopify", "Liquid", "CSS personalizado", "Figma"],
    coverImage: decoratre1,
    images: [decoratre1, decoratre2, decoratre3, decoratre5, decoratre6],
    mediaLayout: "desktop",
    liveUrl: "https://decoratre-2.myshopify.com/",
  },
  {
    name: "BetCrowd - App Mobile de Predicciones Deportivas",
    category: "Mobile App · React Native",
    year: "2026",
    description:
      "App publicada en Google Play Store con sistema de torneos privados, predicciones, ranking en tiempo real y balance de deudas entre participantes.",
    objective:
      "Las apuestas entre amigos siempre existieron en grupos de WhatsApp, planillas de Excel o de palabra. El problema es que no hay registro, no hay cuotas justas, y al final del torneo nadie recuerda bien quien le debe cuanto a quien.",
    solution:
      "Disenamos y desarrollamos BetCrowd desde cero en React Native con Expo para Android e iOS. Permite crear torneos privados, invitar amigos con un link directo, hacer predicciones sobre cualquier evento deportivo o amateur, y calcular cuotas peer-to-peer entre participantes. El diferenciador central es un balance ficticio con registro de deudas inspirado en Splitwise, para que la app muestre exactamente quien le debe cuanto a quien sin mover dinero real dentro de la plataforma.",
    stack: ["React Native", "Expo", "Firebase", "EAS Build"],
    coverImage: betcrowd0,
    images: [betcrowd1, betcrowd2, betcrowd3, betcrowd4],
    mediaLayout: "mobile",
  },
  {
    name: "Azul Profundo - Sitio Web & E-commerce Escuela de Buceo",
    category: "Web & E-commerce · React",
    year: "2026",
    description:
      "Sitio en producción con catálogo completo de cursos, e-commerce funcional, y posicionamiento SEO local activo.",
    objective:
      "Azul Profundo es una escuela de buceo certificada con cursos para todos los niveles. Tenían una operación consolidada con alumnos recurrentes, pero sin presencia digital a la altura: sin sitio propio, sin forma de mostrar los cursos ordenadamente, y sin canal para vender online.",
    solution:
      "Diseñamos y desarrollamos un sitio web completo con e-commerce integrado en React + Vite. La arquitectura está centrada en los cursos: cada uno tiene su propia página con descripción completa, requisitos previos, modalidad y precio. El e-commerce permite comprar directamente desde el sitio, eliminando la fricción del proceso de inscripción manual. Además implementamos un objeto coursesData centralizado, botón de WhatsApp, integración de redes sociales y SEO técnico local para posicionar búsquedas de buceo en Buenos Aires.",
    stack: ["React", "Vite", "CSS", "SEO técnico", "Vercel"],
    coverImage: azulProfundo1,
    images: [
      azulProfundo1,
      azulProfundo2,
      azulProfundo3,
      azulProfundo4,
      azulProfundo5,
      azulProfundo6,
      azulProfundo7,
      azulProfundo8,
    ],
    mediaLayout: "desktop",
    liveUrl: "https://buceoazulprofundo.ar/",
  },
  {
    name: "Axelscale - Plataforma de Cursos & Comunidad",
    category: "Web App · Plataforma Educativa",
    year: "2026",
    description:
      "Plataforma en producción con alumnos activos, gestión de contenido autónoma vía Notion, y una experiencia de usuario que convierte una comunidad informal en un producto digital profesional.",
    objective:
      "Axelscale es una comunidad educativa de reventa online con audiencia, alumnos activos y un programa estructurado de 50 días. El desafío era dejar atrás herramientas dispersas y construir un lugar propio donde centralizar cursos, accesos y experiencia de alumno.",
    solution:
      "Diseñamos y desarrollamos una plataforma completa en Next.js con Firebase, autenticación con roles y acceso cerrado por contraseña. El contenido de módulos y lecciones se gestiona desde Notion sin tocar código, mientras que el dashboard del alumno organiza progreso, acceso a los 3 módulos del programa, plan de 50 días, integración con Discord y soporte continuo desde la plataforma.",
    stack: ["Next.js", "Firebase", "Notion API", "Autenticación con roles", "Vercel"],
    coverImage: axelscale1,
    images: [axelscale1, axelscale2, axelscale3, axelscale4],
    mediaLayout: "desktop",
  },
];

/* ── Carousel ─────────────────────────────────────────────── */
const Carousel = ({
  images,
  name,
  mediaLayout = "desktop",
}: {
  images: string[];
  name: string;
  mediaLayout?: Project["mediaLayout"];
}) => {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const multi = images.length > 1;
  const isMobileGallery = mediaLayout === "mobile";
  const isDesktopGallery = mediaLayout === "desktop" && multi;

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
      <div className={`relative flex-1 overflow-hidden ${
        isMobileGallery || isDesktopGallery
          ? "bg-[radial-gradient(circle_at_top,#2a2a2a_0%,#101010_58%,#050505_100%)]"
          : ""
      }`}>
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          {isMobileGallery ? (
            <motion.div
              key={idx}
              className="absolute inset-0 flex items-center justify-center px-8 py-10 md:px-12"
              custom={dir}
              initial={{ x: dir * 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: dir * -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0, 0.2, 1] }}
            >
              <div className="relative w-full max-w-[240px] md:max-w-[320px]">
                <div className="absolute inset-0 translate-y-8 bg-primary/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-2 shadow-[0_22px_80px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden rounded-[1.55rem] bg-black">
                    <img
                      src={images[idx]}
                      alt={`${name} — ${idx + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : isDesktopGallery ? (
            <motion.div
              key={idx}
              className="absolute inset-0 flex items-center justify-center px-8 py-8 md:px-10 md:py-10"
              custom={dir}
              initial={{ x: dir * 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: dir * -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0, 0.2, 1] }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={images[idx]}
                  alt={`${name} — ${idx + 1}`}
                  className="w-full h-full object-contain scale-[0.94] md:scale-[0.92]"
                />
              </div>
            </motion.div>
          ) : (
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
          )}
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
  const isWideMediaCase = project.mediaLayout === "desktop" && project.images.length > 1;
  const isMobileShowcase = project.mediaLayout === "mobile";

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
        className={`relative z-10 w-full md:w-[96vw] md:max-h-[90vh] max-h-[95dvh] flex flex-col md:flex-row overflow-hidden ${
          isWideMediaCase ? "md:max-w-[1520px]" : isMobileShowcase ? "md:max-w-[1120px]" : "md:max-w-[1200px]"
        }`}
        style={{ backgroundColor: "#0d0d0d", border: "1px solid rgba(255,255,255,0.08)" }}
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.32, 0, 0.2, 1] }}
      >
        {/* ── Left: Carousel ── */}
        <div className={`w-full h-56 md:h-auto flex-shrink-0 ${
          isWideMediaCase ? "md:w-[68%]" : isMobileShowcase ? "md:w-[50%]" : "md:w-[55%]"
        }`}>
          <Carousel images={project.images} name={project.name} mediaLayout={project.mediaLayout} />
        </div>

        {/* ── Right: Details ── */}
        <div className={`flex-1 flex flex-col overflow-y-auto ${
          isWideMediaCase ? "md:min-w-[24rem]" : isMobileShowcase ? "md:min-w-[28rem]" : ""
        }`}>
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
            <div className="pt-2 flex flex-wrap items-center gap-6">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 group/live"
                >
                  <span className="font-label font-bold text-xs uppercase tracking-widest text-white">
                    Ver sitio online
                  </span>
                  <span className="text-primary group-hover/live:translate-x-2 transition-transform inline-block text-lg">
                    →
                  </span>
                </a>
              ) : (
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
              )}
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
                  <div className={`relative overflow-hidden ${project.liveUrl ? "" : "bg-surface-container"}`}>
                    {project.mediaLayout === "mobile" ? (
                      <img
                        className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-all duration-1000"
                        src={project.coverImage}
                        alt={project.name}
                        loading="lazy"
                      />
                    ) : project.mediaLayout === "desktop" && project.images.length > 1 ? (
                      <div className="flex min-h-[22rem] md:min-h-[28rem] items-center justify-center bg-[radial-gradient(circle_at_top,#2a2a2a_0%,#101010_58%,#050505_100%)]">
                        <img
                          className="w-full h-full object-contain scale-[1.08] md:scale-[1.04] group-hover:scale-[1.1] md:group-hover:scale-[1.06] transition-all duration-1000"
                          src={project.coverImage}
                          alt={project.name}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <img
                        className="w-full aspect-video object-cover group-hover:scale-105 transition-all duration-1000"
                        src={project.coverImage}
                        alt={project.name}
                        loading="lazy"
                      />
                    )}
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
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center group/live"
                    >
                      <span className="font-label font-bold text-xs uppercase tracking-widest mr-4">
                        Ver sitio online
                      </span>
                      <span className="text-primary group-hover/live:translate-x-2 transition-transform inline-block">
                        →
                      </span>
                    </a>
                  ) : (
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
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Workana CTA ── */}
        <div className="mt-32 border-t border-border pt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-lg">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary block mb-3">
              Historial verificado
            </span>
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase leading-tight text-foreground">
              Esto es solo una parte.<br />
              <span className="text-foreground/40">El resto está en Workana.</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Más de 3 años de proyectos completados, reseñas reales y reputación construida entrega a entrega. Sin filtros.
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-shrink-0">
            {[
              { name: "Benjamín Costa", role: "UX/UI & Branding", url: "https://www.workana.com/freelancer/6525bdbaa3b696218eb9e38608f3ea03" },
              { name: "Tobías Bonomo",  role: "Full-Stack", url: "https://www.workana.com/freelancer/e45ac26bd141723720414cf2513d2a8f" },
              { name: "Matías Bellinzona", role: "Marketing & Estrategia", url: "https://www.workana.com/freelancer/367d2b3ca0b4e2c21565ffd02193091f" },
            ].map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-8 px-5 py-3.5 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <img src={workanaPng} alt="Workana" className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <span className="text-sm font-bold text-foreground leading-none block">{p.name}</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5 block">{p.role}</span>
                  </div>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-base">→</span>
              </a>
            ))}
          </div>
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
