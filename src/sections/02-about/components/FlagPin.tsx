import { popInNonFunction } from '@/motions/popInNonFunction';
import { cn } from 'cn';
import { motion } from 'motion/react';

interface FlagPinProps {
  flagSrc: string;
  flagAlt: string;

  className?: string;
}

const FlagPin = ({ flagAlt, flagSrc, className }: FlagPinProps) => {
  return (
    <motion.div
      variants={popInNonFunction}
      className={cn('absolute top-0 right-1/2 flex gap-1', className)}
    >
      <div className='max-w-12.5'>
        <img src={flagSrc} alt={flagAlt} />
      </div>
      <div className='size-4 flex justify-center items-center bg-white/10 shrink-0 rounded-full'>
        <div className='flex justify-center items-center size-2.5 rounded-full shrink-0 bg-white/50'>
          <div className='size-[5.33px] rounded-full shrink-0 bg-neutral-25' />
        </div>
      </div>
    </motion.div>
  );
};

export default FlagPin;
