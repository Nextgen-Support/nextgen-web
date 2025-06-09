import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-atech-primary to-atech-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business with Technology?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Get in touch with us today to discuss your technology needs and discover how we can help your business succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-atech-accent text-white hover:bg-green-600 px-8 py-4"
          >
            <a href="https://wa.me/67571570096" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp: +67571570096
            </a>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-atech-primary hover:bg-slate-50 px-8 py-4"
          >
            <a href="mailto:info@atech-png.com.pg">
              <Mail className="mr-3 h-6 w-6" />
              info@atech-png.com.pg
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
