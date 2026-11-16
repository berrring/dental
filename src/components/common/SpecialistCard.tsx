import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Specialist } from '../../types';

interface SpecialistCardProps {
  specialist: Specialist;
}

export const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-[#FAF9F6] border border-[#E8E5DD] hover:border-[#819584] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Photo Container */}
        <div className="relative aspect-4/5 overflow-hidden bg-[#F3F1EA]">
          <img
            src={specialist.image}
            alt={specialist.name}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C201E]/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Danish title & experience badge */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#FAF9F6]/20 backdrop-blur-md rounded-xs border border-white/20">
              {specialist.experienceYears} {language === 'ru' ? 'лет практики' : 'Years Practice'}
            </span>
            <p className="text-xs text-[#D7D3C8] mt-1 font-mono">
              {specialist.danishTitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium text-[#1C201E] group-hover:text-[#47584A] transition-colors">
              {specialist.name}
            </h3>
            <p className="text-xs uppercase font-mono tracking-wider text-[#819584] mt-0.5">
              {specialist.title}
            </p>
          </div>

          <p className="text-xs text-[#5C645F] leading-relaxed line-clamp-3">
            {specialist.bio}
          </p>

          {/* Philosophy Quote */}
          <div className="p-3 bg-[#F3F1EA] border-l-2 border-[#819584] rounded-r-xs">
            <p className="font-serif italic text-xs text-[#3D4440] leading-snug">
              "{specialist.quote}"
            </p>
          </div>

          {/* Education & Days */}
          <div className="pt-2 border-t border-[#E8E5DD] space-y-1.5 text-xs text-[#5C645F]">
            <p className="flex items-start gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#819584] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{specialist.education}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#819584] shrink-0" />
              <span>{language === 'ru' ? 'Дни приема' : 'Studio Days'}: {specialist.availableDays.join(', ')}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Action */}
      <div className="p-5 sm:p-6 pt-0">
        <Link
          to={`/book?dentist=${specialist.id}`}
          className="w-full inline-flex items-center justify-center gap-2 text-xs tracking-wider uppercase font-medium px-4 py-2.5 bg-[#F3F1EA] text-[#1C201E] hover:bg-[#1C201E] hover:text-[#FAF9F6] border border-[#E8E5DD] hover:border-[#1C201E] transition-all rounded-sm"
        >
          <span>{language === 'ru' ? 'Записаться на консультацию' : 'Book Consultation'}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
