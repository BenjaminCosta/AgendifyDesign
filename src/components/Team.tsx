import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import { homeContent } from "@/content/home";

const members = [
  { name: "Benjamin Costa Mihanovich", role: "CEO & Desarrollo Full-Stack", image: team1 },
  { name: "Tobias Bonomo", role: "Diseño UX/UI & Branding", image: team2 },
  { name: "Matias Bellinzona", role: "Marketing Digital & Estrategia", image: team3 },
];

const Team = () => (
  <section className="py-32 bg-background" id="equipo">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold font-headline tracking-tighter mb-6 uppercase">
            EL <span className="text-primary">EQUIPO</span>
          </h2>
          <p className="text-foreground/60 font-light">{homeContent.team.subtitle}</p>
        </div>
        <p className="text-foreground/40 font-label text-xs uppercase tracking-widest">FUNDADORES</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {members.map((member, i) => (
          <div
            key={member.name}
            className={`group border border-outline-variant/10 p-12 hover:bg-surface-container transition-all duration-500 ${
              i === 1 ? "md:border-y-0 md:border-x bg-surface-container/30" : ""
            }`}
          >
            <div className="mb-10 relative overflow-hidden aspect-square bg-surface-variant">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                src={member.image}
                alt={member.name}
                loading="lazy"
              />
            </div>
            <h4 className="text-2xl font-bold font-headline uppercase mb-2">{member.name}</h4>
            <p className="font-label text-primary text-[10px] tracking-[0.3em] uppercase">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
