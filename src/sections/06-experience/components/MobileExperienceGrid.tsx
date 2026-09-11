import { experienceData } from '@/data/06-experienceData';
import { fadeInUp } from '@/motions/fadeInUp';
import { motion } from 'motion/react';

const MobileExperienceGrid = () => {
  const experiences = experienceData.experiences;

  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='relative md:hidden flex flex-col gap-6'
    >
      <div className='absolute left-0 inset-y-0 w-6'>
        <div className='absolute left-1/2 -translate-x-1/2 border-l border-dashed w-px h-full' />
      </div>
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className='relative grid grid-cols-[auto_1fr] gap-4'
        >
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
              <div className='max-w-25.5'>
                <img
                  src={experience.companyLogo}
                  alt={`${experience.companyName} logo`}
                />
              </div>
              <p className='font-semibold text-md'>{experience.companyName}</p>
              <p className='text-sm text-neutral-700'>{experience.period}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-semibold text-md'>{experience.role}</p>
              <p className='text-sm text-neutral-700'>
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default MobileExperienceGrid;
