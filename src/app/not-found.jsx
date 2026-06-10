import Link from "next/link";
import SiteShell from "../components/site/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="container-premium flex min-h-screen flex-col items-center justify-center pt-32 text-center">
        <p className="display-title text-[10rem] text-volt">404</p>
        <h1 className="display-title text-6xl text-white">Page off program.</h1>
        <p className="mt-5 max-w-xl text-steel">We could not find that page. Head back home and keep the session moving.</p>
        <Link href="/" className="skew-button mt-8 inline-flex bg-volt px-8 py-4 font-black uppercase tracking-[0.18em] text-obsidian"><span>Back home</span></Link>
      </section>
    </SiteShell>
  );
}
