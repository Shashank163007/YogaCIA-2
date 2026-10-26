import React, { useState, useEffect } from 'react';
import { LeafIcon, CloseIcon } from './Icons';

export default function Navbar({ onOpenEnroll }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Practice Pacer', href: '#pacer' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-warm-50/95 backdrop-blur-md shadow-sm border-b border-sage-200/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-sage-600 text-warm-50 flex items-center justify-center shadow-md group-hover:bg-sage-700 transition-colors">
              <LeafIcon className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-sage-900 group-hover:text-sage-700 transition-colors">
                Ānanda Yoga
              </span>
              <span className="text-[10px] tracking-widest uppercase text-sage-600 font-sans font-semibold">
                Traditional Online Academy
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-stone-700 hover:text-sage-700 text-sm font-medium transition-colors hover:border-b-2 hover:border-sage-600 pb-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenEnroll('General Inquiry')}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-warm-50 bg-sage-600 hover:bg-sage-700 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-sage-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-sage-200/60 bg-warm-50/95 rounded-2xl p-4 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-stone-700 hover:bg-sage-100/60 hover:text-sage-800 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnroll('General Inquiry');
                }}
                className="w-full mt-2 text-center py-3 rounded-xl text-warm-50 bg-sage-600 hover:bg-sage-700 font-semibold shadow-sm transition-colors"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
