// Configuration for different environments

const config = {
  // Development environment (local)
  development: {
    apiUrl: 'http://localhost:5000/api',
  },
  // Production environment
  production: {
    // Replace with your deployed backend URL
    apiUrl: 'https://your-backend-api-url.com/api',
  }
};

// Determine current environment
const environment = import.meta.env.MODE || 'development';

// Export configuration for current environment
export default config[environment];