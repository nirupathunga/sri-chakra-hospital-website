import React from 'react';
import { Play, PlayCircle, Eye, Shield, CheckCircle } from 'lucide-react';

interface VideoSectionProps {
  lang: 'en' | 'ta';
}

export default function VideoSection({ lang }: VideoSectionProps) {
  return (
    <section id="hospital-tour" className="py-16 bg-[#FDF8FA] border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold text-[#D63384] tracking-widest block font-sans">
              {lang === 'en' ? 'Virtual Exploration' : <span className="font-tamil">மெய்நிகர் வீடியோ பார்வை</span>}
            </span>
            <h2 className="text-[#1A1A2E]">
              {lang === 'en' ? 'See Our Hospital Facilities' : <span className="font-tamil">எங்கள் மருத்துவமனையைப் பாருங்கள்</span>}
            </h2>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
              {lang === 'en' ? (
                <span>Sri Chakra Hospital maintains an elegant, sanitary, and patient-friendly multi-speciality space. Take a look at our specialized diagnostic wings, comfortable wards, and high-definition operation theaters.</span>
              ) : (
                <span className="font-tamil">ஸ்ரீ சக்ரா மருத்துவமனையின் தூய்மையான சூழல் மற்றும் மேம்பட்ட கவனிப்பை வீடியோ மூலம் காண்க. எங்கள் சிறப்பு வார்டுகள், கார்ல் ஸ்டோர்ஸ் லேப்ராஸ்கோபி கருவிகள், மற்றும் அதிநவீன அவசர சிகிச்சை பிரிவு ஆகியவற்றை நேரில் பார்ப்பது போல் காணலாம்.</span>
              )}
            </p>

            <ul className="space-y-3 font-sans text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D63384]" />
                {lang === 'en' ? <span>Sophisticated Karl Storz endoscopic visualization setup</span> : <span className="font-tamil">ஜெர்மனியின் அதிநவீன லேப்ராஸ்கோபி உபகரணங்கள்</span>}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D63384]" />
                {lang === 'en' ? <span>Comfortable, spacious semi-private & family medical lounges</span> : <span className="font-tamil">வசதியான மற்றும் சுத்தமான தங்கும் வார்டுகள்</span>}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D63384]" />
                {lang === 'en' ? <span>NABH standards aligned infection control parameters</span> : <span className="font-tamil">கிருமி நீக்கம் செய்யப்பட்ட மற்றும் முழுமையாக பாதுகாக்கப்பட்ட சிகிச்சை சூழல்</span>}
              </li>
            </ul>
          </div>

          {/* Right Video Container Layout with simulated banner */}
          <div className="lg:col-span-6">
            <div className="relative aspect-video rounded-3xl bg-[#1A1A2E] overflow-hidden border border-rose-200 shadow-xl group">
              {/* Backing image visual pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A0215C]/80 to-[#1A1A2E]/90 flex items-center justify-center p-8 text-center text-white">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest bg-white/20 text-white px-2 py-1 rounded">
                    {lang === 'en' ? 'Virtual Tour Video' : <span className="font-tamil">மருத்துவமனை கையேடு</span>}
                  </span>
                  <div className="text-lg md:text-xl font-serif font-bold text-rose-100">
                    {lang === 'en' ? 'Advanced Clinical Infrastructure in Udumalpet' : <span className="font-tamil">உடுமலையில் மேம்பட்ட மருத்துவ கட்டமைப்பு</span>}
                  </div>
                  <p className="text-[11px] text-slate-300 max-w-sm mx-auto">
                    {lang === 'en' ? 'Press play to explore our facilities, laboratories, and waiting rooms.' : <span className="font-tamil">எங்கள் பரிசோதனைக் கூடங்கள் மற்றும் சிகிச்சை அறைகளை காண இயக்கவும்.</span>}
                  </p>
                </div>
              </div>

              {/* Core Overlaid Play Controls */}
              <button 
                onClick={() => alert(lang === 'en' ? 'The virtual walkthrough of Sri Chakra Hospital is playing in your stream.' : 'ஸ்ரீ சக்ரா மருத்துவமனை வீடியோ தங்களின் திரையில் இயங்கத் தயாராகிறது.')}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D63384] focus:ring-offset-2 focus:ring-offset-transparent outline-none cursor-pointer"
                aria-label="Play virtual hospital tour video"
              >
                <div className="w-16 h-16 rounded-full bg-[#D63384] hover:bg-rose-600 transition-colors flex items-center justify-center text-white shadow-lg animate-pulse">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
              </button>

              {/* Duration and details bottom strip */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] text-slate-300 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-xs font-mono">
                <span>Duration: 2:45 Mins</span>
                <span>HD Status: Verified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
