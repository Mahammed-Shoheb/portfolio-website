import { nanoid } from 'nanoid';
import {
  FaHome,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoRedux,
} from 'react-icons/bi';
import { PiTextTThin } from 'react-icons/pi';

export const links = [
  { id: nanoid(), href: '#home', title: 'home', icon: <FaHome /> },
  { id: nanoid(), href: '#skills', title: 'skills', icon: <FaTools /> },
  { id: nanoid(), href: '#projects', title: 'projects', icon: <HiLightBulb /> },
  {
    id: nanoid(),
    href: '#about',
    title: 'about',
    icon: <BsFileEarmarkPerson />,
  },
];

export const techSkills = [
  {
    id: nanoid(),
    title: 'HTML',
    icon: <FaHtml5 />,
    text: 'HTML is the standard markup language for creating Web pages.',
  },
  {
    id: nanoid(),
    title: 'CSS',
    icon: <FaCss3Alt />,
    text: 'CSS is the language we use to style a Web page.',
  },
  {
    id: nanoid(),
    title: 'javascript',
    icon: <BiLogoJavascript />,
    text: 'JavaScript is the Programming Language for the Web.',
  },
  {
    id: nanoid(),
    title: 'react',
    icon: <BiLogoReact />,
    text: 'A JavaScript library for building user interfaces.',
  },
  {
    id: nanoid(),
    title: 'tailwind css',
    icon: <BiLogoTailwindCss />,
    text: 'Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
  },
  {
    id: nanoid(),
    title: 'redux',
    icon: <BiLogoRedux />,
    text: 'Redux is simply a store to store the state of the variables in your app.',
  },
  {
    id: nanoid(),
    title: 'react query',
    icon: <PiTextTThin />,
    text: 'React Query is a data-fetching and state management library for React applications that simplifies fetching, caching, and updating data',
  },
];

export const projects = [
  {
    id: nanoid(),
    title: 'Travel Town Holidays',
    websiteURL: 'https://traveltownholidays.com/',
    githubURL: 'https://github.com/Saleemtravel/traveltownholidays',
    imgs: [
      '/assets/images/traveltownholiday-1.PNG',
      '/assets/images/traveltownholiday-2.PNG',
      '/assets/images/traveltownholiday-3.PNG',
    ],
    techStack: ['react', 'styled components'],
  },
  {
    id: nanoid(),
    title: 'Travel Town Holidays V1',
    websiteURL: 'https://traveltownholidays-backup.netlify.app/',
    githubURL: 'https://github.com/Mahammed-Shoheb/traveltownholidays-backup',
    imgs: [
      '/assets/images/traveltownholiday-backup-1.PNG',
      '/assets/images/traveltownholiday-backup-2.PNG',
      '/assets/images/traveltownholiday-backup-3.PNG',
    ],
    techStack: ['HTML', 'CSS', 'javascript', 'bootstrap'],
  },
  {
    id: nanoid(),
    title: 'tic tac toe',
    websiteURL: 'https://tic-tac-toe-game-by-shoheb.netlify.app/',
    githubURL: 'https://github.com/Mahammed-Shoheb/tic-tac-toe',
    imgs: [
      '/assets/images/tic-tac-toe-1.PNG',
      '/assets/images/tic-tac-toe-2.PNG',
      '/assets/images/tic-tac-toe-3.PNG',
    ],
    techStack: ['react'],
  },
  {
    id: nanoid(),
    title: 'recipe DB',
    websiteURL: 'https://recipe-db-by-shoheb.netlify.app/',
    githubURL: 'https://github.com/Mahammed-Shoheb/recipeDB',
    imgs: [
      '/assets/images/recipe-db-1.PNG',
      '/assets/images/recipe-db-2.PNG',
      '/assets/images/recipe-db-3.PNG',
    ],
    techStack: ['react', 'react query'],
  },
  {
    id: nanoid(),
    title: 'to do app',
    websiteURL: 'https://to-do-app-by-shoheb.netlify.app/',
    githubURL: 'https://github.com/Mahammed-Shoheb/todo_app',
    imgs: [
      '/assets/images/to-do-app-1.PNG',
      '/assets/images/to-do-app-2.PNG',
      '/assets/images/to-do-app-3.PNG',
    ],
    techStack: ['react'],
  },
];

export const socialLinks = [
  {
    id: nanoid(),
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/mahammed-shoheb-b82a14150',
  },
  {
    id: nanoid(),
    icon: <FaGithub />,
    href: 'https://github.com/Mahammed-Shoheb',
  },
  {
    id: nanoid(),
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/mahammed_shoheb/',
  },
  {
    id: nanoid(),
    icon: <FaWhatsapp />,
    href: 'https://wa.me/919686879898',
  },
];
