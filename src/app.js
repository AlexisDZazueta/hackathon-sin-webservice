// Dependencies
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Server variable
const app = express();

// Routes variables
const usersRoutes = require('./routes/users');

// DB Connection
mongoose.connect('mongodb://localhost/hackathon-sin')
.then(db => console.log('DB is Online'))
.catch(err => console.log(err));

// Setting
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', usersRoutes);

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Server on port: ${app.get('port')}`);
});