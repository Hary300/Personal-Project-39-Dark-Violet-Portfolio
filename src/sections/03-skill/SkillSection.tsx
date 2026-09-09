import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsData } from '@/data/03-skillsData';

const SkillSection = () => {
  return (
    <SectionWrapper sectionId='skill'>
      <SectionTitle title={skillsData.title} />
    </SectionWrapper>
  );
};

export default SkillSection;
