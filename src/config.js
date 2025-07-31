// Configuration for API endpoints

// For local development on the same machine
const LOCAL_API_URL = 'http://localhost:5000';

// For accessing from other devices on the same network
// Use your computer's actual IP address
const NETWORK_API_URL = 'http://10.72.29.212:5000';

// Automatically detect if we're running on the same machine or from another device
// This will work in both scenarios without manual switching
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_BASE_URL = isLocalhost ? LOCAL_API_URL : NETWORK_API_URL;

export default API_BASE_URL;