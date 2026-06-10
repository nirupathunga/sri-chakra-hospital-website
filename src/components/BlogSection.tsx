import React from 'react';
import { ChevronRight, Calendar, BookOpen, Activity } from 'lucide-react';

interface BlogSectionProps {
  lang: 'en' | 'ta';
}

export default function BlogSection({ lang }: BlogSectionProps) {
  const posts = [
    {
      id: 'post-1',
      titleEn: 'Understanding laparoscopy keyhole surgery and faster recoveries',
      titleTa: 'லேப்ராஸ்கோபி நுண்துளை அறுவைசிகிச்சை மற்றும் அதன் விரைவான தீர்வுகள்',
      date: 'May 24, 2026',
      excerptEn: 'Learn how advanced laparoscopic technology allows patients to undergo major surgeries with micro incisions, negligible pain, and fast home discharges.',
      excerptTa: 'மிகக் குறைந்த தழும்பு மற்றும் தங்கு தடையற்ற மீட்புடன் லேப்ராஸ்கோபி தொழில்நுட்பம் எவ்வாறு நோயாளிகளை மீட்கிறது என்பதற்கான மருத்துவ விளக்கம்.',
      categoryEn: 'Surgery Tips',
      categoryTa: 'அறுவைசிகிச்சை',
    },
    {
      id: 'post-2',
      titleEn: 'The ultimate prenatal wellness and gestational screening guidelines',
      titleTa: 'பெண்களின் மகப்பேறு நலம் மற்றும் பிரசவ கால உணவு பரிந்துரைகள்',
      date: 'June 01, 2026',
      excerptEn: 'An essential checklist of recommended vitamins, vaccinations, and diagnostic screenings during each milestone trimester for mother and child.',
      excerptTa: 'ஒவ்வொரு மூன்று மாத கால மகப்பேறு நிலைகளிலும் தாய் மற்றும் குழந்தை இருவருக்குமான எளிய சத்துக்கள் மற்றும் பரிசோதனை அட்டவணைத் தொகுப்பு.',
      categoryEn: 'Maternity',
      categoryTa: 'பெண்கள் நலம்',
    },
    {
      id: 'post-3',
      titleEn: 'Stomach ulcer vs gallstones: How to recognize key pain symptoms',
      titleTa: 'வயிற்றுப்புண் மற்றும் பித்தப்பை கற்கள்: வலிகளுக்கான வேறுபாடுகள்',
      date: 'June 08, 2026',
      excerptEn: 'Do not confuse flatulence with silent gallstones or gastric acidity! Our lead gastroenterologist Dr. Ashok breaks down differential diagnostics.',
      excerptTa: 'அஜீரணம் என்று புறக்கணிக்கப்படும் அறிகுறிகளுக்கும் பித்தப்பை கற்களுக்கும் உள்ள வேறுபாடுகளைப் புரிந்துகொள்ள வழிகாட்டும் மருத்துவப் பதிவு.',
      categoryEn: 'Gastro Care',
      categoryTa: 'இரைப்பை குடல்',
    }
  ];

  return (
    <section id="health-blog" className="py-16 bg-white border-b border-rose-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-bold text-[#D63384] tracking-widest block">
            {lang === 'en' ? 'Clinical Insights & News' : <span className="font-tamil">ஆரோக்கிய இதழ்</span>}
          </span>
          <h2 className="text-[#1A1A2E]">
            {lang === 'en' ? 'Health Tips & News' : <span className="font-tamil">மருத்துவக் கட்டுரைகள் மற்றும் தகவல்கள்</span>}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            {lang === 'en' ? (
              <span>Empowering Udumalpet with medical awareness, preventive advice, and articles reviewed by our consulting specialists.</span>
            ) : (
              <span className="font-tamil">எங்கள் சிறப்பு மருத்துவர்கள் பரிந்துரைக்கும் பொது மருத்துவ விழிப்புணர்வு மற்றும் ஆரோக்கியக் கையேடு.</span>
            )}
          </p>
        </div>

        {/* 3 cards with article thumbnail placeholder layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            return (
              <article 
                key={post.id} 
                className="bg-[#FDF8FA] border border-rose-100 rounded-2xl overflow-hidden hover:border-[#D63384] transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Thumb placeholder shapes */}
                <div className="aspect-video w-full bg-[#F7F0F3] relative p-6 flex flex-col justify-between border-b border-rose-50">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-100/40 to-transparent"></div>
                  
                  {/* Floating Category badge */}
                  <span className="relative z-10 self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white text-[#D63384] rounded-full border border-rose-150">
                    {lang === 'en' ? post.categoryEn : <span className="font-tamil">{post.categoryTa}</span>}
                  </span>

                  <div className="relative z-10 flex items-center gap-2 text-slate-400 text-[10px] font-semibold">
                    <BookOpen className="w-4 h-4 text-[#D63384]" />
                    <span>Sri Chakra Editorial</span>
                  </div>
                </div>

                {/* Article texts */}
                <div className="p-6 flex-grow space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-rose-300" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-sm md:text-base text-[#1A1A2E] leading-snug group-hover:text-[#D63384]">
                    {lang === 'en' ? post.titleEn : <span className="font-tamil leading-snug">{post.titleTa}</span>}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {lang === 'en' ? post.excerptEn : <span className="font-tamil leading-relaxed text-[11px]">{post.excerptTa}</span>}
                  </p>
                </div>

                {/* Footer read action */}
                <div className="px-6 pb-6 pt-2 font-sans">
                  <button 
                    onClick={() => alert(lang === 'en' ? 'Full educational journal details loading...' : 'ஆரோக்கிய கட்டுரை முழு விவரங்கள் திரையிடப்படுகிறது...')}
                    className="text-[#A0215C] font-bold text-xs flex items-center gap-1 hover:underline cursor-pointer focus:outline-none"
                  >
                    <span>{lang === 'en' ? 'Read Full Article' : <span className="font-tamil">முழு கட்டுரையையும் வாசிக்க</span>}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
