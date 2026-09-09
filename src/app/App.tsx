import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import HeroSection from '@/sections/01-hero';
import AboutSection from '@/sections/02-about';
import SkillSection from '@/sections/03-skill';
import ComparisonSection from '@/sections/04-comparison';
import ProjectSection from '@/sections/05-project';
import ExperienceSection from '@/sections/06-experience';
import TestimonialsSection from '@/sections/07-testimonials';
import FaqsSection from '@/sections/08-faqs';
import ContactSection from '@/sections/09-contact';

function App() {
  return (
    <div className='max-w-360 mx-auto'>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ComparisonSection />
      <ProjectSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FaqsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
