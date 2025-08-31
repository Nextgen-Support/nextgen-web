import {
  Building,
  Code,
  Plane,
  Wrench,
  Computer,
  Server,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom website design and development services",
    features: [
      "Modern UI/UX Design",
      "Custom CMS Development",
      "Mobile-First Approach",
      "SEO-Friendly Code",
      "Fast Loading Optimization",
      "Regular Updates & Maintenance",
    ],
    bgColor: "bg-blue-600",
  },
  {
    icon: Wrench,
    title: "Website Updates & Support",
    description: "Updating existing websites and support",
    features: [
      "Performance Optimization",
      "Security Updates",
      "Content Management",
      "Bug Fixes & Patches",
      "Regular Backups",
      "24/7 Support",
    ],
    bgColor: "bg-green-600",
  },
  {
    icon: Computer,
    title: "Computer Hardware & Software",
    description: "Installation, configuration and troubleshooting",
    features: [
      "Hardware Installation & Setup",
      "Operating System Installation",
      "Software Configuration",
      "Network Setup & Troubleshooting",
      "Data Migration",
      "Security Configuration",
    ],
    bgColor: "bg-blue-600",
  },
  {
    icon: Server,
    title: "Website Hosting Consultation",
    description: "Guidance on website hosting solutions",
    features: [
      "Hosting Provider Analysis",
      "Performance Assessment",
      "Cost-Benefit Analysis",
      "Security Recommendations",
      "Setup Configuration",
      "Ongoing Support",
    ],
    bgColor: "bg-green-600",
  },
  {
    icon: Plane,
    title: "Airline Ticketing Solutions",
    description: "Comprehensive airline ticketing and reservation",
    features: [
      "Global Ticket Booking",
      "Any Airline, Anytime",
      "24/7 Booking Support",
      "Group & Corporate Bookings",
      "Last-Minute Bookings",
    ],
    bgColor: "bg-blue-600",
  },
  {
    icon: Building,
    title: "Custom ERP Solutions",
    description: "Tailored business solutions for your organization",
    features: [
      "Schools", "Churches", "NGOs", "SMEs",
      "Hospitals", "Clinics", "Hotels", "Restaurants",
      "Retail Stores", "Manufacturing", "Transport", "Logistics",
    ],
    bgColor: "bg-green-600",
    twoColumnFeatures: true,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>

        {/* Grid with consistent card heights */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 items-stretch">
          {services.map((service, index) => (
            <div key={index} className="h-full">
              <div 
                className={`relative h-full flex flex-col justify-between overflow-hidden rounded-lg ${service.bgColor} p-4`}
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Icon */}
                <div className="p-2 bg-white/10 rounded-lg w-fit">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-green-400 mt-4 mb-2">{service.title}</h3>
                <p className="text-white/90 mb-4">{service.description}</p>

                {/* Feature list */}
                <ul
                  className={`${
                    service.twoColumnFeatures
                      ? "grid grid-cols-2 gap-x-3"
                      : "space-y-2"
                  } text-white/90 flex-grow`}
                >
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-sm mr-2">•</span>
                      <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
