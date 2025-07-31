// Simple script to get the local IP address

import { networkInterfaces } from 'os';

function getLocalIpAddress() {
  const nets = networkInterfaces();
  const results = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  console.log('\nYour local IP addresses:\n');
  for (const [name, addresses] of Object.entries(results)) {
    console.log(`${name}: ${addresses.join(', ')}`);
  }
  console.log('\nUse one of these IP addresses in your src/config.js file');
  console.log('Replace YOUR_IP_ADDRESS with the appropriate IP address');
  console.log('Then set API_BASE_URL = NETWORK_API_URL in config.js\n');
}

getLocalIpAddress();