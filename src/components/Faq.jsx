import React, { useState } from 'react';
import { FAQ_DATA } from '../data/yogaData';
import { ChevronDownIcon } from './Icons';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-warm-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-700">Questions & Answers</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
            Frequently Asked Inquiries
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-sand-50/50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-medium text-stone-900 text-sm sm:text-base">{item.q}</span>
                  <span className={`transform transition-transform duration-300 text-sage-700 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/50 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
