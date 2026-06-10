import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  PhoneCall, 
  Mail, 
  ShieldCheck, 
  HelpCircle, 
  HeartHandshake, 
  ArrowRight,
  Info
} from 'lucide-react';
import { useLanguage } from './LanguageLayout';

// ==========================================
// 1. DATA TRANSLATION DICTIONARY
// ==========================================

const insuranceTranslations = {
  headerTitle: {
    en: "Insurance & Cashless TPA Partners",
    ta: "காப்பீடு & ரொக்கமில்லா டிபிஏ பங்காளிகள்"
  },
  headerSubtitle: {
    en: "Sri Chakra Hospital is fully empaneled with major public, private, and Third-Party Administrators (TPAs) to support immediate cashless hospitalization, simplified claim approvals, and clinical care.",
    ta: "ஸ்ரீ சக்ரா மருத்துவமனை, உடனடி ரொக்கமில்லா சிகிச்சை, எளிய இன்சூரன்ஸ் அனுமதிகள் மற்றும் சிறந்த தரமான சிகிச்சைகளை வழங்க முன்னணி பொது மற்றும் தனியார் காப்பீட்டு நிறுவனங்களுடன் இணைந்து செயல்படுகிறது."
  },
  subHeaderBadge: {
    en: "Cashless Hospitalization Support",
    ta: "காப்பீட்டு சிகிச்சை வசதி"
  },
  searchPlaceholder: {
    en: "Search insurance provider or TPA...",
    ta: "காப்பீட்டு நிறுவனம் அல்லது டிபிஏ-ஐத் தேடுக..."
  },
  noResults: {
    en: "No matching insurance providers found. Please verify the name or contact our support desk.",
    ta: "பொருத்தமான காப்பீட்டு நிறுவனம் எதுவும் கண்டறியப்படவில்லை. எங்களது உதவி மையத்தைத் தொடர்பு கொள்ளவும்."
  },
  gridCountText: {
    en: "Displaying {count} verified insurance alliances at Sri Chakra",
    ta: "ஸ்ரீ சக்ரா மருத்துவமனையின் {count} அங்கீகரிக்கப்பட்ட காப்பீட்டு இணைப்புகள்"
  },
  supportCardTitle: {
    en: "Claims Assistance & Help Desk",
    ta: "காப்பீட்டு உதவி மற்றும் உரிமைகோரல் மையம்"
  },
  supportCardSubtitle: {
    en: "Have questions about your eligibility, policy coverage, or pre-authorization approval timelines? Connect with our dedicated in-house billing desk coordinator.",
    ta: "உங்கள் காப்பீட்டுத் தகுதி, பாலிசி வரம்புகள் அல்லது அவசர சிகிச்சைக்கான முன் ஒப்புதல் நேரங்கள் பற்றி சந்தேகங்கள் உள்ளதா? எங்களது நேரடி உதவி மேடையை உடனே அணுகவும்."
  },
  phoneLabel: {
    en: "Direct TPA Billing Line",
    ta: "காப்பீட்டு பிரிவு தொலைபேசி"
  },
  emailLabel: {
    en: "Official Documentation Email",
    ta: "அலுவலக மின்னஞ்சல் முகவரி"
  },
  admissionsNoticeTitle: {
    en: "Important Cashless Admission Guidelines",
    ta: "ரொக்கமில்லா அனுமதிமுறைகள் - முக்கிய குறிப்பு"
  },
  admissionsNotice1: {
    en: "For planned surgeries, submit pre-authorization coordinates at least 48 hours prior to admission.",
    ta: "திட்டமிடப்பட்ட அறுவைசிகிச்சைகளுக்கு, அனுமதிக்கப்படுவதற்கு குறைந்தது 48 மணிநேரத்திற்கு முன்பே பாலிசி விவரங்களைச் சமர்ப்பிக்கவும்."
  },
  admissionsNotice2: {
    en: "For emergency admissions, cashless processing is subject to TPA approval within 24 hours.",
    ta: "அவசரகால அனுமதிகளுக்கு, காப்பீட்டுத் துறையின் ஒப்புதல் அனுமதியானது 24 மணிநேரத்திற்குள் டிபிஏ ஒப்புதலுக்கு உட்பட்டது."
  }
};

