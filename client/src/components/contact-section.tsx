import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/85 p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Company Contact Info */}
            <div className="space-y-6">
              <div className="flex flex-col items-center mb-8">
                <img
                  src="/asset/image/logo.png"
                  alt="Nextgen Technology Limited Logo"
                  className="h-16 w-auto mb-8"
                />
                <h2 className="text-lg font-bold text-white text-center">
                  Submit your contact details and Nextgen Technology Limited
                  will contact you to serve your needs
                </h2>
              </div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-7 w-7 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-300 text-base">+675 325 2025</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-7 w-7 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-300 text-base">enquiry@nextgenpng.net</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-7 w-7 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-300 text-base">Mon-Fri: 8AM-5PM</p>
                    <p className="text-gray-300 text-base">Sat: 9AM-1PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-7 w-7 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <span className="text-white text-base">
                      Mutual Rumana Building - Waigani Sect. 405. Lot 12 & 13,
                      <br />
                      Port Moresby, National Capital District
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gray-800 p-6 pb-4 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
