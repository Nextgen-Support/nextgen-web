import React from 'react';
import { Link } from 'react-router-dom';

const SupportGuides = () => {
  const guides = [
    {
      title: 'Outlook Email Setup',
      description: 'Step-by-step guide to configure your email in Microsoft Outlook',
      path: '/support/guides/outlook-email-setup',
      icon: '📧',
      id: 'outlook'
    },
    {
      title: 'Android Email Setup',
      description: 'Complete guide to set up your email on Android devices',
      path: '/support/guides/android-email-setup',
      icon: '📱',
      id: 'android'
    },
    {
      title: 'iOS Email Setup',
      description: 'Detailed instructions for setting up email on iPhone and iPad',
      path: '/support/guides/ios-email-setup',
      icon: '🍏',
      id: 'ios'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Setup Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              to={guide.path}
              className="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="text-4xl mb-4">{guide.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600">{guide.description}</p>
              <div className="mt-4 text-blue-600 font-medium">View Guide →</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Need More Help?</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            If you can't find what you're looking for, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportGuides;
