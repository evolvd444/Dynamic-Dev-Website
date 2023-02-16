import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import Logo from "../public/FAACD828-E87A-4C20-99C8-2A9D0A22521D.png"
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchSocials } from "../../utils/fetchSocials";
import { PageInfo, Experience, Skill, Project, Social } from "../../typings";
import { fetchProjects } from "../../utils/fetchProjects";

export default async function Page() {
    // This request should be cached until manually invalidated.
    // Similar to `getStaticProps`.
    // `force-cache` is the default and can be omitted.
    const staticData = await fetch(`https://...`, { cache: 'force-cache' });
  
    // This request should be refetched on every request.
    // Similar to `getServerSideProps`.
    const dynamicData = await fetch(`https://...`, { cache: 'no-store' });
  
    // This request should be cached with a lifetime of 10 seconds.
    // Similar to `getStaticProps` with the `revalidate` option.
    const revalidatedData = await fetch(`https://...`, {
      next: { revalidate: 10 },
    });
  
    return <div>...</div>;
  }