import devImg from '@/assets/images/dev/devImage.webp';
import dividerIcon from '@/assets/icons/dividerIcon.svg';
import scallopedCheckIcon from '@/assets/icons/scallopedCheckIcon.svg';
import type { IconType } from 'react-icons';
import { TiStarFullOutline } from 'react-icons/ti';

export type Role =
  | 'Frontend Developer'
  | 'Expert React'
  | 'Programmers'
  | 'Mobile Developer';

export interface RatingCard {
  score: string;
  maxStars: number;
  description: string;
  starReactIcon: IconType;
}

export interface RoleCard {
  title: Extract<Role, 'Frontend Developer'>;
  subtitle: string;
  figmaScallopedCheckIcon: string;
}

export interface ClientsCard {
  count: string;
  label: string;
  avatarUrls: string[];
}

export interface ProfileImage {
  imgSrc: string;
  imgAlt: string;
}

export interface RunningTextSkills {
  roles: Role[];
  figmaDividerIcon: string;
}

export interface HeroData {
  name: string;
  profileImage: ProfileImage;
  ratingCard: RatingCard;
  roleCard: RoleCard;
  clientsCard: ClientsCard;
  runningTextSkills: RunningTextSkills;
}

export const heroData: HeroData = {
  name: 'HARY THREE HUNDRED',

  profileImage: {
    imgSrc: devImg,
    imgAlt: 'Cheerful Asian Young Man with Stylish Glasses and Purple Hoodie',
  },

  ratingCard: {
    score: '5.0',
    maxStars: 5,
    starReactIcon: TiStarFullOutline,
    description: 'Many Client Trust with me',
  },

  roleCard: {
    title: 'Frontend Developer',
    subtitle: 'React Expert',
    figmaScallopedCheckIcon: scallopedCheckIcon,
  },

  clientsCard: {
    count: '50+',
    label: 'Global Clients',
    avatarUrls: [
      'https://i.pravatar.cc/150?img=11',
      'https://i.pravatar.cc/150?img=5',
      'https://i.pravatar.cc/150?img=68',
      'https://i.pravatar.cc/150?img=32',
    ],
  },
  runningTextSkills: {
    figmaDividerIcon: dividerIcon,
    roles: [
      'Frontend Developer',
      'Expert React',
      'Programmers',
      'Mobile Developer',
    ],
  },
};
