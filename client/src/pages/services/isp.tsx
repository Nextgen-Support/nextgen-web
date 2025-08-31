import React from 'react';

const ISPServicesPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12">ISP Services</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Our Internet Service Provider (ISP) solutions deliver high-speed, reliable internet connectivity 
            for businesses of all sizes, with enterprise-grade infrastructure and 24/7 support.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Internet Solutions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dedicated fiber optic internet</li>
              <li>Business broadband solutions</li>
              <li>Wireless point-to-point connections</li>
              <li>Leased line services</li>
              <li>Managed network services</li>
              <li>24/7 technical support</li>
              <li>Service Level Agreements (SLAs)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISPServicesPage;
