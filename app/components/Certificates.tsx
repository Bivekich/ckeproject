'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { FileText, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: 'Свидетельство СРО',
    description: 'Свидетельство о членстве в саморегулируемой организации',
    image: '/images/certificates/sro.jpg',
  },
  {
    id: 2,
    title: 'Свидетельство НОПРИЗ',
    description:
      'Свидетельство о членстве в Национальном объединении изыскателей и проектировщиков',
    image: '/images/certificates/nopriz.jpg',
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handlePrev = () => {
    if (selectedCert !== null) {
      setSelectedCert(
        selectedCert === 0 ? certificates.length - 1 : selectedCert - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedCert !== null) {
      setSelectedCert(
        selectedCert === certificates.length - 1 ? 0 : selectedCert + 1
      );
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="certificates">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сертификаты и лицензии
            </h2>
            <p className="text-xl text-gray-600">
              Все необходимые документы, подтверждающие нашу компетенцию и
              надежность
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedCert(index)}
              >
                <div className="relative h-64">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FileText className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedCert !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-10"
                    onClick={() => setSelectedCert(null)}
                  >
                    <X className="h-6 w-6" />
                  </Button>

                  <div className="relative h-[80vh]">
                    <Image
                      src={certificates[selectedCert].image}
                      alt={certificates[selectedCert].title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <motion.div
                    className="absolute inset-y-0 left-0 flex items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white bg-black bg-opacity-20 hover:bg-opacity-30 rounded-none"
                      onClick={handlePrev}
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                  </motion.div>
                  <motion.div
                    className="absolute inset-y-0 right-0 flex items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white bg-black bg-opacity-20 hover:bg-opacity-30 rounded-none"
                      onClick={handleNext}
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Все наши документы и сертификаты актуальны и действительны
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
