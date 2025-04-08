// 
const targetUrl = "https://jsonplaceholder.typicode.com/todos/1"; // Example URL

// Function to send request and check server status
async function sendRequest() {
  try {
    const response = await axios.get(targetUrl);
    if (response.status >= 200 && response.status < 300) {
      return { message: `Server is Online (Status: ${response.status})`, statusClass: 'online' };
    } else {
      return { message: `Potentially Down (Status: ${response.status})`, statusClass: 'offline' };
    }
  } catch (error) {
    return { message: `Down or Network Error: ${error.message}`, statusClass: 'warning' };
  }
}
