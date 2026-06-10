import SiteShell from "../../components/site/SiteShell";
import PageBanner from "../../components/site/PageBanner";
import ContactSection from "../../components/site/ContactSection";
import Testimonials from "../../components/site/Testimonials";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Contact" title="Start the change." text="Book a consultation, ask about memberships, or speak with our team about the best program for your next goal." image="images/contact-banner.png" />
      <ContactSection />
      <Testimonials />
    </SiteShell>
  );
}
