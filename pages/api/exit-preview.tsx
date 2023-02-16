import type { NextApiRequest, NextApiResponse } from 'next'
export default async function Exit(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
      res.setPreviewData({});
      res.writeHead(307, {
        Location: "/"});
        res.end();
  }