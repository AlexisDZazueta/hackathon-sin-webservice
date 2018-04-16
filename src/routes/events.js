// Dependencies
const router = require('express-promise-router')();

// Get functions
const {
  index,
  getEvent,
  newEvent,
  updateEvent,
  deleteEvent,
  newReservationEvent
} = require('../controllers/events');

// Assign functions to path
router.get('/', index);
router.get('/:eventId', getEvent);
router.post('/', newEvent);
router.put('/:eventId', updateEvent);
router.delete('/:eventId', deleteEvent);
router.post('/:userId/:eventId', newReservationEvent);

// Export modules
module.exports = router;