// Dependencies
const mongoose = require('mongoose');

// Schema variable
const Schema = mongoose.Schema;

// Reservation model schema
const reservationSchema = new Schema({
  reservationDate: { type: Date, required: true, default: Date.now() },
  peopleNumber: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  eventId: { type: Schema.Types.ObjectId, ref: 'event' }
});

// Export model schema
module.exports = mongoose.model('reservation', reservationSchema);