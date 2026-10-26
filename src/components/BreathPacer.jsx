import React, { useState, useEffect } from 'react';

export default function BreathPacer() {
  const [phase, setPhase] = useState('Inhale'); // Inhale, Hold, Exhale, Rest
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) return prev - 1;

        if (phase === 'Inhale') {
          setPhase('Hold');
          return 4;
        } else if (phase === 'Hold') {
          setPhase('Exhale');
          return 4;
        } else if (phase === 'Exhale') {
          setPhase('Rest');
          return 4;
        } else {
          setPhase('Inhale');
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const togglePacer = () => {
    if (!isActive) {
      setPhase('Inhale');
      setSecondsLeft(4);
      setIsActive(true);
    } else {
      setIsActive(false);
      setSecondsLeft(4);
      setPhase('Inhale');
    }
  };

  return (
    <section id="pacer" className="py-16 bg-sand-50/80 border-y border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-sage-700">
          Interactive Prana Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal mt-2">
          Experience a Moment of Conscious Calm
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Try a 60-second guided Sama Vritti (Box Breathing) practice right now to relax your vagus nerve and recenter your awareness.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center">
          {/* Breathing Visual Circle */}
          <div className="relative flex items-center justify-center w-52 h-52 sm:w-60 sm:h-60 rounded-full border-4 border-sage-200 bg-warm-50 shadow-inner">
            <div
              className={`absolute rounded-full bg-sage-500/20 transition-all duration-1000 ease-in-out ${
                isActive && (phase === 'Inhale' || phase === 'Hold')
                  ? 'w-44 h-44 sm:w-52 sm:h-52 bg-sage-600/30'
                  : 'w-24 h-24 sm:w-28 sm:h-28 bg-sage-400/20'
              }`}
            ></div>

            <div className="relative z-10 text-center">
              <span className="text-xs uppercase tracking-widest text-sage-800 font-semibold block">
                {isActive ? phase : 'Ready?'}
              </span>
              <span className="font-serif text-4xl sm:text-5xl font-bold text-sage-900 block my-1">
                {isActive ? secondsLeft : '4:4'}
              </span>
              <span className="text-[11px] text-stone-500 block">
                {isActive ? 'Follow breath rhythm' : 'Click to begin'}
              </span>
            </div>
          </div>

          <button
            onClick={togglePacer}
            className={`mt-6 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-stone-300 text-stone-800 hover:bg-stone-400'
                : 'bg-sage-600 text-warm-50 hover:bg-sage-700 shadow-sm'
            }`}
          >
            {isActive ? 'Pause Breath Practice' : 'Start 1-Min Breathing Exercise'}
          </button>
        </div>
      </div>
    </section>
  );
}
