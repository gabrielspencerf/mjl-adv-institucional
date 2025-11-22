import React from 'react';
import { CONTACT_INFO, WHATSAPP_LINK, GOOGLE_MAPS_LINK, MAP_IFRAME_SRC, MailIcon, MapPinIcon, PhoneIcon, ClockIcon } from '../constants';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="relative bg-mjl-darker py-20 sm:py-28 overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mjl-gold/30 to-transparent"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-mjl-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Info Column */}
          <div className="reveal">
            <span className="text-mjl-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-heading">Atendimento</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Vamos conversar sobre <br/>
              <span className="text-mjl-gold">o seu caso?</span>
            </h2>
            <p className="text-stone-400 text-lg font-light mb-10 max-w-md leading-relaxed">
              Agende uma reunião presencial ou virtual. Estamos prontos para defender seus interesses com a atenção que você merece.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-mjl-gold group-hover:bg-mjl-gold group-hover:text-mjl-darker transition-all duration-500 ease-out-expo flex-shrink-0 mt-1">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-white font-heading font-bold text-lg">Localização</h3>
                  <p className="text-stone-400 mt-1 text-sm leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-mjl-gold text-xs uppercase tracking-widest mt-2 inline-block border-b border-transparent hover:border-mjl-gold transition-all duration-300 ease-out-expo">Ver no Google Maps</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-mjl-gold group-hover:bg-mjl-gold group-hover:text-mjl-darker transition-all duration-500 ease-out-expo flex-shrink-0 mt-1">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-white font-heading font-bold text-lg">Contato Direto</h3>
                  <div className="flex flex-col mt-1">
                     <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="text-stone-400 hover:text-white transition-colors duration-300 ease-out-expo text-sm">{CONTACT_INFO.phone}</a>
                     <a href={`tel:${CONTACT_INFO.mobile.replace(/\D/g,'')}`} className="text-stone-400 hover:text-white transition-colors duration-300 ease-out-expo text-sm">{CONTACT_INFO.mobile} (WhatsApp)</a>
                  </div>
                  <div className="mt-2 text-stone-500 text-xs flex items-center gap-2">
                     <ClockIcon className="w-3 h-3" />
                     <span>Seg - Sex, 09h às 18h</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button fullWidth variant="primary" className="py-4 text-base shadow-glow">
                        Iniciar Atendimento pelo WhatsApp
                    </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Visual/Map Column */}
          <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-sm overflow-hidden border border-white/10 group reveal delay-200">
             {/* Map Wrapper */}
             <div className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 ease-out-expo">
                <iframe 
                  title="Localização MJL Advocacia"
                  src={MAP_IFRAME_SRC} 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
             </div>
             
             {/* Floating card overlay */}
             <div className="absolute bottom-8 left-8 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 ease-out-expo">
                <div className="bg-mjl-dark/90 p-6 rounded-sm backdrop-blur-md border border-mjl-gold/30 shadow-2xl">
                    <span className="block text-mjl-gold font-bold tracking-widest text-xs uppercase font-heading mb-1">Nosso Escritório</span>
                    <span className="block text-white font-bold text-xl">Petrópolis</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;