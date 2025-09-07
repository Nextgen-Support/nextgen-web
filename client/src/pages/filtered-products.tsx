import React from 'react';

const FilteredProductsPage = () => {
  const filteredProducts = [
    {
      name: 'CCTV Solutions',
      description: 'Advanced surveillance and security camera systems',
      features: [
        '24/7 monitoring',
        'High-definition video',
        'Remote access',
        'Motion detection',
        'Night vision'
      ],
      image: '/asset/image/cctv1.jpg',
      link: '/services/cctv'
    },
    {
      name: 'Dokmee Document Management',
      description: 'Secure and efficient document handling solutions',
      features: [
        'Document scanning and storage',
        'Secure access control',
        'Version control',
        'Workflow automation',
        'Compliance management'
      ],
      image: '/asset/image/dokmee-card.png',
      link: '/services/document-management'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-white">Our Featured Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-sm">{feature}</li>
                  ))}
                </ul>
                
                <a 
                  href={product.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
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

export default FilteredProductsPage;
