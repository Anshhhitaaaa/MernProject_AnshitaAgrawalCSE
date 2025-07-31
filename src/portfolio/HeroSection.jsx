import React from 'react';
import styles from './Portfolio.module.css';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className={`absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${styles.animateBlob}`}></div>
        <div className={`absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${styles.animateBlob} ${styles.animationDelay2000}`}></div>
        <div className={`absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${styles.animateBlob} ${styles.animationDelay4000}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  John Doe
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I create beautiful, functional, and user-centered digital experiences. 
                Passionate about clean code, innovative design, and solving complex problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                Download CV
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">3+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform rotate-6 animate-pulse"></div>
              <div className={`absolute inset-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transform -rotate-6 animate-pulse ${styles.animationDelay1000}`}></div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiByeD0iMjAwIiBmaWxsPSIjRjBGOUZGIi8+CjxyZWN0IHg9IjEwMCIgeT0iODAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiByeD0iMTAwIiBmaWxsPSIjRkZEN0E3Ii8+CjxyZWN0IHg9IjEyMCIgeT0iMTAwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgcng9IjgwIiBmaWxsPSIjRkZEN0E3Ii8+CjxyZWN0IHg9IjE0MCIgeT0iMTIwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgcng9IjYwIiBmaWxsPSIjRkZEN0E3Ii8+CjxyZWN0IHg9IjE2MCIgeT0iMTQwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSI0MCIgZmlsbD0iIzM0NjVEMSIvPgo8cmVjdCB4PSIxNzAiIHk9IjE2MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iMzAiIGZpbGw9IiMzNDY1RDEiLz4KPHJlY3QgeD0iMTgwIiB5PSIyMDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI2MCIgcng9IjIwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjE3MCIgeT0iMjIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHJ4PSIzMCIgZmlsbD0iIzM0NjVEMSIvPgo8cmVjdCB4PSIxODAiIHk9IjIzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiByeD0iMTAiIGZpbGw9IiNGRkYwMDAiLz4KPC9zdmc+"
                alt="John Doe"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
} 