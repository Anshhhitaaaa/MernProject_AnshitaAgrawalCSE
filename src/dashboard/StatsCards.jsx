import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      title: 'Lectures Watched',
      value: '24',
      change: '+3',
      changeType: 'positive',
      icon: '📚',
      description: 'This week'
    },
    {
      title: 'Study Hours',
      value: '18.5',
      change: '+2.5',
      changeType: 'positive',
      icon: '⏰',
      description: 'This week'
    },
    {
      title: 'Tasks Completed',
      value: '12',
      change: '+4',
      changeType: 'positive',
      icon: '✅',
      description: 'This week'
    },
    {
      title: 'Current Streak',
      value: '7',
      change: '+1',
      changeType: 'positive',
      icon: '🔥',
      description: 'Days'
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-header">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-change">
              <span className={`change-indicator ${stat.changeType}`}>
                {stat.change}
              </span>
            </div>
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-title">{stat.title}</p>
            <p className="stat-description">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards; 