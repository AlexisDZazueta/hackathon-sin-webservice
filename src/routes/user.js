// Dependencies
const router = require('express-promise-router')();

// Get the paths functions
const {
  getUsers,
  getUserById,
  signUp,
  signIn,
  updateUser,
  deleteUser
} = require('../controllers/user');

// Assign functions and create paths
router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/signup', signUp);
router.post('/signin', signIn);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

// Export modules
module.exports = router;