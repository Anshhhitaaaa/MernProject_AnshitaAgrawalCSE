import React from 'react';

const RecentActivity = () => {
  const activities = [
    {
      type: 'lecture',
      title: 'Completed React Fundamentals',
      description: 'Finished lecture on React components and props',
      time: '2 hours ago',
      icon: '📚',
      color: 'bg-blue-500'
    },
    {
      type: 'assignment',
      title: 'Submitted JavaScript Assignment',
      description: 'Turned in the DOM manipulation exercise',
      time: '4 hours ago',
      icon: '📝',
      color: 'bg-green-500'
    },
    {
      type: 'quiz',
      title: 'Scored 85% on CSS Quiz',
      description: 'Completed the CSS Grid and Flexbox quiz',
      time: '1 day ago',
      icon: '🧪',
      color: 'bg-purple-500'
    },
    {
      type: 'study',
      title: 'Study Session Completed',
      description: 'Spent 2.5 hours studying algorithms',
      time: '1 day ago',
      icon: '⏰',
      color: 'bg-orange-500'
    },
    {
      type: 'lecture',
      title: 'Watched Node.js Basics',
      description: 'Completed introduction to Node.js and Express',
      time: '2 days ago',
      icon: '📚',
      color: 'bg-blue-500'
    },
    {
      type: 'assignment',
      title: 'Started Portfolio Project',
      description: 'Began working on the final portfolio assignment',
      time: '3 days ago',
      icon: '📝',
      color: 'bg-green-500'
    }
  ];

  const getActivityTypeLabel = (type) => {
    switch (type) {
      case 'lecture': return 'Lecture';
      case 'assignment': return 'Assignment';
      case 'quiz': return 'Quiz';
      case 'study': return 'Study Session';
      default: return 'Activity';
    }
  };

  return (
    <div className="recent-activity">
      <div className="section-header">
        <h3 className="section-title">Recent Activity</h3>
        <p className="section-subtitle">Your latest study activities</p>
      </div>
      
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className={`activity-icon ${activity.color}`}>
              <span>{activity.icon}</span>
            </div>
            <div className="activity-content">
              <div className="activity-header">
                <h4 className="activity-title">{activity.title}</h4>
                <span className="activity-time">{activity.time}</span>
              </div>
              <p className="activity-description">{activity.description}</p>
              <span className="activity-type">{getActivityTypeLabel(activity.type)}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="view-all-btn">
        View All Activities
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default RecentActivity; 