'use client';

import { motion } from 'framer-motion';
import React from 'react';

export function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="rounded-[4px] border border-gray-6 bg-gray-3 px-1.5 py-0.5 text-xs text-gray-11"
      initial={{ opacity: 0, marginBottom: -10 }}
      animate={{ opacity: 1, marginBottom: 20 }}
    >
      {children}
    </motion.div>
  );
}
