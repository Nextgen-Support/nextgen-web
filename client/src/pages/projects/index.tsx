import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

const projects: Project[] = [];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 pb-12 relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/asset/image/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto text-center py-12">
          <div className="bg-gray-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Projects coming soon</h2>
            <p className="text-gray-300 mb-6">
              Please check back later.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">Ready to start your project?</h3>
            <p className="text-gray-300 mb-4">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
