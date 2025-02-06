'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ContactModal from '@/app/components/ContactModal';
import { services } from '@/app/components/Services';
import { use } from 'react';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Навигация */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/#services"
              className="inline-flex items-center text-blue-700 hover:text-blue-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Вернуться к услугам</span>
            </Link>
          </motion.div>

          {/* Заголовок */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg mb-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                <service.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-gray-600">{service.description}</p>
          </motion.div>

          {/* Основные моменты */}
          <motion.div variants={itemVariants} className="grid gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                На что обращаем внимание
              </h2>
              <div className="grid gap-4">
                {service.details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-gray-600"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Процесс работы */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Процесс работы
              </h2>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-700">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Первичная консультация
                    </h3>
                    <p className="text-gray-600">
                      Обсуждаем вашу ситуацию, определяем объем работ и сроки
                      выполнения
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-700">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Выезд на объект
                    </h3>
                    <p className="text-gray-600">
                      Проводим тщательное обследование объекта с использованием
                      специального оборудования
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-700">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Подготовка документации
                    </h3>
                    <p className="text-gray-600">
                      Составляем подробное экспертное заключение с фотофиксацией
                      и необходимыми расчетами
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Результат работы */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Что вы получите
              </h2>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Экспертное заключение
                    </h3>
                    <p className="text-gray-600">
                      Официальный документ, содержащий результаты обследования,
                      выводы и рекомендации
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Фотоматериалы
                    </h3>
                    <p className="text-gray-600">
                      Подробная фотофиксация всех выявленных дефектов и
                      нарушений
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <AlertCircle className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Рекомендации
                    </h3>
                    <p className="text-gray-600">
                      Четкие указания по устранению выявленных проблем и
                      предотвращению их появления в будущем
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Призыв к действию */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Получите профессиональную консультацию
            </h2>
            <p className="text-blue-100 mb-6">
              Наши специалисты ответят на все ваши вопросы и помогут решить вашу
              задачу
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Оставить заявку
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
