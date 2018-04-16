// Dependencies
const router = require('express-promise-router')();

// Get functions
const {
  index,
  newUser,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/users');

// Assign functions to path
router.get('/', index);
router.get('/:userId', getUser);
router.post('/', newUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

// Export modules
module.exports = router;