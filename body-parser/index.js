// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json()); // to parse JSON data
 app.use(bodyParser.urlencoded({ extended: true })); // to parse form data (URL-encoded)

// Route to handle POST request with JSON data
app.post('/submit-json', (req, res) => {
  const data = req.body;
  console.log('Received JSON:', data);
  res.send(`Received JSON data: ${JSON.stringify(data)}`);
});

// Route to handle POST request with form data
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Received Form Data:', formData);
  res.send(`Received form data: ${JSON.stringify(formData)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
