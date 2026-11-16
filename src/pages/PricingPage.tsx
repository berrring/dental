import React, { useState } from 'react';
import {
  ShieldCheck,
  CreditCard,
} from 'lucide-react';
import { pricingCategories } from '../data/pricing';
import { getLocalizedPriceList } from '../data/localizedData';
import { SectionHeading } from '../components/common/SectionHeading';
import { CostEstimator } from '../components/common/CostEstimator';
import { Accordion } from '../components/common/Accordion';
import { DemoNotice } from '../components/common/DemoNotice';
import { useLanguage } from '../context/LanguageContext';

export const PricingPage: React.FC = () => {
  const { language, t } = useLanguage();
  const priceList = getLocalizedPriceList(language);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const pricingFaqs = language === 'ru' ? [
    {
      question: 'Как формируются цены на стоматологию в Дании?',
      answer: 'В Дании базовая диагностика, чистки и профилактика регулируются национальным коллективным соглашением между Tandlægeforeningen и датскими регионами с едиными базовыми тарифами. Сложная терапия, эстетика, элайнеры и имплантация тарифицируются частными клиниками свободно на основании используемых швейцарских материалов и времени врача.'
    },
    {
      question: 'Что такое Sygeforsikringen "danmark" и сколько можно вернуть?',
      answer: 'Sygeforsikringen "danmark" — крупнейшая датская касса медицинского страхования. Участники групп 1, 2 и 5 получают фиксированные субсидии на диагностику, чистки, пломбы и хирургию. Мы отправляем отчет в систему в день визита, и компенсация поступает напрямую на ваш NemKonto.'
    },
    {
      question: 'Возможна ли оплата дорогостоящих процедур в рассрочку?',
      answer: 'Да. Мы сотрудничаем с датскими финансовыми партнерами (Sundhedskonto), предоставляя беспроцентную рассрочку на 6, 12 или 24 месяца для комплексных планов лечения свыше 5 000 DKK с одобрением через MitID.'
    },
    {
      question: 'Что делать, если нужно перенести или отменить прием?',
      answer: 'Мы просим предупреждать об отмене не позднее чем за 24 часа, чтобы предложить время ожидающим пациентам. При отмене менее чем за 24 часа может взиматься стандартный сбор в соответствии с правилами Ассоциации стоматологов Дании.'
    }
  ] : [
    {
      question: 'How do dental prices work in Denmark?',
      answer: 'In Denmark, basic diagnostic examinations, simple cleanings, and preventive treatments are governed by a national collective agreement (overenskomst) between Tandlægeforeningen and Regionerne, ensuring uniform baseline fees. Advanced restorative, cosmetic, orthodontic, and implant procedures are freely priced ("frie ydelser") by private clinics based on materials, technology, and clinical time.'
    },
    {
      question: 'What is Sygeforsikringen "danmark" and how much will I get back?',
      answer: 'Sygeforsikringen "danmark" is Denmark\'s largest private health insurance fund. If you belong to Group 1, 2, or 5, you receive fixed subsidies on cleanings, examinations, fillings, root canals, and surgery. At AURA, we electronically transmit your bill directly to "danmark" immediately after your visit, and your refund is deposited automatically into your bank account.'
    },
    {
      question: 'Can I pay for extensive treatments in monthly installments?',
      answer: 'Yes. We partner with authorized Danish healthcare financing providers (such as Sundhedskonto) to offer interest-free monthly installment plans over 6, 12, or 24 months for any treatment plan over 5,000 DKK.'
    },
    {
      question: 'What happens if I need to cancel or reschedule my appointment?',
      answer: 'We request at least 24 hours notice for any cancellations or changes so we may offer the time slot to patients on our waiting list. Cancellations with less than 24 hours notice or missed appointments may incur a standard late cancellation fee in accordance with Danish Dental Association guidelines.'
    }
  ];

  const filteredPrices =
    activeCategory === 'all'
      ? priceList
      : priceList.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-b border-[#E8E5DD] pb-10">
          <SectionHeading
            eyebrow={t('pricing.eyebrow')}
            title={t('pricing.title')}
            italicWord={t('pricing.titleItalic')}
            subtitle={t('pricing.subtitle')}
          />

          <div className="mt-8 flex flex-wrap gap-4 text-xs text-[#5C645F]">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F3F1EA] rounded-xs border border-[#E8E5DD]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#819584]" />
              {language === 'ru' ? 'Прямой электронный расчет субсидий "danmark" (NemKonto)' : 'Direct Electronic "danmark" Claims (NemKonto)'}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F3F1EA] rounded-xs border border-[#E8E5DD]">
              <CreditCard className="w-3.5 h-3.5 text-[#819584]" />
              {language === 'ru' ? 'Беспроцентная рассрочка 0% (от 6 до 24 мес)' : '0% Interest Installments Available (6 - 24 mo)'}
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Fee Estimator Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimator />
      </section>

      {/* Comprehensive Price Schedule Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#819584]">
              {language === 'ru' ? 'Подробный прейскурант' : 'Itemized Fee Schedule'}
            </span>
            <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
              {language === 'ru' ? 'Индикативные тарифы на лечение' : 'Indicative Procedure Tariffs'}
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`text-xs px-3 py-1.5 rounded-sm transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#1C201E] text-[#FAF9F6] font-medium'
                  : 'bg-[#F3F1EA] text-[#5C645F] hover:text-[#1C201E] border border-[#E8E5DD]'
              }`}
            >
              {language === 'ru' ? 'Все категории' : 'All Categories'}
            </button>
            {pricingCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1C201E] text-[#FAF9F6] font-medium'
                    : 'bg-[#F3F1EA] text-[#5C645F] hover:text-[#1C201E] border border-[#E8E5DD]'
                }`}
              >
                {cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Schedule Table */}
        <div className="bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F3F1EA] border-b border-[#E8E5DD] font-mono text-[11px] uppercase tracking-wider text-[#8F8B82]">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">{language === 'ru' ? 'Наименование процедуры' : 'Treatment Description'}</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">{language === 'ru' ? 'Категория' : 'Category'}</th>
                  <th className="py-3.5 px-4 text-right">{language === 'ru' ? 'Тариф (DKK)' : 'Fee (DKK)'}</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">{language === 'ru' ? 'Возврат "danmark"' : '"danmark" Refund'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E5DD]">
                {filteredPrices.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[#F3F1EA]/50 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-medium text-[#1C201E] flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.popular && (
                          <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 bg-[#E8EFE9] text-[#2D3A30] rounded-xs font-semibold">
                            {language === 'ru' ? 'Популярно' : 'Common'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#5C645F] mt-1 max-w-lg leading-relaxed">
                        {item.description}
                      </p>
                      {item.note && (
                        <p className="text-[11px] text-[#819584] mt-0.5 font-mono">
                          {item.note}
                        </p>
                      )}
                    </td>

                    <td className="py-4 px-4 hidden md:table-cell text-xs text-[#8F8B82] font-mono">
                      {item.category}
                    </td>

                    <td className="py-4 px-4 text-right font-medium text-[#1C201E] font-mono shrink-0">
                      {item.priceDKK.toLocaleString('da-DK')} DKK
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-right shrink-0">
                      {item.danmarkReimbursementDKK ? (
                        <span className="text-xs font-mono font-medium text-[#47584A] bg-[#E8EFE9] px-2 py-0.5 rounded-xs inline-block">
                          ~{item.danmarkReimbursementDKK} DKK
                        </span>
                      ) : (
                        <span className="text-xs text-[#8F8B82] font-mono">
                          {language === 'ru' ? 'Частный тариф' : 'Private'}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <DemoNotice />
      </section>

      {/* Insurance & Financing Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Danmark */}
          <div className="bg-[#F3F1EA] border border-[#E8E5DD] p-8 rounded-sm space-y-4">
            <div className="w-10 h-10 rounded-sm bg-[#FAF9F6] border border-[#E8E5DD] flex items-center justify-center text-[#819584]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-medium text-[#1C201E]">
              {language === 'ru' ? 'Субсидии Sygeforsikringen "danmark"' : 'Sygeforsikringen "danmark" Subsidies'}
            </h4>
            <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Наша система подключена напрямую к датскому центральному порталу здравоохранения. Сразу после приема администратор отправляет квитанцию, и компенсация поступает на ваш NemKonto без заполнения бланков.' : 'As an authorized Danish dental practice, our software is connected directly to the central Danish health authority portal. When your appointment finishes, our reception team submits your itemized receipt electronically. You do not need to fill out any forms or mail invoices.'}
            </p>
            <div className="pt-2 text-xs text-[#47584A] font-medium">
              {language === 'ru' ? 'Действительно для участников групп 1, 2 и 5.' : 'Applicable to Group 1, Group 2, and Group 5 members.'}
            </div>
          </div>

          {/* Card 2: Financing */}
          <div className="bg-[#F3F1EA] border border-[#E8E5DD] p-8 rounded-sm space-y-4">
            <div className="w-10 h-10 rounded-sm bg-[#FAF9F6] border border-[#E8E5DD] flex items-center justify-center text-[#819584]">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-medium text-[#1C201E]">
              {language === 'ru' ? 'Беспроцентная рассрочка (Sundhedskonto)' : 'Flexible Installment Financing (Sundhedskonto)'}
            </h4>
            <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Финансовые вопросы не должны стоять на пути к здоровой улыбке. Мы предлагаем беспроцентную рассрочку от 6 до 24 месяцев на элайнеры, имплантацию и керамические виниры с мгновенным подтверждением через MitID.' : 'We believe financial considerations should never prevent you from receiving top-tier dental care. We partner with Danish medical lenders to provide interest-free 6 to 24-month payment arrangements for clear aligners, implants, and veneers, with instant digital MitID pre-approval.'}
            </p>
            <div className="pt-2 text-xs text-[#47584A] font-medium">
              {language === 'ru' ? 'Доступно для планов лечения от 5 000 DKK.' : 'Available on treatment plans over 5,000 DKK.'}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={language === 'ru' ? 'Финансовая прозрачность' : 'Financial Clarity'}
          title={language === 'ru' ? 'Частые вопросы о' : 'Common questions regarding'}
          italicWord={language === 'ru' ? 'тарифах и страховке.' : 'fees & insurance.'}
          align="center"
          className="mb-10"
        />
        <Accordion items={pricingFaqs} />
      </section>
    </div>
  );
};
