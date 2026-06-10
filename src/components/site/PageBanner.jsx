import { asset } from "../../lib/site";

export default function PageBanner({ eyebrow, title, text, image = "images/services-img.jpg" }) {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-40 sm:pt-48">
      <img src={asset(image)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/82 to-obsidian" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="container-premium relative z-10">
        <div className="max-w-4xl reveal">
          <p className="mb-5 inline-flex rounded-full border border-volt/20 bg-volt/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-volt">{eyebrow}</p>
          <h1 className="display-title text-7xl text-white sm:text-8xl lg:text-9xl">{title}</h1>
          {text ? <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">{text}</p> : null}
        </div>
      </div>
    </section>
  );
}
