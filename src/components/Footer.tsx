import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/waterData';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" showTagline />
            <p className="text-slate-400 max-w-sm leading-relaxed pr-4">
              Mount Abadares Fresh Water is dedicated to delivering 100% natural, pristine mountain spring water sourced from protected aquifers in the Aberdare Ranges. Bottled at source under uncompromising hygienic standards.
            </p>

          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">20L Dispenser Bottle</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">500ml Pack of 24</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">1 Litre Bottle (12-Pack)</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">1.5L Hydration Pack</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">5L Family Container</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Automatic Water Pumps</a>
              </li>
            </ul>
          </div>

          {/* Sourcing & Company */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">About & Sourcing</h4>
            <ul className="space-y-2">
              <li>
                <a href="#source" className="hover:text-emerald-400 transition-colors">Aberdare Aquifers</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">Hydration Calculator</a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-emerald-400 transition-colors">Delivery Routes</a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-emerald-400 transition-colors">Corporate Supply Plans</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">Order Hotline</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-medium">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white truncate">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Aberdare Foothills, Nyeri & Nairobi Distribution Hubs
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Fast & Reliable Delivery</span>
            <span>·</span>
            <span>Your Health, Our Priority</span>
            <span>·</span>
            <span>Pure by Nature</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
