const axios = require('axios');

// Your website URL to monitor
const url = 'https://chat-full-o3as.onrender.com'; // Replace with your website URL

let logs = [];

const pingWebsite = async () => {
  try {
    const response = await axios.get(url);
    const logMessage = `Pinged ${url} successfully. Status code: ${response.status}`;
    logs.push(logMessage);
    console.log(logMessage);
  } catch (error) {
    const errorMessage = `Error pinging ${url}: ${error.message}`;
    logs.push(errorMessage);
    console.error(errorMessage);
  }
};

// Set an interval to ping the website every minute (60000 ms)
setInterval(pingWebsite, 60000); // 60000 ms = 1 minute

module.exports = (req, res) => {
  res.status(200).json(logs);
};
