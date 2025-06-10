import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import AboutSection from "../components/about-section";
import NewsSection from "../components/news-section";
import CTASection from "../components/cta-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
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
