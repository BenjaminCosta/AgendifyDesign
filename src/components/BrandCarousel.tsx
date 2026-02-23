const brands = [
  { name: "WordPress", color: "#21759B" },
  { name: "Elementor", color: "#92003B" },
  { name: "WooCommerce", color: "#7F54B3" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "currentColor" },
  { name: "HTML5", color: "#E34F26" },
  { name: "Let's Encrypt", color: "#003A70" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Shopify", color: "#96BF48" },
  { name: "WordPress", color: "#21759B" },
  { name: "Elementor", color: "#92003B" },
  { name: "WooCommerce", color: "#7F54B3" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "currentColor" },
  { name: "HTML5", color: "#E34F26" },
  { name: "Let's Encrypt", color: "#003A70" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Shopify", color: "#96BF48" },
];

const BrandCarousel = () => (
  <section className="py-10 border-y border-border/50 overflow-hidden bg-secondary/50">
    <div className="animate-scroll-left flex items-center gap-14 whitespace-nowrap w-max">
      {brands.map((brand, i) => (
        <span
          key={i}
          className="text-sm md:text-base font-bold tracking-[0.12em] uppercase select-none transition-colors duration-300"
          style={{ color: brand.color === "currentColor" ? undefined : brand.color, opacity: 0.55 }}
        >
          {brand.name}
        </span>
      ))}
    </div>
  </section>
);

export default BrandCarousel;

