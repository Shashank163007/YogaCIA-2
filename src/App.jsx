import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeGallery from './components/PracticeGallery';
import BreathPacer from './components/BreathPacer';
import Services from './components/Services';
import ServiceModal from './components/ServiceModal';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { CheckIcon } from './components/Icons';

export default function App() {
  const [activeModalService, setActiveModalService] = useState(null);
  const [selectedPlanForContact, setSelectedPlanForContact] = useState('Holistic Sadhana');
  const [toastMessage, setToastMessage] = useState(null);

  const handleEnrollClick = (programName) => {
    setSelectedPlanForContact(programName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-warm-50 text-stone-800 font-sans antialiased selection:bg-sage-200 selection:text-sage-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-sage-800 text-warm-50 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-sage-700 animate-slideUp">
          <CheckIcon className="w-5 h-5 text-sand-300 shrink-0" />
          <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Navigation */}
      <Navbar onOpenEnroll={handleEnrollClick} />

      {/* Main Content */}
      <main>
        <Hero onOpenEnroll={handleEnrollClick} />
        <PracticeGallery />
        <BreathPacer />
        <Services
          onSelectService={(service) => setActiveModalService(service)}
          onEnroll={handleEnrollClick}
        />
        <Pricing onEnrollPlan={handleEnrollClick} />
        <Faq />
        <ContactForm
          prefilledProgram={selectedPlanForContact}
          onSuccessMessage={handleShowToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Detail Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onEnroll={handleEnrollClick}
      />
    </div>
  );
}
