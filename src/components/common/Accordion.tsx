import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`divide-y divide-[#E8E5DD] border-y border-[#E8E5DD] ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div key={item.id || idx} className="py-4 sm:py-5 transition-colors">
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-medium text-[#1C201E] group-hover:text-[#47584A] transition-colors leading-snug">
                {item.question}
              </span>
              <span
                className={`w-7 h-7 rounded-sm flex items-center justify-center border border-[#E8E5DD] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#E8EFE9] text-[#2D3A30] border-[#819584]/40' : 'text-[#8F8B82] group-hover:border-[#819584]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="mt-3.5 pr-6 sm:pr-12 text-sm text-[#5C645F] leading-relaxed animate-in fade-in duration-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
