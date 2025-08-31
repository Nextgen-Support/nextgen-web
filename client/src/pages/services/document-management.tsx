import React from 'react';

const DocumentManagementPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/bg.png)' }}>
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl font-bold text-center my-12 text-white">Document Management Solutions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dokmee */}
          <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Dokmee</h2>
            <p className="text-white/90 mb-6">
              Enterprise-class document management solution designed to help businesses of all sizes 
              efficiently capture, manage, and store documents while maintaining security and compliance.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2 text-white/90 mb-6">
              <li>Secure cloud-based document storage</li>
              <li>Advanced OCR (Optical Character Recognition)</li>
              <li>Automated document capture and indexing</li>
              <li>Version control and audit trails</li>
              <li>Workflow automation</li>
              <li>Role-based access control</li>
              <li>Mobile access and scanning</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-white mb-3">Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>Reduced paper usage and storage costs</li>
              <li>Improved document security and compliance</li>
              <li>Faster document retrieval</li>
              <li>Enhanced team collaboration</li>
              <li>Disaster recovery protection</li>
            </ul>
          </div>
          
          {/* Microsoft 365 Office */}
          <div className="bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Microsoft 365 Office</h2>
            <p className="text-white/90 mb-6">
              Comprehensive productivity suite with powerful document management capabilities, 
              seamlessly integrated with familiar Office applications.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2 text-white/90 mb-6">
              <li>Cloud-based document storage with OneDrive and SharePoint</li>
              <li>Real-time co-authoring in Word, Excel, and PowerPoint</li>
              <li>Advanced security and compliance features</li>
              <li>Seamless integration with Teams for collaboration</li>
              <li>Automated version history and recovery</li>
              <li>Powerful search capabilities with Microsoft Search</li>
              <li>Mobile apps for on-the-go access</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-white mb-3">Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              <li>Familiar interface with minimal learning curve</li>
              <li>Anywhere, anytime access to documents</li>
              <li>Enterprise-grade security and compliance</li>
              <li>Seamless integration with other Microsoft products</li>
              <li>Scalable solutions for businesses of all sizes</li>
            </ul>
          </div>
        </div>
        
        {/* Integration Section */}
        <div className="mt-12 bg-black/60 rounded-lg shadow-lg p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Integrated Document Management</h2>
          <p className="text-white/90 text-center mb-8 max-w-3xl mx-auto">
            Our experts can help you implement and integrate these powerful document management 
            solutions into your existing workflows, ensuring a smooth transition and maximum 
            return on your investment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-green-400 text-4xl mb-3">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
              <p className="text-white/80">Assessing your document management needs</p>
            </div>
            <div>
              <div className="text-green-400 text-4xl mb-3">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
              <p className="text-white/80">Seamless deployment and configuration</p>
            </div>
            <div>
              <div className="text-green-400 text-4xl mb-3">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-2">Training</h3>
              <p className="text-white/80">Comprehensive staff training and support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentManagementPage;
