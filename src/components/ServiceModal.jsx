import React from 'react';
import { CloseIcon, CheckIcon } from './Icons';

export default function ServiceModal({ service, onClose, onEnroll }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-warm-50 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-200/50 transition-colors"
          aria-label="Close details"
        >
          <CloseIcon />
        </button>

        <span className="text-xs font-semibold uppercase tracking-widest text-sage-700">
          Program Deep-Dive
        </span>
        <h3 className="font-serif text-3xl font-semibold text-stone-900 mt-1">
          {service.title} <span className="text-xl font-normal text-stone-500">({service.sanskrit})</span>
        </h3>
        <p className="text-sm font-medium text-sage-700 mt-1">{service.subtitle}</p>

        <div className="my-6 rounded-2xl overflow-hidden h-48 sm:h-56 bg-stone-100">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
          <p>{service.details}</p>

          <div className="bg-sand-100/70 rounded-2xl p-5 border border-sand-200">
            <h4 className="font-semibold text-stone-900 text-sm mb-3">Key Focus Areas & Curriculum:</h4>
            <ul className="space-y-2">
              {service.curriculum.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckIcon className="w-4 h-4 text-sage-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-stone-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-200/60 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onEnroll(service.title);
            }}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-warm-50 bg-sage-600 hover:bg-sage-700 shadow-sm transition-colors"
          >
            Sign Up for {service.title}
          </button>
        </div>
      </div>
    </div>
  );
}
