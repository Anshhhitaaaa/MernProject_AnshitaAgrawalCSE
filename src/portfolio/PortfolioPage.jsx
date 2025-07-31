import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function PortfolioPage({ onLogout, onCoursesClick, onHomeClick, onCalendarClick, onTestClick, onPortfolioClick, onDashboardClick, onNotificationsClick, onProfileClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
      
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}