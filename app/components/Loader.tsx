'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Building } from 'lucide-react';

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <Building className="h-12 w-12 text-blue-700 animate-bounce" />
          </motion.div>
          <div className="relative w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-blue-700 rounded-full animate-loading-bar" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
