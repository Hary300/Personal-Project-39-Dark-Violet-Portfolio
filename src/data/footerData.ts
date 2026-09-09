import { FaDribbble, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface SocialLinkItem {
  id: string;
  platform: string;
  url: string;
  icon: IconType;
}

export interface FooterSection {
  copyrightText: string;
  socialLinks: SocialLinkItem[];
}

export const footerData: FooterSection = {
  copyrightText: '© 2025 Hary300. All rights reserved.',
  socialLinks: [
    {
      id: 'dribbble',
      platform: 'dribbble',
      url: 'https://dribbble.com',
      icon: FaDribbble,
    },
    {
      id: 'instagram',
      platform: 'instagram',
      url: 'https://instagram.com',
      icon: FaInstagram,
    },
    {
      id: 'linkedin',
      platform: 'linkedin',
      url: 'https://linkedin.com',
      icon: FaLinkedinIn,
    },
  ],
};
