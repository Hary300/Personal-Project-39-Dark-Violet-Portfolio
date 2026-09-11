import type { IconType } from 'react-icons';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import devImg from '@/assets/images/dev/devImage.webp';

export interface Faq {
  value: string;
  trigger: string;
  content: string;
}

export interface FaqSupportCard {
  avatar: {
    imgSrc: string;
    imgAlt: string;
  };
  title: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface FaqData {
  title: string;
  badgeIcon: IconType;
  accordionIcon: {
    plusIcon: IconType;
    minusIcon: IconType;
  };
  supportCard: FaqSupportCard;
  faqs: Faq[];
}

export const faqData: FaqData = {
  title: 'Have Questions?',
  badgeIcon: HiOutlineChatBubbleLeftRight,
  accordionIcon: { plusIcon: FiPlus, minusIcon: FiMinus },
  supportCard: {
    avatar: {
      imgSrc: devImg,
      imgAlt: 'Edwin Anderson profile picture',
    },
    title: 'Have more questions? Send me a message.',
    ctaButtonText: 'Get in touch',
    ctaHref: '#contact',
  },

  faqs: [
    {
      value: 'item-1',
      trigger: 'What’s your approach to front-end development?',
      content:
        'I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.',
    },
    {
      value: 'item-2',
      trigger: 'What technologies do you specialize in?',
      content:
        'I specialize in React, Next.js, TypeScript, and modern styling solutions like Tailwind CSS, focusing on building scalable web applications.',
    },
    {
      value: 'item-3',
      trigger: 'How do you handle project deadlines and delivery?',
      content:
        'I break projects into structured milestones, communicate progress transparently, and use modern Git workflows to ensure timely and reliable delivery.',
    },
    {
      value: 'item-4',
      trigger: 'Can you turn Figma designs into responsive code?',
      content:
        'Yes, I specialize in converting Figma designs into pixel-perfect, fully responsive, and accessible code using modern frontend practices.',
    },
    {
      value: 'item-5',
      trigger: 'Are you available for freelance or full-time roles?',
      content:
        'I am open to both freelance projects and full-time remote engineering positions depending on the project scope and team fit.',
    },
  ],
};
