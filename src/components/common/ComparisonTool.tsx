import React, { useState } from 'react';
import { Check, ArrowRight, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

interface ComparisonPair {
  id: string;
  category: string;
  categoryRu: string;
  title: string;
  titleRu: string;
  optionA: {
    name: string;
    nameRu: string;
    badge: string;
    badgeRu: string;
    idealFor: string;
    idealForRu: string;
    procedureTime: string;
    procedureTimeRu: string;
    invasiveness: string;
    invasivenessRu: string;
    longevity: string;
    longevityRu: string;
    careMaintenance?: string;
    careMaintenanceRu?: string;
    investmentDKK: string;
    investmentDKKRu: string;
    danmarkRefund: string;
    danmarkRefundRu: string;
    pros: string[];
    prosRu: string[];
  };
  optionB: {
    name: string;
    nameRu: string;
    badge: string;
    badgeRu: string;
    idealFor: string;
    idealForRu: string;
    procedureTime: string;
    procedureTimeRu: string;
    invasiveness: string;
    invasivenessRu: string;
    longevity: string;
    longevityRu: string;
    careMaintenance?: string;
    careMaintenanceRu?: string;
    investmentDKK: string;
    investmentDKKRu: string;
    danmarkRefund: string;
    danmarkRefundRu: string;
    pros: string[];
    prosRu: string[];
  };
}

const comparisonData: ComparisonPair[] = [
  {
    id: 'whitening-compare',
    category: 'Whitening Therapy',
    categoryRu: 'Отбеливание',
    title: 'In-Studio LED Brightening vs Custom 3D Home Trays',
    titleRu: 'Кабинетное LED-отбеливание против домашних 3D-кап',
    optionA: {
      name: 'In-Studio Photonic Whitening',
      nameRu: 'Кабинетное фотоотбеливание',
      badge: 'Immediate Results',
      badgeRu: 'Мгновенный результат',
      idealFor: 'Upcoming events, weddings, patients with limited free time',
      idealForRu: 'Предстоящие события, свадьбы, пациенты с плотным графиком',
      procedureTime: 'Single 90-minute appointment',
      procedureTimeRu: 'Один визит (90 минут)',
      invasiveness: 'Zero enamel abrasion (cold LED light)',
      invasivenessRu: 'Без стирания эмали (холодный LED-свет)',
      longevity: '18 – 24 months before refresh',
      longevityRu: '18 – 24 месяца до коррекции',
      investmentDKK: '3,800 DKK complete',
      investmentDKKRu: '3 800 DKK под ключ',
      danmarkRefund: 'Not eligible (Aesthetic)',
      danmarkRefundRu: 'Частный тариф (Эстетика)',
      pros: [
        'Visible 4-8 shade lift in a single afternoon',
        'Direct clinical monitoring ensures zero gum irritation',
        'Desensitizing mineral varnish included'
      ],
      prosRu: [
        'Осветление на 4–8 тонов за один сеанс',
        'Клинический контроль предотвращает раздражение десен',
        'Включает реминерализующий минеральный комплекс'
      ]
    },
    optionB: {
      name: 'Bespoke 3D Vacuum-Formed Home Kit',
      nameRu: 'Индивидуальные 3D-капы для дома',
      badge: 'Gradual & Reusable',
      badgeRu: 'Мягкий темп и многоразовость',
      idealFor: 'Sensitive teeth, night owls, long-term self-maintenance',
      idealForRu: 'Чувствительные зубы, поддержание белизны в удобное время',
      procedureTime: '14 consecutive nights (30-60 min/day)',
      procedureTimeRu: '14 ночей (по 30–60 минут в день)',
      invasiveness: 'Gentle potassium-nitrate buffered carbamide gel',
      invasivenessRu: 'Щадящий гель с нитратом калия',
      longevity: 'Permanent with occasional syringe touch-ups',
      longevityRu: 'Постоянный результат при периодическом обновлении',
      investmentDKK: '3,200 DKK (includes 4 syringes)',
      investmentDKKRu: '3 200 DKK (включая 4 шприца геля)',
      danmarkRefund: 'Not eligible (Aesthetic)',
      danmarkRefundRu: 'Частный тариф (Эстетика)',
      pros: [
        'Complete control over brightening pace and shade depth',
        'Custom 3D-scanned trays are yours to keep for life',
        'Cost-effective refill syringes available year-round'
      ],
      prosRu: [
        'Полный контроль за глубиной оттенка и комфортом',
        '3D-капы остаются у вас на всю жизнь',
        'Экономичные шприцы с гелем доступны круглый год'
      ]
    }
  },
  {
    id: 'veneers-bonding-compare',
    category: 'Cosmetic Dentistry',
    categoryRu: 'Эстетика',
    title: 'Handcrafted Porcelain Veneers vs Composite Edge Bonding',
    titleRu: 'Керамические виниры против композитного бондинга',
    optionA: {
      name: 'Handcrafted Feldspathic Porcelain Veneers',
      nameRu: 'Полевошпатовые виниры ручной работы',
      badge: 'Artisan Longevity',
      badgeRu: 'Премиальная долговечность',
      idealFor: 'Significant smile redesign, intrinsic stains, heavy wear',
      idealForRu: 'Преображение улыбки, стойкая пигментация, истираемость',
      procedureTime: '2 – 3 visits over 10–14 days',
      procedureTimeRu: '2 – 3 визита за 10–14 дней',
      invasiveness: 'Micro-prep (0.3 – 0.5mm enamel contouring)',
      invasivenessRu: 'Микропрепарирование (0.3 – 0.5 мм)',
      longevity: '15 – 25+ years',
      longevityRu: '15 – 25+ лет',
      investmentDKK: 'From 6,800 DKK per tooth',
      investmentDKKRu: 'От 6 800 DKK за зуб',
      danmarkRefund: 'Not eligible',
      danmarkRefundRu: 'Частный тариф',
      pros: [
        'Impervious to coffee, red wine, and tobacco staining',
        'Lifelike internal light translucency crafted by master ceramist',
        'Trial Smile mockup previewed in mouth before placement'
      ],
      prosRu: [
        'Абсолютно устойчивы к кофе, чаю и красящим продуктам',
        'Естественная светопроницаемость живой эмали от мастера-керамиста',
        'Примерка макета Trial Smile во рту до фиксации'
      ]
    },
    optionB: {
      name: 'Direct Biomimetic Composite Bonding',
      nameRu: 'Прямой композитный бондинг',
      badge: 'Zero-Prep Single Visit',
      badgeRu: 'Без обтачивания за 1 визит',
      idealFor: 'Small chips, narrow diastema gaps, youthful minor corrections',
      idealForRu: 'Небольшие сколы, диастемы, коррекция неровностей',
      procedureTime: 'Single 60–90 minute session',
      procedureTimeRu: 'Один визит (60–90 минут)',
      invasiveness: 'Ultra-conservative (often 0% tooth reduction)',
      invasivenessRu: 'Максимально консервативно (0% спиливания)',
      longevity: '5 – 8 years (can be polished or repaired)',
      longevityRu: '5 – 8 лет (легко полируется)',
      investmentDKK: 'From 2,200 DKK per tooth',
      investmentDKKRu: 'От 2 200 DKK за зуб',
      danmarkRefund: 'Not eligible',
      danmarkRefundRu: 'Частный тариф',
      pros: [
        'Completely reversible and additive procedure',
        'Completed in one visit with instant results',
        'Lower initial financial investment'
      ],
      prosRu: [
        'Обратимая процедура с сохранением родных тканей',
        'Готовый результат за один день',
        'Доступная начальная стоимость'
      ]
    }
  },
  {
    id: 'ortho-compare',
    category: 'Orthodontics',
    categoryRu: 'Ортодонтия',
    title: 'Clear Invisible Aligners vs Lingual/Ceramic Braces',
    titleRu: 'Прозрачные элайнеры против брекетов',
    optionA: {
      name: 'AURA Clear Aligners',
      nameRu: 'Прозрачные элайнеры AURA',
      badge: 'Removable & Discrete',
      badgeRu: 'Съемные и незаметные',
      idealFor: 'Active adults, professionals, aesthetic convenience',
      idealForRu: 'Взрослые, деловые люди, ценящие эстетику и комфорт',
      procedureTime: '6 – 12 months average duration',
      procedureTimeRu: '6 – 12 месяцев средний срок',
      invasiveness: 'Smooth biocompatible polymer, tooth-colored composite grips',
      invasivenessRu: 'Гладкий полимер, незаметные эстетические аттачменты',
      longevity: 'Permanent with nocturnal retainer',
      longevityRu: 'Навсегда при ношении ночного ретейнера',
      careMaintenance: 'Wear 20-22h daily; wash in lukewarm water',
      careMaintenanceRu: 'Ношение 20–22 ч/день; промывание теплой водой',
      investmentDKK: 'From 24,000 DKK complete',
      investmentDKKRu: 'От 24 000 DKK за курс',
      danmarkRefund: 'Eligible (up to 3,500 DKK)',
      danmarkRefundRu: 'Возврат до 3 500 DKK',
      pros: [
        'Virtually invisible at normal conversational distances',
        'No dietary restrictions; remove freely to eat and floss',
        'Digital 3D simulation shows progress week-by-week'
      ],
      prosRu: [
        'Практически невидимы при общении',
        'Никаких ограничений в еде: снимаются во время еды и чистки',
        '3D-моделирование результата до начала лечения'
      ]
    },
    optionB: {
      name: 'Ceramic Fixed Brackets',
      nameRu: 'Керамические брекет-системы',
      badge: 'Continuous Engagement',
      badgeRu: 'Постоянное воздействие',
      idealFor: 'Severe skeletal misalignment, major root rotations',
      idealForRu: 'Сложные скелетные аномалии, глубокие повороты корней',
      procedureTime: '12 – 24 months duration',
      procedureTimeRu: '12 – 24 месяца',
      invasiveness: 'Bonded ceramic brackets and archwires',
      invasivenessRu: 'Фиксированные замочки и дуги',
      longevity: 'Permanent with nocturnal retainer',
      longevityRu: 'Навсегда с ретенцией',
      careMaintenance: 'Special interdental brushes & water flosser',
      careMaintenanceRu: 'Ершики и ирригатор',
      investmentDKK: 'From 32,000 DKK',
      investmentDKKRu: 'От 32 000 DKK',
      danmarkRefund: 'Eligible (up to 3,500 DKK)',
      danmarkRefundRu: 'Возврат до 3 500 DKK',
      pros: [
        'Works 24 hours without relying on patient compliance',
        'Capable of complex vertical skeletal extrusions',
        'Tooth-colored ceramic blends better than metal brackets'
      ],
      prosRu: [
        'Работают 24 часа без зависимости от дисциплины пациента',
        'Справляются со сложными перемещениями корней',
        'Менее заметны, чем металлические аналоги'
      ]
    }
  },
  {
    id: 'implant-bridge-compare',
    category: 'Tooth Replacement',
    categoryRu: 'Имплантация',
    title: 'Swiss Titanium Dental Implant vs 3-Unit Ceramic Bridge',
    titleRu: 'Швейцарский имплантат против мостовидного протеза',
    optionA: {
      name: 'Swiss Guided Dental Implant + Crown',
      nameRu: 'Швейцарский имплантат + коронка',
      badge: 'Independent Foundation',
      badgeRu: 'Автономная опора',
      idealFor: 'Single missing tooth with healthy adjacent neighbors',
      idealForRu: 'Утрата зуба при здоровых соседних зубах',
      procedureTime: '60 min surgery + 8-12 wks biological integration',
      procedureTimeRu: '60 мин операция + 8–12 недель приживление',
      invasiveness: 'Computer-guided keyhole bone placement',
      invasivenessRu: 'Навигационная малоинвазивная установка',
      longevity: '25+ years to lifetime',
      longevityRu: '25+ лет до пожизненного срока',
      careMaintenance: 'Standard flossing and regular dental cleanings',
      careMaintenanceRu: 'Обычная чистка и профилактика',
      investmentDKK: '16,500 DKK (implant + custom ceramic crown)',
      investmentDKKRu: '16 500 DKK (имплантат + коронка под ключ)',
      danmarkRefund: 'Eligible (up to 2,400 DKK)',
      danmarkRefundRu: 'Возврат до 2 400 DKK',
      pros: [
        'Does NOT touch or grind neighboring healthy teeth',
        'Stimulates jawbone density, stopping facial bone collapse',
        'Feels and cleans exactly like a natural independent tooth'
      ],
      prosRu: [
        'НЕ требует обтачивания соседних здоровых зубов',
        'Предотвращает атрофию челюстной кости',
        'Ощущается и очищается в точности как родной зуб'
      ]
    },
    optionB: {
      name: 'Traditional 3-Unit Dental Bridge',
      nameRu: 'Керамический мостовидный протез',
      badge: 'Immediate Fixed Span',
      badgeRu: 'Фиксированная конструкция',
      idealFor: 'When neighboring teeth already have large failing fillings',
      idealForRu: 'Когда соседние зубы уже сильно разрушены пломбами',
      procedureTime: '2 appointments over 2 weeks',
      procedureTimeRu: '2 визита за 2 недели',
      invasiveness: 'Adjacent anchor teeth reshaped for crowns',
      invasivenessRu: 'Обтачивание соседних зубов под коронки',
      longevity: '10 – 15 years average lifespan',
      longevityRu: '10 – 15 лет средний срок службы',
      careMaintenance: 'Requires specialized bridge floss threaders under pontic',
      careMaintenanceRu: 'Специальные флоссы под промежуточную часть',
      investmentDKK: '14,000 DKK complete',
      investmentDKKRu: '14 000 DKK под ключ',
      danmarkRefund: 'Eligible (up to 2,000 DKK)',
      danmarkRefundRu: 'Возврат до 2 000 DKK',
      pros: [
        'No surgical integration waiting period required',
        'Restores chewing function within 14 days',
        'Strengthens adjacent teeth if they are already heavily filled'
      ],
      prosRu: [
        'Не требует ожидания остеоинтеграции кости',
        'Восстанавливает жевание за 14 дней',
        'Укрепляет соседние зубы, если они были запломбированы'
      ]
    }
  }
];

interface ComparisonToolProps {
  initialPairId?: string;
  className?: string;
}

export const ComparisonTool: React.FC<ComparisonToolProps> = ({
  initialPairId = 'whitening-compare',
  className = '',
}) => {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  const [selectedPairId, setSelectedPairId] = useState<string>(initialPairId);
  const activePair = comparisonData.find((p) => p.id === selectedPairId) || comparisonData[0];

  return (
    <div className={`bg-[#F3F1EA] border border-[#E8E5DD] p-6 sm:p-8 rounded-sm ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#47584A]">
            <Scale className="w-4 h-4 text-[#819584]" />
            <span>{isRu ? 'Клиническое сравнение методик' : 'Interactive Clinical Comparison'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
            {isRu ? activePair.titleRu : activePair.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#5C645F] mt-1">
            {isRu ? 'Сравните показания, сроки, долговечность и стоимость.' : 'Compare indications, timelines, longevity, and indicative fees side-by-side.'}
          </p>
        </div>

        {/* Comparison Selector Dropdown / Pills */}
        <div className="flex flex-wrap gap-2">
          {comparisonData.map((pair) => (
            <button
              key={pair.id}
              onClick={() => setSelectedPairId(pair.id)}
              className={`text-xs px-3 py-1.5 rounded-sm transition-all text-left ${
                selectedPairId === pair.id
                  ? 'bg-[#1C201E] text-[#FAF9F6] font-medium shadow-xs'
                  : 'bg-[#FAF9F6] text-[#5C645F] hover:text-[#1C201E] border border-[#E8E5DD]'
              }`}
            >
              {isRu ? pair.categoryRu : pair.category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Option A */}
        <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 rounded-sm flex flex-col justify-between relative group hover:border-[#819584] transition-colors">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#E8EFE9] text-[#2D3A30] rounded-xs font-medium">
                {isRu ? activePair.optionA.badgeRu : activePair.optionA.badge}
              </span>
              <span className="text-xs font-mono text-[#819584] font-medium">
                {isRu ? 'Вариант 01' : 'Option 01'}
              </span>
            </div>

            <h4 className="text-lg font-medium text-[#1C201E] leading-snug">
              {isRu ? activePair.optionA.nameRu : activePair.optionA.name}
            </h4>

            {/* Comparison Metrics */}
            <div className="space-y-3 pt-2 text-xs divide-y divide-[#E8E5DD]/60">
              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                  {isRu ? 'Оптимально подходит' : 'Best Suited For'}
                </span>
                <span className="text-[#1C201E] mt-0.5 block font-medium">
                  {isRu ? activePair.optionA.idealForRu : activePair.optionA.idealFor}
                </span>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                    {isRu ? 'Длительность' : 'Duration'}
                  </span>
                  <span className="text-[#1C201E] mt-0.5 block">
                    {isRu ? activePair.optionA.procedureTimeRu : activePair.optionA.procedureTime}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                    {isRu ? 'Срок службы' : 'Longevity'}
                  </span>
                  <span className="text-[#1C201E] mt-0.5 block">
                    {isRu ? activePair.optionA.longevityRu : activePair.optionA.longevity}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                  {isRu ? 'Инвазивность и методика' : 'Invasiveness / Protocol'}
                </span>
                <span className="text-[#1C201E] mt-0.5 block">
                  {isRu ? activePair.optionA.invasivenessRu : activePair.optionA.invasiveness}
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                  {isRu ? 'Индикативный тариф' : 'Indicative Fee & Subsidy'}
                </span>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-sm font-semibold text-[#1C201E]">
                    {isRu ? activePair.optionA.investmentDKKRu : activePair.optionA.investmentDKK}
                  </span>
                  <span className="text-[11px] text-[#47584A]">
                    {isRu ? activePair.optionA.danmarkRefundRu : activePair.optionA.danmarkRefund}
                  </span>
                </div>
              </div>
            </div>

            {/* Clinical Highlights */}
            <div className="pt-3 border-t border-[#E8E5DD]">
              <span className="text-[11px] font-mono text-[#8F8B82] uppercase block mb-2">
                {isRu ? 'Клинические преимущества' : 'Clinical Highlights'}
              </span>
              <ul className="space-y-1.5 text-xs text-[#5C645F]">
                {(isRu ? activePair.optionA.prosRu : activePair.optionA.pros).map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#819584] shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Option B */}
        <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 rounded-sm flex flex-col justify-between relative group hover:border-[#819584] transition-colors">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#E8E5DD] text-[#3D4440] rounded-xs font-medium">
                {isRu ? activePair.optionB.badgeRu : activePair.optionB.badge}
              </span>
              <span className="text-xs font-mono text-[#819584] font-medium">
                {isRu ? 'Вариант 02' : 'Option 02'}
              </span>
            </div>

            <h4 className="text-lg font-medium text-[#1C201E] leading-snug">
              {isRu ? activePair.optionB.nameRu : activePair.optionB.name}
            </h4>

            {/* Comparison Metrics */}
            <div className="space-y-3 pt-2 text-xs divide-y divide-[#E8E5DD]/60">
              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                  {isRu ? 'Оптимально подходит' : 'Best Suited For'}
                </span>
                <span className="text-[#1C201E] mt-0.5 block font-medium">
                  {isRu ? activePair.optionB.idealForRu : activePair.optionB.idealFor}
                </span>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                    {isRu ? 'Длительность' : 'Duration'}
                  </span>
                  <span className="text-[#1C201E] mt-0.5 block">
                    {isRu ? activePair.optionB.procedureTimeRu : activePair.optionB.procedureTime}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                    {isRu ? 'Срок службы' : 'Longevity'}
                  </span>
                  <span className="text-[#1C201E] mt-0.5 block">
                    {isRu ? activePair.optionB.longevityRu : activePair.optionB.longevity}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                  {isRu ? 'Инвазивность и методика' : 'Invasiveness / Protocol'}
                </span>
                <span className="text-[#1C201E] mt-0.5 block">
                  {isRu ? activePair.optionB.invasivenessRu : activePair.optionB.invasiveness}
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                  {isRu ? 'Индикативный тариф' : 'Indicative Fee & Subsidy'}
                </span>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-sm font-semibold text-[#1C201E]">
                    {isRu ? activePair.optionB.investmentDKKRu : activePair.optionB.investmentDKK}
                  </span>
                  <span className="text-[11px] text-[#47584A]">
                    {isRu ? activePair.optionB.danmarkRefundRu : activePair.optionB.danmarkRefund}
                  </span>
                </div>
              </div>
            </div>

            {/* Clinical Highlights */}
            <div className="pt-3 border-t border-[#E8E5DD]">
              <span className="text-[11px] font-mono text-[#8F8B82] uppercase block mb-2">
                {isRu ? 'Клинические преимущества' : 'Clinical Highlights'}
              </span>
              <ul className="space-y-1.5 text-xs text-[#5C645F]">
                {(isRu ? activePair.optionB.prosRu : activePair.optionB.pros).map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#819584] shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Booking CTA prompt */}
      <div className="mt-8 pt-6 border-t border-[#E8E5DD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-[#5C645F] max-w-lg">
          {isRu
            ? 'Сомневаетесь, какая методика подойдет лучше всего? Мы проводим 3D-диагностику и подбираем тактику лечения до принятия решения.'
            : 'Unsure which treatment pathway fits your oral physiology best? We conduct thorough 3D diagnostic evaluations and present transparent treatment options before you decide.'}
        </p>
        <Link
          to="/book"
          className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-wider px-4 py-2.5 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-colors rounded-sm shrink-0"
        >
          <span>{isRu ? 'Записаться на 3D-диагностику' : 'Book Diagnostic Consult'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
