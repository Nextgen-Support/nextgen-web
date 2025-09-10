import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Document Management',
    description: 'Efficient document storage, retrieval, and workflow automation',
    icon: '📄',
    link: '/services/document-management',
    color: 'bg-blue-50 hover:bg-blue-100'
  },
  {
    title: 'CCTV Solutions',
    description: 'Comprehensive surveillance systems for your business security',
    icon: '🎥',
    link: '/services/cctv',
    color: 'bg-green-50 hover:bg-green-100'
  },
  {
    title: 'Web and Domain Hosting',
    description: 'Secure and scalable web and domain hosting solutions',
    icon: '🖥️',
    link: '/services/web-hosting',
    color: 'bg-yellow-50 hover:bg-yellow-100'
  },
  {
    title: 'Security Solutions',
    description: 'Protect your business from digital threats',
    icon: '🔒',
    link: '/services/security',
    color: 'bg-red-50 hover:bg-red-100'
  },
  {
    title: 'Networking',
    description: 'Enterprise-grade networking equipment and solutions',
    icon: '📶',
    link: '/products?category=networking',
    color: 'bg-indigo-50 hover:bg-indigo-100'
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Products & Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className={`${category.color} rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md text-2xl">
                  {category.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center text-sm font-medium text-blue-600">
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View All Services
          </Link>
          <Link
            to="/products"
            className="ml-3 inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
