import SiteShell from "../../components/site/SiteShell";
import PageBanner from "../../components/site/PageBanner";
import AboutSection from "../../components/site/AboutSection";
import Features from "../../components/site/Features";
import GoalSection from "../../components/site/GoalSection";
import TeamSection from "../../components/site/TeamSection";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="About FitForge" title="Built for better bodies." text="A high-performance training space built around expert coaching, focused programming, and a community that keeps you moving forward." image="images/about-2.png" />
      <AboutSection />
      <Features />
      <GoalSection />
      <TeamSection />
    </SiteShell>
  );
}
