import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
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
      className={`bg-white border-b border-slate-200 sticky top-0 z-50 transition-shadow ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/asset/image/logo.jpg"
              alt="NextDev Solutions Logo"
              className="h-16 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 mr-auto flex items-baseline space-x-10">
              <button onClick={() => scrollToSection("services")} className="text-nextdev-slate-600 hover:text-nextdev-primary hover:bg-nextdev-300 px-2 py-2 text-lg rounded-md transition-all duration-900 ease-in-out">Services</button>
              <button onClick={() => scrollToSection("about")} className="text-nextdev-slate-600 hover:text-nextdev-primary hover:bg-nextdev-300 px-2 py-2 text-lg rounded-md transition-all duration-900 ease-in-out">About</button>
              <button onClick={() => scrollToSection("news")} className="text-nextdev-slate-600 hover:text-nextdev-primary hover:bg-nextdev-300 px-2 py-2 text-lg rounded-md transition-all duration-900 ease-in-out">News & Updates</button>
              <button onClick={() => scrollToSection("contact")} className="text-nextdev-slate-600 hover:text-nextdev-primary hover:bg-nextdev-300 px-2 py-2 text-lg rounded-md transition-all duration-900 ease-in-out">Contact</button>
              <Button onClick={() => scrollToSection("contact")} className="bg-nextdev-600 text-white hover:bg-nextdev-800">Get Started</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-nextdev-slate-600 hover:text-nextdev-primary">
              {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection("services")} className="text-nextdev-slate-600 hover:text-nextdev-primary block px-3 py-2 text-base font-medium w-full text-left">Services</button>
            <button onClick={() => scrollToSection("about")} className="text-nextdev-slate-600 hover:text-nextdev-primary block px-3 py-2 text-base font-medium w-full text-left">About</button>
            <button onClick={() => scrollToSection("news")} className="text-nextdev-slate-600 hover:text-nextdev-primary block px-3 py-2 text-base font-medium w-full text-left">News & Updates</button>
            <button onClick={() => scrollToSection("contact")} className="text-nextdev-slate-600 hover:text-nextdev-primary block px-3 py-2 text-base font-medium w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
