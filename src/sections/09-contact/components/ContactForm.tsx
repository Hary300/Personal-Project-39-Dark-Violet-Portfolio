import { contactSchema, type ContactSchema } from '@/schema/contactSchema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactData } from '@/data/09-ContactData';
import { Button } from '@/components/ui/button';
import InputField from './InputField';
import ContactModal from './ContactModal';
import { modalData, type ModalStatus } from '@/data/modalData';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsSuccess(true);
      console.log(data);
      reset();
    } catch (error) {
      setIsSuccess(false);
      console.log(error);
    } finally {
      setIsOpen(true);
      setIsSubmitting(false);
    }
  };

  const SubmitIcon = contactData.form.submitIcon;
  const form = contactData.form;
  const fields = contactData.form.fields;

  const key: ModalStatus = isSuccess ? 'success' : 'error';
  const modal = modalData[key];

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full md:max-w-134.25 rounded-xl md:rounded-2xl shadow-card p-4 md:p-8 flex flex-col gap-4 lg:gap-6'
      >
        <p className='font-semibold text-lg lg:text-display-xs'>{form.title}</p>
        <div className='flex flex-col gap-4'>
          {fields.map((field) => {
            const errorMessage = errors[field.name]?.message;
            return (
              <InputField
                key={field.id}
                type={field.type}
                register={register}
                label={field.label}
                name={field.name}
                errorMessage={errorMessage}
              />
            );
          })}
        </div>
        <Button
          disabled={isSubmitting}
          type='submit'
          className='w-full flex gap-2 items-center'
        >
          <SubmitIcon />{' '}
          <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
        </Button>
      </form>
      <ContactModal
        isOpen={isOpen}
        modal={modal}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
      />
    </>
  );
};
export default ContactForm;
