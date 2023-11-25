// src/index.js
const express = require('express');
const jsonParserMiddleware = require('./parserModule');
const schemas = require('./schemas');
const app = express();

//use the joi schema
const userschema = schemas.userRegistrationSchema;

// Use the middleware
app.use(jsonParserMiddleware);

//apply middleware for /users route
app.use('/users', (req, res, next) => {
  const validationResult = userschema.validate(req.body)

  if (!validationResult.error) {
    next(); // Valid request, proceed to route handler
  } else {
    // Invalid request, send error response
    const error = validationResult.error;
    res.status(400).send(error.message);
  }
});

// Define routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/users', (req, res) => {
  // Process user registration logic here...
  res.status(201).send('User registered successfully');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
