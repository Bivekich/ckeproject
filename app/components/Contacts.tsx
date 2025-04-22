'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessagesSquare,
  FileText,
} from 'lucide-react';

const cityContacts = {
  Москва: {
    address: 'г. Москва, ул. Космонавта Волкова, д. 29к1',
    phone: '+7 (916) 830-58-58',
    email: 'ckeproekt@yandex.ru',
    workHours: 'ПН-ПТ: 8:00 - 20:00',
    mapLink: 'https://yandex.ru/maps/-/CCUzYXu7xC',
    coordinates: [37.539042, 55.74733],
  },
  Чебоксары: {
    address: 'г. Чебоксары, ул. Зои Яковлевой, д. 54',
    phone: '+7 (916) 830-58-58',
    email: 'ckeproekt@yandex.ru',
    workHours: 'ПН-ПТ: 8:00 - 20:00',
    mapLink: 'https://yandex.ru/maps/-/CCUzYXBpkD',
    coordinates: [47.290091, 56.107257],
  },
} as const;

const features = [
  {
    icon: MessagesSquare,
    title: 'Оперативная связь',
    description: 'Быстро отвечаем на звонки и сообщения в рабочее время',
  },
  {
    icon: FileText,
    title: 'Документы онлайн',
    description: 'Возможность получить документы в электронном виде',
  },
];

interface ContactsProps {
  selectedCity: keyof typeof cityContacts;
}

const Contacts = ({ selectedCity }: ContactsProps) => {
  const cityData = cityContacts[selectedCity];
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

  const mapVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="contacts">
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
              Контакты
            </h2>
            <p className="text-xl text-gray-600">
              Выберите удобный способ связи или посетите наш офис
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center"
                      >
                        <MapPin className="h-6 w-6 text-blue-700" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Адрес
                      </h3>
                      <p className="text-gray-600">{cityData.address}</p>
                      <motion.a
                        href={cityData.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-800 font-medium inline-flex items-center gap-1 mt-2"
                        whileHover={{ x: 5 }}
                      >
                        Открыть на карте
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center"
                      >
                        <Phone className="h-6 w-6 text-blue-700" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Телефон
                      </h3>
                      <motion.a
                        href={`tel:${cityData.phone}`}
                        className="text-gray-600 hover:text-blue-700"
                        whileHover={{ x: 5 }}
                      >
                        {cityData.phone}
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center"
                      >
                        <Mail className="h-6 w-6 text-blue-700" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <motion.a
                        href={`mailto:${cityData.email}`}
                        className="text-gray-600 hover:text-blue-700"
                        whileHover={{ x: 5 }}
                      >
                        {cityData.email}
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center"
                      >
                        <Clock className="h-6 w-6 text-blue-700" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Время работы
                      </h3>
                      <p className="text-gray-600">{cityData.workHours}</p>
                      <p className="text-gray-600">Сб-Вс: 8:00 - 18:00</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div
                variants={mapVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Как с нами связаться
                  </h3>

                  <div className="grid grid-cols-1 gap-6 mt-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-4"
                      >
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                            <feature.icon className="h-6 w-6 text-blue-700" />
                          </div>
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
