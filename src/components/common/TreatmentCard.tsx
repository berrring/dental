import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Treatment } from '../../types';

interface TreatmentCardProps {
  treatment: Treatment;
  featured?: boolean;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, featured = false }) => {
  const { language } = useLanguage();

  return (
    <article
      className={`group relative bg-[#FAF9F6] border border-[#E8E5DD] hover:border-[#819584] transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Image Container with subtle zoom */}
        <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden bg-[#F3F1EA]">
          <img
            src={treatment.heroImage}
            alt={treatment.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C201E]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Badges on image */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#FAF9F6]/90 backdrop-blur-xs text-[#1C201E] border border-[#FAF9F6] rounded-xs font-medium">
              {treatment.categoryLabel}
            </span>
            {treatment.danmarkRefundEligible && (
              <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-[#47584A]/90 backdrop-blur-xs text-[#FAF9F6] rounded-xs flex items-center gap-1">
                <Shield className="w-2.5 h-2.5" />
                "danmark"
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#FAF9F6]" />
            <span>{treatment.durationLabel}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <span className="text-xs font-mono text-[#819584] uppercase tracking-wider">
              {treatment.priceLabel}
            </span>
          </div>

          <h3 className="text-xl font-medium text-[#1C201E] group-hover:text-[#47584A] transition-colors leading-snug">
            <Link to={`/treatments/${treatment.slug}`}>
              <span className="absolute inset-0 z-10" />
              {treatment.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-[#5C645F] leading-relaxed line-clamp-2">
            {treatment.shortDescription}
          </p>

          {/* Key highlights pill list */}
          <div className="mt-4 pt-4 border-t border-[#E8E5DD]/70 flex flex-wrap gap-1.5">
            {treatment.benefits.slice(0, 2).map((benefit, i) => (
              <span
                key={i}
                className="text-[11px] text-[#5C645F] bg-[#F3F1EA] px-2 py-0.5 rounded-xs line-clamp-1"
              >
                • {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-5 sm:px-6 pb-5 pt-1 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[#1C201E] border-t border-[#E8E5DD]/40 bg-[#FAF9F6]">
        <span className="group-hover:text-[#47584A] transition-colors">
          {language === 'ru' ? 'Подробнее о процедуре' : 'View Procedure & FAQs'}
        </span>
        <div className="w-7 h-7 rounded-sm border border-[#E8E5DD] flex items-center justify-center text-[#1C201E] group-hover:bg-[#1C201E] group-hover:text-[#FAF9F6] group-hover:border-[#1C201E] transition-all">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
};
