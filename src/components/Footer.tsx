import React from 'react';
import { Users, Instagram, MessageCircle, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#1E3A8A]/10 text-[#1E293B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-white">
                <Users className="w-4 h-4 text-[#FEF08A]" />
              </div>
              <span className="font-sans font-extrabold text-xl tracking-tight text-[#1E3A8A]">
                PKU<span className="text-[#EA580C]">Bersua</span>
              </span>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base max-w-sm font-normal">
              Ruang temu digitalnya anak Pekanbaru. Tempat kita yang tinggal di kota yang sama saling berkenalan, belajar, dan tumbuh bareng.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FDFBF7] border border-slate-200 flex items-center justify-center text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-colors shadow-2xs"
                aria-label="Instagram PKUBersua"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FDFBF7] border border-slate-200 flex items-center justify-center text-[#EA580C] hover:bg-[#EA580C] hover:text-white transition-colors shadow-2xs"
                aria-label="WhatsApp Grup PKUBersua"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FDFBF7] border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-800 hover:text-white transition-colors shadow-2xs"
                aria-label="GitHub PKUBersua"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-sans font-extrabold text-sm uppercase tracking-wider text-[#1E3A8A]">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#tentang" className="text-slate-600 hover:text-[#2563EB] transition-colors">
                  Tentang Kita
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="text-slate-600 hover:text-[#2563EB] transition-colors">
                  Kegiatan Rutin
                </a>
              </li>
              <li>
                <a href="#ruang-temu" className="text-slate-600 hover:text-[#2563EB] transition-colors">
                  Ruang Temu
                </a>
              </li>
              <li>
                <a href="#gabung" className="text-slate-600 hover:text-[#2563EB] transition-colors">
                  Gabung Komunitas
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="font-sans font-extrabold text-sm uppercase tracking-wider text-[#1E3A8A]">
              Kontak &amp; Lokasi
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Pekanbaru, Riau</li>
              <li>halo@pkubersua.id</li>
              <li className="pt-2 text-xs font-semibold text-[#EA580C] bg-[#FEF08A]/40 inline-block px-2.5 py-1 rounded-md border border-[#F59E0B]/20">
                ☕ Meetup rutin tiap Sabtu sore
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            &copy; 2026 PKUBersua. Pekanbaru Kota Bertuah.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
            <span>untuk warga Pekanbaru</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
