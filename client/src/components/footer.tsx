import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black/80 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nextgen Technologies</h3>
            <p className="text-sm text-gray-300 mb-6 max-w-md">
              Provider of innovative technology solutions and services for
              businesses of all sizes. We specialize in delivering cutting-edge
              IT solutions tailored to your needs.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/nextgenICTpng"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-1.5 rounded transition-colors hover:bg-gray-100"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nextgen-technology-limited-png/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] p-1.5 rounded transition-colors hover:bg-[#004182]"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white mb-4 font-medium text-lg">Services</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services/document-management"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/services/document-management";
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer block"
                >
                  Document Management Systems
                </a>
              </li>
              <li>
                <a
                  href="/services/cctv"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/services/cctv";
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer block"
                >
                  CCTV & Security Solutions
                </a>
              </li>
              <li>
                <a
                  href="/services/isp"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/services/isp";
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer block"
                >
                  ISP & Network Services
                </a>
              </li>
              <li>
                <a
                  href="/services/web-hosting"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/services/web-hosting";
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer block"
                >
                  Web and Domain Hosting
                </a>
              </li>
              <li>
                <a
                  href="/services/security"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/services/security";
                  }}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer block"
                >
                  IT Security Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white mb-4 font-medium text-lg">Contact Us</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MessageCircle className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="tel:[your new work phone]"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  +675 325 2023
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:[your new work email]"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  support@nextgenpng.net
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span className="text-white">
                  Mutual Rumana Building Waigani, Port Moresby
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Nextgen Technology Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
