import { cn } from 'cn';

interface SectionTitlePRops {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className }: SectionTitlePRops) => {
  return (
    <h2
      className={cn(
        'text-center font-bold text-display-md lg:text-display-2xl',
        className
      )}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
