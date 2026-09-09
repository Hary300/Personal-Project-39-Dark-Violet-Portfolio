import { footerData } from '@/data/footerData';
import Logo from '../shared/Logo';

const Footer = () => {
  const socialLinks = footerData.socialLinks;
  return (
    <footer className='flex flex-col gap-5 sm:flex-row sm:justify-between px-4 sm:px-10 lg:px-15 xl:px-30 py-10 lg:py-6 bg-primary-400 sm:items-center'>
      <div className='flex flex-col gap-5 text-neutral-25 lg:flex-row'>
        <div className='flex'>
          <Logo />
        </div>
        <p className='text-sm sm:text-md'>{footerData.copyrightText}</p>
      </div>

      <div className='flex gap-2'>
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              href={link.url}
              key={link.id}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full shrink-0 size-12 flex items-center justify-center text-neutral-25 bg-[#410292] hover:text-neutral-950 hover:bg-neutral-25 active:translate-px transition-all duration-300'
            >
              <Icon className='size-7 ' />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
