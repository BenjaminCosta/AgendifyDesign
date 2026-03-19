import uxImage from "@/assets/ux.jpg";
import webDesignImage from "@/assets/web-design.jpg";
import serviceMobile from "@/assets/service-mobile.png";
import { homeContent } from "@/content/home";
import { MethodologyHoverSection } from "@/components/ui/feature-hover-section";

const services = [
  {
    title: homeContent.services.items[0].title,
    description: homeContent.services.items[0].description,
    image: uxImage,
    number: "01",
  },
  {
    title: homeContent.services.items[1].title,
    description: homeContent.services.items[1].description,
    image: webDesignImage,
    number: "02",
  },
  {
    title: homeContent.services.items[2].title,
    description: homeContent.services.items[2].description,
    image: serviceMobile,
    number: "03",
  },
];


const Services = () => (
  <>
    {/* ── Services ── */}
    <section className="py-32 bg-background relative" id="servicios">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-5xl font-extrabold font-headline tracking-tighter mb-4 uppercase">
              QUÉ <span className="text-primary">HACEMOS</span>
            </h2>
            <p className="text-foreground/60 max-w-xl font-light">{homeContent.services.subtitle}</p>
          </div>
          <span className="font-label text-xs tracking-widest opacity-40">01 — 03</span>
        </div>

        {/* Service cards — staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Card 01 */}
          <div
            className="group relative overflow-hidden border-r border-outline-variant/10"
            style={{ height: "600px" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-40"
              src={services[0].image}
              alt={services[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative h-full p-12 flex flex-col justify-end">
              <span className="text-7xl font-black text-outline mb-4">{services[0].number}</span>
              <h3 className="text-2xl font-bold font-headline mb-4 uppercase">{services[0].title}</h3>
              <p className="text-foreground/60 text-sm font-light mb-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {services[0].description}
              </p>
              <div className="w-12 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* Card 02 — elevated */}
          <div
            className="group relative overflow-hidden -mt-12 md:-mt-20 z-10 bg-surface-container shadow-2xl"
            style={{ height: "700px" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-40"
              src={services[1].image}
              alt={services[1].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="relative h-full p-12 flex flex-col justify-end">
              <span className="text-7xl font-black text-outline mb-4">{services[1].number}</span>
              <h3 className="text-2xl font-bold font-headline mb-4 uppercase">{services[1].title}</h3>
              <p className="text-foreground/60 text-sm font-light mb-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {services[1].description}
              </p>
              <div className="w-12 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
            </div>
          </div>

          {/* Card 03 */}
          <div
            className="group relative overflow-hidden border-l border-outline-variant/10"
            style={{ height: "600px" }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-40"
              src={services[2].image}
              alt={services[2].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative h-full p-12 flex flex-col justify-end">
              <span className="text-7xl font-black text-outline mb-4">{services[2].number}</span>
              <h3 className="text-2xl font-bold font-headline mb-4 uppercase">{services[2].title}</h3>
              <p className="text-foreground/60 text-sm font-light mb-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {services[2].description}
              </p>
              <div className="w-12 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
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
            {homeContent.methodology.label.toUpperCase()}
          </span>
          <h2 className="text-5xl font-extrabold font-headline tracking-tighter mb-8 uppercase">
            {homeContent.methodology.title}
          </h2>
          <p className="text-foreground/60 text-lg font-light leading-relaxed">
            {homeContent.methodology.subtitle}
          </p>
        </div>
        <MethodologyHoverSection />
      </div>
    </section>
  </>
);

export default Services;
