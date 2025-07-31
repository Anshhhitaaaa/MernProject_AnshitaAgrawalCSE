// Simple script to help with GitHub Pages deployment

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  console.log('Building project first...');
  execSync('npm run build', { stdio: 'inherit' });
}

// Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join('dist', '.nojekyll'), '');

// Copy index.html to 404.html to handle client-side routing
fs.copyFileSync(path.join('dist', 'index.html'), path.join('dist', '404.html'));

console.log('Deployment preparation complete!');
console.log('Now you can push the dist folder to the gh-pages branch.');