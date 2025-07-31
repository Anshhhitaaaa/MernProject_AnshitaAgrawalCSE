import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80"
                alt="About Me"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Passionate Full Stack Developer
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a dedicated full-stack developer with over 3 years of experience creating 
              innovative web applications. My journey in technology began with a curiosity 
              about how things work, which evolved into a passion for building solutions 
              that make a difference.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I specialize in modern web technologies including React, Node.js, and Python. 
              My approach combines technical expertise with creative problem-solving, 
              ensuring that every project I work on is not only functional but also 
              delivers an exceptional user experience.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Full Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-700">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span className="text-gray-700">Team Collaboration</span>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">Name:</span>
                  <span className="ml-2 font-medium text-gray-900">John Doe</span>
                </div>
                <div>
                  <span className="text-gray-600">Email:</span>
                  <span className="ml-2 font-medium text-gray-900">john@example.com</span>
                </div>
                <div>
                  <span className="text-gray-600">Location:</span>
                  <span className="ml-2 font-medium text-gray-900">San Francisco, CA</span>
                </div>
                <div>
                  <span className="text-gray-600">Availability:</span>
                  <span className="ml-2 font-medium text-green-600">Open to Work</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 