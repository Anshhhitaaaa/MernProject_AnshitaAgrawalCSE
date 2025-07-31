import React, { useState } from 'react';
import { Header } from '../home/Header';
import ProfileHeader from './ProfileHeader';
import PersonalInfo from './PersonalInfo';
import AchievementSection from './AchievementSection';
import EnrolledCourses from './EnrolledCourses';
import ActivityFeed from './ActivityFeed';
import { Footer } from '../home/Footer';

const ProfilePage = ({ 
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
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
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
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <ProfileHeader />
        
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'personal' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'achievements' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
            >
              Achievements
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'courses' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
            >
              Enrolled Courses
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-6 py-4 text-sm font-medium ${activeTab === 'activity' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
            >
              Activity
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'personal' && <PersonalInfo />}
            {activeTab === 'achievements' && <AchievementSection />}
            {activeTab === 'courses' && <EnrolledCourses />}
            {activeTab === 'activity' && <ActivityFeed />}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;