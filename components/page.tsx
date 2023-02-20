"use client"
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Header from "../app/Header";
import Hero from "../app/Hero/page";
import About from "../app/About/page";
import WorkExperience from "../app/WorkExperience/page";
import Skills from "../app/Skills/page";
import Projects from "../app/MyProjects/page";
import ContactMe from "../app/ContactMe/page";
import Link from "next/link";
import Logo from "../public/FAACD828-E87A-4C20-99C8-2A9D0A22521D.png"

import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";
import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { fetchProjects } from "../utils/fetchProjects";


const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  // check res for error
  if (!res.ok) {
    console.log(res.statusText);
  }

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  //   console.log("fetching", pageInfo);

  return pageInfo;
};

type Props ={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[rgb(20,9,49)] bg-gradient-to-r from-[#3f027407] via-[rgb(0,0,0)]  to-[#12013d5c] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-teal-700">
     
      <Header socials={socials}/>

      <section id="hero" className="snap-start">
      <Hero pageInfo = {pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo = {pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>
      {/* Projects */}

      {/* Contact Me */}
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>


    </div>
  );
};

export default Home;


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      fallback: true
    },

    //Next.js will attempt to regenerate the page
    // - When a request comes in
    // - At most once every 10 seconds
 
  };

  
};