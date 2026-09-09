import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsData } from '@/data/07-testimonialsData';

const TestimonialsSection = () => {
  return (
    <SectionWrapper sectionId='testimonials'>
      <SectionTitle title={testimonialsData.title} />
    </SectionWrapper>
  );
};

export default TestimonialsSection;
