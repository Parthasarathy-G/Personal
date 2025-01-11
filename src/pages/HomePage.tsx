import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588412079929-790b9f593d8e?auto=format&fit=crop&q=80')] bg-opacity-5 opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-orange-500">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Full Stack Developer crafting exceptional digital experiences
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your@email.com" className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;