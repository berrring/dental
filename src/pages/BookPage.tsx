import React from 'react';
import { ShieldCheck, Clock, Heart } from 'lucide-react';
import { BookingWizard } from '../components/booking/BookingWizard';
import { DemoNotice } from '../components/common/DemoNotice';
import { useLanguage } from '../context/LanguageContext';

export const BookPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-b border-[#E8E5DD] pb-8 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8EFE9] border border-[#819584]/30 rounded-xs text-xs font-mono text-[#2D3A30]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#819584]" />
            <span>{t('book.headerEyebrow')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C201E] tracking-tight">
            {t('book.headerTitlePart1')}{' '}
            <span className="font-serif italic text-[#819584]">{t('book.headerTitleItalic')}</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed max-w-xl mx-auto">
            {t('book.headerSubtitle')}
          </p>

          <div className="pt-2">
            <DemoNotice compact />
          </div>
        </div>
      </section>

      {/* Main Booking Wizard Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <BookingWizard />
      </section>

      {/* Booking Assurance Highlights */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#5C645F] pt-4">
          <div className="p-4 bg-[#F3F1EA] border border-[#E8E5DD] rounded-sm space-y-1.5">
            <span className="font-medium text-[#1C201E] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#819584]" />
              {language === 'ru' ? 'Бесплатная отмена за 24 часа' : '24-Hour Free Cancellation'}
            </span>
            <p className="text-[11px] text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Мы понимаем, что планы меняются. Перенесите или отмените запись онлайн или по телефону за 24 часа без комиссий.' : 'We understand plans change. Modify or cancel your appointment online or by phone up to 24 hours prior without fee.'}
            </p>
          </div>

          <div className="p-4 bg-[#F3F1EA] border border-[#E8E5DD] rounded-sm space-y-1.5">
            <span className="font-medium text-[#1C201E] flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#819584]" />
              {language === 'ru' ? 'Гарантия деликатного темпа' : 'Gentle Pacing Guarantee'}
            </span>
            <p className="text-[11px] text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Боитесь стоматологов? Отметьте это в анкете, и мы выделим больше времени и выдадим наушники с шумоподавлением.' : 'Experience dental anxiety? Let us know on the form so we can allocate extra consultation time and Bose noise-canceling audio.'}
            </p>
          </div>

          <div className="p-4 bg-[#F3F1EA] border border-[#E8E5DD] rounded-sm space-y-1.5">
            <span className="font-medium text-[#1C201E] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#819584]" />
              Sygeforsikringen "danmark"
            </span>
            <p className="text-[11px] text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Автоматическая электронная отправка отчетов для зачисления субсидий на датский NemKonto.' : 'Automatic electronic reporting directly to your NemKonto following each visit for Groups 1, 2, and 5.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
