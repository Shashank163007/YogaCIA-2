import React from 'react';
import { SERVICES_DATA } from '../data/yogaData';

export default function Services({ onSelectService, onEnroll }) {
  return (
    <section id="services" className="py-24 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-700 bg-sage-100 px-3.5 py-1.5 rounded-full border border-sage-200">
            Four Pillars of Classical Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight">
            Our Traditional Online Programs
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Delve into authentic disciplines taught in their sacred completeness—from physical postures to inner meditation and conscious living.
          </p>
        </div>

        {/* The 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-sand-50/60 rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-warm-50/90 backdrop-blur-md text-sage-900 shadow">
                    {service.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="font-serif px-3 py-1 rounded-full text-xs font-medium bg-stone-900/70 text-warm-100 backdrop-blur-md">
                    {service.sanskrit}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-sage-700 font-semibold mt-1">
                    {service.subtitle}
                  </p>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-3">
                    {service.summary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-stone-200/80 space-y-2 text-xs sm:text-sm text-stone-600">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-stone-800">Session Length:</span> {service.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-stone-800">Recommended for:</span> {service.level}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold text-sage-800 bg-sage-100/80 hover:bg-sage-200/70 transition-colors text-center cursor-pointer"
                  >
                    View Curriculum
                  </button>
                  <button
                    onClick={() => onEnroll(service.title)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold text-warm-50 bg-sage-600 hover:bg-sage-700 shadow-sm transition-colors text-center cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
