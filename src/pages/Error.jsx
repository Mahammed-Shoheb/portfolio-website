import { Link } from 'react-router-dom';
import notFoundImg from '../assets/images/undraw_page_not_found_re_e9o6.svg';

const ErrorPage = () => {
  return (
    <div className='grid place-content-center min-h-[90vh] md:min-h-screen text-center p-4 '>
      <img
        src={notFoundImg}
        alt='not found image'
        className='md:max-w-xl mb-6'
      />
      <div>
        <h1 className='capitalize text-3xl  mb-4 tracking-wide'>
          Sorry, There is no such page...
        </h1>
        <Link
          to='/'
          className='capitalize tracking-wide bg-emerald-500 inline-block px-4 py-1 rounded-md'
        >
          back to home page
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
