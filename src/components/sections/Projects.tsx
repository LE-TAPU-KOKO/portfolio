import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A selection of my recent work in AI and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
                {activeProject === index && (
                  <div className="absolute inset-0 bg-teal-600 bg-opacity-80 flex items-center justify-center space-x-4 transition-opacity duration-300">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-teal-600" />
                      </a>
                    )}
                    {project.codeLink && (
                      <a 
                        href={project.codeLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github className="w-5 h-5 text-teal-600" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <Code className="w-5 h-5 text-teal-600 mr-2" />
                  <h4 className="text-sm font-semibold text-gray-700">Tech Stack</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-teal-50 text-teal-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 inline-flex items-center"
          >
            <span>Interested in collaborating?</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;