// ==========================================
// 2. MASTER DATA ARRAY: 16 CORE PROVIDERS
// ==========================================

export interface PartnerItem {
  id: string;
  nameEn: string;
  nameTa: string;
  type: 'insurance' | 'tpa';
  licNo: string;
}

const partnersList: PartnerItem[] = [
  {
    id: "star-health",
    nameEn: "Star Health & Allied Insurance",
    nameTa: "ஸ்டார் ஹெல்த் இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 129"
  },
  {
    id: "medi-assist",
    nameEn: "Medi Assist TPA",
    nameTa: "மீடியே அசிஸ்ட் டிபிஏ",
    type: "tpa",
    licNo: "TPA License No. 003"
  },
  {
    id: "hdfc-ergo",
    nameEn: "HDFC ERGO General Insurance",
    nameTa: "எச்டிஎப்சி எர்கோ இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 146"
  },
  {
    id: "icici-lombard",
    nameEn: "ICICI Lombard General Insurance",
    nameTa: "ஐசிஐசிஐ லொம்பார்ட் இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 115"
  },
  {
    id: "niva-bupa",
    nameEn: "Niva Bupa Health Insurance (Max Bupa)",
    nameTa: "நீவா பூபா ஹெல்த் இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 145"
  },
  {
    id: "united-india",
    nameEn: "United India Insurance Company",
    nameTa: "யுனைடெட் இந்தியா இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 545"
  },
  {
    id: "md-india",
    nameEn: "MDIndia Health Insurance TPA",
    nameTa: "எம்டி இந்தியா டிபிஏ பிரைவேட் லிமிடெட்",
    type: "tpa",
    licNo: "TPA License No. 005"
  },
  {
    id: "care-health",
    nameEn: "Care Health Insurance (Religare)",
    nameTa: "கேர் ஹெல்த் இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 148"
  },
  {
    id: "aditya-birla",
    nameEn: "Aditya Birla Health Insurance",
    nameTa: "ஆதித்யா பிர்லா இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 153"
  },
  {
    id: "bajaj-allianz",
    nameEn: "Bajaj Allianz General Insurance",
    nameTa: "பஜாஜ் அலையன்ஸ் இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 113"
  },
  {
    id: "chola-ms",
    nameEn: "Cholamandalam MS General Insurance",
    nameTa: "சோழமண்டலம் எம்எஸ் இன்சூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 124"
  },
  {
    id: "national-insurance",
    nameEn: "National Insurance Company",
    nameTa: "நேஷனல் இன்சூரன்ஸ் கம்பெனி",
    type: "insurance",
    licNo: "IRDAI Reg No. 105"
  },
  {
    id: "oriental-insurance",
    nameEn: "The Oriental Insurance Company",
    nameTa: "தி ஓரியண்டல் இன்சூரன்ஸ் கம்பெனி",
    type: "insurance",
    licNo: "IRDAI Reg No. 556"
  },
  {
    id: "paramount-tpa",
    nameEn: "Paramount Health Services & TPA",
    nameTa: "பாரமவுண்ட் ஹெல்த் டிபிஏ",
    type: "tpa",
    licNo: "TPA License No. 006"
  },
  {
    id: "vidal-tpa",
    nameEn: "Vidal Health Insurance TPA",
    nameTa: "வைடல் ஹெல்த் இன்சூரன்ஸ் டிபிஏ",
    type: "tpa",
    licNo: "TPA License No. 016"
  },
  {
    id: "new-india",
    nameEn: "The New India Assurance Company",
    nameTa: "தி நியூ இந்தியா அஷ்யூரன்ஸ்",
    type: "insurance",
    licNo: "IRDAI Reg No. 190"
  }
];

// ==========================================
// 3. INSURANCE MAIN PAGE RENDER COMPONENT
// ==========================================

