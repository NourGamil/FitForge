import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "../ui/icons";
import { asset, membership } from "../../lib/site";
import SectionHeader from "./SectionHeader";

const promises = [
  "No random machines-first training",
  "Small groups with coach attention",
  "Progression, recovery, and accountability",
  "A premium space that feels motivating every day"
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-flame/10 blur-3xl" aria-hidden="true" />
      <div className="container-premium grid gap-14 lg:grid-cols-[1fr_.95fr] lg:items-center">
        <div className="relative reveal">
          <div className="absolute -left-6 top-10 h-40 w-40 rounded-full border border-volt/20 pulse-ring" />
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-3 shadow-premium">
            <img src={asset("images/about-2.png")} alt="Personal training session" className="h-[560px] w-full rounded-[2rem] object-cover object-top" />
          </div>
          <div className="absolute -right-4 bottom-10 max-w-[250px] rounded-[2rem] border border-white/10 bg-obsidian/80 p-5 shadow-premium backdrop-blur-xl sm:right-8">
            <p className="display-title text-5xl text-volt">94%</p>
            <p className="mt-2 text-sm leading-6 text-smoke">of members complete their first 8-week block.</p>
          </div>
        </div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About the studio"
            title="Less noise. More precision."
            text="FitForge is a high-performance fitness studio for people who want premium coaching, stronger bodies, and an environment that makes discipline feel exciting."
          />

          <div className="reveal mt-8 grid gap-3">
            {promises.map((promise) => (
              <div key={promise} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-smoke">
                <CheckCircle2 className="text-volt" size={19} />
                {promise}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {membership.map((item) => (
              <div key={item.label} className="reveal-card rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-steel">{item.label}</p>
                <p className="display-title mt-3 text-5xl text-white">{item.price}</p>
                <p className="mt-2 text-sm text-steel">{item.detail}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="skew-button reveal mt-9 inline-flex items-center justify-center gap-3 bg-volt px-8 py-4 font-black uppercase tracking-[0.18em] text-obsidian shadow-glow">
            <span>Join the club</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
