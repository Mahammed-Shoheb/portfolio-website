import Logo from './Logo';
import { links } from '../assets/data';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ openSidebar }) => {
  return (
    <nav className=' bg-emerald-100'>
      <div className='md:flex md:justify-between align-middle  mx-auto max-w-7xl px-8 '>
        <div className='py-6 flex justify-between '>
          <Logo />
          <button
            type='button'
            className='md:hidden text-2xl animate-scaleAnimtaion '
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className='py-6 capitalize hidden md:flex'>
          {links.map((link) => {
            const { id, href, title, icon } = link;
            return (
              <li key={id} className='text-2xl hover:text-emerald-500 me-2'>
                <a href={href} className='min-w-full flex p-1'>
                  <span className='p-1'>{icon}</span>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
