import React, { useState } from 'react';

const EnrolledCourses = () => {
  // Mock courses data - in a real app, this would come from props or context
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Advanced JavaScript Concepts',
      instructor: 'Dr. Sarah Johnson',
      progress: 85,
      startDate: '2023-01-15',
      endDate: '2023-04-30',
      status: 'in-progress',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Master advanced JavaScript concepts including closures, prototypes, async/await, and more.',
      nextLesson: 'Functional Programming Paradigms',
      totalLessons: 24,
      completedLessons: 18
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      instructor: 'Prof. Michael Chen',
      progress: 62,
      startDate: '2023-02-10',
      endDate: '2023-05-20',
      status: 'in-progress',
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      description: 'Learn the fundamentals of machine learning algorithms, data preprocessing, and model evaluation.',
      nextLesson: 'Support Vector Machines',
      totalLessons: 32,
      completedLessons: 20
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      instructor: 'Emma Rodriguez',
      progress: 100,
      startDate: '2022-11-05',
      endDate: '2023-02-15',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      description: 'Master the principles of user interface and user experience design for creating intuitive digital products.',
      nextLesson: null,
      totalLessons: 18,
      completedLessons: 18
    },
    {
      id: 4,
      title: 'Full Stack Web Development',
      instructor: 'Alex Thompson',
      progress: 35,
      startDate: '2023-03-01',
      endDate: '2023-08-15',
      status: 'in-progress',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      description: 'Build complete web applications using modern technologies like React, Node.js, Express, and MongoDB.',
      nextLesson: 'RESTful API Design',
      totalLessons: 40,
      completedLessons: 14
    },
    {
      id: 5,
      title: 'Data Structures and Algorithms',
      instructor: 'Dr. Robert Lee',
      progress: 0,
      startDate: '2023-05-10',
      endDate: '2023-08-30',
      status: 'not-started',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      description: 'Learn essential data structures and algorithms for efficient problem-solving and technical interviews.',
      nextLesson: 'Introduction to Algorithms',
      totalLessons: 30,
      completedLessons: 0
    }
  ]);

  const [filter, setFilter] = useState('all');

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Filter courses based on status
  const filteredCourses = courses.filter(course => {
    if (filter === 'all') return true;
    if (filter === 'in-progress') return course.status === 'in-progress';
    if (filter === 'completed') return course.status === 'completed';
    if (filter === 'not-started') return course.status === 'not-started';
    return true;
  });

  // Function to get status badge style
  const getStatusBadge = (status) => {
    switch (status) {
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'not-started':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to get status text
  const getStatusText = (status) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'not-started':
        return 'Not Started';
      default:
        return status;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Enrolled Courses</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilter('all')} 
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('in-progress')} 
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'in-progress' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            In Progress
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'completed' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            Completed
          </button>
          <button 
            onClick={() => setFilter('not-started')} 
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'not-started' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            Not Started
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 h-48 md:h-auto">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-5 md:w-3/4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">Instructor: {course.instructor}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 md:mt-0 ${getStatusBadge(course.status)}`}>
                      {getStatusText(course.status)}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-600 h-2.5 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
                    <div className="flex space-x-4 mb-2 sm:mb-0">
                      <span className="text-gray-600">
                        <span className="font-medium">{course.completedLessons}</span>/{course.totalLessons} lessons
                      </span>
                      <span className="text-gray-600">
                        {formatDate(course.startDate)} - {formatDate(course.endDate)}
                      </span>
                    </div>
                    
                    {course.status !== 'completed' && (
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-200">
                        {course.status === 'not-started' ? 'Start Course' : 'Continue Learning'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">You don't have any {filter !== 'all' ? getStatusText(filter).toLowerCase() : ''} courses at the moment.</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Browse Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrolledCourses;