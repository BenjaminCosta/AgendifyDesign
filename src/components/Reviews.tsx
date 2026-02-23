import ScrollReveal from "./ScrollReveal";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Mariana López",
    company: "CEO, TechStart",
    text: "Superaron nuestras expectativas. El sitio web que crearon incrementó nuestras conversiones un 40% en el primer mes.",
    rating: 5,
    avatar: "ML",
  },
  {
    name: "Carlos Rivera",
    company: "Fundador, Rivera Labs",
    text: "Profesionalismo total. Entregaron a tiempo, con calidad excepcional y atención al detalle impresionante.",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Andrea Martínez",
    company: "CMO, FitLife",
    text: "La app mobile que desarrollaron es rápida, intuitiva y nuestros usuarios la aman. Totalmente recomendados.",
    rating: 5,
    avatar: "AM",
  },
];

// Google-style colored stars
const GoogleStars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" className="w-5 h-5" fill="#FBBC04">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

// Google "G" logo SVG
const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="w-5 h-5 flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const Reviews = () => (
  <section id="resenas" className="py-24 md:py-36 relative">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Testimonios</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Reseñas
          </h2>
          {/* Google Reviews Badge */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-background shadow-sm">
            <GoogleLogo />
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground leading-none">5.0</span>
                <GoogleStars count={5} />
              </div>
              <span className="text-[11px] text-muted-foreground font-medium">Google Reviews</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <ScrollReveal key={review.name} delay={i * 0.12}>
            <div className="group p-6 md:p-8 border border-border rounded-2xl hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 relative bg-background flex flex-col">
              <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
              <GoogleStars count={review.rating} />
              <p className="mt-5 text-foreground leading-relaxed flex-1">{review.text}</p>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{review.company}</p>
                </div>
                <GoogleLogo />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;

