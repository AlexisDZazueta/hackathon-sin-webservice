// Create client with a Promise constructor
const distance = require('google-distance-matrix');
const Events = require('../models/events');

// Export modules
module.exports = {
  index: async (req, res, next) => {
    const origins = [req.body.origin];
    const places = new Array();
    const events = await Events.find({ });
    console.log(events);
    events.forEach(event => {
      places.push(event.address);
    });
    const destinations = places;
    console.log(destinations);
    distance.key('AIzaSyDLNTQmMnK-fYFJvJKLL-cR1oEF8yyaDFY');
    distance.units('metric');
    distance.mode(req.body.transport);
    distance.matrix(origins, destinations, (err, distances) => {
      if (err) {
        return console.log(err);
      }
      if (!distances) {
        return console.log('No Distances');
      }
      if (distances.status == 'OK') {
        res.status(200).json(distances);
      }
    });
  }
}