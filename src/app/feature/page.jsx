import SiteShell from "../../components/site/SiteShell";
import PageBanner from "../../components/site/PageBanner";
import Features from "../../components/site/Features";
import GoalSection from "../../components/site/GoalSection";
import Programs from "../../components/site/Programs";

export default function FeaturePage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Features" title="The system behind results." text="Everything that made the old features page useful, rebuilt into a polished studio story." image="images/services-img.jpg" />
      <Features />
      <GoalSection />
      <Programs />
    </SiteShell>
  );
}
