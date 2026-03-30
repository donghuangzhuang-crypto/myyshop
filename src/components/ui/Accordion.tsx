'use client';

import { useState } from 'react';

interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full flex items-center justify-between py-6 text-lg font-semibold text-dark text-left cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.question}
            <span className={`text-2xl font-light text-gray-600 min-w-[24px] text-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[300px] pb-5' : 'max-h-0'}`}
          >
            <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
