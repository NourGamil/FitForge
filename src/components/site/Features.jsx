import { asset, featurePillars } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function Features() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-volt/30 to-transparent" aria-hidden="true" />
      <div className="container-premium relative z-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Inside the club"
            title="Designed like a studio. Built like an engine."
            text="Every area has a job: lift heavier, move cleaner, recover faster, and keep showing up with momentum."
          />
          <div className="reveal mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-premium">
            <img src={asset("images/carousel-1.jpg")} alt="Premium gym floor" className="parallax-img h-[310px] w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featurePillars.map((feature) => (
            <div key={feature.title} className="reveal-card rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-volt/35 hover:bg-white/[0.08]">
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-obsidian p-3 shadow-glow">
                <img src={asset(feature.icon)} alt="" className="h-full w-full object-contain" />
              </div>
              <h3 className="text-xl font-black text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
