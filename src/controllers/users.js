// Dependencies
const Users = require('../models/users');

// Export modules
module.exports = {
  // Index function, execute at realize the request
  index: async (req, res, next) => {
    const users = await Users.find({});
    res.status(200).json(users); 
  },
  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await Users.findById(userId);
    res.status(200).json(user);
  },
  newUser: async (req, res, next) => {
    const newUser = new Users(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
  },
  updateUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await Users.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },
  deleteUser: async (req, res, next) => {
    const { userId } = req.params;
    await Users.findByIdAndRemove(userId);
    res.status(200).json({ success: true });
  }
};