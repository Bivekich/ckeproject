'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Shield,
  Scale,
  PiggyBank,
  Building2,
  Umbrella,
  FileCheck,
  Car,
  ThumbsUp,
  Gavel,
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Гарантия качества',
    description:
      'Имеем все необходимые гарантии качества работ. Некачественная экспертиза, приводящая к ущербу наказуема, поэтому мы обязаны работать качественно.',
  },
  {
    icon: PiggyBank,
    title: 'Лучшие цены',
    description:
      'Предлагаем конкурентные цены на рынке при неизменно высоком качестве услуг.',
  },
  {
    icon: Building2,
    title: 'Членство в СРО',
    description:
      'Состоим в профильных СРО, предоставляющей разрешение на работы и страхование до 30 млн рублей.',
  },
  {
    icon: Umbrella,
    title: 'Страховая защита',
    description:
      'Застрахованы в Британском страховом доме на 10 млн рублей, что гарантирует безопасность наших клиентов.',
  },
  {
    icon: FileCheck,
    title: 'Полный пакет документов',
    description:
      'Имеем все необходимые квалификационные и страховые документы для проведения экспертиз любой сложности.',
  },
  {
    icon: Car,
    title: 'Оперативный выезд',
    description:
      'Обеспечиваем быстрый выезд специалистов на объект для проведения необходимых исследований.',
  },
  {
    icon: ThumbsUp,
    title: 'Ответственный подход',
    description:
      'Не беремся за дело если не уверены в результате. Ценим свою репутацию и время клиентов.',
  },
  {
    icon: Gavel,
    title: 'Юридическая поддержка',
    description:
      'Предоставляем полное юридическое сопровождение на всех этапах работы.',
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-white" id="why-us">
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
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-600">
              Мы гарантируем качество, надежность и профессионализм в каждом
              проекте
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div className="flex-shrink-0" variants={iconVariants}>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-blue-700" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer"
            >
              <Scale className="h-5 w-5" />
              <span className="font-medium">
                Ваша безопасность - наш главный приоритет
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
