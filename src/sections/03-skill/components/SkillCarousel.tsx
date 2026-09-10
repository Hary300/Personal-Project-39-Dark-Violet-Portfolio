import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { skillsData } from '@/data/03-skillsData';
import useIsDesktop from '@/hooks/useIsDesktop';
import { chunk } from '@/lib/chunk';
import { useEffect, useState } from 'react';
import DotIndicator from './DotIndicator';
import { motion } from 'motion/react';
import { fadeInUp } from '@/motions/fadeInUp';

const SkillCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [count, setCount] = useState(0);

  const size = useIsDesktop() ? 6 : 3;

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleCount = () => {
      setCount(api.scrollSnapList().length);
    };

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    handleCount();
    handleSelect();

    api.on('select', handleSelect);
    api.on('reInit', handleCount);

    return () => {
      api.off('select', handleSelect);
      api.off('reInit', handleCount);
    };
  }, [api]);

  const skills = skillsData.skills;
  const slides = chunk(skills, size);
  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <Carousel
        setApi={setApi}
        className='w-full flex flex-col gap-6 lg:gap-12'
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5'
            >
              {slide.map((item) => (
                <div
                  key={item.id}
                  className='flex flex-col gap-3 rounded-xl lg:rounded-2xl shadow-card p-3 lg:p-4 justify-between '
                >
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-3 items-center'>
                      <div className='size-10 rounded-full shrink-0 bg-neutral-100 flex justify-center items-center'>
                        <img
                          src={item.figIcon}
                          alt={`${item.name} icon`}
                          className='w-5'
                        />
                      </div>
                      <span className='font-semibold text-md lg:text-lg'>
                        {item.name}
                      </span>
                    </div>

                    <p className='text-neutral-700 text-sm lg:text-md'>
                      {item.description}
                    </p>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='w-full h-3 lg:h-3.5 rounded-full bg-neutral-300'>
                      <div
                        className='bg-primary-300 h-full rounded-full'
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className='font-semibold text-sm lg:text-lg'>
                      {item.percentage}%
                    </p>
                  </div>
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <DotIndicator api={api} count={count} currentIndex={currentIndex} />
      </Carousel>
    </motion.div>
  );
};

export default SkillCarousel;
