import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id='about' className='py-10 bg-slate-100 scroll-m-10'>
      <div className='mx-auto max-w-7xl px-8 tracking-wide '>
        <SectionTitle title={'about me'} />
        <div className='py-4'>
          <p className='my-2'>
            Aspiring frontend developer with a passion for creating captivating
            web experiences. With a solid foundation in logic and 4 years of IT
            experience as a Tech Support Engineer, I'm dedicated to
            transitioning into a frontend developer role, crafting user-friendly
            websites and applications that engage and delight users. Eager to
            contribute to innovative projects, continuously expand my skill set,
            and deliver outstanding digital solutions.
          </p>
          <div>
            <h3 className='capitalize font-bold text-emerald-500 my-1'>
              education :
            </h3>
            <p>
              Bachelor of Technology (B.Tech) in Electronics and Communications
              Engineering from PES University, Bangalore
            </p>
          </div>
          <div>
            <h3 className='capitalize font-bold text-emerald-500 my-1'>
              work :{' '}
            </h3>
            <p>
              Working as a Staff Associate, Tech Support in AT&T Communication
              Services
            </p>
          </div>
          <div>
            <h3 className='capitalize font-bold text-emerald-500 my-1'>
              soft skills :{' '}
            </h3>
            <p>
              Communication Skills, Teamwork, Adaptability, Problem-solving,
              Listening, Customer service
            </p>
          </div>
          <div>
            <h3 className='capitalize font-bold text-emerald-500 my-1'>
              contact info :
            </h3>
            <p>
              <span className='capitalize'>phone : </span>
              <a href='tel:9108233486'>+91-9108233486</a>
            </p>
            <p>
              <span className='capitalize'>email : </span>
              <a href='mailto:mdshoheb135@gmail.com'>mdshoheb135@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className='capitalize font-bold text-emerald-500 my-1'>
              resume :
            </h3>
            <a
              href='../assets/Mahammed_Shoheb_CV.pdf'
              className='text-emerald-500 underline hover:text-emerald-800'
              download={true}
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
