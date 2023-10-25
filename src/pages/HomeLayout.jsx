import {
  Sidebar,
  Navbar,
  Home,
  Skills,
  Projects,
  About,
  Footer,
} from '../components';
import { useEffect, useState } from 'react';

const HomeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inScroll, setInScroll] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const stickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setInScroll(true) : setInScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyNavbar);

    return () => window.removeEventListener('scroll', stickyNavbar);
  });

  return (
    <>
      <header
        className={`${
          inScroll
            ? 'sticky top-0 transition-all delay-100 shadow-lg z-[100]'
            : 'static'
        }`}
      >
        <Navbar openSidebar={openSidebar} />
      </header>
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <main className=''>
        <Home />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
};
export default HomeLayout;
