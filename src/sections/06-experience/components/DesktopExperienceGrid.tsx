import { experienceData } from '@/data/06-experienceData';
import { fadeInUp } from '@/motions/fadeInUp';
import { motion } from 'motion/react';

const DesktopExperienceGrid = () => {
  const experiences = experienceData.experiences;
  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='hidden md:flex flex-col gap-16'
    >
      {experiences.map((experience, index) => (
        <div key={index} className='grid grid-cols-[0.25fr_1fr]'>
          <div className='flex flex-col gap-1'>
            <div className='max-w-30 lg:max-w-38'>
              <img
                src={experience.companyLogo}
                alt={`${experience.companyName} logo`}
              />
            </div>
            <p className='font-semibold text-xl'>{experience.companyName}</p>
            <p className='text-md text-neutral-700'>{experience.period}</p>
          </div>
          <div className='relative grid grid-cols-[auto_1fr] gap-4'>
            {index !== experiences.length - 1 && (
              <div className='absolute left-0 inset-y-0 w-6'>
                <div className='absolute left-1/2 -translate-x-1/2 border-l border-dashed w-px h-[calc(100%+4rem)]' />
              </div>
            )}
            <div className='relative'>
              {index === experiences.length - 1 && (
                <div className='absolute inset-0 bg-white' />
              )}
              <div className='relative size-6 shrink-0 rounded-full bg-white border border-dashed flex justify-center items-center'>
                <div className='bg-primary-200 rounded-full size-3.5 shrink-0' />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-1'>
                <p className='font-semibold text-xl'>{experience.role}</p>
                <p className='text-md text-neutral-700'>
                  {experience.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default DesktopExperienceGrid;
