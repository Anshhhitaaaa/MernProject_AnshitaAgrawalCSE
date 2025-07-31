import React, { createContext, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import config from '../config.js';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [userCourses, setUserCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { token } = useContext(AuthContext);

  // Get all courses
  const getAllCourses = async (query = '') => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.apiUrl}/courses${query}`);
      const data = await response.json();

      if (data.success) {
        setCourses(data.data);
        return data;
      } else {
        setError(data.message || 'Failed to fetch courses');
        return data;
      }
    } catch (error) {
      console.error('Get courses error:', error);
      setError('Server error. Please try again later.');
      return { success: false, message: 'Server error' };
    } finally {
      setLoading(false);
    }
  };

  // Get single course
  const getCourse = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.apiUrl}/courses/${id}`);
      const data = await response.json();

      if (data.success) {
        return data.data;
      } else {
        setError(data.message || 'Failed to fetch course');
        return null;
      }
    } catch (error) {
      console.error('Get course error:', error);
      setError('Server error. Please try again later.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Get user's enrolled courses
  const getUserCourses = async (userId) => {
    if (!token) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/users/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (data.success) {
        setUserCourses(data.data.enrolledCourses);
        return data.data.enrolledCourses;
      } else {
        setError(data.message || 'Failed to fetch user courses');
        return [];
      }
    } catch (error) {
      console.error('Get user courses error:', error);
      setError('Server error. Please try again later.');
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Enroll in a course
  const enrollCourse = async (courseId) => {
    if (!token) return { success: false, message: 'Authentication required' };
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.apiUrl}/courses/${courseId}/enroll`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (data.success) {
        // Update user courses
        setUserCourses(prev => [...prev, data.data.course]);
        return data;
      } else {
        setError(data.message || 'Failed to enroll in course');
        return data;
      }
    } catch (error) {
      console.error('Enroll course error:', error);
      setError('Server error. Please try again later.');
      return { success: false, message: 'Server error' };
    } finally {
      setLoading(false);
    }
  };

  // Rate a course
  const rateCourse = async (courseId, rating, comment) => {
    if (!token) return { success: false, message: 'Authentication required' };
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.apiUrl}/courses/${courseId}/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ rating, comment })
      });
      const data = await response.json();

      if (data.success) {
        // Update course in courses array
        setCourses(prev => 
          prev.map(course => 
            course._id === courseId ? data.data : course
          )
        );
        return data;
      } else {
        setError(data.message || 'Failed to rate course');
        return data;
      }
    } catch (error) {
      console.error('Rate course error:', error);
      setError('Server error. Please try again later.');
      return { success: false, message: 'Server error' };
    } finally {
      setLoading(false);
    }
  };

  // Create a new course (for instructors)
  const createCourse = async (courseData) => {
    if (!token) return { success: false, message: 'Authentication required' };
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${config.apiUrl}/courses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(courseData)
      });
      const data = await response.json();

      if (data.success) {
        // Add new course to courses array
        setCourses(prev => [...prev, data.data]);
        return data;
      } else {
        setError(data.message || 'Failed to create course');
        return data;
      }
    } catch (error) {
      console.error('Create course error:', error);
      setError('Server error. Please try again later.');
      return { success: false, message: 'Server error' };
    } finally {
      setLoading(false);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        userCourses,
        loading,
        error,
        getAllCourses,
        getCourse,
        getUserCourses,
        enrollCourse,
        rateCourse,
        createCourse,
        setError
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;