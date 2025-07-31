import React, { useState, useEffect } from 'react';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';

const NotificationPage = ({
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
  // Sample notification data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'study',
      title: 'Assignment Due',
      message: 'Your Data Structures assignment is due tomorrow',
      date: '2023-06-15',
      isRead: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'pending',
      title: 'Project Submission',
      message: 'Final project submission deadline is approaching',
      date: '2023-06-20',
      isRead: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'hackathon',
      title: 'Upcoming Hackathon',
      message: 'Register for the AI Innovation Hackathon by June 25',
      date: '2023-06-25',
      isRead: true,
      priority: 'medium'
    },
    {
      id: 4,
      type: 'study',
      title: 'New Course Available',
      message: 'A new course on Machine Learning has been added to your curriculum',
      date: '2023-06-10',
      isRead: true,
      priority: 'low'
    },
    {
      id: 5,
      type: 'hackathon',
      title: 'Hackathon Results',
      message: 'Results for the Web Development Hackathon are now available',
      date: '2023-06-05',
      isRead: false,
      priority: 'high'
    },
    {
      id: 6,
      type: 'pending',
      title: 'Course Registration',
      message: 'Registration for next semester courses is now open',
      date: '2023-06-30',
      isRead: false,
      priority: 'high'
    }
  ]);

  const [filter, setFilter] = useState('all');

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  // Filter notifications
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(notification => notification.type === filter);

  // Sort notifications by date (newest first) and priority
  const sortedNotifications = [...filteredNotifications].sort((a, b) => {
    // First sort by read status (unread first)
    if (a.isRead !== b.isRead) {
      return a.isRead ? 1 : -1;
    }
    
    // Then sort by priority
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    
    // Finally sort by date
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col">
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
      />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden backdrop-blur-sm bg-white/90 border border-purple-100 transition-all duration-300 hover:shadow-2xl">
          <div className="p-6 border-b border-purple-100">
            <h1 className="text-3xl font-bold text-indigo-800 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your academic activities and events</p>
          </div>
          
          {/* Filter tabs */}
          <div className="flex border-b border-purple-100 bg-gradient-to-r from-indigo-50 to-purple-50">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 font-medium transition-colors duration-200 ${filter === 'all' ? 'text-indigo-700 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('study')} 
              className={`px-6 py-3 font-medium transition-colors duration-200 ${filter === 'study' ? 'text-indigo-700 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Study
            </button>
            <button 
              onClick={() => setFilter('pending')} 
              className={`px-6 py-3 font-medium transition-colors duration-200 ${filter === 'pending' ? 'text-indigo-700 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Pending
            </button>
            <button 
              onClick={() => setFilter('hackathon')} 
              className={`px-6 py-3 font-medium transition-colors duration-200 ${filter === 'hackathon' ? 'text-indigo-700 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Hackathons
            </button>
          </div>
          
          {/* Notifications list */}
          <div className="divide-y divide-purple-100">
            {sortedNotifications.length > 0 ? (
              sortedNotifications.map(notification => (
                <div 
                  key={notification.id} 
                  className={`p-4 sm:p-6 transition-colors duration-200 hover:bg-indigo-50 ${!notification.isRead ? 'bg-indigo-50/50' : ''}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start">
                    {/* Notification icon */}
                    <div className={`rounded-full p-3 mr-4 ${getNotificationTypeStyles(notification.type).bgColor}`}>
                      {getNotificationTypeStyles(notification.type).icon}
                    </div>
                    
                    {/* Notification content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-semibold ${!notification.isRead ? 'text-indigo-800' : 'text-gray-700'}`}>
                          {notification.title}
                          {!notification.isRead && (
                            <span className="ml-2 inline-block w-2 h-2 bg-indigo-600 rounded-full"></span>
                          )}
                        </h3>
                        <span className="text-sm text-gray-500">{formatDate(notification.date)}</span>
                      </div>
                      <p className="text-gray-600 mb-2">{notification.message}</p>
                      
                      {/* Priority indicator */}
                      <div className="flex items-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityStyles(notification.priority)}`}>
                          {notification.priority.charAt(0).toUpperCase() + notification.priority.slice(1)} Priority
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-lg font-medium">No notifications found</p>
                <p>There are no notifications matching your filter criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper function to format date
const formatDate = (dateString) => {
  const options = { month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Helper function to get notification type styles
const getNotificationTypeStyles = (type) => {
  switch (type) {
    case 'study':
      return {
        bgColor: 'bg-blue-100',
        icon: (
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      };
    case 'pending':
      return {
        bgColor: 'bg-yellow-100',
        icon: (
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      };
    case 'hackathon':
      return {
        bgColor: 'bg-purple-100',
        icon: (
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        )
      };
    default:
      return {
        bgColor: 'bg-gray-100',
        icon: (
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      };
  }
};

// Helper function to get priority styles
const getPriorityStyles = (priority) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default NotificationPage;