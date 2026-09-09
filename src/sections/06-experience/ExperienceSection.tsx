import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { experienceData } from '@/data/06-experienceData';

const ExperienceSection = () => {
  return (
    <SectionWrapper sectionId='experience'>
      <SectionTitle title={experienceData.title} />
    </SectionWrapper>
  );
};

export default ExperienceSection;
