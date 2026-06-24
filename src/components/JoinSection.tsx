import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle2 } from 'lucide-react';

export const JoinSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    contact: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
  };

  return (
    <section id="gabung" className="py-24 sm:py-32 bg-[#3A240B] text-[#FFFDF5] relative overflow-hidden">
      {/* Playful background yellow blobs/accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#EA580C]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6C343] text-[#2F1F0F] font-bold text-xs sm:text-sm shadow-md">
              <Sparkles className="w-4 h-4 text-[#EA580C]" />
              <span>Ruang Temu Digital &amp; Offline</span>
            </div>

            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl lg:leading-[1.15] tracking-tight text-white">
              Yuk, bersua dengan warga Pekanbaru lainnya.
            </h2>

            <p className="text-[#FFF3BF] text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              Gabung ke PKUBersua dan mulai kenalan dengan orang-orang lokal yang punya semangat belajar, berbagi, dan kolaborasi.
            </p>

            <div className="pt-4 border-t border-white/10">
              <p className="text-sm font-bold text-[#F6C343] flex items-center gap-2">
                <span>✨</span>
                <span>Tidak ada syarat khusus. Datang, kenalan, dan ikut ngobrol.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Simple Form Card */}
          <div className="lg:col-span-6 max-w-lg lg:max-w-none mx-auto w-full">
            <div className="bg-white text-[#2F1F0F] rounded-3xl p-8 sm:p-10 shadow-2xl border-4 border-[#F6C343] relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-amber-100 text-[#EA580C] rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-sans font-extrabold text-2xl text-[#2F1F0F]">
                    Terima Kasih, {formData.name}! 🎉
                  </h3>
                  <p className="text-[#7A6240] text-sm sm:text-base max-w-md mx-auto">
                    Data kamu sudah tercatat di komunitas PKUBersua. Kami bakal segera kirim undangan grup &amp; jadwal kumpul terdekat ke kontakmu!
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', profession: '', contact: '' });
                      }}
                      className="text-xs font-bold text-[#EA580C] underline hover:text-[#2F1F0F]"
                    >
                      Daftarkan teman lainnya
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 text-left">
                    <h3 className="font-sans font-extrabold text-2xl text-[#2F1F0F]">
                      Gabung Sekarang
                    </h3>
                    <p className="text-xs text-[#7A6240] font-medium">
                      Isi data singkat kamu buat dapat info agenda rutin kita.
                    </p>
                  </div>

                  {/* Nama */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="block text-xs font-extrabold text-[#2F1F0F] uppercase tracking-wider">
                      Nama Kamu <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#F1D98A] focus:border-[#EA580C] focus:outline-none text-sm font-medium bg-[#FFFDF5] text-[#2F1F0F] transition-colors"
                    />
                  </div>

                  {/* Profesi / Minat */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="profession" className="block text-xs font-extrabold text-[#2F1F0F] uppercase tracking-wider">
                      Profesi / Minat
                    </label>
                    <input
                      id="profession"
                      type="text"
                      placeholder="Contoh: Mahasiswa, Developer, Barista, F&B..."
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#F1D98A] focus:border-[#EA580C] focus:outline-none text-sm font-medium bg-[#FFFDF5] text-[#2F1F0F] transition-colors"
                    />
                  </div>

                  {/* Nomor WhatsApp atau Email */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact" className="block text-xs font-extrabold text-[#2F1F0F] uppercase tracking-wider">
                      Nomor WhatsApp atau Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact"
                      type="text"
                      required
                      placeholder="Contoh: 081234567890 / email@domain.com"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#F1D98A] focus:border-[#EA580C] focus:outline-none text-sm font-medium bg-[#FFFDF5] text-[#2F1F0F] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#F6C343] hover:bg-[#E3A927] text-[#2F1F0F] font-black py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-98 flex items-center justify-center gap-2 text-base border-2 border-[#F6C343]"
                    >
                      <span>Gabung Sekarang</span>
                      <Send className="w-5 h-5 text-[#2F1F0F]" />
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-[#7A6240] font-medium">
                     Privasi terjaga. Tidak ada spam. Hanya info kumpul bareng.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
