import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { comparisonData } from '@/data/04-comparisonData';

const ComparisonSection = () => {
  return (
    <SectionWrapper sectionId='comparison'>
      <SectionTitle title={comparisonData.title} />
    </SectionWrapper>
  );
};

export default ComparisonSection;
