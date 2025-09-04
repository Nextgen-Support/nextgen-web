import React from 'react';
import { Link } from 'react-router-dom';

const CCTVSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: '24/7 Surveillance',
      description: 'Round-the-clock monitoring with high-definition cameras to ensure your property is always protected.',
      image: '/asset/image/cctv1.jpg',
      features: [
        'High-resolution video quality',
        'Night vision capability',
        'Motion detection',
        'Weatherproof design'
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
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Advanced CCTV</span>
            <span className="block text-green-600">Security Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Protect what matters most with our state-of-the-art surveillance systems designed for homes and businesses.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Security Solution?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our security experts can design a customized CCTV system tailored to your specific needs and budget.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CCTVSolutions;
