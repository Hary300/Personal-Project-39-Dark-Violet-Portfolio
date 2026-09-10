import { stagger, type Variants } from 'motion';

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.2, { startDelay: 0.6 }),
    },
  },
};
