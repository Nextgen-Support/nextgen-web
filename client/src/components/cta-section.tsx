import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to keep your business's online presence?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          As a growing company, we're excited to work with you and help bring your ideas to life. Contact us to discuss your project!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-green-500 text-white hover:bg-green-600 px-8 py-4"
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
            className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4"
          >
            <a href="mailto:info@nextdev-png.com">
              <Mail className="mr-3 h-6 w-6" />
              info@nextdev-png.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
