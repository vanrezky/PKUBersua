import React, { useState } from 'react';
import { NAV_ITEMS } from '../data';
import { Menu, X, Users } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/5 transition-all shrink-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#2B59FF] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-[#4D74FF] transition-colors">
            <Users className="w-5 h-5 text-[#FFC107]" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-black text-2xl tracking-tight text-[#2B59FF] flex items-center">
              PKU<span className="text-[#D97706]">Bersua</span>
              <span className="w-2 h-2 rounded-full bg-[#FFC107] ml-1 mb-3 animate-pulse"></span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium opacity-70">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#1A1A1A] hover:opacity-100 hover:text-[#2B59FF] transition-all py-2 text-sm sm:text-base"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#gabung"
            className="px-6 py-2.5 bg-[#2B59FF] text-white rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-[#4D74FF] active:scale-95 transition-all"
          >
            Gabung Komunitas
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#2B59FF] hover:bg-black/5 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-black/5 bg-white px-6 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-semibold text-[#1A1A1A] hover:bg-gray-50 hover:text-[#2B59FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#gabung"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-[#2B59FF] text-white rounded-full text-sm font-bold shadow-lg shadow-blue-500/20"
            >
              Gabung Komunitas
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
