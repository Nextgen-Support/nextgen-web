import Layout from "../components/layout";
import HeroSection from "../components/hero-section";
import { WhyChooseUsSection } from "../components/why-choose-us";
import AboutSection from "../components/about-section";
import NewsSection from "../components/news-section";
import { SolutionsSection } from "../components/solutions-section";
import ContactSection from "../components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUsSection />
      <AboutSection />
      <SolutionsSection />
      <ContactSection />
      <NewsSection />
    </div>
  );
}
