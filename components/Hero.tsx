import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';
import { WHATSAPP_LINK, IMAGES, GOOGLE_MAPS_LINK } from '../constants';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      if (window.scrollY < window.innerHeight + 100) {
        setOffsetY(window.scrollY * 0.4);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative h-[100dvh] min-h-[700px] flex items-center bg-[#0a0605] overflow-hidden"
    >
      {/* Background Image Layer with Parallax & Lazy Load Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0605]">
         {/* Wrapper handles Parallax Transform */}
         <div 
           style={{ 
             transform: `translateY(${offsetY}px) scale(1.1)`,
             willChange: 'transform'
           }}
           className="absolute top-[-10%] left-0 w-full h-[120%] transition-transform duration-75 ease-out"
         >
           <img 
             src={IMAGES.HERO_BG}
             alt="Background"
             loading="lazy"
             onLoad={() => setImgLoaded(true)}
             className={`w-full h-full object-cover transition-all duration-1000 ease-out-expo ${
               imgLoaded ? 'opacity-50 blur-0 scale-100' : 'opacity-0 blur-lg scale-105'
             }`}
           />
         </div>
         
         {/* Moving Orbs/Glows (The "Alive" Effect) - Opacity refined */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-mjl-gold/10 rounded-full mix-blend-screen blur-[100px] animate-blob opacity-30"></div>
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#C6A168]/10 rounded-full mix-blend-screen blur-[80px] animate-blob animation-delay-2000 opacity-20"></div>
            <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-mjl-gold/5 rounded-full mix-blend-screen blur-[120px] animate-blob animation-delay-4000 opacity-30"></div>
         </div>
         
         {/* Heavy Gradient Overlay for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#080504] via-[#080504]/85 to-[#080504]/20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#080504] via-transparent to-[#080504]/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-20">
        {/* Staggered reveal animations applied to children */}
        <div className="max-w-3xl space-y-8">
          
          {/* Google Review Social Proof Badge */}
          <div className="flex flex-wrap items-center gap-4 mb-6 reveal">
             <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0605] bg-teal-700 flex items-center justify-center text-white text-xs font-bold" title="Avaliação de Cliente">A</div>
                <img 
                  className="w-10 h-10 rounded-full border-2 border-[#0a0605] object-cover" 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100" 
                  alt="Foto de cliente"
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-[#0a0605] object-cover" 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100" 
                  alt="Foto de cliente"
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                />
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0605] bg-slate-600 flex items-center justify-center text-white text-xs font-bold" title="Avaliação de Cliente">K</div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0a0605] bg-stone-800 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100" 
                    alt="Foto de cliente"
                    loading="lazy"
                    decoding="async"
                    width="40"
                    height="40"
                  />
                </div>
             </div>
             
             <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 hover:border-mjl-gold/50 transition-all duration-300 cursor-pointer group">
                 <svg className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                 </svg>
                 <span className="text-white font-bold">5.0</span>
                 <span className="text-stone-300 text-sm ml-0.5 group-hover:text-white transition-colors">Google</span>
                 <span className="text-stone-500 text-sm mx-1">|</span>
                 <span className="text-stone-300 text-sm font-medium underline decoration-mjl-gold/50 underline-offset-4 group-hover:text-mjl-gold group-hover:decoration-mjl-gold transition-all">101 avaliações</span>
             </a>
          </div>

          {/* Headline - Staggered delay */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight drop-shadow-xl reveal delay-100">
            Defesa Ética e <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mjl-gold via-mjl-goldLight to-mjl-gold animate-shine bg-[length:200%_auto]">
              Estratégia Jurídica
            </span>
          </h1>
          
          {/* Subheadline - Staggered delay */}
          <p className="text-stone-300 text-lg sm:text-xl leading-relaxed font-light max-w-xl border-l-2 border-mjl-gold pl-6 reveal delay-200">
            Atuação especializada em Direito Imobiliário, Família e Empresarial. Segurança para seu patrimônio e clareza para suas decisões.
          </p>

          {/* CTA Area - Staggered delay */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 reveal delay-300">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto focus:outline-none">
              <Button fullWidth className="shadow-[0_0_30px_-5px_rgba(150,114,65,0.3)] hover:shadow-[0_0_30px_-5px_rgba(150,114,65,0.5)]">
                Agendar Consultoria
              </Button>
            </a>
            <a href="#atuacao" className="w-full sm:w-auto focus:outline-none">
              <Button variant="outline-light" fullWidth>
                Conheça Nossas Áreas
              </Button>
            </a>
          </div>

          {/* Stats Mini-bar - Staggered delay */}
          <div className="pt-12 flex items-center gap-8 border-t border-white/5 mt-8 reveal delay-500">
            <div className="group cursor-default">
              <span className="block text-2xl font-bold text-white font-heading group-hover:text-mjl-gold transition-colors duration-500 ease-out-expo">15+</span>
              <span className="text-[10px] text-stone-400 uppercase tracking-wider">Anos de Atuação</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="group cursor-default">
              <span className="block text-2xl font-bold text-white font-heading group-hover:text-mjl-gold transition-colors duration-500 ease-out-expo">500+</span>
              <span className="text-[10px] text-stone-400 uppercase tracking-wider">Casos de Sucesso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#sobre"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-500 ease-out-expo cursor-pointer focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-mjl-gold rounded-lg p-2 animate-float"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="text-[10px] text-white uppercase tracking-widest font-light">Role para saber mais</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-mjl-gold rounded-full animate-scroll-indicator"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;