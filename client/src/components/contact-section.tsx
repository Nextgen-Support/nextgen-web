import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-atech-slate-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-atech-slate-600 max-w-3xl mx-auto">
            Contact us through WhatsApp or email to discuss your technology needs and get started on your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-slate-50">
            <CardContent className="p-8 text-center">
              <div className="bg-atech-accent rounded-lg p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MessageCircle className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-atech-slate-900 mb-4">WhatsApp</h3>
              <p className="text-atech-slate-600 mb-4">Contact us directly on WhatsApp for quick assistance</p>
              <a 
                href="https://wa.me/67571570096" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-atech-accent hover:text-green-600 transition-colors font-semibold text-lg"
              >
                +67571570096
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-50">
            <CardContent className="p-8 text-center">
              <div className="bg-atech-primary rounded-lg p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Mail className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-atech-slate-900 mb-4">Email</h3>
              <p className="text-atech-slate-600 mb-4">Send us an email with your project details</p>
              <a 
                href="mailto:info@atech-png.com.pg" 
                className="text-atech-primary hover:text-blue-800 transition-colors font-semibold text-lg"
              >
                info@atech-png.com.pg
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-50 md:col-span-2 lg:col-span-1">
            <CardContent className="p-8 text-center">
              <div className="bg-atech-secondary rounded-lg p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Globe className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-atech-slate-900 mb-4">Global Services</h3>
              <p className="text-atech-slate-600 mb-4">Available worldwide for all service inquiries</p>
              <div className="text-atech-slate-600">
                <p className="font-medium">Mon-Fri: 8AM-6PM</p>
                <p className="font-medium">Sat: 9AM-4PM</p>
                <p className="text-sm">Emergency support available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}