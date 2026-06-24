import React from 'react';
import { PROBLEM_ITEMS } from '../data';

export const ProblemSection: React.FC = () => {
  return (
    <section id="tentang" className="py-24 sm:py-32 bg-white border-b border-[#1E3A8A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3.5 py-1 rounded-md bg-rose-100 text-rose-800 font-bold text-xs uppercase tracking-wider">
            Cerita Kita di Pekanbaru
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight leading-[1.2]">
            Kadang kita tinggal di kota yang sama, <br className="hidden sm:inline" />
            <span className="text-[#EA580C] underline decoration-[#F59E0B] decoration-4 underline-offset-8">
              tapi jarang benar-benar bersua.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg pt-2 max-w-2xl mx-auto">
            Kita merasa sibuk sendiri-sendiri, padahal sebenarnya banyak peluang seru yang bisa lahir kalau kita saling duduk bareng.
          </p>
        </div>

        {/* 4 Numbered List items (Friday Habit large bold typography style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROBLEM_ITEMS.map((item) => (
            <div
              key={item.number}
              className="bg-[#FDFBF7] rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-[#1E3A8A]/40 transition-all duration-300 flex flex-col justify-between group card-shadow-hover relative overflow-hidden"
            >
              {/* Playful background number watermark */}
              <span className="absolute -right-4 -bottom-6 font-sans font-black text-8xl sm:text-9xl text-slate-200/50 group-hover:text-[#BFDBFE]/40 transition-colors pointer-events-none select-none">
                {item.number}
              </span>

              <div className="space-y-6 relative z-10">
                {/* Number Box Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A] text-[#FEF08A] font-sans font-black text-2xl flex items-center justify-center shadow-md group-hover:bg-[#EA580C] group-hover:text-white transition-colors">
                  {item.number}
                </div>

                {/* Problem Statement */}
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#1E293B] leading-snug pt-2">
                  {item.title}
                </h3>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#1E3A8A] transition-colors relative z-10">
                <span>Relate banget kan? 👇</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
