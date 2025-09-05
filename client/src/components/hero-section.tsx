import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const categories = [
  { name: "Document Management", link: "/services/document-management" },
  { name: "CCTV Solutions", link: "/services/cctv" },
  { name: "Networking", link: "/products?category=networking" },
  { name: "Web and Domain Hosting", link: "/services/web-hosting" },
  { name: "Security", link: "/services/security" },
  { name: "ISP Services", link: "/services/isp" },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isHomePage, setIsHomePage] = useState(
    window.location.pathname === "/"
  );

  // Check if we're on the home page
  useEffect(() => {
    const handleRouteChange = () => {
      const isHome = window.location.pathname === "/";
      setIsHomePage(isHome);
      // Always show when returning to home page if at the top
      if (isHome && window.scrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleRouteChange();

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

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

      // Only show categories when at the top of the home page
      if (isHomePage) {
        const isAtTop = currentScrollPos < 100; // 100px threshold from top

        if (currentScrollPos === 0) {
          // Always show when exactly at the top
          setIsVisible(true);
        } else if (currentScrollPos < prevScrollPos && currentScrollPos < 300) {
          // Show when scrolling up near the top
          setIsVisible(true);
        } else if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
          // Hide when scrolling down past threshold
          setIsVisible(false);
        }
      } else {
        // Not on home page, ensure hidden
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, prevScrollPos, isHomePage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      {/* Categories Sidebar */}
      <div
        className={`hidden md:flex w-64 bg-black/90 flex-shrink-0 z-10 h-auto max-h-[60vh] mt-10 fixed left-0 overflow-y-auto transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
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
