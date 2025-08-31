import React from 'react';
import { Link } from 'react-router-dom';

const serviceCards = [
  {
    title: 'Document Management',
    description: 'Streamline your document workflows with our secure and efficient document management solutions.',
    link: '/services/document-management',
    icon: '📄',
    color: 'bg-blue-600/90 hover:bg-blue-600 text-white',
    iconBg: 'bg-white/20'
  },
  {
    title: 'CCTV Solutions',
    description: 'Comprehensive surveillance solutions to protect your business premises and assets.',
    link: '/services/cctv',
    icon: '🎥',
    color: 'bg-green-600/90 hover:bg-green-600 text-white',
    iconBg: 'bg-white/20'
  },
  {
    title: 'ISP Services',
    description: 'Reliable and high-speed internet connectivity solutions for businesses of all sizes.',
    link: '/services/isp',
    icon: '🌐',
    color: 'bg-blue-600/90 hover:bg-blue-600 text-white',
    iconBg: 'bg-white/20'
  },
  {
    title: 'Web and Domain Hosting',
    description: 'Secure and high-performance web and domain hosting with 99.9% uptime guarantee.',
    link: '/services/web-hosting',
    icon: '🖥️',
    color: 'bg-green-600/90 hover:bg-green-600 text-white',
    iconBg: 'bg-white/20'
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive digital security services to protect your business from threats.',
    link: '/services/security',
    icon: '🔒',
    color: 'bg-blue-600/90 hover:bg-blue-600 text-white',
    iconBg: 'bg-white/20'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className={`${service.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full`}
            >
              <div className={`${service.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3 text-green-400">{service.title}</h2>
              <p className="text-white/90 mb-4 flex-grow">{service.description}</p>
              <div className="text-white/90 font-medium flex items-center group">
                Learn more
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us to discuss a tailored solution for your specific needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
