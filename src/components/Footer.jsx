import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className='bg-emerald-100 text-center py-10'>
      <div className='mx-auto max-w-7xl px-8'>
        <p className='mb-2 capitalize'>
          &copy; <span>{new Date().getFullYear()}</span> mahammed shoheb
        </p>
        <div className='flex tex text-2xl justify-center gap-5'>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