export default function Insurance() {
  const { lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering Logic
  const filteredPartners = partnersList.filter(partner => {
    const searchString = `${partner.nameEn} ${partner.nameTa}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  return (
    <section id="insurance-tpa-section" className="w-full bg-[#FAFAFC] py-20 font-sans border-b border-rose-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER SECTION LAYOUT */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-extrabold text-[#D63384] tracking-widest bg-[#FDE8F0] px-3.5 py-1.5 rounded-full border border-[#E8C4D4] inline-block font-sans">
            {lang === 'en' ? insuranceTranslations.subHeaderBadge.en : <span className="font-tamil">{insuranceTranslations.subHeaderBadge.ta}</span>}
          </span>
          
          <h2 id="insurance-title" className="font-serif font-black text-3xl sm:text-4xl text-[#1A1A2E] leading-tight tracking-tight">
            {lang === 'en' ? insuranceTranslations.headerTitle.en : <span className="font-tamil">{insuranceTranslations.headerTitle.ta}</span>}
          </h2>
          
          <div className="w-16 h-1 bg-[#D63384] mx-auto rounded-full"></div>
          
          <p id="insurance-desc" className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans max-w-3xl mx-auto font-medium">
            {lang === 'en' ? insuranceTranslations.headerSubtitle.en : <span className="font-tamil leading-relaxed">{insuranceTranslations.headerSubtitle.ta}</span>}
          </p>
        </div>

        {/* REAL-TIME DEBOUNCED SEARCH COMPONENT BAR */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              id="insurance-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={lang === 'en' ? insuranceTranslations.searchPlaceholder.en : insuranceTranslations.searchPlaceholder.ta}
              className="w-full bg-white border-2 border-[#E8C4D4] focus:border-[#D63384] rounded-xl py-3 pl-11 pr-4 text-xs text-[#1A1A2E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D63384]/20 transition-all font-sans font-semibold shadow-sm"
            />
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Counts Indicator */}
          <p className="text-[10px] text-right text-slate-400 font-mono mt-2 font-bold uppercase tracking-wider">
            {lang === 'en' 
              ? insuranceTranslations.gridCountText.en.replace('{count}', filteredPartners.length.toString())
              : <span className="font-tamil">{insuranceTranslations.gridCountText.ta.replace('{count}', filteredPartners.length.toString())}</span>
            }
          </p>
        </div>

        {/* RESPONSIVE ALPHABETICAL GRID LAYOUT */}
        {filteredPartners.length > 0 ? (
          <div id="insurance-partners-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {filteredPartners.map((partner) => {
              const isTpa = partner.type === 'tpa';

              return (
                <div
                  key={partner.id}
                  id={`insurer-card-${partner.id}`}
                  className="bg-white rounded-2xl border border-[#E8C4D4]/70 p-5 flex flex-col justify-between text-center min-h-[140px] hover:scale-105 hover:shadow-md hover:border-[#D63384] transition-all duration-300 relative group"
                >
                  {/* Outer corporate logo box visual framework */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <span className={`text-[8px] font-mono font-black scale-90 px-1.5 py-0.5 rounded ${
                      isTpa ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-[#FDE8F0] text-[#D63384] border border-[#E8C4D4]'
                    }`}>
                      {isTpa ? 'TPA' : 'INSURER'}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center flex-grow pt-4 pb-2">
                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-rose-50 flex items-center justify-center mb-3 group-hover:bg-[#FDE8F0] transition-colors">
                      <Building2 className="w-5 h-5 text-[#A0215C]" />
                    </div>

                    <h3 className="text-xs font-sans font-extrabold text-[#1A1A2E] leading-snug group-hover:text-[#D63384] transition-colors">
                      {lang === 'en' ? partner.nameEn : <span className="font-tamil">{partner.nameTa}</span>}
                    </h3>
                  </div>

                  <div className="border-t border-slate-100 pt-2 text-[9px] font-mono text-slate-400 font-medium">
                    {partner.licNo}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search Fallback State */
          <div id="insurance-empty-state" className="bg-white rounded-2xl border border-[#E8C4D4] p-12 text-center max-w-lg mx-auto mb-16">
            <Info className="w-10 h-10 text-slate-400 mx-auto mb-4" />
            <p className="text-xs font-sans font-semibold text-slate-600 leading-relaxed">
              {lang === 'en' ? insuranceTranslations.noResults.en : <span className="font-tamil">{insuranceTranslations.noResults.ta}</span>}
            </p>
          </div>
        )}

        {/* CLINICAL INSURANCE ADMISSION NOTICES BANNER */}
        <div className="bg-white border-2 border-[#E8C4D4] rounded-2xl p-6 mb-12 shadow-sm">
          <h3 className="font-serif font-black text-xs sm:text-sm text-[#1A1A2E] uppercase tracking-wider flex items-center gap-2 mb-4 border-b border-rose-50 pb-2">
            <ShieldCheck className="w-4.5 h-4.5 text-[#D63384]" />
            <span>{lang === 'en' ? insuranceTranslations.admissionsNoticeTitle.en : <span className="font-tamil">{insuranceTranslations.admissionsNoticeTitle.ta}</span>}</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans font-medium text-slate-500">
            <li className="flex gap-2 items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-[#D63384] mt-1.5 shrink-0"></span>
              <span>{lang === 'en' ? insuranceTranslations.admissionsNotice1.en : <span className="font-tamil">{insuranceTranslations.admissionsNotice1.ta}</span>}</span>
            </li>
            <li className="flex gap-2 items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-[#D63384] mt-1.5 shrink-0"></span>
              <span>{lang === 'en' ? insuranceTranslations.admissionsNotice2.en : <span className="font-tamil">{insuranceTranslations.admissionsNotice2.ta}</span>}</span>
            </li>
          </ul>
        </div>

        {/* ==========================================
            BOTTOM SECTION : INSURANCE TPA DESK CALLOUT
            ========================================== */}
        <div className="bg-gradient-to-r from-[#1A1A2E] to-[#252542] text-white p-8 sm:p-10 rounded-2xl border-b-4 border-[#D63384] shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <h3 className="font-serif font-extrabold text-lg text-white flex items-center justify-center lg:justify-start gap-2">
              <HeartHandshake className="w-5 h-5 text-[#D63384]" />
              <span>{lang === 'en' ? insuranceTranslations.supportCardTitle.en : <span className="font-tamil">{insuranceTranslations.supportCardTitle.ta}</span>}</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {lang === 'en' ? insuranceTranslations.supportCardSubtitle.en : <span className="font-tamil leading-relaxed">{insuranceTranslations.supportCardSubtitle.ta}</span>}
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 bg-slate-900/40 p-5 rounded-2xl border border-slate-800 space-y-4 max-w-md mx-auto">
            
            {/* Phone help link */}
            <div className="flex items-center gap-3 bg-[#131322] px-4 py-2.5 rounded-xl border border-slate-800">
              <PhoneCall className="w-4 h-4 text-[#D63384]" />
              <div className="text-left">
                <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">
                  {lang === 'en' ? insuranceTranslations.phoneLabel.en : <span className="font-tamil">{insuranceTranslations.phoneLabel.ta}</span>}
                </span>
                <a href="tel:+919626200600" className="text-xs font-mono font-black text-rose-100 hover:text-[#D63384] transition-colors">
                  +91 96 26 200 600
                </a>
              </div>
            </div>

            {/* Email help link */}
            <div className="flex items-center gap-3 bg-[#131322] px-4 py-2.5 rounded-xl border border-slate-800">
              <Mail className="w-4 h-4 text-[#D63384]" />
              <div className="text-left">
                <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">
                  {lang === 'en' ? insuranceTranslations.emailLabel.en : <span className="font-tamil">{insuranceTranslations.emailLabel.ta}</span>}
                </span>
                <a href="mailto:contact@srichakrahospital.com" className="text-xs font-sans font-bold text-rose-100 hover:text-[#D63384] transition-colors block break-all">
                  contact@srichakrahospital.com
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
