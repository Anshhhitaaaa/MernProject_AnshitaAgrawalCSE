import React from "react";
import { Header } from './Header';
import { Footer } from './Footer';

const testData = [
  {
    id: 1,
    course: "Design",
    title: "UI/UX",
    level: 1,
    date: "27 January 2025",
    submitBy: "8 February 2025",
  },
  {
    id: 2,
    course: "Design",
    title: "Video editing",
    level: 1,
    date: "8 February 2025",
    submitBy: "8 February 2025",
  },
  {
    id: 3,
    course: "Coding",
    title: "DSA in Java",
    level: 1,
    date: "30 January 2025",
    submitBy: "14 February 2025",
  },
  {
    id: 4,
    course: "Design",
    title: "UI/UX",
    level: 2,
    date: "27 May 2025",
    submitBy: "8 June 2025",
  },
  {
    id: 5,
    course: "Data",
    title: "Advertisment",
    level: 1,
    date: "16 April 2025",
    submitBy: "28 April 2025",
  },
  {
    id: 6,
    course: "Data",
    title: "Marketing",
    level: 1,
    date: "27 January 2025",
    submitBy: "8 February 2025",
  },
  {
    id: 7,
    course: "Code",
    title: "Python",
    level: 1,
    date: "3 August 2025",
    submitBy: "10 August 2025",
  },
  {
    id: 8,
    course: "Design",
    title: "Mastering Design System",
    level: 3,
    date: "27 March 2025",
    submitBy: "8 April 2025",
  },
  {
    id: 9,
    course: "Data",
    title: "Learn data analyst",
    level: 1,
    date: "27 July 2025",
    submitBy: "8 August 2025",
  },
  {
    id: 10,
    course: "Coding",
    title: "Web Development",
    level: 1,
    date: "2 July 2025",
    submitBy: "8 July 2025",
  },
];

const Sidebar = () => (
  <aside className="bg-white rounded-xl shadow p-6 w-64 min-h-[400px] flex flex-col gap-4">
    <div>
      <h2 className="font-bold text-lg mb-2">All Questions</h2>
      <ul className="text-gray-600 space-y-2">
        <li className="hover:text-indigo-600 cursor-pointer">All Questions</li>
        <li className="hover:text-indigo-600 cursor-pointer">All Topics</li>
        <li className="hover:text-indigo-600 cursor-pointer">All Users</li>
      </ul>
    </div>
  </aside>
);

const TestCard = ({ test }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center justify-between mb-6">
    <div>
      <div className="text-sm text-gray-500 mb-1">Course: <span className="text-indigo-600 font-medium">{test.course}</span></div>
      <div className="text-xl font-semibold mb-1">{test.title}</div>
      <div className="text-xs text-gray-400">Level {test.level}</div>
      <div className="text-xs text-gray-400 mt-2">Test prepared on: {test.date}</div>
      <div className="text-xs text-gray-400">Submit by: {test.submitBy}</div>
    </div>
    <button className="mt-4 md:mt-0 px-6 py-2 bg-purple-300 hover:bg-purple-400 text-white font-semibold rounded-lg shadow transition">Start Test</button>
  </div>
);

const Pagination = () => (
  <div className="flex justify-center items-center gap-2 mt-8">
    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-indigo-200">&lt;</button>
    {[1,2,3,4,5].map(n => (
      <button key={n} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-indigo-200 font-semibold">{n}</button>
    ))}
    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-indigo-200">&gt;</button>
  </div>
);



const TestPage = ({ onLogout, onCoursesClick, onHomeClick, onCalendarClick, onTestClick, onPortfolioClick, onDashboardClick, onNotificationsClick, onProfileClick }) => {
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
      <main className="flex-1 flex gap-8 px-8 py-6 pt-24">
        <Sidebar />
        <section className="flex-1">
          {testData.map(test => <TestCard key={test.id} test={test} />)}
          <Pagination />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestPage;