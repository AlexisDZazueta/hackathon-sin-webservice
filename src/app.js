// Dependencies
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Server variable
const app = express();

// Routers variables
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');
const eventRoutes = require('./routes/event');
const locationRoutes = require('./routes/location');
const reservationRoutes = require('./routes/reservation');
const placeRoutes = require('./routes/place');

// DB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hackathon-sin-webservice')
  .then(db => console.log(`DB is Online: ${db}`))
  .catch(err => console.log(`An error has ocurred: ${err}`));

// Server settings
app.set('port', process.env.PORT || 3000 );

// Middlewares 
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/reservation', reservationRoutes);
app.use('/api/place', placeRoutes);

// Static files

// Error handlers

// Start the server
app.listen(app.get('port'), () => {
  console.log(`Server on port: ${app.get('port')}`);
});