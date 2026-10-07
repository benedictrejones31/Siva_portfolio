import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = '', children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
