import { techSkills } from '../assets/data';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

const SkillsPage = () => {
  return (
    <section id='skills' className='py-10 bg-slate-100 scroll-m-10'>
      <div className=' mx-auto max-w-7xl px-8'>
        <SectionTitle title='tech stack' />
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-4'>
          {techSkills.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default SkillsPage;
