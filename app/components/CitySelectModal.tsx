'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CitySelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCity: (city: 'Москва' | 'Чебоксары') => void;
  currentCity: 'Москва' | 'Чебоксары';
}

const CitySelectModal = ({
  isOpen,
  onClose,
  onSelectCity,
  currentCity,
}: CitySelectModalProps) => {
  if (!isOpen) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md z-10 mx-4"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Выберите город
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Пожалуйста, выберите ваш город для получения актуальной информации
              о наших услугах и контактах
            </p>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => {
                  onSelectCity('Москва');
                  onClose();
                }}
                className={`w-full py-3 px-4 rounded-lg text-left flex items-center ${
                  currentCity === 'Москва'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium">Москва</span>
                  <p className="text-sm text-gray-500">
                    ул. Космонавта Волкова, д. 29к1
                  </p>
                </div>
              </button>

              <button
                onClick={() => {
                  onSelectCity('Чебоксары');
                  onClose();
                }}
                className={`w-full py-3 px-4 rounded-lg text-left flex items-center ${
                  currentCity === 'Чебоксары'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <div>
                  <span className="font-medium">Чебоксары</span>
                  <p className="text-sm text-gray-500">
                    ул. Зои Яковлевой, д. 54
                  </p>
                </div>
              </button>
            </div>

            <Button
              onClick={onClose}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white"
            >
              Продолжить
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CitySelectModal;
