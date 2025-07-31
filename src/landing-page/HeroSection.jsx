import React from 'react';

function HeroSection() {
  return (
    <section id="home" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-lg">
                <span className="mr-2">🚀</span>
                #1 Platform for Gen Z Learning
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Your Child's Future
                </span>
                <br />
                <span className="text-gray-900">Begins Here</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                A centralized digital platform to manage your child's journey in coding, 
                marketing, video editing, and UI/UX design with ease. 
                <br /><br />
                <span className="font-semibold text-indigo-600">Sign up now</span> and unlock their potential.
              </p>

              {/* Enhanced Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-xs">Hands-on Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-xs">Expert Mentors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-xs">Real-world Skills</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-xs">Portfolio Building</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group relative px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden">
                <span className="relative z-10">Explore Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
              
              <button className="px-5 py-2.5 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full text-sm hover:bg-indigo-600 hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="text-center group">
                <div className="text-lg sm:text-xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-xs text-gray-600 font-medium">Active Students</div>
              </div>
              <div className="text-center group">
                <div className="text-lg sm:text-xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-xs text-gray-600 font-medium">Expert Mentors</div>
              </div>
              <div className="text-center group">
                <div className="text-lg sm:text-xl font-bold text-pink-600 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-xs text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Students learning coding"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Decorative floating boxes without text */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-lg border border-gray-100">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse"></div>
            </div>
            
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-3 rounded-xl shadow-lg">
              <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
            </div>

            <div className="absolute top-1/2 -right-6 sm:-right-8 bg-gradient-to-r from-blue-500 to-cyan-500 p-2 sm:p-3 rounded-xl shadow-lg">
              <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;

