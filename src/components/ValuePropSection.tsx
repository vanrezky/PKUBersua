import React from 'react';
import { VALUE_PROPS } from '../data';
import { Coffee, Laptop, Sparkles, HeartHandshake } from 'lucide-react';

export const ValuePropSection: React.FC = () => {
  return (
    <section id="ruang-temu" className="py-24 sm:py-32 bg-[#FDFBF7] border-b border-[#1E3A8A]/10 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FEF08A]/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Subcopy */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Solusi Sederhana</span>
          </div>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight leading-tight">
            PKUBersua jadi tempat mulai yang sederhana.
          </h2>

          <p className="text-slate-600 text-base sm:text-xl leading-relaxed font-normal bg-white/60 p-6 rounded-2xl border border-slate-200/60 shadow-xs">
            Kita bikin ruang yang santai untuk warga Pekanbaru bertemu, ngobrol, belajar, dan saling bantu. <span className="font-bold text-[#1E293B]">Tidak harus jago dulu.</span> Tidak harus punya jabatan. Yang penting mau bersua.
          </p>
        </div>

        {/* 2 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {VALUE_PROPS.map((prop, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#1E3A8A] card-shadow card-shadow-hover relative flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-[#FEF08A] border-2 border-[#F59E0B] flex items-center justify-center text-[#1E3A8A] shadow-sm">
                    {prop.iconName === 'coffee' ? (
                      <Coffee className="w-8 h-8 text-[#EA580C]" />
                    ) : (
                      <Laptop className="w-8 h-8 text-[#1E3A8A]" />
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs">
                    {prop.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1E293B]">
                    {prop.title}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    {prop.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#1E3A8A]">
                <span>Terbuka untuk semua warga Pekanbaru</span>
                <span>✨</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA kecil */}
        <div className="mt-16 text-center">
          <a
            href="#gabung"
            className="inline-flex items-center gap-3 bg-[#FEF08A] hover:bg-[#FDE047] text-[#1E3A8A] font-extrabold px-8 py-4 rounded-full border-2 border-[#F59E0B] shadow-md hover:shadow-lg transition-all text-lg active:scale-95"
          >
            <HeartHandshake className="w-6 h-6 text-[#EA580C]" />
            <span>Mulai dari kenalan dulu.</span>
          </a>
        </div>

      </div>
    </section>
  );
};
