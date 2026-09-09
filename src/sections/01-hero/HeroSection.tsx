import SectionWrapper from '@/components/layouts/SectionWrapper';
import MarqueeSkills from '@/components/shadcn-space/marquee/marquee-02';
import { heroData } from '@/data/01-heroData';
import { popIn } from '@/motions/popIn';
import { motion } from 'motion/react';

const HeroSection = () => {
  const devImg = heroData.profileImage;
  const heroRatingCard = heroData.ratingCard;
  const StarIcon = heroRatingCard.starReactIcon;

  const roleCard = heroData.roleCard;

  const clientsCard = heroData.clientsCard;
  return (
    <SectionWrapper
      sectionId='home'
      className='relative bg-primary-400 text-neutral-25 h-196.25 sm:h-240 overflow-hidden pt-20 sm:pt-30 leading lg:pt-36 flex'
    >
      <motion.div
        variants={popIn(1.2)}
        initial='hidden'
        animate='visible'
        className='sm:absolute left-1/2 sm:-translate-x-1/2 w-full lg:max-w-347.25 z-1 leading-15 sm:leading-20'
      >
        <h1 className='font-extrabold text-[55px] sm:text-[80px] lg:text-[clamp(5.3125rem,-0.0719rem+8.413vw,7.5rem)] text-center w-full'>
          {heroData.name}
        </h1>
      </motion.div>

      <div className='absolute size-151.75 sm:size-254.5 left-1/2 -translate-x-1/2 bottom-[-86.76px] sm:bottom-[-234.6px] '>
        <motion.div
          variants={popIn(0.6)}
          initial='hidden'
          animate='visible'
          className='absolute left-1/2 -translate-x-1/2 w-full aspect-square rounded-full shrink-0 bg-primary-300/20'
        />

        <motion.div
          variants={popIn(0.4)}
          initial='hidden'
          animate='visible'
          className='absolute left-1/2 -translate-x-1/2 w-[calc((476.64/607)*100%)] aspect-square rounded-full shrink-0 bg-primary-300/40 top-1/2 -translate-y-1/2'
        />

        <motion.div
          variants={popIn(0.2)}
          initial='hidden'
          animate='visible'
          className='absolute left-1/2 -translate-x-1/2 w-[calc((346.28/607)*100%)] aspect-square rounded-full shrink-0 bg-primary-300/60  top-1/2 -translate-y-1/2'
        />

        <motion.div
          variants={popIn(0)}
          initial='hidden'
          animate='visible'
          className='absolute left-1/2 -translate-x-1/2 w-[calc((215.91/607)*100%)] aspect-square rounded-full shrink-0 bg-primary-300/80 top-1/2 -translate-y-1/2'
        />

        <motion.div
          variants={popIn(1.7)}
          initial='hidden'
          animate='visible'
          className='absolute -top-15 left-45 flex flex-col gap-0.5 lg:gap-1 p-3 lg:p-5 rounded-xl lg:rounded-2xl border border-neutral-25/10 bg-[#28282828]/20 backdrop-blur-2xl max-w-36 rotate-[6.73deg] md:rotate-[3.15] sm:max-w-50 md:left-37 lg:left-25.5 sm:top-39'
        >
          <p className='font-bold text-display-xs sm:text-display-xl'>
            {heroRatingCard.score}
          </p>
          <div className='flex'>
            {Array.from({ length: heroRatingCard.maxStars }).map((_, index) => (
              <StarIcon
                key={index}
                className='text-secondary-200 fill-secondary-200 size-6 sm:size-8'
              />
            ))}
          </div>
          <p className='text-xs font-medium sm:text-sm'>
            {heroRatingCard.description}
          </p>
        </motion.div>

        <motion.div
          variants={popIn(1.9)}
          initial='hidden'
          animate='visible'
          className='absolute left-25 top-65 flex flex-col gap-0.5 lg:gap-1 p-3 lg:p-5 rounded-xl lg:rounded-2xl border border-neutral-25/10 bg-[#28282828]/20 backdrop-blur-2xl rotate-[-10.09deg] sm:rotate-[-3.24deg] sm:left-40 sm:top-110 md:left-30 md:top-115 lg:left-[5.29px] lg:top-[416.09px]'
        >
          <p className='text-sm sm:text-display-xs font-bold'>
            {roleCard.title}
          </p>
          <div className='flex gap-0.5 items-center'>
            <div>
              <img
                src={roleCard.figmaScallopedCheckIcon}
                alt='scalloped check icon'
                className='size-3.5'
              />
            </div>
            <p className='text-sm font-medium'>{roleCard.subtitle}</p>
          </div>
        </motion.div>

        <motion.div
          variants={popIn(2.1)}
          initial='hidden'
          animate='visible'
          className='absolute right-[60.06px] top-50.75 rotate-[10.31deg] flex flex-col gap-0.5 lg:gap-1 p-3 lg:p-5 rounded-xl lg:rounded-2xl border border-neutral-25/10 bg-[#28282828]/20 backdrop-blur-2xl sm:right-40 sm:top-100 md:right-30 lg:right-[63.57px] lg:top-[330.79px]'
        >
          <p className='font-bold text-display-xs sm:text-display-xl'>
            {clientsCard.count}
          </p>
          <p className='text-xs font-medium sm:text-sm'>{clientsCard.label}</p>
          <div className='flex space-x-[-12px]'>
            {clientsCard.avatarUrls.map((url, index) => (
              <div
                key={index}
                className='overflow-hidden rounded-full size-10 sm:size-13 shrink-0'
              >
                <img src={url} alt='avatar' />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={popIn(0.8)}
        initial='hidden'
        animate='visible'
        className='absolute bottom-20 lg:bottom-11xl left-1/2 -translate-x-1/2 w-120 shrink-0 sm:shrink sm:w-full sm:max-w-190.75 z-5'
      >
        <img src={devImg.imgSrc} alt={devImg.imgAlt} />
      </motion.div>

      <div className='absolute -left-1 -right-1 bottom-0 z-6'>
        <div className='absolute bg-white h-1/2 inset-x-0 bottom-0 ' />
        <MarqueeSkills />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
