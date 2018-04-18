// Dependencies
const mongoose = require('mongoose');
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
  maxPerReservation: { type: Number, required: true },
  mainImage: { type: String },
  gallery: [{ type: String }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  reservations: [{ type: Schema.Types.ObjectId, ref: 'reservation' }]
});

// Export model schema
module.exports = mongoose.model('event', eventSchema);