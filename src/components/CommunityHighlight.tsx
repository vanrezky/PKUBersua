import React from 'react';
import { HIGHLIGHT_TAGS } from '../data';
import { MapPin, Heart } from 'lucide-react';

export const CommunityHighlight: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FDFBF7] border-b border-[#1E3A8A]/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -left-20 top-10 w-80 h-80 bg-[#BFDBFE]/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -right-20 bottom-10 w-80 h-80 bg-[#FEF08A]/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-14 lg:p-16 border-2 border-[#1E3A8A] card-shadow max-w-5xl mx-auto relative overflow-hidden">
          
          {/* Watermark Pekanbaru map pin icon */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-10 translate-y-10">
            <MapPin className="w-96 h-96 text-[#1E3A8A]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Copywriting Left */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA580C]/10 text-[#EA580C] font-bold text-xs uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Semangat Lokal</span>
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight leading-tight">
                Dari Pekanbaru, untuk Pekanbaru.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                PKUBersua percaya kota ini punya banyak orang menarik. Developer, designer, pebisnis kecil, freelancer, mahasiswa, kreator, pekerja remote, sampai warga yang sekadar ingin punya circle baru. <span className="font-bold text-[#1E293B] bg-[#FEF08A]/60 px-1 rounded">Semua bisa mulai dari satu hal sederhana: bersua.</span>
              </p>
            </div>

            {/* Visual Right: Floating Pills/Cards */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              <div className="bg-[#1E3A8A] text-white p-6 rounded-3xl shadow-lg border border-[#2563EB] transform lg:rotate-2">
                <div className="text-xs text-[#FEF08A] font-mono font-bold uppercase tracking-wider mb-1">Identitas Kita</div>
                <div className="text-xl sm:text-2xl font-black font-sans">#PekanbaruKotaBertuah</div>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {HIGHLIGHT_TAGS.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2.5 rounded-2xl bg-[#FDFBF7] border border-slate-200 text-[#1E3A8A] font-extrabold text-xs sm:text-sm shadow-xs hover:border-[#EA580C] hover:text-[#EA580C] transition-colors"
                  >
                    📍 {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
