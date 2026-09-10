import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsData } from '@/data/03-skillsData';
import SkillCarousel from './components/SkillCarousel';

const SkillSection = () => {
  return (
    <SectionWrapper sectionId='skill'>
      <SectionTitle title={skillsData.title} />
      <SkillCarousel />
    </SectionWrapper>
  );
};

export default SkillSection;
