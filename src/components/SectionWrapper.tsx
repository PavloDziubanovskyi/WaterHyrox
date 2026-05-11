import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen relative ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      className={`font-display text-[48px] md:text-[80px] lg:text-[100px] leading-none ${className}`}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', damping: 20, stiffness: 80 }}
    >
      {children}
    </motion.h2>
  );
}
