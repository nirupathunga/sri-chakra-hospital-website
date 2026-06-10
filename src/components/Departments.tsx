import React, { useState } from 'react';
import { 
  Activity, 
  Heart, 
  Baby, 
  Calendar, 
  Scissors, 
  Stethoscope, 
  Compass, 
  ShieldAlert, 
  Sparkles, 
  Cpu, 
  ChevronRight, 
  Filter,
  CheckCircle2,
  BookmarkPlus
} from 'lucide-react';
import { useLanguage } from './LanguageLayout';

// ==========================================
// 1. DATA TYPES AND SCHEMA SPECIFICATIONS
// ==========================================

export interface Procedure {
  en: string;
  ta: string;
}

export interface DepartmentItem {
  id: string;
  icon: any;
  category: 'surgical' | 'general';
  nameEn: string;
  nameTa: string;
  descEn: string;
  descTa: string;
  procedures: Procedure[];
}

// ==========================================
// 2. BILINGUAL DICTIONARY FOR THE PAGE
// ==========================================

const deptTranslations = {
  headerTitle: {
    en: "Clinical Departments & Specialities",
    ta: "சிகிச்சைத் துறைகள் & சிறப்பு பிரிவுகள்"
  },
  headerSubtitle: {
    en: "Established in 2011 as a specialized gastroenterology unit, Sri Chakra has matured into a premier 40-bedded multi-speciality clinical center with advanced laparoscopic suites and dedicated healing services.",
    ta: "2011 ஆம் ஆண்டு சிறப்பு வாய்ந்த இரைப்பை குடல் சிகிச்சை பிரிவாக ஆரம்பிக்கப்பட்டு, இன்று 40 படுக்கைகளுடன் கூடிய அதிநவீன லேப்ராஸ்கோபி மற்றும் பல்நோக்கு சிறப்பு மருத்துவமனையாக வளர்ந்துள்ளோம்."
  },
  filterLabel: {
    en: "Filter Departments",
    ta: "பிரிவுகளை வடிகட்டுக"
  },
  filterTabs: {
    all: { en: "All Departments", ta: "அனைத்து துறைகள்" },
    surgical: { en: "Surgical Units", ta: "அறுவைசிகிச்சை பிரிவுகள்" },
    general: { en: "General Support & Care", ta: "பொது மருத்துவ பிரிவுகள்" }
  },
  ctaButton: {
    en: "Book Department Consultation",
    ta: "இத்துறையில் முன்பதிவு செய்"
  },
  procedureTitle: {
    en: "Key Clinical Procedures",
    ta: "முக்கிய மருத்துவ சிகிச்சைகள்"
  },
  gridCountText: {
    en: "Displaying {count} designated clinical divisions",
    ta: "{count} தனித்துவ மருத்துவப் பிரிவுகள் காட்டப்படுகின்றன"
  },
  callCoordinator: {
    en: "Direct clinical inquiries can also be routed to our registrar desk: +91 96 26 200 600",
    ta: "சிகிச்சை விவரங்களுக்கு எங்கள் நேரடி மையத்தை அழைக்கலாம்: +91 96 26 200 600"
  }
};

// ==========================================
// 3. MASTER DATA LIST FOR 11 BRD DEPARTMENTS
// ==========================================

