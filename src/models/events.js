// Dependencies
const mongoose = require('mongoose');

// Schema variable
const Schema = mongoose.Schema;

// Event model schema
const eventSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  place: { type: String, required: true },
  date: { type: String, required: true },
  hour: { type: String, required: true },
  capacity: { type: Number, required: true },
  rate: { type: Number },
  comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }]
});

// Export model schema
module.exports = mongoose.model('events', eventSchema);