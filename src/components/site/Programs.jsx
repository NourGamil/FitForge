import Link from "next/link";
import { ArrowUpRight } from "../ui/icons";
import { asset, programs } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function Programs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Signature programs"
          title="Choose your training weapon."
          text="Purpose-built training paths for strength, conditioning, mobility, and full-body transformation — guided by expert coaches from day one."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <article key={program.title} className="reveal-card group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-carbon shadow-premium">
              <img src={asset(program.image)} alt={program.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/58 to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-obsidian/60 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-volt backdrop-blur-xl">
                0{index + 1} · {program.tag}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="display-title text-5xl text-white">{program.title}</h3>
                <p className="mt-4 text-sm leading-7 text-smoke/80">{program.description}</p>
                <Link href="/course" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-volt">
                  View course <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
