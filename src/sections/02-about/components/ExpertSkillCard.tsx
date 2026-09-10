import { aboutData } from '@/data/02-aboutData';
import { fadeInUp } from '@/motions/fadeInUp';
import { motion } from 'motion/react';

const ExpertSkillCard = () => {
  const data = aboutData.expertSkillCard;
  const StarIcon = data.starReactIcon;
  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='flex flex-col justify-between gap-8 px-4 lg:px-6 rounded-xl lg:rounded-2xl bg-neutral-900 pt-8 lg:pt-7.25 pb-[46.84px] lg:pb-[43.84px]'
    >
      <div className='flex flex-col gap-2 lg:gap-3 text-white'>
        <p className='font-bold text-display-sm lg:text-display-md'>
          {data.title}
        </p>
        <div className='flex'>
          {Array.from({ length: data.ratingStars }).map((_, index) => (
            <StarIcon
              key={index}
              className='size-6 lg:size-8 text-secondary-200'
            />
          ))}
        </div>
        <p className='text-sm lg:text-md'>{data.description}</p>
      </div>

      <div className='grid grid-cols-5 w-fit gap-x-4 gap-y-6 overflow-auto'>
        {data.skills.map((skill) => (
          <div
            key={skill.name}
            className='flex justify-center items-center rounded-full shrink-0 size-[52.58px] bg-neutral-800'
          >
            <img
              src={skill.figIcon}
              alt='skill icon'
              className='w-6.5 h-auto'
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExpertSkillCard;