const departmentsList: DepartmentItem[] = [
  {
    id: "laparoscopy",
    icon: Cpu,
    category: "surgical",
    nameEn: "Laparoscopic Surgery",
    nameTa: "லேப்ராஸ்கோபி அறுவைசிகிச்சை",
    descEn: "Advanced minimal access keyhole treatments utilizing high-performance digital visualization systems to ensure rapid patient discharge and minimum downtime.",
    descTa: "வலியற்ற மற்றும் மிகக் குறைந்த தழும்புகளுடன் கூடிய அதிநவீன துளையிடும் லேப்ராஸ்கோபி அறுவைசிகிச்சைகள்.",
    procedures: [
      { en: "Upper GI Surgery", ta: "மேல் இரைப்பை குடல் அறுவைசிகிச்சை" },
      { en: "Hernia Repair & Mesh Placement", ta: "ஹெர்னியா (குடலிறக்கம்) லேப்ராஸ்கோபி சிகிச்சை" },
      { en: "Large Intestine Procedures", ta: "பெருங்குடல் நோய்க்கான நவீன சிகிச்சை" },
      { en: "Hepatobiliary Operations", ta: "கல்லீரல் மற்றும் பித்தப்பை அறுவைசிகிச்சை" },
      { en: "Obesity Clinical Interventions", ta: "உடல் பருமன் குறைப்பு எண்டோஸ்கோபி முறைகள்" }
    ]
  },
  {
    id: "gastroenterology",
    icon: Stethoscope,
    category: "general",
    nameEn: "Gastroenterology",
    nameTa: "இரைப்பை மற்றும் குடல் எண்டோஸ்கோபி துறை",
    descEn: "Comprehensive diagnostics and medicinal programs centered entirely around digestive issues, bowel syndromes, liver functions, and stomach ulcers.",
    descTa: "செரிமானப் பாதையில் ஏற்படும் அல்சர்கள், உணவுப் பாதை அடைப்புகள் மற்றும் குடல் சார்ந்த அனைத்து தீவிர கோளாறுகளுக்கான தீர்வு.",
    procedures: [
      { en: "Advanced Endoscopy Diagnostic Reviews", ta: "அதிநவீன இரைப்பை எண்டோஸ்கோபி பரிசோதனை" },
      { en: "Colonoscopy Screenings & Polypectomy", ta: "கோலனோஸ்கோபி பரிசோதனை மற்றும் பாக்ஸ் அகற்றுதல்" },
      { en: "GERD & Reflux Therapeutic Management", ta: "அசிடிட்டி மற்றும் நெஞ்செரிச்சல் நீண்டகால மேலாண்மை" },
      { en: "Pancreatitis Clinical Care Protocols", ta: "கணைய அழற்சி தீவிர சிகிச்சை முறைகள்" }
    ]
  },
  {
    id: "gynecology",
    icon: Heart,
    category: "surgical",
    nameEn: "Obstetrics & Gynaecology",
    nameTa: "மகப்பேறியல் மற்றும் மகளிர் மருத்துவம்",
    descEn: "Full developmental fetal scanning, critical risk deliveries, and surgical management of complex uterus, ovarian, and pelvic floor disorders.",
    descTa: "கரு வளர்ச்சி கண்காணிப்பு, உயர்-ஆபத்து கர்ப்பத்திற்கான பிரசவ தீவிர சிகிச்சைகள் மற்றும் நீர்க்கட்டிகள் அகற்றும் முறைகள்.",
    procedures: [
      { en: "Normal & Complex Caesarean Deliveries", ta: "சுகப்பிரசவம் மற்றும் சிக்கலான கால சிசேரியன் பிரசவங்கள்" },
      { en: "Uterine Fibroid Removal (Myomectomy)", ta: "கர்ப்பப்பை நார்த்திசுக்கட்டிகள் பாதுகாப்பாக அகற்றுதல்" },
      { en: "Prolapse Corrective Surgery", ta: "இடுப்பு தசை இறக்கம் சீரமைப்பு அறுவைசிகிச்சை" },
      { en: "Hysterectomy Operations", ta: "கர்ப்பப்பை அகற்றுதல் (தேவைப்படும் பட்சத்தில்)" }
    ]
  },
  {
    id: "infertility",
    icon: Sparkles,
    category: "general",
    nameEn: "Infertility Specialist",
    nameTa: "மகப்பேறின்மை மற்றும் மலட்டுத்தன்மை சிகிச்சை",
    descEn: "Dynamic diagnostic assessments pinpointing developmental and anatomical constraints, managed via reproductive microsurgery solutions.",
    descTa: "குழந்தையின்மைக்கான காரணங்களைக் கண்டறிந்து அவற்றுக்கான நுணுக்கமான ஹார்மோன் சமநிலை மற்றும் மைக்ரோ சர்ஜரி தீர்வுகள்.",
    procedures: [
      { en: "Infertility Evaluative Laparoscopy", ta: "கருத்தரிப்பு தடை கண்டறியும் லேப்ராஸ்கோபி" },
      { en: "Reproductive Microsurgery", ta: "நுண்ணிய இனப்பெருக்க உறுப்பு அறுவைசிகிச்சைகள்" },
      { en: "Fertility Consultations & Analysis", ta: "தம்பதியருக்கான ஒருங்கிணைந்த கருத்தரிப்பு ஆலோசனைகள்" }
    ]
  },
  {
    id: "urology",
    icon: Activity,
    category: "surgical",
    nameEn: "Urology",
    nameTa: "சிறுநீரக சிறப்பு மருத்துவத் துறை",
    descEn: "Advanced clinical and camera-assisted interventions for kidney, bladder, and urinary tract diseases using medical laser innovations.",
    descTa: "சிறுநீரகக் கற்கள் மற்றும் புரோஸ்டேட் சுரப்பி வீக்கத்திற்கான அதிநவீன லேசர் மற்றும் எண்டோஸ்கோபி அறுவைசிகிச்சைகள்.",
    procedures: [
      { en: "Kidney Stones (URS / Retrograde Laparoscopy)", ta: "சிறுநீரகக் கற்கள் லேசர் உட்செலுத்தல் மூலம் உடைத்தல்" },
      { en: "Prostate TURP (Transurethral Resection)", ta: "பிராஸ்டேட் சுரப்பியை தடையின்றி சுரண்டி சரிசெய்தல்" },
      { en: "Laparoscopic Nephrectomy", ta: "பாதிக்கப்பட்ட சிறுநீரகம் லேப்ராஸ்கோபி மூலம் அகற்றுதல்" }
    ]
  },
  {
    id: "oncology",
    icon: ShieldAlert,
    category: "surgical",
    nameEn: "Oncology Diagnostics",
    nameTa: "புற்றுநோய் கண்டறிதல் & ஆலோசனைகள்",
    descEn: "Dedicated early screening protocols coupled with localized biopsies to ensure highly effective referential oncology plans.",
    descTa: "உடல் உறுப்புகளில் கட்டிகள் மற்றும் ஆரம்பகால புற்றுநோய் அறிகுறிகளைக் கண்டறியும் அதிநவீன பயாப்ஸி மற்றும் பரிசோதனைக்கூடங்கள்.",
    procedures: [
      { en: "Stomach & GASTRO Cancers Screening", ta: "வயிறு மற்றும் இரைப்பை குடல் புற்றுநோய் பரிசோதனை" },
      { en: "Thyroid Specialist Evaluations", ta: "தைராய்டு கட்டி புற்று கண்டறியும் உத்திகள்" },
      { en: "Breast and Gynaecological Screening", ta: "மார்பகம் மற்றும் கர்ப்பப்பை வாய் புற்றுநோய் முன்கூட்டியே கண்டறிதல்" },
      { en: "Skin Tumors Biopsies", ta: "தோல் கட்டிகள் மற்றும் பயாப்ஸி திசு பரிசோதனைகள்" }
    ]
  },
  {
    id: "ortho",
    icon: Scissors,
    category: "surgical",
    nameEn: "Orthopaedics & Arthroscopy",
    nameTa: "எலும்பியல் மற்றும் மூட்டு மாற்று அறுவைசிகிச்சை",
    descEn: "Modern keyhole arthroscopy and complex joint replacement surgical setups designed to restore dynamic pain-free limb mobility.",
    descTa: "எலும்பு முறிவுகள், விளையாட்டின் போது ஏற்படும் தசைநார் கிழிவுகள் மற்றும் தீவிர மூட்டு மாற்று சிகிச்சைகள்.",
    procedures: [
      { en: "ACL Joint Ligament Reconstruction", ta: "ஏசிஎல் தசைநார் കീஹோல் எனப்படும் ஆர்த்ரோஸ்கோபி தையல்" },
      { en: "Rotator Cuff Repair", ta: "தோள்பட்டை தசைநார் தையல் மற்றும் புனர்வாழ்வு" },
      { en: "Knee Replacement (Total & Uni)", ta: "முழுமையான மற்றும் பாதி முழங்கால் மூட்டு மாற்று சிகிச்சை" },
      { en: "Hip, Shoulder, and Elbow Replacements", ta: "இடுப்பு, தோள்பட்டை மற்றும் முழங்கை மாற்றுப் பணிகள்" }
    ]
  },
  {
    id: "spine",
    icon: Compass,
    category: "general",
    nameEn: "Spine Surgery",
    nameTa: "முதுகுத் தண்டுவடம் மற்றும் நரம்பியல் சிறப்பு",
    descEn: "Interventional spine treatments for intervertebral compression disc herniations, sciatica, and traumatic spinal cord damage.",
    descTa: "தண்டுவட நரம்பு அழுத்தம், ஜவ்வு விலகல் மற்றும் இடுப்பு வலி ஆகியவற்றிற்கான அறுவைசிகிச்சை இல்லாத மற்றும் குறைந்த அழுத்த சிகிச்சைகள்.",
    procedures: [
      { en: "Neck & Severe Back Pain Solutions", ta: "கழுத்து மற்றும் தீவிர முதுகுவலி குறைப்பு சிகிச்சைகள்" },
      { en: "Disc Prolapse Management (Microdiscectomy)", ta: "ஜவ்வு விலகல் மைக்ரோ டிஸ்கெக்டமி அறுவை சிகிச்சை" },
      { en: "Spondylolisthesis Realignment", ta: "தண்டுவட எலும்பு நழுவுதல் மற்றும் பிளேட் பொருத்துதல்" },
      { en: "Spinal Cord Trauma Care", ta: "தண்டுவட விபத்து காயங்களுக்கான அவரச சிகிச்சைகள்" }
    ]
  },
  {
    id: "plastic",
    icon: Sparkles,
    category: "surgical",
    nameEn: "Plastic Surgery & Cosmetology",
    nameTa: "பிளாஸ்டிக் அறுவைசிகிச்சை & காஸ்மெட்டாலஜி",
    descEn: "Advanced cosmetic restoration and reconstructive grafting carried out by highly qualified visiting clinical professionals.",
    descTa: "காயங்கள், தீக்காய தழும்புகள் மற்றும் அழகு மேம்பாட்டிற்கான நுட்பமான ரீகன்ஸ்ட்ரக்டிவ் பிளாஸ்டிக் அறுவைசிகிச்சைகள்.",
    procedures: [
      { en: "Hair Transplantation Surgeries", ta: "முடி மாற்று அறுவைசிகிச்சை சிகிச்சைகள்" },
      { en: "Rhinoplasty (Nasal Reshaping)", ta: "மூக்கு அமைப்பை சீராக்கும் ரைனோபிளாஸ்டி" },
      { en: "Liposuction & Body Contouring", ta: "அதிகப்படியான கொழுப்பு உறிஞ்சியெடுப்பு" },
      { en: "Abdominoplasty (Tummy Tuck) & Fat Grafting", ta: "அடிவயிற்று தசை சீரமைப்பு மற்றும் கொழுப்பு பொருத்துதல்" }
    ]
  },
  {
    id: "pediatric",
    icon: Baby,
    category: "general",
    nameEn: "Paediatric Surgery",
    nameTa: "குழந்தைகள் அறுவைசிகிச்சை பிரிவு",
    descEn: "Empathetic medical and congenital corrective surgery for pediatric hernias, appendicitis, and undescended testicle disorders.",
    descTa: "குழந்தைகளின் பிறவி குறைபாடுகள், குடலிறக்கம் மற்றும் சிறுநீர் பாதை குறைபாடுகளுக்கான பாதுகாப்பான அறுவைசிகிச்சைகள்.",
    procedures: [
      { en: "Paediatric Hernia Repair Operations", ta: "குழந்தை குடலிறக்க கீஹோல் சரிசெய்தல்" },
      { en: "Pediatric Appendicitis Care", ta: "குழந்தைகளுக்கான குடல்வால் தையல் முறைகள்" },
      { en: "Congenital Anomalies Restorations", ta: "குழந்தைகளின் பிறவி ஊனங்கள் சீரமைப்பு சிகிச்சைகள்" },
      { en: "Paediatric Surgical Consultations", ta: "குழந்தைகள் நல அறுவை சிகிச்சை சிறப்பு ஆலோசனைகள்" }
    ]
  },
  {
    id: "accident",
    icon: ShieldAlert,
    category: "general",
    nameEn: "Accident & Emergency Care",
    nameTa: "விபத்து மற்றும் தீவிர அவசர சிகிச்சை பிரிவு",
    descEn: "Active 24 hours a day with ventilator-equipped trauma rooms, fully functional diagnostics, and duty casualty surgeons ready to act.",
    descTa: "உயிர்காக்கும் கருவிகளுடன் 24 மணிநேரமும் செயல்படும் திருப்பூர் மாவட்டத்தின் அவசர சிகிச்சை தளம்.",
    procedures: [
      { en: "Emergency Trauma Critical Evaluations", ta: "தீவிர விபத்து காயங்களின் உயிர்காக்கும் அவசர சிகிச்சைகள்" },
      { en: "Advanced Wound & Soft Tissue Management", ta: "ஆழமான காயங்கள் தையல் மற்றும் தீவிர கிருமி நீக்கம்" },
      { en: "Accident Fracture Stabilizations", ta: "எலும்பு முறிவு எலும்பு பொருத்துதல் மற்றும் கட்டுப்போடுதல்" }
    ]
  }
];

