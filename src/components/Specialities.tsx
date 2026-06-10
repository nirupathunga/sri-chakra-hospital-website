import React from 'react';
import { ChevronRight, Stethoscope, Heart, Eye, Activity, ShieldAlert, Award } from 'lucide-react';

interface SpecialitiesProps {
  lang: 'en' | 'ta';
}

export default function Specialities({ lang }: SpecialitiesProps) {
  const list = [
    {
      id: 'laparoscopic',
      icon: Stethoscope,
      titleEn: 'Advanced Laparoscopic Surgery',
      titleTa: 'மேம்பட்ட லேப்ராஸ்கோபி அறுவை சிகிச்சை',
      descEn: 'State-of-the-art keyhole surgeries representing gallbladder extraction, hernia repairs, and minimal incision clinical procedures.',
      descTa: 'பித்தப்பை அகற்றுதல், குடலிறக்க சீரமைப்பு மற்றும் மிகக் குறைந்த தழும்புடன் கூடிய நவீன லேப்ராஸ்கோபி மருத்துவப் பிரிவுகள்.',
    },
    {
      id: 'gastroenterology',
      icon: Heart,
      titleEn: 'Gastroenterology & GI Endoscopy',
      titleTa: 'இரைப்பை குடல் மற்றும் எண்டோஸ்கோபி',
      descEn: 'Expert healing of liver issues, acid reflux, stomach ulcers, and full diagnostic upper GI endoscopies for definitive staging.',
      descTa: 'கல்லீரல் நோய் தீர்வு, அமில வீச்சு, இரைப்பை புண் குணப்படுத்துதல், மற்றும் எண்டோஸ்கோபி முறையிலான நோய் கண்டறிதல்.',
    },
    {
      id: 'obgyn',
      icon: Award,
      titleEn: 'Obstetrics & Gynaecology',
      titleTa: 'மகப்பேறியல் மற்றும் பெண் நோயியல்',
      descEn: 'Comprehensive prenatal and antenatal programs, painless deliveries, infertility remedies, and total women health screenings.',
      descTa: 'மகப்பேறு கண்காணிப்பு, வலி இல்லாத பிரசவம், மலட்டுத்தன்மை சிகிச்சை, மற்றும் பெண்களுக்கான பொதுவான ஆரோக்கிய சோதனைகள்.',
    },
    {
      id: 'orthopedics',
      icon: Activity,
      titleEn: 'Orthopaedics & Joint Care',
      titleTa: 'எலும்பியல் மற்றும் மூட்டு சிகிச்சை',
      descEn: 'Complete recovery paths for bone fractures, arthritic joint replacements, knee treatments, and specialized spinal care.',
      descTa: 'எலும்பு முறிவுகள், தீவிர மூட்டு மாற்று அறுவை சிகிச்சைகள், கணுக்கால் மற்றும் தண்டுவடம் சார்ந்த பிரச்சினைகளுக்கான தீர்வுகள்.',
    },
    {
      id: 'oncology',
      icon: ShieldAlert,
      titleEn: 'Oncology Diagnostics & Screenings',
      titleTa: 'புற்றுநோய் கண்டறிதல் மற்றும் பரிசோதனை',
      descEn: 'Early detection procedures, oncological referral screening, bioptic reviews, and holistic health consultation parameters.',
      descTa: 'புற்றுநோய் குறித்து முன்கூட்டியே கண்டறிதல், மாதிரி திசுப் பரிசோதனை, மற்றும் தேவையான சிறப்பு மருத்துவ ஆலோசனைகள்.',
    },
    {
      id: 'urology',
      icon: Eye,
      titleEn: 'Urology Clinics',
      titleTa: 'சிறுநீரக மருத்துவத் துறை',
      descEn: 'Comprehensive clinical evaluation for kidney stones, prostate concerns, urinary tract infections, and micro-invasive procedures.',
      descTa: 'சிறுநீரகக் கற்கள் அகற்றுதல், புரோஸ்டேட் சுரப்பித் தீர்வுகள், மற்றும் சிறுநீரகப் பாதை தீவிர தொற்றுகளுக்கான தீர்வுகள்.',
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#F7F0F3] border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-bold text-[#D63384] tracking-widest block font-sans">
            {lang === 'en' ? 'Core Medical Divisions' : <span className="font-tamil">நமது சிறப்புத் துறைகள்</span>}
          </span>
          <h2 className="text-[#1A1A2E]">
            {lang === 'en' ? 'Our Clinical Specialities' : <span className="font-tamil">ஸ்ரீ சக்ராவின் சிறப்பு சிகிச்சைகள்</span>}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
            {lang === 'en' ? (
              <span>Equipped with highly qualified doctors and fully synchronized diagnostic laboratories to ensure perfect clinical excellence.</span>
            ) : (
              <span className="font-tamil">அனைத்து விதமான அறுவை சிகிச்சைகள் மற்றும் சோதனைகளை உடனுக்குடன் மேற்கொள்ளும் உள்கட்டமைப்புடன் கூடிய துறைகள்.</span>
            )}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-white p-6 rounded-2xl border border-rose-100 hover:border-[#D63384] hover:shadow-lg transition-all duration-350 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FDE8F0] group-hover:bg-[#D63384] transition-colors duration-300 flex items-center justify-center text-[#D63384] group-hover:text-white mb-5 border border-[#E8C4D4]">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif font-bold text-lg text-[#1A1A2E] mb-2 leading-tight">
                    {lang === 'en' ? item.titleEn : <span className="font-tamil">{item.titleTa}</span>}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 font-sans">
                    {lang === 'en' ? item.descEn : <span className="font-tamil">{item.descTa}</span>}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold font-sans">
                  <span className="text-[#A0215C]">
                    {lang === 'en' ? 'View Details' : <span className="font-tamil">விவரங்கள்</span>}
                  </span>
                  <a href="#book-form" className="text-[#D63384] flex items-center gap-1 hover:underline">
                    {lang === 'en' ? 'Book Appointment' : <span className="font-tamil">முன்பதிவு</span>}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
