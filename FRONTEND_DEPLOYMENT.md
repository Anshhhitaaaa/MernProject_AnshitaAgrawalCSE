# Frontend Deployment Guide (GitHub Pages)

This guide provides instructions for deploying the UpgenZ Learning Platform frontend to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed locally
- Node.js and npm installed locally

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" button in the top-right corner and select "New repository"
3. Name your repository (e.g., "upgenz-learning-platform")
4. Choose public or private visibility
5. Click "Create repository"

### 2. Push Your Code to GitHub

```bash
# Initialize git if not already done
git init

# Add the remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
```

### 3. Configure for Production

1. Update the API URL in `src/config.js` to point to your deployed backend:

```javascript
production: {
  apiUrl: 'https://your-backend-api-url.com/api',
}
```

2. If you have a custom domain, update the `public/CNAME` file with your domain name.

### 4. Deploy to GitHub Pages

#### Option 1: Manual Deployment

1. Install the gh-pages package if not already installed:
```bash
npm install --save-dev gh-pages
```

2. Run the deployment script:
```bash
npm run deploy
```

This will:
- Build your project
- Create necessary files for GitHub Pages
- Push the build to the gh-pages branch

#### Option 2: GitHub Actions (Automated Deployment)

The project is already configured with a GitHub Actions workflow in `.github/workflows/deploy.yml`. This workflow will automatically build and deploy your application to GitHub Pages when you push to the main branch.

### 5. Configure GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the source, select the "gh-pages" branch
5. Click "Save"

### 6. Access Your Deployed Site

Your site will be available at:
- `https://yourusername.github.io/your-repo-name/` (without custom domain)
- `https://your-custom-domain.com` (with custom domain)

## Setting Up a Custom Domain (Optional)

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. In your GitHub repository settings, under GitHub Pages, enter your custom domain
3. Configure DNS settings at your domain registrar:
   - For an apex domain (example.com), create A records pointing to GitHub Pages IP addresses
   - For a subdomain (www.example.com), create a CNAME record pointing to `yourusername.github.io`

## Troubleshooting

- **404 errors on routes**: Ensure you're using the correct base path in your router
- **API connection issues**: Verify the API URL in config.js is correct
- **Blank page**: Check browser console for errors
- **CSS/JS not loading**: Ensure paths are relative to the base URL

## Maintenance

- Regularly update dependencies
- Test thoroughly before deploying updates
- Consider setting up a staging environment