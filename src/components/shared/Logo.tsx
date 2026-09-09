import { navData } from '@/data/navData';
import { Button } from '../ui/button';

const Logo = () => {
  const logoData = navData.logo;
  const LogoIcon = logoData.logoReactComponentIcon;
  return (
    <Button
      asChild
      variant='ghost'
      className='flex gap-2.25 items-center px-0 rounded-none h-auto'
    >
      <a href={logoData.href}>
        <LogoIcon className='size-6.5' />
        <span className='font-semibold text-xl'>{logoData.text}</span>
      </a>
    </Button>
  );
};

export default Logo;
