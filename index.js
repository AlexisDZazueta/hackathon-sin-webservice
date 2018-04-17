'use strict'

// Dependencies
const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');

//DB Connection
mongoose.connect(config.db)
  .then(res => {
    console.log(`Established Connection`);
    //Initialize Server
    app.listen(config.port, () => {
      console.log(`API Rest running on port: ${config.port}`);
    });
  }).catch(err => {
    console.log(err);
  });
