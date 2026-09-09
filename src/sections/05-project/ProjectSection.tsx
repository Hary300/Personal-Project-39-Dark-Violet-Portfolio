import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsData } from '@/data/05-projectsData';

const ProjectSection = () => {
  return (
    <SectionWrapper sectionId='projects'>
      <SectionTitle title={projectsData.title} />
    </SectionWrapper>
  );
};

export default ProjectSection;
