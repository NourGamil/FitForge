import { asset, coaches } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function TeamSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Expert team"
          title="Coaches with standards."
          text="The people behind the programs: strength, conditioning, transformation, and movement quality specialists."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach) => (
            <article key={coach.name} className="reveal-card group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-premium">
              <div className="relative h-[410px] overflow-hidden">
                <img src={asset(coach.image)} alt={coach.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="display-title text-4xl text-white">{coach.name}</h3>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-volt">{coach.role}</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <span className="text-sm text-steel">Follow coach</span>
                <div className="flex gap-2">
                  {["Ig", "X", "In"].map((label) => (
                    <span key={label} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-black text-white transition hover:border-volt/40 hover:text-volt">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
