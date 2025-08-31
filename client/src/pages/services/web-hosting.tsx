import React from 'react';

const WebHostingPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/bg.png)' }}>
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl font-bold text-center my-12 text-white">Web and Domain Hosting Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web Hosting */}
          <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Web Hosting</h2>
            <p className="text-white/90 mb-4">
              Reliable and high-performance web hosting solutions tailored to your needs.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>Lightning-fast SSD storage</li>
              <li>99.9% Uptime Guarantee</li>
              <li>One-click WordPress installation</li>
              <li>Free SSL certificates</li>
              <li>24/7 Server Monitoring</li>
              <li>Daily Backups</li>
            </ul>
          </div>

          {/* Domain & Email Solution */}
          <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Domain & Email Solutions</h2>
            <p className="text-white/90 mb-4">
              Professional email and domain management for your business.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>Domain registration and transfer</li>
              <li>Professional business email</li>
              <li>Email forwarding and aliases</li>
              <li>Webmail access</li>
              <li>Calendar and contact sync</li>
              <li>Generous storage options</li>
            </ul>
          </div>

          {/* Web Design & Development */}
          <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Web Design & Development</h2>
            <p className="text-white/90 mb-4">
              Custom websites designed to convert visitors into customers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>Responsive web design</li>
              <li>E-commerce solutions</li>
              <li>Content Management Systems</li>
              <li>SEO optimization</li>
              <li>Mobile-first approach</li>
              <li>Ongoing maintenance</li>
            </ul>
          </div>

          {/* Anti-Spam Protection */}
          <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Anti-Spam Protection</h2>
            <p className="text-white/90 mb-4">
              Advanced protection against spam and malicious emails.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>Enterprise-grade spam filtering</li>
              <li>Virus and malware scanning</li>
              <li>Phishing protection</li>
              <li>Customizable filtering rules</li>
              <li>Quarantine management</li>
              <li>Real-time blacklist monitoring</li>
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-8 bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Why Choose Our Hosting Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-green-400 text-4xl mb-2">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/80">Optimized servers for maximum performance</p>
            </div>
            <div className="text-center">
              <div className="text-green-400 text-4xl mb-2">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
              <p className="text-white/80">Enterprise-grade security measures</p>
            </div>
            <div className="text-center">
              <div className="text-green-400 text-4xl mb-2">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Reliable Support</h3>
              <p className="text-white/80">24/7 expert assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHostingPage;
