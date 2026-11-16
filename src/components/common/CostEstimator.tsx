import React, { useState } from 'react';
import { Calculator, ShieldCheck, Check, ArrowRight, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getLocalizedPriceList } from '../../data/localizedData';
import { useLanguage } from '../../context/LanguageContext';

export const CostEstimator: React.FC = () => {
  const { language, t } = useLanguage();
  const priceList = getLocalizedPriceList(language);

  const [selectedIds, setSelectedIds] = useState<string[]>([
    'p-exam-full',
    'p-airflow-hygiene',
  ]);
  const [isDanmarkMember, setIsDanmarkMember] = useState<boolean>(true);
  const [danmarkGroup, setDanmarkGroup] = useState<'group1' | 'group2' | 'group5'>('group5');

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = priceList.filter((item) => selectedIds.includes(item.id));

  const grossTotal = selectedItems.reduce((acc, curr) => acc + curr.priceDKK, 0);

  // Approximate multiplier based on "danmark" group (group 1 & 2 receive higher subsidies for crowns/surgery)
  const groupMultiplier = danmarkGroup === 'group1' ? 1.15 : danmarkGroup === 'group2' ? 1.1 : 1.0;

  const rawReimbursement = selectedItems.reduce(
    (acc, curr) => acc + (curr.danmarkReimbursementDKK || 0),
    0
  );

  const danmarkTotal = isDanmarkMember ? Math.round(rawReimbursement * groupMultiplier) : 0;
  const netTotal = Math.max(0, grossTotal - danmarkTotal);
  const monthly12Installment = Math.round(netTotal / 12);

  return (
    <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 sm:p-8 rounded-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E5DD]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#47584A]">
            <Calculator className="w-4 h-4 text-[#819584]" />
            <span>{t('pricing.calcEyebrow')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
            {t('pricing.calcTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-[#5C645F] mt-1">
            {t('pricing.calcSubtitle')}
          </p>
        </div>

        <button
          onClick={() => setSelectedIds(['p-exam-full', 'p-airflow-hygiene'])}
          className="inline-flex items-center gap-1.5 text-xs text-[#8F8B82] hover:text-[#1C201E] transition-colors self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{t('pricing.resetSelection')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Selectable Procedures */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#8F8B82] uppercase pb-1">
            <span>{t('pricing.availableProcedures')}</span>
            <span>{t('pricing.feeDKK')}</span>
          </div>

          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-2">
            {priceList.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-3 sm:p-3.5 border rounded-sm cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#E8EFE9]/40 border-[#819584] text-[#1C201E]'
                      : 'bg-[#FAF9F6] border-[#E8E5DD] hover:border-[#819584]/50 text-[#5C645F]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-4 h-4 mt-0.5 rounded-xs border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#47584A] border-[#47584A] text-[#FAF9F6]'
                          : 'border-[#D7D3C8] bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <p className={`text-xs sm:text-sm font-medium ${isSelected ? 'text-[#1C201E]' : 'text-[#3D4440]'}`}>
                        {item.name}
                      </p>
                      <p className="text-[11px] text-[#8F8B82] mt-0.5 line-clamp-1">
                        {item.description}
                      </p>
                      {item.danmarkReimbursementDKK && (
                        <span className="text-[10px] text-[#47584A] font-mono mt-1 inline-block">
                          ~{item.danmarkReimbursementDKK} DKK {language === 'ru' ? 'субсидия "danmark"' : '"danmark" subsidy'}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs sm:text-sm font-medium text-[#1C201E]">
                      {item.priceDKK.toLocaleString('da-DK')} DKK
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Calculation Summary */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#F3F1EA] border border-[#E8E5DD] p-6 rounded-sm">
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1C201E] border-b border-[#E8E5DD] pb-3">
              {t('pricing.breakdown')}
            </h4>

            {/* Insurance Toggle */}
            <div className="bg-[#FAF9F6] p-3.5 border border-[#E8E5DD] rounded-sm space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2 text-xs font-medium text-[#1C201E]">
                  <ShieldCheck className="w-4 h-4 text-[#819584]" />
                  Sygeforsikringen "danmark"
                </span>
                <input
                  type="checkbox"
                  checked={isDanmarkMember}
                  onChange={(e) => setIsDanmarkMember(e.target.checked)}
                  className="w-4 h-4 accent-[#47584A] cursor-pointer"
                />
              </label>

              {isDanmarkMember && (
                <div className="pt-2 border-t border-[#E8E5DD] flex items-center justify-between text-xs">
                  <span className="text-[#8F8B82]">{language === 'ru' ? 'Страховая группа:' : 'Membership Group:'}</span>
                  <select
                    value={danmarkGroup}
                    onChange={(e) => setDanmarkGroup(e.target.value as any)}
                    className="text-xs bg-[#FAF9F6] border border-[#E8E5DD] rounded-xs px-2 py-1 text-[#1C201E] focus:outline-none focus:border-[#819584]"
                  >
                    <option value="group5">{language === 'ru' ? 'Группа 5 (Стандарт)' : 'Group 5 (Standard)'}</option>
                    <option value="group1">{language === 'ru' ? 'Группа 1 (Максимум)' : 'Group 1 (Comprehensive)'}</option>
                    <option value="group2">{language === 'ru' ? 'Группа 2' : 'Group 2'}</option>
                  </select>
                </div>
              )}
            </div>

            {/* Selected Items Counter */}
            <div className="text-xs text-[#5C645F] space-y-2">
              <div className="flex justify-between">
                <span>{language === 'ru' ? 'Выбрано процедур' : 'Selected Procedures'} ({selectedItems.length}):</span>
                <span className="font-medium text-[#1C201E]">
                  {grossTotal.toLocaleString('da-DK')} DKK
                </span>
              </div>

              {isDanmarkMember && danmarkTotal > 0 && (
                <div className="flex justify-between text-[#47584A]">
                  <span>{language === 'ru' ? 'Расчетная субсидия "danmark":' : 'Estimated "danmark" Reimbursement:'}</span>
                  <span className="font-medium font-mono">
                    - {danmarkTotal.toLocaleString('da-DK')} DKK
                  </span>
                </div>
              )}
            </div>

            {/* Net Total Display */}
            <div className="p-4 bg-[#FAF9F6] border-t-2 border-[#819584] rounded-sm space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider text-[#8F8B82] font-mono">
                  {t('pricing.netTotal')}
                </span>
                <span className="text-2xl font-normal text-[#1C201E]">
                  {netTotal.toLocaleString('da-DK')}{' '}
                  <span className="text-xs text-[#8F8B82] font-mono">DKK</span>
                </span>
              </div>

              {netTotal >= 5000 && (
                <div className="pt-2 border-t border-[#E8E5DD] flex items-center justify-between text-xs text-[#5C645F]">
                  <span>{t('pricing.installment')}</span>
                  <span className="font-semibold text-[#47584A]">
                    ca. {monthly12Installment.toLocaleString('da-DK')} DKK / {language === 'ru' ? 'мес' : 'mo'}
                  </span>
                </div>
              )}
            </div>

            <p className="text-[11px] text-[#8F8B82] leading-relaxed">
              {language === 'ru' ? '* Индикативный расчет основан на тарифах клиники в Копенгагене. Точный план составляется после осмотра.' : '* Indicative calculation based on Copenhagen clinic fee schedule. Actual fees are finalized following individual clinical diagnostic examination.'}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8E5DD]">
            <Link
              to="/book"
              className="w-full flex items-center justify-center gap-2 text-xs uppercase font-medium tracking-wider px-4 py-3 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-colors rounded-sm"
            >
              <span>{t('pricing.bookBundle')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
