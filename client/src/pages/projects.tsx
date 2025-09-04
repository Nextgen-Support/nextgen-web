import React from 'react';

const ProjectsPage = () => {
    const projects: Array<{
    title: string;
    client: string;
    description: string;
    technologies: string[];
    image: string;
  }> = [];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center my-12 text-white">Our Projects</h1>
        
        <div className="space-y-12">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">Projects coming soon. Please check back later.</p>
            </div>
          ) : projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3 bg-gray-200 h-48 md:h-auto flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {project.client}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2">{project.title}</h2>
                  <p className="mt-3 text-gray-600">{project.description}</p>
                  
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-700">Technologies:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800">
                    View Case Study
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h2>
          <p className="text-gray-300 mb-6">Let's discuss how we can help bring your vision to life.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
