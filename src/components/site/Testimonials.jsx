"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "../ui/icons";
import { gsap } from "gsap";
import { asset, testimonials } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % testimonials.length), 5200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(".testimonial-panel", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" });
  }, [active]);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Member reviews"
          title="Discipline feels better here."
          text="Premium design matters, but the real product is confidence, structure, and showing up again tomorrow."
        />

        <div className="reveal mt-14 grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-premium backdrop-blur-xl lg:grid-cols-[.72fr_1fr] lg:p-10">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-carbon">
            <img src={asset("images/feature-1.jpg")} alt="Athlete training" className="absolute inset-0 h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-1 text-volt">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
              </div>
              <p className="mt-4 display-title text-5xl text-white">4.9 member score</p>
            </div>
          </div>

          <div className="testimonial-panel flex flex-col justify-center">
            <Quote className="text-volt" size={44} />
            <p className="mt-6 text-2xl font-bold leading-relaxed text-white sm:text-3xl">“{item.quote}”</p>
            <div className="mt-8 flex items-center gap-4">
              <img src={asset(item.image)} alt={item.name} className="h-16 w-16 rounded-2xl object-cover" />
              <div>
                <p className="font-black text-white">{item.name}</p>
                <p className="text-sm text-steel">{item.role}</p>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              {testimonials.map((test, index) => (
                <button
                  key={test.name}
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all ${active === index ? "w-12 bg-volt" : "w-2 bg-white/30"}`}
                  aria-label={`Read testimonial from ${test.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
