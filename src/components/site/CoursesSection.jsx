import { Clock3, Signal, Sparkles } from "../ui/icons";
import { asset, courses } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function CoursesSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Training courses"
          title="Structured blocks. Visible results."
          text="Each course has a goal, a time box, and a measurable path forward. Pick the level that matches your current chapter."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="reveal-card group overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.045] shadow-premium backdrop-blur-xl">
              <div className="relative h-72 overflow-hidden">
                <img src={asset(course.image)} alt={course.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-volt px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-obsidian">{course.level}</div>
              </div>
              <div className="p-6">
                <h3 className="display-title text-5xl text-white">{course.title}</h3>
                <div className="mt-4 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em] text-steel">
                  <span className="inline-flex items-center gap-2"><Clock3 size={15} />{course.duration}</span>
                  <span className="inline-flex items-center gap-2"><Signal size={15} />{course.level}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {course.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-smoke/80">
                      <Sparkles size={16} className="text-volt" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
                  <p className="display-title text-5xl text-volt">{course.price}</p>
                  <button className="skew-button bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-obsidian">
                    <span>Reserve</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
