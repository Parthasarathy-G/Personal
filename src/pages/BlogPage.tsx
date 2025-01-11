import React from 'react';
import { FileText, Calendar, Clock } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: 'Getting Started with DevOps',
      excerpt: 'Learn the fundamental concepts and tools in modern DevOps practices.',
      date: '2024-03-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kubernetes Best Practices',
      excerpt: 'Essential best practices for managing Kubernetes clusters in production.',
      date: '2024-03-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Automating with Ansible',
      excerpt: 'A comprehensive guide to automation using Ansible.',
      date: '2024-03-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <FileText className="text-orange-500 mr-3" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Blog</h2>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-100">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-orange-500 hover:text-orange-600 font-medium">
                    Read more →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;