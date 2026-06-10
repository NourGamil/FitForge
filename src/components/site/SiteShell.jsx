import ClientAnimations from "./ClientAnimations";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function SiteShell({ children }) {
  return (
    <div className="site-shell relative z-10 opacity-0">
      <ClientAnimations />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
