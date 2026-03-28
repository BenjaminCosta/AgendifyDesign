import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TubelightNavBar, TubelightNavItem } from "@/components/ui/tubelight-navbar";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useLanguage } from "@/context/LanguageContext";

/* ── Inline SVG icons ─────────────────────────────────────── */
const IconWrench    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const IconBriefcase = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
const IconMessage   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconUsers     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconMail      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

/* ── URL → icon (URLs never change between languages) ──────── */
const iconMap: Record<string, () => JSX.Element> = {
  "#servicios":   IconWrench,
  "#proyectos":   IconBriefcase,
  "#testimonios": IconMessage,
  "#equipo":      IconUsers,
  "#contacto":    IconMail,
};

/* ── Static anchor list for IntersectionObserver ────────────── */
const NAV_URLS = ["#servicios", "#proyectos", "#testimonios", "#equipo", "#contacto"];

const Header = () => {
  const { lang, t, toggle } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveUrl(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
    );
    NAV_URLS.forEach((url) => {
      const el = document.getElementById(url.replace("#", ""));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Build typed nav items from translations */
  const navItems: TubelightNavItem[] = t.nav.items.map((item) => ({
    name: item.name,
    url: item.url,
    icon: iconMap[item.url] ?? IconMail,
  }));

  /* Active tab name matches current language */
  const activeTab = t.nav.items.find((i) => i.url === activeUrl)?.name ?? "";

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

        {/* Desktop right — language toggle + CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1 font-label text-[10px] tracking-widest uppercase border border-outline-variant/30 px-3 py-2 hover:border-primary/50 transition-colors duration-200"
          >
            <span className={lang === "es" ? "text-primary font-bold" : "text-foreground/35"}>ES</span>
            <span className="text-foreground/20 mx-0.5">|</span>
            <span className={lang === "en" ? "text-primary font-bold" : "text-foreground/35"}>EN</span>
          </button>

          <AnimatedButton href="#contacto">
            {t.nav.cta}
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
                    <Icon />
                    {item.name}
                  </a>
                );
              })}
              <div className="mt-2 pt-3 border-t border-outline-variant/20 flex flex-col gap-3">
                <button
                  onClick={toggle}
                  className="flex items-center gap-2 px-4 py-1 font-label text-[10px] tracking-widest uppercase text-foreground/50"
                >
                  <span className={lang === "es" ? "text-primary font-bold" : "text-foreground/30"}>ES</span>
                  <span className="text-foreground/20">|</span>
                  <span className={lang === "en" ? "text-primary font-bold" : "text-foreground/30"}>EN</span>
                </button>
                <AnimatedButton
                  href="#contacto"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.cta}
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
