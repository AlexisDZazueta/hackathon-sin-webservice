// Dependencies
const mongoose = require('mongoose');

// Schema variable
const Schema = mongoose.Schema;

// User model schema
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true },
  from: { type: String, required: true },
  events: [{ type: Schema.Types.ObjectId, ref: 'events' }],
  services: [{ type: Schema.Types.ObjectId, ref: 'services' }],
  activities: [{ type: Schema.Types.ObjectId, ref: 'activities' }]
});

// Export model schema
module.exports = mongoose.model('users', userSchema);