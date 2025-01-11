import React from 'react';
import { Briefcase, Github, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      github: '#',
      demo: '#',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      github: '#',
      demo: '#',
      tags: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard with data visualization and forecasting.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
      github: '#',
      demo: '#',
      tags: ['React', 'D3.js', 'Weather API']
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      github: '#',
      demo: '#',
      tags: ['React', 'Chart.js', 'Node.js']
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="text-orange-500 mr-3" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-100">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a href={project.github} className="text-orange-500 hover:text-orange-600 flex items-center">
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a href={project.demo} className="text-orange-500 hover:text-orange-600 flex items-center">
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;