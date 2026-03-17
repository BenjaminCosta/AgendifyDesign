import ScrollReveal from "./ScrollReveal";
import { homeContent } from "@/content/home";

const reviews = [
  {
    name: "Mariana López",
    company: "CEO, TechStart",
    text: "Superaron nuestras expectativas. El sitio web que crearon incrementó nuestras conversiones un 40% en el primer mes.",
    rating: 5,
    avatar: "ML",
    avatarColor: "#4285F4",
    date: "hace 2 semanas",
  },
  {
    name: "Carlos Rivera",
    company: "Fundador, Rivera Labs",
    text: "Profesionalismo total. Entregaron a tiempo, con calidad excepcional y atención al detalle impresionante.",
    rating: 5,
    avatar: "CR",
    avatarColor: "#34A853",
    date: "hace 1 mes",
  },
  {
    name: "Andrea Martínez",
    company: "CMO, FitLife",
    text: "La app mobile que desarrollaron es rápida, intuitiva y nuestros usuarios la aman. Totalmente recomendados.",
    rating: 5,
    avatar: "AM",
    avatarColor: "#EA4335",
    date: "hace 3 semanas",
  },
];

const GoogleLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" className="w-4 h-4" fill={i < count ? "#FBBC04" : "#3c4a42"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Reviews = () => (
  <section id="testimonios" className="py-24 md:py-36 relative">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">{homeContent.reviews.label}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {homeContent.reviews.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{homeContent.reviews.subtitle}</p>
          </div>

          {/* Google rating badge */}
          <div className="flex items-center gap-4 px-5 py-4 border border-border bg-card">
            <GoogleLogo size={32} />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-foreground leading-none">Google Reviews</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xl font-extrabold text-foreground leading-none">5.0</span>
                <StarRow count={5} />
              </div>
              <span className="text-[11px] text-muted-foreground">{homeContent.reviews.badge}</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Review cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <ScrollReveal key={review.name} delay={i * 0.12}>
            <div className="group flex flex-col gap-4 p-6 border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
              {/* Card top: avatar + name + Google logo */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: review.avatarColor }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm leading-tight">{review.name}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{review.company}</p>
                  </div>
                </div>
                <GoogleLogo size={18} />
              </div>

              {/* Stars + date */}
              <div className="flex items-center gap-3">
                <StarRow count={review.rating} />
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>

              {/* Review text */}
              <p className="text-foreground/80 text-sm leading-relaxed flex-1">{review.text}</p>

              {/* Footer: posted on Google */}
              <div className="flex items-center gap-1.5 pt-3 border-t border-border">
                <span className="text-[11px] text-muted-foreground">Publicado en</span>
                <GoogleLogo size={12} />
                <span className="text-[11px] text-muted-foreground font-medium">Google</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* View all on Google CTA */}
      <ScrollReveal delay={0.4}>
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <GoogleLogo size={16} />
            <span className="group-hover:underline underline-offset-4">Ver todas las reseñas en Google</span>
            <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Reviews;
