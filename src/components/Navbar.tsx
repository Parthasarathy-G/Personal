import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, BookOpen, FileText, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/about', icon: <User size={20} />, label: 'About' },
    { to: '/projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { to: '/learning', icon: <BookOpen size={20} />, label: 'Learning' },
    { to: '/blog', icon: <FileText size={20} />, label: 'Blog' },
    { to: '/contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-orange-500">Portfolio</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`
                }
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-6 gap-1 px-2 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-2 text-xs font-medium ${
                  isActive
                    ? 'text-orange-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;