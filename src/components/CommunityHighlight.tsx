import React from 'react';
import { HIGHLIGHT_TAGS } from '../data';
import { MapPin, Heart } from 'lucide-react';

export const CommunityHighlight: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FFF8E1]/50 border-b border-[#F1D98A]/50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -left-20 top-10 w-80 h-80 bg-[#FFF3BF]/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -right-20 bottom-10 w-80 h-80 bg-[#FFF3BF]/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#F1D98A] card-shadow max-w-5xl mx-auto relative overflow-hidden">
          
          {/* Watermark Pekanbaru map pin icon */}
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none transform translate-x-10 translate-y-10">
            <MapPin className="w-96 h-96 text-[#FFF3BF]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Copywriting Left */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3BF] border border-[#F1D98A] text-[#EA580C] font-bold text-xs uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-current text-[#EA580C]" />
                <span>Semangat Lokal</span>
              </div>

              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2F1F0F] tracking-tight leading-tight">
                Dari Pekanbaru, untuk Pekanbaru.
              </h2>

              <p className="text-[#7A6240] text-base sm:text-lg leading-relaxed font-normal">
                PKUBersua percaya kota ini punya banyak orang menarik. Developer, designer, pebisnis kecil, freelancer, mahasiswa, kreator, pekerja remote, sampai warga yang sekadar ingin punya circle baru. <span className="font-bold text-[#2F1F0F] bg-[#FFF3BF] px-1.5 py-0.5 rounded">Semua bisa mulai dari satu hal sederhana: bersua.</span>
              </p>
            </div>

            {/* Visual Right: Floating Pills/Cards */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4">
              <div className="bg-[#3A240B] text-white p-6 rounded-3xl shadow-lg border border-[#F59E0B]/30 transform lg:rotate-2">
                <div className="text-xs text-[#F6C343] font-mono font-bold uppercase tracking-wider mb-1">Identitas Kita</div>
                <div className="text-xl sm:text-2xl font-black font-sans text-white">#PekanbaruKotaBertuah</div>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {HIGHLIGHT_TAGS.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2.5 rounded-2xl bg-[#FFFDF5] border border-[#F1D98A] text-[#2F1F0F] font-extrabold text-xs sm:text-sm shadow-xs hover:border-[#EA580C] hover:text-[#EA580C] transition-colors"
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
