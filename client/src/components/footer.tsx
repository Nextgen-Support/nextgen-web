import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-netgen-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Netgen Technologies</h3>
            <p className="text-sm text-white mb-6 max-w-md">
              Leading provider of innovative technology solutions and services for businesses of all sizes. We specialize in delivering cutting-edge IT solutions tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-netgen-accent rounded-lg p-3 hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@netgentech.com"
                className="bg-netgen-primary rounded-lg p-3 hover:bg-red-700 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:opacity-80 transition-opacity text-left"
                >
                  Web Design & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:opacity-80 transition-opacity text-left"
                >
                  ERP System Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:opacity-80 transition-opacity text-left"
                >
                  IT Support & Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:opacity-80 transition-opacity text-left"
                >
                  Airline Ticketing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:opacity-80 transition-opacity text-left"
                >
                  Website Hosting & Domains
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:opacity-80 transition-opacity text-left"
                >
                  Custom Software Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                <a
                  href="https://wa.me/67571570096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  +67571570096
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a
                  href="mailto:info@nextdev-png.com"
                  className="text-white hover:opacity-80 transition-opacity"
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
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-white">
          <p>&copy; 2025 NextDev Solutions. All rights reserved. Technological solutions for organizations.</p>
        </div>
      </div>
    </footer>
  );
}
