import React from 'react';

const ActivityFeed = () => {
  // Mock activity data - in a real app, this would come from props or context
  const activities = [
    {
      id: 1,
      type: 'course-progress',
      title: 'Completed a lesson',
      description: 'Completed "Async/Await in JavaScript" in Advanced JavaScript Concepts',
      timestamp: '2023-04-28T14:30:00Z',
      icon: '📚'
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Earned a badge',
      description: 'Earned the "JavaScript Ninja" badge for completing all JavaScript challenges',
      timestamp: '2023-04-27T10:15:00Z',
      icon: '🏆'
    },
    {
      id: 3,
      type: 'submission',
      title: 'Submitted an assignment',
      description: 'Submitted "Machine Learning Model Implementation" for Machine Learning Fundamentals',
      timestamp: '2023-04-25T16:45:00Z',
      icon: '📝'
    },
    {
      id: 4,
      type: 'forum',
      title: 'Posted in forum',
      description: 'Posted a question about "React Hooks Best Practices" in the Web Development forum',
      timestamp: '2023-04-23T09:20:00Z',
      icon: '💬'
    },
    {
      id: 5,
      type: 'course-enrollment',
      title: 'Enrolled in a course',
      description: 'Enrolled in "Data Structures and Algorithms" taught by Dr. Robert Lee',
      timestamp: '2023-04-20T11:10:00Z',
      icon: '🎓'
    },
    {
      id: 6,
      type: 'grade',
      title: 'Received a grade',
      description: 'Received 95% on "UI/UX Design Principles Final Project"',
      timestamp: '2023-04-18T15:30:00Z',
      icon: '📊'
    },
    {
      id: 7,
      type: 'certificate',
      title: 'Earned a certificate',
      description: 'Earned the "UI/UX Design Principles" certificate',
      timestamp: '2023-04-15T13:45:00Z',
      icon: '🎖️'
    },
    {
      id: 8,
      type: 'profile-update',
      title: 'Updated profile',
      description: 'Added new skills: React Native, GraphQL',
      timestamp: '2023-04-10T10:00:00Z',
      icon: '👤'
    },
    {
      id: 9,
      type: 'course-progress',
      title: 'Started a new module',
      description: 'Started "Advanced React Patterns" in Full Stack Web Development',
      timestamp: '2023-04-05T09:15:00Z',
      icon: '📚'
    },
    {
      id: 10,
      type: 'collaboration',
      title: 'Joined a study group',
      description: 'Joined the "Machine Learning Study Group" with 5 other students',
      timestamp: '2023-04-01T16:20:00Z',
      icon: '👥'
    }
  ];

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      // Today - show time
      return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (diffDays === 1) {
      // Yesterday
      return 'Yesterday';
    } else if (diffDays < 7) {
      // Within a week
      return `${diffDays} days ago`;
    } else {
      // More than a week
      return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    }
  };

  // Function to get activity type color
  const getActivityTypeColor = (type) => {
    switch (type) {
      case 'course-progress':
        return 'bg-blue-100 text-blue-800';
      case 'achievement':
        return 'bg-yellow-100 text-yellow-800';
      case 'submission':
        return 'bg-green-100 text-green-800';
      case 'forum':
        return 'bg-purple-100 text-purple-800';
      case 'course-enrollment':
        return 'bg-indigo-100 text-indigo-800';
      case 'grade':
        return 'bg-pink-100 text-pink-800';
      case 'certificate':
        return 'bg-orange-100 text-orange-800';
      case 'profile-update':
        return 'bg-gray-100 text-gray-800';
      case 'collaboration':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Activity Feed</h2>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
          Filter Activities
        </button>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-8 top-5 w-3 h-3 -ml-1.5 bg-white border-2 border-indigo-600 rounded-full"></div>
              
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-50 text-2xl">
                {activity.icon}
              </div>
              
              {/* Content */}
              <div className="ml-4 flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">{formatDate(activity.timestamp)}</span>
                </div>
                
                <p className="text-gray-700 mb-2">{activity.description}</p>
                
                <div className="flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getActivityTypeColor(activity.type)}`}>
                    {activity.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                  
                  <div className="ml-auto flex space-x-2">
                    {activity.type === 'forum' && (
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200">
                        View Discussion
                      </button>
                    )}
                    {activity.type === 'submission' && (
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200">
                        View Submission
                      </button>
                    )}
                    {activity.type === 'course-progress' && (
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200">
                        Continue Course
                      </button>
                    )}
                    {activity.type === 'certificate' && (
                      <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors duration-200">
                        View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load more button */}
        <div className="mt-8 text-center">
          <button className="bg-white hover:bg-gray-50 text-indigo-600 px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium transition-colors duration-200">
            Load More Activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;