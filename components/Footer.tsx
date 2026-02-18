
import React from 'react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 tracking-[0.2em] uppercase mb-6 serif">AURIX</h3>
            <p className="max-w-md leading-relaxed font-light text-slate-500">
              La primera joyería nativa digital de Venezuela. Refugio de valor y herencia para el futuro en Oro de 18 quilates.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>0416-9110641</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-1" />
                <span>CCCT, Nivel C2, Caracas. <br/><span className="text-[10px] text-slate-400 italic">Solo Previa Cita</span></span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-300">
            AURIX Caracas © 2026 | Luxury Asset Management
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
