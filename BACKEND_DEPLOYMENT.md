# Backend Deployment Guide

This guide provides instructions for deploying the UpgenZ Learning Platform backend to various hosting services.

## Prerequisites

- A MongoDB Atlas account for the database
- A hosting service account (Heroku, Render, Railway, etc.)
- Node.js and npm installed locally

## Preparing for Deployment

1. Create a MongoDB Atlas cluster
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster (the free tier is sufficient for starting)
   - Set up a database user with read/write permissions
   - Whitelist all IP addresses (0.0.0.0/0) for simplicity, or specific IPs for security
   - Get your connection string from the "Connect" button

2. Update environment variables
   - Create a `.env` file with the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_secure_jwt_secret
     JWT_EXPIRE=30d
     NODE_ENV=production
     ```

## Deployment Options

### Option 1: Heroku

1. Create a Heroku account and install the Heroku CLI
2. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```
3. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_atlas_connection_string
   heroku config:set JWT_SECRET=your_secure_jwt_secret
   heroku config:set JWT_EXPIRE=30d
   heroku config:set NODE_ENV=production
   ```
4. Deploy your code:
   ```bash
   git push heroku main
   ```

### Option 2: Render

1. Create a Render account
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the service:
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Add environment variables in the Render dashboard
6. Deploy the service

### Option 3: Railway

1. Create a Railway account
2. Create a new project
3. Connect your GitHub repository
4. Add environment variables in the Railway dashboard
5. Deploy the service

## After Deployment

1. Update the frontend configuration
   - In `src/config.js`, update the production API URL to your deployed backend URL:
     ```javascript
     production: {
       apiUrl: 'https://your-backend-url.com/api',
     }
     ```

2. Test the connection
   - Try logging in or registering a user
   - Check that API requests are being properly routed to your backend

## Troubleshooting

- **Connection issues**: Ensure your MongoDB connection string is correct and the IP whitelist includes your hosting service
- **CORS errors**: Make sure your backend has CORS configured correctly
- **Environment variables**: Verify all required environment variables are set
- **Logs**: Check the hosting service logs for any errors

## Maintenance

- Regularly update dependencies
- Monitor database usage
- Set up logging and error tracking
- Consider implementing a CI/CD pipeline for automated deployments