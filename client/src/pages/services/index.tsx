import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'cctv',
    title: 'CCTV Solutions',
    description: 'Comprehensive surveillance solutions to protect your business premises and assets.',
    icon: '🎥',
    color: 'from-blue-600 to-blue-800',
    link: '/services/cctv'
  },
  {
    id: 'isp',
    title: 'ISP Services',
    description: 'Reliable and high-speed internet connectivity solutions for businesses of all sizes.',
    icon: '🌐',
    color: 'from-green-600 to-green-800',
    link: '/services/isp'
  },
  {
    id: 'security',
    title: 'Security Solutions',
    description: 'Comprehensive digital security services to protect your business from threats.',
    icon: '🔒',
    color: 'from-purple-600 to-purple-800',
    link: '/services/security'
  },
  {
    id: 'web-hosting',
    title: 'Web & Domain Hosting',
    description: 'Secure and high-performance web and domain hosting with 99.9% uptime guarantee.',
    icon: '🖥️',
    color: 'from-red-600 to-red-800',
    link: '/services/web-hosting'
  },
  {
    id: 'document-management',
    title: 'Document Management',
    description: 'Streamline your document workflows with our secure and efficient solutions.',
    icon: '📄',
    color: 'from-yellow-600 to-yellow-800',
    link: '/services/document-management'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-12 relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/asset/image/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to power your business growth and security in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 max-w-4xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group flex items-start gap-6 p-4 -m-4 rounded-lg transition-colors hover:bg-gray-800/50"
            >
              <div className={`bg-gradient-to-br ${service.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We specialize in creating tailored IT solutions to meet your unique business requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
