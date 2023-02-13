import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import {sanityClient} from "../../sanity"
import { MuxVideo } from '../../typings'

const query = groq`
    *[_type == "muxvideo"] 
   
`;
type Data = {
  muxVideos: MuxVideo[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const muxVideos: MuxVideo[] = await sanityClient.fetch(query)

  res.status(200).json({ muxVideos })
}