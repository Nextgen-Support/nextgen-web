import React from 'react';

const ProductsPage = () => {
  const products = [
    {
      name: 'CCTV Security Solutions',
      description: 'Comprehensive surveillance systems for your business',
      features: [
        'High-definition cameras',
        '24/7 monitoring',
        'Remote viewing',
        'Motion detection',
        'Night vision'
      ],
      link: '/services/cctv',
      category: 'Security'
    },
    {
      name: 'Document Management System',
      description: 'Streamline your document workflows',
      features: [
        'Secure cloud storage',
        'Document version control',
        'Workflow automation',
        'Access control',
        'Compliance management'
      ],
      link: '/services/document-management',
      category: 'Productivity'
    },
    {
      name: 'Web & Domain Hosting',
      description: 'Reliable hosting solutions for your online presence',
      features: [
        '99.9% uptime guarantee',
        'Free SSL certificates',
        '24/7 support',
        'One-click installations',
        'Scalable resources'
      ],
      link: '/services/web-hosting',
      category: 'Hosting'
    },
    {
      name: 'Network Security',
      description: 'Protect your business from cyber threats',
      features: [
        'Firewall protection',
        'Intrusion detection',
        'VPN solutions',
        'Security audits',
        '24/7 monitoring'
      ],
      link: '/services/security',
      category: 'Security'
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-white">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <h3 className="text-lg font-semibold mb-2">Features:</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
                <a 
                  href={product.link}
                  className="mt-auto block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
