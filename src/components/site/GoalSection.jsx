import Link from "next/link";
import { ArrowRight, Flame, HeartPulse, Zap } from "../ui/icons";
import { asset } from "../../lib/site";

const goals = [
  { icon: Flame, title: "Fat loss", text: "High-output sessions with sustainable nutrition habits." },
  { icon: Zap, title: "Strength", text: "Coach-guided progressive training for real power." },
  { icon: HeartPulse, title: "Longevity", text: "Mobility, endurance, and recovery for a better body." }
];

export default function GoalSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <img src={asset("images/goal-background-img.jpg")} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-obsidian/78" />
      </div>
      <div className="container-premium relative z-10 grid gap-12 lg:grid-cols-[1fr_.82fr] lg:items-center">
        <div className="reveal">
          <p className="mb-5 inline-flex rounded-full border border-volt/20 bg-volt/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-volt">Goal based training</p>
          <h2 className="display-title max-w-3xl text-6xl text-white sm:text-8xl">Your next body has a system.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">No confusing plans. No generic classes. We match you with the right goal path, coach rhythm, and weekly training flow.</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {goals.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                <Icon className="text-volt" size={24} />
                <h3 className="mt-4 font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="skew-button mt-9 inline-flex items-center justify-center gap-3 bg-volt px-8 py-4 font-black uppercase tracking-[0.18em] text-obsidian shadow-glow">
            <span>Set your goal</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="reveal relative mx-auto max-w-md">
          <div className="absolute inset-8 rounded-full bg-volt/20 blur-3xl" />
          <img src={asset("images/fitness-goal-banner.png")} alt="Fitness goal banner" className="float-soft relative z-10 mx-auto max-h-[540px] object-contain" />
        </div>
      </div>
    </section>
  );
}
