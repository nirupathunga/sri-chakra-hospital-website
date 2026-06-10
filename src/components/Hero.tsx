import React from 'react';
import { Calendar, ChevronRight, Activity, Users, Award, Shield } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'ta';
}

export default function Hero({ lang }: HeroProps) {
  return (
    <div>
      {/* SECTION 1: HERO SECTION - Warm Pink medical canvas */}
      <section id="home" className="relative py-16 md:py-24 bg-gradient-to-br from-white via-[#F7F0F3] to-[#FDE8F0] overflow-hidden border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Action Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E8C4D4] rounded-full text-xs text-[#A0215C] font-semibold shadow-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#D63384] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D63384]"></span>
              </span>
              {lang === 'en' ? (
                <span>Sri Chakra Hospital - Multi-Speciality Care in Udumalpet since 2011</span>
              ) : (
                <span className="font-tamil">ஸ்ரீ சக்ரா மருத்துவமனை - 2011 முதல் உடுமலைப்பேட்டையில் சிறந்த மருத்துவ சேவை</span>
              )}
            </div>
            
            <h1 className="leading-tight text-[#1A1A2E]">
              {lang === 'en' ? (
                <span className="select-none">Advanced Healthcare, <br />Close to <span className="text-[#D63384]">Home</span></span>
              ) : (
                <span className="font-tamil select-none">மேம்பட்ட அதிநவீன மருத்துவம், <br />உங்கள் <span className="text-[#D63384]">அருகிலேயே</span></span>
              )}
            </h1>

            <p className="max-w-2xl text-sm md:text-base text-slate-500 leading-relaxed mx-auto lg:mx-0">
              {lang === 'en' ? (
                <span>Sri Chakra Hospital brings together elite medical specialists, state-of-the-art diagnostic imaging, internationally trained laparoscopy, and highly sympathetic healthcare services to Udumalpet. Experience trust, advanced medicine, and round-the-clock emergency care.</span>
              ) : (
                <span className="font-tamil">ஸ்ரீ சக்ரா மருத்துவமனை, உடுமலைப்பேட்டை மக்களுக்கு நவீன மருத்துவ தொழில்நுட்பங்களையும், சிறந்த சர்வதேச தரத்திலான லேப்ராஸ்கோபி அறுவைசிகிச்சைகளையும், கனிவான கவனிப்பையும் தந்து நல்வாழ்வை உறுதி செய்கிறது. எங்களின் 24 மணி நேர அவசர சிகிச்சையை நம்பிக்கையோடு நாடலாம்.</span>
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#book-form" className="btn-primary w-full sm:w-auto text-center">
                <Calendar className="w-4 h-4 mr-2" />
                {lang === 'en' ? 'Book Appointment' : <span className="font-tamil">முன்பதிவு செய்க</span>}
              </a>
              <a href="#about" className="btn-secondary w-full sm:w-auto text-center">
                {lang === 'en' ? 'Learn More' : <span className="font-tamil">மேலும் அறிய</span>}
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Visual Representation Column matching layout-components.html theme */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Visual backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D63384]/10 to-[#A0215C]/20 rounded-full blur-3xl"></div>
              
              {/* Visual Medical Card layout mirroring high-fidelity UI design */}
              <div className="relative z-10 w-full h-full bg-white rounded-3xl p-6 border border-rose-100 shadow-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-[#FDE8F0] rounded-2xl flex items-center justify-center text-[#D63384] border border-rose-200">
                    <Activity className="w-6 h-6 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#1A1A2E] text-white tracking-widest font-mono">
                    ESTD 2011
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="h-2 w-1/3 bg-rose-100 rounded"></div>
                  <div className="text-xl md:text-2xl font-serif font-bold text-[#1A1A2E]">
                    {lang === 'en' ? (
                      <span>Compassionate Care, Elevated Precision.</span>
                    ) : (
                      <span className="font-tamil">கனிவான ஆதரவு, துல்லியமான மருத்துவக் கணிப்பு.</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? (
                      <span>Udumalpet’s primary medical infrastructure supporting laparoscopic surgeries, comprehensive gastrology diagnostics, and full critical care environments.</span>
                    ) : (
                      <span className="font-tamil">உடுமலையில் லேப்ராஸ்கோபி, முழுமையான இரைப்பை குடல் தகுதிப்பாடுகள் மற்றும் அவசர சிகிச்சை பிரிவுகளை ஒருங்கிணைத்த முதன்மை மருத்துவ கட்டமைப்பு.</span>
                    )}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Award className="w-4 h-4 text-[#D63384]" />
                    {lang === 'en' ? <span className="font-medium">NABH Pre-Accredited</span> : <span className="font-tamil font-medium">பரிந்துரைக்கப்பட்ட மருத்துவ தரம்</span>}
                  </div>
                  <a href="#services" className="text-[#A0215C] font-semibold flex items-center gap-1 hover:underline">
                    {lang === 'en' ? 'Specialities' : <span className="font-tamil">பிரிவுகள்</span>}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: STATS SECTION - 4 animated counter cards */}
      <section className="py-12 bg-white border-b border-rose-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stat Card 1 - Years of Service */}
            <div className="bg-gradient-to-br from-[#FDE8F0] to-white p-6 rounded-2xl border border-[#E8C4D4] text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#A0215C] mb-2 font-mono">2011</div>
              <div className="text-xs font-semibold text-slate-600">
                {lang === 'en' ? 'Years of Established Service' : <span className="font-tamil">துவங்கப்பட்ட ஆண்டு முதல் சேவை</span>}
              </div>
            </div>

            {/* Stat Card 2 - Successful Surgeries */}
            <div className="bg-gradient-to-br from-[#FDE8F0] to-white p-6 rounded-2xl border border-[#E8C4D4] text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#A0215C] mb-2 font-mono">10,000+</div>
              <div className="text-xs font-semibold text-slate-600">
                {lang === 'en' ? 'Successful Surgeries & Procedures' : <span className="font-tamil">வெற்றிகரமான அறுவை சிகிச்சைகள்</span>}
              </div>
            </div>

            {/* Stat Card 3 - Specialities */}
            <div className="bg-gradient-to-br from-[#FDE8F0] to-white p-6 rounded-2xl border border-[#E8C4D4] text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#A0215C] mb-2 font-mono">15+</div>
              <div className="text-xs font-semibold text-slate-600">
                {lang === 'en' ? 'Clinical Specialities' : <span className="font-tamil">மருத்துவ சிறப்புத் துறைகள்</span>}
              </div>
            </div>

            {/* Stat Card 4 - Bedded Facility */}
            <div className="bg-gradient-to-br from-[#FDE8F0] to-white p-6 rounded-2xl border border-[#E8C4D4] text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#A0215C] mb-2 font-mono">40 Beds</div>
              <div className="text-xs font-semibold text-slate-600">
                {lang === 'en' ? 'In-Patient Bedded Facility' : <span className="font-tamil">உள்நோயாளிகள் படுக்கை வசதி</span>}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
