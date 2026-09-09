import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/08-faqData';

const FaqsSection = () => {
  return (
    <SectionWrapper sectionId='faq'>
      <SectionTitle title={faqData.title} />
    </SectionWrapper>
  );
};

export default FaqsSection;
