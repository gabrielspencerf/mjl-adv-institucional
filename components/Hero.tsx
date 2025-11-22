
import React from 'react';
import Button from './Button';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[100dvh] min-h-[700px] flex items-center bg-[#0a0605] overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" 
           alt="Escritório de Advocacia MJL" 
           className="w-full h-full object-cover opacity-60"
         />
         
         {/* Heavy Gradient Overlay for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#080504] via-[#080504]/90 to-[#080504]/40"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#080504]/50 via-transparent to-[#080504]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="max-w-3xl animate-fade-in-up space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-sm">
            <div className="w-1.5 h-1.5 bg-mjl-gold rounded-full animate-pulse"></div>
            <span className="text-stone-300 text-[10px] font-bold tracking-[0.25em] uppercase font-heading">Advocacia em Porto Alegre</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
            Defesa Ética e <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mjl-gold to-mjl-goldLight">
              Estratégia Jurídica
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-stone-300 text-lg sm:text-xl leading-relaxed font-light max-w-xl">
            Atuação especializada em Direito Imobiliário, Família e Empresarial. Segurança para seu patrimônio e clareza para suas decisões.
          </p>

          {/* CTA Area */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button fullWidth className="shadow-[0_0_30px_-5px_rgba(150,114,65,0.3)] hover:shadow-[0_0_30px_-5px_rgba(150,114,65,0.5)]">
                Agendar Consultoria
              </Button>
            </a>
            <a href="#atuacao" className="w-full sm:w-auto">
              <Button variant="outline" fullWidth className="border-white/20 text-stone-300 hover:bg-white hover:text-mjl-dark">
                Conheça Nossas Áreas
              </Button>
            </a>
          </div>

          {/* Stats Mini-bar */}
          <div className="pt-10 flex items-center gap-8 border-t border-white/5 mt-8">
            <div>
              <span className="block text-2xl font-bold text-white font-heading">15+</span>
              <span className="text-[10px] text-mjl-gold uppercase tracking-wider">Anos de Atuação</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div>
              <span className="block text-2xl font-bold text-white font-heading">500+</span>
              <span className="text-[10px] text-mjl-gold uppercase tracking-wider">Casos de Sucesso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
