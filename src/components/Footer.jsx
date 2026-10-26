import React from 'react';
import { LeafIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-stone-300 pt-16 pb-12 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-sage-700 text-warm-50 flex items-center justify-center">
                <LeafIcon className="w-5 h-5" />
              </span>
              <span className="font-serif text-2xl font-bold text-warm-100">Ānanda Yoga</span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Dedicated to the preservation and authentic transmission of classical yoga sciences. Bringing timeless clarity to conscious modern lives.
            </p>
            <p className="text-[11px] text-sage-400 italic">
              "Lokah Samastah Sukhino Bhavantu" — May all beings everywhere be peaceful and free.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-100 mb-3">Programs</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><a href="#services" className="hover:text-warm-100 transition-colors">Āsana Practice</a></li>
              <li><a href="#services" className="hover:text-warm-100 transition-colors">Prāṇāyāma & Kriyā</a></li>
              <li><a href="#services" className="hover:text-warm-100 transition-colors">Meditation & Dhyāna</a></li>
              <li><a href="#services" className="hover:text-warm-100 transition-colors">Karma Yoga Philosophy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-100 mb-3">Academy</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><a href="#home" className="hover:text-warm-100 transition-colors">About Lineage</a></li>
              <li><a href="#pacer" className="hover:text-warm-100 transition-colors">Breath Pacer Widget</a></li>
              <li><a href="#pricing" className="hover:text-warm-100 transition-colors">Tuition & Plans</a></li>
              <li><a href="#faq" className="hover:text-warm-100 transition-colors">Student FAQ</a></li>
              <li><a href="#contact" className="hover:text-warm-100 transition-colors">Contact & Support</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-sage-800 text-center text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Ānanda Yoga Academy. All rights reserved. Designed with traditional reverence and mindful simplicity.</p>
        </div>
      </div>
    </footer>
  );
}
