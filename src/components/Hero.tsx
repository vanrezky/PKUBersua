import React from 'react';
import { HERO_BENEFITS, DUMMY_MEETUP, MINI_AVATARS } from '../data';
import { CheckCircle2, MapPin, Calendar, Clock, Sparkles, ArrowRight, Coffee } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden border-b border-[#F1D98A]/50 bg-[#FFFDF5]">
      {/* Decorative background blobs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#FFF3BF]/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Badge kecil */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3BF] border border-[#F1D98A] text-[#7A6240] font-bold text-xs uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Komunitas warga Pekanbaru</span>
            </div>

            {/* Headline besar */}
            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-[#2F1F0F] leading-[0.95]">
              Warga Pekanbaru <br className="hidden sm:inline" />
              <span className="text-[#EA580C] underline decoration-[#F6C343] decoration-4 underline-offset-8">
                Saling Berjumpa.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#7A6240] leading-relaxed max-w-lg font-normal">
              PKU itu Pekanbaru, Bersua itu bertemu. Kita pengen website ini jadi ruang temu digitalnya anak Pekanbaru.
            </p>

            {/* 3 Checklist benefit */}
            <div className="space-y-3 pt-2">
              {HERO_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F6C343] text-[#2F1F0F] flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2F1F0F]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#2F1F0F]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#gabung"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F6C343] text-[#2F1F0F] rounded-2xl font-bold text-lg shadow-lg shadow-[#F59E0B]/20 hover:bg-[#E3A927] active:scale-95 transition-all text-center border-2 border-[#F6C343]"
              >
                <span>Gabung PKUBersua</span>
                <ArrowRight className="w-5 h-5 text-[#2F1F0F]" />
              </a>
              <a
                href="#kegiatan"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#F1D98A] rounded-2xl font-bold text-lg hover:bg-[#FFF8E1] text-[#2F1F0F] shadow-xs transition-all text-center"
              >
                <span>Lihat Kegiatan</span>
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-[#7A6240]">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span>Terbuka untuk semua profesi &amp; pemula di Pekanbaru</span>
            </div>
          </div>

          {/* Right Column: Editorial Bento Style Card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 pb-6 sm:pb-8">
            {/* Decorative background card layer */}
            <div className="absolute inset-0 bg-[#EA580C] rounded-[40px] transform rotate-2 scale-[1.02] -z-10 shadow-lg opacity-25 transition-transform hover:rotate-4"></div>
            <div className="absolute inset-0 bg-[#F6C343] rounded-[40px] transform -rotate-1 scale-[1.01] -z-10 shadow-md opacity-60"></div>

            {/* Main Interactive Card */}
            <div className="bg-white rounded-[40px] p-6 sm:p-8 pb-16 sm:pb-18 border border-[#F1D98A] shadow-sm relative z-10 overflow-hidden space-y-6">
              
              {/* Top Bar of Card */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F1D98A]/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F6C343]"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span className="font-mono text-xs text-[#7A6240] font-bold tracking-wider uppercase">
                  Agenda Komunitas
                </span>
              </div>

              {/* Title & Map Pin */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3BF] text-[#2F1F0F] border border-[#F1D98A] font-bold text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Pekanbaru City</span>
                </div>
                <h3 className="font-sans font-black text-3xl text-[#2F1F0F] leading-tight">
                  Ruang Temu Pekanbaru
                </h3>
                <p className="text-sm text-[#7A6240] font-medium">
                  Sesi kumpul santai mingguan bareng warga lokal lintas bidang.
                </p>
              </div>

              {/* Mini Avatars */}
              <div className="space-y-2 bg-[#FFFDF5] p-4 rounded-3xl border border-[#F1D98A]/60">
                <div className="text-xs font-bold text-[#2F1F0F]/80">Warga yang bakal hadir:</div>
                <div className="flex flex-wrap items-center gap-2">
                  {MINI_AVATARS.map((avatar, i) => (
                    <div
                      key={i}
                      className={`h-9 px-3 rounded-full flex items-center justify-center text-xs font-bold border border-white shadow-2xs transition-transform hover:scale-105 ${avatar.color}`}
                    >
                      {avatar.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Jadwal Meetup Dummy */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-[#FFFDF5] p-3.5 rounded-2xl border border-[#F1D98A]/60 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#EA580C] flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-[#7A6240] uppercase font-bold">Waktu</div>
                    <div className="text-xs sm:text-sm font-bold text-[#2F1F0F]">{DUMMY_MEETUP.date}</div>
                  </div>
                </div>
                <div className="bg-[#FFFDF5] p-3.5 rounded-2xl border border-[#F1D98A]/60 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-[#7A6240] uppercase font-bold">Jam</div>
                    <div className="text-xs sm:text-sm font-bold text-[#2F1F0F]">16.00 WIB</div>
                  </div>
                </div>
              </div>

              {/* Badges kecil */}
              <div className="pt-2 border-t border-[#F1D98A]/50 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {DUMMY_MEETUP.badges.map((b, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#FFF3BF] text-[#2F1F0F] border border-[#F1D98A] font-bold text-xs"
                    >
                      #{b}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#EA580C]">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Free entry</span>
                </div>
              </div>

            </div>

            {/* Editorial Floating Badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#3A240B] text-[#FFFDF5] px-6 py-4 rounded-[32px] border-2 border-[#F6C343] shadow-xl shadow-[#3A240B]/20 z-20 flex items-center gap-3 rotate-[-3deg] hover:rotate-0 transition-transform">
              <span className="text-2xl">🤝</span>
              <div className="text-left">
                <div className="text-[10px] text-[#F6C343] font-mono font-bold uppercase tracking-wider">Tanpa Syarat</div>
                <div className="text-sm font-black tracking-tight text-white">Datang &amp; Ngobrol!</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
