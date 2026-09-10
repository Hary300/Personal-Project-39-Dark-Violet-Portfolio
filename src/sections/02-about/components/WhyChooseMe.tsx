import MarqueeAbout from '@/components/shadcn-space/marquee/MarqueeAbout';
import { aboutData } from '@/data/02-aboutData';

const WhyChooseMe = () => {
  const data = aboutData.whyChooseMe;
  return (
    <div className='rounded-xl lg:bg-rounded-2xl bg-secondary-300 flex flex-col gap-6 lg:gap-13 text-white pb-14'>
      <div className='flex flex-col gap-2 lg:gap-4 pt-8 px-4 lg:pt-6 lg:px-6'>
        <p className='lg:text-display-md font-bold text-display-sm'>
          {data.title}
        </p>
        <p className='text-sm lg:text-md'>{data.subtitle}</p>
      </div>
      <MarqueeAbout />
    </div>
  );
};

export default WhyChooseMe;
