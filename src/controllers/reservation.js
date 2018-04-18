// Dependencies
const Reservations = require('../models/reservation');
const Events = require('../models/event');
const Users = require('../models/user');

// Export modules
module.exports = {

  getReservations: async (req, res, next) => {
    let reservation = await Reservations.find({ });
    res.status(200).json(reservation);
  },
  getReservationById: async (req, res) => {
    let { reservationId } = req.params;
    let reservation = await Reservations.findById(reservationId);
    res.status(200).json(reservation);
  },
  getReservationByEvent: async (req, res) => {
    let { eventId } = req.params;
    let event = await Events.findById(eventId);
    res.status(200).json(event.reservations);
  },
  getReservationByUser: async (req, res) => {
    let { userId } = req.params;
    let user = await Users.findById(userId);
    res.status(200).json(user.reservations);
  },
  newReservation: async (req, res) => {
    let { userId, eventId } = req.params;
    req.body.userId = userId;
    req.body.eventId = eventId;
    let event = await Events.findById(eventId);
    let user = await Users.findById(userId);
    let reservation = await new Reservations(req.body);
    await reservation.save();
    event.reservations.push(reservation);
    event.capacity = event.capacity - reservation.peopleNumber;
    await event.save();
    user.reservations.push(reservation);
    await user.save();
    res.status(200).json(reservation);
  },
  deleteReservation: async (req, res, next) => {
    let { reservationId } = req.params;
    let reservation = await Comments.findById(reservationId);
    let event = await Events.findById(reservation.eventId);
    let user = await Users.findById(reservation.userId);
    if (event) {
      event.reservations.pop(reservationId);
      event.capacity = event.capacity + reservation.peopleNumber;
      await event.save();
    }
    if (user) {
      user.reservations.pop(reservationId);
      await user.save();
    }
    await Reservations.findByIdAndRemove(reservationId);
    res.status(200).json({ success: true, message: 'Reservacion cancelada exitosamente' })
  }
  
};