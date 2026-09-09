import LogoIcon from '@/assets/icons/react-component-icons/LogoIcon';
import type { ComponentType, SVGProps } from 'react';
import type { IconType } from 'react-icons';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { LuMail } from 'react-icons/lu';

export type NavLabel =
  | 'Home'
  | 'About'
  | 'Skill'
  | 'Projects'
  | 'FAQ'
  | 'Contact'
  | 'Hire Me';

export type NavHref =
  | '#home'
  | '#about'
  | '#skill'
  | '#projects'
  | '#faq'
  | '#contact';

export interface NavItem {
  id: string;
  label: NavLabel;
  href: NavHref;
}

export interface CtaButton extends NavItem {
  mailReactIcon: IconType;
  href: '#contact';
}

interface NavData {
  logo: {
    text: string;
    logoReactComponentIcon: ComponentType<SVGProps<SVGSVGElement>>;
    href: '#home';
  };
  menuReactIcon: IconType;
  navItems: NavItem[];
  ctaButton: CtaButton;
}

export const navData: NavData = {
  logo: {
    text: 'Your Logo',
    logoReactComponentIcon: LogoIcon,
    href: '#home',
  },
  navItems: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skill', label: 'Skill', href: '#skill' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  menuReactIcon: HiOutlineMenuAlt3,
  ctaButton: {
    id: 'hire-me',
    label: 'Hire Me',
    mailReactIcon: LuMail,
    href: '#contact',
  },
};
