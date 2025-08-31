import React from 'react';

const DocumentManagementPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12">Document Management Solutions</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Our document management solutions help businesses streamline their document workflows, 
            improve collaboration, and ensure secure access to critical information.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure document storage and retrieval</li>
              <li>Version control and document history</li>
              <li>Role-based access control</li>
              <li>Automated workflow management</li>
              <li>Advanced search and indexing</li>
              <li>Integration with existing systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentManagementPage;
