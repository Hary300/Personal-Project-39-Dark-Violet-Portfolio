import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/08-faqData';
import { fadeInUp } from '@/motions/fadeInUp';
import { motion } from 'motion/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FaqsSection = () => {
  const faqs = faqData.faqs;
  const BadgeIcon = faqData.badgeIcon;
  const supportCard = faqData.supportCard;
  return (
    <SectionWrapper sectionId='faq'>
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 md:gap-10 xl:gap-38.25 md:h-186.75 gap-5 py-5 px-4 md:py-10 md:px-10 rounded-xl lg:rounded-2xl border bg-neutral-50 h-full md:grid-rows-[auto_1fr] items-center '
      >
        <div className='flex flex-col gap-4 lg:gap-5'>
          <div className='flex justify-center items-center rounded-full size-12 shrink-0 bg-primary-100'>
            <BadgeIcon className='size-6 text-primary-300 stroke-2' />
          </div>
          <SectionTitle title={faqData.title} className='text-left' />
        </div>
        <Accordion
          type='single'
          collapsible
          defaultValue='item-1'
          className='w-full md:row-span-2 flex flex-col  divide-y'
        >
          {faqs.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className='data-[state=open]:text-primary-300 text-md lg:text-xl font-semibold'>
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className='flex flex-col gap-4 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white border md:h-fit self-end'>
          <div className='rounded-full size-15 lg:size-20 shrink-0 flex items-end bg-secondary-200 overflow-hidden'>
            <img
              src={supportCard.avatar.imgSrc}
              alt={supportCard.avatar.imgAlt}
            />
          </div>

          <p className='text-sm lg:text-lg'>{supportCard.title}</p>
          <Button asChild>
            <a href={supportCard.ctaHref}>{supportCard.ctaButtonText}</a>
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default FaqsSection;
