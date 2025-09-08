import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const SupportLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/support">
            <h1 className="text-4xl font-extrabold text-green-600 mb-2 hover:text-blue-600 transition-colors">Support Center</h1>
          </Link>
          <p className="text-xl text-gray-600">Find help and guidance for our products and services</p>
          
          <nav className="mt-6 flex justify-center space-x-4">
            <Link 
              to="/support" 
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Guides
            </Link>
            <Link 
              to="/support/request" 
              className="inline-flex items-center px-6 py-2 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Support
            </Link>
          </nav>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SupportLayout;
