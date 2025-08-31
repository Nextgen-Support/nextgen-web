import React from 'react';

const SecuritySolutionsPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-white">Security Solutions</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Our comprehensive security solutions protect your business from digital threats, 
            ensuring your data and systems remain secure and compliant.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Security Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Network Security</li>
              <li>Endpoint Protection</li>
              <li>Email Security</li>
              <li>Data Encryption</li>
              <li>Security Audits & Assessments</li>
              <li>Incident Response</li>
              <li>Security Awareness Training</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Why Choose Us</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>24/7 Security Monitoring</li>
              <li>Proactive Threat Detection</li>
              <li>Custom Security Solutions</li>
              <li>Compliance Management</li>
              <li>Experienced Security Professionals</li>
              <li>Rapid Response Times</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySolutionsPage;
