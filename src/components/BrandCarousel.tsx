const brands = [
  "HTML5", "CSS3", "WordPress", "React", "Next.js", "Shopify", "Firebase", "TypeScript", "Tailwind", "Figma",
  "HTML5", "CSS3", "WordPress", "React", "Next.js", "Shopify", "Firebase", "TypeScript", "Tailwind", "Figma",
];

const BrandCarousel = () => (
  <section className="py-10 border-y border-border/50 overflow-hidden bg-secondary/50">
    <div className="animate-scroll-left flex items-center gap-16 whitespace-nowrap w-max">
      {brands.map((brand, i) => (
        <span
          key={i}
          className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-muted-foreground/40 select-none hover:text-foreground/60 transition-colors duration-300"
        >
          {brand}
        </span>
      ))}
    </div>
  </section>
);

export default BrandCarousel;
