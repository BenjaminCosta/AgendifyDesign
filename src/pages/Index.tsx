import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { homeContent } from "@/content/home";

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
      <Projects />
      <Reviews />
      <Team />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
