import React from 'react';

const SecuritySolutionsPage = () => {
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
        <h1 className="text-4xl font-bold text-center my-12 text-green-400">Security Solutions</h1>
        <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm mb-8">
          <p className="text-lg text-white mb-6">
            Our comprehensive security solutions protect your business from digital threats, 
            ensuring your data and systems remain secure and compliant.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Security Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-white">Network Security</li>
              <li className="text-white">Endpoint Protection</li>
              <li className="text-white">Email Security</li>
              <li className="text-white">Data Encryption</li>
              <li className="text-white">Security Audits & Assessments</li>
              <li className="text-white">Incident Response</li>
              <li className="text-white">Security Awareness Training</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Why Choose Us</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-white">24/7 Security Monitoring</li>
              <li className="text-white">Proactive Threat Detection</li>
              <li className="text-white">Custom Security Solutions</li>
              <li className="text-white">Compliance Management</li>
              <li className="text-white">Experienced Security Professionals</li>
              <li className="text-white">Rapid Response Times</li>
              <li className="text-white">Custom Security Solutions</li>
              <li className="text-white">Compliance Management</li>
              <li className="text-white">Experienced Security Professionals</li>
              <li className="text-white">Rapid Response Times</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySolutionsPage;
