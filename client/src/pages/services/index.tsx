import React from 'react';
import { Link } from 'react-router-dom';

const serviceCards = [
  {
    title: 'Document Management',
    description: 'Streamline your document workflows with our secure and efficient document management solutions.',
    link: '/services/document-management',
    icon: '📄',
    color: 'bg-blue-50 hover:bg-blue-100'
  },
  {
    title: 'CCTV Solutions',
    description: 'Comprehensive surveillance solutions to protect your business premises and assets.',
    link: '/services/cctv',
    icon: '🎥',
    color: 'bg-green-50 hover:bg-green-100'
  },
  {
    title: 'ISP Services',
    description: 'Reliable and high-speed internet connectivity solutions for businesses of all sizes.',
    link: '/services/isp',
    icon: '🌐',
    color: 'bg-purple-50 hover:bg-purple-100'
  },
  {
    title: 'Web Hosting',
    description: 'Secure and high-performance web hosting with 99.9% uptime guarantee.',
    link: '/services/web-hosting',
    icon: '🖥️',
    color: 'bg-yellow-50 hover:bg-yellow-100'
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive digital security services to protect your business from threats.',
    link: '/services/security',
    icon: '🔒',
    color: 'bg-red-50 hover:bg-red-100'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of IT solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <Link 
              to={service.link} 
              key={index}
              className={`${service.color} rounded-xl p-6 shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-blue-600 font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
