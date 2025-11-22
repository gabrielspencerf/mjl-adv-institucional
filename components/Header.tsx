import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK, IMAGES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: "-50% 0px -50% 0px" // Trigger when section is in middle of screen
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
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
    { name: 'Início', href: '#hero', id: 'hero' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Atuação', href: '#atuacao', id: 'atuacao' },
    { name: 'Diferenciais', href: '#diferenciais', id: 'diferenciais' },
    { name: 'Dúvidas', href: '#faq', id: 'faq' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-700 ease-out-expo ${
          scrolled 
            ? 'bg-mjl-darker/80 backdrop-blur-xl py-3 lg:py-4 shadow-lg border-b border-white/5' 
            : 'bg-transparent py-4 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-50">
              <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-mjl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-mjl-darker rounded-sm p-1">
                {IMAGES.LOGO ? (
                   <img src={IMAGES.LOGO} alt="MJL Advocacia" className="h-10 w-auto object-contain transition-transform duration-500 ease-out-expo group-hover:scale-105" />
                ) : (
                  <>
                    <div className="w-9 h-9 lg:w-10 lg:h-10 border border-mjl-gold flex items-center justify-center rounded-sm bg-mjl-gold/10 group-hover:bg-mjl-gold transition-colors duration-500 ease-out-expo">
                      <span className="font-heading text-lg lg:text-xl text-mjl-gold font-bold group-hover:text-mjl-dark transition-colors">M</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading text-xl lg:text-2xl text-white leading-none tracking-tight font-bold group-hover:text-mjl-gold transition-colors duration-500">MJL</span>
                      <span className="text-[8px] lg:text-[10px] text-mjl-gold tracking-[0.3em] uppercase mt-0.5 font-medium">Advocacia</span>
                    </div>
                  </>
                )}
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Menu Principal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`
                    text-xs font-bold uppercase tracking-widest 
                    transition-all duration-500 ease-out-expo 
                    relative group font-heading py-2 px-1 
                    focus:outline-none focus-visible:text-mjl-gold focus-visible:ring-2 focus-visible:ring-mjl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-mjl-darker rounded-sm
                    ${activeSection === link.id 
                      ? 'text-mjl-gold drop-shadow-[0_0_10px_rgba(140,107,61,0.6)]' 
                      : 'text-stone-300 hover:text-white'
                    }
                  `}
                >
                  {link.name}
                  {/* Fixed Line Animation: Always anchors left, grows to right */}
                  <span className={`
                    absolute bottom-0 left-0 h-[2px] bg-mjl-gold 
                    transition-all duration-500 ease-out-expo
                    ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}></span>
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-mjl-gold text-mjl-dark px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-500 ease-out-expo shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mjl-darker"
              >
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-mjl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-mjl-darker rounded-md transition-colors hover:text-mjl-gold"
                aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transition-all duration-500 ease-out-expo ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-500 ease-out-expo ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-500 ease-out-expo ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-mjl-darker/95 backdrop-blur-2xl transition-all duration-700 ease-out-expo md:hidden flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-mjl-gold/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-mjl-gold/5 rounded-full blur-3xl animate-pulse-slow delay-100"></div>
        </div>

        <nav className="flex flex-col items-center justify-center space-y-8 relative z-10 w-full">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl sm:text-3xl font-heading font-bold transition-all duration-700 ease-out-expo transform focus:outline-none ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${activeSection === link.id ? 'text-mjl-gold' : 'text-white hover:text-mjl-gold'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.name}
            </a>
          ))}
          <div className={`pt-8 transition-all duration-700 delay-500 ease-out-expo ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <a 
              href={WHATSAPP_LINK}
              className="text-mjl-gold border border-mjl-gold px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-mjl-gold hover:text-mjl-dark transition-all duration-500 ease-out-expo shadow-glow"
              tabIndex={isOpen ? 0 : -1}
            >
              Fale Conosco
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;