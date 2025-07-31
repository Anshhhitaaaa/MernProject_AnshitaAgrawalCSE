import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import LandingPage from './landing-page/LandingPage';
import LoginPage from './auth/LoginPage';
import SignupPage from './auth/SignupPage';
import AboutPage from './about/AboutPage';
import Home from './home/Home';
import Course from './courses/Course';
import CalendarPage from './calendar/CalendarPage';
import TestPage from './test-page/TestPage';
import PortfolioPage from './portfolio/PortfolioPage';
import DashboardPage from './dashboard/DashboardPage';
import NotificationPage from './notifications/NotificationPage';
import ProfilePage from './profile/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'login', 'signup', 'about', 'calendar', 'notifications', etc.
  
  // Use AuthContext for authentication state
  const { currentUser, logout } = useContext(AuthContext);
  const loggedIn = !!currentUser;

  // Navigation functions
  const navigateToLogin = () => setCurrentPage('login');
  const navigateToSignup = () => setCurrentPage('signup');
  const navigateToLanding = () => setCurrentPage('landing');
  const navigateToAbout = () => setCurrentPage('about');
  const navigateToPortfolio = () => setCurrentPage('portfolio');

  // Effect to redirect to home page when user logs in
  useEffect(() => {
    if (loggedIn && (currentPage === 'login' || currentPage === 'signup' || currentPage === 'landing')) {
      setCurrentPage('home');
    }
  }, [loggedIn, currentPage]);

  // Handle logout
  const handleLogout = async () => {
    await logout();
    setCurrentPage('landing');
  };

  // These functions are now just for navigation after successful auth
  const handleLogin = () => {
    setCurrentPage('home');
  };

  const handleSignup = () => {
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {loggedIn ? (
        currentPage === 'home' ? (
          <Home
            onLogout={handleLogout}
            onCoursesClick={() => setCurrentPage('courses')}
            onHomeClick={() => setCurrentPage('home')}
            onCalendarClick={() => setCurrentPage('calendar')}
            onTestClick={() => setCurrentPage('test')}
            onPortfolioClick={() => setCurrentPage('portfolio')}
            onDashboardClick={() => setCurrentPage('dashboard')}
            onNotificationsClick={() => setCurrentPage('notifications')}
            onProfileClick={() => setCurrentPage('profile')}
          />
        ) : currentPage === 'courses' ? (
          <Course
            onLogout={handleLogout}
            onHomeClick={() => setCurrentPage('home')}
            onCoursesClick={() => setCurrentPage('courses')}
            onDashboardClick={() => setCurrentPage('dashboard')}
            onCalendarClick={() => setCurrentPage('calendar')}
            onPortfolioClick={() => setCurrentPage('portfolio')}
            onTestClick={() => setCurrentPage('test')}
            onNotificationsClick={() => setCurrentPage('notifications')}
            onProfileClick={() => setCurrentPage('profile')}
          />
        ) : currentPage === 'calendar' ? (
          <CalendarPage
            onLogout={handleLogout}
            onHomeClick={() => setCurrentPage('home')}
            onCoursesClick={() => setCurrentPage('courses')}
            onCalendarClick={() => setCurrentPage('calendar')}
            onTestClick={() => setCurrentPage('test')}
            onPortfolioClick={() => setCurrentPage('portfolio')}
            onDashboardClick={() => setCurrentPage('dashboard')}
            onNotificationsClick={() => setCurrentPage('notifications')}
            onProfileClick={() => setCurrentPage('profile')}
          />
        ) : currentPage === 'test' ? (
          <TestPage 
            onLogout={handleLogout}
            onCoursesClick={() => setCurrentPage('courses')}
            onHomeClick={() => setCurrentPage('home')}
            onCalendarClick={() => setCurrentPage('calendar')}
            onTestClick={() => setCurrentPage('test')}
            onPortfolioClick={() => setCurrentPage('portfolio')}
            onDashboardClick={() => setCurrentPage('dashboard')}
            onNotificationsClick={() => setCurrentPage('notifications')}
            onProfileClick={() => setCurrentPage('profile')}
          />
        ) : currentPage === 'portfolio' ? (
          <PortfolioPage
            onLogout={handleLogout}
            onCoursesClick={() => setCurrentPage('courses')}
            onHomeClick={() => setCurrentPage('home')}
            onCalendarClick={() => setCurrentPage('calendar')}
            onTestClick={() => setCurrentPage('test')}
            onPortfolioClick={() => setCurrentPage('portfolio')}
            onDashboardClick={() => setCurrentPage('dashboard')}
            onNotificationsClick={() => setCurrentPage('notifications')}
            onProfileClick={() => setCurrentPage('profile')}
          />
        ) : currentPage === 'dashboard' ? (
          <DashboardPage
            onLogout={handleLogout}
            onCoursesClick={() => setCurrentPage('courses')}
            onHomeClick={() => setCurrentPage('home')}
            onCalendarClick={() => setCurrentPage('calendar')}
            onTestClick={() => setCurrentPage('test')}
            onPortfolioClick={() => setCurrentPage('portfolio')}
            onDashboardClick={() => setCurrentPage('dashboard')}
            onNotificationsClick={() => setCurrentPage('notifications')}
            onProfileClick={() => setCurrentPage('profile')}
          />
        ) : currentPage === 'notifications' ? (
          <NotificationPage
            onLogout={handleLogout}
            onCoursesClick={() => setCurrentPage('courses')}
            onHomeClick={() => setCurrentPage('home')}
            onCalendarClick={() => setCurrentPage('calendar')}
            onTestClick={() => setCurrentPage('test')}
            onPortfolioClick={() => setCurrentPage('portfolio')}
            onDashboardClick={() => setCurrentPage('dashboard')}
            onNotificationsClick={() => setCurrentPage('notifications')}
            onProfileClick={() => setCurrentPage('profile')}
          />
        ) : currentPage === 'profile' ? (
          <ProfilePage
            onLogout={handleLogout}
            onCoursesClick={() => setCurrentPage('courses')}
            onHomeClick={() => setCurrentPage('home')}
            onCalendarClick={() => setCurrentPage('calendar')}
            onTestClick={() => setCurrentPage('test')}
            onPortfolioClick={() => setCurrentPage('portfolio')}
            onDashboardClick={() => setCurrentPage('dashboard')}
            onNotificationsClick={() => setCurrentPage('notifications')}
            onProfileClick={() => setCurrentPage('profile')}
          />
        ) : null
      ) : currentPage === 'landing' ? (
        <LandingPage onLoginClick={navigateToLogin} onSignupClick={navigateToSignup} onAboutClick={navigateToAbout} />
      ) : currentPage === 'login' ? (
        <LoginPage onBackClick={navigateToLanding} onSignupClick={navigateToSignup} onLoginSuccess={handleLogin} />
      ) : currentPage === 'signup' ? (
        <SignupPage onBackClick={navigateToLanding} onLoginClick={navigateToLogin} onSignupSuccess={handleSignup} />
      ) : currentPage === 'courses' ? (
        <Course
          onLogout={handleLogout}
          onHomeClick={() => setCurrentPage('home')}
          onCoursesClick={() => setCurrentPage('courses')}
          onDashboardClick={() => setCurrentPage('dashboard')}
          onCalendarClick={() => setCurrentPage('calendar')}
          onPortfolioClick={() => setCurrentPage('portfolio')}
          onTestClick={() => setCurrentPage('test')}
          onNotificationsClick={() => setCurrentPage('notifications')}
          onProfileClick={() => setCurrentPage('profile')}
        />
      ) : (
        <AboutPage onBackClick={navigateToLanding} />
      )}
    </div>
  );
}

export default App;