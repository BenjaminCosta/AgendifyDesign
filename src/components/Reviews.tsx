import ScrollReveal from "./ScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mariana López",
    company: "CEO, TechStart",
    text: "Superaron nuestras expectativas. El sitio web que crearon incrementó nuestras conversiones un 40% en el primer mes.",
    rating: 5,
  },
  {
    name: "Carlos Rivera",
    company: "Fundador, Rivera Labs",
    text: "Profesionalismo total. Entregaron a tiempo, con calidad excepcional y atención al detalle impresionante.",
    rating: 5,
  },
  {
    name: "Andrea Martínez",
    company: "CMO, FitLife",
    text: "La app mobile que desarrollaron es rápida, intuitiva y nuestros usuarios la aman. Totalmente recomendados.",
    rating: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

const Reviews = () => (
  <section id="resenas" className="py-24 md:py-36 relative">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Testimonios</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Reseñas
          </h2>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-border">
            <StarRating count={5} />
            <span className="text-xl font-bold text-foreground">5.0</span>
            <span className="text-xs text-muted-foreground">verificadas</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <ScrollReveal key={review.name} delay={i * 0.12}>
            <div className="group p-6 md:p-8 border border-border rounded-xl hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 relative bg-background">
              <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
              <StarRating count={review.rating} />
              <p className="mt-5 text-foreground leading-relaxed">{review.text}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{review.company}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
