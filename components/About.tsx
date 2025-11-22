import React from 'react';
import { MapPinIcon } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-mjl-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
          <div className="relative order-1 lg:order-1 group reveal">
            <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-mjl-gold/10 rounded-full blur-3xl group-hover:bg-mjl-gold/20 transition-all duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
              alt="Escritório Moderno"
              className="relative rounded-sm shadow-2xl w-full object-cover aspect-[4/3] z-10 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 bg-mjl-dark z-0"></div>
            
            {/* Stats Box - Responsive Positioning */}
            <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:-right-8 bg-white p-6 sm:p-8 shadow-xl z-20 max-w-[180px] sm:max-w-[220px] border-t-4 border-mjl-gold">
              <p className="font-heading text-4xl sm:text-5xl text-mjl-dark font-bold">15</p>
              <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest mt-2 font-bold">Anos de experiência sólida</p>
            </div>
          </div>
          
          <div className="order-2 lg:order-2 reveal delay-200">
            <span className="text-mjl-gold font-bold tracking-widest uppercase text-xs mb-4 block font-heading">Sobre o Escritório</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-mjl-dark mb-6 sm:mb-8 leading-tight">
              Advocacia moderna,<br/> 
              ética e <span className="text-mjl-gold">eficiente</span>.
            </h2>
            <div className="space-y-4 sm:space-y-6 text-stone-600 leading-relaxed text-base sm:text-lg font-light">
              <p>
                A <strong className="text-mjl-dark font-semibold">MJL Advocacia</strong> destaca-se no cenário jurídico de Porto Alegre pela abordagem técnica refinada em Direito Imobiliário, Família e Empresarial.
              </p>
              <p>
                Nossa filosofia rompe com o modelo tradicional burocrático. Focamos na resolução ágil de conflitos, priorizando a segurança patrimonial e a economia processual de nossos clientes.
              </p>
              <div className="flex items-center pt-4 text-mjl-dark font-medium">
                <MapPinIcon className="w-5 h-5 text-mjl-gold mr-3" />
                <span className="font-heading text-sm font-semibold tracking-wide uppercase">Petrópolis, Porto Alegre/RS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="relative bg-mjl-dark rounded-sm sm:rounded-2xl p-6 sm:p-16 overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-white">
                <rect x="0" y="0" width="100" height="100" />
             </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-2xl group max-w-sm mx-auto lg:max-w-none">
                <img 
                   src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1000" 
                   alt="Germano Mejler" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-mjl-dark via-transparent to-transparent opacity-90"></div>
                 <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="h-1 w-12 bg-mjl-gold mb-4"></div>
                    <p className="text-white font-heading font-bold text-2xl">Germano Mejler</p>
                    <p className="text-mjl-gold text-xs uppercase tracking-widest mt-1 font-medium">Sócio Fundador</p>
                 </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 text-white/90">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white">Liderança Técnica e Estratégica</h3>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                <div className="space-y-4">
                   <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                     Formado pela UniRitter em 2009 e pós-graduado em Direito Empresarial, Germano Mejler (OAB/RS 78.751) lidera o escritório com uma visão contemporânea do Direito.
                   </p>
                   <p className="text-stone-300 leading-relaxed text-sm sm:text-base">
                     Sua atuação é pautada pela prevenção de riscos e pela construção de soluções jurídicas que agregam valor aos negócios e à vida de seus clientes.
                   </p>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  <div className="border-l border-mjl-gold pl-6 hover:pl-8 transition-all duration-300">
                    <h4 className="text-white font-heading font-bold text-lg mb-2">Expertise</h4>
                    <p className="text-sm text-stone-400">Direito Empresarial, Imobiliário e Gestão Patrimonial.</p>
                  </div>
                  <div className="border-l border-mjl-gold pl-6 hover:pl-8 transition-all duration-300">
                    <h4 className="text-white font-heading font-bold text-lg mb-2">Abordagem</h4>
                    <p className="text-sm text-stone-400">Negociação assertiva e foco em resultados práticos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;