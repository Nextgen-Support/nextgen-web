import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">NextDev Solutions</h3>
            <p className="text-sm text-slate-300 mb-6 max-w-md">
              We are eager to help small businesses and organizations with web development, ERP systems, IT services, and airline ticketing for individuals or groups from any location any airline any time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/67571570096"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nextdev-accent rounded-lg p-3 hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@nextdev-png.com"
                className="bg-nextdev-primary rounded-lg p-3 hover:bg-blue-800 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Web Design & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  ERP System Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  IT Support & Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Airline Ticketing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Website Hosting & Domains
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom Software Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                <a
                  href="https://wa.me/67571570096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +67571570096
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a
                  href="mailto:info@nextdev-png.com"
                  className="hover:text-white transition-colors"
                >
                  info@nextdev-png.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌐</span>
                Global Services Available
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 NextDev Solutions. All rights reserved. Technological solutions for organizations.</p>
        </div>
      </div>
    </footer>
  );
}
