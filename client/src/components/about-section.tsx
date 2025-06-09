import { Users, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals dedicated to delivering quality solutions tailored to your specific needs.",
    bgColor: "bg-atech-primary"
  },
  {
    icon: Clock,
    title: "Timely Delivery", 
    description: "We understand the importance of deadlines and ensure project completion within agreed timelines.",
    bgColor: "bg-atech-secondary"
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Comprehensive after-sales support to ensure your systems continue to perform optimally.",
    bgColor: "bg-atech-accent"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaborating on technology solutions in modern office" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-atech-slate-900 mb-6">Why Choose ATech Systems?</h2>
            <p className="text-lg text-atech-slate-600 mb-8">
              We are committed to delivering exceptional technology solutions that drive business growth and operational efficiency. Our comprehensive approach ensures your technology needs are met with professional expertise and ongoing support.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className={`${feature.bgColor} rounded-lg p-2 mr-4 mt-1`}>
                      <IconComponent className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-atech-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-atech-slate-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
