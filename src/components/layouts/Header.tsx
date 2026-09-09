import { useEffect, useState } from 'react';
import Logo from '../shared/Logo';
import { cn } from 'cn';
import { navData } from '@/data/navData';
import { Button } from '../ui/button';
import MobileNav from '../shared/MobileNav';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOverHero, setIsOverHero] = useState(false);

  useEffect(() => {
    const selectedElement = document.getElementById('home');

    const observe = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (selectedElement) {
      observe.observe(selectedElement);
    }

    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observe.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = navData.navItems;
  const ctaButton = navData.ctaButton;
  const CtaButtonIcon = ctaButton.mailReactIcon;

  return (
    <header
      className={cn(
        'fixed px-4 sm:px-10 lg:px-15 xl:px-30 h-20 lg:h-21.25 flex items-center justify-between max-w-360 mx-auto w-full text-neutral-25',
        isScroll && 'backdrop-blur-2xl',
        isOverHero && 'text-neutral-950'
      )}
    >
      <Logo />
      <MobileNav />
      <nav className='hidden lg:block w-full max-w-136'>
        <ul className='flex items-center justify-between'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className='hover:underline text-md'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        asChild
        className='hidden lg:flex bg-neutral-25 text-neutral-950 w-full max-w-43'
      >
        <a href={ctaButton.href} className='flex gap-2 items-center'>
          <CtaButtonIcon /> <span>{ctaButton.label}</span>{' '}
        </a>
      </Button>
    </header>
  );
};

export default Header;
