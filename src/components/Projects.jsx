import { projects } from '../assets/data';
import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section id='projects' className='py-10 scroll-m-10'>
      <div className='mx-auto max-w-7xl px-8 '>
        <SectionTitle title={'projects'} />
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-4'>
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
