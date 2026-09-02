#!/bin/bash
# Custom Vercel build script.
# Runs the normal Vite build, then assembles the .vercel/output directory
# using the Build Output API v3.
#
# The SSR server bundle has external dependencies (react, srvx, etc.)
# that are NOT bundled. We include node_modules in the function so they
# can be resolved at runtime.

set -euo pipefail

echo "→ Running Vite build..."
bun run build

echo "→ Assembling .vercel/output..."

# 1. Create the output directory structure
rm -rf .vercel/output
mkdir -p .vercel/output/static
mkdir -p .vercel/output/functions/ssr.func

# 2. Copy static client assets
cp -r dist/client/* .vercel/output/static/

# 3. Copy the SSR server bundle into the function directory
cp -r dist/server/* .vercel/output/functions/ssr.func/

# 4. Copy node_modules into the function (required - the server bundle has external imports)
# Prune dev dependencies first to avoid exceeding Vercel's 250MB Serverless Function limit
echo "→ Pruning devDependencies to reduce function size..."
rm -rf node_modules
bun install --production
echo "→ Removing massive unused build tools included by Vinxi..."
rm -rf node_modules/esbuild node_modules/@esbuild node_modules/@babel node_modules/prettier node_modules/lightningcss* node_modules/rollup node_modules/caniuse-lite node_modules/vite node_modules/@vitejs node_modules/browserslist node_modules/jiti node_modules/defu node_modules/consola
rm -rf node_modules/.bin
cp -R node_modules .vercel/output/functions/ssr.func/node_modules

# 5. Create a package.json for the function to signal ESM
cat > .vercel/output/functions/ssr.func/package.json << 'PKGJSON'
{
  "type": "module"
}
PKGJSON

# 6. Create the Node.js Serverless Function entry point
#    Adapts Vercel's Node.js (req, res) API to the Web fetch() API used by srvx/TanStack Start
cat > .vercel/output/functions/ssr.func/index.mjs << 'ENTRY'
import server from './server.js';

export default async function handler(req, res) {
  try {
    // Build Web Request from Node.js IncomingMessage
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = `${protocol}://${host}${req.url || '/'}`;

    const headers = new Headers();
    for (const [key, val] of Object.entries(req.headers)) {
      if (val == null) continue;
      if (Array.isArray(val)) {
        for (const v of val) headers.append(key, v);
      } else {
        headers.set(key, val);
      }
    }

    // Read body for non-GET/HEAD requests
    let body = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      if (chunks.length > 0) {
        body = Buffer.concat(chunks);
      }
    }

    const webRequest = new Request(url, {
      method: req.method || 'GET',
      headers,
      body,
      duplex: 'half',
    });

    // Call the srvx/TanStack Start fetch handler
    const webResponse = await server.fetch(webRequest);

    // Write Web Response back to Node.js ServerResponse
    res.statusCode = webResponse.status;
    for (const [key, value] of webResponse.headers.entries()) {
      // Avoid setting transfer-encoding when streaming
      if (key.toLowerCase() === 'transfer-encoding') continue;
      res.setHeader(key, value);
    }

    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
      res.end();
    } else {
      const text = await webResponse.text();
      res.end(text);
    }
  } catch (err) {
    console.error('[vercel-ssr] Unhandled error:', err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('content-type', 'text/html; charset=utf-8');
      res.end('<h1>Internal Server Error</h1><pre>' + String(err) + '</pre>');
    }
  }
}
ENTRY

# 7. Create the function config
cat > .vercel/output/functions/ssr.func/.vc-config.json << 'VCCONFIG'
{
  "runtime": "nodejs24.x",
  "handler": "index.mjs",
  "launcherType": "Nodejs",
  "maxDuration": 30
}
VCCONFIG

# 8. Create the top-level output config with routing rules
cat > .vercel/output/config.json << 'CONFIG'
{
  "version": 3,
  "routes": [
    {
      "src": "/assets/(.*)",
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    },
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/ssr"
    }
  ]
}
CONFIG

echo "✓ .vercel/output assembled successfully!"
echo "  Static files: $(find .vercel/output/static -type f | wc -l | tr -d ' ') files"
echo "  SSR function: .vercel/output/functions/ssr.func/"
echo "  node_modules included for runtime dependencies"
