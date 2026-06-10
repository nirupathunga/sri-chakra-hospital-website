import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  FileText, 
  Download, 
  Info, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Heart,
  Stethoscope,
  BriefcaseMedical,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useLanguage } from './LanguageLayout';

// ==========================================
// 1. DATA SCHEMAS & FAQS TRANSLATIONS
// ==========================================

export interface FAQItem {
  id: string;
  category: 'general' | 'appointments' | 'insurance' | 'surgeries';
  questionEn: string;
  questionTa: string;
  answerEn: string;
  answerTa: string;
}

const faqCategories = {
  all: { en: "All Questions", ta: "அனைத்து கேள்விகள்" },
  general: { en: "General", ta: "பொது தகவல்" },
  appointments: { en: "Appointments", ta: "முன்பதிவுகள்" },
  insurance: { en: "Insurance & Billing", ta: "காப்பீடு & கட்டணம்" },
  surgeries: { en: "Surgeries & Procedures", ta: "அறுவைசிகிச்சை & முறைகள்" }
};

const faqsList: FAQItem[] = [
  {
    id: "faq-01",
    category: "general",
    questionEn: "What are Sri Chakra Hospital's daily opening hours?",
    questionTa: "ஸ்ரீ சக்ரா மருத்துவமனையின் தினசரி வேலை நேரம் என்ன?",
    answerEn: "Sri Chakra Hospital operates during the following clinical hours: Weekdays (Monday through Saturday) from 8:00 AM to 8:00 PM, and Weekends (Sundays and Public Holidays) from 9:00 AM to 1:00 PM. Our 24/7 emergency casualty ward and duty doctors remain active all night for trauma & accident care.",
    answerTa: "ஸ்ரீ சக்ரா மருத்துவமனை பின்வரும் நேரங்களில் செயல்படுகிறது: வாரநாட்கள் (திங்கள் முதல் சனிக்கிழமை வரை) காலை 8:00 மணி முதல் இரவு 8:00 மணி வரையிலும், வார இறுதிநாட்கள் (ஞாயிறு மற்றும் அரசு விடுமுறை நாட்கள்) காலை 9:00 மணி முதல் மதியம் 1:00 மணி வரையிலும் செயல்படுகிறது. எங்களது 24/7 அவசர விபத்து சிகிச்சைப்பிரிவு மற்றும் அவசர மருத்துவர்கள் இரவு முழுவதும் பணியில் இருப்பார்கள்."
  },
  {
    id: "faq-02",
    category: "appointments",
    questionEn: "How do I book a consultation or specialist appointment?",
    questionTa: "சிகிச்சை ஆலோசனைகள் அல்லது சிறப்பு மருத்துவருக்கான முன்பதிவை நான் எவ்வாறு செய்வது?",
    answerEn: "You can book an appointment easily in two ways: 1) Fill out our online interactive Callback Request Form located directly below. A clinical coordinator will call you back within 2 hours to confirm your slot. 2) Dial our direct receptionist desk line at +91 96 26 200 600 for instant bookings.",
    answerTa: "நீங்கள் எளிதாக இரண்டு வழிகளில் முன்பதிவு செய்யலாம்: 1) கீழே உள்ள எங்களது இணையதள திரும்ப அழைப்புப் படிவத்தைப் பூர்த்தி செய்யவும். அடுத்த 2 மணிநேரத்திற்குள் எங்கள் சிகிச்சை ஒருங்கிணைப்பாளர் உங்களை அழைத்து நேரத்தை உறுதி செய்வார். 2) உடனடி முன்பதிவுகளுக்கு எங்களது நேரடி உதவி மைய எண்ணை (+91 96 26 200 600) அழைக்கவும்."
  },
  {
    id: "faq-03",
    category: "appointments",
    questionEn: "What is the policy for walk-in patients without pre-booking?",
    questionTa: "முன்பதிவு செய்யாமல் நேரடியாக வரும் நோயாளிகளுக்கான விதிகள் என்ன?",
    answerEn: "Walk-in patients are always welcome and will be evaluated by our on-duty outpatient consultant. However, priority check-ups are given to patients with pre-scheduled appointment times. Emergency trauma and triage cases are given immediate access regardless of booking status.",
    answerTa: "முன்பதிவு செய்யாமல் நேரடியாக வரும் நோயாளிகள் எப்போதும் வரவேற்கப்படுகிறார்கள், மேலும் அவர்கள் கடமையிலுள்ள வெளிநோயாளி மருத்துவராலேயே உடனடியாக பரிசோதிக்கப்படுவர். இருப்பினும், முன்னதாக முன்பதிவு செய்த நோயாளிகளுக்கு முன்னுரிமை வழங்கப்படும். அவசர விபத்து வழக்குகள் முன்பதிவு நிலையைப் பொருட்படுத்தாமல் உடனடியாகக் கவனிக்கப்படும்."
  },
  {
    id: "faq-04",
    category: "insurance",
    questionEn: "Which insurance companies and TPAs are accepted at Sri Chakra?",
    questionTa: "ஸ்ரீ சக்ராவில் எந்தெந்த இன்சூரன்ஸ் நிறுவனங்கள் மற்றும் டிபிஏக்கள் அங்கீகரிக்கப்படுகின்றன?",
    answerEn: "Sri Chakra Hospital is fully empaneled with over 35+ prominent public, private insurers, and Third-Party Administrators (TPAs), including Star Health, Medi Assist, HDFC ERGO, ICICI Lombard, Niva Bupa, United India, MDIndia TPA, Care Health, and national public health schemes.",
    answerTa: "ஸ்ரீ சக்ரா மருத்துவமனை, ஸ்டார் ஹெல்த், மீடியே அசிஸ்ட், எச்டிஎப்சி எர்கோ, ஐசிஐசிஐ லொம்பார்ட், நீவா பூபா, யுனைடெட் இந்தியா, எம்டி இந்தியா டிபிஏ மற்றும் அரசு காப்பீட்டுத் திட்டங்கள் உட்பட 35+ முன்னணி பொது, தனியார் காப்பீட்டு நிறுவனங்கள் மற்றும் மூன்றாம் தரப்பு நிர்வாகிகளுடன் (TPA) முழுமையான கூட்டுறுவைக் கொண்டுள்ளது."
  },
  {
    id: "faq-05",
    category: "insurance",
    questionEn: "What documents are required for hassle-free cashless processing?",
    questionTa: "சிரமமில்லாத ரொக்கமில்லா இன்சூரன்ஸ் சிகிச்சைக்கு என்னென்ன ஆவணங்கள் தேவை?",
    answerEn: "To activate pre-authorized cashless processing, please present: 1) Valid Health Insurance Policy Card or E-Card copy, 2) Patient's Aadhar Card or Government ID, 3) Consultation prescription, and 4) All preceding clinical records, ultrasound scans, and laboratory reports.",
    answerTa: "ரொக்கமில்லா சிகிச்சையைத் தொடங்க பின்வரும் ஆவணங்களைச் சமர்ப்பிக்கவும்: 1) செல்லுபடியாகும் காப்பீட்டு அடையாள அட்டை (TPA Card), 2) நோயாளியின் ஆதார் அட்டை அல்லது அரசு அடையாள அட்டை, 3) மருத்துவரின் பரிந்துரைச் சீட்டு, மற்றும் 4) முந்தைய மருத்துவ சிகிச்சை ஆவணங்கள், ஸ்கேன் அறிக்கைகள் மற்றும் இரத்தப் பரிசோதனை முடிவுகள்."
  },
  {
    id: "faq-06",
    category: "general",
    questionEn: "Do you have emergency trauma and accident care availability?",
    questionTa: "அவசரகால விபத்து மற்றும் தீவிர அதிர்ச்சி சிகிச்சை வசதி உள்ளதா?",
    answerEn: "Yes, Sri Chakra maintains a designated 24-hour Accident & Emergency Care cluster. This includes an immediate triage unit, life-monitoring ventilator systems, state-of-the-art diagnostics, and general/trauma surgeons available on call at all times of the day and night.",
    answerTa: "ஆம், திருப்பூர் மாவட்டத்தில் 24 மணிநேரமும் அவசர விபத்து மற்றும் தீவிர சிகிச்சை பிரிவு இங்கு செயல்படுகிறது. அவசரகால சிகிச்சைத் தளம், உயிர்காக்கும் வெண்டிலேட்டர் வசதிகள், உடனடி ஆய்வகம் மற்றும் அவசர அறுவைசிகிச்சை மருத்துவர்கள் 24 மணிநேரமும் பணியில் இருப்பர்."
  },
  {
    id: "faq-07",
    category: "surgeries",
    questionEn: "Who performs the advanced Endo-Laparoscopic procedures?",
    questionTa: "அதிநவீன எண்டோ-லேப்ராஸ்கோபி சிகிச்சைகளை யார் மேற்கொள்கிறார்கள்?",
    answerEn: "All major advanced laparoscopic, keyhole, and gastroenterological procedures are personally performed by our Executive Medical Director, Dr. M. Ashok, and his dedicated clinical team. Dr. Ashok is a leading gastro-laparoscopic surgeon with decades of micro-surgical expertise.",
    answerTa: "அனைத்து முக்கிய லேப்ராஸ்கோபி, துளையிடும் மற்றும் இரைப்பை குடல் அறுவைசிகிச்சைகள் எங்களது தலைமை மருத்துவ இயக்குநர் டாக்டர் எம். அசோக் மற்றும் அவர்களின் மருத்துவக் குழுவினரால் நேரடியாக வழிநடத்தப்படுகின்றன. டாக்டர் அசோக் அவர்கள் பல தசாப்த கால அறுவைசிகிச்சை அனுபவம் கொண்டவர்."
  },
  {
    id: "faq-08",
    category: "appointments",
    questionEn: "How is the visiting consultants' schedule managed?",
    questionTa: "வெளிப்புற மருத்துவ நிபுணர்களின் வருகை எவ்வாறு நிர்வகிக்கப்படுகிறது?",
    answerEn: "Visiting super-specialists in Plastic Surgery, pediatric care, and surgical oncology join the clinical roster for pre-scheduled elective procedures and special outpatient clinics. Patients can call our main admissions block to check specific dates and lock times.",
    answerTa: "பிளாஸ்டிக் அறுவைசிகிச்சை, குழந்தைகள் நல அறுவைசிகிச்சை மற்றும் புற்றுநோய் துறை போன்ற வெளிப்புற சூப்பர்-ஸ்பெஷலிஸ்ட் மருத்துவர்கள், முன்கூட்டியே திட்டமிடப்பட்ட தேதிகளில் இங்கு வருகை தருகின்றனர். நோயாளிகள் எங்களது வரவேற்பறையைத் தொடர்புகொண்டு குறிப்பிட்ட தேதிகளை உறுதிசெய்து முன்பதிவு செய்யலாம்."
  },
  {
    id: "faq-09",
    category: "general",
    questionEn: "What are the inpatient ward visiting hours and companion policies?",
    questionTa: "உள்நோயாளிகளைப் பார்ப்பதற்கான நேரம் மற்றும் உடன் இருக்க வேண்டிய துணைவரின் விதிகள் என்ன?",
    answerEn: "To guarantee sterile healing environments, inpatient visiting hours are restricted to: Evening 4:00 PM to 6:00 PM. Only one designated companion (attendant) is permitted to stay overnight with the patient in general/private wards, and is issued an official entry pass upon admission.",
    answerTa: "நோயாளியின் அமைதியான குணமடைதலை உறுதி செய்ய, பார்வையாளர்கள் நேரம்: மாலை 4:00 மணி முதல் மாலை 6:00 மணி வரை மட்டுமே. உள்நோயாளியுடன் தங்க ஒரு துணைவருக்கு மட்டுமே அனுமதி வழங்கப்படும், அவசர அனுமதிப் பாஸ் சேர்க்கையின் போது வழங்கப்படும்."
  },
  {
    id: "faq-10",
    category: "surgeries",
    questionEn: "Do you offer specialized cancer/oncology surgical procedures?",
    questionTa: "புற்றுநோய் சார்ந்த அறுவைசிகிச்சைகள் இங்கு செய்யப்படுகிறதா?",
    answerEn: "Yes, Sri Chakra performs highly specialized oncological procedures and screenings, encompassing stomach, thyroid, breast, colon, and gynaecological system cancers. Operations are supplemented with localized precision biopsies for thorough diagnostic safety.",
    answerTa: "ஆம், ஸ்ரீ சக்ரா மருத்துவமனையில் வயிறு, தைராய்டு, மார்பகம், பெருங்குடல் மற்றும் மகளிர் உறுப்புகள் சார்ந்த புற்றுநோய் சிகிச்சைகள் மற்றும் கட்டிகளை அகற்றும் முக்கிய அறுவைசிகிச்சைகள் மிகுந்த பாதுகாப்புடன் மேற்கொள்ளப்பட்டு நுண் பயாப்ஸி திசு பரிசோதனைக்கு அனுப்பப்படுகின்றன."
  }
];

