// Configuration for API endpoints

// For local development on the same machine
const LOCAL_API_URL = 'http://localhost:5000';

// For accessing from other devices on the same network
// Use your computer's actual IP address
const NETWORK_API_URL = 'http://10.72.29.212:5000';

// Choose which URL to use based on where the app is being accessed from
// You can change this manually based on your needs
// Use LOCAL_API_URL when testing on the same machine
// Use NETWORK_API_URL when accessing from other devices
const API_BASE_URL = NETWORK_API_URL; // Changed back to NETWORK_API_URL for accessing from other devices

export default API_BASE_URL;