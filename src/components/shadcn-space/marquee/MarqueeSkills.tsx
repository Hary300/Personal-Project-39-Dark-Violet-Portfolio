import { Marquee } from '@/components/shadcn-space/animations/marquee';
import { heroData } from '@/data/01-heroData';

export default function MarqueeSkills() {
  const roles = heroData.runningTextSkills.roles;
  const dividerIcon = heroData.runningTextSkills.figmaDividerIcon;

  return (
    <div className='py-6 lg:py-10 bg-neutral-950 origin-bottom-left -rotate-2'>
      <Marquee className='[--duration:20s] p-0' pauseOnHover>
        {roles.map((role, index) => (
          <div key={index} className='flex items-center'>
            <p className='font-bold text-display-xs lg:text-display-2xl text-neutral-25 pr-4'>
              {role}
            </p>
            <img
              src={dividerIcon}
              alt='yellow sparkle'
              className='size-8 lg:ize-12'
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
