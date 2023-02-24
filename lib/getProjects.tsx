import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'

import { client } from "../lib/sanity.client";
import { Project } from  "../types"

const query = groq`
*[_type == "project"] {
    ...,
    technologies[]->, ...
       video.asset->
} 
`; //66de4299-2a0f-479d-90eb-2a5d3e51e9e1
//_rev:QJq5vKNFz1PZLkLgGDnK5Z
type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const projects: Project[] = await client.fetch(query)

  res.status(200).json({ projects })
}