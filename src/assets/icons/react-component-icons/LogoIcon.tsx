import { cn } from 'cn';
import type { SVGProps } from 'react';

const LogoIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox='0 0 27 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('w-6.5 h-7', className)}
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M17.4195 0L0 5.94714V22.5991L6.27656 20.4563V10.1817L17.4195 6.37738V0Z'
        fill='currentColor'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.88052 11.7441L26.3 5.79693V22.4489L8.88052 28.3961V11.7441Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default LogoIcon;
