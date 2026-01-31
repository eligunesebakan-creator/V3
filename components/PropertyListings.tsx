
import React, { useState } from 'react';
import { PROPERTIES } from '../constants';
import { Property } from '../types';

const PropertyListings: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Office', 'Retail', 'Industrial', 'Multi-family'];

  const filteredProperties = filter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === filter);

  return (
    <section id="properties" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Exclusive Portfolio</span>
            <h2 className="font-display text-5xl text-slate-900 mb-6">Market Listings</h2>
            <p className="text-slate-500 leading-relaxed">
              Explore our current selection of prime investment opportunities and high-performance commercial spaces.
            </p>
          </div>
          
          <div className="flex gap-1 bg-white p-1.5 rounded-sm border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProperties.map((property, idx) => (
            <div 
              key={property.id} 
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-slate-200 shadow-xl shadow-slate-200/50">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 p-4">
                  <div className="bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-950 shadow-sm">
                    {property.type}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                   <button className="bg-white text-slate-950 text-[10px] font-bold uppercase tracking-widest py-3 hover:bg-slate-100 transition-colors">
                      Full Details
                   </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:underline decoration-slate-300 underline-offset-4 transition-all">
                {property.title}
              </h3>
              <p className="text-slate-400 text-xs mb-4 flex items-center gap-2 font-medium uppercase tracking-tighter">
                <i className="fa-solid fa-location-dot text-slate-300"></i>
                {property.location}
              </p>
              
              <div className="flex justify-between items-center pt-5 border-t border-slate-200">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Size</span>
                  <span className="text-xs font-bold text-slate-600">{property.size}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Capitalization</span>
                  <span className="text-xs font-bold text-slate-900">{property.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
