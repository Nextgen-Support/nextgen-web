import React from 'react';
import { Link } from 'react-router-dom';

const GuidesPage = () => {
  return (
    <div className="space-y-8">
      <div className="mt-12 bg-blue-50 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Setup Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Outlook Guide */}
          <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Outlook Email Setup</h3>
            <p className="text-gray-600 mb-4">Step-by-step guide to configure your email in Microsoft Outlook</p>
            <Link 
              to="/support/guides/outlook-email-setup" 
              className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
            >
              View Guide →
            </Link>
          </div>

          {/* Android Guide */}
          <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Android Email Setup</h3>
            <p className="text-gray-600 mb-4">Complete guide to set up your email on Android devices</p>
            <Link 
              to="/support/guides/android-email-setup" 
              className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
            >
              View Guide →
            </Link>
          </div>

          {/* iOS Guide */}
          <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <div className="text-4xl mb-4">🍏</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">iOS Email Setup</h3>
            <p className="text-gray-600 mb-4">Detailed instructions for setting up email on iPhone and iPad</p>
            <Link 
              to="/support/guides/ios-email-setup" 
              className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800 transition-colors"
            >
              View Guide →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            If you can't find what you're looking for, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/support/request"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Support
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
