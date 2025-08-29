import { CheckCircle, Shield, Users, Clock } from "lucide-react";
import { Card } from "./ui/card";

const reasons = [
  {
    icon: CheckCircle,
    title: "Quality Service",
    description: "We deliver top-notch solutions tailored to your needs with attention to detail and excellence.",
  },
  {
    icon: Shield,
    title: "Reliable Support",
    description: "Our dedicated team provides 24/7 support to ensure your systems run smoothly.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced professionals bring years of industry knowledge to every project.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We value your time and ensure all projects are completed within the agreed timeline.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nextgen Technology
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <reason.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
