// app/components/Header.tsx
"use client";

import Link from "next/link";
import { ChevronDown, Zap, Star, Crown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  t: any; // Bộ từ điển ngôn ngữ hiện tại
  currentPkg: string; // Gói đang chọn để highlight menu
  onLanguageChange: (lang: string) => void; // Hàm đổi ngôn ngữ
  onSelectPackage: (pkg: string) => void; // Hàm chọn gói
  onReset: () => void; // Hàm reset về trang chủ
}

export default function Header({ t, currentPkg, onLanguageChange, onSelectPackage, onReset }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        
        {/* --- 1. LOGO & MENU TRÁI --- */}
        <div className="flex items-center gap-6 md:gap-12">
          
          {/* LOGO TO */}
          <Link href="/" onClick={onReset} className="block py-1">
            <img
              src="/sps_logo.png"
              alt="SPS Logo"
              className="h-16 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
          </Link>

          {/* MENU ĐIỀU HƯỚNG */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={onReset}
              className={`
                  px-5 py-3 rounded-xl text-xl font-extrabold transition-all duration-200
                  ${currentPkg === 'all' 
                      ? 'text-[#0F4C81] bg-blue-50/60' 
                      : 'text-gray-600 hover:text-[#0F4C81] hover:bg-gray-50'
                  }
              `}
            >
              {t.home}
            </button>

            <div className="group relative h-full flex items-center"> 
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-xl font-extrabold text-gray-600 group-hover:text-[#0F4C81] group-hover:bg-gray-50 transition-all duration-200">
                {t.packages}
                <ChevronDown size={24} strokeWidth={3} className="group-hover:rotate-180 transition-transform duration-300"/>
              </button>

              {/* DROPDOWN */}
              <div className="hidden group-hover:block absolute top-full left-0 pt-6 w-80 z-50">
                  <div className="bg-white shadow-2xl rounded-2xl border-2 border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-3 flex flex-col gap-2">
                      <button onClick={() => onSelectPackage('basic')} className="flex items-center gap-4 px-4 py-4 hover:bg-blue-50 rounded-xl text-left transition-colors group/item">
                        <div className="p-3 bg-green-100 text-green-600 rounded-xl group-hover/item:scale-110 transition-transform"><Zap size={28} strokeWidth={2.5} /></div>
                        <div>
                          <div className="font-bold text-gray-800 text-lg">{t.pkg_essential}</div>
                          <div className="text-sm text-gray-500 font-medium">{t.pkg_essential_desc}</div>
                        </div>
                      </button>
                      <button onClick={() => onSelectPackage('plus')} className="flex items-center gap-4 px-4 py-4 hover:bg-blue-50 rounded-xl text-left transition-colors group/item">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover/item:scale-110 transition-transform"><Star size={28} strokeWidth={2.5} /></div>
                        <div>
                          <div className="font-bold text-gray-800 text-lg">{t.pkg_advanced}</div>
                          <div className="text-sm text-gray-500 font-medium">{t.pkg_advanced_desc}</div>
                        </div>
                      </button>
                      <button onClick={() => onSelectPackage('pro')} className="flex items-center gap-4 px-4 py-4 hover:bg-blue-50 rounded-xl text-left transition-colors group/item">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-xl group-hover/item:scale-110 transition-transform"><Crown size={28} strokeWidth={2.5} /></div>
                        <div>
                          <div className="font-bold text-gray-800 text-lg">{t.pkg_pro}</div>
                          <div className="text-sm text-gray-500 font-medium">{t.pkg_pro_desc}</div>
                        </div>
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </nav>
        </div>

        {/* --- 2. MENU PHẢI (Language & Button) --- */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden lg:block">
              <LanguageSwitcher onLanguageChange={onLanguageChange} />
          </div>
          <a
            href="https://spsmarketing.de/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F4C81] text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-[#0a355c] transition transform active:scale-95 text-base whitespace-nowrap"
          >
            {t.consult}
          </a>
        </div>
      </div>
    </header>
  );
}