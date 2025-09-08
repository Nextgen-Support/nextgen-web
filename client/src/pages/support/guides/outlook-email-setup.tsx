import React from 'react';
import { Link } from 'react-router-dom';

const OutlookEmailSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg className="w-[800px] h-[800px]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 5.5v12.5c0 1.1-.9 2-2 2h-2.5V7.75c0-.69-.56-1.25-1.25-1.25h-5.5c-.69 0-1.25.56-1.25 1.25V20H3c-1.1 0-2-.9-2-2V5.5C1 4.12 2.12 3 3.5 3h17c1.38 0 2.5 1.12 2.5 2.5zM12 10.5H8v1h4v-1zm5 0h-4v1h4v-1zM8 13h4v1H8v-1zm5 0h4v1h-4v-1z"/>
        </svg>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Email Setup for Outlook</h1>
          <p className="text-xl text-gray-600">Step-by-step guide to configure your email in Microsoft Outlook</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Automatic Setup</h2>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li>Open Microsoft Outlook</li>
              <li>Click <strong>File</strong> &gt; <strong>Add Account</strong></li>
              <li>Enter your email address and click <strong>Connect</strong></li>
              <li>Enter your password when prompted</li>
              <li>Click <strong>Done</strong> to complete the setup</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manual Setup</h2>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Incoming Mail Server Settings</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2">
                <li><strong>Server Type:</strong> IMAP</li>
                <li><strong>Server Address:</strong> mail.yourdomain.com</li>
                <li><strong>Port:</strong> 993 (IMAP/SSL)</li>
                <li><strong>Encryption:</strong> SSL/TLS</li>
                <li><strong>Username:</strong> Your full email address</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Outgoing Mail Server Settings</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <ul className="space-y-2">
                <li><strong>Server Address:</strong> mail.yourdomain.com</li>
                <li><strong>Port:</strong> 465 (SMTP/SSL) or 587 (SMTP/STARTTLS)</li>
                <li><strong>Encryption:</strong> SSL/TLS or STARTTLS</li>
                <li><strong>Authentication:</strong> Same as incoming mail server</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-8">
              <h4 className="font-semibold text-blue-800 mb-2">Troubleshooting</h4>
              <ul className="list-disc pl-6 space-y-1 text-blue-700">
                <li>Double-check your email address and password</li>
                <li>Ensure you have a stable internet connection</li>
                <li>Verify the server settings with your email provider</li>
                <li>Make sure your account is not locked or suspended</li>
              </ul>
              <p className="mt-4 text-blue-700">
                Still having issues? <Link to="/support/request" className="text-blue-600 hover:underline">Contact our support team</Link> for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutlookEmailSetup;
