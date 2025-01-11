import React from 'react';
import { BookOpen } from 'lucide-react';

const LearningPage = () => {
  const technologies = [
    { name: 'AWS', progress: 65, description: 'Cloud infrastructure and services' },
    { name: 'Linux', progress: 75, description: 'System administration and shell scripting' },
    { name: 'Terraform', progress: 45, description: 'Infrastructure as Code' },
    { name: 'Ansible', progress: 40, description: 'Configuration management' },
    { name: 'Python', progress: 70, description: 'Automation and scripting' },
    { name: 'Jenkins', progress: 55, description: 'CI/CD pipelines' },
    { name: 'Kubernetes', progress: 35, description: 'Container orchestration' },
    { name: 'Docker', progress: 60, description: 'Containerization' }
  ];

  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <BookOpen className="text-orange-500 mr-3" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Learning Journey</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-orange-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-gray-600 mb-4">{tech.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-orange-600 font-medium">{tech.progress}%</span>
                </div>
                <div className="w-full bg-orange-100 rounded-full h-2.5">
                  <div 
                    className="bg-orange-500 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${tech.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPage;