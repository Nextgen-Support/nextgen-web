import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-12 bg-gray-90 w-full min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Contact Us</h2>
        
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Form - Takes 3/4 width on large screens */}
            <div className="w-full lg:w-3/4 p-6">
              <ContactForm />
            </div>
            
            {/* Contact Information - Takes 1/4 width on large screens */}
            <div className="w-full lg:w-1/4 bg-gray-800 p-6">
              <h3 className="text-xl font-bold mb-6 text-white">Our Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-1">Phone</h3>
                    <p className="text-gray-300 text-sm">+675 325 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-1">Email</h3>
                    <p className="text-gray-300 text-sm">enquiry@nextgenpng.net</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-1">Address</h3>
                    <p className="text-gray-300 text-sm">
                      Mutual Rumana Building - Waigani Sect. 405. Lot 12 & 13, Port Moresby, National Capital District
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 pt-4 border-t border-gray-700">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300 text-sm">
                      Mon-Fri: 8:00 AM - 5:00 PM<br />
                      Sat: 9:00 AM - 1:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
