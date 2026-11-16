import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Clock,
  Shield,
  Heart,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Info,
  Phone,
  Copy,
  Check
} from 'lucide-react';
import { getLocalizedTreatments, getLocalizedSpecialists } from '../../data/localizedData';
import { useLanguage } from '../../context/LanguageContext';
import type { BookingFormState, BookingConfirmation } from '../../types';

export const BookingWizard: React.FC = () => {
  const { language, t } = useLanguage();
  const treatments = getLocalizedTreatments(language);
  const specialists = getLocalizedSpecialists(language);

  const [searchParams] = useSearchParams();
  const preselectedDentist = searchParams.get('dentist') || '';
  const preselectedTreatment = searchParams.get('treatment') || '';

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const [formData, setFormData] = useState<BookingFormState>({
    treatmentId: preselectedTreatment || treatments[0].id,
    specialistId: preselectedDentist || 'any',
    date: '',
    timeSlot: '',
    fullName: '',
    email: '',
    phone: '',
    cprNumber: '',
    isNewPatient: true,
    hasDentalAnxiety: false,
    isDanmarkMember: true,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  // Auto select if query parameters change
  useEffect(() => {
    if (preselectedDentist) {
      setFormData((prev) => ({ ...prev, specialistId: preselectedDentist }));
    }
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatmentId: preselectedTreatment }));
    }
  }, [preselectedDentist, preselectedTreatment]);

  // Generate realistic upcoming weekdays
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let added = 0;
    let dayOffset = 1;

    const locale = language === 'ru' ? 'ru-RU' : 'en-US';

    while (added < 10) {
      const d = new Date(today);
      d.setDate(today.getDate() + dayOffset);
      const dayOfWeek = d.getDay();
      // Monday = 1 to Saturday = 6 (exclude Sunday = 0)
      if (dayOfWeek !== 0) {
        const formattedISO = d.toISOString().split('T')[0];
        const dayName = d.toLocaleDateString(locale, { weekday: 'short' });
        const monthName = d.toLocaleDateString(locale, { month: 'short' });
        const dayNumber = d.getDate();
        dates.push({
          iso: formattedISO,
          dayName,
          monthName,
          dayNumber,
          isSaturday: dayOfWeek === 6,
        });
        added++;
      }
      dayOffset++;
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  // Set default date if empty
  useEffect(() => {
    if (!formData.date && availableDates.length > 0) {
      setFormData((prev) => ({ ...prev, date: availableDates[0].iso }));
    }
  }, [availableDates, formData.date]);

  const timeSlots = [
    { time: '08:00', period: language === 'ru' ? 'Утро' : 'Morning' },
    { time: '09:00', period: language === 'ru' ? 'Утро' : 'Morning' },
    { time: '10:30', period: language === 'ru' ? 'Утро' : 'Morning' },
    { time: '11:45', period: language === 'ru' ? 'Утро' : 'Morning' },
    { time: '13:15', period: language === 'ru' ? 'День' : 'Afternoon' },
    { time: '14:30', period: language === 'ru' ? 'День' : 'Afternoon' },
    { time: '15:45', period: language === 'ru' ? 'День' : 'Afternoon' },
    { time: '16:45', period: language === 'ru' ? 'День' : 'Afternoon' },
  ];

  const selectedTreatmentObj = treatments.find((t) => t.id === formData.treatmentId) || treatments[0];
  const selectedSpecialistObj = specialists.find((s) => s.id === formData.specialistId);

  // Form Validation
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.treatmentId) {
        newErrors.treatmentId = language === 'ru' ? 'Пожалуйста, выберите процедуру.' : 'Please select a treatment.';
      }
    }

    if (step === 3) {
      if (!formData.date) {
        newErrors.date = language === 'ru' ? 'Пожалуйста, выберите удобную дату.' : 'Please select a preferred date.';
      }
      if (!formData.timeSlot) {
        newErrors.timeSlot = language === 'ru' ? 'Пожалуйста, выберите временной слот.' : 'Please select a preferred time slot.';
      }
    }

    if (step === 4) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = language === 'ru' ? 'Укажите полное имя и фамилию.' : 'Full name is required.';
      } else if (formData.fullName.trim().length < 3) {
        newErrors.fullName = language === 'ru' ? 'Пожалуйста, введите корректное имя.' : 'Please enter your complete legal name.';
      }

      if (!formData.email.trim()) {
        newErrors.email = language === 'ru' ? 'Укажите email адрес.' : 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = language === 'ru' ? 'Некорректный формат email.' : 'Please enter a valid email address.';
      }

      if (!formData.phone.trim()) {
        newErrors.phone = language === 'ru' ? 'Номер телефона обязателен для подтверждения.' : 'Phone number is required for SMS confirmation.';
      } else if (formData.phone.trim().length < 8) {
        newErrors.phone = language === 'ru' ? 'Пожалуйста, укажите верный номер (мин. 8 цифр).' : 'Please provide a valid phone number (min 8 digits).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 5) {
      handleNext();
      return;
    }
    if (!validateStep(4)) {
      setCurrentStep(4);
      return;
    }

    // Generate fictional booking reference
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refCode = `AUR-CPH-${randomCode}`;

    const confirmationData: BookingConfirmation = {
      referenceNumber: refCode,
      treatmentName: selectedTreatmentObj.title,
      specialistName: selectedSpecialistObj ? selectedSpecialistObj.name : (language === 'ru' ? 'Ближайший доступный специалист' : 'First Available Specialist'),
      date: formData.date,
      timeSlot: formData.timeSlot || '09:00',
      patientName: formData.fullName,
      patientEmail: formData.email,
      patientPhone: formData.phone,
      estimatedPriceDKK: selectedTreatmentObj.indicativePriceDKK,
    };

    setConfirmation(confirmationData);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const copyRefCode = () => {
    if (confirmation) {
      navigator.clipboard.writeText(confirmation.referenceNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetBooking = () => {
    setConfirmation(null);
    setCurrentStep(1);
    setFormData({
      treatmentId: treatments[0].id,
      specialistId: 'any',
      date: availableDates[0].iso,
      timeSlot: '',
      fullName: '',
      email: '',
      phone: '',
      cprNumber: '',
      isNewPatient: true,
      hasDentalAnxiety: false,
      isDanmarkMember: true,
      notes: '',
    });
  };

  // If Confirmed State
  if (confirmation) {
    return (
      <div className="max-w-3xl mx-auto bg-[#FAF9F6] border border-[#819584]/60 p-6 sm:p-10 rounded-sm shadow-sm animate-in fade-in duration-300">
        {/* Prominent Demo Notice Banner */}
        <div className="mb-8 p-4 bg-[#F3F1EA] border-l-4 border-[#819584] rounded-r-sm text-xs sm:text-sm text-[#47584A] space-y-1">
          <div className="flex items-center gap-2 font-semibold text-[#1C201E]">
            <Info className="w-4 h-4 text-[#819584]" />
            <span>{t('book.demoNoticeTitle')}</span>
          </div>
          <p className="text-xs text-[#5C645F] leading-relaxed">
            {t('book.demoNoticeDesc')}
          </p>
        </div>

        <div className="text-center space-y-3 pb-8 border-b border-[#E8E5DD]">
          <div className="w-14 h-14 bg-[#E8EFE9] text-[#2D3A30] rounded-full mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-[#47584A]" />
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#819584]">
            {language === 'ru' ? 'Демо-запись сформирована' : 'Demonstration Request Staged'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal text-[#1C201E]">
            {t('book.confirmedHeader')}
          </h2>
          <p className="text-sm text-[#5C645F] max-w-md mx-auto">
            {t('book.confirmedSub')}
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm text-xs font-mono">
            <span className="text-[#8F8B82]">{t('book.reference')}</span>
            <span className="font-semibold text-[#1C201E]">{confirmation.referenceNumber}</span>
            <button
              onClick={copyRefCode}
              className="text-[#819584] hover:text-[#47584A] ml-1 transition-colors"
              title="Copy reference"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Confirmation Details Grid */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm border-b border-[#E8E5DD]">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#8F8B82] block">
                {language === 'ru' ? 'Выбранная процедура' : 'Selected Treatment'}
              </span>
              <span className="font-medium text-[#1C201E] text-base block mt-0.5">
                {confirmation.treatmentName}
              </span>
              <span className="text-xs text-[#819584] font-mono">
                {language === 'ru' ? 'Индикативный тариф' : 'Indicative fee'}: {confirmation.estimatedPriceDKK.toLocaleString('da-DK')} DKK
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase text-[#8F8B82] block">
                {language === 'ru' ? 'Врач' : 'Clinician'}
              </span>
              <span className="font-medium text-[#1C201E] block mt-0.5">
                {confirmation.specialistName}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase text-[#8F8B82] block">
                {language === 'ru' ? 'Дата и расчетное время' : 'Date & Estimated Time'}
              </span>
              <span className="font-medium text-[#1C201E] block mt-0.5">
                {confirmation.date} at {confirmation.timeSlot}
              </span>
            </div>
          </div>

          <div className="space-y-4 bg-[#F3F1EA] p-4 rounded-sm border border-[#E8E5DD]">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#8F8B82] block">
                {language === 'ru' ? 'Контакты пациента' : 'Patient Contact'}
              </span>
              <span className="font-medium text-[#1C201E] block mt-0.5">
                {confirmation.patientName}
              </span>
              <span className="text-xs text-[#5C645F] block">{confirmation.patientEmail}</span>
              <span className="text-xs text-[#5C645F] block">{confirmation.patientPhone}</span>
            </div>

            <div className="pt-2 border-t border-[#E8E5DD]">
              <span className="text-[11px] font-mono uppercase text-[#8F8B82] block">
                {language === 'ru' ? 'Адрес студии' : 'Studio Location'}
              </span>
              <p className="text-xs text-[#1C201E] mt-0.5 font-medium">
                AURA Dental Studio Copenhagen
              </p>
              <p className="text-xs text-[#5C645F]">
                Bredgade 34, 1. sal, 1260 København K
              </p>
              <p className="text-[11px] text-[#819584] mt-1">
                {language === 'ru' ? 'Рядом со станциями Kongens Nytorv и Marmorkirken' : 'Near Kongens Nytorv & Marmorkirken Metro'}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={resetBooking}
            className="w-full sm:w-auto text-xs uppercase tracking-wider px-5 py-2.5 border border-[#E8E5DD] hover:border-[#1C201E] text-[#1C201E] transition-colors rounded-sm"
          >
            {t('book.createAnother')}
          </button>

          <a
            href="tel:+4533124080"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider px-5 py-2.5 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-colors rounded-sm font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t('book.callReception')}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm overflow-hidden shadow-xs">
      {/* Step Tracker Header */}
      <div className="bg-[#F3F1EA] border-b border-[#E8E5DD] px-4 sm:px-8 py-5">
        <div className="flex items-center justify-between">
          {[
            { step: 1, title: t('book.step1') },
            { step: 2, title: t('book.step2') },
            { step: 3, title: t('book.step3') },
            { step: 4, title: t('book.step4') },
            { step: 5, title: t('book.step5') },
          ].map((item, idx) => (
            <div key={item.step} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (item.step < currentStep) setCurrentStep(item.step);
                }}
                disabled={item.step > currentStep}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-medium transition-all ${
                  currentStep === item.step
                    ? 'bg-[#1C201E] text-[#FAF9F6]'
                    : currentStep > item.step
                    ? 'bg-[#819584] text-[#FAF9F6] cursor-pointer'
                    : 'bg-[#FAF9F6] text-[#8F8B82] border border-[#E8E5DD]'
                }`}
              >
                {currentStep > item.step ? '✓' : item.step}
              </button>
              <span
                className={`hidden md:inline text-xs font-medium tracking-wide ${
                  currentStep === item.step ? 'text-[#1C201E]' : 'text-[#8F8B82]'
                }`}
              >
                {item.title}
              </span>
              {idx < 4 && <span className="hidden sm:inline w-4 lg:w-8 h-[1px] bg-[#D7D3C8] mx-1" />}
            </div>
          ))}
        </div>
      </div>

      {/* Main Wizard Form Body */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-10">
        {/* STEP 1: Select Treatment */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
                Step 01 / 05
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
                {t('book.step1Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C645F] mt-1">
                {t('book.step1Subtitle')}
              </p>
            </div>

            {errors.treatmentId && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errors.treatmentId}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatments.map((tItem) => {
                const isSelected = formData.treatmentId === tItem.id;
                return (
                  <div
                    key={tItem.id}
                    onClick={() => setFormData({ ...formData, treatmentId: tItem.id })}
                    className={`p-4 border rounded-sm cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#819584] bg-[#E8EFE9]/40 ring-1 ring-[#819584]'
                        : 'border-[#E8E5DD] bg-[#FAF9F6] hover:border-[#819584]/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                        <span className="text-[#819584] uppercase tracking-wider">
                          {tItem.categoryLabel}
                        </span>
                        <span className="text-[#1C201E] font-medium">
                          {tItem.priceLabel}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-medium text-[#1C201E]">
                        {tItem.title}
                      </h4>
                      <p className="text-xs text-[#5C645F] mt-1.5 line-clamp-2 leading-relaxed">
                        {tItem.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E8E5DD]/60 flex items-center justify-between text-[11px] text-[#8F8B82]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#819584]" />
                        {tItem.durationLabel}
                      </span>
                      {tItem.danmarkRefundEligible && (
                        <span className="text-[#47584A] font-medium">
                          {language === 'ru' ? 'Субсидия "danmark"' : '"danmark" refund eligible'}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Select Specialist */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
                Step 02 / 05
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
                {t('book.step2Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C645F] mt-1">
                {t('book.step2Subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option: Any Available */}
              <div
                onClick={() => setFormData({ ...formData, specialistId: 'any' })}
                className={`p-4 border rounded-sm cursor-pointer transition-all flex items-start gap-4 ${
                  formData.specialistId === 'any'
                    ? 'border-[#819584] bg-[#E8EFE9]/40 ring-1 ring-[#819584]'
                    : 'border-[#E8E5DD] bg-[#FAF9F6] hover:border-[#819584]/60'
                }`}
              >
                <div className="w-12 h-12 rounded-sm bg-[#1C201E] text-[#FAF9F6] flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-[#819584]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#1C201E]">
                    {t('book.step2Any')}
                  </h4>
                  <p className="text-xs text-[#5C645F] mt-0.5">
                    {t('book.step2AnyDesc')}
                  </p>
                  <span className="inline-block mt-2 text-[10px] uppercase font-mono px-2 py-0.5 bg-[#FAF9F6] border border-[#E8E5DD] text-[#819584] rounded-xs">
                    {language === 'ru' ? 'Все будние дни' : 'All Weekdays'}
                  </span>
                </div>
              </div>

              {/* Specialists List */}
              {specialists.map((s) => {
                const isSelected = formData.specialistId === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setFormData({ ...formData, specialistId: s.id })}
                    className={`p-4 border rounded-sm cursor-pointer transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'border-[#819584] bg-[#E8EFE9]/40 ring-1 ring-[#819584]'
                        : 'border-[#E8E5DD] bg-[#FAF9F6] hover:border-[#819584]/60'
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-12 h-12 rounded-sm object-cover object-top shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-[#1C201E]">
                        {s.name}
                      </h4>
                      <p className="text-[11px] font-mono text-[#819584]">
                        {s.title}
                      </p>
                      <p className="text-[11px] text-[#5C645F] mt-1 line-clamp-1">
                        {s.specialty}
                      </p>
                      <span className="inline-block mt-2 text-[10px] font-mono text-[#8F8B82]">
                        {language === 'ru' ? 'Прием' : 'Clinic'}: {s.availableDays.slice(0, 3).join(', ')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Select Date & Time Slot */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
                Step 03 / 05
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
                {t('book.step3Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C645F] mt-1">
                {t('book.step3Subtitle')}
              </p>
            </div>

            {errors.date && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.date}
              </p>
            )}

            {/* Date Selector Pills */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#8F8B82] block mb-2">
                {t('book.step3Dates')}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {availableDates.map((item) => {
                  const isSelected = formData.date === item.iso;
                  return (
                    <button
                      key={item.iso}
                      type="button"
                      onClick={() => setFormData({ ...formData, date: item.iso })}
                      className={`p-3 text-center border rounded-sm transition-all ${
                        isSelected
                          ? 'border-[#1C201E] bg-[#1C201E] text-[#FAF9F6]'
                          : 'border-[#E8E5DD] bg-[#FAF9F6] text-[#1C201E] hover:border-[#819584]'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider block opacity-75">
                        {item.dayName}
                      </span>
                      <span className="text-lg font-medium block">
                        {item.dayNumber} {item.monthName}
                      </span>
                      {item.isSaturday && (
                        <span className="text-[9px] block text-[#819584]">
                          09:00 - 14:00
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Selector */}
            <div className="pt-4 border-t border-[#E8E5DD]">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#8F8B82]">
                  {t('book.step3Slots')} {formData.date || (language === 'ru' ? 'выбранную дату' : 'Selected Date')}
                </label>
                {errors.timeSlot && (
                  <span className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.timeSlot}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = formData.timeSlot === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeSlot: slot.time })}
                      className={`py-3 px-4 border rounded-sm transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[#819584] bg-[#E8EFE9] text-[#1C201E] font-semibold ring-1 ring-[#819584]'
                          : 'border-[#E8E5DD] bg-[#FAF9F6] text-[#1C201E] hover:border-[#819584]'
                      }`}
                    >
                      <span className="text-sm">{slot.time}</span>
                      <span className="text-[10px] text-[#8F8B82] font-mono">
                        {slot.period}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Patient Details */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
                Step 04 / 05
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
                {t('book.step4Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C645F] mt-1">
                {t('book.step4Subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-[#1C201E] block mb-1">
                  {t('book.fullName')}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Frederik Holm"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-[#FAF9F6] border rounded-sm text-sm text-[#1C201E] placeholder-[#8F8B82]/70 focus:outline-none ${
                    errors.fullName ? 'border-red-500' : 'border-[#E8E5DD] focus:border-[#819584]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium text-[#1C201E] block mb-1">
                  {t('book.email')}
                </label>
                <input
                  type="email"
                  placeholder="name@example.dk"
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

              <div>
                <label className="text-xs font-medium text-[#1C201E] block mb-1">
                  {t('book.phone')}
                </label>
                <input
                  type="tel"
                  placeholder="+45 20 12 34 56"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-[#FAF9F6] border rounded-sm text-sm text-[#1C201E] placeholder-[#8F8B82]/70 focus:outline-none ${
                    errors.phone ? 'border-red-500' : 'border-[#E8E5DD] focus:border-[#819584]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium text-[#1C201E] block mb-1">
                  {t('book.cpr')}
                </label>
                <input
                  type="text"
                  placeholder="DDMMYY-XXXX (Demo format)"
                  value={formData.cprNumber}
                  onChange={(e) => setFormData({ ...formData, cprNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm text-sm text-[#1C201E] placeholder-[#8F8B82]/70 focus:outline-none focus:border-[#819584]"
                />
                <span className="text-[10px] text-[#8F8B82] mt-1 block">
                  {t('book.cprNote')}
                </span>
              </div>
            </div>

            {/* Comfort & Insurance Toggles */}
            <div className="pt-4 border-t border-[#E8E5DD] space-y-3">
              <label className="flex items-start gap-3 p-3 bg-[#F3F1EA] border border-[#E8E5DD] rounded-sm cursor-pointer hover:border-[#819584]/60 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.hasDentalAnxiety}
                  onChange={(e) => setFormData({ ...formData, hasDentalAnxiety: e.target.checked })}
                  className="w-4 h-4 mt-0.5 accent-[#47584A] cursor-pointer"
                />
                <div>
                  <span className="text-xs font-medium text-[#1C201E] flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#819584]" />
                    {t('book.anxiety')}
                  </span>
                  <p className="text-[11px] text-[#5C645F] mt-0.5">
                    {t('book.anxietyNote')}
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 bg-[#F3F1EA] border border-[#E8E5DD] rounded-sm cursor-pointer hover:border-[#819584]/60 transition-colors">
                <input
                  type="checkbox"
                  checked={formData.isDanmarkMember}
                  onChange={(e) => setFormData({ ...formData, isDanmarkMember: e.target.checked })}
                  className="w-4 h-4 mt-0.5 accent-[#47584A] cursor-pointer"
                />
                <div>
                  <span className="text-xs font-medium text-[#1C201E] flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#819584]" />
                    {t('book.danmarkMember')}
                  </span>
                  <p className="text-[11px] text-[#5C645F] mt-0.5">
                    {t('book.danmarkNote')}
                  </p>
                </div>
              </label>
            </div>

            <div>
              <label className="text-xs font-medium text-[#1C201E] block mb-1">
                {t('book.notes')}
              </label>
              <textarea
                rows={3}
                placeholder={t('book.notesPlaceholder')}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8E5DD] rounded-sm text-sm text-[#1C201E] placeholder-[#8F8B82]/70 focus:outline-none focus:border-[#819584]"
              />
            </div>
          </div>
        )}

        {/* STEP 5: Summary Review */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#819584]">
                Step 05 / 05
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#1C201E] mt-1">
                {t('book.step5Title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C645F] mt-1">
                {t('book.step5Subtitle')}
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-[#F3F1EA] border border-[#E8E5DD] p-6 rounded-sm space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-[#E8E5DD]">
                <div>
                  <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                    {language === 'ru' ? 'Выбранная процедура' : 'Selected Treatment'}
                  </span>
                  <span className="font-medium text-[#1C201E] text-base block mt-0.5">
                    {selectedTreatmentObj.title}
                  </span>
                  <span className="text-xs text-[#819584] font-mono">
                    {selectedTreatmentObj.durationLabel} • {selectedTreatmentObj.priceLabel}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                    {language === 'ru' ? 'Выбранный врач' : 'Requested Clinician'}
                  </span>
                  <span className="font-medium text-[#1C201E] text-base block mt-0.5">
                    {selectedSpecialistObj ? selectedSpecialistObj.name : (language === 'ru' ? 'Ближайший доступный специалист' : 'First Available Specialist')}
                  </span>
                  <span className="text-xs text-[#5C645F] block">
                    {selectedSpecialistObj ? selectedSpecialistObj.title : (language === 'ru' ? 'Все врачи клиники' : 'All clinic team members')}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-[#E8E5DD]">
                <div>
                  <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                    {language === 'ru' ? 'Дата и время' : 'Date & Preferred Time'}
                  </span>
                  <span className="font-medium text-[#1C201E] block mt-0.5">
                    {formData.date} at {formData.timeSlot || '09:00'}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#8F8B82] uppercase block">
                    {language === 'ru' ? 'Пациент' : 'Patient Details'}
                  </span>
                  <span className="font-medium text-[#1C201E] block mt-0.5">
                    {formData.fullName} ({formData.phone})
                  </span>
                  <span className="text-xs text-[#5C645F] block">{formData.email}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-[#5C645F]">
                {formData.hasDentalAnxiety && (
                  <span className="px-2.5 py-1 bg-[#E8EFE9] text-[#2D3A30] rounded-xs font-medium">
                    ✓ {language === 'ru' ? 'Запрошен деликатный темп Slow Dentistry' : 'Gentle Pacing & Anxiety Protocol Requested'}
                  </span>
                )}
                {formData.isDanmarkMember && (
                  <span className="px-2.5 py-1 bg-[#FAF9F6] border border-[#E8E5DD] text-[#47584A] rounded-xs font-medium">
                    ✓ {language === 'ru' ? 'Член кассы Sygeforsikringen "danmark"' : 'Sygeforsikringen "danmark" Member'}
                  </span>
                )}
              </div>
            </div>

            {/* Prominent Demo Notice */}
            <div className="p-4 bg-[#FAF9F6] border border-[#819584]/40 rounded-sm text-xs text-[#5C645F] flex items-start gap-3">
              <Info className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
              <p>
                <strong>{t('book.demoNoticeTitle')}:</strong> {t('book.demoNoticeDesc')}
              </p>
            </div>
          </div>
        )}

        {/* Wizard Navigation Footer */}
        <div className="mt-8 pt-6 border-t border-[#E8E5DD] flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-wider px-4 py-2.5 border border-[#E8E5DD] hover:border-[#1C201E] text-[#1C201E] transition-colors rounded-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t('book.back')}</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-wider px-6 py-2.5 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-colors rounded-sm shadow-xs"
            >
              <span>{t('book.continue')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-wider px-7 py-3 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-all rounded-sm shadow-sm"
            >
              <span>{t('book.submit')}</span>
              <CheckCircle2 className="w-4 h-4 text-[#819584]" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
