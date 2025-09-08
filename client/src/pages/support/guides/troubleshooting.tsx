import React from 'react';
import { Link } from 'react-router-dom';

const TroubleshootingGuide = () => {
  const commonIssues = [
    {
      problem: "Device won't power on",
      solution: 'Check if the power adapter is properly connected to both the device and power outlet. Try a different power outlet or cable if available.',
      icon: '🔌'
    },
    {
      problem: "Can't connect to Wi-Fi",
      solution: 'Ensure you are using the correct Wi-Fi password. Move the device closer to your router or reset your network settings in the app.',
      icon: '📶'
    },
    {
      problem: 'Poor video quality',
      solution: 'Check your internet connection speed. Clean the camera lens and ensure there is adequate lighting in the area.',
      icon: '📹'
    },
    {
      problem: 'App not working',
      solution: 'Update to the latest version of the app. If the problem persists, try uninstalling and reinstalling the app.',
      icon: '📱'
    },
    {
      problem: 'Motion detection not working',
      solution: 'Check the motion detection settings in the app. Ensure the sensitivity is set appropriately and the detection zones are properly configured.',
      icon: '👣'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Troubleshooting Guide</h1>
          <p className="text-xl text-gray-600">Solutions to common issues and problems</p>
        </div>

        <div className="space-y-6">
          {commonIssues.map((issue, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{issue.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{issue.problem}</h3>
                    <p className="text-gray-700">{issue.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Troubleshooting</h2>
          
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Performing a Factory Reset</h3>
            <p className="text-gray-700 mb-4">
              If you're experiencing persistent issues, you may need to perform a factory reset:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Locate the reset button on your device (usually a small hole)</li>
              <li>Use a paperclip to press and hold the button for 10 seconds</li>
              <li>Wait for the device to restart (this may take a few minutes)</li>
              <li>Set up the device again using the mobile app</li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Updating Firmware</h3>
            <p className="text-gray-700 mb-4">
              Ensure your device has the latest firmware for optimal performance:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Open the companion app</li>
              <li>Go to Device Settings</li>
              <li>Select Firmware Update</li>
              <li>Follow the on-screen instructions</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Still need help?</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      If you've tried all the above steps and are still experiencing issues, please 
                      <Link to="/support/request" className="font-medium underline text-yellow-700 hover:text-yellow-600">
                        contact our support team
                      </Link> for further assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingGuide;
