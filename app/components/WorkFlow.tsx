'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  PhoneCall,
  MessageSquare,
  FileSignature,
  Search,
  FileText,
  Scale,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Заявка или звонок',
    description:
      'Свяжитесь с нами удобным для вас способом — мы всегда на связи и готовы помочь',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Первичная консультация',
    description:
      'Мы детально изучаем ваш запрос и предлагаем наилучшие решения для вашего комфорта!',
  },
  {
    number: '03',
    icon: FileSignature,
    title: 'Подписание договора',
    description:
      'Мы предоставляем чёткие гарантии, учитываем все детали и внимательно разъясняем каждое предложение, чтобы вы всегда были уверены и довольны!',
  },
  {
    number: '04',
    icon: Search,
    title: 'Анализ данных',
    description: 'Выезд на объект проведение независимой экспертизы',
  },
  {
    number: '05',
    icon: FileText,
    title: 'Камеральная обработка данных',
    description: 'Составление и передача результатов экспертизы',
  },
  {
    number: '06',
    icon: Scale,
    title: 'Юридическая поддержка',
    description:
      'Если вам понадобится юридическая поддержка, наши опытные юристы будут рядом, готовые обеспечить вам квалифицированное сопровождение на каждом этапе!',
  },
];

const WorkFlow = () => {
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

  const numberVariants = {
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

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="workflow">
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
              Порядок работы
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачный и эффективный процесс работы с каждым клиентом
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  variants={numberVariants}
                  className="absolute -top-4 -left-4 w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold"
                >
                  {step.number}
                </motion.div>

                <div className="pt-4">
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-blue-700" />
                    </div>
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-2xl mx-auto text-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 rounded-lg p-6"
            >
              <p className="text-blue-700 font-medium">
                На каждом этапе мы обеспечиваем полную прозрачность процесса и
                держим вас в курсе всех действий. Наша цель - сделать
                сотрудничество максимально комфортным и эффективным для вас.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkFlow;
