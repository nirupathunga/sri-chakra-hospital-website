import React, { useState } from 'react';
import { Calendar, Check, AlertCircle, PhoneCall, Clock } from 'lucide-react';

interface BookingFormProps {
  lang: 'en' | 'ta';
}

export default function BookingForm({ lang }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    speciality: 'general',
    date: '',
    time: 'morning',
    notes: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      setErrorMessage(lang === 'en' ? 'Please fill in all mandatory fields.' : 'தயவுசெய்து கட்டாய புலங்களை பூர்த்தி செய்க.');
      return;
    }
    setErrorMessage('');
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setFormData({
        name: '',
        phone: '',
        speciality: 'general',
        date: '',
        time: 'morning',
        notes: ''
      });
    }, 5000);
  };

  return (
    <div id="book-form" className="w-full font-sans">
      
      {/* SECTION 11: CTA BANNER SECTION - High contrast pink full width banner block */}
      <section className="bg-gradient-to-r from-[#A0215C] via-[#D63384] to-[#1A1A2E] py-14 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-4">
          <h2 className="text-white font-serif font-bold text-2xl md:text-3xl leading-tight">
            {lang === 'en' ? 'Ready to See a Doctor? Book Your Appointment Today' : <span className="font-tamil">மருத்துவரைச் சந்திக்கத் தயாரா? இன்றே உங்கள் நேரத்தை முன்பதிவு செய்யுங்கள்</span>}
          </h2>
          <p className="text-xs md:text-sm text-pink-100 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' ? (
              <span>Take control of your health today. Fill our digital consulting request form below or dial our emergency hotline directly for faster triage details.</span>
            ) : (
              <span className="font-tamil">தங்கள் உடல்நலனில் அதிக அக்கறை செலுத்துங்கள். கீழே உள்ள படிவத்தைப் பூர்த்தி செய்யவும் அல்லது எங்களது அவசர உதவி எண்ணை உடனே தொடர்பு கொள்ளவும்.</span>
            )}
          </p>
          <div className="pt-2">
            <a 
              href="#booking-fields-form" 
              className="bg-white hover:bg-rose-50 text-[#A0215C] font-bold px-6 py-3 rounded-xl text-xs inline-flex items-center shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              {lang === 'en' ? 'Book Appointment Now' : <span className="font-tamil">உடனே பதிவு செய்க</span>}
            </a>
          </div>
        </div>
      </section>

      {/* CORE INTERACTIVE BOOKING FIELD WRAPPER */}
      <section id="booking-fields-form" className="py-16 bg-white shrink-0">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="bg-white border-2 border-[#E8C4D4] rounded-3xl overflow-hidden shadow-xl">
            
            {/* Header Mini Banner */}
            <div className="bg-[#1A1A2E] p-6 text-white text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-[#A0215C]">
              <div>
                <h3 className="text-white font-bold font-serif text-lg mb-1">
                  {lang === 'en' ? 'Digital Appointment Registrar' : <span className="font-tamil">டிஜிட்டல் முன்பதிவுப் படிவம்</span>}
                </h3>
                <p className="text-xs text-slate-300">
                  {lang === 'en' ? 'No advance billing or platform service charges' : <span className="font-tamil">முன்பதிவுக் கட்டணம் எதுவும் தேவையில்லை</span>}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold bg-[#A0215C]/40 border border-[#D63384] text-white px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 text-[#D63384]" />
                <span>9:30 AM - 5:00 PM</span>
              </div>
            </div>

            {/* Form Fields body */}
            <div className="p-6 md:p-8">
              {bookingSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-slate-800">
                    {lang === 'en' ? 'Appointment Logged Successfully!' : <span className="font-tamil">முன்பதிவு வெற்றிகரமாக முடிந்தது!</span>}
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-sans">
                    {lang === 'en' ? (
                      <span>Your diagnostic schedule is locked. Our lead desk officer will call you over phone within 15 minutes to verify instructions. Thank you!</span>
                    ) : (
                      <span className="font-tamil">தங்கள் நேரம் பதியப்பட்டது. ஸ்ரீ சக்ரா அவசர உதவி பிரிவு 15 நிமிடத்திற்குள் உங்களை அழைத்து நேரத்தை உறுதி செய்வார்கள். நன்றி!</span>
                    )}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl max-w-xs mx-auto border border-slate-100 text-[11px] font-mono text-left space-y-1">
                    <p><span className="font-bold">Patient Key:</span> SCH-2026-EN</p>
                    <p><span className="font-bold">Contact Hotline:</span> +91 96 26 200 600</p>
                    <p><span className="font-bold">Verify Channel:</span> Active</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-600 p-3 rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Patient Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A1A2E] flex justify-between">
                        <span>
                          {lang === 'en' ? 'Patient Full Name' : <span className="font-tamil">நோயாளியின் முழுப் பெயர்</span>}
                          <span className="text-[#D63384] ml-0.5">*</span>
                        </span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder={lang === 'en' ? 'e.g. Ram Kumar' : 'எ.கா. நித்யா குமார்'}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8C4D4] focus:outline-none focus:border-[#D63384] text-xs font-medium placeholder-slate-400 transition-all font-sans"
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A1A2E] flex justify-between">
                        <span>
                          {lang === 'en' ? 'Mobile Number' : <span className="font-tamil">கைபேசி எண்</span>}
                          <span className="text-[#D63384] ml-0.5">*</span>
                        </span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. 96262 00600"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8C4D4] focus:outline-none focus:border-[#D63384] text-xs font-medium placeholder-slate-400 transition-all font-mono"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Speciality choosing */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A1A2E]">
                        {lang === 'en' ? 'Select Speciality' : <span className="font-tamil">சிகிச்சைத் துறை</span>}
                      </label>
                      <select 
                        name="speciality"
                        value={formData.speciality}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E8C4D4] focus:outline-none focus:border-[#D63384] text-xs font-semibold bg-white transition-all text-[#1A1A2E] font-sans"
                      >
                        <option value="general">General Outpatient (OPD)</option>
                        <option value="laparoscopic">Laparoscopic Surgery</option>
                        <option value="gastro">Gastroenterology (GI)</option>
                        <option value="gynaecology">Obstetrics & Gynaecology</option>
                        <option value="orthopaedics">Orthopaedics & Joint</option>
                        <option value="oncology">Oncology Diagnostic</option>
                        <option value="urology">Urology Clinics</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A1A2E] flex justify-between">
                        <span>
                          {lang === 'en' ? 'Preferred Date' : <span className="font-tamil">விரும்பும் தேதி</span>}
                          <span className="text-[#D63384] ml-0.5">*</span>
                        </span>
                      </label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8C4D4] focus:outline-none focus:border-[#D63384] text-xs font-semibold bg-white transition-all text-[#1A1A2E] font-mono"
                        required
                      />
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#1A1A2E]">
                        {lang === 'en' ? 'Preferred Time' : <span className="font-tamil">விரும்பும் நேரம்</span>}
                      </label>
                      <select 
                        name="time"
                        value={formData.time}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E8C4D4] focus:outline-none focus:border-[#D63384] text-xs font-semibold bg-white transition-all text-[#1A1A2E] font-sans"
                      >
                        <option value="morning">Morning (9:30 AM - 1:00 PM)</option>
                        <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consulting Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#1A1A2E]">
                      {lang === 'en' ? 'Symptom Excerpt or Notes (Optional)' : <span className="font-tamil">நோய்க்கான அறிகுறி அல்லது குறிப்புகள் (விரும்பினால்)</span>}
                    </label>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleFormChange}
                      rows={3}
                      placeholder={lang === 'en' ? 'e.g. Gastric concern, joint discomfort or routine consultation' : 'எ.கா. ஜீரணக் கோளாறு, மூட்டு வலி அல்லது பொதுவான பரிசோதனை'}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8C4D4] focus:outline-none focus:border-[#D63384] text-xs font-medium placeholder-slate-400 transition-all font-sans"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full btn-primary py-3 flex items-center justify-center font-bold font-sans cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {lang === 'en' ? 'Submit Secure Booking Registration' : <span className="font-tamil">முன்பதிவுக் கோரிக்கையைச் சமர்ப்பிக்க</span>}
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-slate-400 font-sans leading-relaxed">
                    🔐 {lang === 'en' ? 'Your personal medical records are highly protected according to HIPAA clinical privacy mandates.' : <span className="font-tamil">தங்களின் தனிநபர் தகவல்கள் மற்றும் மருத்துவ ஆவணங்கள் மருத்துவ ஒழுங்குமுறை சட்டங்களின்படி முழுமையாகப் பாதுகாக்கப்படுகின்றன.</span>}
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
