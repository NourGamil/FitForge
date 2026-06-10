import SiteShell from "../../components/site/SiteShell";
import PageBanner from "../../components/site/PageBanner";
import CoursesSection from "../../components/site/CoursesSection";
import Programs from "../../components/site/Programs";
import WorkoutGallery from "../../components/site/WorkoutGallery";
import ContactSection from "../../components/site/ContactSection";

export default function CoursePage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Courses" title="Train with structure." text="Premium course cards, program categories, and a refined booking flow." image="images/feature-2.jpg" />
      <CoursesSection />
      <Programs />
      <WorkoutGallery />
      <ContactSection />
    </SiteShell>
  );
}
