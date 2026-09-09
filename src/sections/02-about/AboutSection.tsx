import SectionWrapper from '@/components/layouts/SectionWrapper';
import { aboutData } from '@/data/02-aboutData';

const AboutSection = () => {
  return (
    <SectionWrapper sectionId='about'>
      <div className='flex flex-col gap-3 lg:gap-4'>
        <p className='font-semibold text-md lg:text-lg'>{aboutData.greeting}</p>
        <p className='font-semibold text-xl lg:text-display-md'>
          {aboutData.bioHighlighted}{' '}
          <span className='text-neutral-400'>{aboutData.bioDescription}</span>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
