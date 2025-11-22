import React from 'react';
import { TESTIMONIALS, StarIcon, GoogleIcon, GOOGLE_MAPS_LINK } from '../constants';
import Button from './Button';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-mjl-dark relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal">
           <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-white/5 rounded-full border border-white/10">
              <GoogleIcon className="text-white w-4 h-4" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Google Reviews</span>
           </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            O que dizem nossos clientes
          </h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="text-mjl-gold text-2xl font-bold">5.0</span>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-5 h-5 text-mjl-gold" />)}
            </div>
            <span className="text-stone-400 text-sm ml-2">na avaliação geral</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-sm shadow-lg border-t-4 border-mjl-gold relative group hover:-translate-y-2 transition-transform duration-500 ease-out-expo reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-mjl-dark text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-mjl-dark text-sm">{item.name}</p>
                    <p className="text-xs text-stone-400">{item.date}</p>
                  </div>
                </div>
                <GoogleIcon className="w-5 h-5 text-stone-200" />
              </div>
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                   <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-stone-600 text-sm leading-relaxed italic">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal delay-200">
          <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
            <Button variant="outline-light" fullWidth>
              Ver todas as avaliações no Google
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;