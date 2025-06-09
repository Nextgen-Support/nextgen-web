import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-atech-primary to-atech-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Technology Solutions for Your Business
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              ATech Systems delivers comprehensive IT services including web development, ERP solutions, and technical support to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-white text-atech-primary hover:bg-slate-50 px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-atech-primary px-8 py-3"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                View Services
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern technology workspace with computers and digital interfaces" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
