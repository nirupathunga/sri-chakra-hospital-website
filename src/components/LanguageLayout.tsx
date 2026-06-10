import React, { createContext, useContext, useState, useEffect } from 'react';
import { Phone, Mail, Calendar, Heart, Menu, X, MapPin, Clock, ShieldCheck, Award, ChevronRight, Laptop } from 'lucide-react';

// ==========================================
// 1. LANGUAGE CONTEXT & CUSTOM HOOK SETUP
// ==========================================

export type Language = 'en' | 'ta';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Retrieve saved language from storage, default to 'en'
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sri_chakra_lang');
      return (saved === 'ta' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('sri_chakra_lang', newLang);
    } catch (e) {
      console.warn('Storage disabled:', e);
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ta' : 'en');
  };

  // Synchronize document lang attribute with active state instantly
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};


// ==========================================
// TRANSLATION DICTIONARY (HEADER & FOOTER)
// ==========================================

const translations = {
  header: {
    emergency: {
      en: "Emergency Support 24/7 Available",
      ta: "அவசர சிகிச்சை பிரிவு 24 மணி நேரமும் செயல்படுகிறது"
    },
    contactNo: "96 26 200 600",
    email: "contact@srichakrahospital.com",
    address: "4/147 Nehru Street, Udumalpet-642 126",
    hospitalName: {
      en: "Sri Chakra",
      ta: "ஸ்ரீ சக்ரா"
    },
    hospitalSubtitle: {
      en: "Hospital",
      ta: "மருத்துவமனை"
    },
    tagline: {
      en: "Udumalpet Multi-Speciality",
      ta: "சிறப்பு பல்நோக்கு மருத்துவமனை"
    },
    menu: {
      home: { en: "Home", ta: "முகப்பு" },
      about: { en: "About Us", ta: "முதன்மைத் தூண்கள்" },
      departments: { en: "Departments", ta: "சிகிச்சைத் துறைகள்" },
      doctors: { en: "Our Doctors", ta: "எங்கள் மருத்துவர்கள்" },
      insurance: { en: "Insurance", ta: "காப்பீடு / TPA" }
    },
    bookBtn: {
      en: "Book Appointment",
      ta: "முன்பதிவு"
    }
  },
  footer: {
    profileDesc: {
      en: "Udumalpet's preeminent healthcare gateway representing advanced laparoscopic operations, complete gastroenterology screening & diagnostics, and multi-speciality patient wards since 2011.",
      ta: "2011 முதல் உடுமலையில் அதிநவீன லேப்ராஸ்கோபி, இரைப்பை குடல் அறுவைசிகிச்சை பிரிவுகள், மகளிர் மருத்துவம் மற்றும் அவசர சிகிச்சை பிரிவுகளை ஒருங்கிணைத்த முதன்மை மருத்துவ நிறுவனம்."
    },
    nabhBadge: {
      en: "NABH Standards Aligned",
      ta: "தேசிய மருத்துவ தரச்சான்று அங்கீகாரம்"
    },
    quickNavTitle: {
      en: "Quick Navigation",
      ta: "பயனுள்ள இணைப்புகள்"
    },
    workingHoursTitle: {
      en: "Clinical Working Hours",
      ta: "செயல்படும் நேரங்கள்"
    },
    monSatLabel: {
      en: "Monday - Saturday",
      ta: "திங்கள் - சனிக்கிழமை"
    },
    hoursMonSat: {
      en: "8:00 AM to 8:00 PM",
      ta: "காலை 8:00 - இரவு 8:00 மணி"
    },
    weekendLabel: {
      en: "Sundays & Holidays",
      ta: "ஞாயிறு மற்றும் விடுமுறை"
    },
    hoursWeekends: {
      en: "9:00 AM to 1:00 PM",
      ta: "காலை 9:00 - மதியம் 1:00 மணி"
    },
    insuranceFooterNote: {
      en: "TPA & Cashless Panels: Empanelled for state policies & corporate networks.",
      ta: "TPA & காசுப்பணமில்லா காப்பீடு: அரசு மற்றும் கார்ப்பரேட் பாலிசிகளுடன் இணைக்கப்பட்டுள்ளது."
    },
    contactTitle: {
      en: "Direct Contact",
      ta: "தொடர்பு விபரம்"
    },
    privacyBtn: {
      en: "Privacy Protocols",
      ta: "தனியுரிமைக் கொள்கைகள்"
    },
    termsBtn: {
      en: "Patient Guidelines",
      ta: "நோயாளிகள் வழிகாட்டி"
    },
    langStatus: {
      en: "Active Language: English",
      ta: "செயலில் உள்ள மொழி: தமிழ்"
    },
    copyright: {
      en: "Sri Chakra Hospital. Multi-Speciality Clinic, Udumalpet. All Rights Reserved.",
      ta: "ஸ்ரீ சக்ரா மருத்துவமனை, மல்டி-ஸ்பெஷாலிட்டி கிளினிக், உடுமலைப்பேட்டை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
  }
};


// ==========================================
// 2. HEADER COMPONENT WITH LANGUAGE CONTROLLER
// ==========================================

export const Header: React.FC = () => {
  const { lang, setLang, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mapped navigation links based on internal bilingual dictionary
  const menuItems = [
    { id: 'home', label: translations.header.menu.home, href: '#home' },
    { id: 'about', label: translations.header.menu.about, href: '#about' },
    { id: 'departments', label: translations.header.menu.departments, href: '#services' },
    { id: 'doctors', label: translations.header.menu.doctors, href: '#doctors' },
    { id: 'insurance', label: translations.header.menu.insurance, href: '#book-form' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-sans border-b border-[#E8C4D4]">
      
      {/* Top Utility Bar (Pink & Navy Accent) */}
      <div className="w-full py-2.5 bg-[#1A1A2E] text-white text-xs border-b border-[#A0215C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          
          {/* Contact coordinates & Hotline */}
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <a 
              href={`tel:+91${translations.header.contactNo.replace(/\s+/g, '')}`} 
              className="flex items-center gap-2 hover:text-[#D63384] transition-colors focus:ring-2 focus:ring-[#D63384] rounded px-1"
              aria-label="Call Hospital Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#D63384]" />
              <span className="font-mono font-bold text-slate-200 tracking-wide hover:underline">+91 {translations.header.contactNo}</span>
            </a>
            <a 
              href={`mailto:${translations.header.email}`} 
              className="flex items-center gap-2 hover:text-[#D63384] transition-colors focus:ring-2 focus:ring-[#D63384] rounded px-1"
              aria-label="Email Hospital"
            >
              <Mail className="w-3.5 h-3.5 text-[#D63384]" />
              <span className="text-slate-300 font-medium hover:underline">{translations.header.email}</span>
            </a>
          </div>

          {/* Emergency Alert & Toggle Language */}
          <div className="flex items-center gap-5 justify-between w-full sm:w-auto">
            {/* Live Indicator Alert */}
            <div className="flex items-center gap-2" role="status">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D63384] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D63384]"></span>
              </span>
              <p className="font-sans font-semibold tracking-wide text-slate-200">
                {lang === 'en' ? translations.header.emergency.en : translations.header.emergency.ta}
              </p>
            </div>

            {/* Premium Dual Language Switcher Group */}
            <div className="flex items-center bg-[#252542] rounded-full p-0.5 border border-slate-700" role="group" aria-label="Select Language">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold focus:outline-none transition-all ${lang === 'en' ? 'bg-[#D63384] text-white shadow-sm' : 'text-slate-400 hover:text-[#D63384]'}`}
                title="Switch to English"
              >
                EN
              </button>
              <button 
                onClick={() => setLang('ta')}
                className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold font-tamil focus:outline-none transition-all ${lang === 'ta' ? 'bg-[#D63384] text-white shadow-sm' : 'text-slate-400 hover:text-[#D63384]'}`}
                title="தமிழில் படிக்க"
              >
                தமிழ்
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Bar Sticky Navigation Container */}
      <nav className="w-full bg-white/95 backdrop-blur-md py-3 md:py-4 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* Elegant Clinical branding layout */}
          <a href="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Sri Chakra Hospital Home Dashboard">
            <div className="w-10 h-10 rounded-xl bg-[#FDE8F0] flex items-center justify-center border border-[#E8C4D4] group-hover:scale-105 transition-transform duration-300 shadow-sm shrink-0">
              <Heart className="w-5.5 h-5.5 text-[#D63384] fill-[#D63384]" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-serif font-extrabold text-xl md:text-2xl text-[#1A1A2E] leading-tight flex items-baseline">
                <span>{lang === 'en' ? translations.header.hospitalName.en : translations.header.hospitalName.ta}</span>
                <span className="text-[#D63384] ml-1">{lang === 'en' ? translations.header.hospitalSubtitle.en : translations.header.hospitalSubtitle.ta}</span>
              </h2>
              <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#A0215C] mt-0.5 leading-none">
                {lang === 'en' ? translations.header.tagline.en : translations.header.tagline.ta}
              </span>
            </div>
          </a>

          {/* Desktop Responsive Navigation Directory links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8 font-semibold text-sm text-[#1A1A2E]">
            {menuItems.map((item) => (
              <a 
                key={item.id} 
                href={item.href} 
                className="hover:text-[#D63384] transition-all hover:scale-105 py-1.5 border-b-2 border-transparent hover:border-[#D63384]"
              >
                {lang === 'en' ? item.label.en : item.label.ta}
              </a>
            ))}
          </div>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            
            {/* Primary Pink CTA Button with exact 8px (rounded-[8px]) border-radius and BRD color shifts */}
            <a 
              href="#book-form" 
              className="hidden sm:inline-flex items-center justify-center bg-[#D63384] hover:bg-[#A0215C] active:scale-95 text-white font-bold text-xs px-5 py-2.5 rounded-[8px] transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D63384]"
              aria-label="Book an appointment instant link"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>{lang === 'en' ? translations.header.bookBtn.en : translations.header.bookBtn.ta}</span>
            </a>

            {/* Interactive Language toggle shorthand next to menu on mobile */}
            <button 
              onClick={toggleLanguage}
              className="inline-flex sm:hidden p-2 rounded-lg bg-rose-50 text-[#D63384] hover:bg-rose-100 font-bold text-xs"
              aria-label="Toggle language button shortcut"
            >
              {lang === 'en' ? 'தமிழ்' : 'EN'}
            </button>

            {/* Mobile Hamburger button Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 rounded-lg hover:bg-rose-50 text-[#1A1A2E] focus:outline-none" 
              aria-expanded={mobileMenuOpen} 
              aria-label="Toggle mobile directory menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#A0215C]" /> : <Menu className="w-6 h-6 text-[#1A1A2E]" />}
            </button>
          </div>

        </div>

        {/* Slide-in Mobile Drawer Overlay mapping links */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-white border-t border-rose-100 py-4 mt-2 px-6 shadow-inner animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3 py-2 text-sm font-semibold text-[#1A1A2E]">
              {menuItems.map((item) => (
                <a 
                  key={item.id} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-lg hover:bg-rose-50 hover:text-[#D63384] transition-colors flex items-center justify-between"
                >
                  <span>{lang === 'en' ? item.label.en : item.label.ta}</span>
                  <ChevronRight className="w-4 h-4 text-[#D63384]/50" />
                </a>
              ))}
              <div className="pt-4 border-t border-rose-100 mt-2">
                <a 
                  href="#book-form" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center bg-[#D63384] hover:bg-[#A0215C] text-white font-bold text-xs py-3 rounded-[8px] transition-all shadow"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{lang === 'en' ? translations.header.bookBtn.en : translations.header.bookBtn.ta}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};


// ==========================================
// 3. FOOTER COMPONENT IN COSMIC DEEP NAVY
// ==========================================

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1A1A2E] text-slate-300 font-sans border-t-4 border-[#A0215C] mt-auto">
      
      {/* Primary 4-Column Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Hospital Profile, Summary, Address */}
        <div className="space-y-5">
          <a href="/" className="flex items-center gap-3 focus:outline-none" aria-label="Sri Chakra Hospital Clinical home">
            <div className="w-9 h-9 rounded-xl bg-[#FDE8F0]/10 border border-[#E8C4D4]/30 flex items-center justify-center text-[#D63384]">
              <Heart className="w-5 h-5 fill-current text-[#D63384]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-lg text-white leading-tight">
                Sri Chakra <span className="text-[#D63384]">Hospital</span>
              </span>
              <span className="text-[8px] tracking-widest text-[#E8C4D4] font-mono uppercase font-bold">clinical excellence since 2011</span>
            </div>
          </a>

          <p className="text-xs text-slate-400 leading-relaxed font-sans font-medium">
            {lang === 'en' ? translations.footer.profileDesc.en : translations.footer.profileDesc.ta}
          </p>

          <div className="flex items-center gap-2 pt-1 text-[10px] text-[#E8C4D4] font-mono uppercase font-bold">
            <ShieldCheck className="w-4.5 h-4.5 text-[#D63384]" />
            <span>{lang === 'en' ? translations.footer.nabhBadge.en : translations.footer.nabhBadge.ta}</span>
          </div>
        </div>

        {/* Column 2: Working Hours Table */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-sm text-white tracking-wide border-b border-rose-900/40 pb-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D63384] shrink-0" />
            <span>{lang === 'en' ? translations.footer.workingHoursTitle.en : translations.footer.workingHoursTitle.ta}</span>
          </h3>

          <div className="bg-[#242442]/50 border border-slate-700/50 rounded-xl p-4 space-y-3">
            <div className="text-xs space-y-1">
              <span className="text-[#E8C4D4] font-bold block">
                {lang === 'en' ? translations.footer.monSatLabel.en : translations.footer.monSatLabel.ta}
              </span>
              <p className="text-white font-mono font-bold text-xs bg-slate-900/30 p-1.5 rounded border border-slate-800">
                {lang === 'en' ? translations.footer.hoursMonSat.en : translations.footer.hoursMonSat.ta}
              </p>
            </div>

            <div className="text-xs space-y-1">
              <span className="text-[#E8C4D4] font-bold block">
                {lang === 'en' ? translations.footer.weekendLabel.en : translations.footer.weekendLabel.ta}
              </span>
              <p className="text-white font-mono font-bold text-xs bg-slate-900/30 p-1.5 rounded border border-slate-800">
                {lang === 'en' ? translations.footer.hoursWeekends.en : translations.footer.hoursWeekends.ta}
              </p>
            </div>

            <p className="text-[10px] text-slate-400 leading-normal pt-1.5 border-t border-slate-700/50">
              {lang === 'en' ? translations.footer.insuranceFooterNote.en : translations.footer.insuranceFooterNote.ta}
            </p>
          </div>
        </div>

        {/* Column 3: Quick Navigation Directory links */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-sm text-white tracking-wide border-b border-rose-900/40 pb-2">
            {lang === 'en' ? translations.footer.quickNavTitle.en : translations.footer.quickNavTitle.ta}
          </h3>
          
          <ul className="space-y-2.5 text-xs font-semibold">
            <li>
              <a href="#home" className="hover:text-[#D63384] hover:underline transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#D63384]" />
                <span>{lang === 'en' ? translations.header.menu.home.en : translations.header.menu.home.ta}</span>
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#D63384] hover:underline transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#D63384]" />
                <span>{lang === 'en' ? translations.header.menu.about.en : translations.header.menu.about.ta}</span>
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#D63384] hover:underline transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#D63384]" />
                <span>{lang === 'en' ? translations.header.menu.departments.en : translations.header.menu.departments.ta}</span>
              </a>
            </li>
            <li>
              <a href="#doctors" className="hover:text-[#D63384] hover:underline transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#D63384]" />
                <span>{lang === 'en' ? translations.header.menu.doctors.en : translations.header.menu.doctors.ta}</span>
              </a>
            </li>
            <li>
              <a href="#book-form" className="hover:text-[#D63384] hover:underline transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#D63384]" />
                <span>{lang === 'en' ? translations.header.menu.insurance.en : translations.header.menu.insurance.ta}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Direct Contacts Layout */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-sm text-white tracking-wide border-b border-rose-900/40 pb-2">
            {lang === 'en' ? translations.footer.contactTitle.en : translations.footer.contactTitle.ta}
          </h3>
          
          <ul className="space-y-3.5 text-xs text-slate-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4.5 h-4.5 text-[#D63384] shrink-0 mt-0.5" />
              <span className="font-sans leading-relaxed text-slate-400">
                <strong>{translations.header.address}</strong><br />
                Udumalpet - 642 126,<br />
                Tiruppur District, Tamil Nadu.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4.5 h-4.5 text-[#D63384] shrink-0" />
              <a href={`tel:+91${translations.header.contactNo.replace(/\s+/g, '')}`} className="hover:text-[#D63384] font-mono font-bold text-white tracking-wide">
                +91 {translations.header.contactNo}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4.5 h-4.5 text-[#D63384] shrink-0" />
              <a href={`mailto:${translations.header.email}`} className="hover:text-[#D63384] hover:underline truncate">
                {translations.header.email}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Deep Lower Copyright & Language Status Indicator bar */}
      <div className="w-full bg-[#111122] py-6 border-t border-slate-800 text-[11px] text-slate-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright text */}
          <div className="text-center sm:text-left">
            <p className="text-slate-400 font-semibold">
              © {currentYear} {lang === 'en' ? translations.footer.copyright.en : translations.footer.copyright.ta}
            </p>
            <p className="text-[9px] text-[#A0215C] font-extrabold mt-0.5 tracking-wider font-mono">
              NABH CLINICAL GRADE STANDARDS REGISTERED • TAMIL NADU HEALTH DEPARTMENT COMMITTED
            </p>
          </div>

          {/* Privacy alerts & interactive buttons */}
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <button 
              onClick={() => alert(lang === 'en' ? 'Sri Chakra Hospital Clinical Privacy Statement: We protect all patient data with clinical tier compliance.' : 'ஸ்ரீ சக்ரா மருத்துவமனை தனியுரிமைக் கொள்கைகள்: நோயாளிகளின் தகவல்களின் பாதுகாப்பு எங்கள் முக்கிய கடமையாகும்.')} 
              className="hover:text-[#D63384] hover:underline cursor-pointer transition-colors text-slate-400 font-bold"
              aria-label="Privacy protocols alert view"
            >
              {lang === 'en' ? translations.footer.privacyBtn.en : translations.footer.privacyBtn.ta}
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button 
              onClick={() => alert(lang === 'en' ? 'Sri Chakra Patient Consent and Admissions Guidelines: Ready for inpatient cashless treatment.' : 'ஸ்ரீ சக்ரா நோயாளி வழிகாட்டி முறைகள்: கேஷ்லெஸ் காப்பீடு சிகிச்சை தகுதிகள் மற்றும் முறையான அனுமதி பெறலாம்.')} 
              className="hover:text-[#D63384] hover:underline cursor-pointer transition-colors text-slate-400 font-bold"
              aria-label="Patient guidelines view"
            >
              {lang === 'en' ? translations.footer.termsBtn.en : translations.footer.termsBtn.ta}
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="text-[10px] bg-slate-900/50 text-[#E8C4D4] font-mono px-3 py-1 rounded-full border border-slate-800">
              {lang === 'en' ? translations.footer.langStatus.en : translations.footer.langStatus.ta}
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
