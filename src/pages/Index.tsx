import { useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import Services from "@/components/Services";
import { homeContent } from "@/content/home";

const Projects   = lazy(() => import("@/components/Projects"));
const Reviews    = lazy(() => import("@/components/Reviews"));
const Team       = lazy(() => import("@/components/Team"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer     = lazy(() => import("@/components/Footer"));

/* Envuelve cada sección lazy con un fade-in suave al montar */
const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const metaTagDefinitions = [
  { attr: "name", key: "description", value: homeContent.metadata.description },
  { attr: "property", key: "og:title", value: homeContent.metadata.ogTitle },
  { attr: "property", key: "og:description", value: homeContent.metadata.ogDescription },
];

const Index = () => {
  useEffect(() => {
    document.title = homeContent.metadata.title;

    metaTagDefinitions.forEach(({ attr, key, value }) => {
      const selector = `meta[${attr}="${key}"]`;
      const metaTag = document.querySelector<HTMLMetaElement>(selector);

      if (metaTag) {
        metaTag.content = value;
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BrandCarousel />
      <Services />
      <Suspense fallback={null}>
        <FadeIn><Projects /></FadeIn>
      </Suspense>
      <Suspense fallback={null}>
        <FadeIn><Reviews /></FadeIn>
      </Suspense>
      <Suspense fallback={null}>
        <FadeIn><Team /></FadeIn>
      </Suspense>
      <Suspense fallback={null}>
        <FadeIn><CTASection /></FadeIn>
      </Suspense>
      <Suspense fallback={null}>
        <FadeIn><Footer /></FadeIn>
      </Suspense>
    </div>
  );
};

export default Index;
