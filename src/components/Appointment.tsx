import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  ChevronDown, 
  User, 
  Activity, 
  AlertCircle, 
  CheckCircle, 
  Sparkles,
  PhoneCall,
  Check
} from 'lucide-react';
import { useLanguage } from './LanguageLayout';

// ==========================================
// BILINGUAL TRANSLATION DICTIONARY FOR FORM
// ==========================================

const appointTranslations = {
  headerTitle: {
    en: "Book an Appointment",
    ta: "முன்பதிவு செய்ய"
  },
  headerSubtitle: {
    en: "Get in touch directly with our clinical desk or file a digital callback request.",
    ta: "நேரடி ஆலோசனையைப் பெற எங்கள் மருத்துவ மேடையைத் தொடர்பு கொள்ளவும் அல்லது டிஜிட்டல் படிவத்தை அனுப்பவும்."
  },
  contactTitle: {
    en: "Hospital Direct Desk",
    ta: "நேரடி தொடர்பு மேடை"
  },
  contactDesc: {
    en: "Connect with our front office desk coordinate directly to book instant consultation slots or clarify diagnostic timings.",
    ta: "உடனடி சிகிச்சை ஆலோசனைகளைப் பெறவும் அல்லது ஆய்வக நேரங்களை அறியவும் எங்களது வரவேற்பு மேடையைத் நேரடியாகத் தொடர்பு கொள்ளலாம்."
  },
  phoneLabel: {
    en: "Direct Phone Call",
    ta: "நேரடி தொலைபேசி எண்"
  },
  emailLabel: {
    en: "Official Support Email",
    ta: "அலுவலக மின்னஞ்சல்"
  },
  addressLabel: {
    en: "Clinical Premises Address",
    ta: "மருத்துவமனை அமைவிடம்"
  },
  openingHoursTitle: {
    en: "Operating Schedule & Timings",
    ta: "வேலை நேர அட்டவணை"
  },
  weekdaysLabel: {
    en: "Weekdays (Monday - Saturday)",
    ta: "வாரநாட்கள் (திங்கள் - சனிக்கிழமை)"
  },
  weekdaysVal: {
    en: "8:00 AM to 8:00 PM",
    ta: "காலை 8:00 - இரவு 8:00 மணி"
  },
  weekendsLabel: {
    en: "Weekends (Sundays & Holidays)",
    ta: "வார இறுதிநாட்கள் (ஞாயிறு & விடுமுறை)"
  },
  weekendsVal: {
    en: "9:00 AM to 1:00 PM",
    ta: "காலை 9:00 - மதியம் 1:00 மணி"
  },
  alertTitle: {
    en: "Guaranteed Response",
    ta: "உறுதியளிக்கப்பட்ட பதில்"
  },
  alertDesc: {
    en: "Our team will call you back within 2 hours to confirm your appointment slot.",
    ta: "உங்கள் முன்பதிவை உறுதிப்படுத்த எங்கள் குழு 2 மணிநேரத்திற்குள் உங்களை அழைக்கும்."
  },
  formTitle: {
    en: "Request Patient Callback",
    ta: "முன்பதிவு திரும்ப அழைப்பு படிவம்"
  },
  formSubtitle: {
    en: "Fill out the required information, and our clinical coordinator will call you back.",
    ta: "தேவையான தகவல்களைப் பூர்த்தி செய்யவும், எங்கள் மருத்துவ ஒருங்கிணைப்பாளர் உங்களைத் திரும்ப அழைப்பார்."
  },
  nameLabel: {
    en: "Patient Full Name",
    ta: "நோயாளியின் முழுப் பெயர்"
  },
  namePlaceholder: {
    en: "Enter patient's full name",
    ta: "அனைத்து முதலெழுத்துக்களுடன் பெயர்"
  },
  phoneLabelForm: {
    en: "Mobile Number",
    ta: "கைபேசி எண்"
  },
  phonePlaceholder: {
    en: "10-digit mobile number",
    ta: "10-இலக்க கைபேசி எண்"
  },
  emailLabelForm: {
    en: "Email Address (Optional)",
    ta: "மின்னஞ்சல் முகவரி (விருப்பப்பட்டால்)"
  },
  emailPlaceholder: {
    en: "e.g., patient@gmail.com",
    ta: "உதாரணம்: patient@gmail.com"
  },
  deptLabel: {
    en: "Department / Clinical Speciality",
    ta: "சிகிச்சைத் துறை / மருத்துவ பிரிவு"
  },
  deptSelectPlaceholder: {
    en: "Select a clinical speciality",
    ta: "சிகிச்சைத் துறையைத் தேர்ந்தெடுக்கவும்"
  },
  dateLabel: {
    en: "Preferred Consultation Date",
    ta: "விரும்பும் சிகிச்சைத் தேதி"
  },
  timeLabel: {
    en: "Preferred Time Slot",
    ta: "விரும்பும் நேரப்பகுதி"
  },
  timeSlots: [
    { value: "morning", labelEn: "Morning Slot (8:00 AM - 12:00 PM)", labelTa: "காலை பகுதி (காலை 8:00 - மதியம் 12:00 மணி)" },
    { value: "afternoon", labelEn: "Afternoon Slot (12:00 PM - 4:00 PM)", labelTa: "மதிய பகுதி (மதியம் 12:00 - மாலை 4:00 மணி)" },
    { value: "evening", labelEn: "Evening Slot (4:00 PM - 8:00 PM)", labelTa: "மாலை பகுதி (மாலை 4:00 - இரவு 8:00 மணி)" }
  ],
  messageLabel: {
    en: "Message / Key Symptoms (Optional)",
    ta: "உடல்நல பாதிப்புகள் / அறிகுறிகள் (விருப்பப்பட்டால்)"
  },
  messagePlaceholder: {
    en: "Briefly mention symptoms or diagnostic requirements...",
    ta: "சிகிச்சைத் தேவைகள் அல்லது அறிகுறிகளைப் பற்றி சுருக்கமாக எழுதவும்..."
  },
  submitBtn: {
    en: "Request Callback Now",
    ta: "முன்பதிவு கோரவும்"
  },
  submittingText: {
    en: "Processing Form...",
    ta: "படிவம் சரிபார்க்கப்படுகிறது..."
  },
  successTitle: {
    en: "Callback Session Registered!",
    ta: "திரும்ப அழைப்பு வெற்றிகரமாகப் பதியப்பட்டது!"
  },
  successDesc: {
    en: "Thank you, {name}. Your appointment callback request has been fully locked with Sri Chakra Hospital clinical registrar.",
    ta: "நன்றி {name}. தங்களது முன்பதிவு திரும்ப அழைப்பு வேண்டுகோள் ஸ்ரீ சக்ரா மருத்துவக் கோப்புகளில் பத்திரமாகப் பதியப்பட்டுள்ளது."
  },
  successDetail: {
    en: "A representative will dial you at {phone} within 2 hours to coordinate the final clinical scheduling details. Please keep your phone reachable.",
    ta: "அடுத்த 2 மணிநேரத்திற்குள் எங்கள் குழு {phone} என்ற எண்ணில் உங்களைத் தொடர்பு கொண்டு நேரத்தை உறுதிசெய்வர். தயவுசெய்து கைபேசியை இயக்கத்தில் வைக்கவும்."
  },
  successNewBtn: {
    en: "Register Another Patient",
    ta: "மற்றொரு முன்பதிவு செய்ய"
  },
  errors: {
    nameMandatory: {
      en: "Patient Name is strictly required.",
      ta: "நோயாளியின் பெயர் கட்டாயமாகும்."
    },
    phoneMandatory: {
      en: "Mobile number is strictly required.",
      ta: "கைபேசி எண் மிகவும் முக்கியம்."
    },
    phoneFormat: {
      en: "Please enter a valid 10-digit mobile number sequence (e.g. 9876543210).",
      ta: "தயவுசெய்து சரியான 10-இலக்க கைபேசி எண்ணை உள்ளிடவும்."
    },
    dateMandatory: {
      en: "Preferred consultation date is required.",
      ta: "சிகிச்சைப் பெறும் தேதி தேர்ந்தெடுக்கப்பட வேண்டும்."
    },
    dateFuture: {
      en: "Please select a date in the future or today.",
      ta: "சிகிச்சைத் தேதி இன்றோ அல்லது எதிர்கால தேதியாகவோ இருக்க வேண்டும்."
    },
    deptMandatory: {
      en: "Please select a designated clinical speciality department.",
      ta: "ஏதேனும் ஒரு மருத்துவப் பிரிவைத் தேர்ந்தெடுக்கவும்."
    },
    emailInvalid: {
      en: "Please enter a valid email format.",
      ta: "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்."
    },
    globalCheck: {
      en: "Please correct the highlighted form validation errors below before submitting.",
      ta: "படிவத்தை சமர்ப்பிக்கும் முன் கீழே முன்னிலைப்படுத்தப்பட்ட பிழைகளைச் சரிசெய்யவும்."
    }
  },
  departments: [
    { value: "laparoscopy", labelEn: "Laparoscopic Surgery", labelTa: "லேப்ராஸ்கோபி அறுவைசிகிச்சை" },
    { value: "gastroenterology", labelEn: "Gastroenterology", labelTa: "இரைப்பை குடல் அலர்ஜி / எண்டோஸ்கோபி" },
    { value: "gynecology", labelEn: "Obstetrics & Gynaecology", labelTa: "மகப்பேறியல் மற்றும் பெண்கள் நலன்" },
    { value: "infertility", labelEn: "Infertility Specialist", labelTa: "மலட்டுத்தன்மை சிகிச்சை" },
    { value: "urology", labelEn: "Urology", labelTa: "சிறுநீரக மருத்துவத் துறை" },
    { value: "oncology", labelEn: "Oncology Diagnostics", labelTa: "புற்றுநோய் கண்டறிதல் மற்றும் பயாப்ஸி" },
    { value: "ortho-arthro", labelEn: "Orthopaedics & Arthroscopy", labelTa: "எலும்பியல் மற்றும் மூட்டு மாற்று" },
    { value: "spine", labelEn: "Spine Surgery", labelTa: "முதுகுத் தண்டுவடம் சார்ந்த சிகிச்சை" },
    { value: "plastic-cosmetic", labelEn: "Plastic Surgery & Cosmetology", labelTa: "பிளாஸ்டிக் அறுவைசிகிச்சை & அழகுக்கலை" },
    { value: "pediatric", labelEn: "Paediatric Surgery", labelTa: "குழந்தைகள் நல அறுவைசிகிச்சை" },
    { value: "accident", labelEn: "Accident & Emergency Care", labelTa: "விபத்து மற்றும் அவசர சிகிச்சை" }
  ]
};

