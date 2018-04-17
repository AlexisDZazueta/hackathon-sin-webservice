// Dependencies
const router = require('express-promise-router')();

// Get functions
const {
  index
} = require('../controllers/locations');

// Assign functions to path
router.post('/', index);

// Export modules
module.exports = router;