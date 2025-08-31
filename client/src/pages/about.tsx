import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-white">About Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-700 mb-6">
              NextGen Solutions is a leading provider of innovative technology solutions, 
              dedicated to helping businesses thrive in the digital age. Founded with a vision 
              to bridge the gap between technology and business needs, we've been delivering 
              exceptional services to clients across various industries.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              enhance efficiency, and create sustainable competitive advantages in an 
              ever-evolving digital landscape.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Innovation:</strong> Constantly pushing boundaries to deliver forward-thinking solutions</li>
              <li><strong>Integrity:</strong> Building trust through transparency and ethical practices</li>
              <li><strong>Excellence:</strong> Committed to delivering the highest quality in everything we do</li>
              <li><strong>Customer-Centric:</strong> Your success is our top priority</li>
              <li><strong>Collaboration:</strong> Working together to achieve extraordinary results</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Our Team</h2>
            <p className="text-gray-700 mb-6">
              Our team consists of passionate professionals with diverse expertise in technology, 
              business strategy, and customer service. We combine technical excellence with 
              deep industry knowledge to deliver solutions that make a real difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
