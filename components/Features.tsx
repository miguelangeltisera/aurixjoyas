
import React from 'react';
import { Smartphone, PencilRuler, UserCheck, TrendingUp } from 'lucide-react';

const FeatureCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  badge?: string 
}> = ({ icon, title, description, badge }) => (
  <div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500">
    <div className="mb-6 inline-flex p-4 rounded-xl bg-slate-50 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    {badge && (
      <span className="inline-block mb-3 text-[10px] font-bold tracking-tighter text-white bg-[#D4AF37] px-2 py-0.5 rounded shadow-sm">
        {badge}
      </span>
    )}
    <h3 className="text-xl font-bold mb-4 text-slate-900 serif">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 serif">¿Por qué elegir AURIX?</h2>
          <p className="text-lg text-slate-500 leading-relaxed font-light">
            En AURIX, no solo creamos joyas; forjamos legados. Somos la evolución del lujo patrimonial en Venezuela.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Smartphone className="w-6 h-6" />}
            badge="+2"
            title="AR Experience"
            description="Visualiza tu próxima joya en tiempo real mediante Realidad Aumentada (AR) antes de comprar."
          />
          <FeatureCard 
            icon={<PencilRuler className="w-6 h-6" />}
            badge="+2"
            title="Personalización"
            description="Diseña piezas únicas que reflejen tu esencia con nuestro servicio de personalización asistida."
          />
          <FeatureCard 
            icon={<UserCheck className="w-6 h-6" />}
            badge="+1"
            title="Concierge Digital"
            description="Atención personalizada de alto nivel a un clic, garantizando una compra sin fricciones."
          />
          <FeatureCard 
            icon={<TrendingUp className="w-6 h-6" />}
            title="Valor Patrimonial"
            description="Activos de inversión en oro de 18K, un refugio de valor en contextos económicos volátiles."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
