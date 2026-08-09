// Write a simple username and password login function in Node.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Implementation for login logic 
  
  if (username ===    'admin' && password === 'password') {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});
