import React from 'react';

const CCTVSolutionsPage = () => {
  return (
    <div className="relative min-h-screen pt-24 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        >
          <source src="/asset/Videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Static banner for mobile with fallback gradient */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/asset/image/static banner.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = '';
              target.className = 'w-full h-full bg-gradient-to-br from-blue-900 to-black';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl font-bold text-center my-12 text-green-400">CCTV Solutions</h1>
        <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm mb-8">
          <p className="text-lg text-white mb-6">
            Our comprehensive CCTV solutions provide reliable surveillance and security for businesses and homes, 
            with high-definition video quality and advanced features for maximum protection.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Our CCTV Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-white">HD and 4K CCTV camera installation</li>
              <li className="text-white">IP and analog camera systems</li>
              <li className="text-white">24/7 remote monitoring solutions</li>
              <li className="text-white">Motion detection and alerts</li>
              <li className="text-white">Night vision and thermal imaging</li>
              <li className="text-white">Cloud and local storage options</li>
              <li className="text-white">Maintenance and support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCTVSolutionsPage;
