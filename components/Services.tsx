import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="atuacao" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 reveal">
          <span className="text-mjl-gold font-bold uppercase tracking-[0.2em] text-xs mb-3 block font-heading">Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-mjl-dark mb-6">Áreas de Atuação</h2>
          <p className="text-stone-600 text-lg font-light px-4">
            Soluções jurídicas integradas para desafios complexos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 sm:p-10 rounded-sm border border-stone-100 hover:border-mjl-gold transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-mjl-goldDim rounded-sm flex items-center justify-center text-mjl-gold mb-6 sm:mb-8 group-hover:bg-mjl-gold group-hover:text-white transition-colors duration-500">
                <service.icon strokeWidth={1.5} className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-heading font-bold text-mjl-dark mb-4 group-hover:text-mjl-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start text-stone-600 text-sm leading-relaxed group-hover:text-stone-900 transition-colors duration-300">
                    <span className="mr-3 text-mjl-gold mt-1.5 w-1 h-1 rounded-full bg-mjl-gold flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;