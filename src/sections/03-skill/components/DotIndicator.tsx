import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from 'cn';

interface DotIndicatorProps {
  count: number;
  currentIndex: number;
  api: CarouselApi;
}

const DotIndicator = ({ api, count, currentIndex }: DotIndicatorProps) => {
  return (
    <div className='flex gap-2 lg:gap-3 w-full justify-center'>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'w-4 rounded-full h-2.5 lg:h-3 bg-neutral-300 transition-all duration-300 ease-in-out cursor-pointer',
            index === currentIndex && 'w-8 bg-primary-300'
          )}
          onClick={() => api?.scrollTo(index)}
        ></div>
      ))}
    </div>
  );
};

export default DotIndicator;
