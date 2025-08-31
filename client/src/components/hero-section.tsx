import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const categories = [
  { name: "Document Management", link: "/services/document-management" },
  { name: "CCTV Solutions", link: "/services/cctv" },
  { name: "Networking", link: "/products?category=networking" },
  { name: "Web Hosting", link: "/services/web-hosting" },
  { name: "Security", link: "/services/security" },
  { name: "ISP Services", link: "/services/isp" },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  // Auto-rotate categories
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Show/hide based on scroll direction
      if (isScrollingDown && isVisible) {
        setIsVisible(false);
      } else if (!isScrollingDown && !isVisible) {
        setIsVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black/50"
      style={{
        marginTop: '0',
        paddingTop: '4rem',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        position: 'relative',
        zIndex: 10
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
      {/* Categories Sidebar */}
      <div 
        className={`hidden md:flex w-44 bg-black/90 flex-shrink-0 z-10 h-[calc(80vh-80px)] mt-32 fixed left-0 overflow-y-auto transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-full p-4">
          <h2 className="text-lg font-semibold mb-4 text-yellow-300 border-b border-white/20 pb-2">
            Products & Services
          </h2>
          <ul className="space-y-1">
            {categories.map((category, index) => (
              <li key={index} className="group">
                <Link
                  to={category.link}
                  className="block px-3 py-2 text-sm text-white/90 hover:bg-white/10 rounded transition-colors duration-200 group-hover:translate-x-1"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-between relative z-10 px-4 sm:px-6 lg:px-12 py-12 md:ml-80">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl ml-auto text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              POWERING YOUR BUSINESS THROUGH SMART ICT SOLUTIONS
            </h1>
            <p className="text-3xl md:text-4xl text-yellow-300 mb-2">
              "Secure, Scalable, Future-Ready"
            </p>
          </div>
        </div>
        <div className="w-full pb-12">
          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => scrollToSection("services")}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Explore Our Services
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
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
