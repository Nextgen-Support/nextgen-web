import Layout from "../components/layout";
import HeroSection from "../components/hero-section";
import { WhyChooseUsSection } from "../components/why-choose-us";
import AboutSection from "../components/about-section";
import NewsSection from "../components/news-section";
import CTASection from "../components/cta-section";
import ContactSection from "../components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSection />
      <NewsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
