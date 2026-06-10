import React from 'react';
import { 
  Activity, 
  Heart, 
  Stethoscope, 
  Award, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Bed, 
  Check, 
  Sparkles, 
  Smile, 
  Shield, 
  ChevronRight, 
  Video, 
  Newspaper, 
  Compass, 
  BookOpen,
  Phone,
  BriefcaseMedical,
  Stethoscope as DoctorIcon
} from 'lucide-react';
import { useLanguage } from './LanguageLayout';

// ==========================================
// TRANSLATION DICTIONARY FOR ALL 11 SECTIONS
// ==========================================

const homeTranslations = {
  hero: {
    title: {
      en: "Advanced Healthcare, Close to Home",
      ta: "மேம்பட்ட மருத்துவம், உங்கள் இல்லம் தேடி"
    },
    subheading: {
      en: "Sri Chakra Hospital - Multi-Speciality Care in Udumalpet since 2011. Equipped with highly trained surgeons, diagnostic systems, and a fully attentive patient support network.",
      ta: "ஸ்ரீ சக்ரா மருத்துவமனை - 2011 முதல் உடுமலையில் இயங்கும் பல்நோக்கு சிறப்பு மருத்துவமனை. அதிநவீன வசதிகள் மற்றும் நிபுணத்துவ மருத்துவர்களுடன் உங்கள் நலம் காக்கிறோம்."
    },
    primaryCta: {
      en: "Book Appointment",
      ta: "முன்பதிவு செய்ய"
    },
    secondaryCta: {
      en: "View Specialities",
      ta: "சிகிச்சைத் துறைகள்"
    },
    trustedBy: {
      en: "Alligned with national health standards and cashless insurance models",
      ta: "அரசு காப்பீடு மற்றும் முன்னணி கார்ப்பரேட் காப்பீட்டு வசதிகளுடன் இணைக்கப்பட்டுள்ளது"
    }
  },
  stats: {
    est: {
      en: "Established",
      ta: "நிறுவப்பட்டது"
    },
    estVal: "2011",
    surgeries: {
      en: "Successful Surgeries",
      ta: "வெற்றிகரமான அறுவைசிகிச்சைகள்"
    },
    surgeriesVal: "1000+",
    specs: {
      en: "Clinical Divisions",
      ta: "சிகிச்சை பிரிவுகள்"
    },
    specsVal: "15+",
    beds: {
      en: "Beds Capacity",
      ta: "படுக்கை வசதிகள்"
    },
    bedsVal: "40 Beds"
  },
  specialities: {
    title: {
      en: "Our Specialities",
      ta: "எங்கள் சிறப்புத் பிரிவுகள்"
    },
    subtitle: {
      en: "Comprehensive Multi-Speciality Clinics Guided by Accomplished Surgeons",
      ta: "தலைசிறந்த நிபுணர்களால் நடத்தப்படும் அதிநவீன மருத்துவத் துறைகள்"
    },
    viewAll: {
      en: "View All Departments",
      ta: "அனைத்து சிகிச்சைப் பிரிவுகள்"
    },
    items: [
      {
        id: "laparoscopy",
        titleEn: "Advanced Laparoscopic Surgery",
        titleTa: "மேம்பட்ட லேப்ராஸ்கோபி சிகிச்சை",
        descEn: "Keyhole surgical services featuring laparoscopic upper GI, hernia repairs, obesity diagnostics, and gallbladder corrective procedures.",
        descTa: "குறைந்த தழும்புகளுடன் கூடிய பித்தப்பை, குடலிறக்கம், குடல்வால் மற்றும் இரைப்பை குடல் அறுவைசிகிச்சைகள்.",
        procedures: ["Hernia Repair", "Gallbladder Removal", "Appendix Extraction"]
      },
      {
        id: "gastro",
        titleEn: "Gastroenterology & GI Endoscopy",
        titleTa: "இரைப்பை மற்றும் குடல் எண்டோஸ்கோபி",
        descEn: "Targeted clinical protocols for stomach issues, definitive upper GI endoscopies, acid reflux management, and complete liver reviews.",
        descTa: "வயிறு மற்றும் குடல் அலர்ஜி, அமில வீச்சு, இரைப்பை புண் ஆகியவற்றிற்கான எண்டோஸ்கோபி மற்றும் நவீன சிகிச்சைகள்.",
        procedures: ["Diagnostic Endoscopy", "Colonoscopy Screening", "GERD Diagnostics"]
      },
      {
        id: "maternity",
        titleEn: "Obstetrics & Gynaecology",
        titleTa: "மகப்பேறியல் மற்றும் பெண்கள் நலன்",
        descEn: "Safe normal delivery management, caesarean support, fibroid removals, pain-free vaginal births, and general women cancer screening.",
        descTa: "மகப்பேறு கண்காணிப்பு, சுகப்பிரசவம், சிசேரியன், பெண்களுக்கு ஏற்படும் நீர்க்கட்டிகள் மற்றும் நார்த் திசுக்கட்டி அறுவை சிகிச்சை.",
        procedures: ["Normal & C-Section", "Fibroid Reconstitution", "Painless Delivery"]
      },
      {
        id: "ortho",
        titleEn: "Orthopaedics & Joint Replacement",
        titleTa: "எலும்பியல் மற்றும் மூட்டு மாற்று சிகிச்சை",
        descEn: "Corrective therapies for joint degradation, severe bone fractures, knee surgeries, shoulder/elbow replacements, and spinal care.",
        descTa: "எலும்பு முறிவு, மூட்டு மாற்று அறுவைச் சிகிச்சை (முழங்கால், இடுப்பு), முதுகுத் தண்டுவடம் சார்ந்த சிகிச்சைகள் மற்றும் தசைநார் பழுது பார்த்தல்.",
        procedures: ["Knee Joint Replacement", "Spinal Interventions", "Fracture Management"]
      },
      {
        id: "oncology",
        titleEn: "Oncology Diagnostics",
        titleTa: "புற்றுநோய் கண்டறிதல் மற்றும் ஆலோசனைகள்",
        descEn: "Strict screening protocols for stomach, thyroid, breast, and gynecological cancers, ensuring early recognition parameters.",
        descTa: "மார்பகம், தைராய்டு, வயிறு மற்றும் கர்ப்பப்பை வாய் புற்றுநோய்களை முன்கூட்டியே கண்டறிவதற்கான பயாப்ஸி மற்றும் பரிசோதனைகள்.",
        procedures: ["Cancer Early Screening", "Biopsy Diagnostics", "Referral Oncology"]
      },
      {
        id: "urology",
        titleEn: "Urology Clinics",
        titleTa: "சிறுநீரக மருத்துவத் துறை",
        descEn: "Advanced laser lithotripsy for kidney stones, keyhole surgeries for prostate concerns (TURP), and holistic urinary wellness.",
        descTa: "சிறுநீரகக் கற்கள் அகற்றுதல், புரோஸ்டேட் சுரப்பித் தீர்வுகள் மற்றும் சிறுநீர்ப்பை தீவிர நோய்க்கு மருந்துகள்.",
        procedures: ["Kidney Stone Laser Removal", "Prostate TURP", "UTI Interventions"]
      }
    ]
  },
  whyChooseUs: {
    title: {
      en: "Why Patients Trust Sri Chakra",
      ta: "நோயாளிகள் ஸ்ரீ சக்ராவை ஏன் நம்புகிறார்கள்"
    },
    subtitle: {
      en: "Upholding Exemplary Patient Safety and Ethical Clinical Standards Since Day One",
      ta: "துவக்கம் முதல் நோயாளிகளின் பாதுகாப்பிற்கும், மருத்துவ ஒழுங்குமுறைகளுக்கும் முக்கியத்துவம்"
    },
    cards: [
      {
        id: "surgeons",
        icon: "award",
        titleEn: "Internationally Trained Surgeons",
        titleTa: "அனைத்துலக பயிற்சி பெற்ற நிபுணர்கள்",
        descEn: "Led by Dr. Ashok, bringing benchmark minimum-access precision learned at premium medical centers.",
        descTa: "டாக்டர் அசோக் தலைமையில், உலக தரம் வாய்ந்த மருத்துவமனைகளின் பயிற்சி பெற்ற அனுபவமிக்க மருத்துவர்கள்."
      },
      {
        id: "laparoscopic",
        icon: "shield",
        titleEn: "Advanced Laparoscopic Equipment",
        titleTa: "அதிநவீன எண்டோஸ்கோபி சாதனங்கள்",
        descEn: "Equipped with state of the art minimal incision imaging for safe clinical results and swift discharge.",
        descTa: "குறைந்த வலி மற்றும் மிகக் குறைந்த தழும்புகளுடன் விரைந்து குணமடைய உதவும் அதிநவீன லேப்ராஸ்கோபி கேமராக்கள்."
      },
      {
        id: "facility",
        icon: "bed",
        titleEn: "40-Bedded Multi-Speciality",
        titleTa: "40 படுக்கைகளுள்ள மல்டி-ஸ்பெஷாலிட்டி",
        descEn: "Fully organized inpatient departments, including recovery wards, private rooms, and emergency facilities.",
        descTa: "உள்நோயாளிகளுக்கான சிறப்பு சிகிச்சை வார்டுகள், தீவிர சிகிச்சை பிரிவுகள் மற்றும் பிரைவேட் ஏசி அறைகள்."
      },
      {
        id: "experience",
        icon: "smile",
        titleEn: "Thousands of Successful Surgeries",
        titleTa: "ஆயிரக்கணக்கான வெற்றிகரமான சிகிச்சைகள்",
        descEn: "Over 15 years representing flawless keyhole treatments and critical emergency trauma care.",
        descTa: "15 ஆண்டுகளுக்கும் மேலாக உடுமலையில் ஆயிரக்கணக்கான நோயாளிகளை முழுமையாக குணப்படுத்திய தரம்."
      },
      {
        id: "insurance",
        icon: "check",
        titleEn: "Insurance Empanelled",
        titleTa: "காப்பீட்டு அங்கீகாரம்",
        descEn: "Eligible for major state schemes and absolute corporate cashless TPA coverage procedures.",
        descTa: "அரசு காப்பீட்டுத் திட்டம் மற்றும் தனியார் நிறுவனங்களின் காசுப்பணமில்லா TPA காப்பீடுகள் வசதி."
      },
      {
        id: "care",
        icon: "heart",
        titleEn: "Compassionate Nurse Care",
        titleTa: "அன்பான நோயாளி பராமரிப்பு",
        descEn: "24/7 patient-first support from high-compassion staffs trained in empathetic bedside medicine.",
        descTa: "இரவு பகல் பாராமல் நோயாளிக்கு முதலில் உதவும் கனிவான செவிலியர்கள் மற்றும் மருத்துவப் பணியாளர்கள்."
      }
    ]
  },
  doctors: {
    title: {
      en: "Meet Our Experts",
      ta: "எங்கள் சிறப்பு வல்லுநர்கள்"
    },
    subtitle: {
      en: "Dedicated Core Physicians Committed to Your Health",
      ta: "நோயாளியின் நலனே நோக்கம் என அர்ப்பணிப்புடன் உழைக்கும் எங்கள் மருத்துவர்கள்"
    },
    experience: {
      en: "Experience",
      ta: "அனுபவம்"
    },
    consultBtn: {
      en: "Book Free Consultation",
      ta: "இன்றே முன்பதிவு செய்ய"
    },
    ashokTitle: {
      en: "Advanced Laparoscopic Surgeon & Endoscopist",
      ta: "முன்னணி லேப்ராஸ்கோபி மற்றும் இரைப்பை குடல் அறுவைசிகிச்சை நிபுணர்"
    },
    savithaTitle: {
      en: "Obstetrician, Gynaecologist & Infertility Specialist",
      ta: "மகப்பேறியல், மகளிர் மருத்துவம் & மலட்டுத்தன்மை சிகிச்சை நிபுணர்"
    },
    consultantsTitle: {
      en: "Featured Visiting Consultants",
      ta: "அழைப்பின் பேரில் வரும் லீடிங் கன்சல்டன்ட்ஸ்"
    }
  },
  video: {
    title: {
      en: "Take an Inside Tour",
      ta: "எங்கள் மருத்துவமனையை பாருங்கள்"
    },
    descTitle: {
      en: "Ultra-Modern Surgical Environment",
      ta: "அதிநவீன அறுவைசிகிச்சை உள்கட்டமைப்பு"
    },
    descTextEn: "Sri Chakra Hospital hosts a pristine operating suite fitted with high-frequency ventilators, real-time anesthesia workspaces, and advanced keyhole cameras. Our hospital ensures highest sanitization norms to prevent surgical site infections, creating an unbeatable standard for healthcare in Udumalpet.",
    descTextTa: "ஸ்ரீ சக்ரா மருத்துவமனையில் அதிநவீன காற்றோட்ட கிருமி நீக்கப்பட்ட அறுவைசிகிச்சை தியேட்டர்கள், டிஜிட்டல் மானிட்டர்கள் மற்றும் அனஸ்தீசியா உபகரணங்கள் நிறுவப்பட்டுள்ளன. தொற்று கிருமிகள் இல்லாத பாதுகாப்பான சூழலில் ஆபரேஷன்கள் துல்லியமாக மேற்கொள்ளப்படுகின்றன.",
    tourTag: {
      en: "Watch Corporate Walkthrough",
      ta: "விளக்க வீடியோவை பார்க்கவும்"
    }
  },
  testimonials: {
    title: {
      en: "What Our Patients Say",
      ta: "எங்கள் நோயாளிகளின் கருத்துக்கள்"
    },
    subtitle: {
      en: "True Patient Journeys Reflecting Heartfelt Recovery and Advanced Medical Care",
      ta: "குணமடைந்து நலமுடன் வாழும் எங்களின் உண்மையான நோயாளிகளின் அனுபவங்கள்"
    },
    trustBadges: {
      en: "Averaging 4.9 Stars across Google Local Reviews in Tiruppur District",
      ta: "திருப்பூர் மாவட்ட கூகுள் ரிவியூக்களில் 4.9 ஸ்டார்களைப் பெற்ற சிறந்த தரம்"
    },
    items: [
      {
        id: "murugan",
        nameEn: "Murugan R.",
        nameTa: "முருகன் ஆர்.",
        locationEn: "Udumalpet",
        locationTa: "உடுமலைப்பேட்டை",
        treatmentEn: "Advanced Hernia Surgeries",
        treatmentTa: "லேப்ராஸ்கோபி குடலிறக்க சிகிச்சை",
        textEn: "I am deeply grateful for the life-saving hernia surgery Dr. M. Ashok performed. The recovery was remarkably swift, and the nursing team treated me with family-like compassion. I was back on my feet in days!",
        textTa: "டாக்டர் எம். அசோக் செய்த குடலிறக்க லேப்ராஸ்கோபி எனது வலியை முழுமையாக நீக்கியது. மிகக் குறைந்த வலியுடன் மூன்றே நாட்களில் எனது அடுத்தடுத்த பணிகளுக்கு திரும்பினேன். செவிலியர்களின் கனிவு நெஞ்சை தொட்டது."
      },
      {
        id: "priya",
        nameEn: "Priya K.",
        nameTa: "பிரியா கே.",
        locationEn: "Dharapuram",
        locationTa: "தாராபுரம்",
        treatmentEn: "Maternity & High-Risk Pregnancy",
        treatmentTa: "மகப்பேறு மற்றும் பிரசவ சிகிச்சை",
        textEn: "Dr. Savitha Ashok guided me perfectly throughout my high-risk pregnancy. Her calm assurance and precise clinical advice was incredible. We safely welcomed our healthy baby girl under her wonderful care!",
        textTa: "வலி நிறைந்த பிரசவ காலத்தை டாக்டர் சவிதா அசோக் மிக மென்மையாக கையாண்டார். அவரது உன்னதமான உழைப்பால் எங்களுக்கு அழகான பெண்குழந்தை சுகப்பிரசவத்தில் பிறந்தது. சிறந்த மகப்பேறு மருத்துவமனை!"
      },
      {
        id: "annamalai",
        nameEn: "Annamalai S.",
        nameTa: "அண்ணாமலை எஸ்.",
        locationEn: "Pollachi",
        locationTa: "பொள்ளாச்சி",
        treatmentEn: "Gastroenterology Evaluation",
        treatmentTa: "இரைப்பை குடல் எண்டோஸ்கோபி",
        textEn: "Their diagnostic endoscopy was seamless, pain-free, and detected my GERD issues early. Truly clinical grade infrastructure in the heart of Udumalpet. Highly recommended for any digestive problems.",
        textTa: "நெஞ்செரிச்சல் மற்றும் வயிறு பிரச்சனையால் அவதிப்பட்ட எனக்கு இங்கு எண்டோஸ்கோபி பரிசோதனை வலியின்றி எளிமையாக நடந்தது. இரைப்பை குடல் சிகிச்சைக்கு உடுமலையிலேயே மிகச்சிறந்த இடம் ஸ்ரீ சக்ரா தான்."
      }
    ]
  },
  recognition: {
    title: {
      en: "Recognition & Accreditations",
      ta: "அங்கீகாரங்கள் மற்றும் சான்றிதழ்கள்"
    },
    subtitle: {
      en: "Aligned with Premier Healthcare Standards of Tamil Nadu",
      ta: "தமிழகத்தின் உயர்தர சுகாதார நெறிமுறைகளுடன் சான்றளிக்கப்பட்ட நிறுவனம்"
    }
  },
  blog: {
    title: {
      en: "Health Tips & News",
      ta: "ஆரோக்கிய குறிப்புகள் & செய்திகள்"
    },
    subtitle: {
      en: "Informed Articles Compiled by Our Advanced Clinical Experts",
      ta: "எங்கள் மருத்துவ நிபுணர்களால் எழுதப்பட்ட பயனுள்ள சிறப்புக் கட்டுரைகள்"
    },
    readMore: {
      en: "Read Article",
      ta: "மேலும் வாசிக்க"
    },
    posts: [
      {
        id: "p1",
        date: "June 2026",
        titleEn: "Understanding Laparoscopy: Healing Fast with Keyhole Procedures",
        titleTa: "லேப்ராஸ்கோபி அறிய வேண்டியவை: சிறிய துளையிடும் சிகிச்சை நன்மைகள்",
        excerptEn: "Discover why minimal invasive surgeries reduce clinical stay, prevent wound infection, and offer immediate recovery outcomes.",
        excerptTa: "பாரம்பரிய ஆபரேஷனை விட லேப்ராஸ்கோபி முறையில் எப்படி நோயாளிகள் வலி குறைந்து 24 மணிநேரத்தில் வீடு திரும்புகிறார்கள் எனப் பாருங்கள்."
      },
      {
        id: "p2",
        date: "May 2026",
        titleEn: "Stomach Acidity and Ulcers: Prevention Tips From Gastroenterologists",
        titleTa: "வயிற்றுப் புண்கள் மற்றும் நெஞ்செரிச்சல்: இரைப்பை நிபுணரின் ஆலோசனைகள்",
        excerptEn: "Learn about trigger diets, how to treat Helicobacter infections, and when you should secure an upper endoscopy.",
        excerptTa: "முறையற்ற உணவு பழக்கங்கள் எப்படி அல்சரைத் தூண்டுகிறது என்றும், தகுந்த நேரத்தில் எண்டோஸ்கோபி பரிசோதனை செய்வதன் பலன்களைப் புரிந்து கொள்ளுங்கள்."
      },
      {
        id: "p3",
        date: "April 2026",
        titleEn: "High-Risk Pregnancy: Vital Healthcare Measures for Expectant Mothers",
        titleTa: "பாதுகாப்பற்ற பிரசவ காலம்: கர்ப்பிணி பெண்கள் கவனிக்க வேண்டியவை",
        excerptEn: "Essential clinical protocols, pressure monitoring schedules, and timely ultrasound evaluations to protect baby development.",
        excerptTa: "இரத்த அழுத்தம், கர்ப்பகால சர்க்கரை நோய் ஆகியவற்றைக் கண்காணித்து எவ்வாறு தாயையும் சேயையும் பத்திரமாகப் பாதுகாப்பது என்பதன் வழிகாட்டி."
      }
    ]
  },
  map: {
    title: {
      en: "Locate Sri Chakra Hospital",
      ta: "ஸ்ரீ சக்ரா மருத்துவமனை அமைவிடம்"
    },
    subtitle: {
      en: "Visit Us in the Heart of Udumalpet Near Nehru Street",
      ta: "உடுமலையின் மையப்பகுதி நேரு வீதியில் எங்களை எளிதாக அமையுங்கள்"
    },
    getDirections: {
      en: "Open in Google Maps",
      ta: "கூகுள் மேப்பில் பார்க்க"
    }
  },
  cta: {
    title: {
      en: "Ready to See a Doctor? Book Your Appointment Today",
      ta: "மருத்துவரைச் சந்திக்கத் தயாரா? இன்று உங்கள் முன்பதிவைச் செய்யுங்கள்"
    },
    subtitle: {
      en: "Confirm your fast-tracked consultation slot with Dr. Ashok or Dr. Savitha instantly.",
      ta: "டாக்டர் அசோக் அல்லது டாக்டர் சவிதா ஆகியோரின் மருத்துவ ஆலோசனையைப் பெற இப்போதே உங்கள் நேரத்தை உறுதி செய்யுங்கள்."
    },
    actionBtn: {
      en: "Secure Consultation Now",
      ta: "இன்றே முன்பதிவு செய்"
    }
  }
};

