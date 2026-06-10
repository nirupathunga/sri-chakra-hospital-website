import React from 'react';
import { Award, Shield, Activity, Heart, Check, ThumbsUp } from 'lucide-react';

interface WhyChooseProps {
  lang: 'en' | 'ta';
}

export default function WhyChooseUs({ lang }: WhyChooseProps) {
  const values = [
    {
      id: 'surgeons',
      icon: Award,
      titleEn: 'Internationally Trained Surgeons',
      titleTa: 'சர்வதேச தரம் வாய்ந்த அறுவைசிகிச்சை நிபுணர்கள்',
      descEn: 'Led by premium specialists with training credentials across global medical summits for laparoscopy and endorology.',
      descTa: 'சர்வதேச அளவில் பயிற்சி பெற்ற மற்றும் பல வருட அனுபவமுள்ள மருத்துவ குழுவினர்.',
    },
    {
      id: 'equipment',
      icon: Shield,
      titleEn: 'Advanced Laparoscopic Equipment',
      titleTa: 'அதிநவீன லேப்ராஸ்கோபி கருவிகள்',
      descEn: 'Using high-definition Karl Storz endoview camera setups, rendering ultra-precise keyhole operations safely.',
      descTa: 'துல்லியமான சிகிச்சையை உறுதி செய்யும் கார்ல் ஸ்டோர்ஸ் (ஜெர்மனி) லேப்ராஸ்கோபி கேமரா அமைப்புகள்.',
    },
    {
      id: 'facility',
      icon: Activity,
      titleEn: '40-Bedded Multi-Speciality Facility',
      titleTa: '40 படுக்கைகளுடன் கூடிய அதிநவீன வசதி',
      descEn: 'Generous patient rooms, absolute aseptic operation conditions, and state-of-the-art emergency rooms.',
      descTa: 'பகட்டான தனி நபர் அறைகள், தீவிர சிகிச்சை படுக்கைகள், மற்றும் தொற்றுகள் இல்லாத சுகாதார வார்டுகள்.',
    },
    {
      id: 'experience',
      icon: Heart,
      titleEn: 'Thousands of Successful Surgeries',
      titleTa: 'ஆயிரக்கணக்கான வெற்றிகரமான சிகிச்சைகள்',
      descEn: 'Serving Udumalpet communities since 2011 with deep trust, successful medical referrals, and complete recoveries.',
      descTa: '2011 முதல் உடுமலையில் ஆயிரக்கணக்கான நோயாளிகளை முழுமையாக குணப்படுத்தி புதிய நம்பிக்கையை தந்துள்ளோம்.',
    },
    {
      id: 'insurance',
      icon: Check,
      titleEn: 'Insurance Empanelled Cashless Care',
      titleTa: 'அனைத்து மருத்துவ காப்பீட்டு வசதிகள்',
      descEn: 'Supporting state government welfare programs and leading private corporate cashless insurance integrations.',
      descTa: 'முதல்வரின் காப்பீட்டுத் திட்டம் மற்றும் அனைத்து முன்னணி கார்ப்பரேட் காப்பீடுகளின் கீழ் ரொக்கமில்லா சிகிச்சை.',
    },
    {
      id: 'care',
      icon: ThumbsUp,
      titleEn: 'Compassionate Patient Care',
      titleTa: 'கனிவான கவனிப்பு மற்றும் நர்சிங் ஆதரவு',
      descEn: 'Highly responsive medical nursing staff offering empathetic guidance throughout your inpatient hospital stay.',
      descTa: 'எங்கள் செவிலியர்கள் மற்றும் மருத்துவப் பணியாளர்களின் எந்நேரமும் அன்பான மற்றும் கனிவான முறையிலான அரவணைப்பு.',
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white border-b border-rose-150">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-bold text-[#D63384] tracking-widest block font-sans">
            {lang === 'en' ? 'Clinical Values' : <span className="font-tamil">எங்கள் நம்பகத்தன்மை</span>}
          </span>
          <h2 className="text-[#1A1A2E]">
            {lang === 'en' ? 'Why Patients Trust Sri Chakra' : <span className="font-tamil">மக்கள் ஸ்ரீ சக்ராவை தேர்ந்தெடுப்பது ஏன்</span>}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
            {lang === 'en' ? (
              <span>Upholding complete transparency, certified standards, and elite medical practices for healthcare delivery since 2011.</span>
            ) : (
              <span className="font-tamil">முழுமையான வெளிப்படைத்தன்மை, மேம்பட்ட தரம் மற்றும் உடுமலைப்பேட்டையின் மிகச் சிறந்த மருத்துவ வழிகாட்டுதல்.</span>
            )}
          </p>
        </div>

        {/* 6 value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-[#FDF8FA] p-6 rounded-2xl border border-rose-100 hover:border-[#D63384] hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8C4D4] text-[#D63384] flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h4 className="font-serif font-bold text-base text-[#1A1A2E] mb-2 leading-tight">
                  {lang === 'en' ? item.titleEn : <span className="font-tamil">{item.titleTa}</span>}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {lang === 'en' ? item.descEn : <span className="font-tamil">{item.descTa}</span>}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
