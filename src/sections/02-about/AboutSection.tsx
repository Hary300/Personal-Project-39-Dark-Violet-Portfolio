import SectionWrapper from '@/components/layouts/SectionWrapper';
import { aboutData } from '@/data/02-aboutData';
import WhyChooseMe from './components/WhyChooseMe';

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

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        <WhyChooseMe />
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
