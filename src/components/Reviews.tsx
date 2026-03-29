import workanaPng from "@/assets/workana.png";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

/* ── Workana brand purple ─────────────────────────────────── */
const W_PURPLE = "#5b47e0";
const W_PURPLE_LIGHT = "#f0edfb";

/* ── Workana logo image ───────────────────────────────────── */
const WorkanaW = ({ size = 24 }: { size?: number }) => (
  <img src={workanaPng} alt="Workana" width={size} height={size} style={{ objectFit: "contain" }} />
);

/* ── Purple stars (Workana style) ─────────────────────────── */
const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-[2px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className="w-[13px] h-[13px]">
        <path
          d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1l-4.94 2.6.94-5.5-4-3.9 5.53-.8z"
          fill={i < count ? W_PURPLE : "#ddd6fe"}
          stroke={i < count ? W_PURPLE : "#c4b5fd"}
          strokeWidth="0.5"
        />
      </svg>
    ))}
  </div>
);

/* ── Static (non-translatable) review data ────────────────── */
type ReviewStatic = {
  clientName: string;
  clientInitials: string;
  clientColor: string;
  rating: number;
  tags: string[];
  freelancerName: string;
  profileUrl: string;
};

/* merged type used inside the component */
type Review = ReviewStatic & {
  projectTitle: string;
  time: string;
  text: string;
};

const reviewsStatic: ReviewStatic[] = [
  {
    clientName: "Fran",
    clientInitials: "FR",
    clientColor: "#3b82f6",
    rating: 5,
    tags: ["HTML", "WordPress", "Responsive Web Design", "Diseño Web"],
    freelancerName: "Benjamín Costa",
    profileUrl: "https://www.workana.com/freelancer/6525bdbaa3b696218eb9e38608f3ea03",
  },
  {
    clientName: "Maria Rujano",
    clientInitials: "MR",
    clientColor: "#ec4899",
    rating: 5,
    tags: ["Shopify", "HTML", "CSS", "JavaScript", "API", "Content Management System", "Responsive Web Design"],
    freelancerName: "Benjamín Costa",
    profileUrl: "https://www.workana.com/freelancer/6525bdbaa3b696218eb9e38608f3ea03",
  },
  {
    clientName: "Diego N. S. B.",
    clientInitials: "DN",
    clientColor: "#f59e0b",
    rating: 5,
    tags: ["HTML5", "CSS", "JavaScript", "Git", "Zoho CRM", "Responsive Web Design", "HTML"],
    freelancerName: "Tobías Bonomo",
    profileUrl: "https://www.workana.com/freelancer/e45ac26bd141723720414cf2513d2a8f",
  },
  {
    clientName: "Franco V.",
    clientInitials: "FV",
    clientColor: "#10b981",
    rating: 5,
    tags: ["WordPress", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "API", "Internet Security"],
    freelancerName: "Tobías Bonomo",
    profileUrl: "https://www.workana.com/freelancer/e45ac26bd141723720414cf2513d2a8f",
  },
  {
    clientName: "Luciano J. M.",
    clientInitials: "LJ",
    clientColor: "#6366f1",
    rating: 5,
    tags: ["JavaScript", "MySQL", "PHP", "API", "CSS", "HTML", "Python", "Responsive Web Design"],
    freelancerName: "Matías Bellinzona",
    profileUrl: "https://www.workana.com/freelancer/367d2b3ca0b4e2c21565ffd02193091f",
  },
  {
    clientName: "Marlon O.",
    clientInitials: "MO",
    clientColor: "#ef4444",
    rating: 5,
    tags: ["JavaScript", "API", "Node.js", "Docker"],
    freelancerName: "Matías Bellinzona",
    profileUrl: "https://www.workana.com/freelancer/367d2b3ca0b4e2c21565ffd02193091f",
  },
];

/* ── Component ────────────────────────────────────────────── */
const Reviews = () => {
  const { t } = useLanguage();

  // Merge static (non-translatable) data with translated projectTitle/time/text
  const reviews: Review[] = reviewsStatic.map((s, i) => ({
    ...s,
    ...t.reviews.items[i],
  }));

  return (
  <section id="testimonios" className="py-24 md:py-36 relative bg-background">
    <div className="container mx-auto px-6">

      {/* ── Header ── */}
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">{t.reviews.sectionLabel}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {t.reviews.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              {t.reviews.subtitle}
            </p>
          </div>

          {/* Workana aggregate badge */}
          <a
            href="https://www.workana.com/freelancer/367d2b3ca0b4e2c21565ffd02193091f"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-4 border flex-shrink-0 hover:opacity-80 transition-opacity"
            style={{ borderColor: `${W_PURPLE}40`, backgroundColor: `${W_PURPLE}08` }}
          >
            <WorkanaW size={36} />
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-foreground tracking-wide">Workana Verified</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-extrabold text-foreground leading-none">5.0</span>
                <StarRow count={5} />
              </div>
              <span className="text-[11px] text-muted-foreground mt-0.5">{t.reviews.verifiedCount}</span>
            </div>
          </a>
        </div>
      </ScrollReveal>

      {/* ── Cards grid ── */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className="h-full">
            <div
              className="h-full flex flex-col review-card"
            >
              {/* Project title strip */}
              <div
                className="px-5 pt-5 pb-4"
                style={{ borderBottom: "1px solid #f0edfb" }}
              >
                <p
                  className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2"
                  style={{ color: W_PURPLE }}
                >
                  {t.reviews.completedProject}
                </p>
                <h3 className="text-[13px] font-bold text-gray-800 leading-snug line-clamp-2">
                  {review.projectTitle}
                </h3>
              </div>

              {/* Client row */}
              <div className="px-5 pt-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-[11px] flex-shrink-0"
                    style={{ backgroundColor: review.clientColor }}
                  >
                    {review.clientInitials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-[13px] leading-tight">{review.clientName}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRow count={review.rating} />
                      <span className="text-[11px] text-gray-400">{review.time}</span>
                    </div>
                  </div>
                </div>
                {/* Workana icon top-right */}
                <WorkanaW size={22} />
              </div>

              {/* Review body */}
              <div className="px-5 pt-4 pb-4 flex-1">
                <p className="text-gray-600 text-[13px] leading-relaxed whitespace-pre-line">
                  {review.text}
                </p>
              </div>

              {/* Skill tags */}
              <div className="px-5 pb-4 flex flex-wrap gap-1.5">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2.5 py-[5px] rounded-full"
                    style={{ backgroundColor: W_PURPLE_LIGHT, color: W_PURPLE }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderTop: "1px solid #f0edfb" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  <span className="text-[11px] text-gray-400">
                    {t.reviews.verified} ·{" "}
                    <span className="font-semibold text-gray-600">{review.freelancerName}</span>
                  </span>
                </div>
                <a
                  href={review.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-bold hover:underline underline-offset-2 transition-opacity hover:opacity-70"
                  style={{ color: W_PURPLE }}
                >
                  {t.reviews.viewOnWorkana}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  </section>
  );
};

export default Reviews;
