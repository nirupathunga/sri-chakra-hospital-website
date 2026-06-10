import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Departments from './components/Departments';
import Insurance from './components/Insurance';
import PatientInfo from './components/PatientInfo';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './components/LanguageLayout';

function AppContent() {
  const { lang } = useLanguage();

  return (
    <div id="portal-frame" className="min-h-screen flex flex-col bg-white pt-[140px] sm:pt-[116px] md:pt-[104px]">
      
      {/* Dynamic Header with custom bilingual switches */}
      <Header />

      {/* Dynamic Multi-Language Toast Indicator Banner */}
      <div id="lang-toast-banner" className="bg-[#FDE8F0] border-b border-[#E8C4D4] py-1.5 text-center text-[11px] font-bold text-[#A0215C] px-4">
        {lang === 'en' ? (
          <span>💡 Interactive dual-language system active. Tap "தமிழ்" in the top bar to translate everything instantly!</span>
        ) : (
          <span className="font-tamil">💡 இருமொழி மருத்துவப் பிரிவு முறை செயல்படுகிறது. ஆங்கிலத்தில் பார்க்க மேலே உள்ள "EN" பொத்தானை அழுத்தவும்!</span>
        )}
      </div>

      {/* Main clinical portal page views */}
      <main id="portal-main-view" className="flex-grow">
        
        {/* Unified 11-section clinical homepage layout component */}
        <Home />

        {/* 11-Department Core Specialities Section */}
        <Departments />

        {/* 15+ Corporate Insurance & Cashless TPA Partners List */}
        <Insurance />

        {/* Interactive Inpatient Admissions Support, Guides and FAQs */}
        <PatientInfo />

        {/* Live Interactive Split-Screen Booking & Desk Module */}
        <Appointment />

      </main>

      {/* Comprehensive Medical Footer */}
      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

