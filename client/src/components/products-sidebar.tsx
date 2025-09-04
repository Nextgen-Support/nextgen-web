import React from "react";
import { Link, useLocation } from "react-router-dom";

const productCategories = [
  { name: "All Products", path: "/products" },
  { name: "Networking", path: "/products/networking" },
  { name: "Security", path: "/products/security" },
  { name: "Storage", path: "/products/storage" },
  { name: "Servers", path: "/products/servers" },
  { name: "Software", path: "/products/software" },
  { name: "Accessories", path: "/products/accessories" },
];

export default function ProductsSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4 h-fit sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        Product Categories
      </h3>
      <nav className="space-y-2">
        {productCategories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className={`block px-3 py-2 rounded-md text-sm font-medium ${
              location.pathname === category.path
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-500 mb-2">FILTER BY</h4>
        <div className="space-y-3">
          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">
              Price Range
            </h5>
            <div className="space-y-2 pl-2">
              {["$0 - $100", "$100 - $500", "$500 - $1000", "Over $1000"].map(
                (range) => (
                  <div key={range} className="flex items-center">
                    <input
                      id={range}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={range}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {range}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-700 mb-2">Brand</h5>
            <div className="space-y-2 pl-2">
              {["Cisco", "HP", "Dell", "Juniper", "Fortinet", "Palo Alto"].map(
                (brand) => (
                  <div key={brand} className="flex items-center">
                    <input
                      id={brand}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={brand}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {brand}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
