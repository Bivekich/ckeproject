'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface DocumentLayoutProps {
  title: string;
  children: React.ReactNode;
}

const DocumentLayout = ({ title, children }: DocumentLayoutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              href="/"
              className="inline-flex items-center text-blue-700 hover:text-blue-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Вернуться на главную</span>
            </Link>
          </motion.div>

          {/* Заголовок */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h1>
          </motion.div>

          {/* Контент */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-lg prose prose-blue max-w-none"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocumentLayout;
