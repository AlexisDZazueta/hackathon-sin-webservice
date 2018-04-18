// Dependencies
const router = require('express-promise-router')();

// Get the paths functions
const {
  getReservations,
  getReservationById,
  getReservationByEvent,
  getReservationByUser,
  newReservation,
  deleteReservation
} = require('../controllers/reservation');

// Assign functions and create paths
router.get('/', getReservations);
router.get('/:reservationId', getReservationById);
router.get('/user/:userId', getReservationByUser);
router.get('/event/:eventId', getReservationByEvent);
router.post('/:userId/:eventId', newReservation);
router.delete('/:reservationId', deleteReservation);

// Export modules
module.exports = router;