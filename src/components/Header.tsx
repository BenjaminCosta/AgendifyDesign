import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-2xl border-b border-border/40 shadow-[0_1px_40px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-[68px] md:h-[76px] px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-border/30 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src="/favicon.png" alt="Agendify Design" className="w-7 h-7 object-contain" />
            </div>
            <span className="text-[15px] font-bold tracking-tight text-foreground hidden sm:inline">
              Agendify Design
            </span>
          </a>

          {/* Floating pill nav — desktop */}
          <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/60 bg-background/60 backdrop-blur-xl shadow-sm">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+541100000000"
              className="flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+54 11 0000-0000</span>
            </a>
            <Button
              asChild
              size="sm"
              className="rounded-full px-5 shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
            >
              <a href="#contacto">Agendar llamada</a>
            </Button>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-foreground rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mx-4 mt-2 rounded-2xl border border-border bg-background/98 backdrop-blur-2xl shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-2 pt-3 border-t border-border">
                <Button asChild className="w-full rounded-xl">
                  <a href="#contacto" onClick={() => setMobileOpen(false)}>Agendar llamada</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
