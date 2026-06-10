"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Dumbbell, Menu, Search, X } from "../ui/icons";
import { gsap } from "gsap";
import { brand, navLinks } from "../../lib/site";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mobileRef = useRef(null);

  useEffect(() => {
    if (!mobileRef.current) return;
    gsap.to(mobileRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.42,
      ease: "power3.out"
    });
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-obsidian/78 backdrop-blur-2xl">
      <div className="container-premium">
        <div className="hidden h-10 items-center justify-between border-b border-white/10 text-xs text-steel lg:flex">
          <div className="flex gap-6">
            <span>{brand.email}</span>
            <span>{brand.hours}</span>
          </div>
          <div className="flex items-center gap-5 uppercase tracking-[0.24em]">
            <span className="cursor-pointer">Login</span>
            <span className="text-white/25">/</span>
            <span className="cursor-pointer">Register</span>
          </div>
        </div>

        <nav className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt text-obsidian shadow-glow transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              <Dumbbell size={24} />
            </span>
            <span>
              <span className="display-title block text-4xl leading-none text-white">{brand.name}</span>
              <span className="block -mt-1 text-[10px] font-black uppercase tracking-[0.33em] text-volt">{brand.tagline}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] transition ${
                    active ? "bg-volt text-obsidian" : "text-steel hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button aria-label="Search" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-volt/50 hover:text-volt">
              <Search size={18} />
            </button>
            <Link href="/contact" className="skew-button inline-flex items-center justify-center bg-volt px-6 py-3 font-black uppercase tracking-[0.18em] text-obsidian shadow-glow">
              <span className="text-[#000]">Get Started</span>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <div ref={mobileRef} className="h-0 overflow-hidden opacity-0 lg:hidden">
          <div className="space-y-2 pb-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
