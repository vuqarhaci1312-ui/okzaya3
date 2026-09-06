const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = 8080;
const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const REMOTE_ORIGIN = 'https://shop.vitrumgroup.org';
const LOCAL_ORIGIN = `http://localhost:${PORT}`;
const KICE_DETAIL_PATH = '/projects/kice-restaurant';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
};

function getMimeType(filePath) {
  return MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function rewriteHtml(content) {
  return content
    .replace(/\/\/shop\.vitrumgroup\.org/g, LOCAL_ORIGIN)
    .replace(/https:\/\/shop\.vitrumgroup\.org/g, LOCAL_ORIGIN)
    .replace(/\/\/shop\.ozkayasteel\.az/g, LOCAL_ORIGIN)
    .replace(/https:\/\/shop\.ozkayasteel\.az/g, LOCAL_ORIGIN);
}

function proxyRequest(targetUrl, res) {
  const url = new URL(targetUrl);
  const options = {
    hostname: url.hostname,
    port: 443,
    path: url.pathname + url.search,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; LocalMirror/1.0)',
      Accept: '*/*',
    },
  };

  const proxyReq = https.request(options, (proxyRes) => {
    const headers = { ...proxyRes.headers };

    if (/\.(woff2?|ttf|otf)$/i.test(url.pathname)) {
      headers['access-control-allow-origin'] = '*';
    }

    res.writeHead(proxyRes.statusCode || 200, headers);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', () => {
    res.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Failed to fetch from original site.');
  });

  proxyReq.end();
}

function serveLocal(filePath, req, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      const remoteUrl = REMOTE_ORIGIN + req.url;
      return proxyRequest(remoteUrl, res);
    }

    const ext = path.extname(filePath).toLowerCase();
    const headers = { 'Content-Type': getMimeType(filePath) };

    if (/\.(woff2?|ttf|otf)$/i.test(ext)) {
      headers['Access-Control-Allow-Origin'] = '*';
    }

    if (ext === '.html') {
      headers['Content-Type'] = 'text/html; charset=utf-8';
      res.writeHead(200, headers);
      res.end(rewriteHtml(data.toString('utf8')));
      return;
    }

    res.writeHead(200, headers);
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, LOCAL_ORIGIN).pathname);

  if (urlPath.startsWith('/projects/')) {
    const normalized = urlPath.replace(/\/$/, '') || '/';
    const kiceBase = KICE_DETAIL_PATH.replace(/\/$/, '');
    if (normalized !== kiceBase) {
      const redirectTo = kiceBase + (urlPath.endsWith('/') ? '/' : '');
      res.writeHead(302, { Location: redirectTo });
      res.end();
      return;
    }
  }

  let filePath = path.join(SITE_ROOT, urlPath);

  if (urlPath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  } else if (!path.extname(urlPath)) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (!fs.existsSync(filePath)) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  if (!filePath.startsWith(SITE_ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  serveLocal(filePath, req, res);
});

server.listen(PORT, () => {
  console.log(`Vitrum Shop local mirror running at ${LOCAL_ORIGIN}`);
  console.log('Images and fonts load from the original site when missing locally.');
  console.log('Press Ctrl+C to stop.');
});
