// Dependencies
const Places = require('../models/place');

// Export modules
module.exports = {

  // Index function, execute at realize the request
  getPlaces: async (req, res, next) => {
    const places = await Places.find({});
    res.status(200).json(places); 
  },
  getPlaceById: async (req, res, next) => {
    const { placeId } = req.params;
    const place = await Places.findById(placeId);
    res.status(200).json(place);
  },
  newPlace: async (req, res, next) => {
    const newPlace = new Places(req.body);
    const place = await newPlace.save();
    res.status(200).json(place);
  },
  updatePlace: async (req, res, next) => {
    const { placeId } = req.params;
    const newPlace = req.body;
    await Places.findByIdAndUpdate(placeId, newPlace);
    res.status(200).json({ message: 'Sitio modificado exitosamente' });
  },
  deletePlace: async (req, res, next) => {
    const { placeId } = req.params;
    await Places.findByIdAndRemove(placeId);
    res.status(200).json({ message: 'Sitio eliminado correctamente' });
  }

};