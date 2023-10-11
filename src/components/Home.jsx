import profileImg from '../assets/images/profile.jpg';
import SocialLinks from './SocialLinks';

const LandingPage = () => {
  return (
    <section
      id='home'
      className=' bg-emerald-100  grid place-content-center py-10 scroll-m-20'
    >
      <div className='w-[95vw] max-w-screen-2xl mx-auto p-2 '>
        <div className='border-slate-300 w-[15rem] h-[15rem] mx-auto mb-2'>
          <img
            src={profileImg}
            alt='Mahammed Shoheb Profile'
            className='rounded-[50%] w-[100%] h-[100%] object-cover '
            loading='eager'
          />
        </div>
        <div className='text-center'>
          <h1 className='capitalize text-5xl font-bold mb-2'>
            I'm mahammed shoheb
          </h1>
          <p className='tracking-wide mb-2'>
            Tech Support Engineer (Transitioning to Frontend Developer)
          </p>
          <p className='tracking-wide mb-2'>
            Aspiring frontend developer with a passion for creating captivating
            web experiences.
          </p>
          <div className='flex justify-center text-3xl my-1 gap-4 '>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
