import { fadeInUp } from '@/motions/fadeInUp';
import { cn } from 'cn';
import { motion } from 'motion/react';

interface SectionTitlePRops {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className }: SectionTitlePRops) => {
  return (
    <motion.h2
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={cn(
        'text-center font-bold text-display-md lg:text-display-2xl',
        className
      )}
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
