import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import { sanityClient } from "../../sanity/sanity";
import { PageInfo } from "../../typings";

const query = groq`
    *[_type == "pageInfo"][0]
`;
type Data = {
  pageInfo: PageInfo
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const pageInfo: PageInfo= await sanityClient.fetch(query)
 console.log("this is paginfo stuff ----->" + res.status(200).json({pageInfo}))
  res.status(200).json({ pageInfo })
}