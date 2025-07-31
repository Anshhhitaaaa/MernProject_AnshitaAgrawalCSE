import React, { useState } from 'react';

export const Header = ({ onLogout, onCoursesClick, onHomeClick, onCalendarClick, onTestClick, onPortfolioClick, onDashboardClick, onNotificationsClick, onProfileClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-white">UpGenz</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {onHomeClick ? (
              <button type="button" onClick={onHomeClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Home</button>
            ) : (
              <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Home</a>
            )}
            <button type="button" onClick={onCoursesClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Courses</button>
            <button type="button" onClick={onDashboardClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Dashboard</button>
            {onCalendarClick ? (
              <button type="button" onClick={onCalendarClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Calendar</button>
            ) : (
              <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Calendar</a>
            )}
            {onPortfolioClick ? (
              <button type="button" onClick={onPortfolioClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Portfolio</button>
            ) : (
              <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Portfolio</a>
            )}
            {onTestClick ? (
              <button type="button" onClick={onTestClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Test</button>
            ) : (
              <a href="#" className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Test</a>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notification Bell */}
            <button 
              onClick={onNotificationsClick} 
              className="relative p-2 rounded-full hover:bg-white/20 transition-colors duration-200 group" 
              aria-label="Notifications"
            >
              <svg className="w-6 h-6 text-white group-hover:text-indigo-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">3</span>
            </button>
            <button 
              onClick={onProfileClick} 
              className="flex items-center space-x-2 hover:bg-white/20 rounded-full px-2 py-1 transition-colors duration-200" 
              aria-label="Profile"
            >
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/adbba359b85aeabe461ab2726d20d9b49a14b864?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white shadow" />
              <span className="font-semibold text-white">John Doe</span>
            </button>
            <button onClick={onLogout} className="px-5 py-2 bg-white text-indigo-600 rounded-full font-bold shadow hover:bg-indigo-100 transition-all duration-200">Logout</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 rounded-lg mt-2">
              <a href="#" className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Home</a>
              <button type="button" onClick={() => { setIsMenuOpen(false); onDashboardClick(); }} className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Dashboard</button>
              <a href="#" className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Courses</a>
              {onCalendarClick ? (
                <button type="button" onClick={() => { setIsMenuOpen(false); onCalendarClick(); }} className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Calendar</button>
              ) : (
                <a href="#" className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Calendar</a>
              )}
              {onPortfolioClick ? (
                <button type="button" onClick={() => { setIsMenuOpen(false); onPortfolioClick(); }} className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Portfolio</button>
              ) : (
                <a href="#" className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Portfolio</a>
              )}
              {onTestClick ? (
                <button type="button" onClick={() => { setIsMenuOpen(false); onTestClick(); }} className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Test</button>
              ) : (
                <a href="#" className="block w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium">Test</a>
              )}
              {onNotificationsClick && (
                <button 
                  type="button" 
                  onClick={() => { setIsMenuOpen(false); onNotificationsClick(); }} 
                  className="flex items-center w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer"
                >
                  <span>Notifications</span>
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">3</span>
                </button>
              )}
              {onProfileClick && (
                <button 
                  type="button" 
                  onClick={() => { setIsMenuOpen(false); onProfileClick(); }} 
                  className="flex items-center w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer"
                >
                  <span>Profile</span>
                </button>
              )}
              <div className="flex items-center gap-2 px-3 pt-3">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/adbba359b85aeabe461ab2726d20d9b49a14b864?placeholderIfAbsent=true&apiKey=f4404789203e45a6bd721c6cd37f95e0" alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white shadow" />
                <span className="font-semibold text-white">John Doe</span>
                <button onClick={onLogout} className="ml-auto px-4 py-2 bg-white text-indigo-600 rounded-full font-bold shadow hover:bg-indigo-100 transition-all duration-200 text-sm">Logout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};