// Dependencies
const mongoose = require('mongoose');

// Schema variable
const Schema = mongoose.Schema;

// Comments model schema
const commentSchema = new Schema({
  userName: { type: String, required: true },
  comment: { type: String, required: true },
  Date: { type: Date, required: true },
  rate: { type: Number },
  event: { type: Schema.Types.ObjectId, ref: 'events' }
});

// Export model schema
module.exports = mongoose.model('comments', commentSchema);