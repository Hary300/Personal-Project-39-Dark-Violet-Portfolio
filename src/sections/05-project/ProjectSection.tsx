import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsData } from '@/data/05-projectsData';
import { fadeInUp } from '@/motions/fadeInUp';
import { motion } from 'motion/react';

const ProjectSection = () => {
  const projects = projectsData.projects;
  const ArrowIcon = projectsData.arrowReactIcon;
  return (
    <SectionWrapper sectionId='projects'>
      <SectionTitle title={projectsData.title} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5'>
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            key={project.id}
            className='flex flex-col gap-4 lg:gap-5 h-full justify-between'
          >
            <div className='flex flex-col gap-4 lg:gap-5'>
              <div className='flex justify-between'>
                <p className='py-1 px-4 flex rounded-full border border-dashed text-xs lg:text-sm'>
                  {project.category}
                </p>{' '}
                <p className='py-1 px-4 flex rounded-full border border-dashed text-xs lg:text-sm'>
                  {project.year}
                </p>
              </div>
              <div className='rounded-xl lg:rounded-2xl overflow-hidden'>
                <img src={project.image} alt={project.altText} />
              </div>
              <p className='font-semibold text-md lg:text-xl'>
                {project.title}
              </p>
            </div>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary-300 text-sm lg:text-md font-medium flex items-center gap-2'
            >
              <span>Visit Website</span>
              <ArrowIcon />
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
