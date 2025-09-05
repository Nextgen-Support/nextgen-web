import React from 'react';
import { Link } from 'react-router-dom';

const ISPServices = () => {
  return (
    <div className="bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Side-by-Side Layout */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16 pt-8">
          {/* Title Section */}
          <div className="md:w-1/2">
            <div className="sticky top-8">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">NEXTGEN</span>
                <span className="block text-green-600 text-4xl md:text-5xl">INTERNET PLANS</span>
                <span className="block text-green-600 text-3xl md:text-4xl">POWERED FOR YOUR WORLD</span>
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:text-lg md:mt-6 md:text-xl max-w-xl">
                Perfect for homes, small offices or remote teams!
              </p>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              {/*<img 
                src="/asset/image/isp.jpg" 
                alt="ISP Services"
                className="w-full h-auto max-h-[600px] object-contain"
                loading="lazy"
              />*/}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Internet Solution?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team can design a custom internet solution tailored to your specific needs and budget.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ISPServices;
