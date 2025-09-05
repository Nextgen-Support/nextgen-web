import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const cardData = [
  {
    title: "Domain Services",
    description: "Professional domain registration and management",
    image: "/asset/image/domain.png"
  },
  {
    title: "CCTV Solutions",
    description: "Advanced security camera systems",
    image: "/asset/image/cctv1.png"
  },
  {
    title: "Document Management",
    description: "Secure and efficient document handling",
    image: "/asset/image/dokmee-card.png"
  }
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-rotate cards when in view
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      const isHeroVisible = (
        rect.top >= -rect.height && 
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + rect.height
      );

      setIsVisible(isHeroVisible);
      
      if (isHeroVisible) {
        startAutoRotate();
      } else {
        clearInterval(timer);
      }
    };

    const startAutoRotate = () => {
      clearInterval(timer); // Clear any existing timer
      timer = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % cardData.length);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 1000);
        }, 1000);
      }, 5000);
    };

    // Initial check
    handleScroll();
    
    // Set up scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Removed scroll handling as it's no longer needed for the image carousel

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        marginTop: "0",
        paddingTop: "4rem",
        position: "relative",
        zIndex: 10,
      }}
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
              target.style.background =
                "linear-gradient(to bottom right, #1e3a8a, #4c1d95)";
              target.src = "";
            }}
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
      </div>
      {/* Rotating Cards Sidebar */}
      <div 
        className={`hidden md:flex w-80 flex-shrink-0 z-10 mt-16 fixed left-4 transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}
      >
        <div className="relative w-full">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex 
                  ? 'opacity-100 z-10'
                  : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <div 
                className="bg-white rounded-xl shadow-xl overflow-hidden w-full h-[320px] relative"
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    filter: 'saturate(1.1) brightness(1.05)',
                    WebkitFilter: 'saturate(1.1) brightness(1.05)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Dots */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-2">
            {cardData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentImageIndex(index);
                    setIsTransitioning(false);
                  }, 100);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`View card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 lg:px-12 py-12">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            POWERING YOUR BUSINESS THROUGH SMART ICT SOLUTIONS
          </h1>
          <p className="text-3xl md:text-4xl text-yellow-300 mb-8">
            "Secure, Scalable, Future-Ready"
          </p>
          <div className="mt-20">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
