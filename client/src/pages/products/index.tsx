import React from 'react';

const ProductsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <h1 className="text-4xl font-bold text-center my-12">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Content will be added here */}
        </div>

        {/* Sidebar */}
        <div className="md:w-80 flex-shrink-0">
          {/* Sidebar content will be added here */}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
