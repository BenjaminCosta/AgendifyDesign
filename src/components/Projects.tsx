import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import { homeContent } from "@/content/home";

const projects = [
  {
    name: "Couture E-commerce",
    type: "E-commerce & Branding • 2026",
    description:
      "Plataforma de moda de lujo con sistema de pagos, gestión de stock en tiempo real y una experiencia de compra optimizada. Aumento del 68% en conversiones en el primer mes.",
    image: project1,
  },
  {
    name: "FitTrack Pro",
    type: "Mobile App • 2026",
    description:
      "App de fitness con tracking de entrenamientos, planes personalizados y comunidad integrada. Optimizamos la UX para reducir la curva de aprendizaje en un 40%.",
    image: project2,
  },
  {
    name: "Gloser Booking",
    type: "Web Platform • 2026",
    description:
      "Sistema de reservas online para salones con agenda inteligente, recordatorios automáticos y pagos integrados. Escaló a más de 120 clientes activos al mes.",
    image: project3,
  },
  {
    name: "SaaS Dashboard",
    type: "Web App • 2026",
    description:
      "Panel de analítica empresarial con dashboards en tiempo real, exportaciones y arquitectura multi-tenant. Redujo el tiempo operativo del equipo en un 40%.",
    image: project4,
  },
];

const Projects = () => (
  <section className="py-32 bg-background" id="proyectos">
    <div className="container mx-auto px-6">
      <div className="mb-24 flex flex-col items-center">
        <span className="font-label text-primary text-xs tracking-[0.6em] uppercase mb-4">
          {homeContent.projects.label.toUpperCase()}
        </span>
        <h2 className="text-6xl font-extrabold font-headline tracking-tighter text-center uppercase">
          PROYECTOS
        </h2>
        <p className="text-foreground/60 mt-6 max-w-xl text-center font-light">
          {homeContent.projects.subtitle}
        </p>
      </div>

      {/* Alternating project rows */}
      <div className="space-y-48">
        {projects.map((project, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={project.name} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Image */}
              <div
                className={`group cursor-crosshair ${
                  imageLeft
                    ? "md:col-span-7"
                    : "md:col-span-7 order-1 md:order-2"
                }`}
              >
                <div className="overflow-hidden bg-surface-container">
                  <img
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-all duration-1000"
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                  />
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
                  {project.type}
                </span>
                <h3 className="text-4xl font-bold font-headline mb-6 tracking-tight uppercase">
                  {project.name}
                </h3>
                <p className="text-foreground/60 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                <a href="#contacto" className="inline-flex items-center group/link">
                  <span className="font-label font-bold text-xs uppercase tracking-widest mr-4">
                    Ver Caso de Estudio
                  </span>
                  <span className="text-primary group-hover/link:translate-x-2 transition-transform inline-block">
                    →
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
