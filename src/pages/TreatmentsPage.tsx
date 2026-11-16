import React, { useState, useMemo } from 'react';
import { Search, ShieldCheck, Clock } from 'lucide-react';
import { getLocalizedTreatments } from '../data/localizedData';
import { TreatmentCard } from '../components/common/TreatmentCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { ComparisonTool } from '../components/common/ComparisonTool';
import { useLanguage } from '../context/LanguageContext';

export const TreatmentsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const treatments = getLocalizedTreatments(language);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: t('treatments.filterAll') },
    { id: 'preventive', label: t('treatments.filterPreventive') },
    { id: 'restorative', label: t('treatments.filterRestorative') },
    { id: 'cosmetic', label: t('treatments.filterCosmetic') },
    { id: 'orthodontics', label: t('treatments.filterOrtho') },
    { id: 'implants', label: t('treatments.filterImplants') },
  ];

  const filteredTreatments = useMemo(() => {
    return treatments.filter((treatment) => {
      const matchesCategory =
        selectedCategory === 'all' || treatment.category === selectedCategory;
      const matchesSearch =
        treatment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [treatments, selectedCategory, searchQuery]);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Page Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-b border-[#E8E5DD] pb-10">
          <SectionHeading
            eyebrow={t('treatments.eyebrow')}
            title={t('treatments.title')}
            italicWord={t('treatments.titleItalic')}
            subtitle={t('treatments.subtitle')}
          />

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[#5C645F]">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F3F1EA] rounded-xs border border-[#E8E5DD]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#819584]" />
              {language === 'ru' ? 'Официальное электронное возмещение Sygeforsikringen "danmark"' : 'Authorized Sygeforsikringen "danmark" Electronic Reporting'}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F3F1EA] rounded-xs border border-[#E8E5DD]">
              <Clock className="w-3.5 h-3.5 text-[#819584]" />
              {language === 'ru' ? 'Концепция Slow Dentistry (буфер 15 минут между пациентами)' : 'Slow Dentistry Pacing (15-min buffers between patients)'}
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-3.5 py-2 rounded-sm transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#1C201E] text-[#FAF9F6] font-medium shadow-xs'
                    : 'bg-[#F3F1EA] text-[#5C645F] hover:text-[#1C201E] border border-[#E8E5DD]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] max-w-xs">
            <Search className="w-4 h-4 text-[#8F8B82] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('treatments.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm text-xs text-[#1C201E] placeholder-[#8F8B82] focus:outline-none focus:border-[#819584]"
            />
          </div>
        </div>

        {/* Treatment Directory Results Grid */}
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F3F1EA] border border-[#E8E5DD] rounded-sm p-8 space-y-3">
            <p className="text-sm text-[#1C201E] font-medium">
              {language === 'ru' ? `По запросу «${searchQuery}» ничего не найдено.` : `No matching treatments found for "${searchQuery}".`}
            </p>
            <p className="text-xs text-[#8F8B82]">
              {language === 'ru' ? 'Попробуйте: «чистка», «виниры», «элайнеры» или «имплантация»' : 'Try searching for "cleaning", "veneers", "aligners", or "implants".'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs uppercase font-mono tracking-wider text-[#819584] hover:text-[#47584A] underline mt-2"
            >
              {language === 'ru' ? 'Сбросить фильтры' : 'Reset Filters'}
            </button>
          </div>
        )}
      </section>

      {/* Interactive Clinical Comparison Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'ru' ? 'Сравнительный анализ' : 'Side-by-Side Analysis'}
          title={language === 'ru' ? 'Сравните методики, чтобы выбрать' : 'Compare treatments to discover'}
          italicWord={language === 'ru' ? 'подходящий вариант.' : 'the right fit.'}
          subtitle={language === 'ru' ? 'Оцените различия в долговечности, инвазивности, сроках лечения и стоимости.' : 'Explore the differences in longevity, procedural invasiveness, treatment duration, and indicative investment.'}
          className="mb-8"
        />
        <ComparisonTool initialPairId="veneers-bonding-compare" />
      </section>

      {/* Patient Experience Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-8 sm:p-12 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#819584]">
              {language === 'ru' ? '01 • Первичный 3D-скан' : '01 • Initial 3D Scan'}
            </span>
            <h4 className="text-base font-medium text-[#1C201E]">
              {language === 'ru' ? 'Только цифровые слепки' : 'Digital Impressions Only'}
            </h4>
            <p className="text-xs text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Без неприятной слепочной массы и рвотного рефлекса. Сканер за 2 минуты строит точную цифровую модель прикуса.' : 'No choking dental putty or trays. A slim wand scans millions of data points to generate an instant 3D model of your bite.'}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#819584]">
              {language === 'ru' ? '02 • Прозрачный план' : '02 • Transparent Planning'}
            </span>
            <h4 className="text-base font-medium text-[#1C201E]">
              {language === 'ru' ? 'Без непредвиденных расходов' : 'Zero Unexpected Costs'}
            </h4>
            <p className="text-xs text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Вы получаете подробный план лечения с расчетом тарифов DKK, субсидий "danmark" и графика визитов.' : 'You receive a written clinical plan with explicit DKK fees, expected Sygeforsikringen "danmark" rebates, and visit timelines.'}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#819584]">
              {language === 'ru' ? '03 • Спокойный темп' : '03 • Paced Comfort'}
            </span>
            <h4 className="text-base font-medium text-[#1C201E]">
              {language === 'ru' ? 'Полный контроль в ваших руках' : 'Continuous Patient Autonomy'}
            </h4>
            <p className="text-xs text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Вы задаете ритм приема. Поднимите левую руку в любой момент — и врач мгновенно сделает паузу.' : 'You dictate the pace. If at any moment you need to rest, rinse, or ask questions, raise your left hand and we pause instantly.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
