import React from 'react';

const GettingStartedGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Getting Started Guide</h1>
          <p className="text-xl text-gray-600">Learn how to set up and use our products effectively</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started with Your Product</h2>
          
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1. Unboxing</h3>
            <p className="text-gray-700 mb-4">
              When you receive your package, please check that all items are included according to the packing list.
              You should find:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Main device unit</li>
              <li>Power adapter and cable</li>
              <li>Mounting hardware (if applicable)</li>
              <li>Quick start guide</li>
              <li>Warranty information</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2. Initial Setup</h3>
            <ol className="list-decimal pl-6 space-y-4 mb-6">
              <li>Find a suitable location for your device with good Wi-Fi signal</li>
              <li>Connect the power adapter to the device and plug it in</li>
              <li>Download and install the companion app from the App Store or Google Play</li>
              <li>Follow the in-app instructions to connect your device to your Wi-Fi network</li>
              <li>Create an account or log in to your existing account</li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">3. Basic Configuration</h3>
            <p className="text-gray-700 mb-4">
              After setup, you can customize your device settings through the app:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Set up motion detection zones</li>
              <li>Configure notification preferences</li>
              <li>Set up cloud storage or local storage options</li>
              <li>Create user accounts for family members or employees</li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg mt-8">
              <h4 className="font-semibold text-blue-800 mb-2">Need Help?</h4>
              <p className="text-blue-700">
                If you encounter any issues during setup, please visit our 
                <a href="/support/faq" className="text-blue-600 hover:underline ml-1">FAQ page</a> or 
                <a href="/contact" className="text-blue-600 hover:underline ml-1">contact our support team</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedGuide;
