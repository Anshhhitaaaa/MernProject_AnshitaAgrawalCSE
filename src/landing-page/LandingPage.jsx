import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ExploreSection from './ExploreSection';
import MentorsSection from './MentorsSection';
import InterestsSection from './InterestsSection';
import Footer from './Footer';

function LandingPage({ onLoginClick, onSignupClick, onAboutClick }) {
  return (
    <div className="overflow-hidden bg-white min-h-screen">
      <Header onLoginClick={onLoginClick} onSignupClick={onSignupClick} onAboutClick={onAboutClick} />
      <main className="flex flex-col w-full">
        <HeroSection />
        <StatsSection />
        <ExploreSection />
        <MentorsSection />
        <InterestsSection />
        <Footer />
      </main>
    </div>
  );
}

export default LandingPage; 