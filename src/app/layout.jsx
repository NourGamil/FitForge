import "./globals.css";
import { brand } from "../lib/site";

export const metadata = {
  title: `${brand.name} | Premium Fitness Studio`,
  description: "A premium fitness website rebuilt with Next.js, Tailwind CSS, and GSAP animations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
