'use strict'

// Dependencies
const express = require('express');
const userCtrl = require('../controllers/user');
//const eventCtrl = require('../controllers/event');
//const locationCtrl = require('../controllers/location');
const auth = require('../middlewares/auth');
const api = express.Router();

// Users Routes
api.post('/users/signup', userCtrl.signUp);
api.post('/users/signin', userCtrl.signIn);
api.put('/users/:userId', userCtrl.updateUser);
api.delete('/users/:userId', userCtrl.deleteUser);

// Export modules
module.exports = api;

