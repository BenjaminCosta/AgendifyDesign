import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
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

export default Index;
