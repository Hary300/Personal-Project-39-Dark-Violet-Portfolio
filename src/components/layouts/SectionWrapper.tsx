import { cn } from 'cn';
import type { ReactNode } from 'react';

type SectionId =
  | 'home'
  | 'about'
  | 'skill'
  | 'projects'
  | 'faq'
  | 'contact'
  | (string & {});

interface SectionWrapperProps {
  sectionId: SectionId;
  className?: string;
  hasGap?: boolean;
  hasPy?: boolean;
  children: ReactNode;
}

const SectionWrapper = ({
  sectionId,
  className,
  hasGap = true,
  hasPy = true,
  children,
}: SectionWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'px-4 sm:px-10 lg:px-15 xl:px-30',
        hasGap && 'flex flex-col gap-6 lg:gap-12',
        hasPy && 'py-10 lg:py-20',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
