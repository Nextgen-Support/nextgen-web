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
          className="w-full h-full object-cover"
        >
          <source src="/asset/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center lg:text-left h-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
          <div className="flex flex-col h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {/* POWERING YOUR BUSINESS THROUGH SMART ICT SOLUTIONS */}
            </h1>
            <p className="text-xl text-yellow-300 mb-8">
              {/* "Secure, Scalable, Future-Ready" */}
            </p>
            <div className="mt-auto w-full">
              <div className="flex justify-center">
                <HeroButton onClick={() => scrollToSection("services")}>
                  <span>Explore Our Services</span>
                </HeroButton>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          {/* <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern technology workspace with computers and digital interfaces"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
