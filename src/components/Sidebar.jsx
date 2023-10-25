import { links } from '../assets/data';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <aside
      className={`grid grid-rows-[auto,1fr,auto] md:hidden fixed inset-0 max-w-md bg-emerald-100 translate-x-[${
        isSidebarOpen ? '0%' : '-100%'
      }] transition duration-300 z-[100] overflow-y-auto `}
    >
      <div className='flex justify-between p-6 '>
        <Logo />
        <button type='button'>
          <FaTimes
            onClick={closeSidebar}
            className='text-3xl text-red-600 hover:rotate-180 duration-200'
          />
        </button>
      </div>
      <ul className='p-6 capitalize'>
        {links.map((link) => {
          const { id, href, title, icon } = link;
          return (
            <li key={id} className='text-3xl hover:ps-4 hover:text-emerald-500'>
              <a
                href={href}
                className='flex p-1 items-center'
                onClick={closeSidebar}
              >
                <span className='p-1'>{icon}</span>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className='flex p-8 tex text-2xl justify-center gap-5'>
        <SocialLinks />
      </div>
    </aside>
  );
};
export default Sidebar;
