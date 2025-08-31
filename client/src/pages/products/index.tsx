import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'cctv-systems',
    title: 'CCTV Systems',
    description: 'High-definition surveillance systems for comprehensive security monitoring.',
    icon: '🎥',
    color: 'from-blue-600 to-blue-800',
    link: '/products/cctv-systems'
  },
  {
    id: 'networking',
    title: 'Networking Equipment',
    description: 'Enterprise-grade networking solutions for reliable connectivity.',
    icon: '🌐',
    color: 'from-green-600 to-green-800',
    link: '/products/networking'
  },
  {
    id: 'security-systems',
    title: 'Security Systems',
    description: 'Advanced security solutions to protect your business assets.',
    icon: '🔒',
    color: 'from-purple-600 to-purple-800',
    link: '/products/security-systems'
  },
  {
    id: 'storage-solutions',
    title: 'Storage Solutions',
    description: 'Scalable storage solutions for all your business needs.',
    icon: '💾',
    color: 'from-red-600 to-red-800',
    link: '/products/storage-solutions'
  }
];

const ProductsPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our range of high-quality IT products designed to meet your business needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-12 max-w-4xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className="group flex items-start gap-6 p-4 -m-4 rounded-lg transition-colors hover:bg-gray-800/50"
            >
              <div className={`bg-gradient-to-br ${product.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                {product.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-300">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help Choosing?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experts can help you find the perfect products for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
