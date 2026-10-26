import React, { useState } from 'react';
import { PRICING_DATA } from '../data/yogaData';
import { CheckIcon } from './Icons';

export default function Pricing({ onEnrollPlan }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-sand-100/40 via-warm-50 to-sand-50/60 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-700 bg-sage-100 px-3.5 py-1.5 rounded-full border border-sage-200">
            Transparent Investment in Your Wellbeing
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight">
            Membership & Tuition Plans
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Join live guided classes from your own sanctuary. Pause or cancel your enrollment anytime.
          </p>

          {/* Billing Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-sand-200/80 border border-sand-300">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-warm-50 text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Monthly Tuition
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-sage-600 text-warm-50 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Annual Sadhana</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${billingCycle === 'annual' ? 'bg-warm-50 text-sage-800' : 'bg-sage-200 text-sage-800'}`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_DATA.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-warm-50 border-2 border-sage-500 shadow-xl lg:-translate-y-2'
                    : 'bg-sand-50/70 border border-stone-200 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-semibold bg-sage-600 text-warm-50 shadow-sm uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-2xl font-semibold text-stone-900">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-500 mt-2 min-h-[36px]">{plan.description}</p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-stone-400 font-sans text-2xl">$</span>
                    <span className="font-serif text-5xl font-bold text-stone-900">{price}</span>
                    <span className="text-stone-500 text-sm font-medium">/ month</span>
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">
                    {billingCycle === 'annual' ? 'Billed annually with 20% discount' : 'Billed on a flexible monthly basis'}
                  </p>

                  {/* Features List */}
                  <div className="mt-8 pt-6 border-t border-stone-200/80 space-y-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-700">What is included:</p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-600">
                        <CheckIcon className="w-4 h-4 text-sage-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <button
                    onClick={() => onEnrollPlan(plan.name)}
                    className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                      plan.popular
                        ? 'bg-sage-600 hover:bg-sage-700 text-warm-50 shadow-md hover:shadow'
                        : 'bg-sand-200/90 hover:bg-sand-300/80 text-stone-800'
                    }`}
                  >
                    Select {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            14-Day Mindful Guarantee: If you feel this does not enrich your daily life, request a full refund without questions.
          </p>
        </div>

      </div>
    </section>
  );
}
