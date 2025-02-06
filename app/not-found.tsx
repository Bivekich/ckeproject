'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Home, RefreshCcw, Building2, Ruler, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const containerVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const bounceVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut',
      },
    },
  };

  const spinVariants: Variants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="text-center max-w-2xl"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            variants={bounceVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <Building2 className="w-32 h-32 text-blue-700" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full px-4 py-2 font-bold"
            >
              404
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Упс! Здесь требуется экспертиза! 🏗️
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Похоже, эта страница нуждается в серьёзном обследовании и ремонте.
          </p>
          <p className="text-lg text-gray-500">
            Наши эксперты уже работают над этим!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg p-6 mb-8 shadow-lg"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <HardHat className="w-6 h-6 text-blue-700" />
            <span className="text-gray-700 font-medium">
              Технический отчёт:
            </span>
          </div>
          <div className="text-left space-y-2 text-gray-600">
            <p>• Страница не обнаружена на сервере</p>
            <p>• Требуется комплексное обследование</p>
            <p>• Рекомендуется вернуться на главную</p>
          </div>
        </motion.div>

        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button
              variant="default"
              size="lg"
              className="flex items-center gap-2 hover:scale-105 transition-transform bg-blue-700 hover:bg-blue-800"
            >
              <Home className="w-5 h-5" />
              На главную
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <motion.div
              variants={spinVariants}
              initial="initial"
              animate="animate"
            >
              <RefreshCcw className="w-5 h-5" />
            </motion.div>
            Проверить снова
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-gray-500"
        >
          <p className="text-sm flex items-center justify-center gap-2">
            <Ruler className="w-4 h-4" />
            <span>
              Мы проводим профессиональную экспертизу, но даже наши специалисты
              не смогли найти эту страницу 🏗️
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
