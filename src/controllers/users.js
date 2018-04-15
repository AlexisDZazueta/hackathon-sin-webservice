// Dependencies
const Users = require('../models/users');
const Events = require('../models/events');

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
    console.log('Simon ALV');
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
  },
  getUserEventsReservation: async (req, res, next) => {
    const { userId } = req.params;
    const user = await Users.findById(userId);
    res.status(200).json(user);
  },
  newEvent: async (req, res, next) => {
    console.log('Simon ALV');
    const newEvent = new Events(req.body);
    const event = await newEvent.save();
    res.status(200).json(event);
  },
  newEventReservation: async (req, res, next) => {
    const { userId, eventId } = req.params;
    const user = await Users.findById(userId);
    const event = await Events.findById(eventId);
    user.events.push(event);
    await user.save();
    res.status(200).json(event);
  }
};