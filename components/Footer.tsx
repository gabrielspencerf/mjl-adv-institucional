
import React from 'react';
import { CONTACT_INFO, MailIcon, MapPinIcon, PhoneIcon, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative w-full bg-[#080504] text-stone-400 pt-20 pb-10 border-none outline-none ring-0">
      {/* Camada de segurança para garantir que não haja bordas do topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#080504] -translate-y-[1px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start space-y-6">
            <a href="#" className="group block">
              <h2 className="text-2xl text-white font-heading font-bold tracking-tight group-hover:text-mjl-gold transition-colors">MJL</h2>
              <span className="text-[10px] text-mjl-gold uppercase tracking-[0.4em] font-medium block mt-1">Advocacia</span>
            </a>
            <p className="text-sm leading-relaxed text-stone-500 max-w-xs font-light">
              Solidez jurídica e estratégia para proteger o que é mais importante para você e sua empresa.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">Menu</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <a href="#hero" className="hover:text-mjl-gold transition-colors duration-300 w-fit">Início</a>
              <a href="#sobre" className="hover:text-mjl-gold transition-colors duration-300 w-fit">Sobre</a>
              <a href="#atuacao" className="hover:text-mjl-gold transition-colors duration-300 w-fit">Áreas de Atuação</a>
              <a href="#faq" className="hover:text-mjl-gold transition-colors duration-300 w-fit">Dúvidas</a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">Contato & Localização</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <MapPinIcon className="w-5 h-5 text-mjl-darker group-hover:text-mjl-gold transition-colors bg-stone-800 rounded p-1 flex-shrink-0 mt-0.5" />
                <span className="group-hover:text-stone-300 transition-colors">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <PhoneIcon className="w-5 h-5 text-mjl-darker group-hover:text-mjl-gold transition-colors bg-stone-800 rounded p-1 flex-shrink-0" />
                <div className="flex gap-4 group-hover:text-stone-300 transition-colors">
                  <span>{CONTACT_INFO.phone}</span>
                  <span>{CONTACT_INFO.mobile}</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <MailIcon className="w-5 h-5 text-mjl-darker group-hover:text-mjl-gold transition-colors bg-stone-800 rounded p-1 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="group-hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright & Creative Lane Seal */}
        <div className="pt-12 flex flex-col-reverse md:flex-row justify-between items-center gap-8 border-none">
          
          {/* Left: Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-stone-600 font-medium">
            <span>&copy; {currentYear} MJL Advocacia</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-stone-800"></span>
            <span>OAB/RS 8.276</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-stone-800 mx-1"></span>
            <div className="flex gap-4 mt-2 sm:mt-0">
               <a href="#" className="hover:text-mjl-gold transition-colors">Privacidade</a>
               <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-mjl-gold transition-colors">WhatsApp</a>
            </div>
          </div>
          
          {/* Right: Creative Lane Badge */}
          <a 
            href="#" 
            className="group flex items-center gap-2.5 px-4 py-2 bg-[#110c0a] rounded-md border border-white/5 hover:border-mjl-gold/30 hover:bg-[#1a1210] transition-all duration-300"
            aria-label="Desenvolvido por Creative Lane"
          >
            <div className="flex flex-col items-end leading-none">
               <span className="text-[8px] text-stone-500 uppercase tracking-widest mb-0.5 group-hover:text-stone-400 transition-colors">Desenvolvido por</span>
               <span className="font-heading text-xs font-bold text-stone-300 group-hover:text-mjl-gold transition-colors">Creative Lane</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-mjl-gold transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400 group-hover:text-mjl-dark">
                 <polyline points="16 18 22 12 16 6"></polyline>
                 <polyline points="8 6 2 12 8 18"></polyline>
               </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
