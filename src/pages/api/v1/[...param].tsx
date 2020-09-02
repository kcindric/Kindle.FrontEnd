// import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { createProxyMiddleware } from 'http-proxy-middleware';
// import httpProxy from 'http-proxy';

const handler = nc();

// const proxy: httpProxy = httpProxy.createProxy();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   return new Promise((resolve, reject) => {
//     proxy.once('proxyRes', resolve).once('error', reject).web(req, res, {
//       target: 'http://161.35.75.249/api/',
//       cookieDomainRewrite: '',
//     });
//   });
// };

handler.use(
  createProxyMiddleware({
    target: 'http://161.35.75.249/api/',
    pathRewrite: {
      [`^${process.env.NEXT_PUBLIC_API_ENDPOINT}`]: '',
    },
    changeOrigin: true,
    cookieDomainRewrite: '',
    logLevel: 'debug',
  }),
);

export default handler;
