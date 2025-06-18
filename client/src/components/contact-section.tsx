import { MessageCircle, Mail, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nextdev-slate-900 mb-4">Get In Touch</h2>
          <p className="text-sm text-nextdev-slate-600 max-w-2xl mx-auto">
            Contact us through WhatsApp or email to discuss and get started on your next project.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-nextdev-accent rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <MessageCircle className="text-white h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-nextdev-slate-900 mb-2">WhatsApp</h3>
            <p className="text-nextdev-slate-600 mb-2 text-sm">
              Contact us directly on WhatsApp for quick assistance.
            </p>
            <a
              href="https://wa.me/67571570096"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nextdev-accent hover:text-green-600 font-semibold text-base transition-colors"
            >
              +67571570096
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-nextdev-primary rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <Mail className="text-white h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-nextdev-slate-900 mb-2">Email</h3>
            <p className="text-nextdev-slate-600 mb-2 text-sm">
              Send us an email with your project details.
            </p>
            <a
              href="mailto:info@nextdev-solutions.com"
              className="text-nextdev-primary hover:text-blue-800 font-semibold text-base transition-colors"
            >
              info@nextdev-solutions.com
            </a>
          </div>

          {/* Global Services */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-nextdev-secondary rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
              <Globe className="text-white h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-nextdev-slate-900 mb-2">Global Services</h3>
            <p className="text-nextdev-slate-600 mb-2 text-sm">
              Available worldwide for all service inquiries.
            </p>
            <div className="text-nextdev-slate-600 text-sm leading-relaxed">
              <p className="font-medium">Mon–Fri: 8AM–6PM</p>
              <p className="font-medium">Sun: Appointment Only</p>
              <p className="text-xs text-gray-500">Emergency support available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
