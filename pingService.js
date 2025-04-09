// Import axios to make HTTP requests
const axios = require('axios');

// Your website URL to monitor (replace this with your website)
const url = 'https://phoneshopbd.onrender.com'; // Replace with your website's URL

// Function to send a GET request to the website
const pingWebsite = async () => {
  try {
    // Sending a GET request to the website
    const response = await axios.get(url);
    console.log(`Pinged ${url} successfully. Status code: ${response.status}`);
  } catch (error) {
    // Log any errors if pinging fails
    console.error(`Error pinging ${url}:`, error.message);
  }
};

// Set an interval to ping the website every minute (60000 ms)
setInterval(pingWebsite, 60000); // 60000 ms = 1 minute
