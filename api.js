const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const enableCors = function (req, res) {
  if (req.headers['access-control-request-method']) {
    res.setHeader('access-control-allow-methods', req.headers['access-control-request-method']);
  }

  if (req.headers['access-control-request-headers']) {
    res.setHeader('access-control-allow-headers', req.headers['access-control-request-headers']);
  }

  if (req.headers.origin) {
    res.setHeader('access-control-allow-origin', 'http://localhost:3000');
    res.setHeader('access-control-allow-credentials', 'true');
  }
};

proxy.on('proxyRes', function (proxyRes, req, res) {
  enableCors(req, res);

  if (proxyRes.headers['set-cookie']) {
    const cookies = proxyRes.headers['set-cookie'].map((cookie) => cookie.replace(/; samesite=none/gi, ''));
    proxyRes.headers['set-cookie'] = cookies;
  }
});

const server = http.createServer(function (req, res) {
  if (req.method === 'OPTIONS') {
    enableCors(req, res);
    res.writeHead(200);
    res.end();
    return;
  }

  console.log(req.url);

  proxy.web(req, res, {
    target: 'http://161.35.75.249/',
    cookieDomainRewrite: '',
  });
});

console.log('listening on port 5050');
server.listen(5050);
