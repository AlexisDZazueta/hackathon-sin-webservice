// Dependencies
const mongoose = require('mongoose');
// Schema variable
const Schema = mongoose.Schema;

// Place model schema
const placeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  mainImage: { type: String },
  gallery: [{ type: String }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }]
});

// Export model schema
module.exports = mongoose.model('place', placeSchema);