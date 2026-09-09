import type { Variants } from 'motion';
export const popIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      type: 'spring',
      stiffness: 500,
      damping: 25,
    },
  },
});
