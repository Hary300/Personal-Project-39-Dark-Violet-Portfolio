import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/09-ContactData';

const ContactSection = () => {
  return (
    <SectionWrapper sectionId='contact'>
      <SectionTitle title={contactData.title} />
    </SectionWrapper>
  );
};

export default ContactSection;
