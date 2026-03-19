import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { homeContent } from "@/content/home";

const footerLinkGroups = [
  {
    label: "Servicios",
    links: [
      { title: "Diseño UX/UI & Branding", href: "#servicios" },
      { title: "Desarrollo Web", href: "#servicios" },
      { title: "Apps Mobile", href: "#servicios" },
      { title: "Metodología", href: "#servicios" },
    ],
  },
  {
    label: "Proyectos",
    links: [
      { title: "Couture E-commerce", href: "#proyectos" },
      { title: "FitTrack Pro", href: "#proyectos" },
      { title: "Gloser Booking", href: "#proyectos" },
      { title: "SaaS Dashboard", href: "#proyectos" },
    ],
  },
  {
    label: "Equipo",
    links: [
      { title: "Benjamin Costa Mihanovich", href: "#equipo" },
      { title: "Tobias Bonomo", href: "#equipo" },
      { title: "Matias Bellinzona", href: "#equipo" },
      { title: "Unirse al equipo", href: "#contacto" },
    ],
  },
  {
    label: "Contacto",
    links: [
      { title: "agendify.business@gmail.com", href: "mailto:agendify.business@gmail.com" },
      { title: "Buenos Aires", href: "#" },
      { title: "Madrid", href: "#" },
      { title: "Iniciar proyecto", href: "#contacto" },
    ],
  },
];

const socialLinks = [
  { title: "Facebook", href: "#", icon: Facebook },
  { title: "Instagram", href: "#", icon: Instagram },
  { title: "Youtube", href: "#", icon: Youtube },
  { title: "LinkedIn", href: "#", icon: Linkedin },
];

function AnimatedContainer({
  delay = 0.1,
  children,
  className,
}: {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Footer = () => (
  /* Sticky reveal footer — outer sets height/clipPath, inner is fixed */
  <footer
    className="relative w-full"
    style={{
      height: "680px",
      clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
    }}
  >
    <div className="fixed bottom-0 h-[680px] w-full">
      <div
        className="sticky h-full overflow-y-auto"
        style={{ top: "calc(100vh - 680px)" }}
      >
        <div className="relative flex h-full flex-col justify-between gap-5 border-t border-outline-variant/10 px-4 py-8 md:px-12 bg-background">
          {/* Background gradient */}
          <FooterBackgroundGradient />

          {/* Main content */}
          <div className="mt-6 flex flex-col gap-8 md:flex-row xl:mt-0 relative z-10">
            {/* Brand */}
            <AnimatedContainer className="w-full max-w-xs space-y-4">
              <span className="text-2xl font-black font-headline tracking-tighter italic text-primary block">
                Agendify Design
              </span>
              <p className="text-foreground/40 text-xs font-label leading-relaxed">
                {homeContent.footer.tagline}
              </p>
              <div className="flex gap-2 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    aria-label={link.title}
                    className="w-8 h-8 border border-outline-variant/20 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/40 transition-all duration-300"
                  >
                    <link.icon size={14} />
                  </a>
                ))}
              </div>
            </AnimatedContainer>

            {/* Link groups */}
            {footerLinkGroups.map((group, index) => (
              <AnimatedContainer
                key={group.label}
                delay={0.1 + index * 0.08}
                className="w-full"
              >
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-label text-primary mb-4">
                    {group.label}
                  </h3>
                  <ul className="text-foreground/40 space-y-2 text-xs font-label">
                    {group.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="hover:text-foreground transition-colors duration-300 uppercase tracking-wide"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>

          {/* TextHoverEffect — large AGENDIFY at bottom */}
          <div className="h-[180px] -mb-8 relative z-10">
            <TextHoverEffect text="DESIGN" />
          </div>

          {/* Bottom bar */}
          <div className="relative z-10 flex flex-col items-center justify-between gap-2 border-t border-outline-variant/10 pt-3 text-[10px] font-label text-foreground/30 uppercase tracking-widest md:flex-row">
            <p>© 2026 Agendify Design — Diseño y desarrollo que genera resultados.</p>
            <p>Buenos Aires / Global</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
