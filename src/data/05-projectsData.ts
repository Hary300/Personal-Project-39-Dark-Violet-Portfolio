import project1 from '@/assets/images/projects/project1.webp';
import project2 from '@/assets/images/projects/project2.webp';
import project3 from '@/assets/images/projects/project3.webp';
import project4 from '@/assets/images/projects/project4.webp';
import project5 from '@/assets/images/projects/project5.webp';
import project6 from '@/assets/images/projects/project6.webp';
import type { IconType } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

export interface ProjectItem {
  id: string;
  category: string;
  year: number;
  title: string;
  image: string;
  altText: string;
  link: string;
}

export interface ProjectsData {
  title: string;
  projects: ProjectItem[];
  arrowReactIcon: IconType;
}

export const projectsData: ProjectsData = {
  title: 'My Latest Work',
  arrowReactIcon: FiArrowRight,
  projects: [
    {
      id: 'project-1',
      category: 'Dashboard',
      year: 2024,
      title: 'Dashboard SaaS Task Management',
      image: project1,
      altText: 'Task management SaaS dashboard interface preview',
      link: '',
    },
    {
      id: 'project-2',
      category: 'Web App',
      year: 2024,
      title: 'AI Audio & Transcription Suite',
      image: project2,
      altText: 'AI audio processing and transcription web app interface',
      link: '',
    },
    {
      id: 'project-3',
      category: 'Branding',
      year: 2023,
      title: 'Health & Wellness Product Landing',
      image: project3,
      link: '',
      altText:
        'Health and wellness brand landing page displayed on desktop and mobile mockup',
    },
    {
      id: 'project-4',
      category: 'Mobile App',
      year: 2025,
      title: 'Smart Agriculture Field Tracker',
      image: project4,
      altText: 'Mobile app interface showing smart agriculture telemetry data',
      link: '',
    },
    {
      id: 'project-5',
      category: 'Security',
      year: 2023,
      title: 'Cloud Vault & Security Platform',
      image: project5,
      altText: 'Cloud security vault application dashboard on desktop screen',
      link: '',
    },
    {
      id: 'project-6',
      category: 'E-Commerce',
      year: 2026,
      title: 'Digital Asset Marketplace System',
      image: project6,
      altText: 'Digital asset marketplace grid layout UI preview',
      link: '',
    },
  ],
};
