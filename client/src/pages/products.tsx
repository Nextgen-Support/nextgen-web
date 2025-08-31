import React from 'react';

const ProductsPage = () => {
  const products = [
    {
      name: 'Network Security Suite',
      description: 'Comprehensive security solution for enterprise networks',
      features: [
        'Real-time threat detection',
        'Automated vulnerability scanning',
        '24/7 network monitoring',
        'Compliance management'
      ]
    },
    {
      name: 'Cloud Storage Pro',
      description: 'Secure and scalable cloud storage solution',
      features: [
        'End-to-end encryption',
        'Automatic backups',
        'File versioning',
        'Team collaboration tools'
      ]
    },
    {
      name: 'Business Analytics Platform',
      description: 'Data-driven insights for better decision making',
      features: [
        'Custom dashboards',
        'Real-time reporting',
        'Predictive analytics',
        'Data visualization'
      ]
    },
    {
      name: 'Unified Communications',
      description: 'Seamless communication across your organization',
      features: [
        'Video conferencing',
        'Team messaging',
        'File sharing',
        'Screen sharing'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-white">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Custom Solutions</h2>
          <p className="text-gray-700 text-center mb-6">
            Don't see what you're looking for? We specialize in developing custom solutions 
            tailored to your specific business needs.
          </p>
          <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors">
              Contact Us for a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
