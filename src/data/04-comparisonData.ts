// --- Interfaces ---

import type { IconType } from 'react-icons';
import { FiCheck } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

export interface ComparisonFeature {
  id: string;
  skillName: string;
  isMeSupported: boolean;
  isOtherSupported: boolean;
}

export type TableHeader = 'Skill' | 'Me' | 'Other';

export interface StatusIcon {
  checkReactIcon: IconType;
  crossReactIcon: IconType;
}
export interface ComparisonData {
  title: string;
  tableHeaders: TableHeader[];
  statusIcons: StatusIcon;
  features: ComparisonFeature[];
}

// --- Object Data ---

export const comparisonData: ComparisonData = {
  title: 'Why Choose Me',
  tableHeaders: ['Skill', 'Me', 'Other'],
  statusIcons: {
    checkReactIcon: FiCheck,
    crossReactIcon: RxCross2,
  },
  features: [
    {
      id: 'react-expert',
      skillName: 'React Expert',
      isMeSupported: true,
      isOtherSupported: false,
    },
    {
      id: 'perfect-pixel',
      skillName: 'Perfect Pixel',
      isMeSupported: true,
      isOtherSupported: false,
    },
    {
      id: 'typescript-proficiency',
      skillName: 'TypeScript Proficiency',
      isMeSupported: true,
      isOtherSupported: false,
    },
    {
      id: 'clean-code',
      skillName: 'Clean, Maintainable Code',
      isMeSupported: true,
      isOtherSupported: false,
    },
    {
      id: 'performance-optimization',
      skillName: 'Performance Optimization',
      isMeSupported: true,
      isOtherSupported: false,
    },
    {
      id: 'responsive-website',
      skillName: 'Responsive Website',
      isMeSupported: true,
      isOtherSupported: false,
    },
    {
      id: 'ui-design-figma',
      skillName: 'UI Design Proficiency (Figma)',
      isMeSupported: true,
      isOtherSupported: false,
    },
  ],
};
