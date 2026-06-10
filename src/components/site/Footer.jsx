import Link from "next/link";
import { Dumbbell, Mail, MapPin, Phone } from "../ui/icons";
import { brand, navLinks } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-obsidian py-16">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="container-premium relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-volt text-obsidian shadow-glow"><Dumbbell size={24} /></span>
              <span>
                <span className="display-title block text-4xl leading-none text-white">{brand.name}</span>
                <span className="block -mt-1 text-[10px] font-black uppercase tracking-[0.33em] text-volt">{brand.tagline}</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-steel">A premium fitness studio rebuilt as a modern Next.js website with Tailwind design and GSAP motion.</p>
            <div className="mt-6 flex gap-3">
              {["Fb", "Ig", "X", "In"].map((label) => (
                <span key={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-black text-white transition hover:border-volt/50 hover:text-volt">{label}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-white">Explore</h3>
            <div className="mt-5 grid gap-3 text-sm text-steel">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-volt">{link.label}</Link>)}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-white">Hours</h3>
            <div className="mt-5 grid gap-3 text-sm text-steel">
              <span>Monday - Friday</span>
              <span className="text-white">6:00 AM - 10:00 PM</span>
              <span>Saturday</span>
              <span className="text-white">8:00 AM - 7:00 PM</span>
              <span>Sunday · recovery only</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.28em] text-white">Contact</h3>
            <div className="mt-5 grid gap-4 text-sm text-steel">
              <span className="flex items-center gap-3"><Mail className="text-volt" size={17} />{brand.email}</span>
              <span className="flex items-center gap-3"><Phone className="text-volt" size={17} />{brand.phone}</span>
              <span className="flex items-center gap-3"><MapPin className="text-volt" size={17} />{brand.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-steel sm:flex-row">
          <span>© 2026 {brand.name}. All rights reserved.</span>
          <span>Next.js · Tailwind · GSAP</span>
        </div>
      </div>
    </footer>
  );
}
