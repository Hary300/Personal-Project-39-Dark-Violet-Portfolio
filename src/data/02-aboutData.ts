import html from '@/assets/icons/tech/html.png';
import css from '@/assets/icons/tech/css.png';
import js from '@/assets/icons/tech/javascript.png';
import react from '@/assets/icons/tech/react.png';
import docker from '@/assets/icons/tech/docker.png';
import express from '@/assets/icons/tech/express.png';
import ts from '@/assets/icons/tech/typescript.png';
import mongodb from '@/assets/icons/tech/mongodb.png';
import postgres from '@/assets/icons/tech/postgres.png';
import sequelize from '@/assets/icons/tech/sequelize.png';
import cardBgImg from '@/assets/images/CardBackgroundImg.webp';
import project1 from '@/assets/images/projects/project1.png';
import project2 from '@/assets/images/projects/project2.png';
import project4 from '@/assets/images/projects/project4.png';
import { LuMail } from 'react-icons/lu';
import devImg from '@/assets/images/dev/devImage.webp';
import dotPattern from '@/assets/images/dotPattern.png';
import type { ProfileImage } from './01-heroData';
import type { CtaButton } from './navData';
import { HiSparkles } from 'react-icons/hi';
import type { IconType } from 'react-icons';
import indonesia from '@/assets/images/flags/indonesia.png';
import usa from '@/assets/images/flags/usa.png';
import germany from '@/assets/images/flags/germany.png';
import worldMap from '@/assets/images/worldMap.png';
import { TiStarFullOutline } from 'react-icons/ti';

export interface TechSkill {
  name: string;
  figIcon: string;
}

export interface AchievementStat {
  value: string;
  label: string;
}

export interface MapPin {
  country: string;
  figFlagIconSrc: string;
  figFlagIconAlt: string;
  position: string;
}

export interface WhyChooseMeSection {
  title: string;
  subtitle: string;
  tags: string[];
}

export interface ExpertSkillSection {
  title: string;
  starReactIcon: IconType;
  ratingStars: number;
  description: string;
  skills: TechSkill[];
}

interface BgImage {
  imgSrc: string;
  imgAlt: string;
}

export interface ExperienceCardSection {
  title: string;
  previewImages: string[];
  bgImage: BgImage;
}

export interface ProfileCardSection {
  name: string;
  bgPattern: string;
  ctaButton: CtaButton;
  profileImage: ProfileImage;
}

export interface DigitalProductsCardSection {
  title: string;
  bgImage: BgImage;
  SparkleReactIcon: IconType;
  pins: MapPin[];
  stats: AchievementStat[];
}

export interface AboutData {
  greeting: string;
  bioHighlighted: string;
  bioDescription: string;
  whyChooseMeCard: WhyChooseMeSection;
  expertSkillCard: ExpertSkillSection;
  experienceCard: ExperienceCardSection;
  profileCard: ProfileCardSection;
  digitalProductsCard: DigitalProductsCardSection;
}

export const aboutData: AboutData = {
  greeting: "Hi, I'm Hary300 👋",
  bioHighlighted:
    'Building digital products with a focus on crafting visually engaging and seamless user interfaces using React.js.',
  bioDescription:
    'Prioritizing responsive design, performance optimization, and user-centric features to deliver exceptional web experiences.',

  whyChooseMeCard: {
    title: 'Why Choose Me',
    subtitle:
      'Delivering excellence with innovative solutions and seamless execution.',
    tags: [
      'Fullstack Developer',
      'Responsive Design',
      'React Expert',
      '5 Years Experience',
      'Clean Code',
      'Performance Optimization',
    ],
  },

  expertSkillCard: {
    title: 'Expert Skill',
    ratingStars: 5,
    starReactIcon: TiStarFullOutline,
    description:
      'Mastering modern technologies to deliver impactful and efficient solutions',
    skills: [
      { name: 'CSS3', figIcon: css },
      { name: 'JavaScript', figIcon: js },
      { name: 'HTML', figIcon: html },
      { name: 'Express', figIcon: express },
      { name: 'Sequelize', figIcon: sequelize },
      { name: 'TypeScript', figIcon: ts },
      { name: 'React', figIcon: react },
      { name: 'Docker', figIcon: docker },
      { name: 'Postgres', figIcon: postgres },
      { name: 'MongoDB', figIcon: mongodb },
    ],
  },

  experienceCard: {
    title: '5+ Years Experience',
    bgImage: {
      imgSrc: cardBgImg,
      imgAlt: 'A man working on his laptop at a desk',
    },

    previewImages: [project1, project2, project4],
  },

  profileCard: {
    name: 'HARY THREE HUNDRED',
    bgPattern: dotPattern,
    ctaButton: {
      id: 'hire-me',
      label: 'Hire Me',
      mailReactIcon: LuMail,
      href: '#contact',
    },
    profileImage: {
      imgSrc: devImg,
      imgAlt: 'Cheerful Asian Young Man with Stylish Glasses and Purple Hoodie',
    },
  },

  digitalProductsCard: {
    title: 'Building Digital Products',
    SparkleReactIcon: HiSparkles,
    bgImage: {
      imgSrc: worldMap,
      imgAlt: 'A map showing america, africa, europe, asia, australia',
    },
    pins: [
      {
        country: 'Germany',
        figFlagIconSrc: germany,
        figFlagIconAlt: 'german flag',
        position: 'top-[35%] right-[35%]',
      },
      {
        country: 'USA',
        figFlagIconSrc: usa,
        figFlagIconAlt: 'american flag',
        position: 'top-[46%] right-[60%] flex-row-reverse',
      },
      {
        country: 'Indonesia',
        figFlagIconSrc: indonesia,
        figFlagIconAlt: 'indonesian flag',
        position: 'top-[80%] sm:top-[65%] right-[40%] sm:right-[5%]',
      },
    ],
    stats: [
      { value: '50+', label: "Global Client's Handle" },
      { value: '99%', label: 'Client Satisfaction Rate' },
      { value: '100+', label: 'Project Delivered' },
    ],
  },
};
