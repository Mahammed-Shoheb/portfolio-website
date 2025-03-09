import SectionTitle from "./SectionTitle";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-10 bg-slate-100 scroll-m-10">
      <div className="mx-auto max-w-7xl px-8 tracking-wide ">
        <SectionTitle title={"about me"} />
        <div className="py-4">
          <p className="my-2">
            IT professional with 3 years of experience developing and optimizing
            internal tools and web applications to enhance workflows and
            efficiency. Skilled in React.js, Next.js, Node.js, Java, and Spring
            Boot, with a focus on automation and performance improvement.
            Collaborative and detail-oriented, ensuring seamless system
            enhancements.
          </p>
          <div>
            <h3 className="capitalize font-bold text-emerald-500 my-1">
              education :
            </h3>
            <p>
              Bachelor of Technology (B.Tech) in Electronics and Communications
              Engineering from PES University, Bangalore
            </p>
          </div>
          <div>
            <h3 className="capitalize font-bold text-emerald-500 my-1">
              work :{" "}
            </h3>
            <p>Working as a Staff Associate at AT&T Communication Services</p>
          </div>
          <div>
            <h3 className="capitalize font-bold text-emerald-500 my-1">
              soft skills :{" "}
            </h3>
            <p>
              Communication Skills, Teamwork, Adaptability, Problem-solving,
              Listening
            </p>
          </div>
          <div>
            <h3 className="capitalize font-bold text-emerald-500 my-1">
              contact info :
            </h3>
            <p>
              <span className="capitalize">phone : </span>
              <a href="tel:9108233486">+91-9108233486</a>
            </p>
            <p>
              <span className="capitalize">email : </span>
              <a href="mailto:mdshoheb135@gmail.com">mdshoheb135@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="capitalize font-bold text-emerald-500 my-1">
              resume :
            </h3>
            <p>
              <a
                href="../assets/Mahammed_Shoheb_CV.pdf"
                className="text-emerald-500 capitalize  hover:text-emerald-800 inline-block  "
                download={true}
              >
                download{" "}
                <FaFileDownload className="animate-bounce inline-block text-xl" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
