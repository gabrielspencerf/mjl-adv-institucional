import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';
import PrivacyModal from './components/PrivacyModal';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Logic to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px"
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-mjl-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <FloatingWhatsApp />
      <CookieConsent onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default App;