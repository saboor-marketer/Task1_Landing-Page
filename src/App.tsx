import { lazy, Suspense } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

const Portfolio = lazy(() => import("./components/Portfolio"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const FaqSection = lazy(() => import("./components/FaqSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));

function SectionPlaceholder({ height }: { height: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ minHeight: height }}
      className="w-full bg-[#FAFAF9]"
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#111113]">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Suspense fallback={<SectionPlaceholder height="720px" />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder height="480px" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder height="520px" />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder height="560px" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionPlaceholder height="280px" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
