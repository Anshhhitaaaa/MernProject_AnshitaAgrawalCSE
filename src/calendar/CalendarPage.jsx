import React, { useState } from "react";
import Calendar from "./Calendar";
import { Header } from "./Header";
import Footer from "../dashboard/Footer";

const initialEvents = [
  { date: "2024-06-10", name: "Live React Q&A" },
  { date: "2024-06-12", name: "UI/UX Design Challenge" },
  { date: "2024-06-15", name: "Python Quiz" },
];

export default function CalendarPage({ onHomeClick, onCoursesClick, onCalendarClick, onTestClick, onPortfolioClick, onDashboardClick, onLogout, onNotificationsClick, onProfileClick }) {
  const [events, setEvents] = useState(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ date: "", name: "" });
  const [error, setError] = useState("");

  const handleOpen = () => {
    setForm({ date: "", name: "" });
    setError("");
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.name) {
      setError("Please enter both date and event name.");
      return;
    }
    setEvents([...events, { date: form.date, name: form.name }]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-gradient-x">
      <Header 
        onHomeClick={onHomeClick}
        onCoursesClick={onCoursesClick}
        onCalendarClick={onCalendarClick}
        onTestClick={onTestClick}
        onPortfolioClick={onPortfolioClick}
        onDashboardClick={onDashboardClick}
        onLogout={onLogout}
        onNotificationsClick={onNotificationsClick}
        onProfileClick={onProfileClick}
      />
      
      <div className="container mx-auto px-4 py-12 animate-fadeIn">
        <div className="flex justify-between items-center mb-8 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Event Calendar</h1>
          <button 
            onClick={handleOpen}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-600 hover:shadow-indigo-300/30 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 font-medium"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Event
            </span>
          </button>
        </div>
        
        <div className="glass-card p-6 rounded-2xl shadow-xl border border-white/50 backdrop-blur-md bg-white/20 transition-all duration-300 hover:shadow-2xl">
          {showModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full p-8 border border-white/50 transform transition-all duration-300 animate-scaleIn">
                <button onClick={handleClose} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl font-bold">&times;</button>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-6">Add New Event</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="shadow-inner appearance-none border border-gray-300/50 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-200 bg-white/80"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="shadow-inner appearance-none border border-gray-300/50 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-all duration-200 bg-white/80"
                      placeholder="Enter event name"
                      required
                    />
                  </div>
                  
                  {error && <div className="text-red-500 text-sm">{error}</div>}
                  
                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="bg-white hover:bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 border border-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Add Event
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className="mt-4">
            <Calendar events={events} />
          </div>
        </div>
      </div>
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.7);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10),0 1.5px 8px 0 rgba(80,0,120,0.06);
        }
        @keyframes gradient-x {
          0%, 100% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.7s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
      <Footer />
    </div>
  );
}