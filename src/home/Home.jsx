import { Footer } from './Footer';
import { Header } from './Header';
import Calendar from '../calendar';
import { useState } from 'react';

const featuredCourses = [
  {
    title: 'React Mastery',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'Build modern web apps with React and hooks.',
    progress: 70,
  },
  {
    title: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Design beautiful, user-friendly interfaces.',
    progress: 40,
  },
  {
    title: 'Python for Data Science',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    description: 'Analyze data and build ML models with Python.',
    progress: 90,
  },
];

const upcomingEvents = [
  { title: 'Live React Q&A', date: '2024-06-10', time: '5:00 PM' },
  { title: 'UI/UX Design Challenge', date: '2024-06-12', time: '7:00 PM' },
  { title: 'Python Quiz', date: '2024-06-15', time: '6:00 PM' },
];

const achievements = [
  { label: 'Courses Completed', value: 5 },
  { label: 'Tests Passed', value: 12 },
  { label: 'Badges Earned', value: 4 },
];

export default function Home({ onLogout, onCoursesClick, onHomeClick, onCalendarClick, onTestClick, onPortfolioClick, onDashboardClick, onNotificationsClick, onProfileClick }) {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Beautiful Navbar */}
      <Header onLogout={onLogout} onCoursesClick={onCoursesClick} onHomeClick={onHomeClick} onCalendarClick={onCalendarClick} onTestClick={onTestClick} onPortfolioClick={onPortfolioClick} onDashboardClick={onDashboardClick} onNotificationsClick={onNotificationsClick} onProfileClick={onProfileClick} />
      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-2xl p-4 relative">
            <button onClick={() => setShowCalendar(false)} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold">&times;</button>
            <Calendar />
          </div>
        </div>
      )}
      <div className="pt-20 flex-1 flex flex-col">
        {/* Welcome Banner */}
        <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-b-3xl shadow-lg animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">Welcome back, John Doe! 👋</h1>
            <p className="text-lg text-white/90">Ready to continue your learning journey? Let’s make today productive!</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-indigo-100 hover:scale-105 transition-all duration-200">Start Learning</button>
            <button className="px-8 py-3 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-all duration-200">Join Class</button>
            <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:bg-purple-100 hover:scale-105 transition-all duration-200" onClick={onTestClick}>Take Test</button>
          </div>
        </section>
        {/* Calendar Quick Access */}
        <div className="max-w-7xl mx-auto w-full flex justify-end mt-6 pr-4">
          <button
            onClick={onCalendarClick}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-pink-300/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2"/></svg>
            Go to Calendar
          </button>
        </div>

        {/* Featured Courses */}
        <section className="max-w-7xl mx-auto w-full py-12 px-4">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl p-6 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform duration-200 border border-indigo-50">
                <img src={course.image} alt={course.title} className="rounded-xl h-40 w-full object-cover mb-4 shadow-md" />
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-3 rounded-full transition-all duration-300" style={{ width: `${course.progress}%` }}></div>
                </div>
                <span className="text-sm text-gray-500">Progress: {course.progress}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="max-w-7xl mx-auto w-full py-12 px-4">
          <h2 className="text-2xl font-bold text-pink-700 mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-transform duration-200 border border-pink-50">
                <span className="text-xs font-bold text-purple-600 mb-2">{event.date} • {event.time}</span>
                <h3 className="text-lg font-semibold text-indigo-800">{event.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="max-w-7xl mx-auto w-full py-12 px-4">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Your Achievements</h2>
          <div className="flex gap-8 flex-wrap">
            {achievements.map((ach, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white rounded-3xl shadow-xl px-10 py-8 min-w-[180px] hover:scale-105 hover:shadow-2xl transition-transform duration-200 border border-purple-50">
                <span className="text-4xl font-extrabold text-indigo-500 mb-2 animate-bounce-slow">{ach.value}</span>
                <span className="text-lg font-semibold text-gray-700">{ach.label}</span>
              </div>
            ))}
          </div>
        </section>
        <div className="flex-1" />
      </div>
      <Footer />
    </div>
  );
}
