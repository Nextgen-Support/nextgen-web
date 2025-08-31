import React from 'react';

const TestVideoPage = () => {
  return (
    <div className="relative min-h-screen">
      <h1 className="text-2xl font-bold text-white p-4">Video Test Page</h1>
      
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-4">Test Video 1 (Direct Path)</h2>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full max-w-2xl h-auto border border-white"
        >
          <source src="/asset/Videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-white mt-2">Path: /asset/Videos/banner.mp4</p>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-4">Test Video 2 (Alternative Path)</h2>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full max-w-2xl h-auto border border-white"
        >
          <source src="/asset/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-white mt-2">Path: /asset/videos/banner.mp4</p>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-4">Test Video 3 (Public Root)</h2>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full max-w-2xl h-auto border border-white"
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-white mt-2">Path: /banner.mp4</p>
      </div>
    </div>
  );
};

export default TestVideoPage;
