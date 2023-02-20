import { groq } from 'next-sanity'

export const pageInfoQuery = groq`
    *[_type == "pageInfo"][0]
`

export const experienceQuery = groq`
  *[_type == "experience"] {
        ...,
        technologies[]->
    }
    `

export const projectQuery = groq`
*[_type == "project"] {
    ...,
    technologies[]->, ...
       video.asset->
} 
`
export const skillsQuery = groq`
    *[_type == "skill"]
`

export const socialsQuery = groq`
    *[_type == "social"]
`