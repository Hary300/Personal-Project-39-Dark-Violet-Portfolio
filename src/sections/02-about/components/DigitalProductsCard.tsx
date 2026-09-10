import { aboutData } from '@/data/02-aboutData';
import FlagPin from './FlagPin';
import { motion } from 'motion/react';
import { fadeInUp } from '@/motions/fadeInUp';
import { staggerContainer } from '@/motions/staggerContainer';

const DigitalProductsCard = () => {
  const data = aboutData.digitalProductsCard;
  const SparkleIcon = data.SparkleReactIcon;
  const parts = data.title.split('Products');
  const words = data.title.split(' ');
  const selectedWord = words[words.length - 1];
  const flagPins = data.pins;
  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='relative flex flex-col justify-between py-8 px-4 lg:px-8 rounded-xl lg:rounded-2xl bg-gradient-blue text-white sm:col-span-2 overflow-hidden'
    >
      <div className='flex flex-col'>
        <p className='inline-flex  items-center gap-2 font-bold text-display-sm lg:text-display-md max-w-100'>
          {parts[0]}
        </p>

        <p className='inline-flex  items-center gap-2 font-bold text-display-sm lg:text-display-md max-w-100'>
          {selectedWord} <SparkleIcon />
        </p>
      </div>
      <div className='flex flex-col gap-6 md:flex-row md:gap-9.75 text-neutral-25'>
        {data.stats.map((stat) => (
          <div key={stat.label} className='flex flex-col'>
            <p className='text-display-lg lg:text-display-2xl font-bold'>
              {stat.value}
            </p>
            <p className='font-medium text-sm lg:text-lg'>{stat.label}</p>
          </div>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        className='absolute h-full max-w-164.25 -right-40 -bottom-5 sm:bottom-0 sm:right-0 '
      >
        <img
          src={data.bgImage.imgSrc}
          alt={data.bgImage.imgAlt}
          className='size-full object-contain '
        />
        {flagPins.map((pin) => (
          <FlagPin
            key={pin.country}
            className={pin.position}
            flagSrc={pin.figFlagIconSrc}
            flagAlt={pin.figFlagIconAlt}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DigitalProductsCard;
