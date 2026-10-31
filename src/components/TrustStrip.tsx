import React from 'react';
import { Droplet, ShieldCheck, Truck, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: Droplet,
      title: '100% Pure Drinking Water',
      description: 'Drawn directly from subterranean aquifers in the pristine Aberdare Forest with natural mineral balance.',
      accent: 'text-sky-600 bg-sky-50 border-sky-200',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Hygienic',
      description: 'Sterilized through multi-stage micro-filtration, UV sanitation, and touchless automated bottling.',
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      icon: Truck,
      title: 'On-Time Delivery',
      description: 'Prompt daily route deliveries right to your doorstep for residential homes, corporate offices, and venues.',
      accent: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Focused',
      description: 'Simple refill exchanges, flexible subscription frequencies, and direct WhatsApp dispatch support.',
      accent: 'text-teal-700 bg-teal-50 border-teal-200',
    },
  ];

  return (
    <section className="bg-white py-8 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 hover:shadow-xs transition-all bg-slate-50/50"
              >
                <div className={`p-3 rounded-lg border shrink-0 ${pillar.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
