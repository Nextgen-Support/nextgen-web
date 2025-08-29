import { HeroButton } from "./hero-button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-between text-white overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        >
          <source src="/asset/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Static banner for mobile with fallback gradient */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/asset/image/static banner.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.background = 'linear-gradient(to bottom right, #1e3a8a, #4c1d95)';
              target.src = '';
            }}
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
      </div>
      <div className="w-full h-full flex flex-col justify-between relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
              POWERING YOUR BUSINESS THROUGH SMART ICT SOLUTIONS
            </h1>
            <p className="text-4xl text-yellow-300 mb-2">
              "Secure, Scalable, Future-Ready"
            </p>
          </div>
        </div>
        <div className="w-full pb-12">
          <div className="flex justify-center">
            <HeroButton onClick={() => scrollToSection("services")}>
              <span>Explore Our Services</span>
            </HeroButton>
          </div>
        </div>
      </div>

      {/* Right Side Image - Commented out
      <div className="hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
          alt="Modern technology workspace with computers and digital interfaces"
          className="rounded-xl shadow-2xl w-full h-auto"
        />
      </div>
      */}
    </section>
  );
}
