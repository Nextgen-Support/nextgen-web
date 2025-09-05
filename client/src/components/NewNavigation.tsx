import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const lastScrollY = useRef(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const bannerHeight = 600; // Adjust this to match your banner height
      const isHomePage = window.location.pathname === '/';
      
      // Always show when at the top of the page or when in banner area
      if (currentScrollY <= 100 || (isHomePage && currentScrollY < bannerHeight)) {
        setIsVisible(true);
      } else {
        // Hide when scrolling down beyond banner, show when scrolling up
        const scrollingDown = currentScrollY > lastScrollY.current && currentScrollY > bannerHeight;
        setIsVisible(!scrollingDown);
      }
      
      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleMobileServices = () =>
    setIsMobileServicesOpen(!isMobileServicesOpen);
  
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleMobileCategory = () =>
    setIsMobileCategoryOpen(!isMobileCategoryOpen);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-transform duration-300 transform ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
  } ${isScrolled ? 'py-2 bg-black/90 backdrop-blur-sm' : 'py-4'}`;

  // Navigation style with proper TypeScript types
  const navStyle: React.CSSProperties = {
    backgroundImage: "url('/bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Slightly transparent black overlay
    color: "white",
    boxShadow: "none",
    transition: "all 0.3s ease-in-out",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    boxSizing: "border-box" as const,
    textShadow: "0 0 0 transparent !important",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    filter: "none",
    WebkitFilter: "none",
    WebkitTextStroke: "0",
    outline: "none",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  };

  return (
    <div className={navClasses} style={navStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 no-underline"
              style={{
                textDecoration: "none",
                textShadow: "none !important",
                WebkitTextStroke: "0 !important",
              }}
              onClick={() => {
                setIsMenuOpen(false);
                setIsVisible(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  filter: "none !important",
                  WebkitFilter: "none !important",
                  textShadow: "none !important",
                }}
              >
                <img
                  className="h-14 w-auto"
                  src="/asset/image/logo.png"
                  alt="Nextgen Technologies"
                  style={{
                    filter: "none !important",
                    WebkitFilter: "none !important",
                    textShadow: "none !important",
                    WebkitTextStroke: "0 !important",
                  }}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 no-underline"
                style={{ textShadow: "none" }}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsVisible(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </Link>

              <div className="relative" ref={servicesRef}>
                <button
                  onClick={toggleServices}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 flex items-center no-underline"
                  style={{ textShadow: "none" }}
                >
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isServicesOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black/80 backdrop-blur-sm border border-white/10">
                    <div className="py-1">
                      <Link
                        to="/services/document-management"
                        className="block px-4 py-2 text-sm text-green-400 hover:bg-white/10"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Document Management
                      </Link>
                      <Link
                        to="/services/cctv"
                        className="block px-4 py-2 text-sm text-green-400 hover:bg-white/10"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        CCTV Solutions
                      </Link>
                      {/* ISP Services temporarily disabled
                      <Link
                        to="/services/isp"
                        className="block px-4 py-2 text-sm text-green-400 hover:bg-white/10"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        ISP Services
                      </Link>
                      */}
                      <Link
                        to="/services/web-hosting"
                        className="block px-4 py-2 text-sm text-green-400 hover:bg-white/10"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Web and Domain Hosting
                      </Link>
                      <Link
                        to="/services/security"
                        className="block px-4 py-2 text-sm text-green-400 hover:bg-white/10"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Security Solutions
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={categoryRef}>
                <button
                  onClick={toggleCategory}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 flex items-center no-underline"
                  style={{ textShadow: "none" }}
                >
                  Category
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isCategoryOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isCategoryOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/80 backdrop-blur-sm border border-white/10">
                    <div className="py-1">
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-sm text-green-400 hover:bg-white/10"
                        onClick={() => {
                          setIsCategoryOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        Products
                      </Link>
                      <Link
                        to="/projects"
                        className="block px-4 py-2 text-sm text-green-400 hover:bg-white/10"
                        onClick={() => {
                          setIsCategoryOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        Projects
                      </Link>
                      <Link
                        to="/news"
                        className="block px-4 py-2 text-sm text-green-400 hover:bg-white/10"
                        onClick={() => {
                          setIsCategoryOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        News
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/#about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 no-underline"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
              >
                About Us
              </Link>
              <Link
                to="/#contact"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 no-underline"
                onClick={(e) => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    e.preventDefault();
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                  setIsVisible(true); // Ensure nav is visible after click
                }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={toggleMobileCategory}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              >
                <span>Category</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isMobileCategoryOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileCategoryOpen && (
                <div className="pl-4">
                  <Link
                    to="/products"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:bg-white/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    to="/projects"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:bg-white/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/news"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:bg-white/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={toggleMobileServices}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isMobileServicesOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/services/web-hosting"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:bg-white/20"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Web and Domain Hosting
                  </Link>
                  <Link
                    to="/services/document-management"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:bg-white/20"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Document Management
                  </Link>
                  <Link
                    to="/services/cctv"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:bg-white/20"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    CCTV Solutions
                  </Link>
                  {/* ISP Services temporarily disabled
                  <Link
                    to="/services/isp"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:bg-white/20"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    ISP Services
                  </Link>
                  */}
                  <Link
                    to="/services/security"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-400 hover:bg-white/20"
                    onClick={() => {
                      setIsMobileServicesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Security Solutions
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#products"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Products
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              About Us
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Projects
            </a>
            <a
              href="#news"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              News
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
