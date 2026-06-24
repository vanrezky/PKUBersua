import React from 'react';
import { ACTIVITIES } from '../data';
import { Coffee, Users, Handshake, ArrowUpRight } from 'lucide-react';

export const KegiatanSection: React.FC = () => {
  return (
    <section id="kegiatan" className="py-24 sm:py-32 bg-white border-b border-[#1E3A8A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-block px-3.5 py-1 rounded-md bg-blue-100 text-[#1E3A8A] font-bold text-xs uppercase tracking-wider">
            Agenda Kita
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E3A8A] tracking-tight">
            Kegiatan yang bisa kamu ikuti
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
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
                className="bg-[#FDFBF7] rounded-3xl p-8 border border-slate-200 hover:border-[#1E3A8A] transition-all duration-300 flex flex-col justify-between group card-shadow-hover relative"
              >
                <div className="space-y-6">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7 text-[#EA580C]" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${act.colorAccent}`}>
                      {act.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-3">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#1E293B] group-hover:text-[#1E3A8A] transition-colors flex items-center gap-1.5">
                      <span>{act.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#EA580C]" />
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed font-normal">
                      {act.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#1E3A8A]">
                  <span>Jadwal rilis tiap minggu</span>
                  <span>📍 Pekanbaru</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note Bottom */}
        <div className="mt-12 bg-blue-50/60 border border-blue-200/60 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-[#1E3A8A] font-medium">
            💡 Punya ide kegiatan atau mau bikin sesi sharing sendiri di Pekanbaru? <a href="#gabung" className="underline font-bold text-[#EA580C] hover:text-[#1E3A8A]">Yuk obrolin bareng admin!</a>
          </p>
        </div>

      </div>
    </section>
  );
};
