import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Library Management System',
      description: 'A comprehensive system that allows users to search, add, and manage books with an intuitive interface.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      type: 'Development',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      github: 'https://github.com/Mehak206/library-system',
      demo: '#'
    },
    {
      title: 'E-Commerce Website Testing',
      description: 'Comprehensive testing of an e-commerce platform including functional testing, performance evaluation, and user experience validation.',
      technologies: ['Selenium', 'Java', 'JUnit'],
      type: 'Testing',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      github: 'https://github.com/Mehak206/ecommerce-testing',
      demo: '#'
    },
    {
      title: 'Automated Test Framework',
      description: 'Custom test automation framework designed to simplify the process of creating and running tests across multiple platforms.',
      technologies: ['Python', 'Pytest', 'Selenium'],
      type: 'Testing',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      github: 'https://github.com/Mehak206/automation-framework',
      demo: '#'
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing suite with test cases for RESTful services including authentication, data validation, and error handling.',
      technologies: ['Postman', 'JavaScript', 'Newman'],
      type: 'Testing',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      github: 'https://github.com/Mehak206/api-testing',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="section-title">
        <h2>Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card group overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded mb-2">
                  {project.type}
                </span>
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 hover:text-purple-600 flex items-center gap-1 transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a 
                  href={project.demo} 
                  className="text-purple-600 hover:text-purple-800 flex items-center gap-1 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;