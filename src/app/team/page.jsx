import SiteShell from "../../components/site/SiteShell";
import PageBanner from "../../components/site/PageBanner";
import TeamSection from "../../components/site/TeamSection";
import Testimonials from "../../components/site/Testimonials";
import ContactSection from "../../components/site/ContactSection";

export default function TeamPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Team" title="Meet the coaches." text="Premium coach cards, stronger image treatment, and motion-ready sections." image="images/team-3.jpg" />
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </SiteShell>
  );
}
