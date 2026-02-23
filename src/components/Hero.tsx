import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
    {/* Decorative elements */}
    <motion.div
      className="absolute top-20 right-10 w-72 h-72 rounded-full border border-border/40 opacity-30"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-primary/20"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/40"
      animate={{ y: [-20, 20, -20], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-foreground/20"
      animate={{ y: [10, -15, 10], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />

    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-wide uppercase text-primary">Estudio digital premium</span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-foreground text-balance">
          Soluciones digitales{" "}
          <span className="relative inline-block">
            premium
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>{" "}
          para marcas que quieren crecer.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
          Diseño y desarrollo web + mobile con enfoque en performance, UX y conversión.
        </p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button asChild size="lg" className="group">
            <a href="#contacto">
              Agendar llamada
              <motion.span
                className="inline-block ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#proyectos">Ver proyectos</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-14 flex gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { value: "50+", label: "Proyectos" },
            { value: "5.0", label: "Valoración" },
            { value: "3+", label: "Años exp." },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroMockup}
          alt="Dashboard profesional en laptop y móvil"
          className="relative w-full md:max-w-none lg:scale-110 xl:scale-125 mx-auto origin-center"
          style={{ filter: "none" }}
          loading="eager"
        />
      </motion.div>
    </div>

    {/* Bottom gradient line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default Hero;
