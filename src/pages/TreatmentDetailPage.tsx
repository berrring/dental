import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Check,
  ChevronRight
} from 'lucide-react';
import { getLocalizedTreatments } from '../data/localizedData';
import { Accordion } from '../components/common/Accordion';
import { ComparisonTool } from '../components/common/ComparisonTool';
import { SectionHeading } from '../components/common/SectionHeading';
import { useLanguage } from '../context/LanguageContext';

export const TreatmentDetailPage: React.FC = () => {
  const { language } = useLanguage();
  const treatments = getLocalizedTreatments(language);

  const { slug } = useParams<{ slug: string }>();
  const treatment = treatments.find((t) => t.slug === slug || t.id === slug);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  // Find related treatments (excluding current)
  const relatedTreatments = treatments
    .filter((t) => t.id !== treatment.id)
    .slice(0, 3);

  // Map treatment to corresponding comparison pair if applicable
  const comparisonPairMap: Record<string, string> = {
    'teeth-whitening': 'whitening-compare',
    'cosmetic-dentistry': 'veneers-bonding-compare',
    'orthodontics': 'ortho-compare',
    'dental-implants': 'implant-bridge-compare',
    'dental-cleaning': 'whitening-compare',
    'general-dentistry': 'veneers-bonding-compare',
  };

  const comparisonPairId = comparisonPairMap[treatment.id] || 'whitening-compare';

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. BREADCRUMBS & HERO HEADER */}
      <section className="pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb nav */}
        <div className="flex items-center gap-2 text-xs text-[#8F8B82] mb-6">
          <Link to="/" className="hover:text-[#1C201E] transition-colors">
            {language === 'ru' ? 'Главная' : 'Home'}
          </Link>
          <ChevronRight className="w-3 h-3 text-[#D7D3C8]" />
          <Link to="/treatments" className="hover:text-[#1C201E] transition-colors">
            {language === 'ru' ? 'Процедуры' : 'Treatments'}
          </Link>
          <ChevronRight className="w-3 h-3 text-[#D7D3C8]" />
          <span className="text-[#1C201E] font-medium">{treatment.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading and Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-[#E8EFE9] text-[#2D3A30] rounded-xs font-medium">
                {treatment.categoryLabel}
              </span>
              {treatment.danmarkRefundEligible && (
                <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 bg-[#F3F1EA] text-[#47584A] border border-[#E8E5DD] rounded-xs flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#819584]" />
                  {language === 'ru' ? 'Субсидия "danmark"' : '"danmark" Subsidized'}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C201E] tracking-tight leading-[1.15]">
              {treatment.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5C645F] leading-relaxed">
              {treatment.subtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="p-4 sm:p-5 bg-[#F3F1EA] border border-[#E8E5DD] rounded-sm grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-[10px] font-mono text-[#8F8B82] uppercase block">
                  {language === 'ru' ? 'Длительность' : 'Procedure Time'}
                </span>
                <span className="text-sm font-medium text-[#1C201E] mt-0.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#819584]" />
                  {treatment.durationLabel}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#8F8B82] uppercase block">
                  {language === 'ru' ? 'Индикативный тариф' : 'Indicative Fee'}
                </span>
                <span className="text-sm font-medium text-[#1C201E] mt-0.5 block">
                  {treatment.priceLabel}
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-[#E8E5DD] pt-2 sm:pt-0 sm:pl-4">
                <span className="text-[10px] font-mono text-[#8F8B82] uppercase block">
                  {language === 'ru' ? 'Субсидия "danmark"' : '"danmark" Subsidy'}
                </span>
                <span className="text-sm font-medium text-[#47584A] mt-0.5 block">
                  {treatment.danmarkRefundEligible && treatment.danmarkRefundEstimateDKK
                    ? `~${treatment.danmarkRefundEstimateDKK} DKK ${language === 'ru' ? 'возврат' : 'refund'}`
                    : (language === 'ru' ? 'Эстетический тариф' : 'Aesthetic / Private')}
                </span>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={`/book?treatment=${treatment.id}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium px-6 py-3.5 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-all rounded-sm shadow-xs"
              >
                <span>{language === 'ru' ? 'Записаться на эту процедуру' : 'Book This Treatment'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D7D3C8]" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium px-5 py-3.5 bg-[#FAF9F6] text-[#1C201E] border border-[#E8E5DD] hover:border-[#1C201E] transition-colors rounded-sm"
              >
                <span>{language === 'ru' ? 'Все цены и тарифы' : 'Review All Fees'}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual with Gallery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-[#F3F1EA] border border-[#E8E5DD] shadow-sm">
              <img
                src={treatment.heroImage}
                alt={treatment.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {treatment.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-sm bg-[#F3F1EA] border border-[#E8E5DD]"
                >
                  <img
                    src={img}
                    alt={`${treatment.title} gallery ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL OVERVIEW & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-8 sm:p-12 rounded-sm space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
              {language === 'ru' ? 'Клинический подход AURA' : 'The AURA Clinical Approach'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1C201E]">
              {language === 'ru' ? 'Биологическое сохранение живых тканей.' : 'Biological respect for natural structure.'}
            </h2>
            <p className="text-sm sm:text-base text-[#5C645F] leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="pt-6 border-t border-[#E8E5DD]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8F8B82] mb-4">
              {language === 'ru' ? 'Ключевые преимущества' : 'Key Clinical Benefits'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {treatment.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F3F1EA] border border-[#E8E5DD] rounded-sm flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E8EFE9] text-[#47584A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#1C201E] leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP PROCEDURE WALKTHROUGH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'ru' ? 'Клинический протокол' : 'Clinical Protocol'}
          title={language === 'ru' ? 'Что ожидать во время' : 'What to expect during'}
          italicWord={language === 'ru' ? 'вашего визита.' : 'your appointment.'}
          subtitle={language === 'ru' ? 'Каждый этап согласуется заранее. Вы никогда не столкнетесь с неожиданными манипуляциями.' : 'Every stage is explained beforehand. You will never encounter unexpected drills, sounds, or pacing.'}
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatment.procedureSteps.map((step) => (
            <div
              key={step.step}
              className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 rounded-sm relative flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-[#819584] block mb-3">
                  {language === 'ru' ? `ЭТАП 0${step.step}` : `STAGE 0${step.step}`}
                </span>
                <h4 className="text-base font-medium text-[#1C201E] leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-[#5C645F] mt-2.5 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E8E5DD]/60 flex items-center gap-1.5 text-[11px] text-[#8F8B82] font-mono">
                <Check className="w-3 h-3 text-[#819584]" />
                <span>{language === 'ru' ? 'Под контролем врача' : 'Paced & Monitored'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SUITABILITY & AFTERCARE (Side-by-side) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Suitability */}
          <div className="bg-[#F3F1EA] border border-[#E8E5DD] p-6 sm:p-8 rounded-sm space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#819584]">
              {language === 'ru' ? 'Показания к процедуре' : 'Candidate Profile'}
            </span>
            <h3 className="text-xl font-normal text-[#1C201E]">
              {language === 'ru' ? 'Кому процедура подходит оптимально:' : 'Who this treatment is ideal for:'}
            </h3>
            <ul className="space-y-3 pt-2">
              {treatment.suitability.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3D4440]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#819584] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aftercare */}
          <div className="bg-[#F3F1EA] border border-[#E8E5DD] p-6 sm:p-8 rounded-sm space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#819584]">
              {language === 'ru' ? 'Уход и восстановление' : 'Recovery & Maintenance'}
            </span>
            <h3 className="text-xl font-normal text-[#1C201E]">
              {language === 'ru' ? 'Рекомендации после визита:' : 'Post-treatment aftercare recommendations:'}
            </h3>
            <ul className="space-y-3 pt-2">
              {treatment.aftercareAdvice.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3D4440]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#47584A] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. TREATMENT COMPARISON TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonTool initialPairId={comparisonPairId} />
      </section>

      {/* 6. TREATMENT SPECIFIC FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'ru' ? 'Ответы врачей' : 'Clinical Answers'}
          title={language === 'ru' ? 'Частые вопросы о процедуре' : 'Frequently asked questions about'}
          italicWord={treatment.title}
          subtitle={language === 'ru' ? 'Честные ответы специалистов о сроках, комфорте и подготовке.' : 'Clear, honest answers regarding longevity, comfort, and preparation.'}
          align="center"
          className="mb-10"
        />
        <Accordion items={treatment.faqs} />
      </section>

      {/* 7. RELATED TREATMENTS EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#E8E5DD]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#819584]">
              {language === 'ru' ? 'Другие направления' : 'Further Disciplines'}
            </span>
            <h3 className="text-xl font-normal text-[#1C201E] mt-0.5">
              {language === 'ru' ? 'Смежные процедуры студии' : 'Complementary Studio Services'}
            </h3>
          </div>
          <Link
            to="/treatments"
            className="text-xs uppercase font-medium tracking-wider text-[#1C201E] hover:text-[#47584A] flex items-center gap-1.5"
          >
            <span>{language === 'ru' ? 'Все процедуры' : 'View All'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#819584]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTreatments.map((rel) => (
            <Link
              key={rel.id}
              to={`/treatments/${rel.slug}`}
              className="p-5 bg-[#FAF9F6] border border-[#E8E5DD] hover:border-[#819584] transition-all rounded-sm group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-[#819584]">
                  {rel.categoryLabel}
                </span>
                <h4 className="text-base font-medium text-[#1C201E] group-hover:text-[#47584A] mt-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#5C645F] mt-2 line-clamp-2">
                  {rel.shortDescription}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8E5DD] flex items-center justify-between text-xs text-[#8F8B82]">
                <span>{rel.durationLabel}</span>
                <span className="text-[#1C201E] font-medium font-mono">{rel.priceLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
