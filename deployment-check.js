// Deployment readiness check script

import fs from 'fs';
import path from 'path';

const requiredFiles = [
  '.github/workflows/deploy.yml',
  'vite.config.js',
  'src/config.js',
  'public/CNAME',
  '.env.example',
  'FRONTEND_DEPLOYMENT.md',
  'BACKEND_DEPLOYMENT.md'
];

const requiredConfigSettings = [
  { file: 'vite.config.js', content: "base: './'" },
  { file: 'src/config.js', content: 'apiUrl' },
  { file: '.github/workflows/deploy.yml', content: 'github-pages-deploy-action' }
];

console.log('\n🔍 Checking deployment readiness...\n');

// Check if required files exist
console.log('📁 Checking required files:');
let missingFiles = 0;

for (const file of requiredFiles) {
  const filePath = path.resolve(file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file} exists`);
  } else {
    console.log(`  ❌ ${file} is missing`);
    missingFiles++;
  }
}

// Check for required configuration settings
console.log('\n⚙️ Checking configuration settings:');
let missingSettings = 0;

for (const setting of requiredConfigSettings) {
  const filePath = path.resolve(setting.file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(setting.content)) {
      console.log(`  ✅ ${setting.file} contains required setting: ${setting.content}`);
    } else {
      console.log(`  ❌ ${setting.file} is missing required setting: ${setting.content}`);
      missingSettings++;
    }
  } else {
    console.log(`  ❌ ${setting.file} does not exist, cannot check settings`);
    missingSettings++;
  }
}

// Check package.json for deployment scripts
const packageJsonPath = path.resolve('package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('\n📦 Checking package.json scripts:');
  
  if (packageJson.scripts && packageJson.scripts.deploy) {
    console.log('  ✅ deploy script exists');
  } else {
    console.log('  ❌ deploy script is missing');
    missingSettings++;
  }
  
  if (packageJson.scripts && packageJson.scripts.predeploy) {
    console.log('  ✅ predeploy script exists');
  } else {
    console.log('  ❌ predeploy script is missing');
    missingSettings++;
  }
  
  // Check for gh-pages dependency
  if (packageJson.devDependencies && packageJson.devDependencies['gh-pages']) {
    console.log('  ✅ gh-pages dependency exists');
  } else {
    console.log('  ❌ gh-pages dependency is missing');
    missingSettings++;
  }
} else {
  console.log('\n❌ package.json not found');
  missingFiles++;
}

// Summary
console.log('\n📊 Deployment Readiness Summary:');
if (missingFiles === 0 && missingSettings === 0) {
  console.log('\n✅ All checks passed! Your project is ready for deployment.\n');
  console.log('Next steps:');
  console.log('1. Push your code to GitHub');
  console.log('2. Run "npm run deploy" to deploy to GitHub Pages');
  console.log('3. Set up your backend according to BACKEND_DEPLOYMENT.md');
} else {
  console.log(`\n❌ Found ${missingFiles} missing files and ${missingSettings} missing settings.`);
  console.log('Please address the issues above before deploying.');
}