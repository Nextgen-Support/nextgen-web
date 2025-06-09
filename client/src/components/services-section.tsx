import { Card, CardContent } from "@/components/ui/card";
import { Code, Wrench, Building, Plane, Laptop, Check } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Custom website design and development services that create engaging, responsive, and professional online experiences for your business.",
    features: ["Responsive Design", "Custom Development", "SEO Optimization"],
    bgColor: "bg-atech-primary"
  },
  {
    icon: Wrench,
    title: "Website Updates & Support",
    description: "Keep your existing website running smoothly with our maintenance, updates, and technical support services.",
    features: ["Regular Updates", "Security Monitoring", "Technical Support"],
    bgColor: "bg-atech-secondary"
  },
  {
    icon: Building,
    title: "ERP Software Solutions",
    description: "Comprehensive ERP systems designed for small to medium enterprises, schools, churches, and NGOs to streamline operations.",
    features: ["Custom ERP Development", "Implementation Support", "Training & Documentation"],
    bgColor: "bg-atech-accent"
  },
  {
    icon: Plane,
    title: "Airline Ticketing Services",
    description: "Professional airline ticket booking assistance for any airlines across the globe, available from any location worldwide.",
    features: ["Global Airlines Access", "Best Price Guarantee", "24/7 Support"],
    bgColor: "bg-atech-primary"
  },
  {
    icon: Laptop,
    title: "Hardware & Software Services",
    description: "Complete computer hardware and software installation, configuration, and troubleshooting services for all your IT needs.",
    features: ["Hardware Installation", "Software Configuration", "System Troubleshooting"],
    bgColor: "bg-atech-secondary"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-atech-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-atech-slate-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions tailored to meet your business needs across multiple industries and sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`bg-slate-50 hover:shadow-lg transition-shadow ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <CardContent className="p-8">
                  <div className={`${service.bgColor} rounded-lg w-16 h-16 flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-atech-slate-900 mb-4">{service.title}</h3>
                  <p className="text-atech-slate-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="text-sm text-atech-slate-600 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-atech-accent mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
