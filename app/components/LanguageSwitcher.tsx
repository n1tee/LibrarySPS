"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English',    flag: '🇺🇸' },
  { code: 'de', label: 'Deutsch',    flag: '🇩🇪' },
];

interface LanguageSwitcherProps {
  onLanguageChange?: (langCode: string) => void;
}

export default function LanguageSwitcher({ onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]); 
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: typeof languages[0]) => {
    setSelected(lang);
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange(lang.code);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
            flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-200 whitespace-nowrap
            ${isOpen 
                ? 'border-[#0F4C81] text-[#0F4C81] bg-blue-50 ring-2 ring-blue-100' 
                : 'border-gray-300 text-gray-700 hover:border-[#0F4C81] hover:text-[#0F4C81] hover:bg-gray-50'
            }
        `}
      >
        {/* 1. Flag: Thêm flex-shrink-0 để không bị ép dẹt */}
        <span className="text-2xl leading-none drop-shadow-sm flex-shrink-0">
            {selected.flag}
        </span>
        
        {/* 2. Label: Thêm flex-shrink-0 và bỏ min-width cứng nhắc nếu không cần */}
        <span className="text-base font-bold text-left flex-shrink-0 min-w-[80px]">
            {selected.label}
        </span>

        <ChevronDown 
            size={20} 
            className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? '-rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[9999] animate-in fade-in zoom-in-95 duration-200">
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full text-left px-5 py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors
                    ${selected.code === lang.code ? 'bg-blue-50 text-[#0F4C81]' : 'text-gray-700'}
                `}
              >
                <div className="flex items-center gap-4 whitespace-nowrap">
                    <span className="text-2xl drop-shadow-sm flex-shrink-0">{lang.flag}</span>
                    <span className="text-base font-semibold flex-shrink-0">{lang.label}</span>
                </div>
                {selected.code === lang.code && <Check size={20} className="text-[#0F4C81] flex-shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}