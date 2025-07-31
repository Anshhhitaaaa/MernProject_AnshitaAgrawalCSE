"use client";
import Header from '../landing-page/Header';
import Footer from '../landing-page/Footer';
import { AboutSection } from './AboutSection';
import { FutureScope } from './FutureScope';

export const AboutPage = ({ onBackClick }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400&family=Balsamiq+Sans:wght@400&family=Kristen+ITC:wght@400&family=Afacad:wght@400&family=Konkhmer+Sleokchher:wght@400&display=swap"
      />
      <div className="relative w-full min-h-screen bg-white">
        <Header onBackClick={onBackClick} />
        <main className="pt-16">
          <AboutSection />
          <FutureScope />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