// ==========================================
// 2. ADDITIONAL LAYOUT TRANSLATIONS
// ==========================================

const infoTranslations = {
  headerTitle: {
    en: "Patient Information & Guides",
    ta: "நோயாளி வழிகாட்டிகள் & அடிக்கடி கேட்கப்படும் கேள்விகள்"
  },
  headerSubtitle: {
    en: "At Sri Chakra, transparent medical education and step-by-step guidance form the core of our clinical operations. Empowering you with accurate instructions for outpatient consultations (OPD) and inpatient admissions since 2011.",
    ta: "ஸ்ரீ சக்ராவில், வெளிப்படையான மருத்துவ வழிகாட்டுதல் மற்றும் படி-படியாக வழிநடத்துதல் எங்களது முக்கியமான சேவையாகும். 2011 முதல் உங்கள் ஆலோசனைகள் மற்றும் சேர்க்கைகளை எளிதாக்க தேவையான தகவல்கள் இங்கே தொகுக்கப்பட்டுள்ளன."
  },
  sidebarTitle: {
    en: "Admission Guidance Desk",
    ta: "நோயாளிகள் சேர்க்கை வழிகாட்டி"
  },
  sidebarSubtitle: {
    en: "A step-by-step list of coordinates to keep ready before checking into our admissions ward.",
    ta: "மருத்துவமனையில் அனுமதிக்கப்படுவதற்கு முன் நீங்கள் சரிபார்த்து தயாராக வைத்திருக்க வேண்டியவை."
  },
  bringTitle: {
    en: "What to Bring for Inpatient Admission",
    ta: "சேர்க்கையின் போது கொண்டு வர வேண்டியவை"
  },
  bringItems: [
    { en: "Aadhar Card or Valid Government ID proof", ta: "ஆதார் அட்டை அல்லது ஏதேனும் ஒரு அரசு அடையாள அட்டை" },
    { en: "Past medical record files, scan reports, and medications list", ta: "முந்தைய மருத்துவ ஆவணங்கள், ஸ்கேன் அறிக்கைகள் மற்றும் மருந்துச் சீட்டுகள்" },
    { en: "Active Health Insurance Policy Card or TPA credentials", ta: "மருத்துவ இன்சூரன்ஸ் கார்டு அல்லது டிபிஏ பாலிசி விவரங்கள்" },
    { en: "Original clinical referral slip from your consulting specialist", ta: "ஆலோசனைக் குழுவினரின் நேரடி சேர்க்கை பரிந்துரை கடிதம்" },
    { en: "Comfortable personal wear and toiletries for ward stays", ta: "தங்குவதற்குத் தேவையான சொகுசான ஆடைகள் மற்றும் தனிப்பட்ட உபயோகப் பொருட்கள்" }
  ],
  policiesTitle: {
    en: "Hospital & Safety Policies",
    ta: "மருத்துவமனை பாதுகாப்பு விதிகள்"
  },
  policiesItems: [
    { en: "Sri Chakra clinical premise is a strictly non-smoking zone.", ta: "மருத்துவமனை வளாகத்தில் புகைபிடித்தல் மற்றும் மது அருந்துதல் முற்றிலும் தடை செய்யப்பட்டுள்ளது." },
    { en: "Please keep noise levels and phone volumes at a minimum in recovery wards.", ta: "வார்டுகளில் மற்ற நோயாளிகளின் அமைதிக்குத் தொந்தரவு இல்லாமல் கைபேசிகளை சத்தமில்லாமல் வைக்கவும்." },
    { en: "Outside catering or home food must be confirmed with the dietician.", ta: "வெளி உணவுகளை உட்கொள்வதற்கு முன் உங்களது உணவு ஆலோசகரிடம் பரிசோதித்துக் கொள்ளவும்." },
    { en: "Sanitize hands fully prior toEntering Intensive Care units (ICU).", ta: "തീவிர அவசர சிகிச்சை அறைகளுக்குள் நுழையும் முன் கைகளை முழுமையாக சுத்தம் செய்யவும்." }
  ],
  downloadTitle: {
    en: "Patient Admission Forms",
    ta: "நோயாளி சேர்க்கை படிவங்கள்"
  },
  downloadDesc: {
    en: "Speed up your physical check-in flow by pulling, printing, and filling out key clinical consent forms prior to arriving.",
    ta: "மருத்துவமனைக்கு வருவதற்கு முன்பே தேவையான சேர்க்கை ஒப்புதல் படிவங்களை பதிவிறக்கம் செய்து பூர்த்தி செய்து கொண்டு வரலாம்."
  },
  downloadBtn1: {
    en: "Clinical Admission Consent Form",
    ta: "பொது சேர்க்கை ஒப்புதல் படிவம்"
  },
  downloadBtn2: {
    en: "Cashless Pre-Auth Claim Form",
    ta: "டிபிஏ முன்-அனுமதி விண்ணப்பப் படிவம்"
  },
  fileSizeText: {
    en: "PDF Document (approx. 1.2 MB)",
    ta: "PDF ஆவணம் (சுமார் 1.2 MB)"
  }
};

