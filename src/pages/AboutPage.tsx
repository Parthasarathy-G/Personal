import React from 'react';
import { User, Code2 } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <User className="text-orange-500 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            </div>
            
            <div className="prose lg:prose-lg mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm a passionate developer with expertise in building modern web applications. 
                With a strong foundation in both frontend and backend technologies, 
                I create scalable solutions that solve real-world problems.
              </p>
            </div>

            <div className="mt-12">
              <div className="flex items-center mb-6">
                <Code2 className="text-orange-500 mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
                  <div key={skill} className="bg-orange-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-orange-100">
                    <p className="text-gray-800 font-medium text-center">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;