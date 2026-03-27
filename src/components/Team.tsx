import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.jpeg";
import workanaPng from "@/assets/workana.png";
import { homeContent } from "@/content/home";
import ScrollReveal from "@/components/ScrollReveal";

const members = [
  {
    name: "Benjamin Costa Mihanovich",
    role: "Diseño UX/UI & Producto",
    image: team1,
    workana: "https://www.workana.com/freelancer/6525bdbaa3b696218eb9e38608f3ea03",
  },
  {
    name: "Tobias Bonomo",
    role: "Desarrollo Full-Stack & Arquitectura",
    image: team2,
    workana: "https://www.workana.com/freelancer/e45ac26bd141723720414cf2513d2a8f",
  },
  {
    name: "Matias Bellinzona",
    role: "Estrategia Digital & Growth",
    image: team3,
    workana: "https://www.workana.com/freelancer/367d2b3ca0b4e2c21565ffd02193091f",
  },
  {
    name: "Santiago Jimenez",
    role: "Seguridad & QA",
    image: team4,
  },
];

const Team = () => (
  <section className="py-32 bg-background" id="equipo">
    <div className="container mx-auto px-6">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold font-headline tracking-tighter mb-6 uppercase">
            EL <span className="text-primary">EQUIPO</span>
          </h2>
          <p className="text-foreground/60 font-light">{homeContent.team.subtitle}</p>
        </div>
        <p className="text-foreground/40 font-label text-xs uppercase tracking-widest">FUNDADORES</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 items-stretch">
        {members.map((member, i) => (
          <ScrollReveal key={member.name} delay={i * 0.1}>
            <div
              className={`group h-full border border-outline-variant/10 p-12 hover:bg-surface-container transition-all duration-500 flex flex-col ${
                i === 1 ? "md:border-y-0 md:border-x lg:border-y lg:border-x-0 bg-surface-container/30" : ""
              }`}
            >
            <div className="mb-10 relative overflow-hidden aspect-square bg-surface-variant">
              <img
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                src={member.image}
                alt={member.name}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h4 className="text-2xl font-bold font-headline uppercase mb-2 min-h-[4rem]">{member.name}</h4>
              <p className="font-label text-primary text-[10px] tracking-[0.3em] uppercase min-h-[2.5rem]">
                {member.role}
              </p>
            </div>
            {member.workana ? (
              <a
                href={member.workana}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-foreground/40 hover:text-foreground/70 transition-colors duration-200 mt-6"
              >
                <img src={workanaPng} alt="Workana" className="w-4 h-4 object-contain opacity-60 group-hover:opacity-90 transition-opacity" />
                Ver perfil en Workana
              </a>
            ) : null}
          </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
