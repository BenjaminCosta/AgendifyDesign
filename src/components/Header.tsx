import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wrench, Briefcase, MessageSquare, Users, Mail } from "lucide-react";
import { TubelightNavBar, TubelightNavItem } from "@/components/ui/tubelight-navbar";
import { AnimatedButton } from "@/components/ui/animated-button";
import { homeContent } from "@/content/home";

const navItems: TubelightNavItem[] = [
  { name: "Servicios", url: "#servicios", icon: Wrench },
  { name: "Proyectos", url: "#proyectos", icon: Briefcase },
  { name: "Clientes",  url: "#testimonios", icon: MessageSquare },
  { name: "Equipo",    url: "#equipo", icon: Users },
  { name: "Contacto", url: "#contacto", icon: Mail },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const onScroll = () => {
      for (const item of [...navItems].reverse()) {
        const id = item.url.replace("#", "");
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveTab(item.name);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="relative px-6 py-3 bg-background/80 backdrop-blur-xl flex justify-between items-center shadow-[0px_0px_60px_0px_rgba(229,226,225,0.06)] border border-outline-variant/20">

        {/* Logo */}
        <a href="#" className="text-xl font-extrabold tracking-tighter text-primary italic font-headline uppercase flex-shrink-0">
          AGF Design
        </a>

        {/* Desktop — Tubelight nav */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <TubelightNavBar items={navItems} activeTab={activeTab} />
        </div>

        {/* Desktop CTA — AnimatedButton */}
        <div className="hidden md:block flex-shrink-0">
          <AnimatedButton href={homeContent.header.cta.href}>
            {homeContent.header.cta.label}
          </AnimatedButton>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-foreground transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-foreground transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-background/98 backdrop-blur-2xl border border-outline-variant/20 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.url}
                    href={item.url}
                    className="px-4 py-3 text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-primary hover:bg-surface-container transition-all duration-200 font-label flex items-center gap-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon size={14} />
                    {item.name}
                  </a>
                );
              })}
              <div className="mt-2 pt-3 border-t border-outline-variant/20">
                <AnimatedButton
                  href={homeContent.header.cta.href}
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {homeContent.header.cta.label}
                </AnimatedButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
