import React, { useState } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Droplet, Sparkles, Truck, CheckCircle2, Eye } from 'lucide-react';
import { COMPANY_INFO } from '../data/waterData';

interface HeroProps {
  onOrderNowClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNowClick }) => {
  const [selectedView, setSelectedView] = useState<'mountain' | 'bottle' | 'poster'>('mountain');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(`Hi Mount Abadares Fresh Water! I saw your website and would like to order fresh spring water for delivery.`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const getImageSrc = () => {
    switch (selectedView) {
      case 'mountain':
        return '/src/assets/images/hero_abadares_epic_1793438592348.jpg';
      case 'bottle':
        return '/src/assets/images/abadares_20l_badass_1793438592481.jpg';
      case 'poster':
        return '/assets/aistudio/Screenshot_20261031-115111_4a3e8b50.png';
      default:
        return '/src/assets/images/hero_abadares_epic_1793438592348.jpg';
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-slate-200/60 pt-6 pb-12 lg:pt-10 lg:pb-16">
      {/* Background ambient water glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-md border border-emerald-200/80">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>PURE • SAFE • REFRESHING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
              Mount Abadares <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-sky-600">
                Fresh Water
              </span>
            </h1>

            {/* Sub-headline & Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
              Pure from the Aberdares, for a healthier you. Sourced directly from pristine volcanic mountain aquifers and delivered fresh to your home, office, or event.
            </p>

            {/* Key Quality Pillars (Inline metadata) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-semibold text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Naturally Alkaline pH 7.4</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Multi-Stage UV Purification</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Same-Day Doorstep Dispatch</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOrderNowClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-md shadow-emerald-700/20 whitespace-nowrap"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-emerald-500 hover:text-emerald-700 transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Order via WhatsApp</span>
              </button>
            </div>

            {/* Quick Slogan Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-sky-600" /> Fast & Reliable Delivery
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Your Health, Our Priority
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-blue-600" /> Pure by Nature
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Display (From User's Provided Screenshots) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xl group">
              {/* Asset View Selector Switcher */}
              <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between">
                <div className="inline-flex bg-slate-900/85 backdrop-blur-md p-1 rounded-lg border border-white/20 text-xs font-medium text-white shadow-lg">
                  <button
                    onClick={() => setSelectedView('mountain')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      selectedView === 'mountain'
                        ? 'bg-emerald-600 text-white font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Mountain Spring
                  </button>
                  <button
                    onClick={() => setSelectedView('bottle')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      selectedView === 'bottle'
                        ? 'bg-emerald-600 text-white font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    20L Dispenser
                  </button>
                  <button
                    onClick={() => setSelectedView('poster')}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      selectedView === 'poster'
                        ? 'bg-emerald-600 text-white font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Original Poster
                  </button>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-slate-900/85 backdrop-blur-md p-1.5 rounded-lg border border-white/20 text-white/90 hover:text-white hover:bg-slate-800 transition-colors shadow-lg"
                  title="Expand image preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Main Visual Display */}
              <div className="relative w-full aspect-4/3 sm:aspect-16/10 max-h-[460px] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={getImageSrc()}
                  alt="Mount Abadares Fresh Water Bottles and Mountain Source"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Gradient Scrim at Bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 sm:p-5 text-white flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                        Direct From Mountain Aquifers
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-white">
                        20L Dispenser • 5L Family • 1.5L • 1L • 500ml Pack
                      </p>
                    </div>
                    <span className="hidden sm:inline-block px-2.5 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-md">
                      KEBS Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Floating Badge */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg rounded-xl p-3 items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Droplet className="w-5 h-5 fill-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Natural Spring Bottling</p>
                <p className="text-[11px] text-slate-500">Untouched by human hands</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Screenshot Viewing */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
          <div className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-3 bg-slate-800 text-white flex items-center justify-between text-sm font-semibold">
              <span>Original Mount Abadares Brand Asset</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-md text-xs font-bold"
              >
                Close (ESC)
              </button>
            </div>
            <div className="overflow-auto p-2 flex items-center justify-center">
              <img
                src={getImageSrc()}
                alt="Full Brand Asset"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
