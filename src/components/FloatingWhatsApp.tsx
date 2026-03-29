const whatsappNumber = "+5491123793882";
const whatsappHref = "https://wa.me/5491123793882";

const FloatingWhatsApp = () => (
  <a
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Abrir WhatsApp al ${whatsappNumber}`}
    className="fixed right-5 bottom-5 z-[90] group"
  >
    <span className="flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(16,185,129,0.22)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#58e2ab]">
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 fill-current"
      >
        <path d="M19.11 17.23c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.91.89-.91 2.18s.94 2.53 1.07 2.71c.13.18 1.85 2.82 4.48 3.95.63.27 1.12.43 1.5.55.63.2 1.21.17 1.67.11.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.07-.11-.24-.18-.51-.31Z" />
        <path d="M16.02 3.2c-7.03 0-12.74 5.68-12.74 12.68 0 2.24.59 4.43 1.71 6.35L3.2 28.8l6.74-1.76a12.84 12.84 0 0 0 6.07 1.54h.01c7.03 0 12.78-5.68 12.78-12.68 0-3.39-1.32-6.58-3.72-8.97A12.73 12.73 0 0 0 16.02 3.2Zm0 23.24h-.01a10.7 10.7 0 0 1-5.45-1.5l-.39-.23-4 .99 1.07-3.89-.25-.4a10.5 10.5 0 0 1-1.63-5.55c0-5.81 4.78-10.55 10.66-10.55 2.85 0 5.52 1.1 7.54 3.11a10.45 10.45 0 0 1 3.12 7.45c0 5.81-4.8 10.56-10.66 10.56Z" />
      </svg>
    </span>
  </a>
);

export default FloatingWhatsApp;
