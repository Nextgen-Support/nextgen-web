import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/85 p-6 rounded shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <div className="space-y-6">
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Talk to our Staff today!
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-[0.375rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-[0.375rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-[0.375rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-[0.375rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="accountType"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Account Type *
                    </label>
                    <select
                      id="accountType"
                      className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-[0.375rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                      required
                    >
                      <option value="">Select account type</option>
                      <option value="personal">Personal</option>
                      <option value="business">Business</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="education">Education</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-[0.375rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-[0.375rem] focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-[0.375rem] flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
