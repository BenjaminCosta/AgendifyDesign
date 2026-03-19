import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { homeContent } from "@/content/home";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="py-32 bg-surface-container-lowest" id="contacto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {/* Left — copy */}
          <div>
            <h2 className="text-6xl font-extrabold font-headline tracking-tighter mb-12 uppercase leading-none">
              ¿Tenés un <br />
              <span className="text-primary">proyecto en mente?</span>
            </h2>
            <p className="text-foreground/60 font-light text-lg mb-16 max-w-sm">
              {homeContent.contact.subtitle}
            </p>
            <div className="space-y-6 font-label uppercase tracking-widest text-xs">
              {homeContent.contact.bullets.map((bullet) => (
                <p key={bullet} className="flex items-center gap-4">
                  <span className="text-primary">•</span>
                  {bullet}
                </p>
              ))}
            </div>
            <div className="mt-16 space-y-4 font-label uppercase tracking-widest text-xs opacity-50">
              <p>agendify.business@gmail.com</p>
              <p>Buenos Aires / Madrid / Global</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface-container p-12 shadow-2xl">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline uppercase">{homeContent.contact.successTitle}</h3>
                <p className="text-foreground/60 text-sm max-w-xs">{homeContent.contact.successText}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="relative">
                  <label className="absolute -top-4 left-0 text-[10px] font-label text-primary tracking-[0.3em] uppercase">
                    Identidad
                  </label>
                  <input
                    type="text"
                    placeholder="NOMBRE Y APELLIDO"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-0 text-foreground py-4 px-0 transition-all font-headline font-bold text-xl placeholder:text-foreground/20"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-4 left-0 text-[10px] font-label text-primary tracking-[0.3em] uppercase">
                    Contacto
                  </label>
                  <input
                    type="email"
                    placeholder="EMAIL@EMPRESA.COM"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-0 text-foreground py-4 px-0 transition-all font-headline font-bold text-xl placeholder:text-foreground/20"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-4 left-0 text-[10px] font-label text-primary tracking-[0.3em] uppercase">
                    Manifesto
                  </label>
                  <textarea
                    placeholder="DESCRIPCIÓN DEL PROYECTO"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-0 text-foreground py-4 px-0 transition-all font-headline font-bold text-xl placeholder:text-foreground/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-container text-on-primary py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-primary transition-all duration-300"
                >
                  ENVIAR BRIEF
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
