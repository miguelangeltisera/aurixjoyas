
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
           {/* Representación del logo proporcionado (A con diamante) */}
           <div className="relative w-10 h-10 bg-[#1e293b] rounded-md flex items-center justify-center shadow-sm">
              <span className="text-[#D4AF37] font-bold text-xl serif">A</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rotate-45 border border-white"></div>
           </div>
           <span className="text-2xl font-bold tracking-[0.2em] text-[#1e293b] uppercase">AURIX</span>
        </div>
        <div className="hidden md:block">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37]">Caracas Luxury</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
