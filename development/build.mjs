import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('./', import.meta.url));
const website = path.resolve(root, '../website');
const entries = [
  ['script.js', 'assets/cat-3d-preview/home.bundle.js', true],
  ['src/cat-preview.js', 'assets/cat-3d-preview/preview.bundle.js', true],
  ['src/dissolve-preview.js', 'assets/cat-3d-preview/dissolve.bundle.js', false],
  ['src/paw-ascii-background.js', 'assets/paw-ascii/background.bundle.js', true],
];
for (const [input, output, minify] of entries) {
  const outfile = path.join(website, output);
  await mkdir(path.dirname(outfile), { recursive: true });
  await build({
    entryPoints: [path.join(root, input)], outfile,
    bundle: true, minify, format: 'esm', target: ['es2022'],
    legalComments: minify ? 'linked' : 'inline',
  });
  console.log(`Built ${output}`);
}
console.log('Local bundles updated. No deployment has been performed.');
