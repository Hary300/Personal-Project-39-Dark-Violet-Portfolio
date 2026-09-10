import { Button } from '@/components/ui/button';
import { aboutData } from '@/data/02-aboutData';
import { fadeInUp } from '@/motions/fadeInUp';
import { motion } from 'motion/react';

const ProfileCard = () => {
  const data = aboutData.profileCard;
  const ctaButton = data.ctaButton;
  const MailIcon = ctaButton.mailReactIcon;
  return (
    <motion.div
      variants={fadeInUp}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='relative flex items-end bg-primary-300 pb-7.25 lg:pb-7.75 justify-center rounded-xl lg:rounded-2xl overflow-hidden'
    >
      <div className='absolute w-[440.67px] lg:w-131.75  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 '>
        <img src={data.bgPattern} alt='dot pattern' className=' size-full' />
      </div>
      <div className='absolute inset-x-0 top-8 xl:top-10'>
        <p className='font-bold text-[64px] xl:text-[60px] text-center text-secondary-200 leading-tight'>
          {data.name}
        </p>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 w-full bottom-0 max-w-95.25'>
        <img src={data.profileImage.imgSrc} alt={data.profileImage.imgAlt} />
      </div>
      <Button
        asChild
        className='relative flex gap-2 items-center bg-white text-neutral-950 w-full max-w-58.25 '
      >
        <a href={ctaButton.href}>
          <MailIcon />
          <span>{ctaButton.label}</span>
        </a>
      </Button>
    </motion.div>
  );
};

export default ProfileCard;
