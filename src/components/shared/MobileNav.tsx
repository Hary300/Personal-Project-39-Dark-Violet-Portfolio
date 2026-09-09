import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navData } from '@/data/navData';
import { Button } from '../ui/button';
import Logo from './Logo';
import { RxCross2 } from 'react-icons/rx';
import { Dialog as SheetPrimitive } from 'radix-ui';

const MobileNav = () => {
  const ctaButton = navData.ctaButton;
  const navLinks = navData.navItems;
  const HamburgerMenuIcon = navData.menuReactIcon;
  const CtaButtonIcon = ctaButton.mailReactIcon;
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className='px-0 h-auto rounded-none'>
            <HamburgerMenuIcon className='size-6' />
          </Button>
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-4 px-4 py-6 items-start'>
          <div className='flex justify-between items-center w-full'>
            <Logo />
            <SheetPrimitive.Close data-slot='sheet-close' asChild>
              <Button variant='ghost' className='px-0 h-auto'>
                <RxCross2 className='size-6' />
              </Button>
            </SheetPrimitive.Close>
          </div>

          <div className='flex flex-col gap-4 w-full'>
            <nav className='w-full'>
              <ul className='flex flex-col gap-4'>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.href} className='hover:underline text-md'>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button asChild className='flex w-full'>
              <a
                href={ctaButton.href}
                className='flex gap-2 items-center text-sm'
              >
                <CtaButtonIcon /> <span>{ctaButton.label}</span>{' '}
              </a>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
