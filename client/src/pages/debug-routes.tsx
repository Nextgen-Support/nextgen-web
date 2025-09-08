import React from 'react';
import { useLocation } from 'react-router-dom';

const DebugRoutes = () => {
  const location = useLocation();
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Routing Information</h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Current Location:</h2>
        <pre className="bg-white p-4 rounded overflow-auto">
          {JSON.stringify({
            pathname: location.pathname,
            search: location.search,
            hash: location.hash,
            key: location.key,
            state: location.state
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DebugRoutes;
