import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'corporate-network',
    title: 'Corporate Network Infrastructure',
    description: 'Designed and implemented a secure, high-speed network for a 500+ employee corporation.',
    icon: '🏢',
    color: 'from-blue-600 to-blue-800',
    link: '/projects/corporate-network'
  },
  {
    id: 'retail-security',
    title: 'Retail Security System',
    description: 'Installed comprehensive CCTV and access control system for a retail chain with 20+ locations.',
    icon: '🛒',
    color: 'from-green-600 to-green-800',
    link: '/projects/retail-security'
  },
  {
    id: 'data-center',
    title: 'Enterprise Data Center',
    description: 'Built a fully redundant data center with 99.99% uptime guarantee for a financial institution.',
    icon: '💻',
    color: 'from-purple-600 to-purple-800',
    link: '/projects/data-center'
  },
  {
    id: 'hospital-it',
    title: 'Hospital IT Infrastructure',
    description: 'Deployed a HIPAA-compliant IT infrastructure for a 300-bed hospital.',
    icon: '🏥',
    color: 'from-red-600 to-red-800',
    link: '/projects/hospital-it'
  },
  {
    id: 'smart-campus',
    title: 'Smart Campus Solution',
    description: 'Implemented IoT and networking solutions for a university campus.',
    icon: '🎓',
    color: 'from-yellow-600 to-yellow-800',
    link: '/projects/smart-campus'
  }
];

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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful IT implementations and solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group flex items-start gap-6 p-4 -m-4 rounded-lg transition-colors hover:bg-gray-800/50"
            >
              <div className={`bg-gradient-to-br ${project.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                {project.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
