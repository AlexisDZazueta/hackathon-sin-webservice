// Dependencies
const router = require('express-promise-router')();

// Get the paths functions
const {
  getComments,
  getCommentsByEvent,
  newComment,
  deleteComment
} = require('../controllers/comment');

// Assign functions and create paths
router.get('/', getComments);
router.get('/:eventId', getCommentsByEvent);
router.post('/:userId/:eventId', newComment);
router.delete('/:commentId', deleteComment);

// Export modules
module.exports = router;