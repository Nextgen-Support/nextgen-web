import React from 'react';

const CCTVSolutionsPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-white">CCTV Solutions</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Our comprehensive CCTV solutions provide reliable surveillance and security for businesses and homes, 
            with high-definition video quality and advanced features for maximum protection.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Our CCTV Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>HD and 4K CCTV camera installation</li>
              <li>IP and analog camera systems</li>
              <li>24/7 remote monitoring solutions</li>
              <li>Motion detection and alerts</li>
              <li>Night vision and thermal imaging</li>
              <li>Cloud and local storage options</li>
              <li>Maintenance and support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCTVSolutionsPage;
