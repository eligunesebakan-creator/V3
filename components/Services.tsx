import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Expert Hospitality Property Brokerage</span>
          <h2 className="font-display text-4xl text-slate-900 mb-4">Distinguished Brokerage Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Imar Commercial excels in facilitating the acquisition and disposition of premier hospitality assets, leveraging industry acumen to deliver optimal outcomes for sophisticated investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-slate-900 rounded-sm flex items-center justify-center text-white mb-6">
                <i className={`fa-solid ${service.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;