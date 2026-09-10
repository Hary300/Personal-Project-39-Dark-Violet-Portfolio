import MarqueeAbout from '@/components/shadcn-space/marquee/MarqueeAbout';
import { aboutData } from '@/data/02-aboutData';
import { fadeInUp } from '@/motions/fadeInUp';
import { motion } from 'motion/react';

const WhyChooseMeCard = () => {
  const data = aboutData.whyChooseMeCard;
  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='rounded-xl lg:bg-rounded-2xl bg-secondary-300 flex flex-col gap-6 lg:gap-13 text-white pb-14'
    >
      <div className='flex flex-col gap-2 lg:gap-4 pt-8 px-4 lg:pt-6 lg:px-6'>
        <p className='lg:text-display-md font-bold text-display-sm'>
          {data.title}
        </p>
        <p className='text-sm lg:text-md'>{data.subtitle}</p>
      </div>
      <MarqueeAbout />
    </motion.div>
  );
};

export default WhyChooseMeCard;
