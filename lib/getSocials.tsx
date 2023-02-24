import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'

import { client } from "../lib/sanity.client";
import { Social } from  "../types"
const query = groq`
    *[_type == "social"]
`;
type Data = {
  socials: Social[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const socials: Social[] = await client.fetch(query)
    const socialJson = JSON.stringify(socials)
    // console.log("socials returns this === " + {socialJson})

  res.status(200).json({socials})
}

