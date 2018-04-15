// Dependencies
const mongoose = require('mongoose');

// Schema variable
const Schema = mongoose.Schema;

// Service model schema
const serviceSchema = new Schema({
  
});

// Export model schema
module.exports = mongoose.model('services', serviceSchema);