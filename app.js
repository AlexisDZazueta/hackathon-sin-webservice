'use strict'

// Dependencies
const express = require('express');
const api = require('./routes');

// Server variable
const app = express();

// Server settings
app.use(express.json());

// API root
app.use('/api', api);

// Export module
module.exports = app;