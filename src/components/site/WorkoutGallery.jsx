"use client";

import { useMemo, useState } from "react";
import { gsap } from "gsap";
import { asset, workouts } from "../../lib/site";
import SectionHeader from "./SectionHeader";

const categories = ["All", "Strength", "HIIT", "Muscle", "Power", "Boxing", "Recovery", "Personal"];

export default function WorkoutGallery() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? workouts : workouts.filter((item) => item.category === active), [active]);

  const handleFilter = (category) => {
    setActive(category);
    requestAnimationFrame(() => {
      gsap.fromTo(".workout-card", { opacity: 0, y: 24, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, stagger: 0.04, duration: 0.45, ease: "power3.out" });
    });
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Workout gallery"
          title="Every angle of effort."
          text="Explore the energy inside FitForge — focused strength work, explosive conditioning, recovery sessions, and coach-led performance moments."
        />
        <div className="reveal mt-10 flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`shrink-0 rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition ${
                active === category ? "bg-volt text-obsidian shadow-glow" : "border border-white/10 bg-white/[0.04] text-steel hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <article key={item.title} className="workout-card reveal-card group relative h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-carbon">
              <img src={asset(item.image)} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="mb-2 inline-flex rounded-full bg-volt px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-obsidian">{item.category}</p>
                <h3 className="display-title text-4xl text-white">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
