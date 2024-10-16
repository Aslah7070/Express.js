// const express = require('express');
// const app = express();

// let user={
//     "message": "User created",
//     "user": {
//       "name": "John Doe",
//       "email": "john.doe@example.com"
//     }
//   }
  

// app.use(express.json()); // Middleware to parse JSON bodies

// // Handling a GET request
// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });

// // Handling a POST request
// app.post('/user', (req, res) => {
//   const user = req.body; // Assuming request body is JSON
//   res.status(201).json({ message: 'User created', user });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });



const express = require('express');
const app = express();

// Example user data (predefined user)
let predefinedUser = {
    "message": "User created",
    "user": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
};

// Middleware to parse JSON bodies
app.use(express.json()); 

// Handling a GET request
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Handling a POST request
app.post('/user', (req, res) => {
  const newUser = req.body; // Accessing the JSON request body
  if (!newUser.name || !newUser.email) {
    // Check if name and email are provided in the request body
    return res.status(400).json({ message: 'Invalid data, name and email are required.' });
  }
  // Respond with the created user
  res.status(201).json({ message: 'User created', user: newUser });
});

// Start the server
app.listen(3000, () => {
  console.log('Serverrrr is running on port 3000');
});
