// Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

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
  lastLogin: { type: Date },
  events: [{ type: Schema.Types.ObjectId, ref: 'events' }],
});

// Save the pass hash instead of the pass
userSchema.pre('save', (next) => {
  let user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.pass, salt, null, (err, hash) => {
      if (err) return next(err);
      user.pass = hash;
      next;
    });
  });
});

// Export model schema
module.exports = mongoose.model('users', userSchema);