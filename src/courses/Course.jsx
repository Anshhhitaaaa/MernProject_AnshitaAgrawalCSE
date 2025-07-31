"use client";
import { Header } from './Header';
import { PopularCourses } from './PopularCourses';
import { MyCourseTable } from './MyCourseTable';
import { CourseStats } from './CourseStats';
import { MyCourseProgress } from './MyCourseProgress';
import { CourseTableRows } from './CourseTableRows';
import { RecordingClasses } from './RecordingClasses';
import { Footer } from './Footer';

export default function Course({
  onHomeClick,
  onCoursesClick,
  onDashboardClick,
  onCalendarClick,
  onPortfolioClick,
  onTestClick,
  onNotificationsClick,
  onLogout,
  onProfileClick
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Header
        onHomeClick={onHomeClick}
        onCoursesClick={onCoursesClick}
        onDashboardClick={onDashboardClick}
        onCalendarClick={onCalendarClick}
        onPortfolioClick={onPortfolioClick}
        onTestClick={onTestClick}
        onNotificationsClick={onNotificationsClick}
        onLogout={onLogout}
        onProfileClick={onProfileClick}
      />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10 md:py-16 flex flex-col gap-16 z-10 relative">
        {/* Add extra space between navbar and first section */}
        <div className="h-6 md:h-12" />
        {/* Sections use glassmorphism cards like Home */}
        <section className="glass-card mb-8 animate-fade-in">
          <PopularCourses />
        </section>
        <section className="glass-card mb-8 animate-fade-in">
          <MyCourseTable />
        </section>
        <section className="flex flex-col md:flex-row gap-8 mb-8 animate-fade-in">
          <div className="glass-card flex-1">
            <CourseStats />
          </div>
          <div className="glass-card flex-1">
            <MyCourseProgress />
          </div>
        </section>
        <section className="glass-card animate-fade-in">
          <RecordingClasses />
        </section>
      </main>
      <Footer />
      <style>{`.glass-card {background:rgba(255,255,255,0.7);backdrop-filter:blur(16px);border-radius:2rem;box-shadow:0 8px 32px 0 rgba(31,38,135,0.10),0 1.5px 8px 0 rgba(80,0,120,0.06);padding:2.5rem 2rem;margin-bottom:2rem;}`}</style>
    </div>
  );
}
