import { motion } from "framer-motion";
import { homeContent } from "@/content/home";
import RotatingBorderButton from "@/components/ui/button-1";
import { ElegantShape } from "@/components/ui/shape-landing-hero";
import heroBg from "@/assets/hero2.avif";

const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number];

const fp = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.4 + i * 0.15, ease },
});

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background" id="hero">

    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/82 to-background/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/60" />
    </div>

    {/* Subtle radial glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.03] blur-3xl pointer-events-none z-[1]" />

    {/* Floating geometric shapes */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      <ElegantShape delay={0.3} width={600} height={140} rotate={12}  gradient="from-primary/[0.12]" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
      <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-primary/[0.08]" className="right-[-5%] md:right-[0%] top-[60%] md:top-[65%]" />
      <ElegantShape delay={0.4} width={300} height={80}  rotate={-8}  gradient="from-primary/[0.10]" className="left-[5%] md:left-[10%] bottom-[8%] md:bottom-[12%]" />
      <ElegantShape delay={0.6} width={200} height={60}  rotate={20}  gradient="from-primary/[0.06]" className="right-[15%] md:right-[20%] top-[8%] md:top-[12%]" />
      <ElegantShape delay={0.7} width={150} height={40}  rotate={-25} gradient="from-primary/[0.08]" className="left-[20%] md:left-[25%] top-[5%] md:top-[8%]" />
    </div>

    {/* Bottom / top fades */}
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-[2]" />
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-[2]" />

    {/* Centered content */}
    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <motion.span {...fp(0)} className="font-label text-primary uppercase tracking-[0.4em] text-sm block mb-8">
          ESTABLECIDOS MMXXVI
        </motion.span>

        <motion.h1
          {...fp(1)}
          className="max-w-6xl text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[1.05] tracking-tighter font-headline mb-16 uppercase"
        >
          Tu negocio merece un{" "}
          <span className="text-outline">producto digital</span>{" "}
          que venda
        </motion.h1>

        

        <motion.div {...fp(3)} className="flex flex-wrap justify-center gap-6">
          <RotatingBorderButton href={homeContent.hero.primaryCta.href} height="56px">
            {homeContent.hero.primaryCta.label} →
          </RotatingBorderButton>
          <RotatingBorderButton
            href={homeContent.hero.secondaryCta.href}
            height="56px"
            style={
              {
                "--color-background": "#131313",
                "--color-text": "#e5e2e1",
                "--color-text-hover": "#e5e2e1",
                "--border-accent-1": "rgba(255, 255, 255, 0.95)",
                "--border-accent-2": "rgba(255, 255, 255, 0.45)",
                "--border-surface": "#131313",
              } as React.CSSProperties
            }
          >
            {homeContent.hero.secondaryCta.label}
          </RotatingBorderButton>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Hero;
