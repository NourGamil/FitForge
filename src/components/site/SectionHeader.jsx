export default function SectionHeader({ eyebrow, title, text, align = "center" }) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-3xl reveal`}>
      <p className="mb-4 inline-flex items-center gap-3 rounded-full border border-volt/20 bg-volt/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-volt">
        <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_20px_rgba(215,255,56,.85)]" />
        {eyebrow}
      </p>
      <h2 className="display-title text-5xl text-white sm:text-6xl lg:text-7xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-steel sm:text-lg">{text}</p> : null}
    </div>
  );
}
