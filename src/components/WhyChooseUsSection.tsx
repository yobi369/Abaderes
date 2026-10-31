import React, { useEffect, useState } from 'react';
import { ShieldCheck, Truck, Droplets, RefreshCw, Sparkles, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/waterData';

export const WhyChooseUsSection: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || TESTIMONIALS.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPreviousReview = () => {
    setActiveReview((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const showNextReview = () => {
    setActiveReview((current) => (current + 1) % TESTIMONIALS.length);
  };

  const advantages = [
    {
      icon: Droplets,
      title: 'Six-Stage Reverse Osmosis',
      desc: 'The packaged drinking water undergoes a six-stage reverse osmosis purification process designed to remove impurities.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Packaging',
      desc: 'The water is carefully processed and hygienically packaged under the company’s stated quality standards.',
    },
    {
      icon: Truck,
      title: 'Dedicated Fleet Delivery',
      desc: 'Our fleet of delivery vans runs predictable routes daily, ensuring your home or office never runs dry.',
    },
    {
      icon: RefreshCw,
      title: 'Effortless Refill Exchange',
      desc: 'Simply leave your empty containers at the door or reception; our drivers swap them directly with fresh sealed bottles.',
    },
    {
      icon: Clock,
      title: 'Rapid WhatsApp Response',
      desc: 'Place repeat orders with a single WhatsApp message. Instant confirmation and live dispatch estimates.',
    },
    {
      icon: Sparkles,
      title: 'Reported Water Profile',
      desc: 'The product profile lists calcium, magnesium, sodium, potassium, manganese, chloride, sulfate, nitrate, TDS and pH.',
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Choose Mount Abadares
          </h2>
          <p className="text-base text-slate-600 mt-2 font-medium">
            Your Health, Our Priority. Fast & Reliable Delivery. Pure by Nature.
          </p>
        </div>

        {/* 6 Grid Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200/90 hover:border-emerald-400 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* One-at-a-time automatically advancing customer reviews */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Trusted by Homes & Enterprises
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              What Our Hydrated Customers Say
            </h3>
            <p className="text-xs text-slate-500 mt-2">One customer story at a time</p>
          </div>

          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsPaused(false);
              }
            }}
            aria-roledescription="carousel"
            aria-label="Customer reviews"
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${activeReview * 100}%)` }}
              >
                {TESTIMONIALS.map((t, index) => (
                  <article
                    key={t.id}
                    className="min-w-full p-7 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Review ${index + 1} of ${TESTIMONIALS.length}`}
                    aria-hidden={index !== activeReview}
                  >
                    <div>
                      <div className="flex items-center justify-center gap-1 text-amber-500 mb-5 text-lg" aria-label={`${t.rating} out of 5 stars`}>
                        {[...Array(t.rating)].map((_, i) => (
                          <span key={i} aria-hidden="true">★</span>
                        ))}
                      </div>
                      <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed text-center">
                        “{t.quote}”
                      </p>
                    </div>

                    <div className="mt-7 pt-5 border-t border-slate-200/70 flex items-center justify-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-emerald-700 text-white font-bold text-sm flex items-center justify-center shrink-0">
                        {t.author.charAt(0)}
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm font-bold text-slate-900">{t.author}</h4>
                        <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {TESTIMONIALS.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousReview}
                  className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-emerald-700 hover:border-emerald-300 flex items-center justify-center transition-colors"
                  aria-label="Previous customer review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={showNextReview}
                  className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-emerald-700 hover:border-emerald-300 flex items-center justify-center transition-colors"
                  aria-label="Next customer review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="flex items-center justify-center gap-2 mt-6" aria-label="Choose a customer review">
              {TESTIMONIALS.map((t, index) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === activeReview ? 'w-7 bg-emerald-700' : 'w-2.5 bg-slate-300 hover:bg-emerald-400'}`}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === activeReview ? 'true' : undefined}
                />
              ))}
            </div>
            <p className="text-center text-[11px] text-slate-400 mt-3">
              {activeReview + 1} of {TESTIMONIALS.length} reviews · Changes every 4 seconds
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
