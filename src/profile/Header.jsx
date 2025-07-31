import React, { useState } from 'react';

const Header = ({ 
  onLogout, 
  onCoursesClick, 
  onHomeClick, 
  onCalendarClick, 
  onTestClick, 
  onPortfolioClick, 
  onDashboardClick, 
  onNotificationsClick,
  onProfileClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const notificationCount = 3; // This would come from props or context in a real app

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
            <button type="button" onClick={onHomeClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Home</button>
            <button type="button" onClick={onCoursesClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Courses</button>
            <button type="button" onClick={onDashboardClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Dashboard</button>
            <button type="button" onClick={onCalendarClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Calendar</button>
            <button type="button" onClick={onPortfolioClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Portfolio</button>
            <button type="button" onClick={onTestClick} className="text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer">Test</button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notification Bell */}
            <button 
              onClick={onNotificationsClick} 
              className="relative p-2 rounded-full hover:bg-white/20 transition-colors duration-200 group" 
              aria-label="Notifications"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {notificationCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={onProfileClick}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors duration-200 rounded-full py-1 px-2"
              >
                <img 
                  className="h-8 w-8 rounded-full border-2 border-white/50" 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="User avatar" 
                />
                <span className="text-sm font-medium text-white">Jane Doe</span>
              </button>
            </div>

            {/* Logout Button */}
            <button 
              onClick={onLogout} 
              className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Logout
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 transition-colors duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={onHomeClick} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition-colors duration-200">Home</button>
            <button onClick={onDashboardClick} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition-colors duration-200">Dashboard</button>
            <button onClick={onCoursesClick} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition-colors duration-200">Courses</button>
            <button onClick={onCalendarClick} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition-colors duration-200">Calendar</button>
            <button onClick={onPortfolioClick} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition-colors duration-200">Portfolio</button>
            <button onClick={onTestClick} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium hover:bg-white/10 transition-colors duration-200">Test</button>
          </div>
          <div className="pt-4 pb-3 border-t border-white/10">
            <div className="flex items-center justify-between px-4">
              {/* Mobile Notifications */}
              <button 
                onClick={onNotificationsClick}
                className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-200" 
                aria-label="Notifications"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notificationCount > 0 && (
                  <span className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* User Info */}
              {/* Profile Button */}
              <button 
                onClick={() => { setIsMenuOpen(false); onProfileClick(); }}
                className="flex items-center w-full text-left px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200 font-medium bg-transparent border-none outline-none cursor-pointer mb-2"
              >
                <span>Profile</span>
              </button>

              {/* User Info */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img 
                    className="h-10 w-10 rounded-full border-2 border-white/50" 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="User avatar" 
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Jane Doe</div>
                  <div className="text-sm font-medium text-indigo-200">jane.doe@example.com</div>
                </div>
              </div>

              {/* Logout Button */}
              <button 
                onClick={onLogout} 
                className="ml-auto bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;