import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <Mail className="text-orange-500 mr-3" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-orange-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <MessageSquare size={20} className="mr-2 text-orange-500" />
              Other Ways to Connect
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Email:</strong> your@email.com
              </p>
              <p className="text-gray-600">
                <strong>LinkedIn:</strong>{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600">
                  linkedin.com/in/yourprofile
                </a>
              </p>
              <p className="text-gray-600">
                <strong>GitHub:</strong>{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600">
                  github.com/yourusername
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;