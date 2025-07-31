import React from 'react';

const Sidebar = ({ 
  isOpen, 
  onClose, 
  onLogout, 
  onCoursesClick, 
  onHomeClick, 
  onCalendarClick, 
  onTestClick, 
  onPortfolioClick, 
  onDashboardClick 
}) => {
  const menuItems = [
    { icon: '🏠', label: 'Home', action: onHomeClick },
    { icon: '📚', label: 'Courses', action: onCoursesClick },
    { icon: '📊', label: 'Dashboard', action: onDashboardClick, active: true },
    { icon: '📅', label: 'Calendar', action: onCalendarClick },
    { icon: '📁', label: 'Portfolio', action: onPortfolioClick },
    { icon: '🧪', label: 'Test', action: onTestClick },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose}></div>
      )}
      
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">Dashboard</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                <button 
                  onClick={() => {
                    if (item.action) {
                      item.action();
                      onClose();
                    }
                  }}
                  className="nav-link"
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" />
            </div>
            <div className="user-info">
              <h4 className="user-name">John Doe</h4>
              <p className="user-role">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 