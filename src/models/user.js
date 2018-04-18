// Dependencies
const mongoose = require('mongoose');

// Schema variable
const Schema = mongoose.Schema;

// User model schema
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  pass: { type: String, required: true, select: false },
  profilePicture: { type: String, required: true },
  tel: { type: String, required: true },
  from: { type: String, required: true },
  signupDate: { type: Date, default: Date.now() },
  reservations: [{ type: Schema.Types.ObjectId, ref: 'reservation' }],
});

// Export model schema
module.exports = mongoose.model('user', userSchema);