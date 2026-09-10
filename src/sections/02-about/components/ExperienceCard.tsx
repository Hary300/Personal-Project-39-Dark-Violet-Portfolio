import { aboutData } from '@/data/02-aboutData';
import { fadeInUp } from '@/motions/fadeInUp';
import { motion } from 'motion/react';

const ExperienceCard = () => {
  const data = aboutData.experienceCard;
  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='relative flex items-end text-white rounded-xl overflow-hidden lg:rounded-2xl size-full px-9 py-7 justify-center'
    >
      <p className='absolute left-1/2 -translate-x-1/2 top-23 text-display-md lg:text-display-xl font-bold text-center'>
        {data.title}
      </p>
      <div className='absolute inset-0 -z-1 '>
        <img
          src={data.bgImage.imgSrc}
          alt={data.bgImage.imgAlt}
          className='size-full object-cover'
        />
      </div>

      <div className='absolute inset-0 bg-linear-to-t from-black/80 from-0% via-black/26 via-85% to-transparent to-100% -z-1' />

      <div className='flex gap-3 justify-between w-fit overflow-auto'>
        {data.previewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='preview project'
            className='rounded-xl lg:rounded-md max-w-23.75 '
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
