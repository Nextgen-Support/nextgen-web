import { CheckCircle } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>

            <ul className="space-y-4 text-3xl">
              {[
                "Data Security - Enterprise-grade protection for your sensitive information",
                "24/7 Support - Round-the-clock assistance whenever you need it",
                "Scalable Solutions - Grow your business without technical limitations",
                "Regional Expertise - Local knowledge with global standards",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Image */}
          <div className="md:w-1/2">
            <img
              src="/asset/image/team.png"
              alt="Our Team"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
