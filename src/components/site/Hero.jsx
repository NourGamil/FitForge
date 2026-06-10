"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, TimerReset } from "../ui/icons";
import { gsap } from "gsap";
import { asset, heroSlides, stats } from "../../lib/site";

export default function Hero() {
  const [active, setActive] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((value) => (value + 1) % heroSlides.length);
    }, 6200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy > *",
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, duration: 0.82, stagger: 0.09, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-frame",
        { opacity: 0, scale: 0.94, rotate: -2 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.1, ease: "power3.out" }
      );
    }, heroRef);
    return () => ctx.revert();
  }, [active]);

  const slide = heroSlides[active];

  return (
    <section ref={heroRef} className="relative isolate min-h-screen overflow-hidden pt-32 lg:pt-36">
      <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
      <div className="absolute left-1/2 top-24 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-volt/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-8 top-1/3 hidden rotate-90 text-[10px] font-black uppercase tracking-[0.8em] text-white/20 vertical-year lg:block">
        forged since 2026
      </div>

      <div className="container-premium relative z-10 grid min-h-[calc(100vh-9rem)] items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div className="hero-copy max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-volt backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-volt shadow-glow" />
            {slide.eyebrow}
          </div>
          <h1 className="display-title mt-7 text-[5.2rem] text-white sm:text-[7rem] lg:text-[8.5rem]">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel sm:text-xl">{slide.text}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/course" className="skew-button inline-flex items-center justify-center gap-3 bg-volt px-8 py-4 font-black uppercase tracking-[0.18em] text-obsidian shadow-glow">
              <span>Explore Courses</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="skew-button inline-flex items-center justify-center gap-3 border border-white/15 bg-white/8 px-8 py-4 font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:border-volt/50 hover:text-volt">
              <Play size={18} />
              <span>Watch Story</span>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <p className="display-title text-4xl text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-frame relative mx-auto w-full max-w-[560px]">
          <div className="hero-orb absolute -left-8 -top-8 h-36 w-36 rounded-full border border-volt/30" />
          <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-flame/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 p-3 shadow-premium backdrop-blur-xl">
            <div className="relative h-[520px] overflow-hidden rounded-[1.7rem] bg-iron">
              <img
                src={asset(slide.image)}
                alt={slide.title}
                className="h-full w-full object-cover transition-transform duration-[1300ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/22 to-transparent" />
              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-obsidian/60 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-volt backdrop-blur-xl">
                Live coaching
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
                <div className="glass-card rounded-3xl p-5">
                  <p className="display-title text-5xl text-white">{slide.stat}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-steel">{slide.statLabel}</p>
                </div>
                <div className="glass-card rounded-3xl p-5">
                  <div className="flex items-center gap-3 text-volt">
                    <TimerReset size={18} />
                    <span className="text-sm font-black uppercase tracking-[0.2em]">Today</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-smoke">Strength Lab at 7:30 PM has 4 elite spots left.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-5 hidden rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-premium backdrop-blur-xl sm:block">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt text-obsidian">
                <ShieldCheck size={22} />
              </span>
              <div>
                <p className="font-black text-white">Coach verified</p>
                <p className="text-sm text-steel">safe form, serious results</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all ${active === index ? "w-12 bg-volt" : "w-2 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
