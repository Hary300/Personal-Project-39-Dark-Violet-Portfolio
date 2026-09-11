import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsData } from '@/data/07-testimonialsData';
import TestimonialCarousel from './components/TestimonialCarousel';

const TestimonialsSection = () => {
  return (
    <SectionWrapper sectionId='testimonials'>
      <SectionTitle title={testimonialsData.title} />
      <TestimonialCarousel />
    </SectionWrapper>
  );
};

export default TestimonialsSection;
