// Dependencies
const router = require('express-promise-router')();

// Get functions
const {
  index,
  newUser,
  getUser,
  updateUser,
  deleteUser,
  getUserEventsReservation,
  newEvent,
  newEventReservation
} = require('../controllers/users');

// Assign functions to path
router.get('/', index);
router.get('/:userId', getUser);
router.post('/user', newUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);
router.get('/:userId/event', getUserEventsReservation);
router.post('/event', newEvent);
router.get('/:userId/:eventId', newEventReservation);

// Export modules
module.exports = router;