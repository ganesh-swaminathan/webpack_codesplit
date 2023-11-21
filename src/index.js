// src/index.js
const express = require('express');
const jsonParserMiddleware = require('./parserModule');
const app = express();

// Use the middleware
app.use(jsonParserMiddleware);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
