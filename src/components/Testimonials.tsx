import React from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, MessageCircleHeart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#1E3A8A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-md bg-amber-100 text-[#854D0E] font-bold text-xs uppercase tracking-wider">
            <MessageCircleHeart className="w-3.5 h-3.5" />
            <span>Cerita Nyata</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight">
            Kata mereka yang sudah bersua
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Pengalaman santai warga Pekanbaru setelah ikut kumpul bareng kita.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FDFBF7] rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-[#1E3A8A]/30 transition-all duration-300 flex flex-col justify-between card-shadow relative"
            >
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-[#F59E0B]/40" />
                <p className="font-sans font-bold text-lg sm:text-xl text-[#1E293B] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-base shadow-sm ${t.avatarBg}`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-base text-[#1E293B]">
                    {t.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
