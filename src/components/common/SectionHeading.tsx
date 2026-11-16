import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = 'left',
  className = '',
  dark = false,
}) => {
  return (
    <div
      className={`space-y-3 ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] font-medium">
          {align === 'center' && <span className={`w-6 h-[1px] ${dark ? 'bg-[#819584]' : 'bg-[#819584]'}`} />}
          <span className={dark ? 'text-[#819584]' : 'text-[#47584A]'}>
            {eyebrow}
          </span>
          <span className={`w-6 h-[1px] ${dark ? 'bg-[#819584]' : 'bg-[#819584]'}`} />
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight leading-[1.2] ${
          dark ? 'text-[#FAF9F6]' : 'text-[#1C201E]'
        }`}
      >
        {title}{' '}
        {italicWord && (
          <span className="font-serif italic font-normal text-[#819584]">
            {italicWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
          } ${dark ? 'text-[#D7D3C8]/80' : 'text-[#5C645F]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
