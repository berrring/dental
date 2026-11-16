import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'light',
}) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-1.5 p-0.5 rounded-sm border text-xs font-mono transition-colors ${
        isDark
          ? 'bg-[#2D3A30]/60 border-[#47584A] text-[#FAF9F6]'
          : 'bg-[#F3F1EA] border-[#E8E5DD] text-[#1C201E]'
      } ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe className={`w-3.5 h-3.5 ml-1 ${isDark ? 'text-[#819584]' : 'text-[#819584]'}`} />
      
      <button
        type="button"
        onClick={() => toggleLanguage('en')}
        className={`px-1.5 py-0.5 rounded-xs uppercase tracking-wider transition-all font-medium ${
          language === 'en'
            ? isDark
              ? 'bg-[#819584] text-[#1C201E] font-bold'
              : 'bg-[#1C201E] text-[#FAF9F6] font-semibold'
            : isDark
            ? 'text-[#D7D3C8] hover:text-white'
            : 'text-[#8F8B82] hover:text-[#1C201E]'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>

      <span className={isDark ? 'text-[#47584A]' : 'text-[#D7D3C8]'}>|</span>

      <button
        type="button"
        onClick={() => toggleLanguage('ru')}
        className={`px-1.5 py-0.5 rounded-xs uppercase tracking-wider transition-all font-medium ${
          language === 'ru'
            ? isDark
              ? 'bg-[#819584] text-[#1C201E] font-bold'
              : 'bg-[#1C201E] text-[#FAF9F6] font-semibold'
            : isDark
            ? 'text-[#D7D3C8] hover:text-white'
            : 'text-[#8F8B82] hover:text-[#1C201E]'
        }`}
        aria-pressed={language === 'ru'}
      >
        RU
      </button>
    </div>
  );
};
