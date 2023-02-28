
import { GetStaticProps } from "next";

import About from "../components/About/page";
import Bottom from '../components/Bottom/page'
import ContactMe from "../components/ContactMe/page";
import Header from "../components/Header/page";
import Hero from "../components/Hero/page";
import Projects from "../components/MyProjects/page";
import Skills from "../components/Skills/page";
import WorkExperience from "../components/WorkExperience/page";
import {getExperience, getPageInfo, getProject, getSkills, getSocials} from "../lib/sanity.client"
import { Experience, PageInfo, Project, Skill, Social } from "../types";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
const token = process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN

const Home = ({ projects, skills, pageInfo, experiences, socials}: Props) => {
  return (
    <div className="bg-[rgb(20,9,49)] bg-gradient-to-r from-[#3f027407] via-[rgb(0,0,0)]  to-[#12013d5c] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-700">
      <Header socials={socials} />

      {/* Hero Banner Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
        <Bottom />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
        <Bottom/>
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
        <Bottom/>
      </section>

      {/* Skills Section */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
        <Bottom/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
        <Bottom/>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
        <Bottom/>
      </section>
      
     
   
        
      
    </div>
  );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await getPageInfo({token});
  const experiences: Experience[] = await getExperience({token});
  const skills: Skill[] = await getSkills({token});
  const projects: Project[] = await getProject({token});
  const socials: Social[] = await getSocials({token});

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 seconds
    revalidate: 30,
  };
};


