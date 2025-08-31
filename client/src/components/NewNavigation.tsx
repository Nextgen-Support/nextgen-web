import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsVisible(!(currentScrollY > lastScrollY.current && currentScrollY > 100));
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleMobileServices = () => setIsMobileServicesOpen(!isMobileServicesOpen);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
  }`;
  
  // Navigation style with proper TypeScript types
  const navStyle: React.CSSProperties = {
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    color: isScrolled ? '#111827' : 'white',
    boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'none',
    boxSizing: 'border-box' as const,
  };

  return (
    <div className={navClasses} style={navStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-14 w-auto"
                src="/asset/image/logo.png"
                alt="Nextgen Technologies"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20">
                Home
              </Link>
              
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={toggleServices}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 flex items-center"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link to="/services/document-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Document Management
                      </Link>
                      <Link to="/services/cctv" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        CCTV Solutions
                      </Link>
                      <Link to="/services/isp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        ISP Services
                      </Link>
                      <Link to="/services/web-hosting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Web Hosting
                      </Link>
                      <Link to="/services/security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Security Solutions
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20">
                Products
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20">
                About Us
              </Link>
              <Link to="/projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20">
                Projects
              </Link>
              <Link to="/news" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20">
                News
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20">
              Home
            </Link>
            
            <div>
              <button
                onClick={toggleMobileServices}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'transform rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link to="/services/document-management" className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:bg-white/20">
                    Document Management
                  </Link>
                  <Link to="/services/cctv" className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:bg-white/20">
                    CCTV Solutions
                  </Link>
                  <Link to="/services/isp" className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:bg-white/20">
                    ISP Services
                  </Link>
                  <Link to="/services/security" className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:bg-white/20">
                    Security Solutions
                  </Link>
                </div>
              )}
            </div>

            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20">
              Products
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20">
              About Us
            </Link>
            <Link to="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20">
              Projects
            </Link>
            <Link to="/news" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20">
              News
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
