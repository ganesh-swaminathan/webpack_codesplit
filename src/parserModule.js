// src/parserModule.js
const express = require('express');

const jsonParserMiddleware = express.json();

module.exports = jsonParserMiddleware;
