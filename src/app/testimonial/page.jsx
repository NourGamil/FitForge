import SiteShell from "../../components/site/SiteShell";
import PageBanner from "../../components/site/PageBanner";
import Testimonials from "../../components/site/Testimonials";
import WorkoutGallery from "../../components/site/WorkoutGallery";

export default function TestimonialPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Testimonials" title="Proof from members." text="A refined testimonial page with a GSAP-powered review panel." image="images/feature-1.jpg" />
      <Testimonials />
      <WorkoutGallery />
    </SiteShell>
  );
}
