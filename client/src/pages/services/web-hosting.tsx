import React from 'react';

const WebHostingPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12">Web Hosting Services</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Our reliable and secure web hosting solutions ensure your website is fast, secure, 
            and always available to your customers.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Hosting Solutions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shared Hosting</li>
              <li>Virtual Private Servers (VPS)</li>
              <li>Dedicated Servers</li>
              <li>Cloud Hosting</li>
              <li>WordPress Hosting</li>
              <li>Email Hosting</li>
              <li>SSL Certificates</li>
              <li>Domain Registration</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>99.9% Uptime Guarantee</li>
              <li>24/7 Server Monitoring</li>
              <li>Daily Backups</li>
              <li>Free SSL Certificates</li>
              <li>Unlimited Bandwidth</li>
              <li>One-Click Installations</li>
              <li>24/7 Technical Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHostingPage;
