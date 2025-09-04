import React from 'react';
import { Link } from 'react-router-dom';

const DocumentManagementPage = () => {
  const solutions = [
    {
      id: 1,
      title: 'Dokmee Document Management',
      description: 'Enterprise-class document management solution designed to help businesses of all sizes efficiently capture, manage, and store documents while maintaining security and compliance.',
      image: '/asset/image/dokmee.png',
      features: [
        'Secure cloud-based document storage',
        'Advanced OCR (Optical Character Recognition)',
        'Automated document capture and indexing',
        'Version control and audit trails',
        'Workflow automation',
        'Role-based access control',
        'Mobile access and scanning'
      ]
    },
    {
      id: 2,
      title: 'Microsoft 365 Office',
      description: 'Comprehensive productivity suite with powerful document management capabilities, seamlessly integrated with familiar Office applications.',
      image: '/asset/image/dokmee1.jpeg',
      features: [
        'Cloud storage with OneDrive/SharePoint',
        'Real-time co-authoring',
        'Advanced security features',
        'Seamless Office integration',
        'Familiar interface',
        'Anytime, anywhere access',
        'Enterprise security'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Document</span>
            <span className="block text-green-600">Management Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your document workflow with our secure and efficient document management systems.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-32 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{solution.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{solution.description}</p>
                <ul className="space-y-1 mb-3">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-1.5 px-3 rounded transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Document Solution?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We can design a customized document management system tailored to your specific business needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocumentManagementPage;
