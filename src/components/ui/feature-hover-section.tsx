import { cn } from "@/lib/utils";
import {
  IconSearch,
  IconLayout2,
  IconCode,
  IconChartBar,
  IconRocket,
  IconHeadset,
} from "@tabler/icons-react";

interface MethodologyItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const methodologyItems: MethodologyItem[] = [
  {
    title: "Descubrimiento",
    description: "Analizamos tu negocio, competencia y objetivos para entender exactamente qué necesitás.",
    icon: <IconSearch size={24} />,
  },
  {
    title: "Estrategia",
    description: "Definimos la arquitectura de información, tecnologías y roadmap del proyecto.",
    icon: <IconLayout2 size={24} />,
  },
  {
    title: "Diseño & Prototipo",
    description: "Creamos wireframes y prototipos de alta fidelidad para validar antes de programar.",
    icon: <IconCode size={24} />,
  },
  {
    title: "Desarrollo",
    description: "Programamos con código limpio, optimizado y escalable usando las mejores tecnologías.",
    icon: <IconChartBar size={24} />,
  },
  {
    title: "Lanzamiento",
    description: "Deploy en producción con testing exhaustivo, SEO técnico y auditoría de performance.",
    icon: <IconRocket size={24} />,
  },
  {
    title: "Soporte Continuo",
    description: "Mantenimiento, actualizaciones y optimizaciones para que tu producto siga creciendo.",
    icon: <IconHeadset size={24} />,
  },
];

const MethodologyFeature = ({
  title,
  description,
  icon,
  index,
}: MethodologyItem & { index: number }) => (
  <div
    className={cn(
      "flex flex-col lg:border-r py-10 relative group/feature border-outline-variant/15",
      (index === 0 || index === 3) && "lg:border-l border-outline-variant/15",
      index < 3 && "lg:border-b border-outline-variant/15"
    )}
  >
    {/* Hover gradient fill */}
    {index < 3 ? (
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-surface-container to-transparent pointer-events-none" />
    ) : (
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-surface-container to-transparent pointer-events-none" />
    )}

    {/* Icon */}
    <div className="mb-4 relative z-10 px-10 text-primary/60 group-hover/feature:text-primary transition-colors duration-300">
      {icon}
    </div>

    {/* Title */}
    <div className="text-lg font-bold mb-2 relative z-10 px-10">
      <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 bg-outline-variant/30 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
      <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground uppercase text-sm tracking-wide font-label">
        {title}
      </span>
    </div>

    {/* Description */}
    <p className="text-xs text-foreground/40 max-w-xs relative z-10 px-10 leading-relaxed">
      {description}
    </p>
  </div>
);

export function MethodologyHoverSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
      {methodologyItems.map((item, index) => (
        <MethodologyFeature key={item.title} {...item} index={index} />
      ))}
    </div>
  );
}
