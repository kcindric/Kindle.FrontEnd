import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.url);
  // fetch(`http://161.35.75.249${req.url}`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setTimeout(() => {
  //         res.json(data)
  //       }, 2000)
  //     })

  res.status(200).json({ name: 'John Doe' });
};
