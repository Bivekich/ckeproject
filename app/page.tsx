'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import WorkFlow from './components/WorkFlow';
import Certificates from './components/Certificates';
import Services from './components/Services';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Loader from './components/Loader';

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<'Москва' | 'Чебоксары'>(
    'Москва'
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки ресурсов
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white flex flex-col"
          >
            <Header
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
            />
            <main className="flex-1">
              <Hero selectedCity={selectedCity} />
              <Services />
              <About />
              <WhyUs />
              <WorkFlow />
              <Certificates />
              <Contacts selectedCity={selectedCity} />
              <ContactForm />
            </main>
            <Footer selectedCity={selectedCity} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
