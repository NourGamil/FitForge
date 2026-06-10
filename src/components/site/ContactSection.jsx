"use client";

import { useState } from "react";
import { CalendarCheck, Mail, MapPin, Phone, Send } from "../ui/icons";
import { asset, brand } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Start today"
          title="Book your first assessment."
          text="Tell us your goal and we’ll help you choose the right course, coach, and weekly rhythm."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[.86fr_1.14fr]">
          <div className="reveal overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-4 shadow-premium backdrop-blur-xl">
            <div className="relative h-full min-h-[520px] overflow-hidden rounded-[2rem]">
              <img src={asset("images/contact-banner.png")} alt="Contact coach" className="absolute bottom-0 left-1/2 z-10 max-h-[92%] -translate-x-1/2 object-contain" />
              <img src={asset("images/services-img.jpg")} alt="Training floor" className="absolute inset-0 h-full w-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
              <div className="absolute left-6 top-6 rounded-full bg-volt px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-obsidian">Response within 24h</div>
              <div className="absolute bottom-6 left-6 right-6 grid gap-3">
                {[
                  [Mail, brand.email],
                  [Phone, brand.phone],
                  [MapPin, brand.location]
                ].map(([Icon, text]) => (
                  <div key={text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-obsidian/70 p-4 backdrop-blur-xl">
                    <Icon className="text-volt" size={19} />
                    <span className="text-sm font-bold text-smoke">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form
            className="reveal rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-6 shadow-premium backdrop-blur-xl sm:p-9"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Email address" placeholder="you@example.com" type="email" />
              <Field label="Phone" placeholder="+20 ..." />
              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-steel">Main goal</span>
                <select className="rounded-2xl border border-white/10 bg-obsidian/80 px-4 py-4 text-white outline-none transition focus:border-volt/60">
                  <option>Build muscle</option>
                  <option>Lose fat</option>
                  <option>Get stronger</option>
                  <option>Move better</option>
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-steel">Message</span>
              <textarea rows={6} placeholder="Tell us where you are now and what you want to change..." className="resize-none rounded-2xl border border-white/10 bg-obsidian/80 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-volt/60" />
            </label>

            <button className="skew-button mt-6 inline-flex items-center justify-center gap-3 bg-volt px-8 py-4 font-black uppercase tracking-[0.18em] text-obsidian shadow-glow">
              <span>Send request</span>
              <Send size={18} />
            </button>

            {sent ? (
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-volt/30 bg-volt/10 p-4 text-sm font-bold text-smoke">
                <CalendarCheck className="text-volt" size={20} />
                Request captured. In a real app, connect this form to your backend or email service.
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-black uppercase tracking-[0.22em] text-steel">{label}</span>
      <input type={type} placeholder={placeholder} className="rounded-2xl border border-white/10 bg-obsidian/80 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-volt/60" />
    </label>
  );
}
