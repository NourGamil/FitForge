import SiteShell from "../components/site/SiteShell";
import Hero from "../components/site/Hero";
import Programs from "../components/site/Programs";
import AboutSection from "../components/site/AboutSection";
import Features from "../components/site/Features";
import GoalSection from "../components/site/GoalSection";
import CoursesSection from "../components/site/CoursesSection";
import WorkoutGallery from "../components/site/WorkoutGallery";
import TeamSection from "../components/site/TeamSection";
import Testimonials from "../components/site/Testimonials";
import BlogSection from "../components/site/BlogSection";
import ContactSection from "../components/site/ContactSection";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Programs />
      <AboutSection />
      <Features />
      <GoalSection />
      <CoursesSection />
      <WorkoutGallery />
      <TeamSection />
      <Testimonials />
      <BlogSection />
      <ContactSection />
    </SiteShell>
  );
}
