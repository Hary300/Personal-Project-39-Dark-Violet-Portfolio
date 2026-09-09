import type { IconType } from 'react-icons';
import { TiStarFullOutline } from 'react-icons/ti';

import databricks from '@/assets/images/company/databricks.png';
import evernote from '@/assets/images/company/evernote.png';
import google from '@/assets/images/company/google.png';
import postman from '@/assets/images/company/postman.png';
import spotify from '@/assets/images/company/spotify.png';
import trustpilot from '@/assets/images/company/trustpilot.png';
import upwork from '@/assets/images/company/upwork.png';
import zapier from '@/assets/images/company/zapier.png';
import zoom from '@/assets/images/company/zoom.png';

export interface TestimonialItem {
  id: string;
  companyLogo: string;
  logoAltText: string;
  quote: string;
  rating: number;
  starReactIcon: IconType;
  clientName: string;
  clientRole: string;
}

export interface TestimonialsData {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsData: TestimonialsData = {
  title: 'Success Stories from Clients',
  testimonials: [
    {
      id: 'upwork',
      companyLogo: upwork,
      logoAltText: 'Upwork company logo',
      quote:
        'Thanks to their expertise, our platform load speed improved by 40% and overall developer experience reached a new standard.',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Robert Lewandowski',
      clientRole: 'Head of Engineering, Upwork',
    },
    {
      id: 'zapier',
      companyLogo: zapier,
      logoAltText: 'Zapier company logo',
      quote:
        'Delivered top-tier React components on a tight deadline. The pixel-perfect implementation exceeded our expectations!',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Dani Olmo',
      clientRole: 'Product Manager, Zapier',
    },
    {
      id: 'zoom',
      companyLogo: zoom,
      logoAltText: 'Zoom company logo',
      quote:
        'An exceptional frontend developer who consistently transforms complex web interfaces into smooth, user-centric experiences.',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Jude Bellingham',
      clientRole: 'Vice President, Zoom',
    },
    {
      id: 'google',
      companyLogo: google,
      logoAltText: 'Google company logo',
      quote:
        'Outstanding code quality and deep understanding of web accessibility standards. Truly a valuable asset to any project.',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Lamine Yamal',
      clientRole: 'Senior UX Architect, Google',
    },
    {
      id: 'spotify',
      companyLogo: spotify,
      logoAltText: 'Spotify company logo',
      quote:
        'Helped us redesign key campaign landing pages with brilliant design consistency and blazing fast dynamic web performance.',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Pedri González',
      clientRole: 'Lead Designer, Spotify',
    },
    {
      id: 'postman',
      companyLogo: postman,
      logoAltText: 'Postman company logo',
      quote:
        'Refined our interactive documentation UI flawlessly. Clean TypeScript architecture that was extremely easy to maintain.',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Gavi Paez',
      clientRole: 'Tech Lead, Postman',
    },
    {
      id: 'databricks',
      companyLogo: databricks,
      logoAltText: 'Databricks company logo',
      quote:
        'Simplified our complex data dashboards into intuitive, highly responsive components with zero performance bottlenecks.',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Marc-André ter Stegen',
      clientRole: 'VP of Engineering, Databricks',
    },
    {
      id: 'evernote',
      companyLogo: evernote,
      logoAltText: 'Evernote company logo',
      quote:
        'Communication was seamless throughout the project, and the final delivery completely transformed our customer portal.',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Raphinha Dias',
      clientRole: 'Director of Product, Evernote',
    },
    {
      id: 'trustpilot',
      companyLogo: trustpilot,
      logoAltText: 'Trustpilot company logo',
      quote:
        'Highly reliable developer who pays attention to every detail. User engagement metrics went up significantly post-launch.',
      rating: 5,
      starReactIcon: TiStarFullOutline,
      clientName: 'Frenkie de Jong',
      clientRole: 'Chief Technology Officer, Trustpilot',
    },
  ],
};
