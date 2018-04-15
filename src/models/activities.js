// Dependencies
const mongoose = require('mongoose');

// Schema variable
const Schema = mongoose.Schema;

// Activities model schema
const activitySchema = new Schema({

});

// Export model schema
module.exports = mongoose.model('activities', activitySchema);