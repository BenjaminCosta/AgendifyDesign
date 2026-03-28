import { cn } from "@/lib/utils";

/* ── Inline SVG icons — reemplaza @tabler/icons-react ──── */
const IconSearch  = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
const IconLayout2 = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
const IconCode    = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconChartBar = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>;
const IconRocket  = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
const IconHeadset = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/></svg>;

/* ── Icons by position (order matches methodology steps) ─── */
const STEP_ICONS = [IconSearch, IconLayout2, IconCode, IconChartBar, IconRocket, IconHeadset];

export interface MethodologyItem {
  title: string;
  description: string;
}

const MethodologyFeature = ({
  title,
  description,
  icon,
  index,
}: MethodologyItem & { icon: React.ReactNode; index: number }) => (
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

interface MethodologyHoverSectionProps {
  items: MethodologyItem[];
}

export function MethodologyHoverSection({ items }: MethodologyHoverSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
      {items.map((item, index) => {
        const Icon = STEP_ICONS[index] ?? IconSearch;
        return (
          <MethodologyFeature key={item.title} {...item} icon={<Icon />} index={index} />
        );
      })}
    </div>
  );
}
