import nc from 'next-connect';
import { createProxyMiddleware } from 'http-proxy-middleware';

const handler = nc();

export const config = {
  api: {
    bodyParser: false,
  },
};

handler.use(
  // @ts-ignore
  createProxyMiddleware({
    target: 'http://161.35.75.249/api/',
    pathRewrite: {
      [`^${process.env.NEXT_PUBLIC_API_ENDPOINT}`]: '',
    },
    changeOrigin: true,
    cookieDomainRewrite: '',
    onProxyRes: (proxyRes, _req, _res) => {
      if (proxyRes.headers['set-cookie']) {
        const cookies = proxyRes.headers['set-cookie'].map((cookie) => cookie.replace(/; samesite=none/gi, ''));
        proxyRes.headers['set-cookie'] = cookies;
      }
    },
  }),
);

export default handler;
