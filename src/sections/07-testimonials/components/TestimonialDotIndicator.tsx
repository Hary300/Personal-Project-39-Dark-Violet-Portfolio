import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from 'cn';

interface TestimonialDotIndicatorProps {
  api: CarouselApi;
  currentIndex: number;
  count: number;
}

const TestimonialDotIndicator = ({
  api,
  currentIndex,
  count,
}: TestimonialDotIndicatorProps) => {
  return (
    <div className='flex gap-2 lg:gap-3 justify-center'>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'w-4 h-3 shrink-0 transition-all duration-300 bg-neutral-300 rounded-full',
            index === currentIndex && 'bg-primary-200 w-8'
          )}
          onClick={() => api?.scrollTo(index)}
        />
      ))}
    </div>
  );
};

export default TestimonialDotIndicator;
