import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/waterData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `*WEBSITE ENQUIRY - MOUNT ABADARES FRESH WATER*\n\n` +
      `*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Enquiry:* ${formData.subject}\n*Message:* ${formData.message || 'No additional message'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hello Mount Abadares Fresh Water! I'd like to get in touch with your team.`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Contact Mount Abadares
          </h2>
          <p className="text-base text-slate-600 mt-2 font-medium">
            Reach out for prompt water deliveries, corporate contracts, or distributorship opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Direct Hotlines */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">Order Hotline</span>
                    <div className="flex flex-col gap-1">{COMPANY_INFO.contactPhones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="font-bold text-slate-900 hover:text-emerald-700">{phone}</a>
                    ))}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">WhatsApp Quick Dispatch</span>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="font-bold text-emerald-700 hover:underline text-left"
                    >
                      Chat on WhatsApp: 0757 241 618
                    </button>
                  </div>
                </div>


                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">M-Pesa Till Number</span>
                    <p className="font-bold text-slate-900">{COMPANY_INFO.paymentTill}</p>
                    <p className="text-[11px] text-slate-500">Confirm your order and payment details with the team.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">Email Enquiries</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-slate-900 hover:text-emerald-700">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">Operating & Delivery Hours</span>
                    <p className="font-medium text-slate-700 text-xs leading-relaxed">
                      {COMPANY_INFO.serviceHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">Headquarters & Depot Hubs</span>
                    <p className="font-medium text-slate-700 text-xs leading-relaxed">
                      {`${COMPANY_INFO.legalName} · ${COMPANY_INFO.postalAddress} · ${COMPANY_INFO.address}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Live WhatsApp Chat</span>
                </button>
              </div>
            </div>

          </div>

          {/* Quick Message / Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Complete the details below. Your message will open in WhatsApp so you can send it directly to the team.
              </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Kamau"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0712 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white"
                      >
                        <option value="general">Home Water Delivery</option>
                        <option value="corporate">Corporate / Office Account</option>
                        <option value="event">Event Bulk Water Order</option>
                        <option value="distributor">Distributor / Wholesale Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Message / Delivery Instructions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your requirements, estate location, or bottle quantity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-hidden focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </button>
                </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
