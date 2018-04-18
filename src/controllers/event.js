// Dependencies
const Events = require('../models/event');

// Export modules
module.exports = {

  // Index function, execute at realize the request
  getEvents: async (req, res, next) => {
    const events = await Events.find({});
    res.status(200).json(events); 
  },
  getEventById: async (req, res, next) => {
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
    await Events.findByIdAndUpdate(eventId, newEvent);
    res.status(200).json({ message: 'Evento modificado exitosamente' });
  },
  deleteEvent: async (req, res, next) => {
    const { eventId } = req.params;
    await Events.findByIdAndRemove(eventId);
    res.status(200).json({ message: 'Evento eliminado correctamente' });
  }

};