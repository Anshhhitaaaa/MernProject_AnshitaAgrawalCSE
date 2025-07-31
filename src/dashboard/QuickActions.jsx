import React from 'react';

const QuickActions = ({ onTestClick, onCalendarClick }) => {
  const actions = [
    {
      title: 'Start Studying',
      description: 'Begin your next study session',
      icon: '📖',
      color: 'bg-blue-500',
      action: () => console.log('Start studying')
    },
    {
      title: 'Take Quiz',
      description: 'Test your knowledge',
      icon: '🧪',
      color: 'bg-green-500',
      action: onTestClick || (() => console.log('Take quiz'))
    },
    {
      title: 'Review Notes',
      description: 'Go through your notes',
      icon: '📝',
      color: 'bg-purple-500',
      action: () => console.log('Review notes')
    },
    {
      title: 'Schedule Study',
      description: 'Plan your study time',
      icon: '📅',
      color: 'bg-orange-500',
      action: onCalendarClick || (() => console.log('Schedule study'))
    }
  ];

  return (
    <div className="quick-actions">
      <div className="section-header">
        <h3 className="section-title">Quick Actions</h3>
        <p className="section-subtitle">Get started with your studies</p>
      </div>
      
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            className="action-card"
            onClick={action.action}
          >
            <div className={`action-icon ${action.color}`}>
              <span>{action.icon}</span>
            </div>
            <div className="action-content">
              <h4 className="action-title">{action.title}</h4>
              <p className="action-description">{action.description}</p>
            </div>
            <div className="action-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;