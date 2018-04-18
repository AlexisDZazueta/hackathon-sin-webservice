// Dependencies
const mongoose = require('mongoose');

// Schema variable
const Schema = mongoose.Schema;

// Comments model schema
const commentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() },
  rate: { type: Number },
  eventId: { type: Schema.Types.ObjectId, ref: 'event', required: true }
});

// Export model schema
module.exports = mongoose.model('comment', commentSchema);