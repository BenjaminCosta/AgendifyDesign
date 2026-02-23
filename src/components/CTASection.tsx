import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, MessageSquare, Phone, Mail, Zap } from "lucide-react";

const guarantees = [
  { icon: Clock, text: "Respuesta en menos de 24 horas" },
  { icon: CheckCircle2, text: "Primera consulta 100% sin costo" },
  { icon: Zap, text: "Propuesta a medida en 48 hs" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hola@agendifydesign.com", href: "mailto:hola@agendifydesign.com" },
  { icon: Phone, label: "WhatsApp", value: "+54 11 0000-0000", href: "https://wa.me/5491100000000" },
  { icon: MessageSquare, label: "Instagram", value: "@agendifydesign", href: "https://instagram.com/agendifydesign" },
];

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", service: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-24 md:py-36 relative overflow-hidden bg-secondary">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/4 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy & trust */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide uppercase text-primary">Contacto</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.08]">
              ¿Listo para hacer crecer tu negocio digital?
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Contanos tu proyecto y en menos de 24 hs te enviamos una propuesta sin compromiso.
            </p>

            {/* Guarantees */}
            <ul className="mt-10 flex flex-col gap-4">
              {guarantees.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="mt-10 pt-10 border-t border-border">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">Contacto directo</p>
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl border border-border bg-background flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{label}</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-background p-8 md:p-10 shadow-xl shadow-foreground/3">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Te respondemos en menos de 24 horas. Revisá tu bandeja de entrada.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-1">Empezá hoy</h3>
                    <p className="text-sm text-muted-foreground">Completá el formulario y te contactamos.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nombre</label>
                        <input
                          type="text"
                          placeholder="Tu nombre"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 border border-border rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/50 transition-all duration-300 text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</label>
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 border border-border rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/50 transition-all duration-300 text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Servicio de interés</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/50 transition-all duration-300 text-sm appearance-none cursor-pointer"
                      >
                        <option value="">Seleccioná un servicio…</option>
                        <option value="web">Diseño Web</option>
                        <option value="mobile">App Mobile</option>
                        <option value="ux">UX/UI & Branding</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Mensaje</label>
                      <textarea
                        placeholder="Contanos sobre tu proyecto…"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/50 transition-all duration-300 resize-none text-sm"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-xl shadow-lg shadow-primary/20 mt-1">
                      Enviar mensaje →
                    </Button>
                    <p className="text-center text-[11px] text-muted-foreground">
                      Al enviar aceptás nuestra{" "}
                      <a href="#" className="underline underline-offset-2 hover:text-foreground transition-colors">política de privacidad</a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
