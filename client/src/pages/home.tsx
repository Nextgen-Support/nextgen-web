import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import { WhyChooseUsSection } from "../components/why-choose-us";
import AboutSection from "../components/about-section";
import NewsSection from "../components/news-section";
import CTASection from "../components/cta-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navigation />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <AboutSection />
        <NewsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
