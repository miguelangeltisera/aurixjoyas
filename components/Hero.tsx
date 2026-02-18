
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#FAF9F6]">
      <div className="absolute inset-0 z-0 flex justify-end">
        {/* Usando una imagen que evoca la proporcionada (modelo con zarcillo de esmeralda) */}
        <img 
          src="https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?auto=format&fit=crop&q=80&w=1200" 
          alt="AURIX Model" 
          className="h-full w-full lg:w-2/3 object-cover object-center md:object-right opacity-90 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white to-transparent hidden lg:block"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <span className="inline-block text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4">Elegancia Atemporal</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-slate-900 serif">
            AURIX:<br/>Joyas Eternas
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light mb-8 leading-relaxed italic serif">
            La Nueva Era del Lujo en Caracas
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-8"></div>
          <p className="text-lg text-slate-500 leading-relaxed max-w-md">
            Donde la Tradición del Oro Encuentra la Innovación Digital. Forjamos legados para quienes valoran la exclusividad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