// ==========================================
// 3. MAIN RENDER COMPONENT
// ==========================================

export default function PatientInfo() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'appointments' | 'insurance' | 'surgeries'>('all');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-01'); // Default open first FAQ

  // Filter Routine
  const filteredFaqs = faqsList.filter(faq => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  // Toggle Accordion Panels
  const handleToggleFaq = (faqId: string) => {
    setExpandedFaq(prev => (prev === faqId ? null : faqId));
  };

  return (
    <section id="patient-faqs-and-info-portal" className="w-full bg-white py-20 font-sans border-b border-rose-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold text-[#D63384] tracking-widest bg-[#FDE8F0] px-3.5 py-1.5 rounded-full border border-[#E8C4D4] inline-block font-sans">
            {lang === 'en' ? "Empowering Patients Daily" : "நோயாளிகளுக்கான தெளிவான வழிகாட்டி"}
          </span>
          
          <h2 id="patient-info-title" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] leading-tight tracking-tight">
            {lang === 'en' ? infoTranslations.headerTitle.en : <span className="font-tamil">{infoTranslations.headerTitle.ta}</span>}
          </h2>
          
          <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full"></div>
          
          <p id="patient-info-subtitle" className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans max-w-3xl mx-auto font-medium">
            {lang === 'en' ? infoTranslations.headerSubtitle.en : <span className="font-tamil leading-relaxed">{infoTranslations.headerSubtitle.ta}</span>}
          </p>
        </div>

        {/* THREE CATEGORY PILLS BAR + ACCORDION EXPANSION IN TWO COLS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* LEFT 7 EXPANSIONS SIDE: FAQS INTERACTIVE ACCORDION */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Horizontal selection row for pills */}
            <div className="flex flex-wrap gap-2 pb-4 border-b border-rose-100/30" role="group" aria-label="FAQ Categories">
              {(Object.keys(faqCategories) as Array<keyof typeof faqCategories>).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    // Open the first FAQ of this category automatically to be helpful
                    const firstOfCat = faqsList.find(f => key === 'all' || f.category === key);
                    if (firstOfCat) setExpandedFaq(firstOfCat.id);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeCategory === key 
                      ? 'bg-[#1A1A2E] text-white shadow' 
                      : 'bg-slate-50 text-slate-600 border border-[#E8C4D4]/60 hover:bg-[#FDE8F0]/40'
                  }`}
                >
                  {lang === 'en' ? faqCategories[key].en : <span className="font-tamil text-[11px]">{faqCategories[key].ta}</span>}
                </button>
              ))}
            </div>

            {/* Accordion List container */}
            <div id="faq-accordions-group" className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = expandedFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    id={`faq-accordion-block-${faq.id}`}
                    className={`bg-white rounded-xl border ${isOpen ? 'border-[#D63384] ring-1 ring-[#D63384]/15 shadow-sm' : 'border-[#E8C4D4]'} overflow-hidden transition-all duration-300`}
                  >
                    {/* Collapsible toggle header button */}
                    <button
                      id={`faq-toggle-button-${faq.id}`}
                      type="button"
                      onClick={() => handleToggleFaq(faq.id)}
                      className="w-full text-left px-5 py-4 flex justify-between items-center gap-4 hover:bg-[#FDE8F0]/10 focus:outline-none focus:bg-[#FDE8F0]/20 transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-serif font-black text-xs sm:text-sm text-[#1A1A2E] leading-relaxed flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-[#D63384] shrink-0 mt-0.5" />
                        <span>{lang === 'en' ? faq.questionEn : <span className="font-tamil text-[13px] leading-relaxed">{faq.questionTa}</span>}</span>
                      </h3>
                      
                      <div className={`w-6 h-6 rounded-full bg-slate-50 text-[#1A1A2E] flex items-center justify-center border border-slate-100 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FDE8F0] text-[#D63384]' : ''}`}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {/* Smooth expansion hidden answer panel */}
                    <div
                      id={`faq-answer-panel-${faq.id}`}
                      className={`transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-rose-50' : 'max-h-0'}`}
                    >
                      <div className="px-5 py-4 bg-[#FAFAFC] text-xs leading-relaxed text-[#555555] font-sans font-medium">
                        {lang === 'en' ? faq.answerEn : <span className="font-tamil leading-relaxed">{faq.answerTa}</span>}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Note support callout */}
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start gap-3">
              <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-[11px] font-sans font-medium text-slate-600 leading-relaxed">
                {lang === 'en' 
                  ? "Still have generic queries? Feel free to contact our round-the-clock receptionist block at +91 96 26 200 600."
                  : "மேலும் ஏதேனும் சந்தேகங்கள் இருந்தால், எங்களது 24 மணிநேர நேரடி எண்ணை அழைக்கவும்: +91 96 26 200 600."
                }
              </p>
            </div>

          </div>

          {/* RIGHT 5 EXPANSIONS SIDE: BRING ADMISSION GUIDES & DOWNLOADS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Guide Card Container */}
            <div className="bg-white border-2 border-[#E8C4D4] rounded-2xl shadow-sm overflow-hidden">
              
              {/* Header Box */}
              <div className="bg-[#1A1A2E] p-5 text-white border-b border-[#A0215C]">
                <h3 className="font-serif font-black text-sm text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D63384]" />
                  <span>{lang === 'en' ? infoTranslations.sidebarTitle.en : <span className="font-tamil">{infoTranslations.sidebarTitle.ta}</span>}</span>
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  {lang === 'en' ? infoTranslations.sidebarSubtitle.en : <span className="font-tamil leading-relaxed">{infoTranslations.sidebarSubtitle.ta}</span>}
                </p>
              </div>

              {/* Guide Contents */}
              <div className="p-6 space-y-6">
                
                {/* 1. What to Bring */}
                <div className="space-y-3">
                  <h4 className="text-xs font-sans font-extrabold text-[#1A1A2E] border-b border-rose-100 pb-1.5 flex items-center gap-2">
                    <BriefcaseMedical className="w-4 h-4 text-[#D63384]" />
                    <span>{lang === 'en' ? infoTranslations.bringTitle.en : <span className="font-tamil">{infoTranslations.bringTitle.ta}</span>}</span>
                  </h4>
                  
                  <ul className="space-y-2 text-xs font-sans text-slate-500 font-medium" role="list">
                    {infoTranslations.bringItems.map((item, id) => (
                      <li key={id} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D63384] mt-1.5 shrink-0"></span>
                        <span>{lang === 'en' ? item.en : <span className="font-tamil leading-relaxed">{item.ta}</span>}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Hospital Safety Policies */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-sans font-extrabold text-[#1A1A2E] border-b border-rose-100 pb-1.5 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D63384]" />
                    <span>{lang === 'en' ? infoTranslations.policiesTitle.en : <span className="font-tamil">{infoTranslations.policiesTitle.ta}</span>}</span>
                  </h4>

                  <ul className="space-y-2 text-xs font-sans text-slate-500 font-medium" role="list">
                    {infoTranslations.policiesItems.map((item, id) => (
                      <li key={id} className="flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                        <span>{lang === 'en' ? item.en : <span className="font-tamil leading-relaxed">{item.ta}</span>}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* DOWNLOADABLE ADMISSION FORMS MODULE */}
            <div className="bg-[#FAFAFC] border border-[#E8C4D4] rounded-2xl p-6 space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-[#FDE8F0] text-[#D63384] border border-[#E8C4D4] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-black text-[#1A1A2E]">
                    {lang === 'en' ? infoTranslations.downloadTitle.en : <span className="font-tamil">{infoTranslations.downloadTitle.ta}</span>}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans font-medium mt-1">
                    {lang === 'en' ? infoTranslations.downloadDesc.en : <span className="font-tamil leading-relaxed">{infoTranslations.downloadDesc.ta}</span>}
                  </p>
                </div>
              </div>

              {/* Grid block for download file triggers (stylized clickables) */}
              <div className="space-y-3 pt-2">
                {/* Form 1 trigger */}
                <button
                  type="button"
                  onClick={() => alert(lang === 'en' ? "SCH Admission Consent PDF download initiated." : "ஸ்ரீ சக்ரா சேர்க்கை ஒப்புதல் ஆவணம் பதிவிறக்கம் தொடங்கப்பட்டது.")}
                  className="w-full flex items-center justify-between bg-white hover:bg-[#FDE8F0]/30 border border-[#E8C4D4]/80 hover:border-[#D63384] p-3 rounded-xl shadow-sm text-left transition-all duration-200 group"
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-sans font-bold text-slate-700 group-hover:text-[#D63384] transition-colors block">
                      {lang === 'en' ? infoTranslations.downloadBtn1.en : <span className="font-tamil leading-normal">{infoTranslations.downloadBtn1.ta}</span>}
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono block">
                      {lang === 'en' ? infoTranslations.fileSizeText.en : infoTranslations.fileSizeText.ta}
                    </span>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 group-hover:bg-[#D63384] group-hover:text-white flex items-center justify-center transition-colors shadow-sm shrink-0">
                    <Download className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Form 2 trigger */}
                <button
                  type="button"
                  onClick={() => alert(lang === 'en' ? "SCH Insurance Claims Pre-authorization PDF download initiated." : "ஸ்ரீ சக்ரா டிபிஏ முன்-அனுமதி விண்ணப்பப் படிவம் பதிவிறக்கம் தொடங்கப்பட்டது.")}
                  className="w-full flex items-center justify-between bg-white hover:bg-[#FDE8F0]/30 border border-[#E8C4D4]/80 hover:border-[#D63384] p-3 rounded-xl shadow-sm text-left transition-all duration-200 group"
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-sans font-bold text-slate-700 group-hover:text-[#D63384] transition-colors block">
                      {lang === 'en' ? infoTranslations.downloadBtn2.en : <span className="font-tamil leading-normal">{infoTranslations.downloadBtn2.ta}</span>}
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono block">
                      {lang === 'en' ? infoTranslations.fileSizeText.en : infoTranslations.fileSizeText.ta}
                    </span>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 group-hover:bg-[#D63384] group-hover:text-white flex items-center justify-center transition-colors shadow-sm shrink-0">
                    <Download className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
