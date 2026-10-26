import React, { useState, useEffect } from 'react';
import { CheckIcon } from './Icons';

export default function ContactForm({ prefilledProgram, onSuccessMessage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: prefilledProgram || 'Holistic Sadhana',
    timeSlot: 'Morning (06:30 - 07:45 AM)',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | submitted

  useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({ ...prev, program: prefilledProgram }));
    }
  }, [prefilledProgram]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('submitted');
      if (onSuccessMessage) {
        onSuccessMessage(`Thank you, ${formData.name}! Your enrollment for "${formData.program}" has been registered.`);
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-warm-50 to-sand-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-700 bg-sage-100 px-3.5 py-1.5 rounded-full border border-sage-200">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight">
              Begin Your Sacred Practice Today
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Have questions about which program matches your physical health or spiritual goals? Submit your registration or note, and our senior practitioners will respond within 24 hours.
            </p>

            <div className="space-y-4 pt-4 text-stone-700 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>contact@anandayogatradition.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>Live Sessions: Mon - Sat (IST / GMT / EST options)</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-sand-200/60 border border-sand-300 text-xs text-stone-600 space-y-1">
              <p className="font-semibold text-stone-800">Student Portal Compatibility</p>
              <p>Stream effortlessly from smartphone, tablet, laptop, or Apple AirPlay / Google Cast to your TV screen.</p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-warm-50 p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xl">
              {status === 'submitted' ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto">
                    <CheckIcon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-stone-900">Namastē, {formData.name}</h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto">
                    Your registration for <strong>{formData.program}</strong> has been received. Check your inbox ({formData.email}) for your welcome kit and studio streaming links.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        program: 'Holistic Sadhana',
                        timeSlot: 'Morning (06:30 - 07:45 AM)',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 text-warm-50 hover:bg-sage-700 transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl font-semibold text-stone-900">
                    Registration & Inquiry Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Maya Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-sand-50/50 text-stone-800 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="maya@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-sand-50/50 text-stone-800 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">Desired Program / Tier *</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-sand-50/50 text-stone-800 text-sm"
                      >
                        <option value="Single Program (Asana)">Āsana Program</option>
                        <option value="Single Program (Pranayama)">Prāṇāyāma & Kriyā</option>
                        <option value="Single Program (Meditation)">Meditation & Dhyāna</option>
                        <option value="Single Program (Karma Yoga)">Karma Yoga Philosophy</option>
                        <option value="Holistic Sadhana">Holistic Sadhana (All 4 Programs)</option>
                        <option value="Mastery Mentorship">1-on-1 Mastery Mentorship</option>
                        <option value="General Inquiry">General Question / Trial Session</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">Preferred Time Slot</label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-sand-50/50 text-stone-800 text-sm"
                      >
                        <option value="Morning (06:30 - 07:45 AM)">Sunrise Cohort (06:30 - 07:45 AM)</option>
                        <option value="Midday (12:00 - 01:00 PM)">Midday Restoration (12:00 - 01:00 PM)</option>
                        <option value="Evening (06:30 - 07:45 PM)">Evening Wind-down (06:30 - 07:45 PM)</option>
                        <option value="Flexible / Recordings Only">Self-paced (Recordings Vault Only)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Health Background or Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Let us know if you have prior injuries, spinal stiffness, or specific areas of focus..."
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-sage-500 bg-sand-50/50 text-stone-800 text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 rounded-xl font-semibold text-warm-50 bg-sage-600 hover:bg-sage-700 transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'submitting' ? 'Confirming Enrollment...' : 'Submit Enrollment & Reserve Spot'}
                  </button>

                  <p className="text-[11px] text-center text-stone-500">
                    We strictly honor your privacy. No spam. Secure 256-bit SSL encrypted connection.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
