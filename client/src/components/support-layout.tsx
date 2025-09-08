import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const SupportLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-12 sm:pt-16 pb-12 px-0 w-full">
      <div className="w-full max-w-[1800px] mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-10 px-2">
          <Link to="/support" className="block">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-green-600 mb-2 sm:mb-3 hover:text-blue-600 transition-colors pt-16">Support Center</h1>
          </Link>
          
          <nav className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
            <Link 
              to="/support" 
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-0 whitespace-nowrap"
            >
              View All Guides
            </Link>
            <Link 
              to="/support/request" 
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-0 whitespace-nowrap"
            >
              Contact Support
            </Link>
          </nav>
        </div>
        
        <div className="bg-white shadow-lg sm:rounded-xl p-4 sm:p-6 w-full">
          <div style={{ display: 'none' }}>{JSON.stringify({ location: window.location.pathname })}</div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SupportLayout;
