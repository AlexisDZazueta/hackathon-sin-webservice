// Dependencies
const router = require('express-promise-router')();

// Get the paths functions
const {
  getEvents,
  getEventById,
  newEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/event');

// Assign functions and create paths
router.get('/', getEvents);
router.get('/:eventId', getEventById);
router.post('/', newEvent);
router.put('/:eventId', updateEvent);
router.delete('/:eventId', deleteEvent);

// Export modules
module.exports = router;