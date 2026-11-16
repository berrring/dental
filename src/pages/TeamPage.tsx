import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { getLocalizedSpecialists } from '../data/localizedData';
import { SectionHeading } from '../components/common/SectionHeading';
import { useLanguage } from '../context/LanguageContext';

export const TeamPage: React.FC = () => {
  const { language, t } = useLanguage();
  const specialists = getLocalizedSpecialists(language);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-b border-[#E8E5DD] pb-10">
          <SectionHeading
            eyebrow={t('team.eyebrow')}
            title={t('team.title')}
            italicWord={t('team.titleItalic')}
            subtitle={t('team.subtitle')}
          />

          <div className="mt-8 flex flex-wrap gap-4 text-xs text-[#5C645F]">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F3F1EA] rounded-xs border border-[#E8E5DD]">
              <GraduationCap className="w-3.5 h-3.5 text-[#819584]" />
              {language === 'ru' ? 'Выпускники Копенгагенского и Орхусского университетов' : 'University of Copenhagen & Aarhus University Trained'}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F3F1EA] rounded-xs border border-[#E8E5DD]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#819584]" />
              {language === 'ru' ? 'Авторизовано Ведомством по безопасности пациентов Дании' : 'Authorized by the Danish Patient Safety Authority (Styrelsen for Patientsikkerhed)'}
            </span>
          </div>
        </div>
      </section>

      {/* Main Specialists Editorial Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {specialists.map((specialist, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={specialist.id}
              id={specialist.id}
              className="bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm overflow-hidden p-6 sm:p-10 transition-all hover:border-[#819584]/60"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-5 relative ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="aspect-4/5 overflow-hidden rounded-sm bg-[#F3F1EA] border border-[#E8E5DD]">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Danish Official Title Tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#FAF9F6]/95 backdrop-blur-xs p-3 rounded-xs border border-[#E8E5DD] shadow-xs">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#819584] block">
                      {language === 'ru' ? 'Датская регистрация' : 'Danish Registration'}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#1C201E] block">
                      {specialist.danishTitle}
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
                      {specialist.title} • {specialist.experienceYears} {language === 'ru' ? 'лет практики' : 'Years Practice'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-normal text-[#1C201E] mt-1">
                      {specialist.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#47584A] mt-1">
                      {specialist.specialty}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
                    {specialist.bio}
                  </p>

                  {/* Pull Quote */}
                  <div className="p-4 bg-[#F3F1EA] border-l-3 border-[#819584] rounded-r-xs">
                    <p className="font-serif italic text-sm text-[#2D3A30] leading-relaxed">
                      "{specialist.quote}"
                    </p>
                  </div>

                  {/* Credentials / Grid Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs border-t border-[#E8E5DD]">
                    <div>
                      <span className="text-[10px] font-mono text-[#8F8B82] uppercase block">
                        {t('team.education')}
                      </span>
                      <p className="text-[#1C201E] mt-1 font-medium leading-snug">
                        {specialist.education}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#8F8B82] uppercase block">
                        {t('team.languages')}
                      </span>
                      <p className="text-[#1C201E] mt-1 font-medium">
                        {specialist.languages.join(' • ')}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#8F8B82] uppercase block">
                        {t('team.clinicDays')}
                      </span>
                      <p className="text-[#1C201E] mt-1 font-medium">
                        {specialist.availableDays.join(', ')}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#8F8B82] uppercase block">
                        {t('team.memberships')}
                      </span>
                      <p className="text-[#5C645F] mt-1 leading-snug">
                        {specialist.memberships.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  </div>

                  {/* Direct Booking CTA */}
                  <div className="pt-2">
                    <Link
                      to={`/book?dentist=${specialist.id}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium px-5 py-3 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-colors rounded-sm"
                    >
                      <span>{t('team.bookWith')} {specialist.name.split(' ')[1]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D7D3C8]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* The Slow Dentistry Standards Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C201E] text-[#FAF9F6] p-8 sm:p-14 rounded-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
              {language === 'ru' ? 'Наш клинический кодекс' : 'Our Clinical Code'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-[#FAF9F6]">
              {language === 'ru' ? 'Четыре обязательства перед каждым пациентом.' : 'Four non-negotiable promises to every patient.'}
            </h3>
            <p className="text-xs sm:text-sm text-[#8F8B82] leading-relaxed">
              {language === 'ru' ? 'Каждый врач студии AURA следует строгим скандинавским этическим стандартам, ставящим сохранение живых тканей зуба выше объема процедур.' : 'Every clinician at AURA agrees to uphold strict Scandinavian ethical guidelines that put biological tooth preservation above commercial volume.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-xs text-[#D7D3C8]">
            <div className="space-y-2 p-4 bg-[#2D3A30]/50 border border-[#47584A] rounded-sm">
              <span className="font-mono text-[#819584] block">01 / STA Anesthesia</span>
              <p className="text-[#FAF9F6] font-medium text-sm">{language === 'ru' ? 'Безболезненность' : 'Painless Interventions'}</p>
              <p className="text-[11px] text-[#8F8B82] leading-relaxed">
                {language === 'ru' ? 'Компьютерная анестезия STA действует исключительно на целевой зуб без онемения щек и губ.' : 'Computer-controlled STA local numbing that targets only the tooth without freezing your cheek or speech.'}
              </p>
            </div>

            <div className="space-y-2 p-4 bg-[#2D3A30]/50 border border-[#47584A] rounded-sm">
              <span className="font-mono text-[#819584] block">02 / Rubber Dam</span>
              <p className="text-[#FAF9F6] font-medium text-sm">{language === 'ru' ? 'Стерильная изоляция' : 'Contamination-Free Bonding'}</p>
              <p className="text-[11px] text-[#8F8B82] leading-relaxed">
                {language === 'ru' ? 'Мы всегда изолируем рабочее поле коффердамом, гарантируя долговечность адгезивной фиксации.' : 'We always isolate teeth with medical dental dams to prevent saliva contamination and maximize bonding life.'}
              </p>
            </div>

            <div className="space-y-2 p-4 bg-[#2D3A30]/50 border border-[#47584A] rounded-sm">
              <span className="font-mono text-[#819584] block">03 / Carl Zeiss Optics</span>
              <p className="text-[#FAF9F6] font-medium text-sm">{language === 'ru' ? 'Оптическое увеличение' : 'Zeiss Micro-Optics'}</p>
              <p className="text-[11px] text-[#8F8B82] leading-relaxed">
                {language === 'ru' ? 'Все манипуляции выполняются под микроскопом или бинокулярами с увеличением до 20x.' : 'Every restoration is executed under 4.5x magnification loupes or surgical microscopes to catch micro-cracks early.'}
              </p>
            </div>

            <div className="space-y-2 p-4 bg-[#2D3A30]/50 border border-[#47584A] rounded-sm">
              <span className="font-mono text-[#819584] block">04 / Transparency</span>
              <p className="text-[#FAF9F6] font-medium text-sm">{language === 'ru' ? 'Письменная смета' : 'Written Fee Transparency'}</p>
              <p className="text-[11px] text-[#8F8B82] leading-relaxed">
                {language === 'ru' ? 'Никаких сюрпризов: вы знаете точную стоимость и компенсацию до начала каких-либо манипуляций.' : 'No surprises. You receive complete digital estimates and "danmark" subsidy forecasts before any tool touches a tooth.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
