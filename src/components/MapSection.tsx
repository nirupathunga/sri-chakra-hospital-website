import React from 'react';
import { MapPin, Phone, Mail, Clock, Compass, ExternalLink } from 'lucide-react';

interface MapSectionProps {
  lang: 'en' | 'ta';
}

export default function MapSection({ lang }: MapSectionProps) {
  return (
    <section id="contact" className="py-16 bg-white border-b border-rose-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Contact Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold text-[#D63384] tracking-widest block font-sans">
                {lang === 'en' ? 'Locate & Connect' : <span className="font-tamil">தொடர்பு கொள்ள</span>}
              </span>
              <h2 className="text-[#1A1A2E]">
                {lang === 'en' ? 'Visit Sri Chakra Hospital' : <span className="font-tamil">எங்கள் இருப்பிடம்</span>}
              </h2>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
                {lang === 'en' ? (
                  <span>Conveniently located at the medical heart of Udumalpet, easily accessible for private cars, ambulances, and peripheral transport options.</span>
                ) : (
                  <span className="font-tamil font-medium text-[13px]">உடுமலைப்பேட்டை நகரின் முக்கிய மையப்பகுதியில் அமைந்துள்ளது. அவசர மற்றும் அவசரமில்லா வாகன போக்குவரத்து வசதிகள் கொண்டது.</span>
                )}
              </p>
            </div>

            {/* Address, Phone, Email & Working hours */}
            <div className="space-y-4 pt-4 border-t border-rose-100 flex-grow">
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FDE8F0] text-[#D63384] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    {lang === 'en' ? 'Clinical Address' : <span className="font-tamil">முகவரி</span>}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5 leading-relaxed">
                    4/147, Nehru Street,<br />
                    Udumalpet - 642126,<br />
                    Tiruppur District, Tamil Nadu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FDE8F0] text-[#D63384] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    {lang === 'en' ? 'Call Support desk' : <span className="font-tamil">தொலைபேசி எண்</span>}
                  </h4>
                  <a href="tel:+919626200600" className="text-xs text-[#D63384] font-bold font-mono hover:underline mt-0.5 block">
                    +91 96262 00600
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FDE8F0] text-[#D63384] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    {lang === 'en' ? 'Consulting Hours' : <span className="font-tamil">ஆலோசனை நேரம்</span>}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">
                    {lang === 'en' ? (
                      <span>Mon - Sat: 9:30 AM to 5:00 PM <br />Emergency / ICU trauma: 24 Hours Open</span>
                    ) : (
                      <span className="font-tamil">திங்கள் - சனி: காலை 9:30 முதல் மாலை 5:00 வரை <br />அவசர சிகிச்சை: 24 மணி நேரமும் செயல்படும்</span>
                    )}
                  </p>
                </div>
              </div>

            </div>

            {/* Redirection button */}
            <div className="pt-4">
              <a 
                href="https://maps.google.com/?q=Sri+Chakra+Hospital+Nehru+Street+Udumalpet" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center text-xs justify-center w-full sm:w-auto"
                aria-label="Get driving directions to Sri Chakra Hospital"
              >
                <Compass className="w-4 h-4 mr-1.5" />
                {lang === 'en' ? <span>Get Driving Directions</span> : <span className="font-tamil">இருப்பிட வழிகாட்டி</span>}
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Right Map Canvas Frame */}
          <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px] rounded-3xl overflow-hidden border border-rose-100 shadow-md">
            {/* Visual clean Google Map simulated iframe or real fallback */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.671374528122!2d77.23561331201584!3d10.589886475855428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cd0da3447b97%3A0xcb13ebbd4f29633c!2sSri%20Chakra%20Hospital!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Chakra Hospital Google Maps Location Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
