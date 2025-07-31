import React, { createContext, useState, useEffect } from 'react';
import API_BASE_URL from '../config.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkLoggedIn = async () => {
      if (token) {
        try {
          const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`
            },
            credentials: 'include'
          });

          const data = await response.json();

          if (data.success) {
            setCurrentUser(data.data);
          } else {
            // Token is invalid or expired
            localStorage.removeItem('token');
            setToken(null);
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    checkLoggedIn();
  }, [token]);

  // Register user
  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setCurrentUser(data.user);
        return data;
      } else {
        setError(data.message || 'Registration failed');
        return data;
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Server error. Please try again later.');
      return { success: false, message: 'Server error' };
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setCurrentUser(data.user);
        return data;
      } else {
        setError(data.message || 'Login failed');
        return data;
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Server error. Please try again later.');
      return { success: false, message: 'Server error' };
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setCurrentUser(null);
  };

  // Update user profile
  const updateProfile = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/updatedetails`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (data.success) {
        setCurrentUser(data.data);
        return data;
      } else {
        setError(data.message || 'Update failed');
        return data;
      }
    } catch (error) {
      console.error('Update profile error:', error);
      setError('Server error. Please try again later.');
      return { success: false, message: 'Server error' };
    } finally {
      setLoading(false);
    }
  };

  // Update password
  const updatePassword = async (currentPassword, newPassword) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/updatepassword`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify({ currentPassword, newPassword })
      });

      const data = await response.json();

      if (data.success) {
        // Update token if provided
        if (data.token) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
        }
        return data;
      } else {
        setError(data.message || 'Password update failed');
        return data;
      }
    } catch (error) {
      console.error('Update password error:', error);
      setError('Server error. Please try again later.');
      return { success: false, message: 'Server error' };
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        token,
        loading,
        error,
        register,
        login,
        logout,
        updateProfile,
        updatePassword,
        setError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;