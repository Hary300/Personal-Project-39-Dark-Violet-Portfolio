import SectionWrapper from '@/components/layouts/SectionWrapper';
import { aboutData } from '@/data/02-aboutData';
import WhyChooseMeCard from './components/WhyChooseMeCard';
import ExpertSkillCard from './components/ExpertSkillCard';
import ExperienceCard from './components/ExperienceCard';
import ProfileCard from './components/ProfileCard';
import DigitalProductsCard from './components/DigitalProductsCard';
import { motion } from 'motion/react';
import { fadeInUp } from '@/motions/fadeInUp';

const AboutSection = () => {
  return (
    <SectionWrapper sectionId='about'>
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex flex-col gap-3 lg:gap-4'
      >
        <p className='font-semibold text-md lg:text-lg'>{aboutData.greeting}</p>
        <p className='font-semibold text-xl lg:text-display-md'>
          {aboutData.bioHighlighted}{' '}
          <span className='text-neutral-400'>{aboutData.bioDescription}</span>
        </p>
      </motion.div>

      <div className='grid grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr_1.25fr] sm:grid-cols-2 sm:grid-rows-[1fr_1fr_1.25fr] md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-4 lg:gap-6'>
        <WhyChooseMeCard />
        <ExpertSkillCard />
        <ExperienceCard />
        <ProfileCard />
        <DigitalProductsCard />
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
