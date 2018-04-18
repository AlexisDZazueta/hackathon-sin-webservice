// Dependencies
const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

// Schema variable
const Schema = mongoose.Schema;

// Event model schema
const eventSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
  hour: { type: String, required: true },
  capacity: { type: Number, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }]
});

// Export model schema
module.exports = mongoose.model('event', eventSchema);