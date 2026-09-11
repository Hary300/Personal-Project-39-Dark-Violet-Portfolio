import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/09-ContactData';
import ContactForm from './components/ContactForm';

const ContactSection = () => {
  const contactInfo = contactData.contactInfo;
  return (
    <SectionWrapper sectionId='contact' className='relative'>
      <div className='flex flex-col gap-6 md:flex-row md:justify-between md:items-center'>
        <div className='flex flex-col gap-6'>
          <SectionTitle title={contactData.title} className='text-left' />
          <p className='text-md lg:text-lg font-medium'>
            {contactData.subtitle}
          </p>
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className='flex items-center gap-2 lg:gap-4'>
                <div className='size-10 lg:size-12 rounded-full shrink-0 flex justify-center items-center bg-primary-100'>
                  <Icon className='size-5 lg:size-6 text-primary-300' />
                </div>
                <p className='text-md lg:text-lg'>{item.value}</p>
              </div>
            );
          })}
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
