import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { testimonialsData } from '@/data/07-testimonialsData';
import TestimonialDotIndicator from './TestimonialDotIndicator';
import { motion } from 'motion/react';
import { fadeInUp } from '@/motions/fadeInUp';
import { useEffect, useState } from 'react';

const TestimonialCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const testimonials = testimonialsData.testimonials;

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleCount = () => {
      setCount(api.scrollSnapList().length);
    };
    const handleCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    handleCount();
    handleCurrent();

    api.on('select', handleCurrent);
    return () => {
      api.off('select', handleCurrent);
    };
  }, [api]);

  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
        }}
        className='w-full flex flex-col gap-6 lg:gap-12'
      >
        <CarouselContent className='p-4'>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className='basis-full md:basis-1/2 lg:basis-1/3'
            >
              <div className='flex flex-col gap-5 lg:gap-8 bg-white shadow-card p-4 rounded-xl lg:rounded-2xl h-full'>
                <div className='flex flex-col gap3 lg:gap-4 items-center'>
                  <div className='max-w-25.5 lg:max-w-28.5'>
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.logoAltText}
                    />
                  </div>
                  <p className='font-medium text-sm lg:text-md text-center'>
                    {testimonial.quote}
                  </p>
                </div>

                <div className='flex flex-col gap-3 lg:gap-4 items-center'>
                  <div className='flex'>
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => {
                        const StarIcon = testimonial.starReactIcon;
                        return (
                          <StarIcon
                            key={index}
                            className='size-7 text-secondary-200'
                          />
                        );
                      }
                    )}
                  </div>
                  <div className='flex flex-col items-center'>
                    <p className='font-semibold text-sm lg:text-md'>
                      {testimonial.clientName}
                    </p>
                    <p className='text-sm text-neutral-600 lg:text-md'>
                      {testimonial.clientRole}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <TestimonialDotIndicator
          api={api}
          count={count}
          currentIndex={current}
        />
      </Carousel>
    </motion.div>
  );
};

export default TestimonialCarousel;
