import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Wind,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-b border-[#E8E5DD] pb-10">
          <SectionHeading
            eyebrow={t('about.eyebrow')}
            title={t('about.title')}
            italicWord={t('about.titleItalic')}
            subtitle={t('about.subtitle')}
          />
        </div>
      </section>

      {/* Hero Narrative Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
              {language === 'ru' ? 'Основано в Копенгагене' : 'Founded in Copenhagen'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#1C201E] leading-snug">
              {t('about.historyTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
              {language === 'ru'
                ? 'В крупных городах стоматология часто превращается в конвейер: плотная запись, слепящий свет ламп, резкие запахи антисептиков и спешка врачей. Основывая AURA на улице Бредгаде, доктор Астрид Линдхольм стремилась создать абсолютную противоположность.'
                : 'Dental care in urban centers has too often become industrial: cramped schedules, sterile clinical glare, chemical odors, and assembly-line procedures. When Dr. Astrid Lindholm established AURA on Bredgade, she resolved to construct the exact opposite.'}
            </p>
            <p className="text-xs sm:text-sm text-[#5C645F] leading-relaxed">
              {language === 'ru'
                ? 'Каждая деталь студии подобрана осознанно: панели из датского дуба, поглощающие высокие звуковые частоты, панорамные окна в тихие исторические дворики Фредериксстадена, анатомические шведские кресла с эффектом памяти и полная тишина.'
                : 'Every detail of our Copenhagen studio was selected with intention: untreated Douglas fir timber panels that absorb high-frequency sound, floor-to-ceiling windows overlooking historic Frederiksstaden courtyards, ergonomic Swedish treatment chairs with memory foam cushioning, and complete sensory quietude.'}
            </p>
            <div className="pt-2">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-wider text-[#1C201E] hover:text-[#47584A] border-b border-[#1C201E] pb-1 transition-colors"
              >
                <span>{language === 'ru' ? 'О врачах и руководителях клиники' : 'Read About Our Clinical Leadership'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#819584]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 rounded-sm overflow-hidden bg-[#F3F1EA] border border-[#E8E5DD] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="AURA Copenhagen Studio Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F6]/90 backdrop-blur-xs p-3 rounded-xs border border-[#E8E5DD] text-xs">
                <span className="font-mono text-[10px] text-[#819584] uppercase block">
                  Frederiksstaden Heritage Building
                </span>
                <span className="font-medium text-[#1C201E] block">
                  Bredgade 34, København K • Restored Nordic Interior
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Stage Patient Journey */}
      <section className="bg-[#F3F1EA] py-16 sm:py-24 border-y border-[#E8E5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={t('about.journeyEyebrow')}
            title={t('about.journeyTitle')}
            italicWord={t('about.journeyTitleItalic')}
            subtitle={t('about.journeySubtitle')}
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 rounded-sm space-y-3">
              <span className="font-mono text-sm font-semibold text-[#819584] block">
                01 / {language === 'ru' ? 'Встреча' : 'Arrival'}
              </span>
              <h4 className="text-base font-medium text-[#1C201E]">
                {language === 'ru' ? 'Спокойный прием' : 'A Peaceful Welcome'}
              </h4>
              <p className="text-xs text-[#5C645F] leading-relaxed">
                {language === 'ru' ? 'Без суеты и шума. Никаких химических запахов: только органический травяной сбор или чистая родниковая вода.' : 'Step into our quiet reception lounge. No intercom chatter or chemical scent. Enjoy organic Danish herbal infusion or chilled sparkling water.'}
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 rounded-sm space-y-3">
              <span className="font-mono text-sm font-semibold text-[#819584] block">
                02 / {language === 'ru' ? 'Диалог' : 'Discovery'}
              </span>
              <h4 className="text-base font-medium text-[#1C201E]">
                {language === 'ru' ? 'Беседа в кресле' : 'Armchair Dialogue'}
              </h4>
              <p className="text-xs text-[#5C645F] leading-relaxed">
                {language === 'ru' ? 'До перехода в стоматологический кабинет вы обсуждаете анамнез, уровень тревоги и цели лечения в уютном салоне.' : 'Before sitting in a dental chair, you sit in a comfortable consultation salon to discuss your history, dental anxiety levels, and expectations.'}
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 rounded-sm space-y-3">
              <span className="font-mono text-sm font-semibold text-[#819584] block">
                03 / {language === 'ru' ? '3D-скан' : '3D Mapping'}
              </span>
              <h4 className="text-base font-medium text-[#1C201E]">
                {language === 'ru' ? 'Без слепочной массы' : 'Putty-Free Scanning'}
              </h4>
              <p className="text-xs text-[#5C645F] leading-relaxed">
                {language === 'ru' ? 'Оптический интраоральный сканер за 2 минуты создает цифровую трехмерную модель зубов без дискомфорта.' : 'A featherlight intraoral scanner captures full high-definition digital models of your teeth in under two minutes with zero gag reflex.'}
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 rounded-sm space-y-3">
              <span className="font-mono text-sm font-semibold text-[#819584] block">
                04 / {language === 'ru' ? 'Лечение' : 'Treatment'}
              </span>
              <h4 className="text-base font-medium text-[#1C201E]">
                {language === 'ru' ? 'Сенсорный комфорт' : 'Paced Sensory Care'}
              </h4>
              <p className="text-xs text-[#5C645F] leading-relaxed">
                {language === 'ru' ? 'Подогретая вода, аудиосистема Bose с шумоподавлением и жесткий контроль: если нужно сделать паузу, поднимите руку.' : 'Warm water delivery, noise-canceling headphones, and complete control: raise your hand and everything stops immediately.'}
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 rounded-sm space-y-3">
              <span className="font-mono text-sm font-semibold text-[#819584] block">
                05 / {language === 'ru' ? 'Финал' : 'Departure'}
              </span>
              <h4 className="text-base font-medium text-[#1C201E]">
                {language === 'ru' ? 'Простая оплата' : 'Effortless Billing'}
              </h4>
              <p className="text-xs text-[#5C645F] leading-relaxed">
                {language === 'ru' ? 'Детализированная квитанция и мгновенная отправка отчетов в Sygeforsikringen "danmark" для возврата на NemKonto.' : 'Transparent itemized checkout with instantaneous electronic Sygeforsikringen "danmark" reporting directly to your NemKonto.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Technology Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          eyebrow={language === 'ru' ? 'Техническое оснащение' : 'Clinical Infrastructure'}
          title={language === 'ru' ? 'Швейцарская и скандинавская инженерия' : 'Swiss & Nordic engineering'}
          italicWord={language === 'ru' ? 'в нашей практике.' : 'in our operatory.'}
          subtitle={language === 'ru' ? 'Мы используем передовое оборудование, чтобы лечение проходило быстрее, комфортнее и служило десятилетиями.' : 'We invest in the most advanced diagnostic and restorative instruments available to make procedures faster, gentler, and longer-lasting.'}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm space-y-3">
            <div className="w-9 h-9 bg-[#E8EFE9] text-[#2D3A30] rounded-xs flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#819584]" />
            </div>
            <h4 className="text-base font-medium text-[#1C201E]">
              EMS Guided Biofilm Therapy (Швейцария)
            </h4>
            <p className="text-xs text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Подогрев воды до 37°C и швейцарский порошок эритритол удаляют налет и темный пигмент без повреждения эмали.' : 'Warm 37°C water delivery and microscopic erythritol powder clear plaque and tea/coffee discoloration with zero enamel wear and zero sensitivity.'}
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm space-y-3">
            <div className="w-9 h-9 bg-[#E8EFE9] text-[#2D3A30] rounded-xs flex items-center justify-center">
              <Layers className="w-4 h-4 text-[#819584]" />
            </div>
            <h4 className="text-base font-medium text-[#1C201E]">
              Операционные микроскопы Carl Zeiss
            </h4>
            <p className="text-xs text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Немецкая оптика с увеличением до 20x позволяет обнаружить микротрещины и сохранить максимум живых тканей зуба.' : 'High-magnification German optical glass enables our dentists to examine teeth at up to 20x magnification, preserving healthy enamel margins.'}
            </p>
          </div>

          <div className="p-6 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm space-y-3">
            <div className="w-9 h-9 bg-[#E8EFE9] text-[#2D3A30] rounded-xs flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#819584]" />
            </div>
            <h4 className="text-base font-medium text-[#1C201E]">
              3D Томограф Green CBCT с низкой дозой
            </h4>
            <p className="text-xs text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Снижает лучевую нагрузку на 70% по сравнению с обычными аппаратами, обеспечивая субмиллиметровую точность планирования.' : 'Emits up to 70% less radiation than conventional medical CT scanners, providing millimeter-precise 3D bone volume visualization for implants.'}
            </p>
          </div>
        </div>
      </section>

      {/* Environmental & Sustainability Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C201E] text-[#FAF9F6] p-8 sm:p-14 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#819584]">
                <Wind className="w-4 h-4 text-[#819584]" />
                <span>{language === 'ru' ? 'Экологические стандарты Скандинавии' : 'Nordic Environmental Stewardship'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#FAF9F6]">
                {language === 'ru' ? '100% ветроэнергетика, отсутствие ртути и цифровой безбумажный документооборот.' : '100% wind-powered, mercury-free, paperless healthcare.'}
              </h3>
              <p className="text-xs sm:text-sm text-[#D7D3C8] leading-relaxed max-w-2xl">
                {language === 'ru'
                  ? 'Медицинские учреждения генерируют много отходов, если процесс не оптимизирован. AURA работает на чистой энергии ветра Дании, полностью исключает амальгаму и использует биоразлагаемые барьеры.'
                  : 'Healthcare produces substantial waste unless deliberately engineered otherwise. AURA operates entirely on certified Danish offshore wind energy. We have phased out single-use plastics wherever autoclaved stainless steel is clinically viable, and our diagnostic workflows are completely digital.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#819584]">
                <span>✓ {language === 'ru' ? '0% амальгамы (без ртути)' : '0% Dental Amalgam (Mercury-free)'}</span>
                <span>✓ {language === 'ru' ? '100% энергия ветра Дании' : '100% Danish Wind Energy'}</span>
                <span>✓ {language === 'ru' ? 'Биоразлагаемые барьеры' : 'Biodegradable Surface Barriers'}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium px-6 py-3.5 bg-[#819584] text-[#1C201E] hover:bg-[#FAF9F6] transition-colors rounded-sm"
              >
                <span>{language === 'ru' ? 'Записаться в студию' : 'Book Studio Visit'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
