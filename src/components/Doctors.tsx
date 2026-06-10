import React from 'react';
import { Calendar, Stethoscope, Award, Heart } from 'lucide-react';

interface DoctorsProps {
  lang: 'en' | 'ta';
}

export default function Doctors({ lang }: DoctorsProps) {
  const doctorsList = [
    {
      id: 'dr-ashok',
      nameEn: 'Dr. M. Ashok',
      nameTa: 'டாக்டர் M. அசோக்',
      roleEn: 'Advanced Laparoscopic Surgeon & Endoscopist',
      roleTa: 'மேம்பட்ட லேப்ராஸ்கோபி அறுவைசிகிச்சை & என்டோஸ்கோபி நிபுணர்',
      degreeEn: 'M.S. (Gen. Surgery), FIAGES, FMAS, EFIAGES',
      degreeTa: 'M.S. (பொது அறுவைசிகிச்சை), FIAGES, FMAS, EFIAGES',
      expEn: 'Lead Surgeon with 15+ years of clinical tenure in high precision keyhole surgeries.',
      expTa: 'லேப்ராஸ்கோபி மற்றும் சிக்கலான அறுவைசிகிச்சைகளில் 15 வருடங்களுக்கும் மேலான அனுபவம் கொண்டவர்.',
      initials: 'MA',
    },
    {
      id: 'dr-savitha',
      nameEn: 'Dr. Savitha Ashok',
      nameTa: 'டாக்டர் சவிதா அசோக்',
      roleEn: 'Obstetrician, Gynaecologist & Infertility Specialist',
      roleTa: 'மகப்பேறியல், பெண் நோயியல் & மலட்டுத்தன்மை சிகிச்சை நிபுணர்',
      degreeEn: 'M.B.B.S., D.G.O., Fellowship in ART (Infertility)',
      degreeTa: 'M.B.B.S., D.G.O., Fellowship in ART (மலட்டுத்தன்மை சிகிச்சை)',
      expEn: 'Distinguished obstetrician supporting low-risk and complex deliveries, painless births.',
      expTa: 'உயர்தர மகப்பேறு மற்றும் மலட்டுத்தன்மை ஆலோசனைகளில் நீண்ட கால அனுபவம் பெற்றவர்.',
      initials: 'SA',
    },
    {
      id: 'consultant-ortho',
      nameEn: 'Dr. S. K. Karthik (Consulting)',
      nameTa: 'டாக்டர் S. K. கார்த்திக் (ஆலோசனை)',
      roleEn: 'Consulting Joint Replacement & Orthopaedic Specialist',
      roleTa: 'எலும்பியல் & மூட்டு மாற்று சிகிச்சை ஆலோசகர்',
      degreeEn: 'M.S. (Ortho), Fellowship in Arthroplasty',
      degreeTa: 'M.S. (எலும்பியல்), Fellowship in Arthroplasty',
      expEn: 'Specializes in keyhole orthopaedic procedures, joint updates, and fracture alignments.',
      expTa: 'மூட்டு மாற்று மற்றும் விளையாட்டுக் காயம் சார்ந்த மூட்டு சிகிச்சை நிபுணர்.',
      initials: 'SK',
    },
    {
      id: 'consultant-peds',
      nameEn: 'Dr. R. Priya (Consulting)',
      nameTa: 'டாக்டர் R. பிரியா (ஆலோசனை)',
      roleEn: 'Featured Consulting Paediatrician',
      roleTa: 'குழந்தைகள் நல சிறப்பு ஆலோசகர்',
      degreeEn: 'M.D. (Paediatrics), D.C.H.',
      degreeTa: 'M.D. (குழந்தைகள் நல மருத்துவம்), D.C.H.',
      expEn: 'Expert support in newborn health milestones, infant vaccinations, and child development.',
      expTa: 'புதிதாகப் பிறந்த குழந்தைகள் நலம் மற்றும் சிறப்பு வளர்ச்சி கண்காணிப்பு ஆலோசனைகள்.',
      initials: 'RP',
    }
  ];

  return (
    <section id="doctors" className="py-16 bg-white border-b border-rose-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-bold text-[#D63384] tracking-widest block font-sans">
            {lang === 'en' ? 'Clinical Board' : <span className="font-tamil">நமது மருத்துவக் குழு</span>}
          </span>
          <h2 className="text-[#1A1A2E]">
            {lang === 'en' ? 'Meet Our Doctors' : <span className="font-tamil">சிறப்பு மருத்துவர்களைச் சந்தியுங்கள்</span>}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
            {lang === 'en' ? (
              <span>Highly respected clinicians with exceptional surgical and medical qualifications delivering dedicated services.</span>
            ) : (
              <span className="font-tamil">பல வருட அனுபவமும் நற்பெயரும் கொண்ட எமது சிறப்பு மற்றும் அறுவை சிகிச்சை மருத்துவர்கள்.</span>
            )}
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsList.map((doc) => {
            return (
              <div 
                key={doc.id} 
                className="bg-white rounded-2xl border border-rose-100 hover:border-[#D63384] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Profile Avatar Frame */}
                <div className="relative aspect-square w-full bg-[#FDF8FA] flex items-center justify-center p-8 border-b border-rose-50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D63384]/5 to-transparent"></div>
                  
                  {/* Styled avatar bubble with clinician initials */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#A0215C] to-[#D63384] text-white flex items-center justify-center text-3xl font-serif font-bold shadow-md group-hover:scale-105 transition-transform duration-300">
                    {doc.initials}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md text-[#D63384] border border-rose-100">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-6 flex-grow space-y-3">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#1A1A2E] leading-snug">
                      {lang === 'en' ? doc.nameEn : <span className="font-tamil">{doc.nameTa}</span>}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#A0215C] font-mono block mt-1">
                      {lang === 'en' ? doc.degreeEn : <span className="font-tamil font-semibold text-[9px]">{doc.degreeTa}</span>}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#D63384] font-sans">
                    {lang === 'en' ? doc.roleEn : <span className="font-tamil leading-tight">{doc.roleTa}</span>}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans pt-1 border-t border-rose-50">
                    {lang === 'en' ? doc.expEn : <span className="font-tamil text-[11px] leading-relaxed">{doc.expTa}</span>}
                  </p>
                </div>

                {/* Book Consultation Trigger Footer */}
                <div className="px-6 pb-6 pt-2">
                  <a 
                    href="#book-form" 
                    className="w-full py-2 bg-[#FDE8F0] hover:bg-[#D63384] hover:text-white text-[#D63384] font-semibold rounded-xl text-xs flex items-center justify-center transition-colors font-sans"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {lang === 'en' ? 'Book Appointment' : <span className="font-tamil">முன்பதிவு செய்</span>}
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
