import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import Carousel from './Carousel';

const ProjectsCard = ({ title, websiteURL, githubURL, imgs, techStack }) => {
  return (
    <article className='w-full rounded bg-emerald-200'>
      <Carousel imgs={imgs} />
      <div className='p-5 mb-2'>
        <h3 className='capitalize mb-2'>
          <span className='font-bold'>project name : </span>
          {title}
        </h3>
        <p className='capitalize  mb-3'>
          <span className='font-bold'>tech stack : </span>
          {techStack.map((stack, i) => {
            return (
              <span key={stack}>
                {stack}
                {techStack.length - 1 === i ? '' : ', '}
              </span>
            );
          })}
        </p>
        <div className='flex gap-2 text-2xl text-emerald-800 '>
          <span>
            <a
              href={githubURL}
              target='_blank'
              className='hover:text-emerald-500'
            >
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              href={websiteURL}
              target='_blank'
              className='hover:text-emerald-500'
            >
              <TbWorldWww />
            </a>
          </span>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