// ==========================================
// UNIFIED HOME COMPONENT (11 SENSATIONAL SECTIONS)
// ==========================================

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div id="homepage-root" className="w-full bg-white text-[#555555] font-sans antialiased overflow-x-hidden">
      
      {/* -------------------------------------
          SECTION 1: HERO CONTAINER & BRAND ACCENTS
          ------------------------------------- */}
      <section id="home" className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#FDE8F0]/40 via-white to-rose-50/20 border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Text Container */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
        
            <h1 id="hero-title" className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#1A1A2E] leading-[1.12] tracking-tight text-balance">
              {lang === 'en' ? homeTranslations.hero.title.en : <span className="font-tamil">{homeTranslations.hero.title.ta}</span>}
            </h1>
            
            <p id="hero-desc" className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {lang === 'en' ? homeTranslations.hero.subheading.en : <span className="font-tamil leading-relaxed">{homeTranslations.hero.subheading.ta}</span>}
            </p>

            <div id="hero-buttons" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a 
                href="#book-form" 
                className="inline-flex items-center justify-center bg-[#D63384] hover:bg-[#A0215C] text-white font-extrabold text-sm px-7 py-3.5 rounded-[8px] transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D63384]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>{lang === 'en' ? homeTranslations.hero.primaryCta.en : <span className="font-tamil">{homeTranslations.hero.primaryCta.ta}</span>}</span>
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center border-2 border-[#E8C4D4] hover:border-[#D63384] text-[#1A1A2E] hover:text-[#D63384] font-extrabold text-sm px-7 py-3 transition-all rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#D63384]"
              >
                <Activity className="w-4 h-4 mr-2 text-[#D63384]" />
                <span>{lang === 'en' ? homeTranslations.hero.secondaryCta.en : <span className="font-tamil">{homeTranslations.hero.secondaryCta.ta}</span>}</span>
              </a>
            </div>

            <div id="hero-trust" className="flex items-center gap-2 justify-center lg:justify-start pt-4 text-xs text-[#A0215C] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#D63384]" />
              <span>{lang === 'en' ? homeTranslations.hero.trustedBy.en : <span className="font-tamil">{homeTranslations.hero.trustedBy.ta}</span>}</span>
            </div>
          </div>

          {/* Hero Right Visual Column: Doctor Avatar Splash Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background design elements */}
            <div className="absolute w-72 h-72 bg-[#FDE8F0] rounded-full filter blur-3xl opacity-60 -z-10 animate-pulse"></div>
            
            {/* Main Visual Card */}
            <div id="hero-visual-card" className="relative bg-white border border-[#E8C4D4] rounded-2xl p-4 shadow-xl max-w-sm w-full transition-transform hover:scale-[1.02] duration-300">
              <div className="relative aspect-square w-full rounded-xl bg-gradient-to-br from-[#FDE8F0] to-[#E8C4D4]/30 overflow-hidden flex items-center justify-center">
                
                {/* Simulated Hospital Clinic illustration icon representation */}
                <BriefcaseMedical className="w-32 h-32 text-[#D63384]/20 absolute" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-[#E8C4D4] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D63384] text-white flex items-center justify-center text-xs font-bold font-mono">
                      A+
                    </div>
                    <div>
                      <p className="text-xs font-serif font-black text-[#1A1A2E]">
                        {lang === 'en' ? 'Dr. M. Ashok & Team' : 'டாக்டர் எம். அசோக் & குழு'}
                      </p>
                      <p className="text-[10px] text-slate-500 font-sans tracking-wide">
                        {lang === 'en' ? 'Laparoscopic Surgeon Since 2011' : 'லேப்ராஸ்கோபி மருத்துவ சேவை 2011 முதல்'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Star Overlay */}
                <div className="absolute top-4 right-4 bg-[#D63384] text-white text-[10px] uppercase font-mono font-extrabold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-white" />
                  <span>NABH Aligned</span>
                </div>
              </div>

              {/* Patient helpline quick call widget */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Patient Coordinator Hotlink</span>
                  <a href="tel:+919626200600" className="text-sm font-mono font-black text-[#1A1A2E] hover:text-[#D63384] transition-colors flex items-center gap-1 ready-tel">
                    <Phone className="w-3.5 h-3.5 text-[#D63384]" />
                    <span>+91 96 26 200 600</span>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Clinical Station</span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-100 inline-block align-middle mt-0.5">
                    ● Active 24/7
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------
          SECTION 2: MILESTONE STATS BAR (4 COLS)
          ------------------------------------- */}
      <section id="stats-banner" className="w-full bg-[#1A1A2E] py-10 text-white border-b-2 border-[#D63384]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Stat Item 1: Year of Inception */}
            <div id="stat-inception" className="space-y-1 py-4 md:py-0">
              <span className="text-3xl md:text-4xl font-mono font-black text-[#D63384] tracking-tight block">
                {homeTranslations.stats.estVal}
              </span>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-extrabold">
                {lang === 'en' ? homeTranslations.stats.est.en : <span className="font-tamil">{homeTranslations.stats.est.ta}</span>}
              </p>
            </div>

            {/* Stat Item 2: Successful Minimal Access Care Cases */}
            <div id="stat-care" className="space-y-1 py-4 md:py-0">
              <span className="text-3xl md:text-4xl font-mono font-black text-[#D63384] tracking-tight block">
                {homeTranslations.stats.surgeriesVal}
              </span>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-extrabold">
                {lang === 'en' ? homeTranslations.stats.surgeries.en : <span className="font-tamil">{homeTranslations.stats.surgeries.ta}</span>}
              </p>
            </div>

            {/* Stat Item 3: Total Specialty Divisions */}
            <div id="stat-divisions" className="space-y-1 py-4 md:py-0">
              <span className="text-3xl md:text-4xl font-mono font-black text-[#D63384] tracking-tight block">
                {homeTranslations.stats.specsVal}
              </span>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-extrabold">
                {lang === 'en' ? homeTranslations.stats.specs.en : <span className="font-tamil">{homeTranslations.stats.specs.ta}</span>}
              </p>
            </div>

            {/* Stat Item 4: Hospital Bed Strength */}
            <div id="stat-beds" className="space-y-1 py-4 md:py-0">
              <span className="text-3xl md:text-4xl font-mono font-black text-[#D63384] tracking-tight block">
                {homeTranslations.stats.bedsVal}
              </span>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-extrabold">
                {lang === 'en' ? homeTranslations.stats.beds.en : <span className="font-tamil">{homeTranslations.stats.beds.ta}</span>}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------
          SECTION 3: CLINICAL SPECIALITIES GRID (6 CARDS)
          ------------------------------------- */}
      <section id="services" className="py-20 bg-slate-50/50 border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-extrabold text-[#D63384] tracking-widest block font-sans">
              {lang === 'en' ? 'Core Medical Departments' : <span className="font-tamil text-xs">நமது முதன்மை சிறப்பு சிகிச்சைகள்</span>}
            </span>
            <h2 id="specs-main-title" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] tracking-tight leading-none">
              {lang === 'en' ? homeTranslations.specialities.title.en : <span className="font-tamil">{homeTranslations.specialities.title.ta}</span>}
            </h2>
            <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full my-3"></div>
            <p className="text-sm text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
              {lang === 'en' ? homeTranslations.specialities.subtitle.en : <span className="font-tamil leading-normal">{homeTranslations.specialities.subtitle.ta}</span>}
            </p>
          </div>

          {/* Grid Layout of 6 Medical Specialized Cards */}
          <div id="specs-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeTranslations.specialities.items.map((spec, idx) => {
              // Custom icon selection to provide visually satisfying and non-repetitive vector placeholders
              const iconsList = [Stethoscope, Heart, Award, Activity, ShieldCheck, Stethoscope];
              const IconComp = iconsList[idx] || Stethoscope;

              return (
                <div 
                  key={spec.id} 
                  id={`spec-card-${spec.id}`}
                  className="bg-white rounded-2xl p-6 border border-[#E8C4D4]/70 hover:border-[#D63384] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Unique pink icon container at top */}
                    <div className="w-12 h-12 rounded-xl bg-[#FDE8F0] group-hover:bg-[#D63384] transition-colors duration-300 flex items-center justify-center text-[#D63384] group-hover:text-white border border-[#E8C4D4]">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif font-extrabold text-lg text-[#1A1A2E] group-hover:text-[#D63384] transition-colors duration-300 leading-tight">
                      {lang === 'en' ? spec.titleEn : <span className="font-tamil">{spec.titleTa}</span>}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang === 'en' ? spec.descEn : <span className="font-tamil leading-relaxed">{spec.descTa}</span>}
                    </p>

                    {/* Procedures List */}
                    <div className="pt-3 flex flex-wrap gap-1.5 border-t border-slate-50">
                      {spec.procedures.map((proc, pidx) => (
                        <span 
                          key={pidx} 
                          className="bg-slate-100 text-[#1A1A2E]/80 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-slate-200/50"
                        >
                          {proc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-4 border-t border-rose-50/50 flex items-center justify-between text-xs font-semibold">
                    <a href="#services" className="text-[#A0215C] hover:underline flex items-center gap-1 group-hover:text-[#D63384] transition-colors">
                      <span>{lang === 'en' ? 'Clinical Insights' : <span className="font-tamil">விவரங்கள்</span>}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                    
                    <a 
                      href="#book-form" 
                      className="text-[#D63384] font-extrabold hover:underline flex items-center gap-1 hover:text-[#A0215C] border-b border-transparent hover:border-[#A0215C] transition-all"
                    >
                      {lang === 'en' ? 'Book Department Appointment' : <span className="font-tamil">முன்பதிவு செய்ய</span>}
                      <ArrowRight className="w-3 h-3 text-[#D63384]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Optional Footer trigger */}
          <div className="text-center mt-12">
            <a 
              href="#book-form" 
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#A0215C] hover:text-[#D63384] py-2 border-b-2 border-transparent hover:border-[#D63384] transition-all"
            >
              <span>{lang === 'en' ? homeTranslations.specialities.viewAll.en : <span className="font-tamil">{homeTranslations.specialities.viewAll.ta}</span>}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* -------------------------------------
          SECTION 4: WHY PATIENTS TRUST US (6 VALUE CARDS)
          ------------------------------------- */}
      <section id="about" className="py-20 bg-white border-b border-rose-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-extrabold text-[#D63384] tracking-widest block font-sans">
              {lang === 'en' ? 'Clinical Principles' : <span className="font-tamil text-xs">நேர்மையான மருத்துவச் சேவை</span>}
            </span>
            <h2 id="why-main-title" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] tracking-tight leading-none">
              {lang === 'en' ? homeTranslations.whyChooseUs.title.en : <span className="font-tamil">{homeTranslations.whyChooseUs.title.ta}</span>}
            </h2>
            <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full my-3"></div>
            <p className="text-sm text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
              {lang === 'en' ? homeTranslations.whyChooseUs.subtitle.en : <span className="font-tamil leading-normal">{homeTranslations.whyChooseUs.subtitle.ta}</span>}
            </p>
          </div>

          {/* Responsive value cards Grid */}
          <div id="why-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeTranslations.whyChooseUs.cards.map((card, idx) => {
              // Custom map icons for each unique benefit
              const iconsMap: Record<string, any> = {
                award: Award,
                shield: ShieldCheck,
                bed: Bed,
                smile: Smile,
                check: Check,
                heart: Heart
              };
              const VisualIcon = iconsMap[card.icon] || Award;

              return (
                <div 
                  key={card.id} 
                  id={`why-card-${card.id}`}
                  className="bg-slate-50/70 p-6 rounded-xl border border-rose-100/50 hover:bg-[#FDE8F0]/20 hover:border-[#D63384]/40 transition-colors duration-300"
                >
                  <div className="flex gap-4">
                    {/* Visual pink icon frame */}
                    <div className="w-10 h-10 rounded-lg bg-[#FDE8F0] text-[#D63384] flex items-center justify-center shrink-0 border border-[#E8C4D4]/50">
                      <VisualIcon className="w-5.5 h-5.5" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-serif font-bold text-sm md:text-base text-[#1A1A2E] tracking-wide">
                        {lang === 'en' ? card.titleEn : <span className="font-tamil">{card.titleTa}</span>}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans font-medium">
                        {lang === 'en' ? card.descEn : <span className="font-tamil leading-relaxed">{card.descTa}</span>}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* -------------------------------------
          SECTION 5: IN-HOUSE DOCTOR PROFILES
          ------------------------------------- */}
      <section id="doctors" className="py-20 bg-slate-50/50 border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header titles */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-extrabold text-[#D63384] tracking-widest block font-sans">
              {lang === 'en' ? 'Clinical Board Leaders' : <span className="font-tamil text-xs">ஸ்ரீ சக்ராவின் முதன்மை மருத்துவர்கள்</span>}
            </span>
            <h2 id="doctors-main-title" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] tracking-tight leading-none">
              {lang === 'en' ? homeTranslations.doctors.title.en : <span className="font-tamil">{homeTranslations.doctors.title.ta}</span>}
            </h2>
            <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full my-3"></div>
            <p className="text-sm text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
              {lang === 'en' ? homeTranslations.doctors.subtitle.en : <span className="font-tamil leading-normal">{homeTranslations.doctors.subtitle.ta}</span>}
            </p>
          </div>

          {/* Primary Specialists Grid */}
          <div id="doctors-profiles-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Dr. M. Ashok */}
            <div className="bg-white border border-[#E8C4D4] rounded-2xl p-6 hover:shadow-xl hover:border-[#D63384]/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                
                {/* Profile circular frame */}
                <div className="w-24 h-24 rounded-full bg-rose-50 border border-[#E8C4D4] shrink-0 flex items-center justify-center text-[#D63384]">
                  <DoctorIcon className="w-10 h-10" />
                </div>

                <div className="space-y-3 text-center sm:text-left flex-grow">
                  <div>
                    <h3 className="font-serif font-black text-xl text-[#1A1A2E]">
                      Dr. M. Ashok
                    </h3>
                    <p className="text-[#D63384] font-sans font-bold text-xs uppercase tracking-wide">
                      {lang === 'en' ? homeTranslations.doctors.ashokTitle.en : <span className="font-tamil">{homeTranslations.doctors.ashokTitle.ta}</span>}
                    </p>
                    <p className="text-[11px] font-mono font-bold bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                      M.S., F.M.A.S., F.I.A.G.E.S.
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {lang === 'en' ? (
                      <span>Advanced Minimal Access Keyhole Surgeon and Endoscopist trained thoroughly across major premium laparoscopic centers. Dedicated to modern keyhole operations.</span>
                    ) : (
                      <span className="font-tamil">முன்னணி பயிற்சிப் பிரிவுகளில் லேப்ராஸ்கோபி குடலிறக்க சிகிச்சை, பித்தப்பை குறைபாடுகள் போன்ற பல சிக்கலான சிகிச்சைகளை வெற்றிகரமாக செய்தவர்.</span>
                    )}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">
                      <strong>{lang === 'en' ? homeTranslations.doctors.experience.en : homeTranslations.doctors.experience.ta}:</strong> 15+ Yrs
                    </span>
                    <a href="#book-form" className="text-[#A0215C] font-black hover:underline flex items-center gap-0.5">
                      <span>{lang === 'en' ? homeTranslations.doctors.consultBtn.en : <span className="font-tamil">{homeTranslations.doctors.consultBtn.ta}</span>}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Dr. Savitha Ashok */}
            <div className="bg-white border border-[#E8C4D4] rounded-2xl p-6 hover:shadow-xl hover:border-[#D63384]/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                
                {/* Profile circular frame */}
                <div className="w-24 h-24 rounded-full bg-rose-50 border border-[#E8C4D4] shrink-0 flex items-center justify-center text-[#D63384]">
                  <Heart className="w-10 h-10 fill-current text-[#D63384]/10" />
                </div>

                <div className="space-y-3 text-center sm:text-left flex-grow">
                  <div>
                    <h3 className="font-serif font-black text-xl text-[#1A1A2E]">
                      Dr. Savitha Ashok
                    </h3>
                    <p className="text-[#D63384] font-sans font-bold text-xs uppercase tracking-wide">
                      {lang === 'en' ? homeTranslations.doctors.savithaTitle.en : <span className="font-tamil">{homeTranslations.doctors.savithaTitle.ta}</span>}
                    </p>
                    <p className="text-[11px] font-mono font-bold bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded inline-block mt-1">
                      D.G.O., A.R.T. (Reproductive Medicine)
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {lang === 'en' ? (
                      <span>Distinguished Obstetrician and Reputed Gynaecologist specialized in handling high-risk clinical pregnancies, vaginal deliveries, and modern infertility remedies.</span>
                    ) : (
                      <span className="font-tamil">பெண்களுக்கான சிறப்பு கர்ப்பகால உடல்நல வழிகாட்டுதல்கள், வலி இல்லாத சுகப்பிரசவ மருத்துவ முறைகள், மலட்டுத்தன்மை தீர்வு சிகிச்சையில் நிபுணத்துவம்.</span>
                    )}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">
                      <strong>{lang === 'en' ? homeTranslations.doctors.experience.en : homeTranslations.doctors.experience.ta}:</strong> 12+ Yrs
                    </span>
                    <a href="#book-form" className="text-[#A0215C] font-black hover:underline flex items-center gap-0.5">
                      <span>{lang === 'en' ? homeTranslations.doctors.consultBtn.en : <span className="font-tamil">{homeTranslations.doctors.consultBtn.ta}</span>}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Visiting Consultants Section */}
          <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
            <h4 id="visiting-title" className="text-sm uppercase tracking-wider font-extrabold text-[#1A1A2E] border-b border-rose-100 pb-2">
              {lang === 'en' ? homeTranslations.doctors.consultantsTitle.en : <span className="font-tamil">{homeTranslations.doctors.consultantsTitle.ta}</span>}
            </h4>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="bg-[#FDE8F0] border border-[#E8C4D4] py-1 px-3.5 rounded-full text-[11px] text-[#A0215C] font-bold font-mono">
                {lang === 'en' ? 'Cardiology Specialist Visiting Daily' : 'இதய நோய் சிறப்பு நிபுணர்'}
              </span>
              <span className="bg-[#FDE8F0] border border-[#E8C4D4] py-1 px-3.5 rounded-full text-[11px] text-[#A0215C] font-bold font-mono">
                {lang === 'en' ? 'Anesthesiology & Trauma Care Consultants' : 'மயக்க மருந்து மற்றும் அவசர கால நிபுணர்'}
              </span>
              <span className="bg-[#FDE8F0] border border-[#E8C4D4] py-1 px-3.5 rounded-full text-[11px] text-[#A0215C] font-bold font-mono">
                {lang === 'en' ? 'Paediatric Surgery & Critical Ward Doctors' : 'குழந்தைகள் நல அறுவை சிகிச்சை நிபுணர்'}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------
          SECTION 6: VIDEO HOSPITAL TOUR EMBED CHASSIS
          ------------------------------------- */}
      <section id="video-tour" className="py-20 bg-white border-b border-rose-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Tour Iframe Shape Box */}
            <div className="lg:col-span-6 relative">
              <div 
                id="tour-canvas-container"
                className="aspect-video w-full rounded-2xl bg-slate-900 border-2 border-[#E8C4D4] shadow-xl overflow-hidden relative group"
              >
                {/* Backdrop representation of modern keyhole operating suites */}
                <div className="absolute inset-0 bg-[#1A1A2E]/90 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-[#D63384]/20 text-[#D63384] group-hover:bg-[#D63384] group-hover:text-white transition-all flex items-center justify-center shadow-lg border border-[#D63384] group-hover:scale-110 mb-4 cursor-pointer" role="button" aria-label="Play tour video">
                    <Play className="w-6 h-6 fill-current text-current ml-1" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8C4D4] font-extrabold">Virtual Facility Walkthrough</span>
                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    {lang === 'en' ? 'See our modular surgery desks & post-operative wards' : 'அதிநவீன அறுவை சிகிச்சை பிரிவுகளின் வீடியோ காட்சி'}
                  </p>
                </div>
              </div>
            </div>

            {/* Explanatory Context Content Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#D63384] text-xs font-bold font-sans">
                <Video className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? homeTranslations.video.tourTag.en : <span className="font-tamil">{homeTranslations.video.tourTag.ta}</span>}</span>
              </div>
              
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1A1A2E] tracking-tight">
                {lang === 'en' ? homeTranslations.video.descTitle.en : <span className="font-tamil">{homeTranslations.video.descTitle.ta}</span>}
              </h3>
              
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
                {lang === 'en' ? homeTranslations.video.descTextEn : <span className="font-tamil leading-relaxed">{homeTranslations.video.descTextTa}</span>}
              </p>

              <div className="pt-3 flex flex-col sm:flex-row gap-4 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D63384]" />
                  <span className="font-bold text-slate-700">{lang === 'en' ? 'Zero Infection Tolerance policy' : 'கிருமி நீக்கப்பட்ட தியேட்டர்'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D63384]" />
                  <span className="font-bold text-slate-700">{lang === 'en' ? 'Modular 4K endoscopy system' : '4K லேப்ராஸ்கோபி கேமரா'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------
          SECTION 7: PATIENT TESTIMONIALS (3 BRD TEXTS)
          ------------------------------------- */}
      <section id="testimonials" className="py-20 bg-slate-50/50 border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section banner titles */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-extrabold text-[#D63384] tracking-widest block font-sans">
              {lang === 'en' ? 'Community Trust Stories' : <span className="font-tamil text-xs">உடுமலை மக்கள் கூறும் நற்சான்றுகள்</span>}
            </span>
            <h2 id="testi-main-title" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] tracking-tight leading-none">
              {lang === 'en' ? homeTranslations.testimonials.title.en : <span className="font-tamil">{homeTranslations.testimonials.title.ta}</span>}
            </h2>
            <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full my-3"></div>
            <p className="text-sm text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
              {lang === 'en' ? homeTranslations.testimonials.subtitle.en : <span className="font-tamil leading-normal">{homeTranslations.testimonials.subtitle.ta}</span>}
            </p>
          </div>

          {/* 3 Grid items styling matching light blush */}
          <div id="testi-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeTranslations.testimonials.items.map((testi) => (
              <div 
                key={testi.id} 
                id={`testimonial-${testi.id}`}
                className="bg-[#FDE8F0]/30 rounded-2xl p-6 border border-[#E8C4D4]/60 hover:border-[#D63384]/40 transition-all duration-300 relative flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  
                  {/* Pink Star Rating bar */}
                  <div className="flex gap-0.5 text-rose-500" role="img" aria-label="5 out of 5 stars">
                    <Star className="w-4 h-4 fill-current text-[#D63384]" />
                    <Star className="w-4 h-4 fill-current text-[#D63384]" />
                    <Star className="w-4 h-4 fill-current text-[#D63384]" />
                    <Star className="w-4 h-4 fill-current text-[#D63384]" />
                    <Star className="w-4 h-4 fill-current text-[#D63384]" />
                  </div>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic font-medium">
                    "{lang === 'en' ? testi.textEn : <span className="font-tamil leading-relaxed">{testi.textTa}</span>}"
                  </p>
                </div>

                {/* Patient coordinate metadata */}
                <div className="mt-6 pt-4 border-t border-[#E8C4D4]/40 flex items-center justify-between">
                  <div>
                    <span className="font-serif font-extrabold text-sm text-[#1A1A2E] block">
                      {lang === 'en' ? testi.nameEn : <span className="font-tamil">{testi.nameTa}</span>}
                    </span>
                    <span className="text-[10px] text-slate-400 font-sans block mt-0.5">
                      {lang === 'en' ? testi.locationEn : <span className="font-tamil">{testi.locationTa}</span>}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold block">Department</span>
                    <span className="text-[10px] text-[#A0215C] font-mono font-bold">
                      {lang === 'en' ? testi.treatmentEn : <span className="font-tamil">{testi.treatmentTa}</span>}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] font-semibold text-slate-400 mt-10">
            {lang === 'en' ? homeTranslations.testimonials.trustBadges.en : <span className="font-tamil">{homeTranslations.testimonials.trustBadges.ta}</span>}
          </p>

        </div>
      </section>

      {/* -------------------------------------
          SECTION 8: GREYSCALE ACCREDITATIONS BANNER
          ------------------------------------- */}
      <section id="accreditations" className="py-12 bg-white border-b border-rose-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#A0215C] font-black block">
              {lang === 'en' ? homeTranslations.recognition.title.en : <span className="font-tamil">{homeTranslations.recognition.title.ta}</span>}
            </span>
          </div>

          {/* Greyscale shifting layout map */}
          <div id="logos-scroller" className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60">
            <div className="flex flex-col items-center justify-center font-serif text-slate-400 font-extrabold text-xs tracking-wider grayscale hover:grayscale-0 hover:text-[#D63384] transition-all cursor-pointer">
              <Award className="w-8 h-8 text-slate-400 mb-1" />
              <span>TN GOVT APPROVED</span>
            </div>
            <div className="flex flex-col items-center justify-center font-serif text-slate-400 font-extrabold text-xs tracking-wider grayscale hover:grayscale-0 hover:text-[#D63384] transition-all cursor-pointer">
              <ShieldCheck className="w-8 h-8 text-slate-400 mb-1" />
              <span>NABH LEVEL 1 COMPLIANT</span>
            </div>
            <div className="flex flex-col items-center justify-center font-serif text-slate-400 font-extrabold text-xs tracking-wider grayscale hover:grayscale-0 hover:text-[#D63384] transition-all cursor-pointer">
              <Users className="w-8 h-8 text-slate-400 mb-1" />
              <span>IMA TIRUPPUR ASSOC</span>
            </div>
            <div className="flex flex-col items-center justify-center font-serif text-slate-400 font-extrabold text-xs tracking-wider grayscale hover:grayscale-0 hover:text-[#D63384] transition-all cursor-pointer">
              <ShieldCheck className="w-8 h-8 text-slate-400 mb-1" />
              <span>ISO 9001 REGISTERED</span>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------
          SECTION 9: CLINICAL BLOG SNIPPETS (3 CARDS)
          ------------------------------------- */}
      <section id="health-blog" className="py-20 bg-slate-50/50 border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Titles */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-extrabold text-[#D63384] tracking-widest block font-sans">
              {lang === 'en' ? 'Clinical Insights & Advice' : <span className="font-tamil text-xs">ஆரோக்கியமான விழிப்புணர்வு கட்டுரைகள்</span>}
            </span>
            <h2 id="blog-main-title" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] tracking-tight leading-none">
              {lang === 'en' ? homeTranslations.blog.title.en : <span className="font-tamil">{homeTranslations.blog.title.ta}</span>}
            </h2>
            <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full my-3"></div>
            <p className="text-sm text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
              {lang === 'en' ? homeTranslations.blog.subtitle.en : <span className="font-tamil leading-normal">{homeTranslations.blog.subtitle.ta}</span>}
            </p>
          </div>

          {/* 3 cards block */}
          <div id="blog-posts-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeTranslations.blog.posts.map((post) => (
              <div 
                key={post.id} 
                id={`blog-card-${post.id}`}
                className="bg-white rounded-2xl border border-[#E8C4D4]/60 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#A0215C] uppercase tracking-wide">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By Sri Chakra Clinical Panel</span>
                  </div>

                  <h3 className="font-serif font-extrabold text-base text-[#1A1A2E] hover:text-[#D63384] transition-colors duration-300 leading-snug">
                    {lang === 'en' ? post.titleEn : <span className="font-tamil">{post.titleTa}</span>}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {lang === 'en' ? post.excerptEn : <span className="font-tamil leading-relaxed">{post.excerptTa}</span>}
                  </p>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Sri Chakra Wellness</span>
                  <a 
                    href="#book-form" 
                    className="text-[#D63384] font-extrabold hover:underline flex items-center gap-1"
                  >
                    <span>{lang === 'en' ? homeTranslations.blog.readMore.en : <span className="font-tamil">{homeTranslations.blog.readMore.ta}</span>}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------
          SECTION 10: GEOLOCATION ACCURATE GOOGLE MAP FRAME
          ------------------------------------- */}
      <section id="location-map" className="py-20 bg-white border-b border-rose-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Main Titles */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 id="map-main-title" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] tracking-tight leading-none">
              {lang === 'en' ? homeTranslations.map.title.en : <span className="font-tamil">{homeTranslations.map.title.ta}</span>}
            </h2>
            <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full my-3"></div>
            <p className="text-sm text-slate-500 leading-relaxed font-sans max-w-2xl mx-auto">
              {lang === 'en' ? homeTranslations.map.subtitle.en : <span className="font-tamil leading-normal">{homeTranslations.map.subtitle.ta}</span>}
            </p>
          </div>

          {/* Iframe shape display container */}
          <div id="map-iframe-container" className="max-w-4xl mx-auto bg-slate-50 border-2 border-[#E8C4D4] rounded-2xl overflow-hidden shadow-lg p-3">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-200 relative">
              
              {/* Actual embedded Google Maps frame set exactly to Udumalpet Nehru Street coordinate region */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.847113115456!2d77.24355527585097!3d10.591033288604751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1m2!1s0x3ba9cb8787034bd1%3A0xc3fec3fdbcfafc61!2sSri%20Chakra%20Hospital!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Chakra Hospital Google Maps Location Frame"
                className="absolute inset-0 w-full h-full"
              ></iframe>

            </div>

            {/* Address & directions coordinates banner below */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-xl border border-slate-100 mt-3 text-xs">
              <div>
                <p className="font-serif font-black text-sm text-[#1A1A2E] flex items-center gap-2">
                  <MapPin className="w-4.5 h-4.5 text-[#D63384]" />
                  <span>Sri Chakra Hospital Multi-Speciality Clinic</span>
                </p>
                <p className="text-slate-400 font-medium mt-1">
                  4/147 Nehru Street, Udumalpet-642 126, Tiruppur District, Tamil Nadu.
                </p>
              </div>

              <a 
                href="https://maps.app.goo.gl/gQPrRbyZcWbPhwB3A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1A1A2E] hover:bg-[#D63384] text-white font-extrabold px-5 py-2.5 rounded-[8px] transition-all tracking-wider shrink-0"
              >
                <Compass className="w-4 h-4 mr-2 text-[#D63384]" />
                <span>{lang === 'en' ? homeTranslations.map.getDirections.en : <span className="font-tamil">{homeTranslations.map.getDirections.ta}</span>}</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------
          SECTION 11: FULL-WIDTH ACTION BOOKING CTA BANNER
          ------------------------------------- */}
      <section id="cta-enrollment" className="w-full bg-gradient-to-br from-[#D63384] to-[#A0215C] py-16 text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          
          <h2 id="cta-headline" className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
            {lang === 'en' ? homeTranslations.cta.title.en : <span className="font-tamil">{homeTranslations.cta.title.ta}</span>}
          </h2>
          
          <p id="cta-subtitle" className="text-slate-100 max-w-2xl mx-auto text-xs sm:text-sm font-medium leading-relaxed">
            {lang === 'en' ? homeTranslations.cta.subtitle.en : <span className="font-tamil leading-relaxed">{homeTranslations.cta.subtitle.ta}</span>}
          </p>

          <div id="cta-action-holder" className="pt-4 flex justify-center">
            <a 
              href="#book-form" 
              className="inline-flex items-center justify-center bg-white hover:bg-[#FDE8F0] text-[#A0215C] font-black text-sm px-8 py-4 rounded-[8px] transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 duration-350"
            >
              <Calendar className="w-4 h-4 mr-2.5 text-[#D63384]" />
              <span>{lang === 'en' ? homeTranslations.cta.actionBtn.en : <span className="font-tamil">{homeTranslations.cta.actionBtn.ta}</span>}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
