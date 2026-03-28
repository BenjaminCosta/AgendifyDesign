import uxImage from "@/assets/ux.jpg";
import webDesignImage from "@/assets/web-design.jpg";
import serviceMobile from "@/assets/service-mobile.png";
import { MethodologyHoverSection } from "@/components/ui/feature-hover-section";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

/* Static per-card assets — never change with language */
const servicesMeta = [
  { image: uxImage,          number: "01" },
  { image: webDesignImage,   number: "02" },
  { image: serviceMobile,    number: "03" },
];

const Services = () => {
  const { t } = useLanguage();
  const services = t.services.items.map((item, i) => ({ ...item, ...servicesMeta[i] }));

  return (
  <>
    {/* ── Services ── */}
    <section className="py-32 bg-background relative" id="servicios">
      <div className="container mx-auto px-6">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-5xl font-extrabold font-headline tracking-tighter mb-4 uppercase">
              {t.services.titleWord1} <span className="text-primary">{t.services.titleWord2}</span>
            </h2>
            <p className="text-foreground/60 max-w-xl font-light">{t.services.subtitle}</p>
          </div>
          <span className="font-label text-xs tracking-widest opacity-40">01 — 03</span>
        </ScrollReveal>

        {/* Service cards — staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Card 01 */}
          <div
            className="group relative overflow-hidden border-r border-outline-variant/10"
            style={{ height: "600px", contain: "layout paint" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-40 will-change-transform"
              src={services[0].image}
              alt={services[0].title}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative h-full p-12 flex flex-col justify-end">
              <span className="text-7xl font-black text-outline mb-4">{services[0].number}</span>
              <h3 className="text-2xl font-bold font-headline mb-4 uppercase">{services[0].title}</h3>
              <p className="text-foreground/60 text-sm font-light mb-8 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-[transform,opacity] duration-500">
                {services[0].description}
              </p>
              <div className="w-12 h-[2px] bg-primary group-hover:w-full transition-[width] duration-700" />
            </div>
          </div>

          {/* Card 02 — elevated */}
          <div
            className="group relative overflow-hidden -mt-12 md:-mt-20 z-10 bg-surface-container shadow-2xl"
            style={{ height: "700px", contain: "layout paint" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-40 will-change-transform"
              src={services[1].image}
              alt={services[1].title}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="relative h-full p-12 flex flex-col justify-end">
              <span className="text-7xl font-black text-outline mb-4">{services[1].number}</span>
              <h3 className="text-2xl font-bold font-headline mb-4 uppercase">{services[1].title}</h3>
              <p className="text-foreground/60 text-sm font-light mb-8 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-[transform,opacity] duration-500">
                {services[1].description}
              </p>
              <div className="w-12 h-[2px] bg-primary group-hover:w-full transition-[width] duration-700" />
            </div>
          </div>

          {/* Card 03 */}
          <div
            className="group relative overflow-hidden border-l border-outline-variant/10"
            style={{ height: "600px", contain: "layout paint" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-40 will-change-transform"
              src={services[2].image}
              alt={services[2].title}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative h-full p-12 flex flex-col justify-end">
              <span className="text-7xl font-black text-outline mb-4">{services[2].number}</span>
              <h3 className="text-2xl font-bold font-headline mb-4 uppercase">{services[2].title}</h3>
              <p className="text-foreground/60 text-sm font-light mb-8 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-[transform,opacity] duration-500">
                {services[2].description}
              </p>
              <div className="w-12 h-[2px] bg-primary group-hover:w-full transition-[width] duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Metodología ── */}
    <section className="py-24 bg-surface-container-lowest">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="font-label text-primary text-xs tracking-[0.6em] uppercase mb-4 block">
            {t.services.methodology.label.toUpperCase()}
          </span>
          <h2 className="text-5xl font-extrabold font-headline tracking-tighter mb-8 uppercase">
            {t.services.methodology.title}
          </h2>
          <p className="text-foreground/60 text-lg font-light leading-relaxed">
            {t.services.methodology.subtitle}
          </p>
        </div>
        <MethodologyHoverSection items={t.services.methodology.items} />
      </div>
    </section>
  </>
  );
};

export default Services;
