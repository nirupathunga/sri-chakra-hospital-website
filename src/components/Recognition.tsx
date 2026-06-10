import React from 'react';
import { Award, Shield, CheckCircle, Verified } from 'lucide-react';

interface RecognitionProps {
  lang: 'en' | 'ta';
}

export default function Recognition({ lang }: RecognitionProps) {
  const badges = [
    {
      id: 'nabh',
      title: 'NABH Pre-Accredited',
      descEn: 'Assested entry-level hospital standards',
      descTa: 'தேசிய தர கட்டுப்பாட்டு சான்றிதழ்',
      code: 'NABH-2022'
    },
    {
      id: 'iso',
      title: 'ISO 9001:2015 Quality',
      descEn: 'International management parameters guidelines',
      descTa: 'சர்வதேச மேலாண்மை தரச் சான்றிதழ்',
      code: 'ISO-9001-Q'
    },
    {
      id: 'ima',
      title: 'IMA Member Hospital',
      descEn: 'Associated with Indian Medical Association guidelines',
      descTa: 'இந்திய மருத்துவ சங்கத்தின் கூட்டுறுப்பு',
      code: 'IMA-9626'
    },
    {
      id: 'tngov',
      title: 'TN Class Establishments',
      descEn: 'Licensed under the Government of Tamil Nadu Act',
      descTa: 'தமிழ்நாடு மருத்துவ நிறுவனங்கள் பதிவு பெற்றவை',
      code: 'TNG-4147'
    }
  ];

  return (
    <section className="py-12 bg-[#FDF8FA] border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-8">
          <h3 className="font-serif font-bold text-lg text-[#1A1A2E]">
            {lang === 'en' ? 'Recognition & Accreditations' : <span className="font-tamil">அங்கீகாரங்கள் மற்றும் தரச் சின்னங்கள்</span>}
          </h3>
          <p className="text-[11px] text-slate-400 font-sans">
            {lang === 'en' ? 'Certified standards of hospital quality' : <span className="font-tamil">எங்கள் சேவை தரத்திற்கு சான்றளிக்கும் முத்திரைகள்</span>}
          </p>
        </div>

        {/* Gray Scale Flex/Grid Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {badges.map((badge) => {
            return (
              <div 
                key={badge.id} 
                className="flex items-center gap-3 p-4 bg-white/60 hover:bg-white rounded-xl border border-rose-50 hover:border-rose-150 transition-all duration-300 w-full max-w-xs scale-95"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-500 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-serif font-bold text-xs text-slate-700 truncate">
                    {badge.title}
                  </h4>
                  <p className="text-[9px] text-slate-400 leading-normal truncate">
                    {lang === 'en' ? badge.descEn : badge.descTa}
                  </p>
                  <span className="text-[8px] font-mono tracking-widest text-[#D63384] font-semibold mt-0.5 block">
                    {badge.code}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