// ==========================================
// APPOINTMENT BOOKING COMPONENT EXPORT
// ==========================================

export default function Appointment() {
  const { lang } = useLanguage();

  // Controlled Form Inputs State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [message, setMessage] = useState('');

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [submittedPhone, setSubmittedPhone] = useState('');

  // Field Validation Errors State
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    department?: string;
    date?: string;
    global?: string;
  }>({});

  // Reset all states
  const handleResetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setDepartment('');
    setDate('');
    setTimeSlot('morning');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
  };

  // Form Validation Engine Routine
  const validateForm = () => {
    const tempErrors: typeof errors = {};
    let isValid = true;

    // Validate Name
    if (!name.trim()) {
      tempErrors.name = lang === 'en' ? appointTranslations.errors.nameMandatory.en : appointTranslations.errors.nameMandatory.ta;
      isValid = false;
    }

    // Validate Phone (10 digit sequence)
    const normalizedPhone = phone.replace(/[\s-()]/g, '');
    if (!normalizedPhone) {
      tempErrors.phone = lang === 'en' ? appointTranslations.errors.phoneMandatory.en : appointTranslations.errors.phoneMandatory.ta;
      isValid = false;
    } else if (!/^\d{10}$/.test(normalizedPhone)) {
      tempErrors.phone = lang === 'en' ? appointTranslations.errors.phoneFormat.en : appointTranslations.errors.phoneFormat.ta;
      isValid = false;
    }

    // Validate Email optional format check
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      tempErrors.email = lang === 'en' ? appointTranslations.errors.emailInvalid.en : appointTranslations.errors.emailInvalid.ta;
      isValid = false;
    }

    // Validate Department select
    if (!department) {
      tempErrors.department = lang === 'en' ? appointTranslations.errors.deptMandatory.en : appointTranslations.errors.deptMandatory.ta;
      isValid = false;
    }

    // Validate Preferred Date
    if (!date) {
      tempErrors.date = lang === 'en' ? appointTranslations.errors.dateMandatory.en : appointTranslations.errors.dateMandatory.ta;
      isValid = false;
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        tempErrors.date = lang === 'en' ? appointTranslations.errors.dateFuture.en : appointTranslations.errors.dateFuture.ta;
        isValid = false;
      }
    }

    if (!isValid) {
      tempErrors.global = lang === 'en' ? appointTranslations.errors.globalCheck.en : appointTranslations.errors.globalCheck.ta;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Submit action interceptor
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate database write / clinical log lock
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedName(name);
        setSubmittedPhone(phone);
        setIsSuccess(true);
      }, 1000);
    }
  };

  return (
    <section id="appointment-booking-portal" className="w-full bg-[#FAFAFC] pt-32 pb-20 font-sans px-4 sm:px-6 relative">
      <div id="book-form" className="absolute -top-24 left-0"></div>
      
      {/* SECTION HEADER BLOCK */}
      <div className="max-w-7xl mx-auto mb-12 text-center lg:text-left">
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] tracking-tight mb-2">
          {lang === 'en' ? appointTranslations.headerTitle.en : <span className="font-tamil">{appointTranslations.headerTitle.ta}</span>}
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          {lang === 'en' ? appointTranslations.headerSubtitle.en : <span className="font-tamil leading-relaxed">{appointTranslations.headerSubtitle.ta}</span>}
        </p>
        <div className="w-16 h-1.5 bg-[#D63384] rounded-full mt-3 mx-auto lg:mx-0"></div>
      </div>

      {/* SPLIT SCREEN CONTAINER BACKGROUND GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-12 mt-24 items-start">
        
        {/* ==========================================
            LEFT COLUMN: CLINIC DIRECT DESK DETAILS
            ========================================== */}
        <div className="space-y-6">
          
          {/* Main Info Card */}
          <div className="bg-white border border-[#E8C4D4] rounded-2xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDE8F0] text-[#D63384] flex items-center justify-center border border-[#E8C4D4]">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h2 className="font-serif font-extrabold text-lg text-[#1A1A2E]">
                {lang === 'en' ? appointTranslations.contactTitle.en : <span className="font-tamil">{appointTranslations.contactTitle.ta}</span>}
              </h2>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              {lang === 'en' ? appointTranslations.contactDesc.en : <span className="font-tamil leading-relaxed">{appointTranslations.contactDesc.ta}</span>}
            </p>

            <ul className="space-y-4" role="list">
              {/* Telephone hotlink */}
              <li className="flex items-start gap-3.5 border-b border-rose-50 pb-3">
                <div className="w-8 h-8 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    {lang === 'en' ? appointTranslations.phoneLabel.en : <span className="font-tamil">{appointTranslations.phoneLabel.ta}</span>}
                  </span>
                  <a href="tel:+919626200600" className="text-sm font-mono font-black text-[#1A1A2E] hover:text-[#D63384] transition-colors">
                    +91 96 26 200 600
                  </a>
                </div>
              </li>

              {/* Email support */}
              <li className="flex items-start gap-3.5 border-b border-rose-50 pb-3">
                <div className="w-8 h-8 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    {lang === 'en' ? appointTranslations.emailLabel.en : <span className="font-tamil">{appointTranslations.emailLabel.ta}</span>}
                  </span>
                  <a href="mailto:contact@srichakrahospital.com" className="text-sm font-sans font-bold text-[#1A1A2E] hover:text-[#D63384] transition-colors block break-all">
                    contact@srichakrahospital.com
                  </a>
                </div>
              </li>

              {/* Physical address coordination */}
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    {lang === 'en' ? appointTranslations.addressLabel.en : <span className="font-tamil">{appointTranslations.addressLabel.ta}</span>}
                  </span>
                  <address className="not-italic text-xs text-slate-500 leading-relaxed font-sans font-medium">
                    <strong>4/147 Nehru Street</strong>,<br />
                    Udumalpet - 642 126,<br />
                    Tamil Nadu, India.
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Clinical Timings schedule */}
          <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 border-b-4 border-[#D63384] shadow-sm space-y-4">
            <h3 className="font-serif font-bold text-sm tracking-wide text-white flex items-center gap-2 pb-2 border-b border-slate-800">
              <Clock className="w-4 h-4 text-[#D63384]" />
              <span>{lang === 'en' ? appointTranslations.openingHoursTitle.en : <span className="font-tamil">{appointTranslations.openingHoursTitle.ta}</span>}</span>
            </h3>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex justify-between items-center bg-slate-900/35 p-2 rounded-lg border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400">
                  {lang === 'en' ? appointTranslations.weekdaysLabel.en : <span className="font-tamil">{appointTranslations.weekdaysLabel.ta}</span>}
                </span>
                <span className="font-mono font-black text-[#E8C4D4] tracking-wide text-right">
                  {lang === 'en' ? appointTranslations.weekdaysVal.en : <span className="font-tamil">{appointTranslations.weekdaysVal.ta}</span>}
                </span>
              </div>

              <div className="flex justify-between items-center bg-slate-900/35 p-2 rounded-lg border border-slate-800">
                <span className="text-[11px] font-bold text-slate-400">
                  {lang === 'en' ? appointTranslations.weekendsLabel.en : <span className="font-tamil">{appointTranslations.weekendsLabel.ta}</span>}
                </span>
                <span className="font-mono font-black text-[#E8C4D4] tracking-wide text-right">
                  {lang === 'en' ? appointTranslations.weekendsVal.en : <span className="font-tamil">{appointTranslations.weekendsVal.ta}</span>}
                </span>
              </div>
            </div>
          </div>

          {/* Guaranteed Light Blush feedback alert block */}
          <div className="bg-[#FDE8F0] border-2 border-[#E8C4D4] p-5 rounded-2xl flex items-start gap-3.5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#D63384] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4.5 h-4.5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-serif font-black text-[#A0215C] uppercase tracking-wider">
                {lang === 'en' ? appointTranslations.alertTitle.en : <span className="font-tamil">{appointTranslations.alertTitle.ta}</span>}
              </h4>
              <p className="text-xs text-[#1A1A2E] leading-relaxed font-sans font-medium">
                {lang === 'en' ? appointTranslations.alertDesc.en : <span className="font-tamil">{appointTranslations.alertDesc.ta}</span>}
              </p>
            </div>
          </div>

        </div>

        {/* ==========================================
            RIGHT COLUMN: CALLBACK REQUEST FORM CARD
            ========================================== */}
        <div>
          
          <div className="bg-white border-2 border-[#E8C4D4] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            
            {/* Header Banner on Card top */}
            <div className="bg-[#1A1A2E] p-6 text-white border-b border-[#A0215C]">
              <h3 className="font-serif font-black text-lg text-white mb-1">
                {lang === 'en' ? appointTranslations.formTitle.en : <span className="font-tamil">{appointTranslations.formTitle.ta}</span>}
              </h3>
              <p className="text-slate-400 text-xs">
                {lang === 'en' ? appointTranslations.formSubtitle.en : <span className="font-tamil leading-relaxed">{appointTranslations.formSubtitle.ta}</span>}
              </p>
            </div>

            {/* Inner body displaying either Success State OR validated Fields */}
            <div className="p-6 sm:p-8">
              
              {isSuccess ? (
                /* Success View State */
                <div id="booking-success-view" className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md border border-emerald-200">
                    <Check className="w-8 h-8" />
                  </div>

                  <h3 id="success-header-msg" className="font-serif font-black text-2xl text-slate-800">
                    {lang === 'en' ? appointTranslations.successTitle.en : <span className="font-tamil">{appointTranslations.successTitle.ta}</span>}
                  </h3>

                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5 space-y-3 text-left max-w-md mx-auto text-xs leading-relaxed text-slate-700 font-sans font-medium">
                    <p id="success-person-thanks">
                      {lang === 'en' 
                        ? appointTranslations.successDesc.en.replace('{name}', `"${submittedName}"`)
                        : <span className="font-tamil">{appointTranslations.successDesc.ta.replace('{name}', `"${submittedName}"`)}</span>
                      }
                    </p>
                    <p id="success-contact-dial">
                      {lang === 'en'
                        ? appointTranslations.successDetail.en.replace('{phone}', `+91 ${submittedPhone}`)
                        : <span className="font-tamil">{appointTranslations.successDetail.ta.replace('{phone}', `+91 ${submittedPhone}`)}</span>
                      }
                    </p>
                  </div>

                  {/* Shorthand patient file receipt print badge placeholder */}
                  <div className="bg-slate-50 p-4 rounded-xl max-w-xs mx-auto border border-slate-100 text-[10px] font-mono text-left space-y-1">
                    <p><span className="font-black text-[#A0215C]">Hospital Reference:</span> SCH-REC-2026</p>
                    <p><span className="font-black text-slate-600">Verification Ward:</span> Admissions Desk</p>
                    <p><span className="font-bold text-emerald-700">Status Code:</span> LOCKED & ACTIVE</p>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={handleResetForm}
                      className="inline-flex items-center justify-center bg-[#D63384] hover:bg-[#A0215C] active:scale-95 text-white font-bold text-xs px-6 py-3 rounded-[8px] transition-all shadow focus:outline-none"
                    >
                      {lang === 'en' ? appointTranslations.successNewBtn.en : <span className="font-tamil">{appointTranslations.successNewBtn.ta}</span>}
                    </button>
                  </div>
                </div>
              ) : (
                /* Native HTML interactively validated form fields */
                <form id="appointment-native-form" onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Global Verification Alert Banner */}
                  {errors.global && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3.5 rounded-xl text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4.5 h-4.5 text-[#D63384] shrink-0" />
                      <span className="font-semibold">{errors.global}</span>
                    </div>
                  )}

                  {/* Field 1: Patient Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-name-field" className="text-xs font-bold text-[#1A1A2E] flex justify-between">
                      <span>
                        {lang === 'en' ? appointTranslations.nameLabel.en : <span className="font-tamil">{appointTranslations.nameLabel.ta}</span>}
                        <span className="text-[#D63384] ml-0.5">*</span>
                      </span>
                    </label>
                    <div className="relative">
                      <input 
                        id="patient-name-field"
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'en' ? appointTranslations.namePlaceholder.en : appointTranslations.namePlaceholder.ta}
                        className={`w-full bg-slate-50 border ${errors.name ? 'border-rose-400 ring-rose-100 ring-1' : 'border-[#E8C4D4] focus:border-[#D63384]'} rounded-xl py-2.5 pl-10 pr-4 text-xs text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#D63384]/20 transition-all font-sans font-medium`}
                      />
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    </div>
                    {errors.name && <p className="text-[10px] font-bold text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Two columns: Mobile & Optional Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Field 2: Mobile Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="patient-phone-field" className="text-xs font-bold text-[#1A1A2E] flex justify-between">
                        <span>
                          {lang === 'en' ? appointTranslations.phoneLabelForm.en : <span className="font-tamil">{appointTranslations.phoneLabelForm.ta}</span>}
                          <span className="text-[#D63384] ml-0.5">*</span>
                        </span>
                      </label>
                      <div className="relative">
                        <input 
                          id="patient-phone-field"
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={lang === 'en' ? appointTranslations.phonePlaceholder.en : appointTranslations.phonePlaceholder.ta}
                          className={`w-full bg-slate-50 border ${errors.phone ? 'border-rose-400 ring-rose-100 ring-1' : 'border-[#E8C4D4] focus:border-[#D63384]'} rounded-xl py-2.5 pl-10 pr-4 text-xs text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#D63384]/20 transition-all font-mono font-medium`}
                        />
                        <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      </div>
                      {errors.phone && <p className="text-[10px] font-bold text-rose-600 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Field 3: Email (Optional) */}
                    <div className="space-y-1.5">
                      <label htmlFor="patient-email-field" className="text-xs font-bold text-[#1A1A2E]">
                        {lang === 'en' ? appointTranslations.emailLabelForm.en : <span className="font-tamil">{appointTranslations.emailLabelForm.ta}</span>}
                      </label>
                      <div className="relative">
                        <input 
                          id="patient-email-field"
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={lang === 'en' ? appointTranslations.emailPlaceholder.en : appointTranslations.emailPlaceholder.ta}
                          className={`w-full bg-slate-50 border ${errors.email ? 'border-rose-400 ring-rose-100 ring-1' : 'border-[#E8C4D4] focus:border-[#D63384]'} rounded-xl py-2.5 pl-10 pr-4 text-xs text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#D63384]/20 transition-all font-sans font-medium`}
                        />
                        <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                      </div>
                      {errors.email && <p className="text-[10px] font-bold text-rose-600 mt-1">{errors.email}</p>}
                    </div>

                  </div>

                  {/* Field 4: Clinical Speciality dropdown (Must include all 11 disciplines from the BRD) */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-dept-field" className="text-xs font-bold text-[#1A1A2E] flex justify-between">
                      <span>
                        {lang === 'en' ? appointTranslations.deptLabel.en : <span className="font-tamil">{appointTranslations.deptLabel.ta}</span>}
                        <span className="text-[#D63384] ml-0.5">*</span>
                      </span>
                    </label>
                    <div className="relative">
                      <select 
                        id="patient-dept-field"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className={`w-full bg-slate-50 border ${errors.department ? 'border-rose-400 ring-rose-100 ring-1' : 'border-[#E8C4D4] focus:border-[#D63384]'} rounded-xl py-2.5 pl-10 pr-10 text-xs text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#D63384]/20 transition-all font-sans font-medium appearance-none`}
                      >
                        <option value="">{lang === 'en' ? appointTranslations.deptSelectPlaceholder.en : appointTranslations.deptSelectPlaceholder.ta}</option>
                        {appointTranslations.departments.map((dept) => (
                          <option key={dept.value} value={dept.value}>
                            {lang === 'en' ? dept.labelEn : dept.labelTa}
                          </option>
                        ))}
                      </select>
                      <Activity className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                      <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                    {errors.department && <p className="text-[10px] font-bold text-rose-600 mt-1">{errors.department}</p>}
                  </div>

                  {/* Two columns: Preferred Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Field 5: Date Selector */}
                    <div className="space-y-1.5">
                      <label htmlFor="patient-date-field" className="text-xs font-bold text-[#1A1A2E]">
                        {lang === 'en' ? appointTranslations.dateLabel.en : <span className="font-tamil">{appointTranslations.dateLabel.ta}</span>}
                        <span className="text-[#D63384] ml-0.5">*</span>
                      </label>
                      <div className="relative">
                        <input 
                          id="patient-date-field"
                          type="date" 
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className={`w-full bg-slate-50 border ${errors.date ? 'border-rose-400 ring-rose-100 ring-1' : 'border-[#E8C4D4] focus:border-[#D63384]'} rounded-xl py-2.5 px-4 text-xs text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#D63384]/20 transition-all font-sans font-medium`}
                        />
                      </div>
                      {errors.date && <p className="text-[10px] font-bold text-rose-600 mt-1">{errors.date}</p>}
                    </div>

                    {/* Field 6: Preferred Time Slot */}
                    <div className="space-y-1.5">
                      <label htmlFor="patient-time-field" className="text-xs font-bold text-[#1A1A2E]">
                        {lang === 'en' ? appointTranslations.timeLabel.en : <span className="font-tamil">{appointTranslations.timeLabel.ta}</span>}
                      </label>
                      <div className="relative">
                        <select 
                          id="patient-time-field"
                          value={timeSlot}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          className="w-full bg-slate-50 border border-[#E8C4D4] focus:border-[#D63384] rounded-xl py-2.5 pl-10 pr-10 text-xs text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#D63384]/20 transition-all font-sans font-medium appearance-none"
                        >
                          {appointTranslations.timeSlots.map((slot) => (
                            <option key={slot.value} value={slot.value}>
                              {lang === 'en' ? slot.labelEn : slot.labelTa}
                            </option>
                          ))}
                        </select>
                        <Clock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                        <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                  </div>

                  {/* Field 7: Symptoms message block (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-message-field" className="text-xs font-bold text-[#1A1A2E]">
                      {lang === 'en' ? appointTranslations.messageLabel.en : <span className="font-tamil">{appointTranslations.messageLabel.ta}</span>}
                    </label>
                    <textarea 
                      id="patient-message-field"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={lang === 'en' ? appointTranslations.messagePlaceholder.en : appointTranslations.messagePlaceholder.ta}
                      className="w-full bg-slate-50 border border-[#E8C4D4] focus:border-[#D63384] rounded-xl py-2.5 px-4 text-xs text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#D63384]/20 transition-all font-sans font-medium resize-none"
                    />
                  </div>

                  {/* Action Call submit button with exact 8px (rounded-[8px]) border-radius and BRD color shifts */}
                  <div className="pt-2">
                    <button 
                      id="callback-submit-btn"
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center bg-[#D63384] hover:bg-[#A0215C] disabled:bg-slate-300 font-extrabold text-xs text-white uppercase py-3.5 rounded-[8px] transition-all duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#D63384] tracking-wider active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span>{lang === 'en' ? appointTranslations.submittingText.en : appointTranslations.submittingText.ta}</span>
                      ) : (
                        <span>{lang === 'en' ? appointTranslations.submitBtn.en : <span className="font-tamil">{appointTranslations.submitBtn.ta}</span>}</span>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
