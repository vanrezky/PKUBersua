import React from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, MessageCircleHeart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#F1D98A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF3BF] border border-[#F1D98A] text-[#7A6240] font-bold text-xs uppercase tracking-wider">
            <MessageCircleHeart className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Cerita Nyata</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2F1F0F] tracking-tight">
            Kata mereka yang sudah bersua
          </h2>
          <p className="text-[#7A6240] text-base sm:text-lg">
            Pengalaman santai warga Pekanbaru setelah ikut kumpul bareng kita.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF5] rounded-3xl p-8 sm:p-10 border border-[#F1D98A] hover:border-[#EA580C] transition-all duration-300 flex flex-col justify-between card-shadow relative"
            >
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-[#F6C343]" />
                <p className="font-sans font-bold text-lg sm:text-xl text-[#2F1F0F] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F1D98A]/40 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-base shadow-xs ${t.avatarBg}`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-base text-[#2F1F0F]">
                    {t.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#7A6240]">
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
