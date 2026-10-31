import React from 'react';
import { MINERAL_SPECS } from '../data/waterData';
import { Mountain, Droplet, ShieldCheck, Award, CheckCircle } from 'lucide-react';

export const AberdareSourceSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Pristine Cloud Forest Rainfall',
      desc: 'Rainfall in the protected Aberdare national forest ecosystem percolates through virgin bamboo and cedar groves.',
    },
    {
      step: '02',
      title: 'Centuries of Volcanic Rock Filtration',
      desc: 'Deep subterranean volcanic strata naturally filter the water, enriching it with bioavailable minerals like calcium and magnesium.',
    },
    {
      step: '03',
      title: 'Gentle UV & Micro-Filtration',
      desc: 'Physical 0.2-micron filtration and germicidal UV light eliminate any bacteria while preserving natural spring vitality and crisp taste.',
    },
    {
      step: '04',
      title: 'Touchless Cleanroom Bottling',
      desc: 'Bottled directly at source into sterilized, food-grade, BPA-free containers with security tamper seals.',
    },
  ];

  return (
    <section id="source" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/70 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Mountain className="w-3.5 h-3.5" />
            <span>Origin Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pure From the Heart of the Aberdares
          </h2>
          <p className="text-base text-slate-600 mt-2 font-medium">
            Discover why our natural mountain spring water tastes extraordinarily clean, smooth, and revitalizing.
          </p>
        </div>

        {/* 2-Column Split: Process Steps & Mineral Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Natural Journey Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              
              {/* Natural River & Mountain Source Visual */}
              <div className="relative w-full h-48 sm:h-56 bg-slate-900 overflow-hidden">
                <img
                  src="/src/assets/images/hero_aberdare_water_1793437534139.jpg"
                  alt="Aberdare Mountain Spring Fresh Flowing River"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-5">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                      High-Altitude Volcanic Aquifers
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                      Protected Highland Forest Water Table
                    </h4>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-emerald-600" />
                  <span>The 4-Stage Natural Spring Journey</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {steps.map((item, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-emerald-500/40">
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Step {item.step}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quality Guarantee Callout */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-600 text-white rounded-lg">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">KEBS Standard Certified</h4>
                    <p className="text-[11px] text-slate-600">Meets and exceeds national drinking water hygiene regulations</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>100% Tested Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Right Column: Certified Mineral Composition Table */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Certified Mineral Analysis</h3>
                  <p className="text-xs text-slate-500">Laboratory verified chemical and physical profile</p>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md">
                  pH 7.4 Alkaline
                </span>
              </div>

              {/* Table of Minerals */}
              <div className="divide-y divide-slate-100 text-xs">
                {MINERAL_SPECS.map((spec, i) => (
                  <div key={i} className="py-2.5 flex items-start justify-between gap-3">
                    <div>
                      <span className="font-semibold text-slate-800 block">{spec.name}</span>
                      <span className="text-[11px] text-slate-500 leading-tight">{spec.benefit}</span>
                    </div>
                    <span className="font-mono font-bold text-slate-900 shrink-0 text-right bg-slate-50 px-2 py-1 rounded border border-slate-100">
                      {spec.amount}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl bg-sky-50 border border-sky-100 text-sky-900 text-[11px] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Zero chemical chlorine treatment. Zero artificial remineralization. 100% natural.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
