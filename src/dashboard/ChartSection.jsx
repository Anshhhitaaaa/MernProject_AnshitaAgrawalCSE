import React from 'react';

const ChartSection = () => {
  const studyData = [
    { day: 'Mon', hours: 3.5, lectures: 4 },
    { day: 'Tue', hours: 2.8, lectures: 3 },
    { day: 'Wed', hours: 4.2, lectures: 5 },
    { day: 'Thu', hours: 3.1, lectures: 3 },
    { day: 'Fri', hours: 2.5, lectures: 2 },
    { day: 'Sat', hours: 1.8, lectures: 2 },
    { day: 'Sun', hours: 1.2, lectures: 1 }
  ];

  const maxHours = Math.max(...studyData.map(d => d.hours));
  const maxLectures = Math.max(...studyData.map(d => d.lectures));

  const studyGoals = [
    { title: 'Daily Goal', target: 3, current: 2.7, unit: 'hours' },
    { title: 'Weekly Goal', target: 21, current: 19.1, unit: 'hours' },
    { title: 'Lectures Goal', target: 20, current: 20, unit: 'lectures' }
  ];

  const upcomingDeadlines = [
    { title: 'React Assignment', due: 'Tomorrow', priority: 'high' },
    { title: 'JavaScript Quiz', due: 'Friday', priority: 'medium' },
    { title: 'CSS Project', due: 'Next Week', priority: 'low' }
  ];

  const studyTips = [
    'Take 5-minute breaks every 25 minutes',
    'Review notes within 24 hours of learning',
    'Practice active recall techniques',
    'Stay hydrated and maintain good posture'
  ];

  return (
    <div className="chart-section">
      <div className="chart-header">
        <h3 className="chart-title">Study Progress This Week</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color hours-color"></div>
            <span>Study Hours</span>
          </div>
          <div className="legend-item">
            <div className="legend-color lectures-color"></div>
            <span>Lectures</span>
          </div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-bars">
          {studyData.map((data, index) => (
            <div key={index} className="chart-bar-group">
              <div className="bars">
                <div
                  className="bar"
                  style={{
                    height: `${(data.hours / maxHours) * 100}%`,
                    backgroundColor: '#3b82f6'
                  }}
                  title={`${data.hours}h`}
                ></div>
                <div
                  className="bar"
                  style={{
                    height: `${(data.lectures / maxLectures) * 100}%`,
                    backgroundColor: '#10b981'
                  }}
                  title={`${data.lectures} lectures`}
                ></div>
              </div>
              <div className="bar-label">{data.day}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-summary">
        <div className="summary-item">
          <span className="summary-label">Total Hours</span>
          <span className="summary-value">{studyData.reduce((sum, d) => sum + d.hours, 0).toFixed(1)}h</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Lectures</span>
          <span className="summary-value">{studyData.reduce((sum, d) => sum + d.lectures, 0)}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Daily Average</span>
          <span className="summary-value">{(studyData.reduce((sum, d) => sum + d.hours, 0) / 7).toFixed(1)}h</span>
        </div>
      </div>

      {/* Additional Study Progress Content */}
      <div className="study-progress-content">
        {/* Study Goals Section */}
        <div className="progress-section">
          <h4 className="section-title">Study Goals</h4>
          <div className="goals-grid">
            {studyGoals.map((goal, index) => (
              <div key={index} className="goal-card">
                <div className="goal-header">
                  <span className="goal-title">{goal.title}</span>
                  <span className="goal-progress">{goal.current}/{goal.target} {goal.unit}</span>
                </div>
                <div className="goal-bar">
                  <div
                    className="goal-progress-fill"
                    style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines Section */}
        <div className="progress-section">
          <h4 className="section-title">Upcoming Deadlines</h4>
          <div className="deadlines-list">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className={`deadline-item priority-${deadline.priority}`}>
                <div className="deadline-info">
                  <span className="deadline-title">{deadline.title}</span>
                  <span className="deadline-due">Due: {deadline.due}</span>
                </div>
                <div className={`priority-badge ${deadline.priority}`}>
                  {deadline.priority}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Tips Section */}
        <div className="progress-section">
          <h4 className="section-title">Study Tips</h4>
          <div className="tips-list">
            {studyTips.map((tip, index) => (
              <div key={index} className="tip-item">
                <span className="tip-icon">💡</span>
                <span className="tip-text">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection; 