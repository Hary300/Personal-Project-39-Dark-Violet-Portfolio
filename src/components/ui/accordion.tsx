import * as React from 'react';
import { cn } from 'cn';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { faqData } from '@/data/08-faqData';

const PlusIcon = faqData.accordionIcon.plusIcon;
const MinusIcon = faqData.accordionIcon.minusIcon;

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      className={cn('flex w-full flex-col', className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('not-last:border-b lg:pb-4', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5  text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50  **:data-[slot=accordion-trigger-icon]:size-4',
          className
        )}
        {...props}
      >
        {children}
        <div className='shrink-0 size-6 rounded-full lg:size-10 flex justify-center items-center bg-neutral-200 group-aria-expanded/accordion-trigger:bg-primary-300'>
          <PlusIcon
            data-slot='accordion-trigger-icon'
            className='pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden'
          />
          <MinusIcon
            data-slot='accordion-trigger-icon'
            className='pointer-events-none hidden text-white shrink-0 group-aria-expanded/accordion-trigger:inline'
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up'
      {...props}
    >
      <div
        className={cn(
          'h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
