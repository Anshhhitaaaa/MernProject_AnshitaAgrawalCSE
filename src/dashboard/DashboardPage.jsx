import React, { useState } from 'react';
import Header from './Header';
import StatsCards from './StatsCards';
import RecentActivity from './RecentActivity';
import ChartSection from './ChartSection';
import QuickActions from './QuickActions';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Dashboard.css';

const DashboardPage = ({ 
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        onLogout={onLogout}
        onCoursesClick={onCoursesClick}
        onHomeClick={onHomeClick}
        onCalendarClick={onCalendarClick}
        onTestClick={onTestClick}
        onPortfolioClick={onPortfolioClick}
        onDashboardClick={onDashboardClick}
      />
      <div className="main-content">
        <Header 
          onLogout={onLogout}
          onCoursesClick={onCoursesClick}
          onHomeClick={onHomeClick}
          onCalendarClick={onCalendarClick}
          onTestClick={onTestClick}
          onPortfolioClick={onPortfolioClick}
          onDashboardClick={onDashboardClick}
          onNotificationsClick={onNotificationsClick}
          onProfileClick={onProfileClick}
          onMenuClick={toggleSidebar}
        />
        
        <div className="dashboard-content">
          <div className="welcome-section">
            <h1 className="welcome-title">Welcome back, Student! 👋</h1>
            <p className="welcome-subtitle">Track your learning progress and stay motivated with your studies.</p>
          </div>

          <StatsCards />
          
          <div className="dashboard-grid">
            <div className="chart-section">
              <ChartSection />
            </div>
            
            <div className="sidebar-widgets">
              <QuickActions 
                onTestClick={onTestClick}
                onCalendarClick={onCalendarClick}
              />
              <RecentActivity />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;