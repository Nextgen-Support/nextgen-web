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
    <section id="hero" className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Technological Solutions tailored for Business entreprises and organizations
            </h1>
            <p className="text-xl text-yellow-300 mb-8">
              NextDev Solutions is a tech company ready to help small businesses and organizations with web development, ERP software solutions, and IT support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Button 1: Contact Us - text-blue-600 on white background */}
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="bg-transparent text-yellow-300 border-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>

              {/* Button 2: View Services - text-blue-600 on transparent background with white border */}
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                size="lg"
                className="bg-transparent text-yellow-300 border-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                View Services
              </Button>
            </div>
          </div>

          {/* Right Side Image */}
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
