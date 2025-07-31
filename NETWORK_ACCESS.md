# Accessing the Application from Other Devices

## What Was Fixed

The "server error" you were experiencing when trying to log in from another device was caused by two main issues:

1. **CORS Configuration**: The server wasn't properly configured to accept requests from other devices on the network.

2. **API URL Configuration**: The frontend was hardcoded to use `localhost` which only works on the same machine.

## Changes Made

1. **Updated CORS Configuration**: Modified the server to accept requests from any origin.

2. **Created a Config File**: Added a `config.js` file that contains the API base URL which can be easily changed.

3. **Updated API Requests**: Modified all API requests to use the base URL from the config file.

4. **Exposed Development Server**: Updated the Vite configuration to expose the development server to the network.

## How to Access the Application from Other Devices

### From the Development Machine

1. Start the backend server:
   ```
   node server.js
   ```

2. Start the frontend development server:
   ```
   npm run dev
   ```

3. Note the Network URL displayed in the terminal, which should look like:
   ```
   Network: http://YOUR_IP_ADDRESS:PORT/
   ```

### From Other Devices

1. Make sure both devices are on the same network.

2. On the other device, open a web browser and navigate to the Network URL noted above.

3. You should now be able to log in without getting a server error.

## Troubleshooting

If you still encounter issues:

1. **Check Firewall Settings**: Make sure your firewall isn't blocking the connections.

2. **Verify IP Address**: If your computer's IP address has changed, run `node get-ip.js` to get the current IP and update it in `src/config.js`.

3. **Test API Connection**: Try accessing `http://YOUR_IP_ADDRESS:5000/` directly from the other device to verify the backend server is accessible.

4. **Check Console Errors**: Open the browser developer tools on the other device to check for any error messages.