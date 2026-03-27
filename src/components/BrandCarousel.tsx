const techLogos = [
  { name: "WordPress",    color: "#21759B", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wordpress.svg" },
  { name: "Elementor",   color: "#92003B", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elementor.svg" },
  { name: "WooCommerce", color: "#7F54B3", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/woocommerce.svg" },
  { name: "React",       color: "#61DAFB", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg" },
  { name: "Next.js",     color: "#e5e2e1", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg" },
  { name: "HTML5",       color: "#E34F26", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg" },
  { name: "Let's Encrypt", color: "#4edea3", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/letsencrypt.svg" },
  { name: "Figma",       color: "#F24E1E", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg" },
  { name: "Tailwind",    color: "#06B6D4", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" },
  { name: "TypeScript",  color: "#3178C6", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg" },
  { name: "Firebase",    color: "#FFCA28", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg" },
  { name: "Shopify",     color: "#96BF48", svg: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shopify.svg" },
];

// Duplicate for seamless infinite scroll
const brands = [...techLogos, ...techLogos];

const BrandCarousel = () => (
  <section className="py-10 border-y border-outline-variant/20 overflow-hidden bg-surface-container-lowest" style={{ contain: "content" }}>
    <div className="animate-scroll-left flex items-center gap-16 whitespace-nowrap w-max">
      {brands.map((brand, i) => (
        <div key={i} className="flex items-center gap-3 select-none" style={{ opacity: 0.5 }}>
          {/* Colored SVG icon via CSS mask */}
          <div
            style={{
              width: 22,
              height: 22,
              backgroundColor: brand.color,
              maskImage: `url('${brand.svg}')`,
              WebkitMaskImage: `url('${brand.svg}')`,
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              flexShrink: 0,
            }}
          />
          <span
            className="text-sm font-bold tracking-[0.12em] uppercase font-label"
            style={{ color: brand.color }}
          >
            {brand.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default BrandCarousel;
