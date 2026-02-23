import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Nos pondremos en contacto pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 md:py-36 relative overflow-hidden">
      {/* Decorative */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-border/20"
        animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide uppercase text-primary">Contacto</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              ¿Listo para elevar tu presencia digital?
            </h2>
            <p className="mt-4 text-muted-foreground">Hablemos de tu próximo proyecto.</p>
            <div className="mt-8">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <a href="mailto:hola@agendifydesign.com">
                  Agendar llamada →
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="mt-16 max-w-lg mx-auto flex flex-col gap-5"
          >
            {[
              { type: "text", placeholder: "Nombre", key: "name" as const },
              { type: "email", placeholder: "Email", key: "email" as const },
            ].map((field) => (
              <input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={form[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full px-5 py-3.5 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
              />
            ))}
            <textarea
              placeholder="Mensaje"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-3.5 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
            />
            <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary/20">
              Enviar mensaje
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
