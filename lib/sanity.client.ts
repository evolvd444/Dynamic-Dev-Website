import createImageUrlBuilder from "@sanity/image-url";
import { pageInfoQuery } from 'lib/sanity.queries';
import {createClient, groq} from 'next-sanity'
import {cache} from 'react'

import { Experience, PageInfo, Project, Skill, Social } from "../types";
import { experienceQuery, projectQuery, skillsQuery, socialsQuery } from './sanity.queries';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"
const useCdn = process.env.NODE_ENV === 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  token:
  process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
})







// type Data = {
//   experiences: Experience[]
//   projects: Project[]
//   skills:Skill[]
//   pageInfo: PageInfo
//   socials: Social[]
// }


//     const experiences: Experience[] = await client.fetch(experienceQuery)
//     const projects: Project[] = await client.fetch(projectQuery)
//     const skills: Skill[] = await client.fetch(skillsQuery)
//     const pageInfo: PageInfo= await client.fetch(pageInfoQuery)
//     const pageInfoJson = JSON.stringify(pageInfo)
//     console.log("pageInfo returns this === " + {pageInfoJson})
//     const socials: Social[] = await client.fetch(socialsQuery)
//     const socialJson = JSON.stringify(socials)
//     console.log("socials returns this === " + {socialJson})

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const sanityClient = (token?: string) => {
    return projectId
      ? createClient({ projectId, dataset, apiVersion, useCdn, token })
      : null
  }

//   export const fetchExperiences = async() => {
//     const res = await fetch("https://iuagzy0t.api.sanity.io/v2021-10-21/data/query/production?query=%0A%20*%5B_type%20%3D%3D%20%22experience%22%5D%20%7B%0A%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20technologies%5B%5D-%3E%0A%20%20%20%20%7D%0A ")

//     const data = await res.json();
//     const experiences: Experience[] = data.experiences;

//     console.log("fetching", experiences);

//     return experiences
// }



// export const fetchPageInfo = async () => {
//   const res = await fetch("https://iuagzy0t.api.sanity.io/v2021-10-21/data/query/production?query=%0A*%5B_type%20%3D%3D%20%22pageInfo%22%5D%0A");

//   // check res for error
//   if (!res.ok) {
//     console.log(res.statusText);
//   }

//   const data = await res.json();
//   const pageInfo: PageInfo = data.pageInfo;

//     console.log("fetching", pageInfo);

//   return pageInfo;
// };


// export const fetchProjects = async () => {
//   const res = await fetch("https://iuagzy0t.api.sanity.io/v2021-10-21/data/query/production?query=%0A*%5B_type%20%3D%3D%20%22project%22%5D%20%7B%0A%20%20%20%20...%2C%0A%20%20%20%20technologies%5B%5D-%3E%0A%7D%20%0A");

//   const data = await res.json();
//   const projects: Project[] = data.projects;

//   console.log("fetching", projects);

//   return projects;
// };



// export const fetchSkills = async() => {
//     const res = await fetch("https://iuagzy0t.api.sanity.io/v2021-10-21/data/query/production?query=%0A*%5B_type%20%3D%3D%20%22skill%22%5D%0A")

//     const data = await res.json();
//     const skills: Skill[] = data.skills;

//     console.log("fetching", skills);

//     return skills
// }

// export const fetchSocial = async () => {
//     const res = await fetch("https://iuagzy0t.api.sanity.io/v2021-10-21/data/query/production?query=%0A%20*%5B_type%20%3D%3D%20%22social%22%5D%0A");
  
//     const data = await res.json();
//     const socials: Social[] = data.socials;
  
//     // console.log("fetching", socials);
  
//     return socials;
//   };

  export async function getPageInfo({
    token,
  }: {
    token?: string
  }): Promise<PageInfo | undefined> {

    
    const pageInfo = await sanityClient(token)?.fetch(pageInfoQuery)

    // const pageInfoJson = JSON.stringify(pageInfo)
    //   console.log(pageInfo ,"this is just the PAGE Info---->" + pageInfoJson)
    return  pageInfo
  }
  
  export async function getExperience({
    token,
  }: {
    token?: string
  }): Promise<Experience[] | undefined> {
    const experience = await sanityClient(token)?.fetch(experienceQuery)
    // const experienceJson = JSON.stringify(experience)
    //   console.log(experience ,"this is just the EXPERIENCE Info---->" + experienceJson)
    return experience
  }
  
  export async function getSkills({
    token,
  }: {
    token?: string
  }): Promise<Skill[] | undefined> {
    const skills = await sanityClient(token)?.fetch(skillsQuery)
    // const skillsJson = JSON.stringify(skills)
    // console.log(skills ,"this is just the SKILLS Info---->" + skillsJson)
    return skills
  }
  
  export async function getProject({
    token,
  }: {
    token?: string
  }): Promise<Project[] | undefined> {

    const projects = await sanityClient(token)?.fetch(projectQuery)
    // const projectsJson = JSON.stringify(projects)
    //   console.log(projects ,"this is just the PROJECTS Info---->" + projectsJson)
    return projects
  }
  
  export async function getSocials({
    token,
  }: {
    token?: string
  }): Promise<Social[] | undefined> {
    
    const socials = await sanityClient(token)?.fetch(socialsQuery)
    // const socialsJson = JSON.stringify(socials)
    // console.log(socials ,"this is just the SOCIALS Info---->" + socialsJson)
    return socials
  }






// Wrap the cache function in a way that reuses the TypeScript definitions
// const clientFetch = cache(client.fetch.bind(client))

// // Now use it just like before, fully deduped, cached and optimized by react
// const data = await clientFetch(groq`*[]`)
// // You can use the same generics as ebfore
// const total = await clientFetch<number>(groq`count*()`)

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: any) =>
  createImageUrlBuilder(client).image(source);