import spotify from '@/assets/images/company/spotify.png';
import trustpilot from '@/assets/images/company/trustpilot.png';
import postman from '@/assets/images/company/postman.png';

export interface WorkExperienceItem {
  id: string;
  companyName: string;
  companyLogo: string;
  logoAltText: string;
  period: string;
  role: string;
  description: string;
}

export interface ExperienceData {
  title: string;
  experiences: WorkExperienceItem[];
}

export const experienceData: ExperienceData = {
  title: 'My Work Experience',
  experiences: [
    {
      id: 'trustpilot',
      companyName: 'Trustpilot',
      companyLogo: trustpilot,
      logoAltText: 'Trustpilot company logo',
      period: '2024 - Present',
      role: 'Senior Frontend Engineer',
      description:
        'Architected high-conversion review widgets and optimized core web vitals, reducing page load times across localized platforms by 35%.',
    },
    {
      id: 'postman',
      companyName: 'Postman',
      companyLogo: postman,
      logoAltText: 'Postman company logo',
      period: '2022 - 2024',
      role: 'Frontend Developer',
      description:
        'Developed interactive API documentation components and streamlined workspace UI integration using React and TypeScript.',
    },
    {
      id: 'spotify',
      companyName: 'Spotify',
      companyLogo: spotify,
      logoAltText: 'Spotify company logo',
      period: '2020 - 2022',
      role: 'Junior Web Developer',
      description:
        'Built responsive promo landing pages for music campaigns and collaborated with UI designers to implement accessible web components.',
    },
  ],
};
