import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";

const members = [
  { name: "Valentina García", role: "Diseño & UX/UI", image: team1 },
  { name: "Diego Hernández", role: "Marketing & Redes", image: team2 },
  { name: "Andrés Morales", role: "Desarrollo Full-Stack", image: team3 },
];

const Team = () => (
  <section id="equipo" className="py-24 md:py-36 bg-secondary relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-border/30 -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-primary/10 translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto px-6 relative z-10">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Nosotros</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Equipo
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md">Profesionales apasionados por crear experiencias digitales excepcionales.</p>
      </ScrollReveal>

      <div className="mt-16 grid sm:grid-cols-3 gap-8 md:gap-12">
        {members.map((member, i) => (
          <ScrollReveal key={member.name} delay={i * 0.15}>
            <motion.div
              className="text-center group"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              <Button asChild variant="outline" size="sm" className="mt-4 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                <a href="#" target="_blank" rel="noopener noreferrer">Ver perfil en Workana</a>
              </Button>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
