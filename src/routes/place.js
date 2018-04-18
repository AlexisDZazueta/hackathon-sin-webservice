// Dependencies
const router = require('express-promise-router')();

// Get the paths functions
const {
  getPlaces,
  getPlaceById,
  newPlace,
  updatePlace,
  deletePlace
} = require('../controllers/place');

// Assign functions and create paths
router.get('/', getPlaces);
router.get('/:placeId', getPlaceById);
router.post('/', newPlace);
router.put('/:placeId', updatePlace);
router.delete('/:placeId', deletePlace);

// Export modules
module.exports = router;