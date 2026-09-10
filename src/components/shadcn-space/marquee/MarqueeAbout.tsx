import { Marquee } from '@/components/shadcn-space/animations/marquee';
import { aboutData } from '@/data/02-aboutData';

export default function MarqueeAbout() {
  const aboutMarqueeTags = aboutData.whyChooseMeCard.tags;

  const renderTags = () =>
    aboutMarqueeTags.map((tag, index) => (
      <div
        key={index}
        className='flex items-center py-1 px-6 rounded-full bg-white'
      >
        <p className='text-sm text-neutral-950'>{tag}</p>
      </div>
    ));

  return (
    <div className='relative flex flex-col gap-4'>
      <Marquee className='[--duration:45s] p-0'>{renderTags()}</Marquee>
      <Marquee reverse className='[--duration:45s] p-0'>
        {renderTags()}
      </Marquee>
      <Marquee className='[--duration:45s] p-0'>{renderTags()}</Marquee>
      <div className='from-secondary-300/40 pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r'></div>
      <div className='from-secondary-300/40 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l'></div>
    </div>
  );
}
