import React from 'react';

const AndroidEmailSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Email Setup for Android</h1>
          <p className="text-xl text-gray-600">Step-by-step guide to configure your email on Android devices</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Automatic Setup</h2>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li>Open the <strong>Email</strong> app on your Android device</li>
              <li>Tap <strong>Add Account</strong></li>
              <li>Enter your email address and tap <strong>Continue</strong></li>
              <li>Select <strong>Personal (IMAP)</strong> or <strong>Exchange and Office 365</strong> if applicable</li>
              <li>Enter your password and tap <strong>Sign in</strong></li>
              <li>Follow the on-screen prompts to complete setup</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manual Setup</h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">IMAP Settings</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2">
                <li><strong>Email Client:</strong> IMAP</li>
                <li><strong>Incoming Mail Server:</strong> mail.yourdomain.com</li>
                <li><strong>Port:</strong> 993</li>
                <li><strong>Security Type:</strong> SSL/TLS (accept all certificates)</li>
                <li><strong>Username:</strong> Your full email address</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">SMTP Settings</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2">
                <li><strong>Outgoing Mail Server:</strong> mail.yourdomain.com</li>
                <li><strong>Port:</strong> 465 or 587</li>
                <li><strong>Security Type:</strong> SSL/TLS or STARTTLS</li>
                <li><strong>Require sign-in:</strong> Yes</li>
                <li><strong>Username:</strong> Your full email address</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-8">
              <h4 className="font-semibold text-green-800 mb-2">Troubleshooting Tips</h4>
              <ul className="list-disc pl-6 space-y-1 text-green-700">
                <li>Ensure you have a stable internet connection</li>
                <li>Double-check your email address and password</li>
                <li>Verify server settings with your email provider</li>
                <li>Try using the manual setup if automatic setup fails</li>
                <li>Check if your email account is active and not locked</li>
              </ul>
              <p className="mt-4 text-green-700">
                Still having trouble? <a href="/contact" className="text-green-600 hover:underline">Contact our support team</a> for assistance.
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Why is my email not syncing?</h4>
                  <p className="text-gray-600 mt-1">Check your sync settings in the email app and ensure background data is enabled for the email application.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">How do I change sync frequency?</h4>
                  <p className="text-gray-600 mt-1">Go to Email app settings → Account settings → Sync frequency to adjust how often your email updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidEmailSetup;
