import React from 'react';
import { Link } from 'react-router-dom';

const IosEmailSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg className="w-[800px] h-[800px]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.27-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Email Setup for iPhone & iPad</h1>
          <p className="text-xl text-gray-600">Step-by-step guide to configure your email on iOS devices</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Automatic Setup</h2>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li>Open <strong>Settings</strong> on your iPhone or iPad</li>
              <li>Scroll down and tap <strong>Mail</strong></li>
              <li>Select <strong>Accounts</strong> &gt; <strong>Add Account</strong></li>
              <li>Choose <strong>Other</strong> &gt; <strong>Add Mail Account</strong></li>
              <li>Enter your name, email, password, and a description</li>
              <li>Tap <strong>Next</strong> and select <strong>IMAP</strong> or <strong>POP</strong></li>
              <li>Enter the server settings below and tap <strong>Next</strong> to verify</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manual Server Settings</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Incoming Mail Server</h3>
                <ul className="space-y-2">
                  <li><strong>Host Name:</strong> mail.yourdomain.com</li>
                  <li><strong>User Name:</strong> Your full email address</li>
                  <li><strong>Password:</strong> Your email password</li>
                  <li><strong>Port:</strong> 993 (IMAP) or 995 (POP3)</li>
                  <li><strong>Use SSL:</strong> Yes</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Outgoing Mail Server</h3>
                <ul className="space-y-2">
                  <li><strong>Host Name:</strong> mail.yourdomain.com</li>
                  <li><strong>User Name:</strong> Your full email address</li>
                  <li><strong>Password:</strong> Your email password</li>
                  <li><strong>Port:</strong> 465 or 587</li>
                  <li><strong>Use SSL:</strong> Yes</li>
                  <li><strong>Authentication:</strong> Password</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mt-8">
              <h4 className="font-semibold text-purple-800 mb-2">Troubleshooting Common Issues</h4>
              <ul className="list-disc pl-6 space-y-1 text-purple-700">
                <li><strong>Can't connect to server:</strong> Verify your internet connection and server settings</li>
                <li><strong>Authentication failed:</strong> Double-check your email and password</li>
                <li><strong>Emails not syncing:</strong> Go to Settings &gt; Mail &gt; Accounts &gt; [Your Account] &gt; Fetch New Data and enable Push</li>
                <li><strong>Sending issues:</strong> Verify SMTP settings and ensure you're using the correct port</li>
              </ul>
              <p className="mt-4 text-purple-700">
                Need more help? <Link to="/support/request" className="text-purple-600 hover:underline">Contact our support team</Link> for assistance.
              </p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Advanced Settings</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Mail Days to Sync</h4>
                  <p className="text-gray-600 mt-1">
                    To adjust how many days of mail are synced: Settings &gt; Mail &gt; Accounts &gt; [Your Account] &gt; Mail Days to Sync
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Default Account</h4>
                  <p className="text-gray-600 mt-1">
                    Set as default: Settings &gt; Mail &gt; Default Account &gt; Select your account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IosEmailSetup;
