import {
  Sidebar,
  Navbar,
  Home,
  Skills,
  Projects,
  About,
  Footer,
} from '../components';
import { useState } from 'react';

const HomeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <header className='sticky top-0 z-50'>
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
