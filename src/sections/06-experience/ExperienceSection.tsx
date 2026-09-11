import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { experienceData } from '@/data/06-experienceData';
import MobileExperienceGrid from './components/MobileExperienceGrid';
import DesktopExperienceGrid from './components/DesktopExperienceGrid';

const ExperienceSection = () => {
  return (
    <SectionWrapper sectionId='experience'>
      <SectionTitle title={experienceData.title} />
      <MobileExperienceGrid />
      <DesktopExperienceGrid />
    </SectionWrapper>
  );
};

export default ExperienceSection;
