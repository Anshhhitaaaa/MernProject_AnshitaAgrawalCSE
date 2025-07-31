import React, { useState, useEffect } from "react";
import { getMonthDays, getMonthName, isToday, isSameDay } from "./utils";
import styles from "./Calendar.module.css";

const Calendar = ({ onDateSelect, selectedDate: propSelectedDate, events = [] }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(propSelectedDate || null);

  const days = getMonthDays(currentYear, currentMonth);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePrev = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (onDateSelect) onDateSelect(date);
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    const ymd = date.toISOString().slice(0, 10);
    return events.filter(e => e.date === ymd);
  };

  // Animation effect when month changes
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentMonth, currentYear]);

  return (
    <div className={`${styles['glass-card']} max-w-md mx-auto rounded-2xl shadow-xl border border-white/50 p-6 transition-all duration-300 hover:shadow-2xl ${styles['animate-float']}`}>
      {/* Header with Month/Year and Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={handlePrev} 
          className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-indigo-300/40 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className={`text-center transform transition-all duration-300 ease-in-out ${animate ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            {getMonthName(currentMonth)} {currentYear}
          </h2>
        </div>
        <button 
          onClick={handleNext} 
          className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-pink-300/40 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Week Days Header */}
      <div className="grid grid-cols-7 gap-1 mb-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center py-2">
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">{day}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 p-2 bg-white/40 backdrop-blur-sm rounded-xl shadow-inner">
        {days.map((date, idx) => (
          <div key={idx} className={`min-h-[70px] flex flex-col transition-all duration-300 ease-in-out ${styles['calendar-day-hover']}`} 
               style={{
                 opacity: date ? 1 : 0.3,
                 transform: `scale(${animate ? 0.95 : 1})`,
                 transition: `all 300ms ${idx * 10}ms ease-in-out`
               }}>
            <button
              onClick={() => date && handleDateClick(date)}
              disabled={!date}
              className={`
                relative w-full h-10 rounded-xl transition-all duration-300 font-bold text-sm
                ${!date ? "bg-transparent cursor-default" : "hover:bg-gradient-to-br hover:from-indigo-100 hover:to-pink-100 hover:shadow-md hover:scale-105"}
                ${date && isToday(date) ? `bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg ring-2 ring-blue-300/50 ${styles['today-indicator']}` : ""}
                ${date && selectedDate && isSameDay(date, selectedDate) ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg ring-2 ring-pink-300/50" : ""}
                ${date && !isToday(date) && (!selectedDate || !isSameDay(date, selectedDate)) ? "text-gray-700 hover:text-gray-900 bg-white/60 backdrop-blur-sm shadow-sm" : ""}
                focus:outline-none focus:ring-2 focus:ring-indigo-300
              `}
            >
              {date ? date.getDate() : ""}
            </button>
            
            {/* Event Indicators */}
            <div className="flex-1 flex flex-col gap-1 mt-2">
              {getEventsForDate(date).map((event, i) => (
                <div
                  key={i}
                  className={`${styles['event-pill']} text-xs px-2 py-1 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer`}
                  title={event.name}
                >
                  {event.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-white/50">
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-2 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm"></div>
            <span className="text-gray-700 font-medium">Today</span>
          </div>
          <div className="flex items-center gap-2 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-sm"></div>
            <span className="text-gray-700 font-medium">Selected</span>
          </div>
          <div className="flex items-center gap-2 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 shadow-sm"></div>
            <span className="text-gray-700 font-medium">Events</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;