const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
            AD
          </span>
          <span className="text-sm font-semibold text-foreground">Agendify Design</span>
        </div>
        <span className="text-sm text-muted-foreground">
          © 2026 Agendify Design. Todos los derechos reservados.
        </span>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Privacidad</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Términos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
