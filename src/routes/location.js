// Dependencies
const router = require('express-promise-router')();

// Get the paths functions
const {
  index
} = require('../controllers/location');

// Assign functions and create paths
router.post('/', index);

// Export modules
module.exports = router;