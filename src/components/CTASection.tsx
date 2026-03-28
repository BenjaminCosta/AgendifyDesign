import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    const formData = new FormData();
    formData.append("access_key", "5b5a4224-fc8f-41d5-8652-ea59f72c19a1");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-32 bg-surface-container-lowest" id="contacto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">

          {/* Left — copy */}
          <div>
            <h2 className="text-6xl font-extrabold font-headline tracking-tighter mb-12 uppercase leading-none">
              {t.contact.titleLine1} <br />
              <span className="text-primary">{t.contact.titleLine2}</span>
            </h2>
            <p className="text-foreground/60 font-light text-lg mb-16 max-w-sm">
              {t.contact.subtitle}
            </p>
            <div className="space-y-6 font-label uppercase tracking-widest text-xs">
              {t.contact.bullets.map((bullet) => (
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
              <div className="flex flex-col justify-center py-8 gap-10 h-full">

                {/* Animated check */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
                  className="relative w-20 h-20"
                >
                  {/* Glow ring */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute inset-0 rounded-full bg-primary/10"
                    style={{ filter: "blur(12px)" }}
                  />
                  <div className="relative w-20 h-20 border border-primary/30 flex items-center justify-center">
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-primary"
                    >
                      <motion.path
                        d="M5 13l4 4L19 7"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                      />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="space-y-3"
                >
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary">
                    {t.contact.successBadge}
                  </p>
                  <h3 className="text-3xl font-extrabold font-headline uppercase tracking-tight leading-tight">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
                    {t.contact.successText}
                  </p>
                </motion.div>

                {/* Divider + detail */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                  className="border-t border-border pt-6 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] font-label uppercase tracking-widest text-muted-foreground">
                    {t.contact.successFooter}
                  </span>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="relative">
                  <label className="absolute -top-4 left-0 text-[10px] font-label text-primary tracking-[0.3em] uppercase">
                    {t.contact.formLabelName}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.placeholderName}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-0 text-foreground py-4 px-0 transition-all font-headline font-bold text-xl placeholder:text-foreground/20"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-4 left-0 text-[10px] font-label text-primary tracking-[0.3em] uppercase">
                    {t.contact.formLabelEmail}
                  </label>
                  <input
                    type="email"
                    placeholder={t.contact.placeholderEmail}
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-0 text-foreground py-4 px-0 transition-all font-headline font-bold text-xl placeholder:text-foreground/20"
                  />
                </div>
                <div className="relative">
                  <label className="absolute -top-4 left-0 text-[10px] font-label text-primary tracking-[0.3em] uppercase">
                    {t.contact.formLabelMessage}
                  </label>
                  <textarea
                    placeholder={t.contact.placeholderMessage}
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-0 text-foreground py-4 px-0 transition-all font-headline font-bold text-xl placeholder:text-foreground/20 resize-none"
                  />
                </div>
                {error && (
                  <p className="text-destructive text-xs font-label tracking-widest uppercase -mt-6">
                    {t.contact.errorMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary-container text-on-primary py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? t.contact.sending : t.contact.submit}
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