// ==========================================
// 4. MAIN DEPARTMENTS COMPONENT
// ==========================================

export default function Departments() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'surgical' | 'general'>('all');

  // Filter Logic
  const filteredDepartments = departmentsList.filter(dept => {
    if (activeTab === 'all') return true;
    return dept.category === activeTab;
  });

  return (
    <section id="departments-portal-section" className="w-full bg-[#FAFAFC] py-20 font-sans border-b border-rose-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER SECTION LAYOUT */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold text-[#D63384] tracking-widest block font-sans">
            {lang === 'en' ? "Sri Chakra Speciality Centers" : "ஸ்ரீ சக்ரா உன்னத சிகிச்சை பிரிவுகள்"}
          </span>
          
          <h2 id="dept-title-header" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] leading-tight tracking-tight">
            {lang === 'en' ? deptTranslations.headerTitle.en : <span className="font-tamil">{deptTranslations.headerTitle.ta}</span>}
          </h2>
          
          <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full"></div>
          
          <p id="dept-desc-header" className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans max-w-3xl mx-auto font-medium">
            {lang === 'en' ? deptTranslations.headerSubtitle.en : <span className="font-tamil leading-relaxed">{deptTranslations.headerSubtitle.ta}</span>}
          </p>

          <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest pt-1">
            {lang === 'en' ? "Clinical Mastery Since 2011" : "2011 முதல் தொடரும் மக்கள் நலம் காக்கும் பணி"}
          </p>
        </div>

        {/* INTERACTIVE COMPONENT FILTER SYSTEM BAR */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-rose-100/30">
          
          {/* Sizing Indicator labels */}
          <div className="text-slate-500 text-xs font-semibold flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#D63384]" />
            <span>
              {lang === 'en' 
                ? deptTranslations.gridCountText.en.replace('{count}', filteredDepartments.length.toString()) 
                : <span className="font-tamil">{deptTranslations.gridCountText.ta.replace('{count}', filteredDepartments.length.toString())}</span>
              }
            </span>
          </div>

          {/* Button pill selector group */}
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Department Categories">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'all' 
                  ? 'bg-[#D63384] text-white shadow-md shadow-pink-100' 
                  : 'bg-white text-[#1A1A2E] border border-[#E8C4D4] hover:bg-[#FDE8F0]/30 hover:border-[#D63384]'
              }`}
            >
              {lang === 'en' ? deptTranslations.filterTabs.all.en : <span className="font-tamil">{deptTranslations.filterTabs.all.ta}</span>}
            </button>
            
            <button
              onClick={() => setActiveTab('surgical')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'surgical' 
                  ? 'bg-[#D63384] text-white shadow-md shadow-pink-100' 
                  : 'bg-white text-[#1A1A2E] border border-[#E8C4D4] hover:bg-[#FDE8F0]/30 hover:border-[#D63384]'
              }`}
            >
              {lang === 'en' ? deptTranslations.filterTabs.surgical.en : <span className="font-tamil">{deptTranslations.filterTabs.surgical.ta}</span>}
            </button>

            <button
              onClick={() => setActiveTab('general')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'general' 
                  ? 'bg-[#D63384] text-white shadow-md shadow-pink-100' 
                  : 'bg-white text-[#1A1A2E] border border-[#E8C4D4] hover:bg-[#FDE8F0]/30 hover:border-[#D63384]'
              }`}
            >
              {lang === 'en' ? deptTranslations.filterTabs.general.en : <span className="font-tamil">{deptTranslations.filterTabs.general.ta}</span>}
            </button>
          </div>

        </div>

        {/* RESPONSIVE DEPARTMENTS GRID (11 CARDS TO RENDER FULLY) */}
        <div id="departments-main-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map((dept) => {
            const VisualIconComp = dept.icon;

            return (
              <div
                key={dept.id}
                id={`dept-master-card-${dept.id}`}
                className="bg-white rounded-2xl border border-[#E8C4D4]/70 p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-[#D63384] transition-all duration-300 group"
              >
                
                {/* Upper card segments */}
                <div className="space-y-4">
                  
                  {/* Category badging overlay & icon */}
                  <div className="flex justify-between items-start">
                    <div className="w-11 h-11 rounded-xl bg-[#FDE8F0] border border-[#E8C4D4] text-[#D63384] flex items-center justify-center group-hover:bg-[#D63384] group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                      <VisualIconComp className="w-5.5 h-5.5" />
                    </div>
                    
                    <span className={`text-[9px] font-mono uppercase tracking-widest font-black px-2.5 py-1 rounded-full border ${
                      dept.category === 'surgical' 
                        ? 'bg-rose-50 border-rose-200 text-[#D63384]' 
                        : 'bg-indigo-50 border-indigo-100 text-[#1A1A2E]'
                    }`}>
                      {lang === 'en' ? (dept.category === 'surgical' ? 'Surgical Unit' : 'General Care') : (dept.category === 'surgical' ? 'அறுவை சிகிச்சைப்பிரிவு' : 'முறையான சிகிச்சை')}
                    </span>
                  </div>

                  {/* Title & Description with Deep Navy fonts */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-black text-lg text-[#1A1A2E] leading-snug group-hover:text-[#D63384] transition-colors duration-300">
                      {lang === 'en' ? dept.nameEn : <span className="font-tamil">{dept.nameTa}</span>}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {lang === 'en' ? dept.descEn : <span className="font-tamil leading-relaxed">{dept.descTa}</span>}
                    </p>
                  </div>

                  {/* Structured Procedures Bullet list */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <h4 className="text-[10px] font-sans font-extrabold uppercase tracking-wide text-[#A0215C]">
                      {lang === 'en' ? deptTranslations.procedureTitle.en : <span className="font-tamil text-[11px] font-extrabold">{deptTranslations.procedureTitle.ta}</span>}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-500 font-sans" role="list">
                      {dept.procedures.map((proc, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D63384] shrink-0 mt-0.5" />
                          <span className="font-medium">
                            {lang === 'en' ? proc.en : <span className="font-tamil">{proc.ta}</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Submitting link button with exact 8px (rounded-[8px]) border-radius and BRD color shifts */}
                <div className="pt-6 mt-6 border-t border-slate-50">
                  <a
                    href="#appointment-booking-portal"
                    className="w-full inline-flex items-center justify-center bg-white hover:bg-[#D63384] border-2 border-[#E8C4D4] hover:border-[#D63384] text-[#1A1A2E] hover:text-white font-extrabold text-xs py-3 rounded-[8px] transition-all duration-300 font-sans shadow-sm group-hover:shadow"
                  >
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    <span>{lang === 'en' ? deptTranslations.ctaButton.en : <span className="font-tamil">{deptTranslations.ctaButton.ta}</span>}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* DIRECT ACTION COMPONENT HELPLINE CONTAINER */}
        <div className="bg-[#1A1A2E] text-white p-6 rounded-2xl border-t-2 border-[#D63384] mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-slate-300 font-sans font-medium">
            {lang === 'en' ? deptTranslations.callCoordinator.en : <span className="font-tamil">{deptTranslations.callCoordinator.ta}</span>}
          </p>
          <a
            href="tel:+919626200600"
            className="inline-flex items-center justify-center bg-[#D63384] hover:bg-[#A0215C] text-white font-extrabold text-xs px-5 py-2.5 rounded-[8px] transition-color uppercase tracking-wider shadow"
          >
            {lang === 'en' ? "Call Admission Desk" : "இப்போதே அழைக்கவும்"}
          </a>
        </div>

      </div>
    </section>
  );
}
