import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nextdev-slate-900 mb-4">Get In Touch</h2>
          <p className="text-sm text-nextdev-slate-600 max-w-3xl mx-auto">
            Contact us through WhatsApp or email to discuss your technology needs and get started on your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 max-w-4xl mx-auto">
          <Card className="bg-gray-300">
            <CardContent className="p-3 text-center">
              <div className="bg-nextdev-accent rounded-lg p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MessageCircle className="text-white h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-nextdev-slate-900 mb-4">WhatsApp</h3>
              <p className="text-nextdev-slate-600 mb-4">Contact us directly on WhatsApp for quick assistance</p>
              <a 
                href="https://wa.me/67571570096" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-nextdev-accent hover:text-green-600 transition-colors font-semibold text-lg"
              >
                +67571570096
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-300">
            <CardContent className="p-3 text-center">
              <div className="bg-nextdev-primary rounded-lg p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Mail className="text-white h-8 w-8" />
              </div>
              <h3 className="text-sm font-semibold text-nextdev-slate-900 mb-4">Email</h3>
              <p className="text-nextdev-slate-600 mb-4">Send us an email with your project details</p>
              <a 
                href="mailto:info@nextdev-solutions.com" 
                className="text-nextdev-primary hover:text-blue-800 transition-colors font-semibold text-lg"
              >
                info@nextdev-solutions.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-300 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="bg-nextdev-secondary rounded-lg p-3 w-12 h-12 mx-auto mb-5 flex items-center justify-center">
                <Globe className="text-white h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-nextdev-slate-900 mb-3">Global Services</h3>
              <p className="text-nextdev-slate-600 mb-3">Available worldwide for all service inquiries</p>
              <div className="text-nextdev-slate-600 text-sm">
                <p className="font-medium">Mon-Fri: 8AM-6PM</p>
                <p className="font-medium">Sun: On Appointment basis</p>
                <p className="text-sm">Emergency support available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}