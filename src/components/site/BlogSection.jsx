import { CalendarDays, ArrowUpRight } from "../ui/icons";
import { asset, blogPosts } from "../../lib/site";
import SectionHeader from "./SectionHeader";

export default function BlogSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Training journal"
          title="Fuel your discipline."
          text="Smart training insights, recovery tips, and practical guidance to help you stay consistent beyond the gym floor."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="reveal-card group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-premium backdrop-blur-xl">
              <div className="h-64 overflow-hidden">
                <img src={asset(post.image)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-volt">
                  <CalendarDays size={15} />
                  {post.date}
                </div>
                <h3 className="text-2xl font-black leading-tight text-white">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel">{post.excerpt}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-volt">
                  Read insight <ArrowUpRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
