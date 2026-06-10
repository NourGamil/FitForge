import SiteShell from "../../components/site/SiteShell";
import PageBanner from "../../components/site/PageBanner";
import BlogSection from "../../components/site/BlogSection";
import GoalSection from "../../components/site/GoalSection";

export default function BlogPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Blog" title="The training journal." text="Premium editorial cards for fitness content, updates, and educational posts." image="images/goal-background-img.jpg" />
      <BlogSection />
      <GoalSection />
    </SiteShell>
  );
}
