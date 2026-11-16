import React from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DemoNoticeProps {
  className?: string;
  compact?: boolean;
}

export const DemoNotice: React.FC<DemoNoticeProps> = ({ className = '', compact = false }) => {
  const { language } = useLanguage();

  if (compact) {
    return (
      <div className={`inline-flex items-center gap-2 text-xs px-2.5 py-1 bg-[#819584]/10 text-[#47584A] border border-[#819584]/20 rounded-sm ${className}`}>
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>
          {language === 'ru'
            ? 'Демонстрационный проект • Вымышленная клиника и тестовые данные'
            : 'Portfolio Demo • Fictional Clinic & Sample Data'}
        </span>
      </div>
    );
  }

  return (
    <div className={`bg-[#F3F1EA] border border-[#E8E5DD] px-4 py-3 rounded-sm text-xs text-[#5C645F] flex items-start gap-3 ${className}`}>
      <Info className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
      <div>
        <p className="font-medium text-[#1C201E]">
          {language === 'ru' ? 'Демонстрационный проект портфолио' : 'Demonstration Portfolio Project'}
        </p>
        <p className="mt-0.5 leading-relaxed text-[#5C645F]">
          {language === 'ru'
            ? 'AURA Dental Studio — концептуальный проект частной стоматологической практики в Копенгагене. Все процедуры, тарифы в DKK и профили врачей являются реалистичной демонстрацией. Реальная запись на прием и финансовые операции не производятся.'
            : 'AURA Dental Studio is an architectural web concept for a private dental practice in Copenhagen. All clinical procedures, sample pricing in DKK, and staff profiles are realistic fictional examples. No actual medical appointments or financial charges are processed.'}
        </p>
      </div>
    </div>
  );
};
