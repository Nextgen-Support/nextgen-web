import React from 'react';
import { Link } from 'react-router-dom';

const CCTVSolutionsPage = () => {
  const solutions = [
    {
      id: 1,
      title: 'Holowits X Series HWT-X6741',
      description: '4MP Super-low Light Full Control Dual Lens AI PTZ Dome Camera for 24/7 surveillance in any lighting condition.',
      image: '/asset/image/cctv1.jpg',
      features: [
        '4MP Ultra HD resolution',
        'Super-low light technology',
        'Dual lens AI PTZ control',
        'Weatherproof IP67 rated design',
        'AI-powered motion detection',
        'Wide dynamic range (WDR)'
      ]
    },
    {
      id: 2,
      title: 'Smart Motion Detection',
      description: 'Advanced algorithms that distinguish between relevant motion events and false alarms.',
      image: '/asset/image/cctv2.png',
      features: [
        'AI-powered detection',
        'Real-time alerts',
        'Customizable zones',
        'Reduced false alarms'
      ]
    },
    {
      id: 3,
      title: 'Remote Monitoring',
      description: 'Access your camera feeds from anywhere using your smartphone or computer.',
      image: '/asset/image/cctv3.png',
      features: [
        'Mobile app access',
        'Cloud storage options',
        'Multi-user access',
        'Secure encryption'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen pt-24 px-4 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        >
          <source src="/asset/Videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Static banner for mobile with fallback gradient */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/asset/image/static banner.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '';
              target.className = 'w-full h-full bg-gradient-to-br from-blue-900 to-black';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4">
            Advanced CCTV Security Solutions
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Protect what matters most with our state-of-the-art surveillance systems designed for homes and businesses.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {solutions.map((solution) => (
            <div key={solution.id} className="flex flex-col bg-white/90 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link 
                    to={`/contact?service=CCTV&solution=${encodeURIComponent(solution.title)}`}
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full transition-colors text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Complete Security Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Why Choose Our CCTV Solutions?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Full installation by our technicians</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">High-quality equipment from trusted manufacturers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">24/7 monitoring and support options</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Our Process</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-white">Free consultation and site survey</li>
                <li className="text-white">Customized security solution design</li>
                <li className="text-white">Full installation and setup</li>
                <li className="text-white">Comprehensive training and support</li>
              </ol>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white/90 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Secure Your Property?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation to secure your premises with trusted CCTV solution.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CCTVSolutionsPage;
