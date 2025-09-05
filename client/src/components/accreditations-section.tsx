import React from "react";

const accreditations = [
  { 
    name: "Holowits", 
    logo: "/asset/image/holowits.png",
    description: "Certified Partner"
  },
  { 
    name: "Dokmee", 
    logo: "/asset/image/dokmee.png",
    description: "Authorized Reseller"
  }
];

export default function AccreditationsSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Accreditations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {accreditations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <img 
                  src={item.logo} 
                  alt={`${item.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            All our accreditations are available upon request. Contact us for
            more information about our certifications.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Request Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
