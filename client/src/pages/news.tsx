import React from 'react';

const NewsPage = () => {
  const news = [
    {
      id: 1,
      title: 'NextGen Solutions Announces New Cloud Services',
      date: 'August 15, 2023',
      excerpt: 'We are excited to announce our expanded cloud service offerings, providing businesses with more flexibility and scalability options.',
      category: 'Company News',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Cybersecurity Trends to Watch in 2023',
      date: 'July 28, 2023',
      excerpt: 'Our security experts weigh in on the emerging cybersecurity threats and trends that businesses should be aware of this year.',
      category: 'Security',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'How Digital Transformation is Reshaping Industries',
      date: 'July 10, 2023',
      excerpt: 'An in-depth look at how digital transformation initiatives are creating new opportunities across various sectors.',
      category: 'Insights',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'NextGen Solutions Wins Tech Innovation Award',
      date: 'June 22, 2023',
      excerpt: 'We are honored to receive the 2023 Tech Innovation Award for our groundbreaking work in network infrastructure solutions.',
      category: 'Awards',
      readTime: '2 min read'
    }
  ];

  const categories = [
    { name: 'All', count: 12 },
    { name: 'Company News', count: 4 },
    { name: 'Technology', count: 5 },
    { name: 'Security', count: 3 },
    { name: 'Insights', count: 4 },
    { name: 'Awards', count: 2 }
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-white">Latest News & Updates</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex justify-between items-center text-gray-700 hover:text-blue-600">
                      <span className={category.name === 'All' ? 'font-medium text-blue-600' : ''}>
                        {category.name}
                      </span>
                      <span className="text-sm bg-gray-100 rounded-full px-2 py-1">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Subscribe</h2>
              <p className="text-sm text-gray-600 mb-3">Get the latest news delivered to your inbox.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* News List */}
          <div className="md:w-3/4">
            <div className="space-y-6">
              {news.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="text-blue-600 font-medium">{item.category}</span>
                      <span className="mx-2">•</span>
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                      <a href="#">{item.title}</a>
                    </h2>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
              
              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-1">
                  <a href="#" className="px-3 py-1 rounded bg-blue-600 text-white">1</a>
                  <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">2</a>
                  <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">3</a>
                  <span className="px-2">...</span>
                  <a href="#" className="px-3 py-1 rounded hover:bg-gray-100">Next</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
