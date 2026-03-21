import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TubelightNavBar, TubelightNavItem } from "@/components/ui/tubelight-navbar";
import { AnimatedButton } from "@/components/ui/animated-button";
import { homeContent } from "@/content/home";

/* ── Inline SVG icons — reemplaza lucide-react (~80KB) ───── */
const IconWrench    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const IconBriefcase = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
const IconMessage   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconUsers     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconMail      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

const navItems: TubelightNavItem[] = [
  { name: "Servicios", url: "#servicios", icon: IconWrench },
  { name: "Proyectos", url: "#proyectos", icon: IconBriefcase },
  { name: "Clientes",  url: "#testimonios", icon: IconMessage },
  { name: "Equipo",    url: "#equipo", icon: IconUsers },
  { name: "Contacto", url: "#contacto", icon: IconMail },
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
          Agendify Design
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
