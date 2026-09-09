import html from '@/assets/icons/tech/html.png';
import css from '@/assets/icons/tech/css.png';
import js from '@/assets/icons/tech/javascript.png';
import react from '@/assets/icons/tech/react.png';
import reactNative from '@/assets/icons/tech/reactNative.png';
import docker from '@/assets/icons/tech/docker.png';
import express from '@/assets/icons/tech/express.png';
import mongodb from '@/assets/icons/tech/mongodb.png';
import next from '@/assets/icons/tech/next.png';
import postgres from '@/assets/icons/tech/postgres.png';
import sequelize from '@/assets/icons/tech/sequelize.png';
import ts from '@/assets/icons/tech/typescript.png';

export interface Skill {
  id: string;
  name: string;
  figIcon: string;
  description: string;
  percentage: number;
}

export interface SkillsData {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillsData = {
  title: 'My Professional Skill',
  skills: [
    {
      id: 'html',
      name: 'HTML',
      figIcon: html,
      description:
        'Crafting semantic, accessible, and well-structured web elements.',
      percentage: 95,
    },
    {
      id: 'css',
      name: 'CSS',
      figIcon: css,
      description:
        'Designing responsive layouts, modern animations, and flexible styling systems.',
      percentage: 90,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      figIcon: js,
      description:
        'Building dynamic user interactions and asynchronous frontend logic.',
      percentage: 88,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      figIcon: ts,
      description:
        'Writing scalable code bases with strong type safety and interface definitions.',
      percentage: 85,
    },
    {
      id: 'react',
      name: 'React JS',
      figIcon: react,
      description:
        'Developing modular UI components and managing efficient component state.',
      percentage: 92,
    },
    {
      id: 'next',
      name: 'Next.js',
      figIcon: next,
      description:
        'Optimizing web performance with server-side rendering and static site generation.',
      percentage: 87,
    },
    {
      id: 'react-native',
      name: 'React Native',
      figIcon: reactNative,
      description:
        'Building cross-platform mobile applications for iOS and Android.',
      percentage: 78,
    },
    {
      id: 'express',
      name: 'Express.js',
      figIcon: express,
      description:
        'Creating robust RESTful APIs and middleware for backend services.',
      percentage: 83,
    },
    {
      id: 'mongodb',
      name: 'Mongo DB',
      figIcon: mongodb,
      description:
        'Structuring document-based NoSQL databases for flexible data storage.',
      percentage: 80,
    },
    {
      id: 'postgres',
      name: 'PostgreSQL',
      figIcon: postgres,
      description:
        'Managing relational databases with complex queries and data integrity.',
      percentage: 82,
    },
    {
      id: 'sequelize',
      name: 'Sequelize',
      figIcon: sequelize,
      description: 'Handling SQL database modeling and migrations using ORM.',
      percentage: 84,
    },
    {
      id: 'docker',
      name: 'Docker',
      figIcon: docker,
      description:
        'Containerizing applications for consistent deployment across environments.',
      percentage: 75,
    },
  ],
};
