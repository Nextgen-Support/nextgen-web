import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-sm border-b border-white/10 shadow-md"
          : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/asset/image/logo.png"
              alt="Nextgen Technologies Logo"
              className="h-16 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 mr-auto flex items-baseline space-x-10">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 text-lg rounded-md transition-all duration-300 ease-in-out"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 text-lg rounded-md transition-all duration-300 ease-in-out"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 text-lg rounded-md transition-all duration-300 ease-in-out"
              >
                News & Updates
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 text-lg rounded-md transition-all duration-300 ease-in-out"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-netgen-primary hover:bg-gray-100 flex items-center gap-2 px-6 py-2 text-base transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-md"
            >
              {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-netgen-primary border-t border-white border-opacity-20">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-6 py-3 text-lg font-medium w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-6 py-3 text-lg font-medium w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-6 py-3 text-lg font-medium w-full text-left"
            >
              News & Updates
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:bg-white hover:bg-opacity-20 block px-6 py-3 text-lg font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
