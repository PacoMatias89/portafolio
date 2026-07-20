// Inyecta el HTML pre-renderizado dentro de docs/index.html tras el build.
// Se ejecuta después de `vite build` (cliente) y `vite build --ssr` (servidor).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const indexPath = toAbsolute('docs/index.html');
const template = fs.readFileSync(indexPath, 'utf-8');

const { render } = await import(
  pathToFileURL(toAbsolute('dist-server/entry-server.js')).href
);

const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error('No se encontró <div id="root"></div> en docs/index.html');
}

const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

fs.writeFileSync(indexPath, html);
console.log('✓ HTML pre-renderizado inyectado en docs/index.html');
