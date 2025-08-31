import React from 'react';

const ISPServicesPage = () => {
  return (
    <div className="relative min-h-screen pt-24 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/asset/Videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl font-bold text-center my-12 text-green-400">ISP Services</h1>
        <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm mb-8">
          <p className="text-lg text-white mb-6">
            Our Internet Service Provider (ISP) solutions deliver high-speed, reliable internet connectivity 
            for businesses of all sizes, with enterprise-grade infrastructure and 24/7 support.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Internet Solutions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-white">Dedicated fiber optic internet</li>
              <li className="text-white">Business broadband solutions</li>
              <li className="text-white">Wireless point-to-point connections</li>
              <li className="text-white">Leased line services</li>
              <li className="text-white">Managed network services</li>
              <li className="text-white">24/7 technical support</li>
              <li className="text-white">Service Level Agreements (SLAs)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISPServicesPage;
