
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-mjl-light border-none">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-mjl-gold font-bold uppercase tracking-widest text-xs font-heading">Suporte</span>
          <h2 className="text-3xl font-heading font-bold text-mjl-dark mt-3">Dúvidas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-sm border border-stone-100 hover:border-mjl-gold/50 transition-colors duration-300"
            >
              <button
                className="w-full px-6 sm:px-8 py-5 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`font-medium text-base sm:text-lg font-heading transition-colors ${openIndex === index ? 'text-mjl-gold' : 'text-stone-800 group-hover:text-mjl-dark'}`}>
                  {item.question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-mjl-gold' : 'text-stone-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 sm:px-8 pb-6 text-stone-600 leading-relaxed text-sm sm:text-base border-t border-stone-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
