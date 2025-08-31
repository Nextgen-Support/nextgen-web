import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
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
                className="text-[#1877F2] hover:text-[#166FE5] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nextgen-technology-limited-png/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#004182] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-8 w-8"
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
                    window.location.href = '/services/document-management';
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
                    window.location.href = '/services/cctv';
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
                    window.location.href = '/services/isp';
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
                    window.location.href = '/services/web-hosting';
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
                    window.location.href = '/services/security';
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
                  href="tel:+6753252025"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  +675 325 2025
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:enquiry@nextgenpng.net"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  enquiry@nextgenpng.net
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span className="text-white">
                  Mutual Rumana Building - Waigani Sect. 405. Lot 12 & 13,
                  <br />
                  Port Moresby, National Capital District
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Nextgen Technology. All rights reserved. Technological
            solutions for organizations.
          </p>
        </div>
      </div>
    </footer>
  );
}
