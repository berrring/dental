import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Train,
  Car,
  CheckCircle2,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { DemoNotice } from '../components/common/DemoNotice';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = language === 'ru' ? 'Пожалуйста, укажите имя.' : 'Please provide your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = language === 'ru' ? 'Пожалуйста, укажите корректный email.' : 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = language === 'ru' ? 'Сообщение должно содержать минимум 10 символов.' : 'Please enter a message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-8 sm:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-b border-[#E8E5DD] pb-10">
          <SectionHeading
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            italicWord={t('contact.titleItalic')}
            subtitle={t('contact.subtitle')}
          />
        </div>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Studio Information & Transit */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 sm:p-8 rounded-sm space-y-6">
              <h3 className="text-xl font-medium text-[#1C201E]">
                {t('contact.locationTitle')}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#5C645F] divide-y divide-[#E8E5DD]">
                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C201E] block font-medium">AURA Dental Studio</strong>
                    <span className="block">Bredgade 34, 1. sal</span>
                    <span className="block">1260 København K, Denmark</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3">
                  <Phone className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C201E] block font-medium">{t('contact.phoneTitle')}</strong>
                    <a href="tel:+4533124080" className="text-[#1C201E] hover:text-[#47584A] block">
                      +45 33 12 40 80
                    </a>
                    <span className="text-[11px] text-[#8F8B82] block">
                      {language === 'ru' ? 'Линии открыты по будням с 07:30' : 'Lines open weekdays from 07:30'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3">
                  <Mail className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C201E] block font-medium">{t('contact.emailTitle')}</strong>
                    <a href="mailto:kontakt@auradental.dk" className="text-[#1C201E] hover:text-[#47584A] block">
                      kontakt@auradental.dk
                    </a>
                    <span className="text-[11px] text-[#8F8B82] block">
                      {language === 'ru' ? 'Ответ в течение 3 часов' : 'Average response within 3 hours'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3">
                  <Clock className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C201E] block font-medium">{t('contact.hoursTitle')}</strong>
                    <div className="grid grid-cols-2 gap-x-4 text-xs mt-1 text-[#5C645F]">
                      <span>{language === 'ru' ? 'Понедельник – Пятница:' : 'Monday – Friday:'}</span>
                      <span className="text-[#1C201E] font-medium">07:30 – 18:00</span>
                      <span>{language === 'ru' ? 'Суббота:' : 'Saturday:'}</span>
                      <span className="text-[#1C201E] font-medium">09:00 – 14:00</span>
                      <span>{language === 'ru' ? 'Воскресенье:' : 'Sunday:'}</span>
                      <span className="text-[#8F8B82]">{language === 'ru' ? 'Выходной' : 'Closed'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Transit & Parking */}
            <div className="bg-[#F3F1EA] border border-[#E8E5DD] p-6 rounded-sm space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1C201E]">
                {t('contact.transitTitle')}
              </h4>

              <div className="space-y-3 text-xs text-[#5C645F]">
                <div className="flex items-start gap-2.5">
                  <Train className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C201E]">{language === 'ru' ? 'Метро Копенгагена:' : 'Copenhagen Metro:'}</strong>
                    <p className="mt-0.5">
                      {language === 'ru' ? '4 минуты пешком от ст. Kongens Nytorv (M1, M2, M3, M4) или 3 минуты от Marmorkirken (M3, M4).' : '4-minute walk from Kongens Nytorv (Lines M1, M2, M3, M4) or 3 minutes from Marmorkirken (M3, M4).'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C201E]">{language === 'ru' ? 'Подземный паркинг:' : 'Underground Car Parking:'}</strong>
                    <p className="mt-0.5">
                      {language === 'ru' ? 'Паркинг Jeudan по адресу Dronningens Tværgade 4 (250 м от клиники) или городская парковка на Bredgade.' : 'Jeudan Parkeringshus at Dronningens Tværgade 4 (250 meters from the clinic) or street parking along Bredgade and Sankt Annæ Plads (Red Parking Zone).'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Dental Notice */}
            <div className="p-4 bg-[#FAF9F6] border border-[#819584]/50 rounded-sm space-y-2 text-xs">
              <div className="flex items-center gap-2 font-medium text-[#1C201E]">
                <ShieldAlert className="w-4 h-4 text-[#819584]" />
                <span>{t('contact.emergencyTitle')}</span>
              </div>
              <p className="text-[#5C645F] leading-relaxed">
                {language === 'ru' ? 'В дневные часы звоните нам: +45 33 12 40 80 для экстренного приема. В нерабочее время и в выходные обращайтесь в городскую службу Tandlægevagten Region Hovedstaden по тел. +45 70 20 02 55.' : 'During daytime hours, call our reception directly on +45 33 12 40 80 for priority emergency triage. After hours and weekends, contact Tandlægevagten Region Hovedstaden on +45 70 20 02 55 (Oslo Plads 14).'}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form or Confirmation */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] border border-[#E8E5DD] p-6 sm:p-10 rounded-sm shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-[#E8EFE9] text-[#2D3A30] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#47584A]" />
                  </div>
                  <h3 className="text-2xl font-normal text-[#1C201E]">
                    {t('contact.thankYou')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C645F] max-w-md mx-auto leading-relaxed">
                    {language === 'ru' ? `Это демонстрационное сообщение. В реальной клинике администратор ответит на ${formData.email} в течение 3 рабочих часов.` : `This is a portfolio demonstration message. In a live deployment, our clinic coordinator would reply to ${formData.email} within 3 business hours.`}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'General Inquiry',
                          message: '',
                        });
                      }}
                      className="text-xs uppercase font-medium tracking-wider px-5 py-2.5 border border-[#E8E5DD] hover:border-[#1C201E] text-[#1C201E] rounded-sm transition-colors"
                    >
                      {language === 'ru' ? 'Отправить еще сообщение' : 'Send Another Message'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
                      {t('contact.formEyebrow')}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
                      {t('contact.formTitle')}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C645F] mt-1">
                      {language === 'ru' ? 'Задайте вопрос о процедурах, запросите трансфер медицинской карты или уточните детали о седации.' : 'Inquire about treatments, transfer dental records from your former clinic, or ask questions about anxiety protocols.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[#1C201E] block mb-1">
                        {language === 'ru' ? 'Ваше имя *' : 'Your Full Name *'}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mette Nørgaard"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 bg-[#FAF9F6] border rounded-sm text-sm text-[#1C201E] placeholder-[#8F8B82]/70 focus:outline-none ${
                          errors.name ? 'border-red-500' : 'border-[#E8E5DD] focus:border-[#819584]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#1C201E] block mb-1">
                        {language === 'ru' ? 'Электронная почта *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        placeholder="mette@example.dk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 bg-[#FAF9F6] border rounded-sm text-sm text-[#1C201E] placeholder-[#8F8B82]/70 focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-[#E8E5DD] focus:border-[#819584]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[#1C201E] block mb-1">
                        {language === 'ru' ? 'Номер телефона' : 'Phone Number (Optional)'}
                      </label>
                      <input
                        type="tel"
                        placeholder="+45 20 12 34 56"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm text-sm text-[#1C201E] placeholder-[#8F8B82]/70 focus:outline-none focus:border-[#819584]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#1C201E] block mb-1">
                        {language === 'ru' ? 'Тема обращения' : 'Topic of Inquiry'}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm text-sm text-[#1C201E] focus:outline-none focus:border-[#819584]"
                      >
                        <option value="General Inquiry">{language === 'ru' ? 'Общие вопросы по студии' : 'General Studio Inquiry'}</option>
                        <option value="Dental Anxiety Support">{language === 'ru' ? 'Поддержка при дентофобии' : 'Dental Anxiety Support'}</option>
                        <option value="Orthodontics & Aligners">{language === 'ru' ? 'Элайнеры и ортодонтия' : 'Clear Aligners / Orthodontics'}</option>
                        <option value="Implants & Surgery">{language === 'ru' ? 'Швейцарские имплантаты' : 'Swiss Dental Implants'}</option>
                        <option value="Porcelain Veneers">{language === 'ru' ? 'Керамические виниры' : 'Porcelain Veneers / Aesthetic'}</option>
                        <option value="Record Transfer">{language === 'ru' ? 'Перевод карты из другой клиники' : 'Record Transfer from Other Clinic'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#1C201E] block mb-1">
                      {language === 'ru' ? 'Текст сообщения *' : 'Message *'}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={language === 'ru' ? 'Опишите ваши вопросы или пожелания...' : 'Please share any questions or previous dental context...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-[#FAF9F6] border rounded-sm text-sm text-[#1C201E] placeholder-[#8F8B82]/70 focus:outline-none ${
                        errors.message ? 'border-red-500' : 'border-[#E8E5DD] focus:border-[#819584]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-widest px-6 py-3.5 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-colors rounded-sm shadow-xs"
                    >
                      <span>{t('contact.sendBtn')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <DemoNotice compact />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stylized Nordic Map Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8E5DD] border border-[#D7D3C8] rounded-sm p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-md relative z-10 space-y-3 bg-[#FAF9F6]/95 backdrop-blur-md p-6 rounded-sm border border-[#E8E5DD] shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#819584]">
              {language === 'ru' ? 'Исторический район Фредериксстаден' : 'Frederiksstaden Heritage Quarter'}
            </span>
            <h4 className="text-lg font-medium text-[#1C201E]">
              Bredgade 34, 1260 København K
            </h4>
            <p className="text-xs text-[#5C645F] leading-relaxed">
              {language === 'ru' ? 'Окна выходят в тихий внутренний дворик возле Designmuseum Danmark и дворца Амалиенборг. Звонок «AURA 1. sal».' : 'Facing the quiet courtyards near Designmuseum Danmark and Amalienborg Palace. Ring bell marked "AURA 1. sal".'}
            </p>
            <div className="pt-2 text-xs text-[#1C201E] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{language === 'ru' ? 'Студия открыта сегодня до 18:00' : 'Studio open today until 18:00'}</span>
            </div>
          </div>

          {/* Decorative minimalist map grid graphic */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <div className="w-[800px] h-[500px] border border-[#1C201E]/40 grid grid-cols-8 grid-rows-6">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-[#1C201E]/30" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
