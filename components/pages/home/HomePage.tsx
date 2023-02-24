import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import DynamicLogo from "public/FAACD828-E87A-4C20-99C8-2A9D0A22521D.png"

import { Experience, PageInfo, Project, Skill, Social } from "../../../types";
import About from "../../About/page";
import ContactMe from "../../ContactMe/page";
import Header from "../../Header/page";
import Hero from "../../Hero/page";
import Projects from "../../MyProjects/page";
import Skills from "../../Skills/page";
import WorkExperience from "../../WorkExperience/page";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

  
  

const Home = (props: Props) => {

    const {socials, projects, skills, pageInfo, experiences } = props
  return (
    <div className= "bg-[rgb(20,9,49)] bg-gradient-to-r from-[#3f027407] via-[rgb(0,0,0)]  to-[#12013d5c] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-700">
      <Header socials={socials} />

      {/* Hero Banner Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky -bottom-3 h-[20%] w-[100%] cursor-pointer">
          <div className="flex  items-center justify-center">
            <Image
              className=" flex items-center justify-center filter grayscale hover:grayscale-0 cursor-pointer"
              src={DynamicLogo}
              height={100}
              width={350}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;




