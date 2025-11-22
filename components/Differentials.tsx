import React from 'react';
import { DIFFERENTIALS, WHATSAPP_LINK } from '../constants';
import Button from './Button';

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-mjl-light relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-1 space-y-6 sm:space-y-8 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-mjl-dark leading-tight">
              Por que escolher a <span className="text-mjl-gold">MJL</span>?
            </h2>
            <p className="text-mjl-gray text-base sm:text-lg leading-relaxed font-light">
              Não somos apenas advogados. Somos parceiros estratégicos do seu negócio e da sua família, focados em resultados.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <Button variant="primary" fullWidth className="shadow-lg">Falar com Especialista</Button>
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIALS.map((diff, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-sm shadow-card border-l-4 border-mjl-gold hover:-translate-y-2 transition-all duration-300 group reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-sm bg-mjl-dark text-mjl-gold flex items-center justify-center mb-6 group-hover:bg-mjl-gold group-hover:text-white transition-colors duration-300">
                  <diff.icon strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-mjl-dark mb-3">{diff.title}</h3>
                <p className="text-mjl-gray text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Differentials;