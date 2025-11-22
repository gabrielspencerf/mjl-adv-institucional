import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Atuação', href: '#atuacao' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-mjl-dark/95 backdrop-blur-md py-3 lg:py-4 shadow-lg border-b border-white/5' 
            : 'bg-transparent py-4 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-50">
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-9 h-9 lg:w-10 lg:h-10 border border-mjl-gold flex items-center justify-center rounded-sm bg-mjl-gold/10 group-hover:bg-mjl-gold transition-all duration-300">
                  <span className="font-heading text-lg lg:text-xl text-mjl-gold font-bold group-hover:text-mjl-dark transition-colors">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl lg:text-2xl text-white leading-none tracking-tight font-bold group-hover:text-mjl-gold transition-colors">MJL</span>
                  <span className="text-[8px] lg:text-[10px] text-mjl-gold tracking-[0.3em] uppercase mt-0.5 font-medium">Advocacia</span>
                </div>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-mjl-gold text-xs font-bold uppercase tracking-widest transition-all relative group font-heading py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-mjl-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-mjl-gold text-mjl-dark px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-glow"
              >
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 focus:outline-none transition-colors hover:text-mjl-gold"
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-mjl-dark/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col justify-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-mjl-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-mjl-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 p-8 relative z-10">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-heading font-bold text-white hover:text-mjl-gold transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className={`pt-8 transition-all duration-700 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <a 
              href={WHATSAPP_LINK}
              className="text-mjl-gold border border-mjl-gold px-12 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-mjl-gold hover:text-mjl-dark transition-all shadow-glow"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;