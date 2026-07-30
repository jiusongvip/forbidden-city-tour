const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, cb);
    else if (e.name.endsWith('.astro')) cb(full);
  }
}

const pagesDir = path.join(__dirname, 'src', 'pages');
console.log('Page | H2s | Desc chars\n---');
walk(pagesDir, (file) => {
  const content = fs.readFileSync(file, 'utf8');
  const h2Count = (content.match(/<h2[\s>]/g) || []).length;
  const descMatch = content.match(/description="([^"]+)"/);
  const desc = descMatch ? descMatch[1] : 'NONE';
  const descLen = desc.length;
  const flag = (h2Count <= 1 ? ' ⚠️H2' : '') + (descLen < 140 || descLen > 160 ? ' ⚠️Desc' : '');
  const name = path.relative(pagesDir, file).replace(/\\/g, '/').padEnd(40);
  console.log(`${name} | ${h2Count.toString().padStart(2)} | ${descLen.toString().padStart(3)}${flag}`);
});
