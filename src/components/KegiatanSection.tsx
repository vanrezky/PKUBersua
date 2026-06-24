import React from 'react';
import { ACTIVITIES } from '../data';
import { Coffee, Users, Handshake, ArrowUpRight } from 'lucide-react';

export const KegiatanSection: React.FC = () => {
  return (
    <section id="kegiatan" className="py-24 sm:py-32 bg-[#FFFDF5] border-b border-[#F1D98A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#FFF3BF] border border-[#F1D98A] text-[#7A6240] font-bold text-xs uppercase tracking-wider">
            Agenda Kita
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2F1F0F] tracking-tight">
            Kegiatan yang bisa kamu ikuti
          </h2>
          <p className="text-[#7A6240] text-base sm:text-lg">
            Tidak harus ikut semua, pilih saja agenda yang paling pas dengan waktu luang dan mood kamu minggu ini.
          </p>
        </div>

        {/* 3 Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTIVITIES.map((act, idx) => {
            const IconComp = act.icon === 'coffee' ? Coffee : act.icon === 'users' ? Users : Handshake;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#F1D98A] hover:border-[#EA580C] transition-all duration-300 flex flex-col justify-between group card-shadow-hover relative"
              >
                <div className="space-y-6">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFFDF5] border border-[#F1D98A] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7 text-[#EA580C]" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${act.colorAccent}`}>
                      {act.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#2F1F0F] group-hover:text-[#EA580C] transition-colors flex items-center gap-1.5">
                      <span>{act.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#EA580C]" />
                    </h3>
                    <p className="text-[#7A6240] text-base leading-relaxed font-normal">
                      {act.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F1D98A]/50 flex items-center justify-between text-xs font-bold text-[#7A6240]/60 group-hover:text-[#EA580C]">
                  <span>Jadwal rilis tiap minggu</span>
                  <span>📍 Pekanbaru</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note Bottom */}
        <div className="mt-12 bg-[#FFF8E1] border border-[#F1D98A] rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-xs">
          <p className="text-sm sm:text-base text-[#2F1F0F] font-medium">
            💡 Punya ide kegiatan atau mau bikin sesi sharing sendiri di Pekanbaru? <a href="#gabung" className="underline font-bold text-[#EA580C] hover:text-[#2F1F0F]">Yuk obrolin bareng admin!</a>
          </p>
        </div>

      </div>
    </section>
  );
};
