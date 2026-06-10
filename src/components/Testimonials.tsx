import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

interface TestimonialsProps {
  lang: 'en' | 'ta';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const testimonials = [
    {
      id: 'murugan',
      nameEn: 'Murugan R. (Udumalpet)',
      nameTa: 'முருகன் R. (உடுமலைப்பேட்டை)',
      treatmentEn: 'Laparoscopic Appendectomy',
      treatmentTa: 'லேப்ராஸ்கோபி அறுவை சிகிச்சை',
      textEn: 'I underwent advanced laparoscopic surgery under Dr. M. Ashok. The entire procedure was pain-free, with extremely tiny incisions. I was back home within 24 hours. Truly grateful to the hospital.',
      textTa: 'டாக்டர் M. அசோக் அவர்களின் வழிகாட்டுதலில் மேம்பட்ட லேப்ராஸ்கோபி அறுவைசிகிச்சை செய்து கொண்டேன். மிகக் குறைந்த வலியுடன், 24 மணி நேரத்திற்குள் வீடு திரும்பினேன். மிக்க நன்றி.',
      rating: 5,
    },
    {
      id: 'priya',
      nameEn: 'Priya K. (Dharapuram)',
      nameTa: 'பிரியா K. (தாராபுரம்)',
      treatmentEn: 'Maternity & Gynaecology Care',
      treatmentTa: 'பிரசவம் மற்றும் மகப்பேறு பராமரிப்பு',
      textEn: 'Dr. Savitha Ashok provided excellent medical support during my prenatal consultation and painless delivery. The nursing team was empathetic, clean, and highly responsive throughout our stay.',
      textTa: 'டாக்டர் சவிதா அசோக் அவர்களின் கீழ் மகப்பேறு சிகிச்சை பெற்றோம். மிகவும் அன்பான மருத்துவர் மற்றும் கனிவான செவிலியர்கள். சுத்தமான மற்றும் சிறந்த தங்குமிடம்.',
      rating: 5,
    },
    {
      id: 'annamalai',
      nameEn: 'Annamalai S. (Pollachi)',
      nameTa: 'அண்ணாமலை S. (பொள்ளாச்சி)',
      treatmentEn: 'Gallstone Care & GI Consulting',
      treatmentTa: 'பித்தப்பை கல் மற்றும் இரைப்பை குடல் சிகிச்சை',
      textEn: 'Sri Chakra Hospital saved me from severe gallstone pain. Their diagnostic precision, honest pricing, and transparent communications make them the most trusted Hospital in Udumalpet.',
      textTa: 'பித்தப்பையில் கல் காரணமாக வந்த கடுமையான அலர்ஜியை உடனடியாகக் குணப்படுத்தினர். உடுமலையில் மிகவும் நியாயமான கட்டணத்தில் சிறந்த சிகிச்சை வழங்கும் மருத்துவமனை.',
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white border-b border-rose-150">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-bold text-[#D63384] tracking-widest block font-sans">
            {lang === 'en' ? 'Verified Patient Reviews' : <span className="font-tamil">நோயாளிகளின் கருத்துக்கள்</span>}
          </span>
          <h2 className="text-[#1A1A2E]">
            {lang === 'en' ? 'What Our Patients Say' : <span className="font-tamil">நமது நோயாளிகள் பகிர்ந்த அனுபவங்கள்</span>}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
            {lang === 'en' ? (
              <span>Read genuine feedback from patients across Udumalpet, Pollachi, and Dharapuram communities.</span>
            ) : (
              <span className="font-tamil">பொள்ளாச்சி, தாராபுரம் மற்றும் உடுமலைப்பேட்டை மக்கள் ஸ்ரீ சக்ரா குறித்து வழங்கிய நற்சான்றுகள்.</span>
            )}
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => {
            return (
              <div 
                key={item.id} 
                className="bg-[#FDF8FA] p-8 rounded-2xl border border-rose-100 relative flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 right-6 text-rose-200">
                  <Quote className="w-8 h-8 fill-rose-100" />
                </div>

                <div className="space-y-4">
                  {/* Star Rating Metric */}
                  <div className="flex items-center gap-1 text-pink-500">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-600 font-sans text-xs md:text-sm leading-relaxed italic relative z-10">
                    "{lang === 'en' ? item.textEn : <span className="font-tamil leading-relaxed">{item.textTa}</span>}"
                  </p>
                </div>

                {/* Patient Signature Metadata */}
                <div className="pt-6 mt-6 border-t border-rose-150 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-[#D63384] flex items-center justify-center font-serif font-bold text-xs">
                    {item.nameEn.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs md:text-sm text-[#1A1A2E]">
                      {lang === 'en' ? item.nameEn : <span className="font-tamil">{item.nameTa}</span>}
                    </h4>
                    <span className="text-[10px] text-[#A0215C] font-semibold block uppercase tracking-wider mt-0.5">
                      {lang === 'en' ? item.treatmentEn : <span className="font-tamil">{item.treatmentTa}</span>}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
