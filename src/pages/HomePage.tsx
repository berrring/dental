import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { getLocalizedTreatments, getLocalizedSpecialists } from '../data/localizedData';
import { generalFaqs } from '../data/faqs';
import { TreatmentCard } from '../components/common/TreatmentCard';
import { SpecialistCard } from '../components/common/SpecialistCard';
import { Accordion } from '../components/common/Accordion';
import { ComparisonTool } from '../components/common/ComparisonTool';
import { SectionHeading } from '../components/common/SectionHeading';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const treatments = getLocalizedTreatments(language);
  const specialists = getLocalizedSpecialists(language);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION - Asymmetrical Scandinavian Architecture */}
      <section className="relative pt-6 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8EFE9] border border-[#819584]/30 rounded-xs text-xs font-mono text-[#2D3A30]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#819584] animate-pulse" />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C201E] leading-[1.12]">
              {t('hero.titlePart1')}{' '}
              <span className="font-serif italic text-[#819584]">
                {t('hero.titleItalic')}
              </span>{' '}
              {t('hero.titlePart2')}
            </h1>

            <p className="text-base sm:text-lg text-[#5C645F] font-normal leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-medium px-6 py-3.5 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-all rounded-sm shadow-xs"
              >
                <span>{t('hero.requestBtn')}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D7D3C8]" />
              </Link>

              <Link
                to="/treatments"
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-medium px-6 py-3.5 bg-[#F3F1EA] text-[#1C201E] hover:bg-[#E8E5DD] border border-[#E8E5DD] transition-all rounded-sm"
              >
                <span>{t('hero.exploreBtn')}</span>
                <ArrowRight className="w-4 h-4 text-[#819584]" />
              </Link>
            </div>

            {/* Subtle Credibility Metrics */}
            <div className="pt-8 border-t border-[#E8E5DD] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="text-2xl sm:text-3xl font-light text-[#1C201E] font-mono">
                  18+
                </span>
                <p className="text-[11px] text-[#8F8B82] uppercase tracking-wider mt-0.5">
                  {t('hero.statYears')}
                </p>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-light text-[#1C201E] font-mono">
                  0%
                </span>
                <p className="text-[11px] text-[#8F8B82] uppercase tracking-wider mt-0.5">
                  {t('hero.statHurried')}
                </p>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-light text-[#1C201E] font-mono">
                  100%
                </span>
                <p className="text-[11px] text-[#8F8B82] uppercase tracking-wider mt-0.5">
                  {t('hero.statWind')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Imagery Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-[#F3F1EA] shadow-lg border border-[#E8E5DD]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="AURA Dental Studio Interior Copenhagen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C201E]/40 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F6]/95 backdrop-blur-md p-4 rounded-sm border border-[#E8E5DD] shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#819584]">
                      {t('hero.cardBadge')}
                    </span>
                    <h3 className="text-xs sm:text-sm font-medium text-[#1C201E] mt-0.5">
                      {t('hero.cardTitle')}
                    </h3>
                    <p className="text-[11px] text-[#5C645F] mt-0.5">
                      {t('hero.cardDesc')}
                    </p>
                  </div>
                  <Link
                    to="/about"
                    className="w-7 h-7 rounded-sm bg-[#1C201E] text-white flex items-center justify-center shrink-0 hover:bg-[#47584A] transition-colors"
                    aria-label="Learn about our clinic philosophy"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Overlapping Accent Card */}
            <div className="hidden sm:block absolute -top-4 -left-6 bg-[#FAF9F6] border border-[#E8E5DD] p-3 rounded-sm shadow-sm max-w-48">
              <span className="text-[10px] font-mono text-[#47584A] uppercase tracking-wider flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3 h-3 text-[#819584]" />
                "danmark" Partner
              </span>
              <p className="text-[10px] text-[#5C645F] mt-1 leading-snug">
                {language === 'ru' ? 'Прямое зачисление субсидий на датский NemKonto' : 'Direct NemKonto reimbursement for Group 1, 2, and 5 members.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS (Our Philosophy in Practice) */}
      <section className="bg-[#F3F1EA] py-16 sm:py-24 border-y border-[#E8E5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t('pillars.eyebrow')}
            title={t('pillars.title')}
            italicWord={t('pillars.titleItalic')}
            subtitle={t('pillars.subtitle')}
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-8 rounded-sm space-y-4 hover:border-[#819584] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#E8EFE9] text-[#2D3A30] flex items-center justify-center font-mono text-sm font-semibold">
                01
              </div>
              <h3 className="text-lg font-medium text-[#1C201E]">
                {t('pillars.p1Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
                {t('pillars.p1Desc')}
              </p>
              <div className="pt-2 text-xs font-mono text-[#819584]">
                {t('pillars.p1Bullet')}
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-8 rounded-sm space-y-4 hover:border-[#819584] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#E8EFE9] text-[#2D3A30] flex items-center justify-center font-mono text-sm font-semibold">
                02
              </div>
              <h3 className="text-lg font-medium text-[#1C201E]">
                {t('pillars.p2Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
                {t('pillars.p2Desc')}
              </p>
              <div className="pt-2 text-xs font-mono text-[#819584]">
                {t('pillars.p2Bullet')}
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-8 rounded-sm space-y-4 hover:border-[#819584] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-[#E8EFE9] text-[#2D3A30] flex items-center justify-center font-mono text-sm font-semibold">
                03
              </div>
              <h3 className="text-lg font-medium text-[#1C201E]">
                {t('pillars.p3Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
                {t('pillars.p3Desc')}
              </p>
              <div className="pt-2 text-xs font-mono text-[#819584]">
                {t('pillars.p3Bullet')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS DIRECTORY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow={t('treatments.eyebrow')}
            title={t('treatments.title')}
            italicWord={t('treatments.titleItalic')}
            subtitle={t('treatments.subtitle')}
          />
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#1C201E] hover:text-[#47584A] transition-colors shrink-0"
          >
            <span>{language === 'ru' ? 'Смотреть все 6 услуг' : 'View All 6 Disciplines'}</span>
            <ArrowRight className="w-4 h-4 text-[#819584]" />
          </Link>
        </div>

        {/* 6 Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE CLINICAL COMPARISON TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonTool initialPairId="whitening-compare" />
      </section>

      {/* 5. MEET OUR COPENHAGEN SPECIALISTS */}
      <section className="bg-[#FAF9F6] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow={t('team.eyebrow')}
            title={t('team.title')}
            italicWord={t('team.titleItalic')}
            subtitle={t('team.subtitle')}
          />
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#1C201E] hover:text-[#47584A] transition-colors shrink-0"
          >
            <span>{language === 'ru' ? 'Все специалисты студии' : 'View Full Team Profiles'}</span>
            <ArrowRight className="w-4 h-4 text-[#819584]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>
      </section>

      {/* 6. COPENHAGEN STUDIO EXPERIENCE / ATMOSPHERE (Editorial split) */}
      <section className="bg-[#1C201E] text-[#FAF9F6] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow={language === 'ru' ? 'Атмосфера студии' : 'The Studio Atmosphere'}
                title={language === 'ru' ? 'Стоматология, в которой дышится' : 'A dental clinic that breathes'}
                italicWord={language === 'ru' ? 'как в дизайн-галерее.' : 'like a design gallery.'}
                subtitle={language === 'ru' ? 'Студия в историческом здании XVIII века на Бредгаде наполнена дневным светом Копенгагена, полами из датского дуба Dinesen и лаконичной мебелью.' : 'Located in an 18th-century heritage building on Bredgade, our rooms are flooded with natural Copenhagen daylight, tactile Dinesen oak floors, and minimalist Nordic furnishings.'}
                dark
              />

              <div className="space-y-4 pt-4 text-xs sm:text-sm text-[#D7D3C8] divide-y divide-[#2D3A30]">
                <div className="pt-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#819584]/20 flex items-center justify-center shrink-0 text-[#819584]">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FAF9F6]">
                      {language === 'ru' ? 'Приватные консультационные салоны' : 'Private Consultation Salons'}
                    </h4>
                    <p className="text-xs text-[#8F8B82] mt-0.5">
                      {language === 'ru' ? 'Обсуждайте 3D-сканы и варианты лечения в мягких креслах до перехода в клинический кабинет.' : 'Discuss your scans and options sitting in comfortable armchairs before moving to the clinical operatory.'}
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#819584]/20 flex items-center justify-center shrink-0 text-[#819584]">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FAF9F6]">
                      {language === 'ru' ? 'Шумоизолированные лечебные сьюты' : 'Noise-Filtered Treatment Suites'}
                    </h4>
                    <p className="text-xs text-[#8F8B82] mt-0.5">
                      {language === 'ru' ? 'Специальные акустические панели гасят высокочастотные вибрации и звуки моторов.' : 'Specially insulated acoustic partitions block out high-frequency dental motor vibrations.'}
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#819584]/20 flex items-center justify-center shrink-0 text-[#819584]">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FAF9F6]">
                      {language === 'ru' ? 'Органические датские напитки' : 'Organic Danish Refreshments'}
                    </h4>
                    <p className="text-xs text-[#8F8B82] mt-0.5">
                      {language === 'ru' ? 'Теплые травяные сборы, родниковая вода и напитки без пигментов после отбеливания.' : 'Warm herbal teas, sparkling spring water, and non-pigmented post-whitening hydration options.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-wider px-5 py-3 bg-[#819584] text-[#1C201E] hover:bg-[#FAF9F6] transition-colors rounded-sm"
                >
                  <span>{language === 'ru' ? 'Оборудование и пространство' : 'Tour Our Facility & Technology'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                  alt="AURA Operatory Room"
                  className="w-full aspect-3/4 object-cover rounded-sm shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                  alt="Minimalist Dental Lounge"
                  className="w-full aspect-square object-cover rounded-sm shadow-md"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                  alt="Scandinavian Consultation Suite"
                  className="w-full aspect-square object-cover rounded-sm shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Swiss Dental Technology"
                  className="w-full aspect-3/4 object-cover rounded-sm shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'ru' ? 'Вопросы пациентов' : 'Patient Inquiries'}
          title={language === 'ru' ? 'Ответы на частые вопросы о' : 'Common questions about'}
          italicWord={language === 'ru' ? 'визите в AURA.' : 'visiting AURA.'}
          subtitle={language === 'ru' ? 'Все о протоколах для чувствительных зубов, отсутствии спешки, страховках и расположении студии.' : 'Everything you need to know about our dental anxiety protocols, appointment pacing, insurance subsidies, and location.'}
          align="center"
          className="mb-10"
        />

        <Accordion items={generalFaqs.slice(0, 5)} />

        <div className="text-center mt-8">
          <Link
            to="/pricing"
            className="text-xs uppercase font-mono tracking-wider text-[#819584] hover:text-[#47584A] underline underline-offset-4"
          >
            {language === 'ru' ? 'Полный прейскурант и расчет субсидий DKK →' : 'Review Full Pricing Schedule & Fees →'}
          </Link>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3F1EA] border border-[#E8E5DD] p-8 sm:p-14 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#819584]">
              {t('cta.eyebrow')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1C201E]">
              {t('cta.title')}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
              {t('cta.desc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/book"
              className="w-full sm:w-auto text-center text-xs uppercase tracking-widest font-medium px-6 py-3.5 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-colors rounded-sm shadow-xs"
            >
              {t('cta.bookBtn')}
            </Link>
            <a
              href="tel:+4533124080"
              className="w-full sm:w-auto text-center text-xs uppercase tracking-widest font-medium px-5 py-3.5 bg-[#FAF9F6] text-[#1C201E] border border-[#E8E5DD] hover:border-[#1C201E] transition-colors rounded-sm"
            >
              {t('cta.callBtn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
