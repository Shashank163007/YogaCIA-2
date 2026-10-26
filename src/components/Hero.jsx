import React from 'react';

export default function Hero({ onOpenEnroll }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-gradient-to-b from-sand-100/70 via-warm-50 to-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold uppercase tracking-wider border border-sage-200">
              <span className="w-2 h-2 rounded-full bg-sage-600 animate-pulse"></span>
              Authentic Traditional Yoga Practice
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.15]">
              Return to Stillness. <br />
              <span className="italic font-medium text-sage-700">Restore Harmony</span> of Mind, Body & Soul.
            </h1>

            <p className="text-stone-600 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
              Step away from fast-paced fitness routines. Embrace time-honored traditional disciplines crafted for inner stability, energetic rejuvenation, and authentic self-mastery.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="px-7 py-3.5 rounded-full font-semibold text-warm-50 bg-sage-600 hover:bg-sage-700 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Explore Programs
              </a>
              <button
                onClick={() => onOpenEnroll('Free Consultation')}
                className="px-7 py-3.5 rounded-full font-semibold text-sage-800 bg-sand-200/80 hover:bg-sand-200 border border-sand-300 shadow-sm transition-all duration-200 cursor-pointer"
              >
                Book Free Trial
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="pt-8 border-t border-stone-200/80 grid grid-cols-3 gap-6 text-stone-700">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-sage-800">4,200+</p>
                <p className="text-xs sm:text-sm text-stone-500 font-medium">Global Students</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-sage-800">100%</p>
                <p className="text-xs sm:text-sm text-stone-500 font-medium">Classical Lineage</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-sage-800">4.9 / 5</p>
                <p className="text-xs sm:text-sm text-stone-500 font-medium">Student Ratings</p>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-warm-50 bg-stone-100 aspect-[4/5] relative">
                <img
                  src="/images/tree-pose.jpeg"
                  alt="Yoga practitioner holding Tree Pose with hands raised overhead"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-warm-50/90 backdrop-blur-md border border-stone-200/60 shadow-lg">
                  <p className="font-serif text-sm font-semibold text-stone-800 italic">
                    "Yoga is the stilling of the fluctuations of the mind."
                  </p>
                  <p className="text-[11px] text-sage-700 font-medium uppercase tracking-wider mt-1">
                    — Patanjali Yoga Sutra 1.2
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Background Accents */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-sage-200/60 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-sand-200/80 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
