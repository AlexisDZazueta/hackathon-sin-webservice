// Dependencies
const Events = require('../models/events');
const Users = require('../models/users');

// Export modules
module.exports = {
  // Index function, execute at realize the request
  index: async (req, res, next) => {
    const events = await Events.find({});
    res.status(200).json(events); 
  },
  getEvent: async (req, res, next) => {
    const { eventId } = req.params;
    const event = await Events.findById(eventId);
    res.status(200).json(event);
  },
  newEvent: async (req, res, next) => {
    const newEvent = new Events(req.body);
    const event = await newEvent.save();
    res.status(200).json(event);
  },
  updateEvent: async (req, res, next) => {
    const { eventId } = req.params;
    const newEvent = req.body;
    const oldEvent = await Events.findByIdAndUpdate(eventId, newEvent);
    res.status(200).json({ success: true });
  },
  deleteEvent: async (req, res, next) => {
    const { eventId } = req.params;
    await Events.findByIdAndRemove(eventId);
    res.status(200).json({ success: true });
  },
  newReservationEvent: async (req, res, next) => {
    const { userId, eventId } = req.params;
    const user = await Users.findById(userId);
    const event = await Events.findById(eventId);
    user.events.push(event);
    await user.save();
    res.status(200).json(user);
  }
};