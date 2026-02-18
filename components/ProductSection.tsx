
import React from 'react';
import { MessageCircle, Shield, Award, Clock } from 'lucide-react';

const ProductSection: React.FC = () => {
  const whatsappNumber = "04169110641";
  const message = encodeURIComponent("Hola AURIX, deseo agendar una cita para ver los Zarcillos de Esmeralda.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Product Image - Reflejando la imagen proporcionada de zarcillos sobre tela */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-slate-50 rounded-[2rem] -z-10 transition-transform group-hover:scale-105"></div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1630030538557-1b71829f2359?auto=format&fit=crop&q=80&w=800" 
                alt="Zarcillos de Esmeralda 35 mm" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Overlay indicando Oro 18k */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm flex items-center space-x-2 border border-[#D4AF37]/20">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Certificado 18K</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 serif text-slate-900">
              Zarcillos de Esmeralda 35 mm
            </h2>
            <p className="text-2xl text-[#D4AF37] font-semibold mb-8 serif italic">
              Oro 18k con cierre de presión
            </p>
            
            <div className="space-y-6 mb-10 text-slate-600 leading-relaxed">
              <p>
                Somos la primera joyería de lujo en Caracas con un enfoque <strong className="text-slate-900">omnicanal nativo digital</strong>. Nuestras piezas son diseñadas para quienes valoran la exclusividad del oro como un refugio de valor.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>Esmeraldas Naturales</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span>Cierre de Seguridad</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl mb-10 flex justify-between items-center">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">Precio Exclusivo</span>
                <span className="text-5xl font-bold text-slate-900">$25</span>
              </div>
              <div className="text-right">
                <span className="block text-xs text-slate-500 font-medium">Ubicación Privada</span>
                <span className="font-bold text-slate-800">CCCT, Caracas</span>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1e293b] hover:bg-slate-800 text-white font-bold py-5 px-8 rounded-xl flex items-center justify-center space-x-4 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-widest opacity-80">Agendar Visita</span>
                  <span className="text-lg">Cita por WhatsApp</span>
                </div>
              </a>
              <p className="text-center text-xs text-slate-400 font-medium">
                Atención personalizada: <span className="text-slate-600">0416-9110641</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
